import{C as Xo,$ as nr,d as Ct,o as St,m as Ae,a0 as to,a1 as Ao,a2 as rr,u as Zo,e as et,N as vo,b as po,a3 as ir,U as Tt,a4 as lr,a5 as ar,k as sr,c as cr,a6 as dr,a7 as he,a8 as $o,y as ye,a9 as ur,aa as fr,ab as hr,ac as vr,v as ht,s as pr,i as mr,O as Bo,ad as gr,Q as br,G as Jo,w as yr,D as wr,F as xr,X as Cr,ae as Sr,W as Pt,l as kr,g as zr,af as Rr,n as Nt,A as Pr,B as Ir}from"./chunks/dark.C6Sjjz6f.js";import{h as O,y as He,k as R,hq as Bt,hC as _r,g4 as Or,W as Tr,d as ae,l as tt,hy as Nr,hz as Mr,a2 as d,N as mo,U as rt,r as Fr,O as de,T as go,hp as fe,Y as ge,z as oo,F as bo,hr as Qo,hs as en,o as Qe,c as yo,m as qe,b as Mt,w as Ne,J as Se,p as ve,a as Ee,t as ut,hD as Er,A as Ar,hE as $r,E as Br}from"./chunks/framework.Cr-zI9Ki.js";import{k as tn,X as no,Y as kt,d as _,g as I,b as V,f as Ye,u as _e,L as Lr,h as ce,j as G,e as ze,R as Lt,Z as it,c as Xe,N as on}from"./chunks/Space.CULb8TBY.js";import{d as nn,e as It,b as Kr,i as wo,g as Hr,h as xo,u as rn,j as ro,V as ln,k as an,l as sn,a as io,r as Dr,p as cn,N as jr,f as Wr,c as Lo}from"./chunks/text.CDcb9KhX.js";import{r as Re,N as Vr,a as Ur,m as Gr,k as Co,b as qr}from"./chunks/Input.DUMnzmul.js";import{g as Yr}from"./chunks/theme.pALJWBJG.js";function lt(e,t){let{target:o}=e;for(;o;){if(o.dataset&&o.dataset[t]!==void 0)return!0;o=o.parentElement}return!1}function Xr(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Zr(e){return t=>{t?e.value=t.$el:e.value=null}}function Gt(e){const t=e.filter(o=>o!==void 0);if(t.length!==0)return t.length===1?t[0]:o=>{e.forEach(n=>{n&&n(o)})}}function Jr(e,t,o){if(!t)return e;const n=O(e.value);let r=null;return He(e,i=>{r!==null&&window.clearTimeout(r),i===!0?o&&!o.value?n.value=!0:r=window.setTimeout(()=>{n.value=!0},t):n.value=!1}),n}const Qr={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function ei(e){return`(min-width: ${e}px)`}const at={};function Ko(e=Qr){if(!Xo)return R(()=>[]);if(typeof window.matchMedia!="function")return R(()=>[]);const t=O({}),o=Object.keys(e),n=(r,i)=>{r.matches?t.value[i]=!0:t.value[i]=!1};return o.forEach(r=>{const i=e[r];let l,a;at[i]===void 0?(l=window.matchMedia(ei(i)),l.addEventListener?l.addEventListener("change",s=>{a.forEach(v=>{v(s,r)})}):l.addListener&&l.addListener(s=>{a.forEach(v=>{v(s,r)})}),a=new Set,at[i]={mql:l,cbs:a}):(l=at[i].mql,a=at[i].cbs),a.add(n),l.matches&&a.forEach(s=>{s(l,r)})}),Bt(()=>{o.forEach(r=>{const{cbs:i}=at[e[r]];i.has(n)&&i.delete(n)})}),R(()=>{const{value:r}=t;return o.filter(i=>r[i])})}function ti(e){if(!Xo)return R(()=>{});const t=e!==void 0?Ko(e):Ko();return R(()=>{const{value:o}=t;if(o.length!==0)return o[o.length-1]})}function oi(e={},t){const o=_r({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:r}=e,i=s=>{switch(s.key){case"Control":o.ctrl=!0;break;case"Meta":o.command=!0,o.win=!0;break;case"Shift":o.shift=!0;break;case"Tab":o.tab=!0;break}n!==void 0&&Object.keys(n).forEach(v=>{if(v!==s.key)return;const u=n[v];if(typeof u=="function")u(s);else{const{stop:p=!1,prevent:g=!1}=u;p&&s.stopPropagation(),g&&s.preventDefault(),u.handler(s)}})},l=s=>{switch(s.key){case"Control":o.ctrl=!1;break;case"Meta":o.command=!1,o.win=!1;break;case"Shift":o.shift=!1;break;case"Tab":o.tab=!1;break}r!==void 0&&Object.keys(r).forEach(v=>{if(v!==s.key)return;const u=r[v];if(typeof u=="function")u(s);else{const{stop:p=!1,prevent:g=!1}=u;p&&s.stopPropagation(),g&&s.preventDefault(),u.handler(s)}})},a=()=>{(t===void 0||t.value)&&(St("keydown",document,i),St("keyup",document,l)),t!==void 0&&He(t,s=>{s?(St("keydown",document,i),St("keyup",document,l)):(Ct("keydown",document,i),Ct("keyup",document,l))})};return nr()?(Or(a),Bt(()=>{(t===void 0||t.value)&&(Ct("keydown",document,i),Ct("keyup",document,l))})):a(),Tr(o)}function Ho(e){return e&-e}class ni{constructor(t,o){this.l=t,this.min=o;const n=new Array(t+1);for(let r=0;r<t+1;++r)n[r]=0;this.ft=n}add(t,o){if(o===0)return;const{l:n,ft:r}=this;for(t+=1;t<=n;)r[t]+=o,t+=Ho(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:o,min:n,l:r}=this;if(t>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let i=t*n;for(;t>0;)i+=o[t],t-=Ho(t);return i}getBound(t){let o=0,n=this.l;for(;n>o;){const r=Math.floor((o+n)/2),i=this.sum(r);if(i>t){n=r;continue}else if(i<t){if(o===r)return this.sum(o+1)<=t?o+1:r;o=r}else return r}return o}}let zt;function ri(){return typeof document>"u"?!1:(zt===void 0&&("matchMedia"in window?zt=window.matchMedia("(pointer:coarse)").matches:zt=!1),zt)}let qt;function Do(){return typeof document>"u"?1:(qt===void 0&&(qt="chrome"in window?window.devicePixelRatio:1),qt)}const ii=It(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[It("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[It("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),li=ae({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=tn();ii.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:nn,ssr:t}),tt(()=>{const{defaultScrollIndex:P,defaultScrollKey:y}=e;P!=null?m({index:P}):y!=null&&m({key:y})});let o=!1,n=!1;Nr(()=>{if(o=!1,!n){n=!0;return}m({top:p.value,left:u})}),Mr(()=>{o=!0,n||(n=!0)});const r=R(()=>{const P=new Map,{keyField:y}=e;return e.items.forEach((N,K)=>{P.set(N[y],K)}),P}),i=O(null),l=O(void 0),a=new Map,s=R(()=>{const{items:P,itemSize:y,keyField:N}=e,K=new ni(P.length,y);return P.forEach((j,Z)=>{const E=j[N],U=a.get(E);U!==void 0&&K.add(Z,U)}),K}),v=O(0);let u=0;const p=O(0),g=Ae(()=>Math.max(s.value.getBound(p.value-no(e.paddingTop))-1,0)),b=R(()=>{const{value:P}=l;if(P===void 0)return[];const{items:y,itemSize:N}=e,K=g.value,j=Math.min(K+Math.ceil(P/N+1),y.length-1),Z=[];for(let E=K;E<=j;++E)Z.push(y[E]);return Z}),m=(P,y)=>{if(typeof P=="number"){F(P,y,"auto");return}const{left:N,top:K,index:j,key:Z,position:E,behavior:U,debounce:te=!0}=P;if(N!==void 0||K!==void 0)F(N,K,U);else if(j!==void 0)x(j,U,te);else if(Z!==void 0){const ne=r.value.get(Z);ne!==void 0&&x(ne,U,te)}else E==="bottom"?F(0,Number.MAX_SAFE_INTEGER,U):E==="top"&&F(0,0,U)};let C,S=null;function x(P,y,N){const{value:K}=s,j=K.sum(P)+no(e.paddingTop);if(!N)i.value.scrollTo({left:0,top:j,behavior:y});else{C=P,S!==null&&window.clearTimeout(S),S=window.setTimeout(()=>{C=void 0,S=null},16);const{scrollTop:Z,offsetHeight:E}=i.value;if(j>Z){const U=K.get(P);j+U<=Z+E||i.value.scrollTo({left:0,top:j+U-E,behavior:y})}else i.value.scrollTo({left:0,top:j,behavior:y})}}function F(P,y,N){i.value.scrollTo({left:P,top:y,behavior:N})}function H(P,y){var N,K,j;if(o||e.ignoreItemResize||q(y.target))return;const{value:Z}=s,E=r.value.get(P),U=Z.get(E),te=(j=(K=(N=y.borderBoxSize)===null||N===void 0?void 0:N[0])===null||K===void 0?void 0:K.blockSize)!==null&&j!==void 0?j:y.contentRect.height;if(te===U)return;te-e.itemSize===0?a.delete(P):a.set(P,te-e.itemSize);const B=te-U;if(B===0)return;Z.add(E,B);const f=i.value;if(f!=null){if(C===void 0){const c=Z.sum(E);f.scrollTop>c&&f.scrollBy(0,B)}else if(E<C)f.scrollBy(0,B);else if(E===C){const c=Z.sum(E);te+c>f.scrollTop+f.offsetHeight&&f.scrollBy(0,B)}J()}v.value++}const z=!ri();let T=!1;function W(P){var y;(y=e.onScroll)===null||y===void 0||y.call(e,P),(!z||!T)&&J()}function D(P){var y;if((y=e.onWheel)===null||y===void 0||y.call(e,P),z){const N=i.value;if(N!=null){if(P.deltaX===0&&(N.scrollTop===0&&P.deltaY<=0||N.scrollTop+N.offsetHeight>=N.scrollHeight&&P.deltaY>=0))return;P.preventDefault(),N.scrollTop+=P.deltaY/Do(),N.scrollLeft+=P.deltaX/Do(),J(),T=!0,Kr(()=>{T=!1})}}}function X(P){if(o||q(P.target)||P.contentRect.height===l.value)return;l.value=P.contentRect.height;const{onResize:y}=e;y!==void 0&&y(P)}function J(){const{value:P}=i;P!=null&&(p.value=P.scrollTop,u=P.scrollLeft)}function q(P){let y=P;for(;y!==null;){if(y.style.display==="none")return!0;y=y.parentElement}return!1}return{listHeight:l,listStyle:{overflow:"auto"},keyToIndex:r,itemsStyle:R(()=>{const{itemResizable:P}=e,y=kt(s.value.sum());return v.value,[e.itemsStyle,{boxSizing:"content-box",height:P?"":y,minHeight:P?y:"",paddingTop:kt(e.paddingTop),paddingBottom:kt(e.paddingBottom)}]}),visibleItemsStyle:R(()=>(v.value,{transform:`translateY(${kt(s.value.sum(g.value))})`})),viewportItems:b,listElRef:i,itemsElRef:O(null),scrollTo:m,handleListResize:X,handleListScroll:W,handleListWheel:D,handleItemResize:H}},render(){const{itemResizable:e,keyField:t,keyToIndex:o,visibleItemsTag:n}=this;return d(to,{onResize:this.handleListResize},{default:()=>{var r,i;return d("div",mo(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?d("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[d(n,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(l=>{const a=l[t],s=o.get(a),v=this.$slots.default({item:l,index:s})[0];return e?d(to,{key:a,onResize:u=>this.handleItemResize(a,u)},{default:()=>v}):(v.key=a,v)})})]):(i=(r=this.$slots).empty)===null||i===void 0?void 0:i.call(r)])}})}}),De="v-hidden",ai=It("[v-hidden]",{display:"none!important"}),lo=ae({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const o=O(null),n=O(null);function r(l){const{value:a}=o,{getCounter:s,getTail:v}=e;let u;if(s!==void 0?u=s():u=n.value,!a||!u)return;u.hasAttribute(De)&&u.removeAttribute(De);const{children:p}=a;if(l.showAllItemsBeforeCalculate)for(const H of p)H.hasAttribute(De)&&H.removeAttribute(De);const g=a.offsetWidth,b=[],m=t.tail?v==null?void 0:v():null;let C=m?m.offsetWidth:0,S=!1;const x=a.children.length-(t.tail?1:0);for(let H=0;H<x-1;++H){if(H<0)continue;const z=p[H];if(S){z.hasAttribute(De)||z.setAttribute(De,"");continue}else z.hasAttribute(De)&&z.removeAttribute(De);const T=z.offsetWidth;if(C+=T,b[H]=T,C>g){const{updateCounter:W}=e;for(let D=H;D>=0;--D){const X=x-1-D;W!==void 0?W(X):u.textContent=`${X}`;const J=u.offsetWidth;if(C-=b[D],C+J<=g||D===0){S=!0,H=D-1,m&&(H===-1?(m.style.maxWidth=`${g-J}px`,m.style.boxSizing="border-box"):m.style.maxWidth="");const{onUpdateCount:q}=e;q&&q(X);break}}}}const{onUpdateOverflow:F}=e;S?F!==void 0&&F(!0):(F!==void 0&&F(!1),u.setAttribute(De,""))}const i=tn();return ai.mount({id:"vueuc/overflow",head:!0,anchorMetaName:nn,ssr:i}),tt(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:o,counterRef:n,sync:r}},render(){const{$slots:e}=this;return rt(()=>this.sync({showAllItemsBeforeCalculate:!1})),d("div",{class:"v-overflow",ref:"selfRef"},[Fr(e,"default"),e.counter?e.counter():d("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function dn(e,t){t&&(tt(()=>{const{value:o}=e;o&&Ao.registerHandler(o,t)}),Bt(()=>{const{value:o}=e;o&&Ao.unregisterHandler(o)}))}const si=ae({name:"Checkmark",render(){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},d("g",{fill:"none"},d("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),ci=ae({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),di=ae({name:"Empty",render(){return d("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),d("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),ui=ae({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),fi=ae({props:{onFocus:Function,onBlur:Function},setup(e){return()=>d("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function jo(e){return Array.isArray(e)?e:[e]}const ao={STOP:"STOP"};function un(e,t){const o=t(e);e.children!==void 0&&o!==ao.STOP&&e.children.forEach(n=>un(n,t))}function hi(e,t={}){const{preserveGroup:o=!1}=t,n=[],r=o?l=>{l.isLeaf||(n.push(l.key),i(l.children))}:l=>{l.isLeaf||(l.isGroup||n.push(l.key),i(l.children))};function i(l){l.forEach(r)}return i(e),n}function vi(e,t){const{isLeaf:o}=e;return o!==void 0?o:!t(e)}function pi(e){return e.children}function mi(e){return e.key}function gi(){return!1}function bi(e,t){const{isLeaf:o}=e;return!(o===!1&&!Array.isArray(t(e)))}function yi(e){return e.disabled===!0}function wi(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function Yt(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function Xt(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function xi(e,t){const o=new Set(e);return t.forEach(n=>{o.has(n)||o.add(n)}),Array.from(o)}function Ci(e,t){const o=new Set(e);return t.forEach(n=>{o.has(n)&&o.delete(n)}),Array.from(o)}function Si(e){return(e==null?void 0:e.type)==="group"}function ki(e){const t=new Map;return e.forEach((o,n)=>{t.set(o.key,n)}),o=>{var n;return(n=t.get(o))!==null&&n!==void 0?n:null}}class zi extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Ri(e,t,o,n){return Ft(t.concat(e),o,n,!1)}function Pi(e,t){const o=new Set;return e.forEach(n=>{const r=t.treeNodeMap.get(n);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||o.has(i.key));)o.add(i.key),i=i.parent}}),o}function Ii(e,t,o,n){const r=Ft(t,o,n,!1),i=Ft(e,o,n,!0),l=Pi(e,o),a=[];return r.forEach(s=>{(i.has(s)||l.has(s))&&a.push(s)}),a.forEach(s=>r.delete(s)),r}function Zt(e,t){const{checkedKeys:o,keysToCheck:n,keysToUncheck:r,indeterminateKeys:i,cascade:l,leafOnly:a,checkStrategy:s,allowNotLoaded:v}=e;if(!l)return n!==void 0?{checkedKeys:xi(o,n),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:Ci(o,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(o),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:u}=t;let p;r!==void 0?p=Ii(r,o,t,v):n!==void 0?p=Ri(n,o,t,v):p=Ft(o,t,v,!1);const g=s==="parent",b=s==="child"||a,m=p,C=new Set,S=Math.max.apply(null,Array.from(u.keys()));for(let x=S;x>=0;x-=1){const F=x===0,H=u.get(x);for(const z of H){if(z.isLeaf)continue;const{key:T,shallowLoaded:W}=z;if(b&&W&&z.children.forEach(q=>{!q.disabled&&!q.isLeaf&&q.shallowLoaded&&m.has(q.key)&&m.delete(q.key)}),z.disabled||!W)continue;let D=!0,X=!1,J=!0;for(const q of z.children){const P=q.key;if(!q.disabled){if(J&&(J=!1),m.has(P))X=!0;else if(C.has(P)){X=!0,D=!1;break}else if(D=!1,X)break}}D&&!J?(g&&z.children.forEach(q=>{!q.disabled&&m.has(q.key)&&m.delete(q.key)}),m.add(T)):X&&C.add(T),F&&b&&m.has(T)&&m.delete(T)}}return{checkedKeys:Array.from(m),indeterminateKeys:Array.from(C)}}function Ft(e,t,o,n){const{treeNodeMap:r,getChildren:i}=t,l=new Set,a=new Set(e);return e.forEach(s=>{const v=r.get(s);v!==void 0&&un(v,u=>{if(u.disabled)return ao.STOP;const{key:p}=u;if(!l.has(p)&&(l.add(p),a.add(p),wi(u.rawNode,i))){if(n)return ao.STOP;if(!o)throw new zi}})}),a}function _i(e,{includeGroup:t=!1,includeSelf:o=!0},n){var r;const i=n.treeNodeMap;let l=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const a={keyPath:[],treeNodePath:[],treeNode:l};if(l!=null&&l.ignored)return a.treeNode=null,a;for(;l;)!l.ignored&&(t||!l.isGroup)&&a.treeNodePath.push(l),l=l.parent;return a.treeNodePath.reverse(),o||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(s=>s.key),a}function Oi(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function Ti(e,t){const o=e.siblings,n=o.length,{index:r}=e;return t?o[(r+1)%n]:r===o.length-1?null:o[r+1]}function Wo(e,t,{loop:o=!1,includeDisabled:n=!1}={}){const r=t==="prev"?Ni:Ti,i={reverse:t==="prev"};let l=!1,a=null;function s(v){if(v!==null){if(v===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){a=e;return}}else if((!v.disabled||n)&&!v.ignored&&!v.isGroup){a=v;return}if(v.isGroup){const u=So(v,i);u!==null?a=u:s(r(v,o))}else{const u=r(v,!1);if(u!==null)s(u);else{const p=Mi(v);p!=null&&p.isGroup?s(r(p,o)):o&&s(r(v,!0))}}}}return s(e),a}function Ni(e,t){const o=e.siblings,n=o.length,{index:r}=e;return t?o[(r-1+n)%n]:r===0?null:o[r-1]}function Mi(e){return e.parent}function So(e,t={}){const{reverse:o=!1}=t,{children:n}=e;if(n){const{length:r}=n,i=o?r-1:0,l=o?-1:r,a=o?-1:1;for(let s=i;s!==l;s+=a){const v=n[s];if(!v.disabled&&!v.ignored)if(v.isGroup){const u=So(v,t);if(u!==null)return u}else return v}}return null}const Fi={getChild(){return this.ignored?null:So(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Wo(this,"next",e)},getPrev(e={}){return Wo(this,"prev",e)}};function Ei(e,t){const o=t?new Set(t):void 0,n=[];function r(i){i.forEach(l=>{n.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||o===void 0||o.has(l.key))&&r(l.children)})}return r(e),n}function Ai(e,t){const o=e.key;for(;t;){if(t.key===o)return!0;t=t.parent}return!1}function fn(e,t,o,n,r,i=null,l=0){const a=[];return e.forEach((s,v)=>{var u;const p=Object.create(n);if(p.rawNode=s,p.siblings=a,p.level=l,p.index=v,p.isFirstChild=v===0,p.isLastChild=v+1===e.length,p.parent=i,!p.ignored){const g=r(s);Array.isArray(g)&&(p.children=fn(g,t,o,n,r,p,l+1))}a.push(p),t.set(p.key,p),o.has(l)||o.set(l,[]),(u=o.get(l))===null||u===void 0||u.push(p)}),a}function ft(e,t={}){var o;const n=new Map,r=new Map,{getDisabled:i=yi,getIgnored:l=gi,getIsGroup:a=Si,getKey:s=mi}=t,v=(o=t.getChildren)!==null&&o!==void 0?o:pi,u=t.ignoreEmptyChildren?z=>{const T=v(z);return Array.isArray(T)?T.length?T:null:T}:v,p=Object.assign({get key(){return s(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return vi(this.rawNode,u)},get shallowLoaded(){return bi(this.rawNode,u)},get ignored(){return l(this.rawNode)},contains(z){return Ai(this,z)}},Fi),g=fn(e,n,r,p,u);function b(z){if(z==null)return null;const T=n.get(z);return T&&!T.isGroup&&!T.ignored?T:null}function m(z){if(z==null)return null;const T=n.get(z);return T&&!T.ignored?T:null}function C(z,T){const W=m(z);return W?W.getPrev(T):null}function S(z,T){const W=m(z);return W?W.getNext(T):null}function x(z){const T=m(z);return T?T.getParent():null}function F(z){const T=m(z);return T?T.getChild():null}const H={treeNodes:g,treeNodeMap:n,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:u,getFlattenedNodes(z){return Ei(g,z)},getNode:b,getPrev:C,getNext:S,getParent:x,getChild:F,getFirstAvailableNode(){return Oi(g)},getPath(z,T={}){return _i(z,T,H)},getCheckedKeys(z,T={}){const{cascade:W=!0,leafOnly:D=!1,checkStrategy:X="all",allowNotLoaded:J=!1}=T;return Zt({checkedKeys:Yt(z),indeterminateKeys:Xt(z),cascade:W,leafOnly:D,checkStrategy:X,allowNotLoaded:J},H)},check(z,T,W={}){const{cascade:D=!0,leafOnly:X=!1,checkStrategy:J="all",allowNotLoaded:q=!1}=W;return Zt({checkedKeys:Yt(T),indeterminateKeys:Xt(T),keysToCheck:z==null?[]:jo(z),cascade:D,leafOnly:X,checkStrategy:J,allowNotLoaded:q},H)},uncheck(z,T,W={}){const{cascade:D=!0,leafOnly:X=!1,checkStrategy:J="all",allowNotLoaded:q=!1}=W;return Zt({checkedKeys:Yt(T),indeterminateKeys:Xt(T),keysToUncheck:z==null?[]:jo(z),cascade:D,leafOnly:X,checkStrategy:J,allowNotLoaded:q},H)},getNonLeafKeys(z={}){return hi(g,z)}};return H}const $i=_("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[I("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[V("+",[I("description",`
 margin-top: 8px;
 `)])]),I("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),I("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Bi=Object.assign(Object.assign({},_e.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Li=ae({name:"Empty",props:Bi,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ye(e),n=_e("Empty","-empty",$i,rr,e,t),{localeRef:r}=Zo("Empty"),i=de(Lr,null),l=R(()=>{var u,p,g;return(u=e.description)!==null&&u!==void 0?u:(g=(p=i==null?void 0:i.mergedComponentPropsRef.value)===null||p===void 0?void 0:p.Empty)===null||g===void 0?void 0:g.description}),a=R(()=>{var u,p;return((p=(u=i==null?void 0:i.mergedComponentPropsRef.value)===null||u===void 0?void 0:u.Empty)===null||p===void 0?void 0:p.renderIcon)||(()=>d(di,null))}),s=R(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:p},self:{[ce("iconSize",u)]:g,[ce("fontSize",u)]:b,textColor:m,iconColor:C,extraTextColor:S}}=n.value;return{"--n-icon-size":g,"--n-font-size":b,"--n-bezier":p,"--n-text-color":m,"--n-icon-color":C,"--n-extra-text-color":S}}),v=o?et("empty",R(()=>{let u="";const{size:p}=e;return u+=p[0],u}),s,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:a,localizedDescription:R(()=>l.value||r.value.description),cssVars:o?void 0:s,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:o}=this;return o==null||o(),d("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?d("div",{class:`${t}-empty__icon`},e.icon?e.icon():d(vo,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?d("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?d("div",{class:`${t}-empty__extra`},e.extra()):null)}});function Ki(e,t){return d(go,{name:"fade-in-scale-up-transition"},{default:()=>e?d(vo,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>d(si)}):null})}const Vo=ae({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:o,multipleRef:n,valueSetRef:r,renderLabelRef:i,renderOptionRef:l,labelFieldRef:a,valueFieldRef:s,showCheckmarkRef:v,nodePropsRef:u,handleOptionClick:p,handleOptionMouseEnter:g}=de(wo),b=Ae(()=>{const{value:x}=o;return x?e.tmNode.key===x.key:!1});function m(x){const{tmNode:F}=e;F.disabled||p(x,F)}function C(x){const{tmNode:F}=e;F.disabled||g(x,F)}function S(x){const{tmNode:F}=e,{value:H}=b;F.disabled||H||g(x,F)}return{multiple:n,isGrouped:Ae(()=>{const{tmNode:x}=e,{parent:F}=x;return F&&F.rawNode.type==="group"}),showCheckmark:v,nodeProps:u,isPending:b,isSelected:Ae(()=>{const{value:x}=t,{value:F}=n;if(x===null)return!1;const H=e.tmNode.rawNode[s.value];if(F){const{value:z}=r;return z.has(H)}else return x===H}),labelField:a,renderLabel:i,renderOption:l,handleMouseMove:S,handleMouseEnter:C,handleClick:m}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:o,isPending:n,isGrouped:r,showCheckmark:i,nodeProps:l,renderOption:a,renderLabel:s,handleClick:v,handleMouseEnter:u,handleMouseMove:p}=this,g=Ki(o,e),b=s?[s(t,o),i&&g]:[Re(t[this.labelField],t,o),i&&g],m=l==null?void 0:l(t),C=d("div",Object.assign({},m,{class:[`${e}-base-select-option`,t.class,m==null?void 0:m.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:r,[`${e}-base-select-option--pending`]:n,[`${e}-base-select-option--show-checkmark`]:i}],style:[(m==null?void 0:m.style)||"",t.style||""],onClick:Gt([v,m==null?void 0:m.onClick]),onMouseenter:Gt([u,m==null?void 0:m.onMouseenter]),onMousemove:Gt([p,m==null?void 0:m.onMousemove])}),d("div",{class:`${e}-base-select-option__content`},b));return t.render?t.render({node:C,option:t,selected:o}):a?a({node:C,option:t,selected:o}):C}}),Uo=ae({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:o,nodePropsRef:n}=de(wo);return{labelField:o,nodeProps:n,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:o,nodeProps:n,tmNode:{rawNode:r}}=this,i=n==null?void 0:n(r),l=t?t(r,!1):Re(r[this.labelField],r,!1),a=d("div",Object.assign({},i,{class:[`${e}-base-select-group-header`,i==null?void 0:i.class]}),l);return r.render?r.render({node:a,option:r}):o?o({node:a,option:r,selected:!1}):a}}),Hi=_("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[_("scrollbar",`
 max-height: var(--n-height);
 `),_("virtual-list",`
 max-height: var(--n-height);
 `),_("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[I("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),_("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),_("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),I("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),I("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),I("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),I("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),_("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),_("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[G("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),V("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),V("&:active",`
 color: var(--n-option-text-color-pressed);
 `),G("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),G("pending",[V("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),G("selected",`
 color: var(--n-option-text-color-active);
 `,[V("&::before",`
 background-color: var(--n-option-color-active);
 `),G("pending",[V("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),G("disabled",`
 cursor: not-allowed;
 `,[ze("selected",`
 color: var(--n-option-text-color-disabled);
 `),G("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),I("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[po({enterScale:"0.5"})])])]),Di=ae({name:"InternalSelectMenu",props:Object.assign(Object.assign({},_e.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:o}=Ye(e),n=Lt("InternalSelectMenu",o,t),r=_e("InternalSelectMenu","-internal-select-menu",Hi,ir,e,fe(e,"clsPrefix")),i=O(null),l=O(null),a=O(null),s=R(()=>e.treeMate.getFlattenedNodes()),v=R(()=>ki(s.value)),u=O(null);function p(){const{treeMate:f}=e;let c=null;const{value:L}=e;L===null?c=f.getFirstAvailableNode():(e.multiple?c=f.getNode((L||[])[(L||[]).length-1]):c=f.getNode(L),(!c||c.disabled)&&(c=f.getFirstAvailableNode())),K(c||null)}function g(){const{value:f}=u;f&&!e.treeMate.getNode(f.key)&&(u.value=null)}let b;He(()=>e.show,f=>{f?b=He(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?p():g(),rt(j)):g()},{immediate:!0}):b==null||b()},{immediate:!0}),Bt(()=>{b==null||b()});const m=R(()=>no(r.value.self[ce("optionHeight",e.size)])),C=R(()=>it(r.value.self[ce("padding",e.size)])),S=R(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),x=R(()=>{const f=s.value;return f&&f.length===0});function F(f){const{onToggle:c}=e;c&&c(f)}function H(f){const{onScroll:c}=e;c&&c(f)}function z(f){var c;(c=a.value)===null||c===void 0||c.sync(),H(f)}function T(){var f;(f=a.value)===null||f===void 0||f.sync()}function W(){const{value:f}=u;return f||null}function D(f,c){c.disabled||K(c,!1)}function X(f,c){c.disabled||F(c)}function J(f){var c;lt(f,"action")||(c=e.onKeyup)===null||c===void 0||c.call(e,f)}function q(f){var c;lt(f,"action")||(c=e.onKeydown)===null||c===void 0||c.call(e,f)}function P(f){var c;(c=e.onMousedown)===null||c===void 0||c.call(e,f),!e.focusable&&f.preventDefault()}function y(){const{value:f}=u;f&&K(f.getNext({loop:!0}),!0)}function N(){const{value:f}=u;f&&K(f.getPrev({loop:!0}),!0)}function K(f,c=!1){u.value=f,c&&j()}function j(){var f,c;const L=u.value;if(!L)return;const ee=v.value(L.key);ee!==null&&(e.virtualScroll?(f=l.value)===null||f===void 0||f.scrollTo({index:ee}):(c=a.value)===null||c===void 0||c.scrollTo({index:ee,elSize:m.value}))}function Z(f){var c,L;!((c=i.value)===null||c===void 0)&&c.contains(f.target)&&((L=e.onFocus)===null||L===void 0||L.call(e,f))}function E(f){var c,L;!((c=i.value)===null||c===void 0)&&c.contains(f.relatedTarget)||(L=e.onBlur)===null||L===void 0||L.call(e,f)}ge(wo,{handleOptionMouseEnter:D,handleOptionClick:X,valueSetRef:S,pendingTmNodeRef:u,nodePropsRef:fe(e,"nodeProps"),showCheckmarkRef:fe(e,"showCheckmark"),multipleRef:fe(e,"multiple"),valueRef:fe(e,"value"),renderLabelRef:fe(e,"renderLabel"),renderOptionRef:fe(e,"renderOption"),labelFieldRef:fe(e,"labelField"),valueFieldRef:fe(e,"valueField")}),ge(Hr,i),tt(()=>{const{value:f}=a;f&&f.sync()});const U=R(()=>{const{size:f}=e,{common:{cubicBezierEaseInOut:c},self:{height:L,borderRadius:ee,color:Pe,groupHeaderTextColor:re,actionDividerColor:ke,optionTextColorPressed:w,optionTextColor:Fe,optionTextColorDisabled:Ce,optionTextColorActive:M,optionOpacityDisabled:Y,optionCheckColor:ue,actionTextColor:we,optionColorPending:Ie,optionColorActive:Oe,loadingColor:Te,loadingSize:Ve,optionColorActivePending:Ue,[ce("optionFontSize",f)]:$e,[ce("optionHeight",f)]:Be,[ce("optionPadding",f)]:pe}}=r.value;return{"--n-height":L,"--n-action-divider-color":ke,"--n-action-text-color":we,"--n-bezier":c,"--n-border-radius":ee,"--n-color":Pe,"--n-option-font-size":$e,"--n-group-header-text-color":re,"--n-option-check-color":ue,"--n-option-color-pending":Ie,"--n-option-color-active":Oe,"--n-option-color-active-pending":Ue,"--n-option-height":Be,"--n-option-opacity-disabled":Y,"--n-option-text-color":Fe,"--n-option-text-color-active":M,"--n-option-text-color-disabled":Ce,"--n-option-text-color-pressed":w,"--n-option-padding":pe,"--n-option-padding-left":it(pe,"left"),"--n-option-padding-right":it(pe,"right"),"--n-loading-color":Te,"--n-loading-size":Ve}}),{inlineThemeDisabled:te}=e,ne=te?et("internal-select-menu",R(()=>e.size[0]),U,e):void 0,B={selfRef:i,next:y,prev:N,getPendingTmNode:W};return dn(i,e.onResize),Object.assign({mergedTheme:r,mergedClsPrefix:t,rtlEnabled:n,virtualListRef:l,scrollbarRef:a,itemSize:m,padding:C,flattenedNodes:s,empty:x,virtualListContainer(){const{value:f}=l;return f==null?void 0:f.listElRef},virtualListContent(){const{value:f}=l;return f==null?void 0:f.itemsElRef},doScroll:H,handleFocusin:Z,handleFocusout:E,handleKeyUp:J,handleKeyDown:q,handleMouseDown:P,handleVirtualListResize:T,handleVirtualListScroll:z,cssVars:te?void 0:U,themeClass:ne==null?void 0:ne.themeClass,onRender:ne==null?void 0:ne.onRender},B)},render(){const{$slots:e,virtualScroll:t,clsPrefix:o,mergedTheme:n,themeClass:r,onRender:i}=this;return i==null||i(),d("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,this.rtlEnabled&&`${o}-base-select-menu--rtl`,r,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},Tt(e.header,l=>l&&d("div",{class:`${o}-base-select-menu__header`,"data-header":!0,key:"header"},l)),this.loading?d("div",{class:`${o}-base-select-menu__loading`},d(lr,{clsPrefix:o,strokeWidth:20})):this.empty?d("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},sr(e.empty,()=>[d(Li,{theme:n.peers.Empty,themeOverrides:n.peerOverrides.Empty})])):d(ar,{ref:"scrollbarRef",theme:n.peers.Scrollbar,themeOverrides:n.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?d(li,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:l})=>l.isGroup?d(Uo,{key:l.key,clsPrefix:o,tmNode:l}):l.ignored?null:d(Vo,{clsPrefix:o,key:l.key,tmNode:l})}):d("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(l=>l.isGroup?d(Uo,{key:l.key,clsPrefix:o,tmNode:l}):d(Vo,{clsPrefix:o,key:l.key,tmNode:l})))}),Tt(e.action,l=>l&&[d("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},l),d(fi,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),ji=e=>{const{textColor2:t,primaryColorHover:o,primaryColorPressed:n,primaryColor:r,infoColor:i,successColor:l,warningColor:a,errorColor:s,baseColor:v,borderColor:u,opacityDisabled:p,tagColor:g,closeIconColor:b,closeIconColorHover:m,closeIconColorPressed:C,borderRadiusSmall:S,fontSizeMini:x,fontSizeTiny:F,fontSizeSmall:H,fontSizeMedium:z,heightMini:T,heightTiny:W,heightSmall:D,heightMedium:X,closeColorHover:J,closeColorPressed:q,buttonColor2Hover:P,buttonColor2Pressed:y,fontWeightStrong:N}=e;return Object.assign(Object.assign({},dr),{closeBorderRadius:S,heightTiny:T,heightSmall:W,heightMedium:D,heightLarge:X,borderRadius:S,opacityDisabled:p,fontSizeTiny:x,fontSizeSmall:F,fontSizeMedium:H,fontSizeLarge:z,fontWeightStrong:N,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:v,colorCheckable:"#0000",colorHoverCheckable:P,colorPressedCheckable:y,colorChecked:r,colorCheckedHover:o,colorCheckedPressed:n,border:`1px solid ${u}`,textColor:t,color:g,colorBordered:"rgb(250, 250, 252)",closeIconColor:b,closeIconColorHover:m,closeIconColorPressed:C,closeColorHover:J,closeColorPressed:q,borderPrimary:`1px solid ${he(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:he(r,{alpha:.12}),colorBorderedPrimary:he(r,{alpha:.1}),closeIconColorPrimary:r,closeIconColorHoverPrimary:r,closeIconColorPressedPrimary:r,closeColorHoverPrimary:he(r,{alpha:.12}),closeColorPressedPrimary:he(r,{alpha:.18}),borderInfo:`1px solid ${he(i,{alpha:.3})}`,textColorInfo:i,colorInfo:he(i,{alpha:.12}),colorBorderedInfo:he(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:he(i,{alpha:.12}),closeColorPressedInfo:he(i,{alpha:.18}),borderSuccess:`1px solid ${he(l,{alpha:.3})}`,textColorSuccess:l,colorSuccess:he(l,{alpha:.12}),colorBorderedSuccess:he(l,{alpha:.1}),closeIconColorSuccess:l,closeIconColorHoverSuccess:l,closeIconColorPressedSuccess:l,closeColorHoverSuccess:he(l,{alpha:.12}),closeColorPressedSuccess:he(l,{alpha:.18}),borderWarning:`1px solid ${he(a,{alpha:.35})}`,textColorWarning:a,colorWarning:he(a,{alpha:.15}),colorBorderedWarning:he(a,{alpha:.12}),closeIconColorWarning:a,closeIconColorHoverWarning:a,closeIconColorPressedWarning:a,closeColorHoverWarning:he(a,{alpha:.12}),closeColorPressedWarning:he(a,{alpha:.18}),borderError:`1px solid ${he(s,{alpha:.23})}`,textColorError:s,colorError:he(s,{alpha:.1}),colorBorderedError:he(s,{alpha:.08}),closeIconColorError:s,closeIconColorHoverError:s,closeIconColorPressedError:s,closeColorHoverError:he(s,{alpha:.12}),closeColorPressedError:he(s,{alpha:.18})})},Wi={name:"Tag",common:cr,self:ji},Vi=Wi,Ui={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Gi=_("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[G("strong",`
 font-weight: var(--n-font-weight-strong);
 `),I("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),I("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),I("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),I("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),G("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[I("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),I("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),G("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),G("icon, avatar",[G("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),G("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),G("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[ze("disabled",[V("&:hover","background-color: var(--n-color-hover-checkable);",[ze("checked","color: var(--n-text-color-hover-checkable);")]),V("&:active","background-color: var(--n-color-pressed-checkable);",[ze("checked","color: var(--n-text-color-pressed-checkable);")])]),G("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[ze("disabled",[V("&:hover","background-color: var(--n-color-checked-hover);"),V("&:active","background-color: var(--n-color-checked-pressed);")])])])]),qi=Object.assign(Object.assign(Object.assign({},_e.props),Ui),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Yi=Xe("n-tag"),Jt=ae({name:"Tag",props:qi,setup(e){const t=O(null),{mergedBorderedRef:o,mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=Ye(e),l=_e("Tag","-tag",Gi,Vi,e,n);ge(Yi,{roundRef:fe(e,"round")});function a(b){if(!e.disabled&&e.checkable){const{checked:m,onCheckedChange:C,onUpdateChecked:S,"onUpdate:checked":x}=e;S&&S(!m),x&&x(!m),C&&C(!m)}}function s(b){if(e.triggerClickOnClose||b.stopPropagation(),!e.disabled){const{onClose:m}=e;m&&ye(m,b)}}const v={setTextContent(b){const{value:m}=t;m&&(m.textContent=b)}},u=Lt("Tag",i,n),p=R(()=>{const{type:b,size:m,color:{color:C,textColor:S}={}}=e,{common:{cubicBezierEaseInOut:x},self:{padding:F,closeMargin:H,borderRadius:z,opacityDisabled:T,textColorCheckable:W,textColorHoverCheckable:D,textColorPressedCheckable:X,textColorChecked:J,colorCheckable:q,colorHoverCheckable:P,colorPressedCheckable:y,colorChecked:N,colorCheckedHover:K,colorCheckedPressed:j,closeBorderRadius:Z,fontWeightStrong:E,[ce("colorBordered",b)]:U,[ce("closeSize",m)]:te,[ce("closeIconSize",m)]:ne,[ce("fontSize",m)]:B,[ce("height",m)]:f,[ce("color",b)]:c,[ce("textColor",b)]:L,[ce("border",b)]:ee,[ce("closeIconColor",b)]:Pe,[ce("closeIconColorHover",b)]:re,[ce("closeIconColorPressed",b)]:ke,[ce("closeColorHover",b)]:w,[ce("closeColorPressed",b)]:Fe}}=l.value,Ce=it(H);return{"--n-font-weight-strong":E,"--n-avatar-size-override":`calc(${f} - 8px)`,"--n-bezier":x,"--n-border-radius":z,"--n-border":ee,"--n-close-icon-size":ne,"--n-close-color-pressed":Fe,"--n-close-color-hover":w,"--n-close-border-radius":Z,"--n-close-icon-color":Pe,"--n-close-icon-color-hover":re,"--n-close-icon-color-pressed":ke,"--n-close-icon-color-disabled":Pe,"--n-close-margin-top":Ce.top,"--n-close-margin-right":Ce.right,"--n-close-margin-bottom":Ce.bottom,"--n-close-margin-left":Ce.left,"--n-close-size":te,"--n-color":C||(o.value?U:c),"--n-color-checkable":q,"--n-color-checked":N,"--n-color-checked-hover":K,"--n-color-checked-pressed":j,"--n-color-hover-checkable":P,"--n-color-pressed-checkable":y,"--n-font-size":B,"--n-height":f,"--n-opacity-disabled":T,"--n-padding":F,"--n-text-color":S||L,"--n-text-color-checkable":W,"--n-text-color-checked":J,"--n-text-color-hover-checkable":D,"--n-text-color-pressed-checkable":X}}),g=r?et("tag",R(()=>{let b="";const{type:m,size:C,color:{color:S,textColor:x}={}}=e;return b+=m[0],b+=C[0],S&&(b+=`a${$o(S)}`),x&&(b+=`b${$o(x)}`),o.value&&(b+="c"),b}),p,e):void 0;return Object.assign(Object.assign({},v),{rtlEnabled:u,mergedClsPrefix:n,contentRef:t,mergedBordered:o,handleClick:a,handleCloseClick:s,cssVars:r?void 0:p,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender})},render(){var e,t;const{mergedClsPrefix:o,rtlEnabled:n,closable:r,color:{borderColor:i}={},round:l,onRender:a,$slots:s}=this;a==null||a();const v=Tt(s.avatar,p=>p&&d("div",{class:`${o}-tag__avatar`},p)),u=Tt(s.icon,p=>p&&d("div",{class:`${o}-tag__icon`},p));return d("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:n,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:l,[`${o}-tag--avatar`]:v,[`${o}-tag--icon`]:u,[`${o}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},u||v,d("span",{class:`${o}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&r?d(Vr,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:l,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?d("div",{class:`${o}-tag__border`,style:{borderColor:i}}):null)}}),Xi=V([_("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[_("base-loading",`
 color: var(--n-loading-color);
 `),_("base-selection-tags","min-height: var(--n-height);"),I("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),I("state-border",`
 z-index: 1;
 border-color: #0000;
 `),_("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[I("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),_("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[I("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),_("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[I("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),_("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),_("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[_("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[I("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),I("render-label",`
 color: var(--n-text-color);
 `)]),ze("disabled",[V("&:hover",[I("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),G("focus",[I("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),G("active",[I("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),_("base-selection-label","background-color: var(--n-color-active);"),_("base-selection-tags","background-color: var(--n-color-active);")])]),G("disabled","cursor: not-allowed;",[I("arrow",`
 color: var(--n-arrow-color-disabled);
 `),_("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[_("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),I("render-label",`
 color: var(--n-text-color-disabled);
 `)]),_("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),_("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),_("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[I("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),I("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>G(`${e}-status`,[I("state-border",`border: var(--n-border-${e});`),ze("disabled",[V("&:hover",[I("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),G("active",[I("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),_("base-selection-label",`background-color: var(--n-color-active-${e});`),_("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),G("focus",[I("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),_("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),_("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[V("&:last-child","padding-right: 0;"),_("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[I("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Zi=ae({name:"InternalSelection",props:Object.assign(Object.assign({},_e.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:o}=Ye(e),n=Lt("InternalSelection",o,t),r=O(null),i=O(null),l=O(null),a=O(null),s=O(null),v=O(null),u=O(null),p=O(null),g=O(null),b=O(null),m=O(!1),C=O(!1),S=O(!1),x=_e("InternalSelection","-internal-selection",Xi,ur,e,fe(e,"clsPrefix")),F=R(()=>e.clearable&&!e.disabled&&(S.value||e.active)),H=R(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Re(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),z=R(()=>{const k=e.selectedOption;if(k)return k[e.labelField]}),T=R(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function W(){var k;const{value:A}=r;if(A){const{value:me}=i;me&&(me.style.width=`${A.offsetWidth}px`,e.maxTagCount!=="responsive"&&((k=g.value)===null||k===void 0||k.sync({showAllItemsBeforeCalculate:!1})))}}function D(){const{value:k}=b;k&&(k.style.display="none")}function X(){const{value:k}=b;k&&(k.style.display="inline-block")}He(fe(e,"active"),k=>{k||D()}),He(fe(e,"pattern"),()=>{e.multiple&&rt(W)});function J(k){const{onFocus:A}=e;A&&A(k)}function q(k){const{onBlur:A}=e;A&&A(k)}function P(k){const{onDeleteOption:A}=e;A&&A(k)}function y(k){const{onClear:A}=e;A&&A(k)}function N(k){const{onPatternInput:A}=e;A&&A(k)}function K(k){var A;(!k.relatedTarget||!(!((A=l.value)===null||A===void 0)&&A.contains(k.relatedTarget)))&&J(k)}function j(k){var A;!((A=l.value)===null||A===void 0)&&A.contains(k.relatedTarget)||q(k)}function Z(k){y(k)}function E(){S.value=!0}function U(){S.value=!1}function te(k){!e.active||!e.filterable||k.target!==i.value&&k.preventDefault()}function ne(k){P(k)}function B(k){if(k.key==="Backspace"&&!f.value&&!e.pattern.length){const{selectedOptions:A}=e;A!=null&&A.length&&ne(A[A.length-1])}}const f=O(!1);let c=null;function L(k){const{value:A}=r;if(A){const me=k.target.value;A.textContent=me,W()}e.ignoreComposition&&f.value?c=k:N(k)}function ee(){f.value=!0}function Pe(){f.value=!1,e.ignoreComposition&&N(c),c=null}function re(k){var A;C.value=!0,(A=e.onPatternFocus)===null||A===void 0||A.call(e,k)}function ke(k){var A;C.value=!1,(A=e.onPatternBlur)===null||A===void 0||A.call(e,k)}function w(){var k,A;if(e.filterable)C.value=!1,(k=v.value)===null||k===void 0||k.blur(),(A=i.value)===null||A===void 0||A.blur();else if(e.multiple){const{value:me}=a;me==null||me.blur()}else{const{value:me}=s;me==null||me.blur()}}function Fe(){var k,A,me;e.filterable?(C.value=!1,(k=v.value)===null||k===void 0||k.focus()):e.multiple?(A=a.value)===null||A===void 0||A.focus():(me=s.value)===null||me===void 0||me.focus()}function Ce(){const{value:k}=i;k&&(X(),k.focus())}function M(){const{value:k}=i;k&&k.blur()}function Y(k){const{value:A}=u;A&&A.setTextContent(`+${k}`)}function ue(){const{value:k}=p;return k}function we(){return i.value}let Ie=null;function Oe(){Ie!==null&&window.clearTimeout(Ie)}function Te(){e.active||(Oe(),Ie=window.setTimeout(()=>{T.value&&(m.value=!0)},100))}function Ve(){Oe()}function Ue(k){k||(Oe(),m.value=!1)}He(T,k=>{k||(m.value=!1)}),tt(()=>{oo(()=>{const k=v.value;k&&(e.disabled?k.removeAttribute("tabindex"):k.tabIndex=C.value?-1:0)})}),dn(l,e.onResize);const{inlineThemeDisabled:$e}=e,Be=R(()=>{const{size:k}=e,{common:{cubicBezierEaseInOut:A},self:{borderRadius:me,color:Dt,placeholderColor:jt,textColor:mt,paddingSingle:gt,paddingMultiple:bt,caretColor:Wt,colorDisabled:Vt,textColorDisabled:yt,placeholderColorDisabled:Ge,colorActive:h,boxShadowFocus:$,boxShadowActive:Q,boxShadowHover:se,border:ie,borderFocus:oe,borderHover:le,borderActive:xe,arrowColor:Le,arrowColorDisabled:Ut,loadingColor:Mn,colorActiveWarning:Fn,boxShadowFocusWarning:En,boxShadowActiveWarning:An,boxShadowHoverWarning:$n,borderWarning:Bn,borderFocusWarning:Ln,borderHoverWarning:Kn,borderActiveWarning:Hn,colorActiveError:Dn,boxShadowFocusError:jn,boxShadowActiveError:Wn,boxShadowHoverError:Vn,borderError:Un,borderFocusError:Gn,borderHoverError:qn,borderActiveError:Yn,clearColor:Xn,clearColorHover:Zn,clearColorPressed:Jn,clearSize:Qn,arrowSize:er,[ce("height",k)]:tr,[ce("fontSize",k)]:or}}=x.value,wt=it(gt),xt=it(bt);return{"--n-bezier":A,"--n-border":ie,"--n-border-active":xe,"--n-border-focus":oe,"--n-border-hover":le,"--n-border-radius":me,"--n-box-shadow-active":Q,"--n-box-shadow-focus":$,"--n-box-shadow-hover":se,"--n-caret-color":Wt,"--n-color":Dt,"--n-color-active":h,"--n-color-disabled":Vt,"--n-font-size":or,"--n-height":tr,"--n-padding-single-top":wt.top,"--n-padding-multiple-top":xt.top,"--n-padding-single-right":wt.right,"--n-padding-multiple-right":xt.right,"--n-padding-single-left":wt.left,"--n-padding-multiple-left":xt.left,"--n-padding-single-bottom":wt.bottom,"--n-padding-multiple-bottom":xt.bottom,"--n-placeholder-color":jt,"--n-placeholder-color-disabled":Ge,"--n-text-color":mt,"--n-text-color-disabled":yt,"--n-arrow-color":Le,"--n-arrow-color-disabled":Ut,"--n-loading-color":Mn,"--n-color-active-warning":Fn,"--n-box-shadow-focus-warning":En,"--n-box-shadow-active-warning":An,"--n-box-shadow-hover-warning":$n,"--n-border-warning":Bn,"--n-border-focus-warning":Ln,"--n-border-hover-warning":Kn,"--n-border-active-warning":Hn,"--n-color-active-error":Dn,"--n-box-shadow-focus-error":jn,"--n-box-shadow-active-error":Wn,"--n-box-shadow-hover-error":Vn,"--n-border-error":Un,"--n-border-focus-error":Gn,"--n-border-hover-error":qn,"--n-border-active-error":Yn,"--n-clear-size":Qn,"--n-clear-color":Xn,"--n-clear-color-hover":Zn,"--n-clear-color-pressed":Jn,"--n-arrow-size":er}}),pe=$e?et("internal-selection",R(()=>e.size[0]),Be,e):void 0;return{mergedTheme:x,mergedClearable:F,mergedClsPrefix:t,rtlEnabled:n,patternInputFocused:C,filterablePlaceholder:H,label:z,selected:T,showTagsPanel:m,isComposing:f,counterRef:u,counterWrapperRef:p,patternInputMirrorRef:r,patternInputRef:i,selfRef:l,multipleElRef:a,singleElRef:s,patternInputWrapperRef:v,overflowRef:g,inputTagElRef:b,handleMouseDown:te,handleFocusin:K,handleClear:Z,handleMouseEnter:E,handleMouseLeave:U,handleDeleteOption:ne,handlePatternKeyDown:B,handlePatternInputInput:L,handlePatternInputBlur:ke,handlePatternInputFocus:re,handleMouseEnterCounter:Te,handleMouseLeaveCounter:Ve,handleFocusout:j,handleCompositionEnd:Pe,handleCompositionStart:ee,onPopoverUpdateShow:Ue,focus:Fe,focusInput:Ce,blur:w,blurInput:M,updateCounter:Y,getCounter:ue,getTail:we,renderLabel:e.renderLabel,cssVars:$e?void 0:Be,themeClass:pe==null?void 0:pe.themeClass,onRender:pe==null?void 0:pe.onRender}},render(){const{status:e,multiple:t,size:o,disabled:n,filterable:r,maxTagCount:i,bordered:l,clsPrefix:a,ellipsisTagPopoverProps:s,onRender:v,renderTag:u,renderLabel:p}=this;v==null||v();const g=i==="responsive",b=typeof i=="number",m=g||b,C=d(fr,null,{default:()=>d(Ur,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var x,F;return(F=(x=this.$slots).arrow)===null||F===void 0?void 0:F.call(x)}})});let S;if(t){const{labelField:x}=this,F=N=>d("div",{class:`${a}-base-selection-tag-wrapper`,key:N.value},u?u({option:N,handleClose:()=>{this.handleDeleteOption(N)}}):d(Jt,{size:o,closable:!N.disabled,disabled:n,onClose:()=>{this.handleDeleteOption(N)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>p?p(N,!0):Re(N[x],N,!0)})),H=()=>(b?this.selectedOptions.slice(0,i):this.selectedOptions).map(F),z=r?d("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:n,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),d("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,T=g?()=>d("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},d(Jt,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:n})):void 0;let W;if(b){const N=this.selectedOptions.length-i;N>0&&(W=d("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},d(Jt,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:n},{default:()=>`+${N}`})))}const D=g?r?d(lo,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:H,counter:T,tail:()=>z}):d(lo,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:H,counter:T}):b&&W?H().concat(W):H(),X=m?()=>d("div",{class:`${a}-base-selection-popover`},g?H():this.selectedOptions.map(F)):void 0,J=m?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},s):null,P=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},d("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,y=r?d("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},D,g?null:z,C):d("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:n?void 0:0},D,C);S=d(bo,null,m?d(xo,Object.assign({},J,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>y,default:X}):y,P)}else if(r){const x=this.pattern||this.isComposing,F=this.active?!x:!this.selected,H=this.active?!1:this.selected;S=d("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:n,disabled:n,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),H?d("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},d("div",{class:`${a}-base-selection-overlay__wrapper`},u?u({option:this.selectedOption,handleClose:()=>{}}):p?p(this.selectedOption,!0):Re(this.label,this.selectedOption,!0))):null,F?d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,C)}else S=d("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?d("div",{class:`${a}-base-selection-input`,title:Xr(this.label),key:"input"},d("div",{class:`${a}-base-selection-input__content`},u?u({option:this.selectedOption,handleClose:()=>{}}):p?p(this.selectedOption,!0):Re(this.label,this.selectedOption,!0))):d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),C);return d("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},S,l?d("div",{class:`${a}-base-selection__border`}):null,l?d("div",{class:`${a}-base-selection__state-border`}):null)}});function Et(e){return e.type==="group"}function hn(e){return e.type==="ignored"}function Qt(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Ji(e,t){return{getIsGroup:Et,getIgnored:hn,getKey(n){return Et(n)?n.name||n.key||"key-required":n[e]},getChildren(n){return n[t]}}}function Qi(e,t,o,n){if(!t)return e;function r(i){if(!Array.isArray(i))return[];const l=[];for(const a of i)if(Et(a)){const s=r(a[n]);s.length&&l.push(Object.assign({},a,{[n]:s}))}else{if(hn(a))continue;t(o,a)&&l.push(a)}return l}return r(e)}function el(e,t,o){const n=new Map;return e.forEach(r=>{Et(r)?r[o].forEach(i=>{n.set(i[t],i)}):n.set(r[t],r)}),n}const be="0!important",vn="-1px!important";function ot(e){return G(e+"-type",[V("& +",[_("button",{},[G(e+"-type",[I("border",{borderLeftWidth:be}),I("state-border",{left:vn})])])])])}function nt(e){return G(e+"-type",[V("& +",[_("button",[G(e+"-type",[I("border",{borderTopWidth:be}),I("state-border",{top:vn})])])])])}const tl=_("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[ze("vertical",{flexDirection:"row"},[ze("rtl",[_("button",[V("&:first-child:not(:last-child)",`
 margin-right: ${be};
 border-top-right-radius: ${be};
 border-bottom-right-radius: ${be};
 `),V("&:last-child:not(:first-child)",`
 margin-left: ${be};
 border-top-left-radius: ${be};
 border-bottom-left-radius: ${be};
 `),V("&:not(:first-child):not(:last-child)",`
 margin-left: ${be};
 margin-right: ${be};
 border-radius: ${be};
 `),ot("default"),G("ghost",[ot("primary"),ot("info"),ot("success"),ot("warning"),ot("error")])])])]),G("vertical",{flexDirection:"column"},[_("button",[V("&:first-child:not(:last-child)",`
 margin-bottom: ${be};
 margin-left: ${be};
 margin-right: ${be};
 border-bottom-left-radius: ${be};
 border-bottom-right-radius: ${be};
 `),V("&:last-child:not(:first-child)",`
 margin-top: ${be};
 margin-left: ${be};
 margin-right: ${be};
 border-top-left-radius: ${be};
 border-top-right-radius: ${be};
 `),V("&:not(:first-child):not(:last-child)",`
 margin: ${be};
 border-radius: ${be};
 `),nt("default"),G("ghost",[nt("primary"),nt("info"),nt("success"),nt("warning"),nt("error")])])])]),ol={size:{type:String,default:void 0},vertical:Boolean},nl=ae({name:"ButtonGroup",props:ol,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:o}=Ye(e);return hr("-button-group",tl,t),ge(vr,e),{rtlEnabled:Lt("ButtonGroup",o,t),mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return d("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),rl=V([_("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),_("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[po({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),il=Object.assign(Object.assign({},_e.props),{to:ro.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),ll=ae({name:"Select",props:il,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:o,namespaceRef:n,inlineThemeDisabled:r}=Ye(e),i=_e("Select","-select",rl,gr,e,t),l=O(e.defaultValue),a=fe(e,"value"),s=ht(a,l),v=O(!1),u=O(""),p=R(()=>{const{valueField:h,childrenField:$}=e,Q=Ji(h,$);return ft(y.value,Q)}),g=R(()=>el(q.value,e.valueField,e.childrenField)),b=O(!1),m=ht(fe(e,"show"),b),C=O(null),S=O(null),x=O(null),{localeRef:F}=Zo("Select"),H=R(()=>{var h;return(h=e.placeholder)!==null&&h!==void 0?h:F.value.placeholder}),z=rn(e,["items","options"]),T=[],W=O([]),D=O([]),X=O(new Map),J=R(()=>{const{fallbackOption:h}=e;if(h===void 0){const{labelField:$,valueField:Q}=e;return se=>({[$]:String(se),[Q]:se})}return h===!1?!1:$=>Object.assign(h($),{value:$})}),q=R(()=>D.value.concat(W.value).concat(z.value)),P=R(()=>{const{filter:h}=e;if(h)return h;const{labelField:$,valueField:Q}=e;return(se,ie)=>{if(!ie)return!1;const oe=ie[$];if(typeof oe=="string")return Qt(se,oe);const le=ie[Q];return typeof le=="string"?Qt(se,le):typeof le=="number"?Qt(se,String(le)):!1}}),y=R(()=>{if(e.remote)return z.value;{const{value:h}=q,{value:$}=u;return!$.length||!e.filterable?h:Qi(h,P.value,$,e.childrenField)}});function N(h){const $=e.remote,{value:Q}=X,{value:se}=g,{value:ie}=J,oe=[];return h.forEach(le=>{if(se.has(le))oe.push(se.get(le));else if($&&Q.has(le))oe.push(Q.get(le));else if(ie){const xe=ie(le);xe&&oe.push(xe)}}),oe}const K=R(()=>{if(e.multiple){const{value:h}=s;return Array.isArray(h)?N(h):[]}return null}),j=R(()=>{const{value:h}=s;return!e.multiple&&!Array.isArray(h)?h===null?null:N([h])[0]||null:null}),Z=pr(e),{mergedSizeRef:E,mergedDisabledRef:U,mergedStatusRef:te}=Z;function ne(h,$){const{onChange:Q,"onUpdate:value":se,onUpdateValue:ie}=e,{nTriggerFormChange:oe,nTriggerFormInput:le}=Z;Q&&ye(Q,h,$),ie&&ye(ie,h,$),se&&ye(se,h,$),l.value=h,oe(),le()}function B(h){const{onBlur:$}=e,{nTriggerFormBlur:Q}=Z;$&&ye($,h),Q()}function f(){const{onClear:h}=e;h&&ye(h)}function c(h){const{onFocus:$,showOnFocus:Q}=e,{nTriggerFormFocus:se}=Z;$&&ye($,h),se(),Q&&ke()}function L(h){const{onSearch:$}=e;$&&ye($,h)}function ee(h){const{onScroll:$}=e;$&&ye($,h)}function Pe(){var h;const{remote:$,multiple:Q}=e;if($){const{value:se}=X;if(Q){const{valueField:ie}=e;(h=K.value)===null||h===void 0||h.forEach(oe=>{se.set(oe[ie],oe)})}else{const ie=j.value;ie&&se.set(ie[e.valueField],ie)}}}function re(h){const{onUpdateShow:$,"onUpdate:show":Q}=e;$&&ye($,h),Q&&ye(Q,h),b.value=h}function ke(){U.value||(re(!0),b.value=!0,e.filterable&&bt())}function w(){re(!1)}function Fe(){u.value="",D.value=T}const Ce=O(!1);function M(){e.filterable&&(Ce.value=!0)}function Y(){e.filterable&&(Ce.value=!1,m.value||Fe())}function ue(){U.value||(m.value?e.filterable?bt():w():ke())}function we(h){var $,Q;!((Q=($=x.value)===null||$===void 0?void 0:$.selfRef)===null||Q===void 0)&&Q.contains(h.relatedTarget)||(v.value=!1,B(h),w())}function Ie(h){c(h),v.value=!0}function Oe(h){v.value=!0}function Te(h){var $;!(($=C.value)===null||$===void 0)&&$.$el.contains(h.relatedTarget)||(v.value=!1,B(h),w())}function Ve(){var h;(h=C.value)===null||h===void 0||h.focus(),w()}function Ue(h){var $;m.value&&(!(($=C.value)===null||$===void 0)&&$.$el.contains(br(h))||w())}function $e(h){if(!Array.isArray(h))return[];if(J.value)return Array.from(h);{const{remote:$}=e,{value:Q}=g;if($){const{value:se}=X;return h.filter(ie=>Q.has(ie)||se.has(ie))}else return h.filter(se=>Q.has(se))}}function Be(h){pe(h.rawNode)}function pe(h){if(U.value)return;const{tag:$,remote:Q,clearFilterAfterSelect:se,valueField:ie}=e;if($&&!Q){const{value:oe}=D,le=oe[0]||null;if(le){const xe=W.value;xe.length?xe.push(le):W.value=[le],D.value=T}}if(Q&&X.value.set(h[ie],h),e.multiple){const oe=$e(s.value),le=oe.findIndex(xe=>xe===h[ie]);if(~le){if(oe.splice(le,1),$&&!Q){const xe=k(h[ie]);~xe&&(W.value.splice(xe,1),se&&(u.value=""))}}else oe.push(h[ie]),se&&(u.value="");ne(oe,N(oe))}else{if($&&!Q){const oe=k(h[ie]);~oe?W.value=[W.value[oe]]:W.value=T}gt(),w(),ne(h[ie],h)}}function k(h){return W.value.findIndex(Q=>Q[e.valueField]===h)}function A(h){m.value||ke();const{value:$}=h.target;u.value=$;const{tag:Q,remote:se}=e;if(L($),Q&&!se){if(!$){D.value=T;return}const{onCreate:ie}=e,oe=ie?ie($):{[e.labelField]:$,[e.valueField]:$},{valueField:le,labelField:xe}=e;z.value.some(Le=>Le[le]===oe[le]||Le[xe]===oe[xe])||W.value.some(Le=>Le[le]===oe[le]||Le[xe]===oe[xe])?D.value=T:D.value=[oe]}}function me(h){h.stopPropagation();const{multiple:$}=e;!$&&e.filterable&&w(),f(),$?ne([],[]):ne(null,null)}function Dt(h){!lt(h,"action")&&!lt(h,"empty")&&h.preventDefault()}function jt(h){ee(h)}function mt(h){var $,Q,se,ie,oe;if(!e.keyboard){h.preventDefault();return}switch(h.key){case" ":if(e.filterable)break;h.preventDefault();case"Enter":if(!(!(($=C.value)===null||$===void 0)&&$.isComposing)){if(m.value){const le=(Q=x.value)===null||Q===void 0?void 0:Q.getPendingTmNode();le?Be(le):e.filterable||(w(),gt())}else if(ke(),e.tag&&Ce.value){const le=D.value[0];if(le){const xe=le[e.valueField],{value:Le}=s;e.multiple&&Array.isArray(Le)&&Le.some(Ut=>Ut===xe)||pe(le)}}}h.preventDefault();break;case"ArrowUp":if(h.preventDefault(),e.loading)return;m.value&&((se=x.value)===null||se===void 0||se.prev());break;case"ArrowDown":if(h.preventDefault(),e.loading)return;m.value?(ie=x.value)===null||ie===void 0||ie.next():ke();break;case"Escape":m.value&&(Gr(h),w()),(oe=C.value)===null||oe===void 0||oe.focus();break}}function gt(){var h;(h=C.value)===null||h===void 0||h.focus()}function bt(){var h;(h=C.value)===null||h===void 0||h.focusInput()}function Wt(){var h;m.value&&((h=S.value)===null||h===void 0||h.syncPosition())}Pe(),He(fe(e,"options"),Pe);const Vt={focus:()=>{var h;(h=C.value)===null||h===void 0||h.focus()},focusInput:()=>{var h;(h=C.value)===null||h===void 0||h.focusInput()},blur:()=>{var h;(h=C.value)===null||h===void 0||h.blur()},blurInput:()=>{var h;(h=C.value)===null||h===void 0||h.blurInput()}},yt=R(()=>{const{self:{menuBoxShadow:h}}=i.value;return{"--n-menu-box-shadow":h}}),Ge=r?et("select",void 0,yt,e):void 0;return Object.assign(Object.assign({},Vt),{mergedStatus:te,mergedClsPrefix:t,mergedBordered:o,namespace:n,treeMate:p,isMounted:mr(),triggerRef:C,menuRef:x,pattern:u,uncontrolledShow:b,mergedShow:m,adjustedTo:ro(e),uncontrolledValue:l,mergedValue:s,followerRef:S,localizedPlaceholder:H,selectedOption:j,selectedOptions:K,mergedSize:E,mergedDisabled:U,focused:v,activeWithoutMenuOpen:Ce,inlineThemeDisabled:r,onTriggerInputFocus:M,onTriggerInputBlur:Y,handleTriggerOrMenuResize:Wt,handleMenuFocus:Oe,handleMenuBlur:Te,handleMenuTabOut:Ve,handleTriggerClick:ue,handleToggle:Be,handleDeleteOption:pe,handlePatternInput:A,handleClear:me,handleTriggerBlur:we,handleTriggerFocus:Ie,handleKeydown:mt,handleMenuAfterLeave:Fe,handleMenuClickOutside:Ue,handleMenuScroll:jt,handleMenuKeydown:mt,handleMenuMousedown:Dt,mergedTheme:i,cssVars:r?void 0:yt,themeClass:Ge==null?void 0:Ge.themeClass,onRender:Ge==null?void 0:Ge.onRender})},render(){return d("div",{class:`${this.mergedClsPrefix}-select`},d(ln,null,{default:()=>[d(an,null,{default:()=>d(Zi,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),d(sn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===ro.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>d(go,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Qo(d(Di,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var n,r;return[(r=(n=this.$slots).empty)===null||r===void 0?void 0:r.call(n)]},header:()=>{var n,r;return[(r=(n=this.$slots).header)===null||r===void 0?void 0:r.call(n)]},action:()=>{var n,r;return[(r=(n=this.$slots).action)===null||r===void 0?void 0:r.call(n)]}}),this.displayDirective==="show"?[[en,this.mergedShow],[Bo,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Bo,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),pn=ae({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),ko=Xe("n-dropdown-menu"),Kt=Xe("n-dropdown"),Go=Xe("n-dropdown-option");function so(e,t){return e.type==="submenu"||e.type===void 0&&e[t]!==void 0}function al(e){return e.type==="group"}function mn(e){return e.type==="divider"}function sl(e){return e.type==="render"}const gn=ae({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const t=de(Kt),{hoverKeyRef:o,keyboardKeyRef:n,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:l,animatedRef:a,mergedShowRef:s,renderLabelRef:v,renderIconRef:u,labelFieldRef:p,childrenFieldRef:g,renderOptionRef:b,nodePropsRef:m,menuPropsRef:C}=t,S=de(Go,null),x=de(ko),F=de(Jo),H=R(()=>e.tmNode.rawNode),z=R(()=>{const{value:E}=g;return so(e.tmNode.rawNode,E)}),T=R(()=>{const{disabled:E}=e.tmNode;return E}),W=R(()=>{if(!z.value)return!1;const{key:E,disabled:U}=e.tmNode;if(U)return!1;const{value:te}=o,{value:ne}=n,{value:B}=r,{value:f}=i;return te!==null?f.includes(E):ne!==null?f.includes(E)&&f[f.length-1]!==E:B!==null?f.includes(E):!1}),D=R(()=>n.value===null&&!a.value),X=Jr(W,300,D),J=R(()=>!!(S!=null&&S.enteringSubmenuRef.value)),q=O(!1);ge(Go,{enteringSubmenuRef:q});function P(){q.value=!0}function y(){q.value=!1}function N(){const{parentKey:E,tmNode:U}=e;U.disabled||s.value&&(r.value=E,n.value=null,o.value=U.key)}function K(){const{tmNode:E}=e;E.disabled||s.value&&o.value!==E.key&&N()}function j(E){if(e.tmNode.disabled||!s.value)return;const{relatedTarget:U}=E;U&&!lt({target:U},"dropdownOption")&&!lt({target:U},"scrollbarRail")&&(o.value=null)}function Z(){const{value:E}=z,{tmNode:U}=e;s.value&&!E&&!U.disabled&&(t.doSelect(U.key,U.rawNode),t.doUpdateShow(!1))}return{labelField:p,renderLabel:v,renderIcon:u,siblingHasIcon:x.showIconRef,siblingHasSubmenu:x.hasSubmenuRef,menuProps:C,popoverBody:F,animated:a,mergedShowSubmenu:R(()=>X.value&&!J.value),rawNode:H,hasSubmenu:z,pending:Ae(()=>{const{value:E}=i,{key:U}=e.tmNode;return E.includes(U)}),childActive:Ae(()=>{const{value:E}=l,{key:U}=e.tmNode,te=E.findIndex(ne=>U===ne);return te===-1?!1:te<E.length-1}),active:Ae(()=>{const{value:E}=l,{key:U}=e.tmNode,te=E.findIndex(ne=>U===ne);return te===-1?!1:te===E.length-1}),mergedDisabled:T,renderOption:b,nodeProps:m,handleClick:Z,handleMouseMove:K,handleMouseEnter:N,handleMouseLeave:j,handleSubmenuBeforeEnter:P,handleSubmenuAfterEnter:y}},render(){var e,t;const{animated:o,rawNode:n,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:l,siblingHasSubmenu:a,renderLabel:s,renderIcon:v,renderOption:u,nodeProps:p,props:g,scrollable:b}=this;let m=null;if(r){const F=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);m=d(bn,Object.assign({},F,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const C={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},S=p==null?void 0:p(n),x=d("div",Object.assign({class:[`${i}-dropdown-option`,S==null?void 0:S.class],"data-dropdown-option":!0},S),d("div",mo(C,g),[d("div",{class:[`${i}-dropdown-option-body__prefix`,l&&`${i}-dropdown-option-body__prefix--show-icon`]},[v?v(n):Re(n.icon)]),d("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},s?s(n):Re((t=n[this.labelField])!==null&&t!==void 0?t:n.title)),d("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,a&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(io,null,{default:()=>d(ci,null)}):null)]),this.hasSubmenu?d(ln,null,{default:()=>[d(an,null,{default:()=>d("div",{class:`${i}-dropdown-offset-container`},d(sn,{show:this.mergedShowSubmenu,placement:this.placement,to:b&&this.popoverBody||void 0,teleportDisabled:!b},{default:()=>d("div",{class:`${i}-dropdown-menu-wrapper`},o?d(go,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>m}):m)}))})]}):null);return u?u({node:x,option:n}):x}}),cl=ae({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:t}=de(ko),{renderLabelRef:o,labelFieldRef:n,nodePropsRef:r,renderOptionRef:i}=de(Kt);return{labelField:n,showIcon:e,hasSubmenu:t,renderLabel:o,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:t,hasSubmenu:o,showIcon:n,nodeProps:r,renderLabel:i,renderOption:l}=this,{rawNode:a}=this.tmNode,s=d("div",Object.assign({class:`${t}-dropdown-option`},r==null?void 0:r(a)),d("div",{class:`${t}-dropdown-option-body ${t}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,n&&`${t}-dropdown-option-body__prefix--show-icon`]},Re(a.icon)),d("div",{class:`${t}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(a):Re((e=a.title)!==null&&e!==void 0?e:a[this.labelField])),d("div",{class:[`${t}-dropdown-option-body__suffix`,o&&`${t}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:s,option:a}):s}}),dl=ae({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:t,clsPrefix:o}=this,{children:n}=e;return d(bo,null,d(cl,{clsPrefix:o,tmNode:e,key:e.key}),n==null?void 0:n.map(r=>{const{rawNode:i}=r;return i.show===!1?null:mn(i)?d(pn,{clsPrefix:o,key:r.key}):r.isGroup?(yr("dropdown","`group` node is not allowed to be put in `group` node."),null):d(gn,{clsPrefix:o,tmNode:r,parentKey:t,key:r.key})}))}}),ul=ae({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:t}}=this.tmNode;return d("div",t,[e==null?void 0:e()])}}),bn=ae({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:t,childrenFieldRef:o}=de(Kt);ge(ko,{showIconRef:R(()=>{const r=t.value;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:s})=>r?r(s):s.icon);const{rawNode:a}=i;return r?r(a):a.icon})}),hasSubmenuRef:R(()=>{const{value:r}=o;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:s})=>so(s,r));const{rawNode:a}=i;return so(a,r)})})});const n=O(null);return ge(wr,null),ge(xr,null),ge(Jo,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:t,scrollable:o}=this,n=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:sl(i)?d(ul,{tmNode:r,key:r.key}):mn(i)?d(pn,{clsPrefix:t,key:r.key}):al(i)?d(dl,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):d(gn,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:o})});return d("div",{class:[`${t}-dropdown-menu`,o&&`${t}-dropdown-menu--scrollable`],ref:"bodyRef"},o?d(Cr,{contentClass:`${t}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?Dr({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),fl=_("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[po(),_("dropdown-option",`
 position: relative;
 `,[V("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[V("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),_("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[V("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ze("disabled",[G("pending",`
 color: var(--n-option-text-color-hover);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),V("&::before","background-color: var(--n-option-color-hover);")]),G("active",`
 color: var(--n-option-text-color-active);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),V("&::before","background-color: var(--n-option-color-active);")]),G("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),G("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),G("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[I("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[G("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),I("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[G("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),_("icon",`
 font-size: var(--n-option-icon-size);
 `)]),I("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),I("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[G("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),_("icon",`
 font-size: var(--n-option-icon-size);
 `)]),_("dropdown-menu","pointer-events: all;")]),_("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),_("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),_("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),V(">",[_("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ze("scrollable",`
 padding: var(--n-padding);
 `),G("scrollable",[I("content",`
 padding: var(--n-padding);
 `)])]),hl={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},vl=Object.keys(cn),pl=Object.assign(Object.assign(Object.assign({},cn),hl),_e.props),ml=ae({name:"Dropdown",inheritAttrs:!1,props:pl,setup(e){const t=O(!1),o=ht(fe(e,"show"),t),n=R(()=>{const{keyField:y,childrenField:N}=e;return ft(e.options,{getKey(K){return K[y]},getDisabled(K){return K.disabled===!0},getIgnored(K){return K.type==="divider"||K.type==="render"},getChildren(K){return K[N]}})}),r=R(()=>n.value.treeNodes),i=O(null),l=O(null),a=O(null),s=R(()=>{var y,N,K;return(K=(N=(y=i.value)!==null&&y!==void 0?y:l.value)!==null&&N!==void 0?N:a.value)!==null&&K!==void 0?K:null}),v=R(()=>n.value.getPath(s.value).keyPath),u=R(()=>n.value.getPath(e.value).keyPath),p=Ae(()=>e.keyboard&&o.value);oi({keydown:{ArrowUp:{prevent:!0,handler:T},ArrowRight:{prevent:!0,handler:z},ArrowDown:{prevent:!0,handler:W},ArrowLeft:{prevent:!0,handler:H},Enter:{prevent:!0,handler:D},Escape:F}},p);const{mergedClsPrefixRef:g,inlineThemeDisabled:b}=Ye(e),m=_e("Dropdown","-dropdown",fl,Sr,e,g);ge(Kt,{labelFieldRef:fe(e,"labelField"),childrenFieldRef:fe(e,"childrenField"),renderLabelRef:fe(e,"renderLabel"),renderIconRef:fe(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:l,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:v,activeKeyPathRef:u,animatedRef:fe(e,"animated"),mergedShowRef:o,nodePropsRef:fe(e,"nodeProps"),renderOptionRef:fe(e,"renderOption"),menuPropsRef:fe(e,"menuProps"),doSelect:C,doUpdateShow:S}),He(o,y=>{!e.animated&&!y&&x()});function C(y,N){const{onSelect:K}=e;K&&ye(K,y,N)}function S(y){const{"onUpdate:show":N,onUpdateShow:K}=e;N&&ye(N,y),K&&ye(K,y),t.value=y}function x(){i.value=null,l.value=null,a.value=null}function F(){S(!1)}function H(){J("left")}function z(){J("right")}function T(){J("up")}function W(){J("down")}function D(){const y=X();y!=null&&y.isLeaf&&o.value&&(C(y.key,y.rawNode),S(!1))}function X(){var y;const{value:N}=n,{value:K}=s;return!N||K===null?null:(y=N.getNode(K))!==null&&y!==void 0?y:null}function J(y){const{value:N}=s,{value:{getFirstAvailableNode:K}}=n;let j=null;if(N===null){const Z=K();Z!==null&&(j=Z.key)}else{const Z=X();if(Z){let E;switch(y){case"down":E=Z.getNext();break;case"up":E=Z.getPrev();break;case"right":E=Z.getChild();break;case"left":E=Z.getParent();break}E&&(j=E.key)}}j!==null&&(i.value=null,l.value=j)}const q=R(()=>{const{size:y,inverted:N}=e,{common:{cubicBezierEaseInOut:K},self:j}=m.value,{padding:Z,dividerColor:E,borderRadius:U,optionOpacityDisabled:te,[ce("optionIconSuffixWidth",y)]:ne,[ce("optionSuffixWidth",y)]:B,[ce("optionIconPrefixWidth",y)]:f,[ce("optionPrefixWidth",y)]:c,[ce("fontSize",y)]:L,[ce("optionHeight",y)]:ee,[ce("optionIconSize",y)]:Pe}=j,re={"--n-bezier":K,"--n-font-size":L,"--n-padding":Z,"--n-border-radius":U,"--n-option-height":ee,"--n-option-prefix-width":c,"--n-option-icon-prefix-width":f,"--n-option-suffix-width":B,"--n-option-icon-suffix-width":ne,"--n-option-icon-size":Pe,"--n-divider-color":E,"--n-option-opacity-disabled":te};return N?(re["--n-color"]=j.colorInverted,re["--n-option-color-hover"]=j.optionColorHoverInverted,re["--n-option-color-active"]=j.optionColorActiveInverted,re["--n-option-text-color"]=j.optionTextColorInverted,re["--n-option-text-color-hover"]=j.optionTextColorHoverInverted,re["--n-option-text-color-active"]=j.optionTextColorActiveInverted,re["--n-option-text-color-child-active"]=j.optionTextColorChildActiveInverted,re["--n-prefix-color"]=j.prefixColorInverted,re["--n-suffix-color"]=j.suffixColorInverted,re["--n-group-header-text-color"]=j.groupHeaderTextColorInverted):(re["--n-color"]=j.color,re["--n-option-color-hover"]=j.optionColorHover,re["--n-option-color-active"]=j.optionColorActive,re["--n-option-text-color"]=j.optionTextColor,re["--n-option-text-color-hover"]=j.optionTextColorHover,re["--n-option-text-color-active"]=j.optionTextColorActive,re["--n-option-text-color-child-active"]=j.optionTextColorChildActive,re["--n-prefix-color"]=j.prefixColor,re["--n-suffix-color"]=j.suffixColor,re["--n-group-header-text-color"]=j.groupHeaderTextColor),re}),P=b?et("dropdown",R(()=>`${e.size[0]}${e.inverted?"i":""}`),q,e):void 0;return{mergedClsPrefix:g,mergedTheme:m,tmNodes:r,mergedShow:o,handleAfterLeave:()=>{e.animated&&x()},doUpdateShow:S,cssVars:b?void 0:q,themeClass:P==null?void 0:P.themeClass,onRender:P==null?void 0:P.onRender}},render(){const e=(n,r,i,l,a)=>{var s;const{mergedClsPrefix:v,menuProps:u}=this;(s=this.onRender)===null||s===void 0||s.call(this);const p=(u==null?void 0:u(void 0,this.tmNodes.map(b=>b.rawNode)))||{},g={ref:Zr(r),class:[n,`${v}-dropdown`,this.themeClass],clsPrefix:v,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:a};return d(bn,mo(this.$attrs,g,p))},{mergedTheme:t}=this,o={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(xo,Object.assign({},Pt(this.$props,vl),o),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}}),gl=Xe("n-layout-sider"),pt=Xe("n-menu"),zo=Xe("n-submenu"),Ro=Xe("n-menu-item-group"),Rt=8;function Po(e){const t=de(pt),{props:o,mergedCollapsedRef:n}=t,r=de(zo,null),i=de(Ro,null),l=R(()=>o.mode==="horizontal"),a=R(()=>l.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=R(()=>{var g;return Math.max((g=o.collapsedIconSize)!==null&&g!==void 0?g:o.iconSize,o.iconSize)}),v=R(()=>{var g;return!l.value&&e.root&&n.value&&(g=o.collapsedIconSize)!==null&&g!==void 0?g:o.iconSize}),u=R(()=>{if(l.value)return;const{collapsedWidth:g,indent:b,rootIndent:m}=o,{root:C,isGroup:S}=e,x=m===void 0?b:m;return C?n.value?g/2-s.value/2:x:i&&typeof i.paddingLeftRef.value=="number"?b/2+i.paddingLeftRef.value:r&&typeof r.paddingLeftRef.value=="number"?(S?b/2:b)+r.paddingLeftRef.value:0}),p=R(()=>{const{collapsedWidth:g,indent:b,rootIndent:m}=o,{value:C}=s,{root:S}=e;return l.value||!S||!n.value?Rt:(m===void 0?b:m)+C+Rt-(g+C)/2});return{dropdownPlacement:a,activeIconSize:v,maxIconSize:s,paddingLeft:u,iconMarginRight:p,NMenu:t,NSubmenu:r}}const Io={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},yn=Object.assign(Object.assign({},Io),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),bl=ae({name:"MenuOptionGroup",props:yn,setup(e){ge(zo,null);const t=Po(e);ge(Ro,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:n}=de(pt);return function(){const{value:r}=o,i=t.paddingLeft.value,{nodeProps:l}=n,a=l==null?void 0:l(e.tmNode.rawNode);return d("div",{class:`${r}-menu-item-group`,role:"group"},d("div",Object.assign({},a,{class:[`${r}-menu-item-group-title`,a==null?void 0:a.class],style:[(a==null?void 0:a.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),Re(e.title),e.extra?d(bo,null," ",Re(e.extra)):null),d("div",null,e.tmNodes.map(s=>_o(s,n))))}}}),wn=ae({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:t}=de(pt);return{menuProps:t,style:R(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:R(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:r}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:n,renderExtra:r,expandIcon:i}}=this,l=o?o(t.rawNode):Re(this.icon);return d("div",{onClick:a=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,a)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},l&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[l]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:n?n(t.rawNode):Re(this.title),this.extra||r?d("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(t.rawNode):Re(this.extra)):null),this.showArrow?d(vo,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(t.rawNode):d(ui,null)}):null)}}),xn=Object.assign(Object.assign({},Io),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),co=ae({name:"Submenu",props:xn,setup(e){const t=Po(e),{NMenu:o,NSubmenu:n}=t,{props:r,mergedCollapsedRef:i,mergedThemeRef:l}=o,a=R(()=>{const{disabled:g}=e;return n!=null&&n.mergedDisabledRef.value||r.disabled?!0:g}),s=O(!1);ge(zo,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:a}),ge(Ro,null);function v(){const{onClick:g}=e;g&&g()}function u(){a.value||(i.value||o.toggleExpand(e.internalKey),v())}function p(g){s.value=g}return{menuProps:r,mergedTheme:l,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:s,paddingLeft:t.paddingLeft,mergedDisabled:a,mergedValue:o.mergedValueRef,childActive:Ae(()=>{var g;return(g=e.virtualChildActive)!==null&&g!==void 0?g:o.activePathRef.value.includes(e.internalKey)}),collapsed:R(()=>r.mode==="horizontal"?!1:i.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:R(()=>!a.value&&(r.mode==="horizontal"||i.value)),handlePopoverShowChange:p,handleClick:u}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:n}}=this,r=()=>{const{isHorizontal:l,paddingLeft:a,collapsed:s,mergedDisabled:v,maxIconSize:u,activeIconSize:p,title:g,childActive:b,icon:m,handleClick:C,menuProps:{nodeProps:S},dropdownShow:x,iconMarginRight:F,tmNode:H,mergedClsPrefix:z,isEllipsisPlaceholder:T,extra:W}=this,D=S==null?void 0:S(H.rawNode);return d("div",Object.assign({},D,{class:[`${z}-menu-item`,D==null?void 0:D.class],role:"menuitem"}),d(wn,{tmNode:H,paddingLeft:a,collapsed:s,disabled:v,iconMarginRight:F,maxIconSize:u,activeIconSize:p,title:g,extra:W,showArrow:!l,childActive:b,clsPrefix:z,icon:m,hover:x,onClick:C,isEllipsisPlaceholder:T}))},i=()=>d(kr,null,{default:()=>{const{tmNodes:l,collapsed:a}=this;return a?null:d("div",{class:`${t}-submenu-children`,role:"menu"},l.map(s=>_o(s,this.menuProps)))}});return this.root?d(ml,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>d("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},r(),this.isHorizontal?null:i())}):d("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},r(),i())}}),Cn=Object.assign(Object.assign({},Io),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),yl=ae({name:"MenuOption",props:Cn,setup(e){const t=Po(e),{NSubmenu:o,NMenu:n}=t,{props:r,mergedClsPrefixRef:i,mergedCollapsedRef:l}=n,a=o?o.mergedDisabledRef:{value:!1},s=R(()=>a.value||e.disabled);function v(p){const{onClick:g}=e;g&&g(p)}function u(p){s.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),v(p))}return{mergedClsPrefix:i,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:r,dropdownEnabled:Ae(()=>e.root&&l.value&&r.mode!=="horizontal"&&!s.value),selected:Ae(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:u}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:n,nodeProps:r}}=this,i=r==null?void 0:r(o.rawNode);return d("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),d(jr,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):Re(this.title),trigger:()=>d(wn,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),wl=ae({name:"MenuDivider",setup(){const e=de(pt),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:d("div",{class:`${t.value}-menu-divider`})}}),xl=Co(yn),Cl=Co(Cn),Sl=Co(xn);function uo(e){return e.type==="divider"||e.type==="render"}function kl(e){return e.type==="divider"}function _o(e,t){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(uo(o))return kl(o)?d(wl,Object.assign({key:e.key},o.props)):null;const{labelField:r}=t,{key:i,level:l,isGroup:a}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[r],extra:o.titleExtra||o.extra,key:i,internalKey:i,level:l,root:l===0,isGroup:a});return e.children?e.isGroup?d(bl,Pt(s,xl,{tmNode:e,tmNodes:e.children,key:i})):d(co,Pt(s,Sl,{key:i,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):d(yl,Pt(s,Cl,{key:i,tmNode:e}))}const qo=[V("&::before","background-color: var(--n-item-color-hover);"),I("arrow",`
 color: var(--n-arrow-color-hover);
 `),I("icon",`
 color: var(--n-item-icon-color-hover);
 `),_("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[V("a",`
 color: var(--n-item-text-color-hover);
 `),I("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Yo=[I("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),_("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[V("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),I("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],zl=V([_("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[G("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[_("submenu","margin: 0;"),_("menu-item","margin: 0;"),_("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[V("&::before","display: none;"),G("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),_("menu-item-content",[G("selected",[I("icon","color: var(--n-item-icon-color-active-horizontal);"),_("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[V("a","color: var(--n-item-text-color-active-horizontal);"),I("extra","color: var(--n-item-text-color-active-horizontal);")])]),G("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[_("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[V("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),I("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),I("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ze("disabled",[ze("selected, child-active",[V("&:focus-within",Yo)]),G("selected",[Ze(null,[I("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),_("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[V("a","color: var(--n-item-text-color-active-hover-horizontal);"),I("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),G("child-active",[Ze(null,[I("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),_("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[V("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),I("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),Ze("border-bottom: 2px solid var(--n-border-color-horizontal);",Yo)]),_("menu-item-content-header",[V("a","color: var(--n-item-text-color-horizontal);")])])]),ze("responsive",[_("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),G("collapsed",[_("menu-item-content",[G("selected",[V("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),_("menu-item-content-header","opacity: 0;"),I("arrow","opacity: 0;"),I("icon","color: var(--n-item-icon-color-collapsed);")])]),_("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),_("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[V("> *","z-index: 1;"),V("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),G("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),G("collapsed",[I("arrow","transform: rotate(0);")]),G("selected",[V("&::before","background-color: var(--n-item-color-active);"),I("arrow","color: var(--n-arrow-color-active);"),I("icon","color: var(--n-item-icon-color-active);"),_("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[V("a","color: var(--n-item-text-color-active);"),I("extra","color: var(--n-item-text-color-active);")])]),G("child-active",[_("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[V("a",`
 color: var(--n-item-text-color-child-active);
 `),I("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),I("arrow",`
 color: var(--n-arrow-color-child-active);
 `),I("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ze("disabled",[ze("selected, child-active",[V("&:focus-within",qo)]),G("selected",[Ze(null,[I("arrow","color: var(--n-arrow-color-active-hover);"),I("icon","color: var(--n-item-icon-color-active-hover);"),_("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[V("a","color: var(--n-item-text-color-active-hover);"),I("extra","color: var(--n-item-text-color-active-hover);")])])]),G("child-active",[Ze(null,[I("arrow","color: var(--n-arrow-color-child-active-hover);"),I("icon","color: var(--n-item-icon-color-child-active-hover);"),_("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[V("a","color: var(--n-item-text-color-child-active-hover);"),I("extra","color: var(--n-item-text-color-child-active-hover);")])])]),G("selected",[Ze(null,[V("&::before","background-color: var(--n-item-color-active-hover);")])]),Ze(null,qo)]),I("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),I("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),_("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[V("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[V("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),I("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),_("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[_("menu-item-content",`
 height: var(--n-item-height);
 `),_("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Wr({duration:".2s"})])]),_("menu-item-group",[_("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),_("menu-tooltip",[V("a",`
 color: inherit;
 text-decoration: none;
 `)]),_("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function Ze(e,t){return[G("hover",e,t),V("&:hover",e,t)]}const Rl=Object.assign(Object.assign({},_e.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),Pl=ae({name:"Menu",props:Rl,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ye(e),n=_e("Menu","-menu",zl,Rr,e,t),r=de(gl,null),i=R(()=>{var B;const{collapsed:f}=e;if(f!==void 0)return f;if(r){const{collapseModeRef:c,collapsedRef:L}=r;if(c.value==="width")return(B=L.value)!==null&&B!==void 0?B:!1}return!1}),l=R(()=>{const{keyField:B,childrenField:f,disabledField:c}=e;return ft(e.items||e.options,{getIgnored(L){return uo(L)},getChildren(L){return L[f]},getDisabled(L){return L[c]},getKey(L){var ee;return(ee=L[B])!==null&&ee!==void 0?ee:L.name}})}),a=R(()=>new Set(l.value.treeNodes.map(B=>B.key))),{watchProps:s}=e,v=O(null);s!=null&&s.includes("defaultValue")?oo(()=>{v.value=e.defaultValue}):v.value=e.defaultValue;const u=fe(e,"value"),p=ht(u,v),g=O([]),b=()=>{g.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(p.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?oo(b):b();const m=rn(e,["expandedNames","expandedKeys"]),C=ht(m,g),S=R(()=>l.value.treeNodes),x=R(()=>l.value.getPath(p.value).keyPath);ge(pt,{props:e,mergedCollapsedRef:i,mergedThemeRef:n,mergedValueRef:p,mergedExpandedKeysRef:C,activePathRef:x,mergedClsPrefixRef:t,isHorizontalRef:R(()=>e.mode==="horizontal"),invertedRef:fe(e,"inverted"),doSelect:F,toggleExpand:z});function F(B,f){const{"onUpdate:value":c,onUpdateValue:L,onSelect:ee}=e;L&&ye(L,B,f),c&&ye(c,B,f),ee&&ye(ee,B,f),v.value=B}function H(B){const{"onUpdate:expandedKeys":f,onUpdateExpandedKeys:c,onExpandedNamesChange:L,onOpenNamesChange:ee}=e;f&&ye(f,B),c&&ye(c,B),L&&ye(L,B),ee&&ye(ee,B),g.value=B}function z(B){const f=Array.from(C.value),c=f.findIndex(L=>L===B);if(~c)f.splice(c,1);else{if(e.accordion&&a.value.has(B)){const L=f.findIndex(ee=>a.value.has(ee));L>-1&&f.splice(L,1)}f.push(B)}H(f)}const T=B=>{const f=l.value.getPath(B??p.value,{includeSelf:!1}).keyPath;if(!f.length)return;const c=Array.from(C.value),L=new Set([...c,...f]);e.accordion&&a.value.forEach(ee=>{L.has(ee)&&!f.includes(ee)&&L.delete(ee)}),H(Array.from(L))},W=R(()=>{const{inverted:B}=e,{common:{cubicBezierEaseInOut:f},self:c}=n.value,{borderRadius:L,borderColorHorizontal:ee,fontSize:Pe,itemHeight:re,dividerColor:ke}=c,w={"--n-divider-color":ke,"--n-bezier":f,"--n-font-size":Pe,"--n-border-color-horizontal":ee,"--n-border-radius":L,"--n-item-height":re};return B?(w["--n-group-text-color"]=c.groupTextColorInverted,w["--n-color"]=c.colorInverted,w["--n-item-text-color"]=c.itemTextColorInverted,w["--n-item-text-color-hover"]=c.itemTextColorHoverInverted,w["--n-item-text-color-active"]=c.itemTextColorActiveInverted,w["--n-item-text-color-child-active"]=c.itemTextColorChildActiveInverted,w["--n-item-text-color-child-active-hover"]=c.itemTextColorChildActiveInverted,w["--n-item-text-color-active-hover"]=c.itemTextColorActiveHoverInverted,w["--n-item-icon-color"]=c.itemIconColorInverted,w["--n-item-icon-color-hover"]=c.itemIconColorHoverInverted,w["--n-item-icon-color-active"]=c.itemIconColorActiveInverted,w["--n-item-icon-color-active-hover"]=c.itemIconColorActiveHoverInverted,w["--n-item-icon-color-child-active"]=c.itemIconColorChildActiveInverted,w["--n-item-icon-color-child-active-hover"]=c.itemIconColorChildActiveHoverInverted,w["--n-item-icon-color-collapsed"]=c.itemIconColorCollapsedInverted,w["--n-item-text-color-horizontal"]=c.itemTextColorHorizontalInverted,w["--n-item-text-color-hover-horizontal"]=c.itemTextColorHoverHorizontalInverted,w["--n-item-text-color-active-horizontal"]=c.itemTextColorActiveHorizontalInverted,w["--n-item-text-color-child-active-horizontal"]=c.itemTextColorChildActiveHorizontalInverted,w["--n-item-text-color-child-active-hover-horizontal"]=c.itemTextColorChildActiveHoverHorizontalInverted,w["--n-item-text-color-active-hover-horizontal"]=c.itemTextColorActiveHoverHorizontalInverted,w["--n-item-icon-color-horizontal"]=c.itemIconColorHorizontalInverted,w["--n-item-icon-color-hover-horizontal"]=c.itemIconColorHoverHorizontalInverted,w["--n-item-icon-color-active-horizontal"]=c.itemIconColorActiveHorizontalInverted,w["--n-item-icon-color-active-hover-horizontal"]=c.itemIconColorActiveHoverHorizontalInverted,w["--n-item-icon-color-child-active-horizontal"]=c.itemIconColorChildActiveHorizontalInverted,w["--n-item-icon-color-child-active-hover-horizontal"]=c.itemIconColorChildActiveHoverHorizontalInverted,w["--n-arrow-color"]=c.arrowColorInverted,w["--n-arrow-color-hover"]=c.arrowColorHoverInverted,w["--n-arrow-color-active"]=c.arrowColorActiveInverted,w["--n-arrow-color-active-hover"]=c.arrowColorActiveHoverInverted,w["--n-arrow-color-child-active"]=c.arrowColorChildActiveInverted,w["--n-arrow-color-child-active-hover"]=c.arrowColorChildActiveHoverInverted,w["--n-item-color-hover"]=c.itemColorHoverInverted,w["--n-item-color-active"]=c.itemColorActiveInverted,w["--n-item-color-active-hover"]=c.itemColorActiveHoverInverted,w["--n-item-color-active-collapsed"]=c.itemColorActiveCollapsedInverted):(w["--n-group-text-color"]=c.groupTextColor,w["--n-color"]=c.color,w["--n-item-text-color"]=c.itemTextColor,w["--n-item-text-color-hover"]=c.itemTextColorHover,w["--n-item-text-color-active"]=c.itemTextColorActive,w["--n-item-text-color-child-active"]=c.itemTextColorChildActive,w["--n-item-text-color-child-active-hover"]=c.itemTextColorChildActiveHover,w["--n-item-text-color-active-hover"]=c.itemTextColorActiveHover,w["--n-item-icon-color"]=c.itemIconColor,w["--n-item-icon-color-hover"]=c.itemIconColorHover,w["--n-item-icon-color-active"]=c.itemIconColorActive,w["--n-item-icon-color-active-hover"]=c.itemIconColorActiveHover,w["--n-item-icon-color-child-active"]=c.itemIconColorChildActive,w["--n-item-icon-color-child-active-hover"]=c.itemIconColorChildActiveHover,w["--n-item-icon-color-collapsed"]=c.itemIconColorCollapsed,w["--n-item-text-color-horizontal"]=c.itemTextColorHorizontal,w["--n-item-text-color-hover-horizontal"]=c.itemTextColorHoverHorizontal,w["--n-item-text-color-active-horizontal"]=c.itemTextColorActiveHorizontal,w["--n-item-text-color-child-active-horizontal"]=c.itemTextColorChildActiveHorizontal,w["--n-item-text-color-child-active-hover-horizontal"]=c.itemTextColorChildActiveHoverHorizontal,w["--n-item-text-color-active-hover-horizontal"]=c.itemTextColorActiveHoverHorizontal,w["--n-item-icon-color-horizontal"]=c.itemIconColorHorizontal,w["--n-item-icon-color-hover-horizontal"]=c.itemIconColorHoverHorizontal,w["--n-item-icon-color-active-horizontal"]=c.itemIconColorActiveHorizontal,w["--n-item-icon-color-active-hover-horizontal"]=c.itemIconColorActiveHoverHorizontal,w["--n-item-icon-color-child-active-horizontal"]=c.itemIconColorChildActiveHorizontal,w["--n-item-icon-color-child-active-hover-horizontal"]=c.itemIconColorChildActiveHoverHorizontal,w["--n-arrow-color"]=c.arrowColor,w["--n-arrow-color-hover"]=c.arrowColorHover,w["--n-arrow-color-active"]=c.arrowColorActive,w["--n-arrow-color-active-hover"]=c.arrowColorActiveHover,w["--n-arrow-color-child-active"]=c.arrowColorChildActive,w["--n-arrow-color-child-active-hover"]=c.arrowColorChildActiveHover,w["--n-item-color-hover"]=c.itemColorHover,w["--n-item-color-active"]=c.itemColorActive,w["--n-item-color-active-hover"]=c.itemColorActiveHover,w["--n-item-color-active-collapsed"]=c.itemColorActiveCollapsed),w}),D=o?et("menu",R(()=>e.inverted?"a":"b"),W,e):void 0,X=zr(),J=O(null),q=O(null);let P=!0;const y=()=>{var B;P?P=!1:(B=J.value)===null||B===void 0||B.sync({showAllItemsBeforeCalculate:!0})};function N(){return document.getElementById(X)}const K=O(-1);function j(B){K.value=e.options.length-B}function Z(B){B||(K.value=-1)}const E=R(()=>{const B=K.value;return{children:B===-1?[]:e.options.slice(B)}}),U=R(()=>{const{childrenField:B,disabledField:f,keyField:c}=e;return ft([E.value],{getIgnored(L){return uo(L)},getChildren(L){return L[B]},getDisabled(L){return L[f]},getKey(L){var ee;return(ee=L[c])!==null&&ee!==void 0?ee:L.name}})}),te=R(()=>ft([{}]).treeNodes[0]);function ne(){var B;if(K.value===-1)return d(co,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:te.value,domId:X,isEllipsisPlaceholder:!0});const f=U.value.treeNodes[0],c=x.value,L=!!(!((B=f.children)===null||B===void 0)&&B.some(ee=>c.includes(ee.key)));return d(co,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:L,tmNode:f,domId:X,rawNodes:f.rawNode.children||[],tmNodes:f.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:t,controlledExpandedKeys:m,uncontrolledExpanededKeys:g,mergedExpandedKeys:C,uncontrolledValue:v,mergedValue:p,activePath:x,tmNodes:S,mergedTheme:n,mergedCollapsed:i,cssVars:o?void 0:W,themeClass:D==null?void 0:D.themeClass,overflowRef:J,counterRef:q,updateCounter:()=>{},onResize:y,onUpdateOverflow:Z,onUpdateCount:j,renderCounter:ne,getCounter:N,onRender:D==null?void 0:D.onRender,showOption:T,deriveResponsiveState:y}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:n}=this;n==null||n();const r=()=>this.tmNodes.map(s=>_o(s,this.$props)),l=t==="horizontal"&&this.responsive,a=()=>d("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,l&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},l?d(lo,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:r,counter:this.renderCounter}):r());return l?d(to,{onResize:this.onResize},{default:a}):a()}}),Il={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 192 512"},_l=qe("path",{d:"M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z",fill:"currentColor"},null,-1),Ol=[_l],Tl=ae({name:"CaretLeft",render:function(t,o){return Qe(),yo("svg",Il,Ol)}}),Nl={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 192 512"},Ml=qe("path",{d:"M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z",fill:"currentColor"},null,-1),Fl=[Ml],El=ae({name:"CaretRight",render:function(t,o){return Qe(),yo("svg",Nl,Fl)}});var Al=Object.defineProperty,$l=(e,t,o)=>t in e?Al(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Sn=(e,t,o)=>($l(e,typeof t!="symbol"?t+"":t,o),o),Oo=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)},Me=(e,t,o)=>(Oo(e,t,"read from private field"),o?o.call(e):t.get(e)),je=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o)},vt=(e,t,o,n)=>(Oo(e,t,"write to private field"),n?n.call(e,o):t.set(e,o),o),Ke=(e,t,o)=>(Oo(e,t,"access private method"),o),kn=class extends Error{},Bl=class extends kn{constructor(...e){super(...e),this.name="RunningTaskSkippedError"}},Ll=class extends kn{constructor(...e){super(...e),this.name="PendingTaskSkippedError"}},Kl=class{constructor(e){Sn(this,"buffer"),this.buffer=e}},st,Je,We,At,ct,_t,Ht,To,$t,No,fo,zn,Ot,ho,Hl=class{constructor(e){je(this,ct),je(this,Ht),je(this,$t),je(this,fo),je(this,Ot),Sn(this,"worker"),je(this,st,void 0),je(this,Je,[]),je(this,We,null),je(this,At,{}),vt(this,st,e),this.worker=new Worker(e),Ke(this,ct,_t).call(this)}register(e){return(...t)=>new Promise((o,n)=>Ke(this,fo,zn).call(this,{name:e,args:t,transferableIndices:[],resolve:o,reject:n}))}skip(){return Ke(this,Ot,ho).call(this)?(this.worker=new Worker(Me(this,st)),Ke(this,ct,_t).call(this),Ke(this,$t,No).call(this),!0):!1}skipAll(){if(!Ke(this,Ot,ho).call(this))return!1;for(const{reject:e}of Me(this,Je))e(new Ll("Pending task skipped."));return vt(this,Je,[]),this.worker=new Worker(Me(this,st)),Ke(this,ct,_t).call(this),!0}control(e,t){Me(this,At)[e]=t}};st=new WeakMap;Je=new WeakMap;We=new WeakMap;At=new WeakMap;ct=new WeakSet;_t=function(){this.worker.onmessage=e=>{const{type:t}=e.data;if(t==="control"){const{name:o,args:n}=e.data,r=Me(this,At)[o];r?r(...n):console.warn(`No handler for command ${o}`)}else{const{args:o,transferableIndices:n,resolve:r,reject:i}=Me(this,We);if(vt(this,We,null),Ke(this,$t,No).call(this),t==="success"){const{result:l,transferables:a}=e.data;a.forEach((s,v)=>{o[n[v]].buffer=s}),r(l)}else{const{name:l,message:a}=e.data.error,s=new Error(a);s.name=l,i(s)}}}};Ht=new WeakSet;To=function(e){const{name:t,args:o,transferableIndices:n}=e,r=[],i=o.map((l,a)=>l&&l.constructor===Kl?(n.push(a),r.push(l.buffer),l.buffer):l);vt(this,We,e),this.worker.postMessage({name:t,args:i,transferableIndices:n},r)};$t=new WeakSet;No=function(){if(Me(this,Je).length){const e=Me(this,Je).shift();Ke(this,Ht,To).call(this,e)}};fo=new WeakSet;zn=function(e){Me(this,We)?Me(this,Je).push(e):Ke(this,Ht,To).call(this,e)};Ot=new WeakSet;ho=function(){if(!Me(this,We))return!1;this.worker.terminate();const{reject:e}=Me(this,We);return e(new Bl("Running task skipped.")),vt(this,We,null),!0};const Rn=Symbol(),Mo=Symbol(),Fo=Symbol(),Pn=Symbol(),In=Symbol(),_n=Symbol(),On=Symbol(),Tn=Symbol(),Eo=Symbol();class Dl{constructor(){const t=new Hl("/worker.js");this.worker=t,this.setIME=t.register("setIME"),this.setOption=t.register("setOption"),this.setPageSize=t.register("setPageSize"),this.process=t.register("process"),this.selectCandidateOnCurrentPage=t.register("selectCandidateOnCurrentPage"),this.resetUserDirectory=t.register("resetUserDirectory")}}const jl=ti(),Wl=R(()=>jl.value==="xs"),Vl="#container textarea";function dt(){return document.querySelector(Vl)}const Ul=ae({__name:"Menu",props:{disableSwitch:{type:Boolean}},setup(e){const t=e,o=de(Rn),n=de(Mo),r=[{label:"声笔简码",value:"sbjm"},{label:"声笔拼音",value:"sbpy"},{label:"声笔飞码",value:"sbfm"},{label:"声笔飞单",value:"sbfd"},{label:"声笔飞讯",value:"sbfx"},{label:"声笔小鹤",value:"sbxh"},{label:"声笔自然",value:"sbzr"}],i=de(Fo),l=de(Pn),a=de(Eo),s=de(In);function v(){dt().focus()}function u(p){v(),n(p)}return(p,g)=>(Qe(),Mt(ve(on),null,{default:Ne(()=>[Se(ve(ll),{style:{width:"160px"},value:ve(o),options:r,loading:ve(i),"onUpdate:value":u,disabled:t.disableSwitch},null,8,["value","loading","disabled"]),Se(ve(nl),{class:"square-group",onClick:v},{default:Ne(()=>[Se(ve(Nt),{secondary:"",onClick:ve(a)},{default:Ne(()=>[Ee(ut(ve(l)?"En":"中"),1)]),_:1},8,["onClick"]),Se(ve(Nt),{secondary:"",disabled:ve(l),onClick:g[0]||(g[0]=()=>{})},{default:Ne(()=>[Ee(ut(ve(s)?".":"。"),1)]),_:1},8,["disabled"])]),_:1})]),_:1}))}});var Nn={exports:{}};(function(e){(function(){var t=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],o=typeof window<"u",n=o&&window.mozInnerScreenX!=null;function r(i,l,a){if(!o)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var s=a&&a.debug||!1;if(s){var v=document.querySelector("#input-textarea-caret-position-mirror-div");v&&v.parentNode.removeChild(v)}var u=document.createElement("div");u.id="input-textarea-caret-position-mirror-div",document.body.appendChild(u);var p=u.style,g=window.getComputedStyle?window.getComputedStyle(i):i.currentStyle,b=i.nodeName==="INPUT";p.whiteSpace="pre-wrap",b||(p.wordWrap="break-word"),p.position="absolute",s||(p.visibility="hidden"),t.forEach(function(S){b&&S==="lineHeight"?p.lineHeight=g.height:p[S]=g[S]}),n?i.scrollHeight>parseInt(g.height)&&(p.overflowY="scroll"):p.overflow="hidden",u.textContent=i.value.substring(0,l),b&&(u.textContent=u.textContent.replace(/\s/g," "));var m=document.createElement("span");m.textContent=i.value.substring(l)||".",u.appendChild(m);var C={top:m.offsetTop+parseInt(g.borderTopWidth),left:m.offsetLeft+parseInt(g.borderLeftWidth),height:parseInt(g.lineHeight)};return s?m.style.backgroundColor="#aaa":document.body.removeChild(u),C}e.exports=r})()})(Nn);var Gl=Nn.exports;const ql=Yr(Gl),Yl=ae({__name:"Panel",props:{debugMode:{type:Boolean}},setup(e,{expose:t}){const o=de(_n),n=de(On),r=de(Fo),i=de(Tn),l=de(Mo),a=de(Eo),s=e,{debugMode:v}=Er(s),u=O(0),p=O(0),g=O(!1),b=O(!1),m=O(0),C=O(0),S=O(""),x=O(""),F=O(""),H=O([]),z=O(0),T=O(!0),W=O(!1),D=O(!1),X=O(!1),J=O(!1),q=O(!1);async function P(M,Y){D.value=!0,await E(Y),M.target.focus()}const y={Escape:"Escape",F4:"F4",Backspace:"BackSpace",Delete:"Delete",Tab:"Tab",Enter:"Return",Home:"Home",End:"End",PageUp:"Page_Up",PageDown:"Page_Down",Alt:"Alt_L",ArrowUp:"Up",ArrowRight:"Right",ArrowDown:"Down",ArrowLeft:"Left","~":"asciitilde","`":"quoteleft","!":"exclam","@":"at","#":"numbersign",$:"dollar","%":"percent","^":"asciicircum","&":"ampersand","*":"asterisk","(":"parenleft",")":"parenright","-":"minus",_:"underscore","+":"plus","=":"equal","{":"braceleft","[":"bracketleft","}":"braceright","]":"bracketright",":":"colon",";":"semicolon",'"':"quotedbl","'":"apostrophe","|":"bar","\\":"backslash","<":"less",",":"comma",">":"greater",".":"period","?":"question","/":"slash"," ":"space"},N=["`"];function K(M){return/^[a-z0-9!"#$%&'()*+,./:;<=>?@[\] ^_`{|}~\\-]$/i.test(M)}function j(M){const Y=dt(),{selectionStart:ue,selectionEnd:we}=Y;n.value=n.value.slice(0,ue)+M+n.value.slice(we),rt(()=>{Y.selectionEnd=ue+M.length})}async function Z(M,Y){const ue=dt();!("updatedSchema"in M)&&M.updatedOptions&&i(M.updatedOptions),M.state===0?(D.value=!1,X.value=!1,b.value=!1,j(M.committed)):M.state===1?(S.value=M.head,x.value=M.body,F.value=M.tail,z.value=M.highlighted,H.value=M.candidates.map((we,Ie)=>{var Te;let Oe=`${((Te=M.selectLabels)==null?void 0:Te[Ie])||Ie+1} ${we.text}`;return we.comment&&(Oe+=" "+we.comment),{label:Oe,key:Ie}}),T.value=M.page===0,W.value=M.isLastPage,X.value||(X.value=!0,J.value=!1),rt(()=>{document.querySelector(".n-popover").getBoundingClientRect().width>ue.getBoundingClientRect().width&&(J.value=!0)}),M.committed&&j(M.committed)):(D.value=!1,X.value=!1,M.state===2&&M.updatedSchema&&await l(M.updatedSchema.split("/")[0]),M.state===3&&K(Y)&&j(Y)),ue.focus()}async function E(M){const Y=await o.value.process(M);return Z(Y,M)}let U=!1,te=0,ne=0;He(n,(M,Y)=>{if(U&&(U=!1,Y.length+1===M.length&&Y.substring(0,te)===M.substring(0,te)&&Y.substring(ne)===M.substring(ne+1))){const ue=dt();n.value=Y,rt(()=>{D.value=!0,ue.selectionEnd=te,E(M[te])})}});function B(M){if(v.value||r.value)return;const{code:Y,key:ue}=M,we=dt();if(ue==="Unidentified"){U=!0,te=we.selectionStart,ne=we.selectionEnd;return}if(ue==="Shift"){q.value=!0;return}q.value=!1;const Ie=K(ue),Oe=ue==="Alt",Te=M.getModifierState("Control"),Ve=M.getModifierState("Meta"),Ue=M.getModifierState("Alt"),$e=M.getModifierState("Shift"),Be=Te||Ve||Ue||$e&&!Ie;if(!D.value&&(document.activeElement!==we||!Ie&&ue!=="F4"||Be&&!$e&&!(Te&&N.includes(ue))))return;let pe;const k=A=>`{${A}}`;if(Be||!Ie){if(pe=/^[0-9a-z]$/i.test(ue)?ue:y[ue],pe===void 0)return;Oe&&Y==="AltRight"&&(pe="Alt_R");const A=[];Te&&A.push("Control"),Ve&&A.push("Meta"),Ue&&!Oe&&A.push("Alt"),$e&&A.push("Shift"),A.push(pe),pe=k(A.join("+"))}else Y.startsWith("Numpad")?pe=k(`KP_${Y.substring(6)}`):pe=ue;if(!b.value){const A=we.getBoundingClientRect(),me=ql(we,we.selectionStart);m.value=A.x+me.left,C.value=Wl.value?8:A.y+me.top+me.height-we.scrollTop}D.value=!0,M.preventDefault(),E(pe)}function f(M){if(v.value||r.value)return;const{key:Y}=M;Y==="Shift"&&q.value&&a(),q.value=!1,D.value&&E(`{Release+${y[Y]||Y}}`)}async function c(M){const Y=JSON.parse(await o.value.selectCandidateOnCurrentPage(M));return Z(Y,"")}function L(M){return M.touches.length===1?M.touches[0]:void 0}function ee(M,Y){u.value=M,p.value=Y;const ue=document.querySelector(".n-popover");m.value=ue.getBoundingClientRect().left,g.value=!0}function Pe(M){ee(M.clientX,M.clientY)}function re(M){const Y=L(M);Y&&ee(Y.clientX,Y.clientY)}function ke(M,Y){g.value&&(b.value=!0,m.value+=M-u.value,C.value+=Y-p.value,u.value=M,p.value=Y)}function w(M){ke(M.clientX,M.clientY)}function Fe(M){const Y=L(M);Y&&ke(Y.clientX,Y.clientY)}function Ce(){g.value=!1}return tt(()=>{document.addEventListener("keydown",B),document.addEventListener("keyup",f),document.addEventListener("mousemove",w),document.addEventListener("touchmove",Fe),document.addEventListener("mouseup",Ce),document.addEventListener("touchend",Ce)}),Ar(()=>{document.removeEventListener("keydown",B),document.removeEventListener("keyup",f),document.removeEventListener("mousemove",w),document.removeEventListener("touchmove",Fe),document.removeEventListener("mouseup",Ce),document.removeEventListener("touchend",Ce)}),t({debug:P}),(M,Y)=>(Qe(),Mt(ve(xo),{show:X.value,"show-arrow":!1,x:m.value,y:C.value,flip:!g.value,placement:"bottom-start",trigger:"manual",style:{cursor:"move"},onMousedown:Pe,onTouchstart:re},{default:Ne(()=>[Se(ve(Lo),{type:"success"},{default:Ne(()=>[Ee(ut(S.value),1)]),_:1}),Ee("  "),Se(ve(Lo),{type:"info"},{default:Ne(()=>[Ee(ut(x.value),1)]),_:1}),Ee("  "+ut(F.value)+" ",1),Qo(Se(ve(Pl),{options:H.value,mode:"horizontal",value:z.value,"onUpdate:value":c},null,8,["options","value"]),[[en,H.value.length]]),Se(ve(Nt),{text:"",disabled:T.value},{default:Ne(()=>[Se(ve(io),{component:ve(Tl),onClick:Y[0]||(Y[0]=ue=>E("-"))},null,8,["component"])]),_:1},8,["disabled"]),Se(ve(Nt),{text:"",disabled:W.value},{default:Ne(()=>[Se(ve(io),{component:ve(El),onClick:Y[1]||(Y[1]=ue=>E("="))},null,8,["component"])]),_:1},8,["disabled"])]),_:1},8,["show","x","y","flip"]))}}),eo="ascii_mode",Xl="ascii_punct",Zl=ae({__name:"Input",props:{method:{},disableSwitch:{type:Boolean}},setup(e){const t=e;function o(S){a.value=S,l.value=S?"":i.value}const n=O(void 0),r=O(""),i=O(t.method??"sbjm"),l=O(""),a=O(!0),s=O(!1),v=O(!1),u={[eo]:s,[Xl]:v},g=(S=>async()=>{const x=u[S],F=!x.value;await n.value.setOption(S,F),x.value=F})(eo);async function b(S){o(!0);try{await n.value.setIME(S),i.value=S;for(const[x,F]of Object.entries(u)){if(x===eo){F.value=!1;continue}await n.value.setOption(x,F.value)}}catch(x){console.error(x)}o(!1)}function m(S){if(S.length===1){const x=S[0];for(const[F,H]of Object.entries(u)){if(F===x){H.value=!0;return}if(`!${F}`===x){H.value=!1;return}}}}ge(Rn,l),ge(Mo,b),ge(Fo,a),ge(Pn,s),ge(In,v),ge(Eo,g),ge(On,r),ge(Tn,m),ge(_n,n),tt(async()=>{n.value=new Dl,await b(i.value)});const C=O();return(S,x)=>(Qe(),Mt(ve(Ir),{theme:ve(Pr)},{default:Ne(()=>[(Qe(),Mt($r,null,[Se(ve(on),{vertical:""},{default:Ne(()=>[Se(Ul,{"disable-switch":t.disableSwitch},null,8,["disable-switch"]),Se(ve(qr),{id:"container",value:r.value,"onUpdate:value":x[0]||(x[0]=F=>r.value=F),type:"textarea",rows:15},null,8,["value"]),Se(Yl,{ref_key:"panel",ref:C},null,512)]),_:1})],1024))]),_:1},8,["theme"]))}}),Jl=qe("h1",{id:"声笔快打",tabindex:"-1"},[Ee("声笔快打 "),qe("a",{class:"header-anchor",href:"#声笔快打","aria-label":'Permalink to "声笔快打"'},"​")],-1),Ql=qe("p",null,[Ee("「声笔快打」是声笔输入法的在线版，基于 "),qe("a",{href:"http://github.com/libreservice/my_rime",target:"_blank",rel:"noreferrer"},"My Rime（梧桐输入法）"),Ee("实现。您无需安装就可以体验所有的声笔系列码输入方案，包括声笔简码、声笔飞码、声笔飞单、声笔飞讯、声笔自然、声笔小鹤和声笔拼音。")],-1),ea=qe("p",null,[Ee("为提高访问速度，在线版中的每个方案仅包含六千余字和五万余词，且不包含反查功能。如您希望尝试完整版，欢迎在"),qe("a",{href:"https://gitee.com/sbxlm/sbxlm/releases",target:"_blank",rel:"noreferrer"},"发布页"),Ee("下载。")],-1),sa=JSON.parse('{"title":"声笔快打","description":"","frontmatter":{"sidebar":false,"editLink":false,"lastUpdated":false},"headers":[],"relativePath":"sbkd/index.md","filePath":"sbkd/index.md"}'),ta={name:"sbkd/index.md"},ca=Object.assign(ta,{setup(e){return(t,o)=>{const n=Br("ClientOnly");return Qe(),yo("div",null,[Jl,Ql,ea,Se(n,null,{default:Ne(()=>[Se(Zl)]),_:1})])}}});export{sa as __pageData,ca as default};
