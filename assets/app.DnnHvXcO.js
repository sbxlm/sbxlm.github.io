import{j as o,iU as p,iV as u,iW as l,iX as c,iY as f,iZ as d,i_ as m,i$ as h,j0 as A,j1 as g,Y as v,d as P,u as j,l as w,z as y,j2 as C,j3 as R,j4 as _,a4 as E}from"./chunks/framework.BuUffW0N.js";import{R as b}from"./chunks/theme.DPikcdcB.js";function r(e){if(e.extends){const t=r(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=r(b),D=P({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=j();return w(()=>{y(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&C(),R(),_(),s.setup&&s.setup(),()=>E(s.Layout)}});async function T(){const e=O(),t=L();t.provide(u,e);const a=l(e.route);return t.provide(c,a),t.component("Content",f),t.component("ClientOnly",d),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:m}),{app:t,router:e,data:a}}function L(){return h(D)}function O(){let e=o,t;return A(a=>{let n=g(a),i=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),i=v(()=>import(n),__vite__mapDeps([]))),o&&(e=!1),i},s.NotFound)}o&&T().then(({app:e,router:t,data:a})=>{t.go().then(()=>{p(t.route,a.site),e.mount("#app")})});export{T as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
