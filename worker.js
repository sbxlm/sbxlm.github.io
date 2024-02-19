(function () {
  'use strict';

  // src/LambdaWrapper.ts
  function expose(functions, readyPromise) {
    self.onmessage = async (msg) => {
      await readyPromise;
      const { name, args, transferableIndices } = msg.data;
      const transferables = [];
      let data;
      try {
        const workerFunction = functions[name];
        if (typeof workerFunction !== "function") {
          console.error(`${name} is not an exposed worker function`);
          self.close();
          return;
        }
        const result = await workerFunction(...args);
        args.forEach((arg, i) => transferableIndices.includes(i) && transferables.push(arg));
        data = { type: "success", result, transferables };
      } catch (error) {
        const { message, name: name2 } = error;
        data = {
          type: "error",
          error: {
            message,
            name: name2
          }
        };
      }
      self.postMessage(data, transferables);
    };
  }
  function control(name) {
    return (...args) => {
      const data = {
        type: "control",
        name,
        args
      };
      self.postMessage(data);
    };
  }
  function loadWasm(script, options) {
    options = options || {};
    const { url, init } = options;
    return new Promise((resolve) => {
      self.Module = {
        ...options?.Module,
        async onRuntimeInitialized() {
          init && await init();
          resolve(null);
        },
        locateFile(path, prefix) {
          return (url || prefix) + path;
        }
      };
      importScripts((url || "") + script);
    });
  }

  // src/AsyncFS.ts
  function fsOperate(operation, ...args) {
    const result = Module.FS[operation](...args);
    if (operation === "mkdir") {
      return;
    }
    return result;
  }

  const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);

  let idbProxyableTypes;
  let cursorAdvanceMethods;
  // This is a function to prevent it throwing up in node environments.
  function getIdbProxyableTypes() {
      return (idbProxyableTypes ||
          (idbProxyableTypes = [
              IDBDatabase,
              IDBObjectStore,
              IDBIndex,
              IDBCursor,
              IDBTransaction,
          ]));
  }
  // This is a function to prevent it throwing up in node environments.
  function getCursorAdvanceMethods() {
      return (cursorAdvanceMethods ||
          (cursorAdvanceMethods = [
              IDBCursor.prototype.advance,
              IDBCursor.prototype.continue,
              IDBCursor.prototype.continuePrimaryKey,
          ]));
  }
  const transactionDoneMap = new WeakMap();
  const transformCache = new WeakMap();
  const reverseTransformCache = new WeakMap();
  function promisifyRequest(request) {
      const promise = new Promise((resolve, reject) => {
          const unlisten = () => {
              request.removeEventListener('success', success);
              request.removeEventListener('error', error);
          };
          const success = () => {
              resolve(wrap(request.result));
              unlisten();
          };
          const error = () => {
              reject(request.error);
              unlisten();
          };
          request.addEventListener('success', success);
          request.addEventListener('error', error);
      });
      // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
      // is because we create many promises from a single IDBRequest.
      reverseTransformCache.set(promise, request);
      return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
      // Early bail if we've already created a done promise for this transaction.
      if (transactionDoneMap.has(tx))
          return;
      const done = new Promise((resolve, reject) => {
          const unlisten = () => {
              tx.removeEventListener('complete', complete);
              tx.removeEventListener('error', error);
              tx.removeEventListener('abort', error);
          };
          const complete = () => {
              resolve();
              unlisten();
          };
          const error = () => {
              reject(tx.error || new DOMException('AbortError', 'AbortError'));
              unlisten();
          };
          tx.addEventListener('complete', complete);
          tx.addEventListener('error', error);
          tx.addEventListener('abort', error);
      });
      // Cache it for later retrieval.
      transactionDoneMap.set(tx, done);
  }
  let idbProxyTraps = {
      get(target, prop, receiver) {
          if (target instanceof IDBTransaction) {
              // Special handling for transaction.done.
              if (prop === 'done')
                  return transactionDoneMap.get(target);
              // Make tx.store return the only store in the transaction, or undefined if there are many.
              if (prop === 'store') {
                  return receiver.objectStoreNames[1]
                      ? undefined
                      : receiver.objectStore(receiver.objectStoreNames[0]);
              }
          }
          // Else transform whatever we get back.
          return wrap(target[prop]);
      },
      set(target, prop, value) {
          target[prop] = value;
          return true;
      },
      has(target, prop) {
          if (target instanceof IDBTransaction &&
              (prop === 'done' || prop === 'store')) {
              return true;
          }
          return prop in target;
      },
  };
  function replaceTraps(callback) {
      idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
      // Due to expected object equality (which is enforced by the caching in `wrap`), we
      // only create one new func per func.
      // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
      // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
      // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
      // with real promises, so each advance methods returns a new promise for the cursor object, or
      // undefined if the end of the cursor has been reached.
      if (getCursorAdvanceMethods().includes(func)) {
          return function (...args) {
              // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
              // the original object.
              func.apply(unwrap(this), args);
              return wrap(this.request);
          };
      }
      return function (...args) {
          // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
          // the original object.
          return wrap(func.apply(unwrap(this), args));
      };
  }
  function transformCachableValue(value) {
      if (typeof value === 'function')
          return wrapFunction(value);
      // This doesn't return, it just creates a 'done' promise for the transaction,
      // which is later returned for transaction.done (see idbObjectHandler).
      if (value instanceof IDBTransaction)
          cacheDonePromiseForTransaction(value);
      if (instanceOfAny(value, getIdbProxyableTypes()))
          return new Proxy(value, idbProxyTraps);
      // Return the same value back if we're not going to transform it.
      return value;
  }
  function wrap(value) {
      // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
      // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
      if (value instanceof IDBRequest)
          return promisifyRequest(value);
      // If we've already transformed this value before, reuse the transformed value.
      // This is faster, but it also provides object equality.
      if (transformCache.has(value))
          return transformCache.get(value);
      const newValue = transformCachableValue(value);
      // Not all types are transformed.
      // These may be primitive types, so they can't be WeakMap keys.
      if (newValue !== value) {
          transformCache.set(value, newValue);
          reverseTransformCache.set(newValue, value);
      }
      return newValue;
  }
  const unwrap = (value) => reverseTransformCache.get(value);

  /**
   * Open a database.
   *
   * @param name Name of the database.
   * @param version Schema version.
   * @param callbacks Additional callbacks.
   */
  function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
      const request = indexedDB.open(name, version);
      const openPromise = wrap(request);
      if (upgrade) {
          request.addEventListener('upgradeneeded', (event) => {
              upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
          });
      }
      if (blocked) {
          request.addEventListener('blocked', (event) => blocked(
          // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
          event.oldVersion, event.newVersion, event));
      }
      openPromise
          .then((db) => {
          if (terminated)
              db.addEventListener('close', () => terminated());
          if (blocking) {
              db.addEventListener('versionchange', (event) => blocking(event.oldVersion, event.newVersion, event));
          }
      })
          .catch(() => { });
      return openPromise;
  }

  const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
  const writeMethods = ['put', 'add', 'delete', 'clear'];
  const cachedMethods = new Map();
  function getMethod(target, prop) {
      if (!(target instanceof IDBDatabase &&
          !(prop in target) &&
          typeof prop === 'string')) {
          return;
      }
      if (cachedMethods.get(prop))
          return cachedMethods.get(prop);
      const targetFuncName = prop.replace(/FromIndex$/, '');
      const useIndex = prop !== targetFuncName;
      const isWrite = writeMethods.includes(targetFuncName);
      if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
          !(isWrite || readMethods.includes(targetFuncName))) {
          return;
      }
      const method = async function (storeName, ...args) {
          // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
          const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
          let target = tx.store;
          if (useIndex)
              target = target.index(args.shift());
          // Must reject if op rejects.
          // If it's a write operation, must reject if tx.done rejects.
          // Must reject with op rejection first.
          // Must resolve with op value.
          // Must handle both promises (no unhandled rejections)
          return (await Promise.all([
              target[targetFuncName](...args),
              isWrite && tx.done,
          ]))[0];
      };
      cachedMethods.set(prop, method);
      return method;
  }
  replaceTraps((oldTraps) => ({
      ...oldTraps,
      get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
      has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
  }));

  const advanceMethodProps = ['continue', 'continuePrimaryKey', 'advance'];
  const methodMap = {};
  const advanceResults = new WeakMap();
  const ittrProxiedCursorToOriginalProxy = new WeakMap();
  const cursorIteratorTraps = {
      get(target, prop) {
          if (!advanceMethodProps.includes(prop))
              return target[prop];
          let cachedFunc = methodMap[prop];
          if (!cachedFunc) {
              cachedFunc = methodMap[prop] = function (...args) {
                  advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
              };
          }
          return cachedFunc;
      },
  };
  async function* iterate(...args) {
      // tslint:disable-next-line:no-this-assignment
      let cursor = this;
      if (!(cursor instanceof IDBCursor)) {
          cursor = await cursor.openCursor(...args);
      }
      if (!cursor)
          return;
      cursor = cursor;
      const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
      ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
      // Map this double-proxy back to the original, so other cursor methods work.
      reverseTransformCache.set(proxiedCursor, unwrap(cursor));
      while (cursor) {
          yield proxiedCursor;
          // If one of the advancing methods was not called, call continue().
          cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
          advanceResults.delete(proxiedCursor);
      }
  }
  function isIteratorProp(target, prop) {
      return ((prop === Symbol.asyncIterator &&
          instanceOfAny(target, [IDBIndex, IDBObjectStore, IDBCursor])) ||
          (prop === 'iterate' && instanceOfAny(target, [IDBIndex, IDBObjectStore])));
  }
  replaceTraps((oldTraps) => ({
      ...oldTraps,
      get(target, prop, receiver) {
          if (isIteratorProp(target, prop))
              return iterate;
          return oldTraps.get(target, prop, receiver);
      },
      has(target, prop) {
          return isIteratorProp(target, prop) || oldTraps.has(target, prop);
      },
  }));

  const HASH = 'hash';
  const CONTENT = 'content';
  class LazyCache {
      dbPromise;
      constructor(name) {
          this.dbPromise = openDB(name, 1, {
              upgrade(db) {
                  db.createObjectStore(HASH);
                  db.createObjectStore(CONTENT);
              }
          });
      }
      async getDB() {
          return this.dbPromise.catch(() => undefined); // not available in Firefox Private Browsing
      }
      async get(key, hash, url) {
          const db = await this.getDB();
          const storedHash = await db?.get(HASH, key);
          if (storedHash === hash) {
              return db.get(CONTENT, key);
          }
          const response = await fetch(url);
          if (!response.ok) {
              throw new Error(`Fail to download ${key}`);
          }
          const buffer = await response.arrayBuffer();
          await db?.put(CONTENT, buffer, key);
          await db?.put(HASH, hash, key);
          return buffer;
      }
      async invalidate() {
          const db = await this.getDB();
          return db?.clear(HASH);
      }
  }

  var sbjm$3 = "声笔简码";
  var sbfm$3 = "声笔飞码";
  var sbfd$3 = "声笔飞单";
  var sbfx$3 = "声笔飞讯";
  var sbzr$3 = "声笔自然";
  var sbxh$3 = "声笔小鹤";
  var sbpy$3 = "声笔拼音";
  var schemaName = {
  	sbjm: sbjm$3,
  	sbfm: sbfm$3,
  	sbfd: sbfd$3,
  	sbfx: sbfx$3,
  	sbzr: sbzr$3,
  	sbxh: sbxh$3,
  	sbpy: sbpy$3
  };

  var sbjm$2 = {
  };
  var sbfm$2 = {
  };
  var sbfd$2 = {
  	dict: "sbfm"
  };
  var sbfx$2 = {
  };
  var sbzr$2 = {
  };
  var sbxh$2 = {
  };
  var sbpy$2 = {
  };
  var schemaFiles = {
  	sbjm: sbjm$2,
  	sbfm: sbfm$2,
  	sbfd: sbfd$2,
  	sbfx: sbfx$2,
  	sbzr: sbzr$2,
  	sbxh: sbxh$2,
  	sbpy: sbpy$2
  };

  var sbjm$1 = "tansongchen/sbxlm";
  var sbfm$1 = "tansongchen/sbxlm";
  var sbfd$1 = "tansongchen/sbxlm";
  var sbfx$1 = "tansongchen/sbxlm";
  var sbzr$1 = "tansongchen/sbxlm";
  var sbxh$1 = "tansongchen/sbxlm";
  var sbpy$1 = "tansongchen/sbxlm";
  var schemaTarget = {
  	sbjm: sbjm$1,
  	sbfm: sbfm$1,
  	sbfd: sbfd$1,
  	sbfx: sbfx$1,
  	sbzr: sbzr$1,
  	sbxh: sbxh$1,
  	sbpy: sbpy$1
  };

  var sbjm = [
  ];
  var sbfm = [
  ];
  var sbfd = [
  ];
  var sbfx = [
  ];
  var sbzr = [
  ];
  var sbxh = [
  ];
  var sbpy = [
  ];
  var dependencyMap = {
  	sbjm: sbjm,
  	sbfm: sbfm,
  	sbfd: sbfd,
  	sbfx: sbfx,
  	sbzr: sbzr,
  	sbxh: sbxh,
  	sbpy: sbpy
  };

  var targetFiles = {
  	"tansongchen/sbxlm": [
  	{
  		name: "sbfd.schema.yaml",
  		md5: "4302ede00fa2777dba6254a459956a40"
  	},
  	{
  		name: "sbfm.prism.bin",
  		md5: "255ba9683a9db13ac957fc2af72adc17"
  	},
  	{
  		name: "sbfm.reverse.bin",
  		md5: "2e8b59bdd85624e519ac18422c377900"
  	},
  	{
  		name: "sbfm.schema.yaml",
  		md5: "c00512ec8bd83d49f1abad3b8acf8148"
  	},
  	{
  		name: "sbfm.table.bin",
  		md5: "c0a11eff059ffff42bf820883c56f14e"
  	},
  	{
  		name: "sbfx.prism.bin",
  		md5: "19bc12dd6d8bc9b5d0f5826e05394f0d"
  	},
  	{
  		name: "sbfx.reverse.bin",
  		md5: "ca7c348687981e5729071546cd6f9a83"
  	},
  	{
  		name: "sbfx.schema.yaml",
  		md5: "79689bca09da5d45c4e18afd9fa3311b"
  	},
  	{
  		name: "sbfx.table.bin",
  		md5: "68656b44399bc4ca2940bc946fae9a12"
  	},
  	{
  		name: "sbjm.prism.bin",
  		md5: "908911af98402b69b8c5f35795a9689b"
  	},
  	{
  		name: "sbjm.reverse.bin",
  		md5: "1398f6502c6d68a4a2460922f64fbb59"
  	},
  	{
  		name: "sbjm.schema.yaml",
  		md5: "a88279a380f40da3a6aa5fddd80b3ca7"
  	},
  	{
  		name: "sbjm.table.bin",
  		md5: "461f77cee70749590ad9c1ccd9454c16"
  	},
  	{
  		name: "sbpy.prism.bin",
  		md5: "5428f666c06e4afc1e2a3e11e80260e8"
  	},
  	{
  		name: "sbpy.reverse.bin",
  		md5: "eca1194bd1b6033d70f392a8c9e2a598"
  	},
  	{
  		name: "sbpy.schema.yaml",
  		md5: "4c0b247e25d60a450d96ffab890b9afd"
  	},
  	{
  		name: "sbpy.table.bin",
  		md5: "2a5c9748e903fae66c22c1930289b6e5"
  	},
  	{
  		name: "sbxh.prism.bin",
  		md5: "5c6dc409c23b16990264113731b6da8d"
  	},
  	{
  		name: "sbxh.reverse.bin",
  		md5: "89bbfc4b9dfaf5eef26f6fe621319f09"
  	},
  	{
  		name: "sbxh.schema.yaml",
  		md5: "37d8fc75afcce5922f2ac2ffdf5b9805"
  	},
  	{
  		name: "sbxh.table.bin",
  		md5: "3cb2f6296afc5d9b5c234c204b1ae8be"
  	},
  	{
  		name: "sbzr.prism.bin",
  		md5: "56f615906682c822dca46111e3561e4e"
  	},
  	{
  		name: "sbzr.reverse.bin",
  		md5: "723a1c652ba6485a7c5a8d6917531465"
  	},
  	{
  		name: "sbzr.schema.yaml",
  		md5: "31db8a5fbd18cbe97b93688f1fd75240"
  	},
  	{
  		name: "sbzr.table.bin",
  		md5: "656afae8c3598b9ade0dff419905db5d"
  	}
  ]
  };

  const RIME_USER = "/rime";
  const RIME_SHARED = "/usr/share/rime-data";
  function getURL(target, name) {
    return `ime/${target}/${name}`;
  }
  const lazyCache = new LazyCache("ime");
  async function fetchPrebuilt(schemaId) {
    const fetched = [];
    function getFiles(key) {
      if (fetched.includes(key)) {
        return [];
      }
      fetched.push(key);
      const files2 = [];
      for (const dependency of dependencyMap[key] || []) {
        files2.push(...getFiles(dependency));
      }
      const { dict, prism } = schemaFiles[key];
      const dictionary = dict || key;
      const tableBin = `${dictionary}.table.bin`;
      const reverseBin = `${dictionary}.reverse.bin`;
      const prismBin = `${prism || dictionary}.prism.bin`;
      const schemaYaml = `${key}.schema.yaml`;
      const target = schemaTarget[key];
      for (const fileName of [tableBin, reverseBin, prismBin, schemaYaml]) {
        for (const { name, md5 } of targetFiles[target]) {
          if (fileName === name) {
            files2.push({ name, md5, target });
            break;
          }
        }
      }
      return files2;
    }
    const files = getFiles(schemaId);
    await Promise.all(files.map(async ({ name, target, md5 }) => {
      const path = `${RIME_SHARED}/build/${name}`;
      try {
        Module.FS.lookupPath(path);
      } catch (e) {
        const ab = await lazyCache.get(name, md5, getURL(target, name));
        Module.FS.writeFile(path, new Uint8Array(ab));
      }
    }));
  }
  async function setIME(schemaId) {
    if (!deployed) {
      await fetchPrebuilt(schemaId);
    }
    Module.ccall("set_ime", "null", ["string"], [schemaId]);
    return syncUserDirectory("write");
  }
  function syncUserDirectory(direction) {
    let resolve;
    let reject;
    const promise = new Promise((_resolve, _reject) => {
      resolve = _resolve;
      reject = _reject;
    });
    Module.FS.syncfs(direction === "read", (err) => {
      if (err) {
        reject(err);
      }
      resolve(null);
    });
    return promise;
  }
  const readyPromise = loadWasm("rime.js", {
    url: "",
    async init() {
      Module.FS.mkdir(RIME_USER);
      Module.FS.mount(IDBFS, {}, RIME_USER);
      await syncUserDirectory("read");
      Module.ccall("init", "null", [], []);
      for (const [schema, name] of Object.entries(schemaName)) {
        Module.ccall("set_schema_name", "null", ["string", "string"], [schema, name]);
      }
    },
    Module: {
      // Customize for glog
      printErr(message) {
        const match = message.match(/[EWID]\S+ \S+ \S+ (.*)/);
        if (match) {
          ({
            E: console.error,
            W: console.warn,
            I: console.info,
            D: console.debug
          })[message[0]](match[1]);
        } else {
          console.error(message);
        }
      }
    }
  });
  let deployed = false;
  const deployStatus = control("deployStatus");
  globalThis._deployStatus = (status, schemas) => {
    if (status === "success") {
      deployed = true;
    }
    deployStatus(status, schemas);
  };
  function rmStar(path) {
    for (const file of Module.FS.readdir(path)) {
      if (file === "." || file === "..") {
        continue;
      }
      const subPath = `${path}/${file}`;
      const { mode } = Module.FS.lstat(subPath);
      if (Module.FS.isDir(mode)) {
        rmStar(subPath);
        Module.FS.rmdir(subPath);
      } else {
        Module.FS.unlink(subPath);
      }
    }
  }
  async function resetUserDirectory() {
    rmStar(RIME_USER);
    await syncUserDirectory("write");
    deployed = false;
    Module.ccall("reset", "null", [], []);
  }
  expose({
    fsOperate,
    resetUserDirectory,
    setIME,
    setOption(option, value) {
      return Module.ccall("set_option", "null", ["string", "number"], [option, value]);
    },
    setPageSize(size) {
      return Module.ccall("set_page_size", "null", ["number"], [size]);
    },
    deploy() {
      return Module.ccall("deploy", "null", [], []);
    },
    async process(input) {
      const result = JSON.parse(Module.ccall("process", "string", ["string"], [input]));
      if ("committed" in result) {
        await syncUserDirectory("write");
      }
      return result;
    },
    selectCandidateOnCurrentPage(index) {
      return Module.ccall("select_candidate_on_current_page", "string", ["number"], [index]);
    }
  }, readyPromise);

})();
//# sourceMappingURL=worker.js.map
