import{n as M}from"./chunks/index.SNRdfqW8.js";import{d as w,o as i,c as b,m as l,h as f,b as v,w as a,J as s,p as t,a as x,e as D,V as E}from"./chunks/framework.Ed2L1a2e.js";import"./chunks/theme.2D4ZGnG9.js";const O={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 384 512"},H=l("path",{d:"M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zM128.4 336c-17.9 0-32.4 12.1-32.4 27c0 15 14.6 27 32.5 27s32.4-12.1 32.4-27s-14.6-27-32.5-27zM224 136V0h-63.6v32h-32V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM95.9 32h32v32h-32zm32.3 384c-33.2 0-58-30.4-51.4-62.9L96.4 256v-32h32v-32h-32v-32h32v-32h-32V96h32V64h32v32h-32v32h32v32h-32v32h32v32h-32v32h22.1c5.7 0 10.7 4.1 11.8 9.7l17.3 87.7c6.4 32.4-18.4 62.6-51.4 62.6z",fill:"currentColor"},null,-1),I=[H],J=w({name:"FileArchive",render:function(d,h){return i(),b("svg",O,I)}}),W={style:{"margin-bottom":"12px"}},G=w({__name:"UserDictMigrator",setup(u){const{NButton:d,NUpload:h,NUploadDragger:g,NText:N,NSpace:k,NIcon:V,NConfigProvider:j,NResult:$,darkTheme:T}=M,c=f(""),_=f(""),y=o=>o.replace(/([bpmfdtnlgkhjqxzcsrywv]{3})([bpmfdtnlgkhjqxzcsrywv])([aeiou]{2})([aeiou])/,"$1$4$3$2").toLowerCase(),z=o=>{const e=o.trim().split(`
`),n=[];let R=0;for(const r of e){if(r.startsWith("#")){n.push(r);continue}try{const[U,q,p]=r.trim().split("	"),[B,P]=q.split(" "),A=y(U.trim()+B)+" ",m=Number(p.replace(/c=(\d+) .+/,"$1"));if(m>=888){const S=p.replace(/c=(\d+) /,`c=${m-887} `),F=[A,P,S].join("	");n.push(F),R+=1}}catch{console.error(`无法识别：${r}`)}}return n.join(`
`)};function C({file:o}){const e=new FileReader;e.addEventListener("load",()=>{const n=e.result;typeof n=="string"&&(c.value=z(n))}),_.value=o.name,e.readAsText(o.file)}function L(){const o=new Blob([c.value],{type:"text/plain"}),e=document.createElement("a");e.download=_.value;const n=window.URL.createObjectURL(o);e.href=n,e.click(),window.URL.revokeObjectURL(n)}return(o,e)=>(i(),v(t(j),{theme:t(T)},{default:a(()=>[s(t(k),{vertical:"",align:"center"},{default:a(()=>[s(t(h),{"directory-dnd":"","custom-request":C,accept:".txt"},{default:a(()=>[s(t(g),null,{default:a(()=>[l("div",W,[s(t(V),{size:"48",depth:3},{default:a(()=>[s(t(J))]),_:1})]),s(t(N),{style:{"font-size":"16px"}},{default:a(()=>[x(" 点击或者拖动文件到该区域来上传 ")]),_:1})]),_:1})]),_:1},8,["accept"]),c.value.length>0?(i(),v(t($),{key:0,status:"success",description:`转换成功，共 ${c.value.split(`
`).length} 条`},{footer:a(()=>[s(t(d),{"on-click":L},{default:a(()=>[x("下载")]),_:1})]),_:1},8,["description"])):D("",!0)]),_:1})]),_:1},8,["theme"]))}}),K=E("",4),Q=l("ol",{start:"3"},[l("li",null,"安装官方的 Rime 输入法前端和声笔 10.0 方案文件，把转换完成的文件放置在同步文件夹，然后再次运行「同步」命令，即可完成迁移。")],-1),te=JSON.parse('{"title":"声笔工具","description":"","frontmatter":{"sidebar":false,"editLink":false,"lastUpdated":false},"headers":[],"relativePath":"sbgj/index.md","filePath":"sbgj/index.md"}'),X={name:"sbgj/index.md"},oe=Object.assign(X,{setup(u){return(d,h)=>(i(),b("div",null,[K,s(G),Q]))}});export{te as __pageData,oe as default};