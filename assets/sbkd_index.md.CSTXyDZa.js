import{h as Nn,b as ft,o as ht,V as Me,W as Lt,ac as mo,ad as Fn,S as Oo,u as qe,N as Yt,x as Xt,ae as Mn,r as yt,P as An,l as $n,g as En,af as go,ag as Bn,c as be,ah as Ln,ai as Kn,K as Hn,aj as Dn,T as rt,U as jn,y as Vn,m as bo,ak as Wn,B as Un,t as To,w as Gn,q as qn,s as Yn,a9 as Xn,al as Zn,n as gt,a2 as Jn,$ as Qn,am as er,f as wt,an as _o,ao as Zt,ap as Jt,aq as No,ar as Qt,as as Fo,at as tt,au as Mo,av as Ao,aw as $o,ax as tr,ay as or,D as nr,E as rr,G as ir}from"./chunks/util.CvIUoYmH.js";import{h as O,y as Be,iZ as lr,h8 as ar,h9 as eo,W as sr,d as ae,l as Ye,hi as dr,hj as cr,k as T,a4 as d,N as to,U as Je,r as ur,O as ce,T as oo,ha as fe,$ as me,z as Kt,F as no,hc as Eo,hd as Bo,o as Ge,c as ro,m as je,b as xt,w as _e,J as Ce,p as he,a as Fe,t as ot,i_ as fr,A as hr,i$ as vr,E as pr}from"./chunks/framework.CJd9SWQ9.js";import{y as Lo,a1 as Ht,a2 as vt,d as I,g as R,b as V,u as Ve,k as Ie,x as mr,m as de,f as U,E as ke,l as kt,n as Qe,o as We,N as Ko}from"./chunks/Space.D7kWD7OC.js";import{d as Ho,e as bt,b as gr,i as io,g as br,h as lo,u as Do,j as Dt,V as jo,k as Vo,l as Wo,a as jt,r as yr,p as Uo,N as wr,f as xr,c as yo}from"./chunks/text.D1WxqrT4.js";import{r as ze,N as Cr,b as Sr,m as kr,k as ao,a as zr}from"./chunks/Input.Ia_T3E77.js";import{g as Rr}from"./chunks/theme.DOuqnTlZ.js";function et(e,o){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[o]!==void 0)return!0;t=t.parentElement}return!1}function Pr(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Ir(e){return o=>{o?e.value=o.$el:e.value=null}}function _t(e){const o=e.filter(t=>t!==void 0);if(o.length!==0)return o.length===1?o[0]:t=>{e.forEach(n=>{n&&n(t)})}}function Or(e,o,t){if(!o)return e;const n=O(e.value);let r=null;return Be(e,i=>{r!==null&&window.clearTimeout(r),i===!0?t&&!t.value?n.value=!0:r=window.setTimeout(()=>{n.value=!0},o):n.value=!1}),n}function Tr(e={},o){const t=lr({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:r}=e,i=c=>{switch(c.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}n!==void 0&&Object.keys(n).forEach(p=>{if(p!==c.key)return;const u=n[p];if(typeof u=="function")u(c);else{const{stop:v=!1,prevent:g=!1}=u;v&&c.stopPropagation(),g&&c.preventDefault(),u.handler(c)}})},l=c=>{switch(c.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}r!==void 0&&Object.keys(r).forEach(p=>{if(p!==c.key)return;const u=r[p];if(typeof u=="function")u(c);else{const{stop:v=!1,prevent:g=!1}=u;v&&c.stopPropagation(),g&&c.preventDefault(),u.handler(c)}})},a=()=>{(o===void 0||o.value)&&(ht("keydown",document,i),ht("keyup",document,l)),o!==void 0&&Be(o,c=>{c?(ht("keydown",document,i),ht("keyup",document,l)):(ft("keydown",document,i),ft("keyup",document,l))})};return Nn()?(ar(a),eo(()=>{(o===void 0||o.value)&&(ft("keydown",document,i),ft("keyup",document,l))})):a(),sr(t)}function wo(e){return e&-e}class _r{constructor(o,t){this.l=o,this.min=t;const n=new Array(o+1);for(let r=0;r<o+1;++r)n[r]=0;this.ft=n}add(o,t){if(t===0)return;const{l:n,ft:r}=this;for(o+=1;o<=n;)r[o]+=t,o+=wo(o)}get(o){return this.sum(o+1)-this.sum(o)}sum(o){if(o===void 0&&(o=this.l),o<=0)return 0;const{ft:t,min:n,l:r}=this;if(o>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let i=o*n;for(;o>0;)i+=t[o],o-=wo(o);return i}getBound(o){let t=0,n=this.l;for(;n>t;){const r=Math.floor((t+n)/2),i=this.sum(r);if(i>o){n=r;continue}else if(i<o){if(t===r)return this.sum(t+1)<=o?t+1:r;t=r}else return r}return t}}let pt;function Nr(){return typeof document>"u"?!1:(pt===void 0&&("matchMedia"in window?pt=window.matchMedia("(pointer:coarse)").matches:pt=!1),pt)}let Nt;function xo(){return typeof document>"u"?1:(Nt===void 0&&(Nt="chrome"in window?window.devicePixelRatio:1),Nt)}const Fr=bt(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[bt("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[bt("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Mr=ae({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const o=Lo();Fr.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Ho,ssr:o}),Ye(()=>{const{defaultScrollIndex:P,defaultScrollKey:y}=e;P!=null?m({index:P}):y!=null&&m({key:y})});let t=!1,n=!1;dr(()=>{if(t=!1,!n){n=!0;return}m({top:v.value,left:u})}),cr(()=>{t=!0,n||(n=!0)});const r=T(()=>{const P=new Map,{keyField:y}=e;return e.items.forEach((N,K)=>{P.set(N[y],K)}),P}),i=O(null),l=O(void 0),a=new Map,c=T(()=>{const{items:P,itemSize:y,keyField:N}=e,K=new _r(P.length,y);return P.forEach((H,Z)=>{const M=H[N],W=a.get(M);W!==void 0&&K.add(Z,W)}),K}),p=O(0);let u=0;const v=O(0),g=Me(()=>Math.max(c.value.getBound(v.value-Ht(e.paddingTop))-1,0)),b=T(()=>{const{value:P}=l;if(P===void 0)return[];const{items:y,itemSize:N}=e,K=g.value,H=Math.min(K+Math.ceil(P/N+1),y.length-1),Z=[];for(let M=K;M<=H;++M)Z.push(y[M]);return Z}),m=(P,y)=>{if(typeof P=="number"){E(P,y,"auto");return}const{left:N,top:K,index:H,key:Z,position:M,behavior:W,debounce:te=!0}=P;if(N!==void 0||K!==void 0)E(N,K,W);else if(H!==void 0)x(H,W,te);else if(Z!==void 0){const ne=r.value.get(Z);ne!==void 0&&x(ne,W,te)}else M==="bottom"?E(0,Number.MAX_SAFE_INTEGER,W):M==="top"&&E(0,0,W)};let C,k=null;function x(P,y,N){const{value:K}=c,H=K.sum(P)+Ht(e.paddingTop);if(!N)i.value.scrollTo({left:0,top:H,behavior:y});else{C=P,k!==null&&window.clearTimeout(k),k=window.setTimeout(()=>{C=void 0,k=null},16);const{scrollTop:Z,offsetHeight:M}=i.value;if(H>Z){const W=K.get(P);H+W<=Z+M||i.value.scrollTo({left:0,top:H+W-M,behavior:y})}else i.value.scrollTo({left:0,top:H,behavior:y})}}function E(P,y,N){i.value.scrollTo({left:P,top:y,behavior:N})}function D(P,y){var N,K,H;if(t||e.ignoreItemResize||Y(y.target))return;const{value:Z}=c,M=r.value.get(P),W=Z.get(M),te=(H=(K=(N=y.borderBoxSize)===null||N===void 0?void 0:N[0])===null||K===void 0?void 0:K.blockSize)!==null&&H!==void 0?H:y.contentRect.height;if(te===W)return;te-e.itemSize===0?a.delete(P):a.set(P,te-e.itemSize);const B=te-W;if(B===0)return;Z.add(M,B);const f=i.value;if(f!=null){if(C===void 0){const s=Z.sum(M);f.scrollTop>s&&f.scrollBy(0,B)}else if(M<C)f.scrollBy(0,B);else if(M===C){const s=Z.sum(M);te+s>f.scrollTop+f.offsetHeight&&f.scrollBy(0,B)}Q()}p.value++}const z=!Nr();let _=!1;function G(P){var y;(y=e.onScroll)===null||y===void 0||y.call(e,P),(!z||!_)&&Q()}function j(P){var y;if((y=e.onWheel)===null||y===void 0||y.call(e,P),z){const N=i.value;if(N!=null){if(P.deltaX===0&&(N.scrollTop===0&&P.deltaY<=0||N.scrollTop+N.offsetHeight>=N.scrollHeight&&P.deltaY>=0))return;P.preventDefault(),N.scrollTop+=P.deltaY/xo(),N.scrollLeft+=P.deltaX/xo(),Q(),_=!0,gr(()=>{_=!1})}}}function X(P){if(t||Y(P.target)||P.contentRect.height===l.value)return;l.value=P.contentRect.height;const{onResize:y}=e;y!==void 0&&y(P)}function Q(){const{value:P}=i;P!=null&&(v.value=P.scrollTop,u=P.scrollLeft)}function Y(P){let y=P;for(;y!==null;){if(y.style.display==="none")return!0;y=y.parentElement}return!1}return{listHeight:l,listStyle:{overflow:"auto"},keyToIndex:r,itemsStyle:T(()=>{const{itemResizable:P}=e,y=vt(c.value.sum());return p.value,[e.itemsStyle,{boxSizing:"content-box",height:P?"":y,minHeight:P?y:"",paddingTop:vt(e.paddingTop),paddingBottom:vt(e.paddingBottom)}]}),visibleItemsStyle:T(()=>(p.value,{transform:`translateY(${vt(c.value.sum(g.value))})`})),viewportItems:b,listElRef:i,itemsElRef:O(null),scrollTo:m,handleListResize:X,handleListScroll:G,handleListWheel:j,handleItemResize:D}},render(){const{itemResizable:e,keyField:o,keyToIndex:t,visibleItemsTag:n}=this;return d(Lt,{onResize:this.handleListResize},{default:()=>{var r,i;return d("div",to(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?d("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[d(n,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(l=>{const a=l[o],c=t.get(a),p=this.$slots.default({item:l,index:c})[0];return e?d(Lt,{key:a,onResize:u=>this.handleItemResize(a,u)},{default:()=>p}):(p.key=a,p)})})]):(i=(r=this.$slots).empty)===null||i===void 0?void 0:i.call(r)])}})}}),Le="v-hidden",Ar=bt("[v-hidden]",{display:"none!important"}),Vt=ae({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:o}){const t=O(null),n=O(null);function r(l){const{value:a}=t,{getCounter:c,getTail:p}=e;let u;if(c!==void 0?u=c():u=n.value,!a||!u)return;u.hasAttribute(Le)&&u.removeAttribute(Le);const{children:v}=a;if(l.showAllItemsBeforeCalculate)for(const D of v)D.hasAttribute(Le)&&D.removeAttribute(Le);const g=a.offsetWidth,b=[],m=o.tail?p==null?void 0:p():null;let C=m?m.offsetWidth:0,k=!1;const x=a.children.length-(o.tail?1:0);for(let D=0;D<x-1;++D){if(D<0)continue;const z=v[D];if(k){z.hasAttribute(Le)||z.setAttribute(Le,"");continue}else z.hasAttribute(Le)&&z.removeAttribute(Le);const _=z.offsetWidth;if(C+=_,b[D]=_,C>g){const{updateCounter:G}=e;for(let j=D;j>=0;--j){const X=x-1-j;G!==void 0?G(X):u.textContent=`${X}`;const Q=u.offsetWidth;if(C-=b[j],C+Q<=g||j===0){k=!0,D=j-1,m&&(D===-1?(m.style.maxWidth=`${g-Q}px`,m.style.boxSizing="border-box"):m.style.maxWidth="");const{onUpdateCount:Y}=e;Y&&Y(X);break}}}}const{onUpdateOverflow:E}=e;k?E!==void 0&&E(!0):(E!==void 0&&E(!1),u.setAttribute(Le,""))}const i=Lo();return Ar.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Ho,ssr:i}),Ye(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:n,sync:r}},render(){const{$slots:e}=this;return Je(()=>this.sync({showAllItemsBeforeCalculate:!1})),d("div",{class:"v-overflow",ref:"selfRef"},[ur(e,"default"),e.counter?e.counter():d("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Go(e,o){o&&(Ye(()=>{const{value:t}=e;t&&mo.registerHandler(t,o)}),eo(()=>{const{value:t}=e;t&&mo.unregisterHandler(t)}))}const $r=ae({name:"Checkmark",render(){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},d("g",{fill:"none"},d("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Er=ae({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Br=ae({name:"Empty",render(){return d("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),d("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Lr=ae({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Kr=ae({props:{onFocus:Function,onBlur:Function},setup(e){return()=>d("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Co(e){return Array.isArray(e)?e:[e]}const Wt={STOP:"STOP"};function qo(e,o){const t=o(e);e.children!==void 0&&t!==Wt.STOP&&e.children.forEach(n=>qo(n,o))}function Hr(e,o={}){const{preserveGroup:t=!1}=o,n=[],r=t?l=>{l.isLeaf||(n.push(l.key),i(l.children))}:l=>{l.isLeaf||(l.isGroup||n.push(l.key),i(l.children))};function i(l){l.forEach(r)}return i(e),n}function Dr(e,o){const{isLeaf:t}=e;return t!==void 0?t:!o(e)}function jr(e){return e.children}function Vr(e){return e.key}function Wr(){return!1}function Ur(e,o){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(o(e)))}function Gr(e){return e.disabled===!0}function qr(e,o){return e.isLeaf===!1&&!Array.isArray(o(e))}function Ft(e){var o;return e==null?[]:Array.isArray(e)?e:(o=e.checkedKeys)!==null&&o!==void 0?o:[]}function Mt(e){var o;return e==null||Array.isArray(e)?[]:(o=e.indeterminateKeys)!==null&&o!==void 0?o:[]}function Yr(e,o){const t=new Set(e);return o.forEach(n=>{t.has(n)||t.add(n)}),Array.from(t)}function Xr(e,o){const t=new Set(e);return o.forEach(n=>{t.has(n)&&t.delete(n)}),Array.from(t)}function Zr(e){return(e==null?void 0:e.type)==="group"}function Jr(e){const o=new Map;return e.forEach((t,n)=>{o.set(t.key,n)}),t=>{var n;return(n=o.get(t))!==null&&n!==void 0?n:null}}class Qr extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function ei(e,o,t,n){return Ct(o.concat(e),t,n,!1)}function ti(e,o){const t=new Set;return e.forEach(n=>{const r=o.treeNodeMap.get(n);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function oi(e,o,t,n){const r=Ct(o,t,n,!1),i=Ct(e,t,n,!0),l=ti(e,t),a=[];return r.forEach(c=>{(i.has(c)||l.has(c))&&a.push(c)}),a.forEach(c=>r.delete(c)),r}function At(e,o){const{checkedKeys:t,keysToCheck:n,keysToUncheck:r,indeterminateKeys:i,cascade:l,leafOnly:a,checkStrategy:c,allowNotLoaded:p}=e;if(!l)return n!==void 0?{checkedKeys:Yr(t,n),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:Xr(t,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:u}=o;let v;r!==void 0?v=oi(r,t,o,p):n!==void 0?v=ei(n,t,o,p):v=Ct(t,o,p,!1);const g=c==="parent",b=c==="child"||a,m=v,C=new Set,k=Math.max.apply(null,Array.from(u.keys()));for(let x=k;x>=0;x-=1){const E=x===0,D=u.get(x);for(const z of D){if(z.isLeaf)continue;const{key:_,shallowLoaded:G}=z;if(b&&G&&z.children.forEach(Y=>{!Y.disabled&&!Y.isLeaf&&Y.shallowLoaded&&m.has(Y.key)&&m.delete(Y.key)}),z.disabled||!G)continue;let j=!0,X=!1,Q=!0;for(const Y of z.children){const P=Y.key;if(!Y.disabled){if(Q&&(Q=!1),m.has(P))X=!0;else if(C.has(P)){X=!0,j=!1;break}else if(j=!1,X)break}}j&&!Q?(g&&z.children.forEach(Y=>{!Y.disabled&&m.has(Y.key)&&m.delete(Y.key)}),m.add(_)):X&&C.add(_),E&&b&&m.has(_)&&m.delete(_)}}return{checkedKeys:Array.from(m),indeterminateKeys:Array.from(C)}}function Ct(e,o,t,n){const{treeNodeMap:r,getChildren:i}=o,l=new Set,a=new Set(e);return e.forEach(c=>{const p=r.get(c);p!==void 0&&qo(p,u=>{if(u.disabled)return Wt.STOP;const{key:v}=u;if(!l.has(v)&&(l.add(v),a.add(v),qr(u.rawNode,i))){if(n)return Wt.STOP;if(!t)throw new Qr}})}),a}function ni(e,{includeGroup:o=!1,includeSelf:t=!0},n){var r;const i=n.treeNodeMap;let l=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const a={keyPath:[],treeNodePath:[],treeNode:l};if(l!=null&&l.ignored)return a.treeNode=null,a;for(;l;)!l.ignored&&(o||!l.isGroup)&&a.treeNodePath.push(l),l=l.parent;return a.treeNodePath.reverse(),t||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(c=>c.key),a}function ri(e){if(e.length===0)return null;const o=e[0];return o.isGroup||o.ignored||o.disabled?o.getNext():o}function ii(e,o){const t=e.siblings,n=t.length,{index:r}=e;return o?t[(r+1)%n]:r===t.length-1?null:t[r+1]}function So(e,o,{loop:t=!1,includeDisabled:n=!1}={}){const r=o==="prev"?li:ii,i={reverse:o==="prev"};let l=!1,a=null;function c(p){if(p!==null){if(p===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){a=e;return}}else if((!p.disabled||n)&&!p.ignored&&!p.isGroup){a=p;return}if(p.isGroup){const u=so(p,i);u!==null?a=u:c(r(p,t))}else{const u=r(p,!1);if(u!==null)c(u);else{const v=ai(p);v!=null&&v.isGroup?c(r(v,t)):t&&c(r(p,!0))}}}}return c(e),a}function li(e,o){const t=e.siblings,n=t.length,{index:r}=e;return o?t[(r-1+n)%n]:r===0?null:t[r-1]}function ai(e){return e.parent}function so(e,o={}){const{reverse:t=!1}=o,{children:n}=e;if(n){const{length:r}=n,i=t?r-1:0,l=t?-1:r,a=t?-1:1;for(let c=i;c!==l;c+=a){const p=n[c];if(!p.disabled&&!p.ignored)if(p.isGroup){const u=so(p,o);if(u!==null)return u}else return p}}return null}const si={getChild(){return this.ignored?null:so(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return So(this,"next",e)},getPrev(e={}){return So(this,"prev",e)}};function di(e,o){const t=o?new Set(o):void 0,n=[];function r(i){i.forEach(l=>{n.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||t===void 0||t.has(l.key))&&r(l.children)})}return r(e),n}function ci(e,o){const t=e.key;for(;o;){if(o.key===t)return!0;o=o.parent}return!1}function Yo(e,o,t,n,r,i=null,l=0){const a=[];return e.forEach((c,p)=>{var u;const v=Object.create(n);if(v.rawNode=c,v.siblings=a,v.level=l,v.index=p,v.isFirstChild=p===0,v.isLastChild=p+1===e.length,v.parent=i,!v.ignored){const g=r(c);Array.isArray(g)&&(v.children=Yo(g,o,t,n,r,v,l+1))}a.push(v),o.set(v.key,v),t.has(l)||t.set(l,[]),(u=t.get(l))===null||u===void 0||u.push(v)}),a}function nt(e,o={}){var t;const n=new Map,r=new Map,{getDisabled:i=Gr,getIgnored:l=Wr,getIsGroup:a=Zr,getKey:c=Vr}=o,p=(t=o.getChildren)!==null&&t!==void 0?t:jr,u=o.ignoreEmptyChildren?z=>{const _=p(z);return Array.isArray(_)?_.length?_:null:_}:p,v=Object.assign({get key(){return c(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return Dr(this.rawNode,u)},get shallowLoaded(){return Ur(this.rawNode,u)},get ignored(){return l(this.rawNode)},contains(z){return ci(this,z)}},si),g=Yo(e,n,r,v,u);function b(z){if(z==null)return null;const _=n.get(z);return _&&!_.isGroup&&!_.ignored?_:null}function m(z){if(z==null)return null;const _=n.get(z);return _&&!_.ignored?_:null}function C(z,_){const G=m(z);return G?G.getPrev(_):null}function k(z,_){const G=m(z);return G?G.getNext(_):null}function x(z){const _=m(z);return _?_.getParent():null}function E(z){const _=m(z);return _?_.getChild():null}const D={treeNodes:g,treeNodeMap:n,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:u,getFlattenedNodes(z){return di(g,z)},getNode:b,getPrev:C,getNext:k,getParent:x,getChild:E,getFirstAvailableNode(){return ri(g)},getPath(z,_={}){return ni(z,_,D)},getCheckedKeys(z,_={}){const{cascade:G=!0,leafOnly:j=!1,checkStrategy:X="all",allowNotLoaded:Q=!1}=_;return At({checkedKeys:Ft(z),indeterminateKeys:Mt(z),cascade:G,leafOnly:j,checkStrategy:X,allowNotLoaded:Q},D)},check(z,_,G={}){const{cascade:j=!0,leafOnly:X=!1,checkStrategy:Q="all",allowNotLoaded:Y=!1}=G;return At({checkedKeys:Ft(_),indeterminateKeys:Mt(_),keysToCheck:z==null?[]:Co(z),cascade:j,leafOnly:X,checkStrategy:Q,allowNotLoaded:Y},D)},uncheck(z,_,G={}){const{cascade:j=!0,leafOnly:X=!1,checkStrategy:Q="all",allowNotLoaded:Y=!1}=G;return At({checkedKeys:Ft(_),indeterminateKeys:Mt(_),keysToUncheck:z==null?[]:Co(z),cascade:j,leafOnly:X,checkStrategy:Q,allowNotLoaded:Y},D)},getNonLeafKeys(z={}){return Hr(g,z)}};return D}const ui=I("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[R("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[V("+",[R("description",`
 margin-top: 8px;
 `)])]),R("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),R("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),fi=Object.assign(Object.assign({},Ie.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),hi=ae({name:"Empty",props:fi,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Ve(e),n=Ie("Empty","-empty",ui,Fn,e,o),{localeRef:r}=Oo("Empty"),i=ce(mr,null),l=T(()=>{var u,v,g;return(u=e.description)!==null&&u!==void 0?u:(g=(v=i==null?void 0:i.mergedComponentPropsRef.value)===null||v===void 0?void 0:v.Empty)===null||g===void 0?void 0:g.description}),a=T(()=>{var u,v;return((v=(u=i==null?void 0:i.mergedComponentPropsRef.value)===null||u===void 0?void 0:u.Empty)===null||v===void 0?void 0:v.renderIcon)||(()=>d(Br,null))}),c=T(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:v},self:{[de("iconSize",u)]:g,[de("fontSize",u)]:b,textColor:m,iconColor:C,extraTextColor:k}}=n.value;return{"--n-icon-size":g,"--n-font-size":b,"--n-bezier":v,"--n-text-color":m,"--n-icon-color":C,"--n-extra-text-color":k}}),p=t?qe("empty",T(()=>{let u="";const{size:v}=e;return u+=v[0],u}),c,e):void 0;return{mergedClsPrefix:o,mergedRenderIcon:a,localizedDescription:T(()=>l.value||r.value.description),cssVars:t?void 0:c,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender}},render(){const{$slots:e,mergedClsPrefix:o,onRender:t}=this;return t==null||t(),d("div",{class:[`${o}-empty`,this.themeClass],style:this.cssVars},this.showIcon?d("div",{class:`${o}-empty__icon`},e.icon?e.icon():d(Yt,{clsPrefix:o},{default:this.mergedRenderIcon})):null,this.showDescription?d("div",{class:`${o}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?d("div",{class:`${o}-empty__extra`},e.extra()):null)}});function vi(e,o){return d(oo,{name:"fade-in-scale-up-transition"},{default:()=>e?d(Yt,{clsPrefix:o,class:`${o}-base-select-option__check`},{default:()=>d($r)}):null})}const ko=ae({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:o,pendingTmNodeRef:t,multipleRef:n,valueSetRef:r,renderLabelRef:i,renderOptionRef:l,labelFieldRef:a,valueFieldRef:c,showCheckmarkRef:p,nodePropsRef:u,handleOptionClick:v,handleOptionMouseEnter:g}=ce(io),b=Me(()=>{const{value:x}=t;return x?e.tmNode.key===x.key:!1});function m(x){const{tmNode:E}=e;E.disabled||v(x,E)}function C(x){const{tmNode:E}=e;E.disabled||g(x,E)}function k(x){const{tmNode:E}=e,{value:D}=b;E.disabled||D||g(x,E)}return{multiple:n,isGrouped:Me(()=>{const{tmNode:x}=e,{parent:E}=x;return E&&E.rawNode.type==="group"}),showCheckmark:p,nodeProps:u,isPending:b,isSelected:Me(()=>{const{value:x}=o,{value:E}=n;if(x===null)return!1;const D=e.tmNode.rawNode[c.value];if(E){const{value:z}=r;return z.has(D)}else return x===D}),labelField:a,renderLabel:i,renderOption:l,handleMouseMove:k,handleMouseEnter:C,handleClick:m}},render(){const{clsPrefix:e,tmNode:{rawNode:o},isSelected:t,isPending:n,isGrouped:r,showCheckmark:i,nodeProps:l,renderOption:a,renderLabel:c,handleClick:p,handleMouseEnter:u,handleMouseMove:v}=this,g=vi(t,e),b=c?[c(o,t),i&&g]:[ze(o[this.labelField],o,t),i&&g],m=l==null?void 0:l(o),C=d("div",Object.assign({},m,{class:[`${e}-base-select-option`,o.class,m==null?void 0:m.class,{[`${e}-base-select-option--disabled`]:o.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:r,[`${e}-base-select-option--pending`]:n,[`${e}-base-select-option--show-checkmark`]:i}],style:[(m==null?void 0:m.style)||"",o.style||""],onClick:_t([p,m==null?void 0:m.onClick]),onMouseenter:_t([u,m==null?void 0:m.onMouseenter]),onMousemove:_t([v,m==null?void 0:m.onMousemove])}),d("div",{class:`${e}-base-select-option__content`},b));return o.render?o.render({node:C,option:o,selected:t}):a?a({node:C,option:o,selected:t}):C}}),zo=ae({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:o,labelFieldRef:t,nodePropsRef:n}=ce(io);return{labelField:t,nodeProps:n,renderLabel:e,renderOption:o}},render(){const{clsPrefix:e,renderLabel:o,renderOption:t,nodeProps:n,tmNode:{rawNode:r}}=this,i=n==null?void 0:n(r),l=o?o(r,!1):ze(r[this.labelField],r,!1),a=d("div",Object.assign({},i,{class:[`${e}-base-select-group-header`,i==null?void 0:i.class]}),l);return r.render?r.render({node:a,option:r}):t?t({node:a,option:r,selected:!1}):a}}),pi=I("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[I("scrollbar",`
 max-height: var(--n-height);
 `),I("virtual-list",`
 max-height: var(--n-height);
 `),I("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[R("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),I("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),I("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),R("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),R("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),R("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),R("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),I("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),I("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[U("show-checkmark",`
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
 `),U("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),U("pending",[V("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),U("selected",`
 color: var(--n-option-text-color-active);
 `,[V("&::before",`
 background-color: var(--n-option-color-active);
 `),U("pending",[V("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),U("disabled",`
 cursor: not-allowed;
 `,[ke("selected",`
 color: var(--n-option-text-color-disabled);
 `),U("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),R("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Xt({enterScale:"0.5"})])])]),mi=ae({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Ie.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:t}=Ve(e),n=kt("InternalSelectMenu",t,o),r=Ie("InternalSelectMenu","-internal-select-menu",pi,Mn,e,fe(e,"clsPrefix")),i=O(null),l=O(null),a=O(null),c=T(()=>e.treeMate.getFlattenedNodes()),p=T(()=>Jr(c.value)),u=O(null);function v(){const{treeMate:f}=e;let s=null;const{value:L}=e;L===null?s=f.getFirstAvailableNode():(e.multiple?s=f.getNode((L||[])[(L||[]).length-1]):s=f.getNode(L),(!s||s.disabled)&&(s=f.getFirstAvailableNode())),K(s||null)}function g(){const{value:f}=u;f&&!e.treeMate.getNode(f.key)&&(u.value=null)}let b;Be(()=>e.show,f=>{f?b=Be(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?v():g(),Je(H)):g()},{immediate:!0}):b==null||b()},{immediate:!0}),eo(()=>{b==null||b()});const m=T(()=>Ht(r.value.self[de("optionHeight",e.size)])),C=T(()=>Qe(r.value.self[de("padding",e.size)])),k=T(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),x=T(()=>{const f=c.value;return f&&f.length===0});function E(f){const{onToggle:s}=e;s&&s(f)}function D(f){const{onScroll:s}=e;s&&s(f)}function z(f){var s;(s=a.value)===null||s===void 0||s.sync(),D(f)}function _(){var f;(f=a.value)===null||f===void 0||f.sync()}function G(){const{value:f}=u;return f||null}function j(f,s){s.disabled||K(s,!1)}function X(f,s){s.disabled||E(s)}function Q(f){var s;et(f,"action")||(s=e.onKeyup)===null||s===void 0||s.call(e,f)}function Y(f){var s;et(f,"action")||(s=e.onKeydown)===null||s===void 0||s.call(e,f)}function P(f){var s;(s=e.onMousedown)===null||s===void 0||s.call(e,f),!e.focusable&&f.preventDefault()}function y(){const{value:f}=u;f&&K(f.getNext({loop:!0}),!0)}function N(){const{value:f}=u;f&&K(f.getPrev({loop:!0}),!0)}function K(f,s=!1){u.value=f,s&&H()}function H(){var f,s;const L=u.value;if(!L)return;const ee=p.value(L.key);ee!==null&&(e.virtualScroll?(f=l.value)===null||f===void 0||f.scrollTo({index:ee}):(s=a.value)===null||s===void 0||s.scrollTo({index:ee,elSize:m.value}))}function Z(f){var s,L;!((s=i.value)===null||s===void 0)&&s.contains(f.target)&&((L=e.onFocus)===null||L===void 0||L.call(e,f))}function M(f){var s,L;!((s=i.value)===null||s===void 0)&&s.contains(f.relatedTarget)||(L=e.onBlur)===null||L===void 0||L.call(e,f)}me(io,{handleOptionMouseEnter:j,handleOptionClick:X,valueSetRef:k,pendingTmNodeRef:u,nodePropsRef:fe(e,"nodeProps"),showCheckmarkRef:fe(e,"showCheckmark"),multipleRef:fe(e,"multiple"),valueRef:fe(e,"value"),renderLabelRef:fe(e,"renderLabel"),renderOptionRef:fe(e,"renderOption"),labelFieldRef:fe(e,"labelField"),valueFieldRef:fe(e,"valueField")}),me(br,i),Ye(()=>{const{value:f}=a;f&&f.sync()});const W=T(()=>{const{size:f}=e,{common:{cubicBezierEaseInOut:s},self:{height:L,borderRadius:ee,color:Re,groupHeaderTextColor:re,actionDividerColor:Se,optionTextColorPressed:w,optionTextColor:Ne,optionTextColorDisabled:xe,optionTextColorActive:F,optionOpacityDisabled:q,optionCheckColor:ue,actionTextColor:ye,optionColorPending:Pe,optionColorActive:Oe,loadingColor:Te,loadingSize:Ke,optionColorActivePending:He,[de("optionFontSize",f)]:Ae,[de("optionHeight",f)]:$e,[de("optionPadding",f)]:ve}}=r.value;return{"--n-height":L,"--n-action-divider-color":Se,"--n-action-text-color":ye,"--n-bezier":s,"--n-border-radius":ee,"--n-color":Re,"--n-option-font-size":Ae,"--n-group-header-text-color":re,"--n-option-check-color":ue,"--n-option-color-pending":Pe,"--n-option-color-active":Oe,"--n-option-color-active-pending":He,"--n-option-height":$e,"--n-option-opacity-disabled":q,"--n-option-text-color":Ne,"--n-option-text-color-active":F,"--n-option-text-color-disabled":xe,"--n-option-text-color-pressed":w,"--n-option-padding":ve,"--n-option-padding-left":Qe(ve,"left"),"--n-option-padding-right":Qe(ve,"right"),"--n-loading-color":Te,"--n-loading-size":Ke}}),{inlineThemeDisabled:te}=e,ne=te?qe("internal-select-menu",T(()=>e.size[0]),W,e):void 0,B={selfRef:i,next:y,prev:N,getPendingTmNode:G};return Go(i,e.onResize),Object.assign({mergedTheme:r,mergedClsPrefix:o,rtlEnabled:n,virtualListRef:l,scrollbarRef:a,itemSize:m,padding:C,flattenedNodes:c,empty:x,virtualListContainer(){const{value:f}=l;return f==null?void 0:f.listElRef},virtualListContent(){const{value:f}=l;return f==null?void 0:f.itemsElRef},doScroll:D,handleFocusin:Z,handleFocusout:M,handleKeyUp:Q,handleKeyDown:Y,handleMouseDown:P,handleVirtualListResize:_,handleVirtualListScroll:z,cssVars:te?void 0:W,themeClass:ne==null?void 0:ne.themeClass,onRender:ne==null?void 0:ne.onRender},B)},render(){const{$slots:e,virtualScroll:o,clsPrefix:t,mergedTheme:n,themeClass:r,onRender:i}=this;return i==null||i(),d("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,this.rtlEnabled&&`${t}-base-select-menu--rtl`,r,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},yt(e.header,l=>l&&d("div",{class:`${t}-base-select-menu__header`,"data-header":!0,key:"header"},l)),this.loading?d("div",{class:`${t}-base-select-menu__loading`},d(An,{clsPrefix:t,strokeWidth:20})):this.empty?d("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},En(e.empty,()=>[d(hi,{theme:n.peers.Empty,themeOverrides:n.peerOverrides.Empty})])):d($n,{ref:"scrollbarRef",theme:n.peers.Scrollbar,themeOverrides:n.peerOverrides.Scrollbar,scrollable:this.scrollable,container:o?this.virtualListContainer:void 0,content:o?this.virtualListContent:void 0,onScroll:o?void 0:this.doScroll},{default:()=>o?d(Mr,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:l})=>l.isGroup?d(zo,{key:l.key,clsPrefix:t,tmNode:l}):l.ignored?null:d(ko,{clsPrefix:t,key:l.key,tmNode:l})}):d("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(l=>l.isGroup?d(zo,{key:l.key,clsPrefix:t,tmNode:l}):d(ko,{clsPrefix:t,key:l.key,tmNode:l})))}),yt(e.action,l=>l&&[d("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},l),d(Kr,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),gi={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},bi=I("tag",`
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
`,[U("strong",`
 font-weight: var(--n-font-weight-strong);
 `),R("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),R("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),R("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),R("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),U("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[R("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),R("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),U("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),U("icon, avatar",[U("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),U("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),U("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[ke("disabled",[V("&:hover","background-color: var(--n-color-hover-checkable);",[ke("checked","color: var(--n-text-color-hover-checkable);")]),V("&:active","background-color: var(--n-color-pressed-checkable);",[ke("checked","color: var(--n-text-color-pressed-checkable);")])]),U("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[ke("disabled",[V("&:hover","background-color: var(--n-color-checked-hover);"),V("&:active","background-color: var(--n-color-checked-pressed);")])])])]),yi=Object.assign(Object.assign(Object.assign({},Ie.props),gi),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),wi=We("n-tag"),$t=ae({name:"Tag",props:yi,setup(e){const o=O(null),{mergedBorderedRef:t,mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=Ve(e),l=Ie("Tag","-tag",bi,Bn,e,n);me(wi,{roundRef:fe(e,"round")});function a(b){if(!e.disabled&&e.checkable){const{checked:m,onCheckedChange:C,onUpdateChecked:k,"onUpdate:checked":x}=e;k&&k(!m),x&&x(!m),C&&C(!m)}}function c(b){if(e.triggerClickOnClose||b.stopPropagation(),!e.disabled){const{onClose:m}=e;m&&be(m,b)}}const p={setTextContent(b){const{value:m}=o;m&&(m.textContent=b)}},u=kt("Tag",i,n),v=T(()=>{const{type:b,size:m,color:{color:C,textColor:k}={}}=e,{common:{cubicBezierEaseInOut:x},self:{padding:E,closeMargin:D,borderRadius:z,opacityDisabled:_,textColorCheckable:G,textColorHoverCheckable:j,textColorPressedCheckable:X,textColorChecked:Q,colorCheckable:Y,colorHoverCheckable:P,colorPressedCheckable:y,colorChecked:N,colorCheckedHover:K,colorCheckedPressed:H,closeBorderRadius:Z,fontWeightStrong:M,[de("colorBordered",b)]:W,[de("closeSize",m)]:te,[de("closeIconSize",m)]:ne,[de("fontSize",m)]:B,[de("height",m)]:f,[de("color",b)]:s,[de("textColor",b)]:L,[de("border",b)]:ee,[de("closeIconColor",b)]:Re,[de("closeIconColorHover",b)]:re,[de("closeIconColorPressed",b)]:Se,[de("closeColorHover",b)]:w,[de("closeColorPressed",b)]:Ne}}=l.value,xe=Qe(D);return{"--n-font-weight-strong":M,"--n-avatar-size-override":`calc(${f} - 8px)`,"--n-bezier":x,"--n-border-radius":z,"--n-border":ee,"--n-close-icon-size":ne,"--n-close-color-pressed":Ne,"--n-close-color-hover":w,"--n-close-border-radius":Z,"--n-close-icon-color":Re,"--n-close-icon-color-hover":re,"--n-close-icon-color-pressed":Se,"--n-close-icon-color-disabled":Re,"--n-close-margin-top":xe.top,"--n-close-margin-right":xe.right,"--n-close-margin-bottom":xe.bottom,"--n-close-margin-left":xe.left,"--n-close-size":te,"--n-color":C||(t.value?W:s),"--n-color-checkable":Y,"--n-color-checked":N,"--n-color-checked-hover":K,"--n-color-checked-pressed":H,"--n-color-hover-checkable":P,"--n-color-pressed-checkable":y,"--n-font-size":B,"--n-height":f,"--n-opacity-disabled":_,"--n-padding":E,"--n-text-color":k||L,"--n-text-color-checkable":G,"--n-text-color-checked":Q,"--n-text-color-hover-checkable":j,"--n-text-color-pressed-checkable":X}}),g=r?qe("tag",T(()=>{let b="";const{type:m,size:C,color:{color:k,textColor:x}={}}=e;return b+=m[0],b+=C[0],k&&(b+=`a${go(k)}`),x&&(b+=`b${go(x)}`),t.value&&(b+="c"),b}),v,e):void 0;return Object.assign(Object.assign({},p),{rtlEnabled:u,mergedClsPrefix:n,contentRef:o,mergedBordered:t,handleClick:a,handleCloseClick:c,cssVars:r?void 0:v,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender})},render(){var e,o;const{mergedClsPrefix:t,rtlEnabled:n,closable:r,color:{borderColor:i}={},round:l,onRender:a,$slots:c}=this;a==null||a();const p=yt(c.avatar,v=>v&&d("div",{class:`${t}-tag__avatar`},v)),u=yt(c.icon,v=>v&&d("div",{class:`${t}-tag__icon`},v));return d("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:n,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:l,[`${t}-tag--avatar`]:p,[`${t}-tag--icon`]:u,[`${t}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},u||p,d("span",{class:`${t}-tag__content`,ref:"contentRef"},(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e)),!this.checkable&&r?d(Cr,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:l,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?d("div",{class:`${t}-tag__border`,style:{borderColor:i}}):null)}}),xi=V([I("base-selection",`
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
 `,[I("base-loading",`
 color: var(--n-loading-color);
 `),I("base-selection-tags","min-height: var(--n-height);"),R("border, state-border",`
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
 `),R("state-border",`
 z-index: 1;
 border-color: #0000;
 `),I("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[R("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),I("base-selection-overlay",`
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
 `,[R("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),I("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[R("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),I("base-selection-tags",`
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
 `),I("base-selection-label",`
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
 `,[I("base-selection-input",`
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
 `,[R("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),R("render-label",`
 color: var(--n-text-color);
 `)]),ke("disabled",[V("&:hover",[R("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),U("focus",[R("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),U("active",[R("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),I("base-selection-label","background-color: var(--n-color-active);"),I("base-selection-tags","background-color: var(--n-color-active);")])]),U("disabled","cursor: not-allowed;",[R("arrow",`
 color: var(--n-arrow-color-disabled);
 `),I("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[I("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),R("render-label",`
 color: var(--n-text-color-disabled);
 `)]),I("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),I("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),I("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[R("input",`
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
 `),R("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>U(`${e}-status`,[R("state-border",`border: var(--n-border-${e});`),ke("disabled",[V("&:hover",[R("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),U("active",[R("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),I("base-selection-label",`background-color: var(--n-color-active-${e});`),I("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),U("focus",[R("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),I("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),I("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[V("&:last-child","padding-right: 0;"),I("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[R("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Ci=ae({name:"InternalSelection",props:Object.assign(Object.assign({},Ie.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:t}=Ve(e),n=kt("InternalSelection",t,o),r=O(null),i=O(null),l=O(null),a=O(null),c=O(null),p=O(null),u=O(null),v=O(null),g=O(null),b=O(null),m=O(!1),C=O(!1),k=O(!1),x=Ie("InternalSelection","-internal-selection",xi,Ln,e,fe(e,"clsPrefix")),E=T(()=>e.clearable&&!e.disabled&&(k.value||e.active)),D=T(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):ze(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),z=T(()=>{const S=e.selectedOption;if(S)return S[e.labelField]}),_=T(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function G(){var S;const{value:A}=r;if(A){const{value:pe}=i;pe&&(pe.style.width=`${A.offsetWidth}px`,e.maxTagCount!=="responsive"&&((S=g.value)===null||S===void 0||S.sync({showAllItemsBeforeCalculate:!1})))}}function j(){const{value:S}=b;S&&(S.style.display="none")}function X(){const{value:S}=b;S&&(S.style.display="inline-block")}Be(fe(e,"active"),S=>{S||j()}),Be(fe(e,"pattern"),()=>{e.multiple&&Je(G)});function Q(S){const{onFocus:A}=e;A&&A(S)}function Y(S){const{onBlur:A}=e;A&&A(S)}function P(S){const{onDeleteOption:A}=e;A&&A(S)}function y(S){const{onClear:A}=e;A&&A(S)}function N(S){const{onPatternInput:A}=e;A&&A(S)}function K(S){var A;(!S.relatedTarget||!(!((A=l.value)===null||A===void 0)&&A.contains(S.relatedTarget)))&&Q(S)}function H(S){var A;!((A=l.value)===null||A===void 0)&&A.contains(S.relatedTarget)||Y(S)}function Z(S){y(S)}function M(){k.value=!0}function W(){k.value=!1}function te(S){!e.active||!e.filterable||S.target!==i.value&&S.preventDefault()}function ne(S){P(S)}function B(S){if(S.key==="Backspace"&&!f.value&&!e.pattern.length){const{selectedOptions:A}=e;A!=null&&A.length&&ne(A[A.length-1])}}const f=O(!1);let s=null;function L(S){const{value:A}=r;if(A){const pe=S.target.value;A.textContent=pe,G()}e.ignoreComposition&&f.value?s=S:N(S)}function ee(){f.value=!0}function Re(){f.value=!1,e.ignoreComposition&&N(s),s=null}function re(S){var A;C.value=!0,(A=e.onPatternFocus)===null||A===void 0||A.call(e,S)}function Se(S){var A;C.value=!1,(A=e.onPatternBlur)===null||A===void 0||A.call(e,S)}function w(){var S,A;if(e.filterable)C.value=!1,(S=p.value)===null||S===void 0||S.blur(),(A=i.value)===null||A===void 0||A.blur();else if(e.multiple){const{value:pe}=a;pe==null||pe.blur()}else{const{value:pe}=c;pe==null||pe.blur()}}function Ne(){var S,A,pe;e.filterable?(C.value=!1,(S=p.value)===null||S===void 0||S.focus()):e.multiple?(A=a.value)===null||A===void 0||A.focus():(pe=c.value)===null||pe===void 0||pe.focus()}function xe(){const{value:S}=i;S&&(X(),S.focus())}function F(){const{value:S}=i;S&&S.blur()}function q(S){const{value:A}=u;A&&A.setTextContent(`+${S}`)}function ue(){const{value:S}=v;return S}function ye(){return i.value}let Pe=null;function Oe(){Pe!==null&&window.clearTimeout(Pe)}function Te(){e.active||(Oe(),Pe=window.setTimeout(()=>{_.value&&(m.value=!0)},100))}function Ke(){Oe()}function He(S){S||(Oe(),m.value=!1)}Be(_,S=>{S||(m.value=!1)}),Ye(()=>{Kt(()=>{const S=p.value;S&&(e.disabled?S.removeAttribute("tabindex"):S.tabIndex=C.value?-1:0)})}),Go(l,e.onResize);const{inlineThemeDisabled:Ae}=e,$e=T(()=>{const{size:S}=e,{common:{cubicBezierEaseInOut:A},self:{borderRadius:pe,color:Rt,placeholderColor:Pt,textColor:lt,paddingSingle:at,paddingMultiple:st,caretColor:It,colorDisabled:Ot,textColorDisabled:dt,placeholderColorDisabled:De,colorActive:h,boxShadowFocus:$,boxShadowActive:J,boxShadowHover:se,border:ie,borderFocus:oe,borderHover:le,borderActive:we,arrowColor:Ee,arrowColorDisabled:Tt,loadingColor:sn,colorActiveWarning:dn,boxShadowFocusWarning:cn,boxShadowActiveWarning:un,boxShadowHoverWarning:fn,borderWarning:hn,borderFocusWarning:vn,borderHoverWarning:pn,borderActiveWarning:mn,colorActiveError:gn,boxShadowFocusError:bn,boxShadowActiveError:yn,boxShadowHoverError:wn,borderError:xn,borderFocusError:Cn,borderHoverError:Sn,borderActiveError:kn,clearColor:zn,clearColorHover:Rn,clearColorPressed:Pn,clearSize:In,arrowSize:On,[de("height",S)]:Tn,[de("fontSize",S)]:_n}}=x.value,ct=Qe(at),ut=Qe(st);return{"--n-bezier":A,"--n-border":ie,"--n-border-active":we,"--n-border-focus":oe,"--n-border-hover":le,"--n-border-radius":pe,"--n-box-shadow-active":J,"--n-box-shadow-focus":$,"--n-box-shadow-hover":se,"--n-caret-color":It,"--n-color":Rt,"--n-color-active":h,"--n-color-disabled":Ot,"--n-font-size":_n,"--n-height":Tn,"--n-padding-single-top":ct.top,"--n-padding-multiple-top":ut.top,"--n-padding-single-right":ct.right,"--n-padding-multiple-right":ut.right,"--n-padding-single-left":ct.left,"--n-padding-multiple-left":ut.left,"--n-padding-single-bottom":ct.bottom,"--n-padding-multiple-bottom":ut.bottom,"--n-placeholder-color":Pt,"--n-placeholder-color-disabled":De,"--n-text-color":lt,"--n-text-color-disabled":dt,"--n-arrow-color":Ee,"--n-arrow-color-disabled":Tt,"--n-loading-color":sn,"--n-color-active-warning":dn,"--n-box-shadow-focus-warning":cn,"--n-box-shadow-active-warning":un,"--n-box-shadow-hover-warning":fn,"--n-border-warning":hn,"--n-border-focus-warning":vn,"--n-border-hover-warning":pn,"--n-border-active-warning":mn,"--n-color-active-error":gn,"--n-box-shadow-focus-error":bn,"--n-box-shadow-active-error":yn,"--n-box-shadow-hover-error":wn,"--n-border-error":xn,"--n-border-focus-error":Cn,"--n-border-hover-error":Sn,"--n-border-active-error":kn,"--n-clear-size":In,"--n-clear-color":zn,"--n-clear-color-hover":Rn,"--n-clear-color-pressed":Pn,"--n-arrow-size":On}}),ve=Ae?qe("internal-selection",T(()=>e.size[0]),$e,e):void 0;return{mergedTheme:x,mergedClearable:E,mergedClsPrefix:o,rtlEnabled:n,patternInputFocused:C,filterablePlaceholder:D,label:z,selected:_,showTagsPanel:m,isComposing:f,counterRef:u,counterWrapperRef:v,patternInputMirrorRef:r,patternInputRef:i,selfRef:l,multipleElRef:a,singleElRef:c,patternInputWrapperRef:p,overflowRef:g,inputTagElRef:b,handleMouseDown:te,handleFocusin:K,handleClear:Z,handleMouseEnter:M,handleMouseLeave:W,handleDeleteOption:ne,handlePatternKeyDown:B,handlePatternInputInput:L,handlePatternInputBlur:Se,handlePatternInputFocus:re,handleMouseEnterCounter:Te,handleMouseLeaveCounter:Ke,handleFocusout:H,handleCompositionEnd:Re,handleCompositionStart:ee,onPopoverUpdateShow:He,focus:Ne,focusInput:xe,blur:w,blurInput:F,updateCounter:q,getCounter:ue,getTail:ye,renderLabel:e.renderLabel,cssVars:Ae?void 0:$e,themeClass:ve==null?void 0:ve.themeClass,onRender:ve==null?void 0:ve.onRender}},render(){const{status:e,multiple:o,size:t,disabled:n,filterable:r,maxTagCount:i,bordered:l,clsPrefix:a,ellipsisTagPopoverProps:c,onRender:p,renderTag:u,renderLabel:v}=this;p==null||p();const g=i==="responsive",b=typeof i=="number",m=g||b,C=d(Kn,null,{default:()=>d(Sr,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var x,E;return(E=(x=this.$slots).arrow)===null||E===void 0?void 0:E.call(x)}})});let k;if(o){const{labelField:x}=this,E=N=>d("div",{class:`${a}-base-selection-tag-wrapper`,key:N.value},u?u({option:N,handleClose:()=>{this.handleDeleteOption(N)}}):d($t,{size:t,closable:!N.disabled,disabled:n,onClose:()=>{this.handleDeleteOption(N)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>v?v(N,!0):ze(N[x],N,!0)})),D=()=>(b?this.selectedOptions.slice(0,i):this.selectedOptions).map(E),z=r?d("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:n,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),d("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,_=g?()=>d("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},d($t,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:n})):void 0;let G;if(b){const N=this.selectedOptions.length-i;N>0&&(G=d("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},d($t,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:n},{default:()=>`+${N}`})))}const j=g?r?d(Vt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:D,counter:_,tail:()=>z}):d(Vt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:D,counter:_}):b&&G?D().concat(G):D(),X=m?()=>d("div",{class:`${a}-base-selection-popover`},g?D():this.selectedOptions.map(E)):void 0,Q=m?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},c):null,P=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},d("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,y=r?d("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},j,g?null:z,C):d("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:n?void 0:0},j,C);k=d(no,null,m?d(lo,Object.assign({},Q,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>y,default:X}):y,P)}else if(r){const x=this.pattern||this.isComposing,E=this.active?!x:!this.selected,D=this.active?!1:this.selected;k=d("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:n,disabled:n,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),D?d("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},d("div",{class:`${a}-base-selection-overlay__wrapper`},u?u({option:this.selectedOption,handleClose:()=>{}}):v?v(this.selectedOption,!0):ze(this.label,this.selectedOption,!0))):null,E?d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,C)}else k=d("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?d("div",{class:`${a}-base-selection-input`,title:Pr(this.label),key:"input"},d("div",{class:`${a}-base-selection-input__content`},u?u({option:this.selectedOption,handleClose:()=>{}}):v?v(this.selectedOption,!0):ze(this.label,this.selectedOption,!0))):d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),C);return d("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},k,l?d("div",{class:`${a}-base-selection__border`}):null,l?d("div",{class:`${a}-base-selection__state-border`}):null)}});function St(e){return e.type==="group"}function Xo(e){return e.type==="ignored"}function Et(e,o){try{return!!(1+o.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Si(e,o){return{getIsGroup:St,getIgnored:Xo,getKey(n){return St(n)?n.name||n.key||"key-required":n[e]},getChildren(n){return n[o]}}}function ki(e,o,t,n){if(!o)return e;function r(i){if(!Array.isArray(i))return[];const l=[];for(const a of i)if(St(a)){const c=r(a[n]);c.length&&l.push(Object.assign({},a,{[n]:c}))}else{if(Xo(a))continue;o(t,a)&&l.push(a)}return l}return r(e)}function zi(e,o,t){const n=new Map;return e.forEach(r=>{St(r)?r[t].forEach(i=>{n.set(i[o],i)}):n.set(r[o],r)}),n}const ge="0!important",Zo="-1px!important";function Xe(e){return U(e+"-type",[V("& +",[I("button",{},[U(e+"-type",[R("border",{borderLeftWidth:ge}),R("state-border",{left:Zo})])])])])}function Ze(e){return U(e+"-type",[V("& +",[I("button",[U(e+"-type",[R("border",{borderTopWidth:ge}),R("state-border",{top:Zo})])])])])}const Ri=I("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[ke("vertical",{flexDirection:"row"},[ke("rtl",[I("button",[V("&:first-child:not(:last-child)",`
 margin-right: ${ge};
 border-top-right-radius: ${ge};
 border-bottom-right-radius: ${ge};
 `),V("&:last-child:not(:first-child)",`
 margin-left: ${ge};
 border-top-left-radius: ${ge};
 border-bottom-left-radius: ${ge};
 `),V("&:not(:first-child):not(:last-child)",`
 margin-left: ${ge};
 margin-right: ${ge};
 border-radius: ${ge};
 `),Xe("default"),U("ghost",[Xe("primary"),Xe("info"),Xe("success"),Xe("warning"),Xe("error")])])])]),U("vertical",{flexDirection:"column"},[I("button",[V("&:first-child:not(:last-child)",`
 margin-bottom: ${ge};
 margin-left: ${ge};
 margin-right: ${ge};
 border-bottom-left-radius: ${ge};
 border-bottom-right-radius: ${ge};
 `),V("&:last-child:not(:first-child)",`
 margin-top: ${ge};
 margin-left: ${ge};
 margin-right: ${ge};
 border-top-left-radius: ${ge};
 border-top-right-radius: ${ge};
 `),V("&:not(:first-child):not(:last-child)",`
 margin: ${ge};
 border-radius: ${ge};
 `),Ze("default"),U("ghost",[Ze("primary"),Ze("info"),Ze("success"),Ze("warning"),Ze("error")])])])]),Pi={size:{type:String,default:void 0},vertical:Boolean},Ii=ae({name:"ButtonGroup",props:Pi,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:t}=Ve(e);return Hn("-button-group",Ri,o),me(Dn,e),{rtlEnabled:kt("ButtonGroup",t,o),mergedClsPrefix:o}},render(){const{mergedClsPrefix:e}=this;return d("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),Oi=V([I("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),I("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Xt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Ti=Object.assign(Object.assign({},Ie.props),{to:Dt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),_i=ae({name:"Select",props:Ti,setup(e){const{mergedClsPrefixRef:o,mergedBorderedRef:t,namespaceRef:n,inlineThemeDisabled:r}=Ve(e),i=Ie("Select","-select",Oi,Wn,e,o),l=O(e.defaultValue),a=fe(e,"value"),c=rt(a,l),p=O(!1),u=O(""),v=T(()=>{const{valueField:h,childrenField:$}=e,J=Si(h,$);return nt(y.value,J)}),g=T(()=>zi(Y.value,e.valueField,e.childrenField)),b=O(!1),m=rt(fe(e,"show"),b),C=O(null),k=O(null),x=O(null),{localeRef:E}=Oo("Select"),D=T(()=>{var h;return(h=e.placeholder)!==null&&h!==void 0?h:E.value.placeholder}),z=Do(e,["items","options"]),_=[],G=O([]),j=O([]),X=O(new Map),Q=T(()=>{const{fallbackOption:h}=e;if(h===void 0){const{labelField:$,valueField:J}=e;return se=>({[$]:String(se),[J]:se})}return h===!1?!1:$=>Object.assign(h($),{value:$})}),Y=T(()=>j.value.concat(G.value).concat(z.value)),P=T(()=>{const{filter:h}=e;if(h)return h;const{labelField:$,valueField:J}=e;return(se,ie)=>{if(!ie)return!1;const oe=ie[$];if(typeof oe=="string")return Et(se,oe);const le=ie[J];return typeof le=="string"?Et(se,le):typeof le=="number"?Et(se,String(le)):!1}}),y=T(()=>{if(e.remote)return z.value;{const{value:h}=Y,{value:$}=u;return!$.length||!e.filterable?h:ki(h,P.value,$,e.childrenField)}});function N(h){const $=e.remote,{value:J}=X,{value:se}=g,{value:ie}=Q,oe=[];return h.forEach(le=>{if(se.has(le))oe.push(se.get(le));else if($&&J.has(le))oe.push(J.get(le));else if(ie){const we=ie(le);we&&oe.push(we)}}),oe}const K=T(()=>{if(e.multiple){const{value:h}=c;return Array.isArray(h)?N(h):[]}return null}),H=T(()=>{const{value:h}=c;return!e.multiple&&!Array.isArray(h)?h===null?null:N([h])[0]||null:null}),Z=jn(e),{mergedSizeRef:M,mergedDisabledRef:W,mergedStatusRef:te}=Z;function ne(h,$){const{onChange:J,"onUpdate:value":se,onUpdateValue:ie}=e,{nTriggerFormChange:oe,nTriggerFormInput:le}=Z;J&&be(J,h,$),ie&&be(ie,h,$),se&&be(se,h,$),l.value=h,oe(),le()}function B(h){const{onBlur:$}=e,{nTriggerFormBlur:J}=Z;$&&be($,h),J()}function f(){const{onClear:h}=e;h&&be(h)}function s(h){const{onFocus:$,showOnFocus:J}=e,{nTriggerFormFocus:se}=Z;$&&be($,h),se(),J&&Se()}function L(h){const{onSearch:$}=e;$&&be($,h)}function ee(h){const{onScroll:$}=e;$&&be($,h)}function Re(){var h;const{remote:$,multiple:J}=e;if($){const{value:se}=X;if(J){const{valueField:ie}=e;(h=K.value)===null||h===void 0||h.forEach(oe=>{se.set(oe[ie],oe)})}else{const ie=H.value;ie&&se.set(ie[e.valueField],ie)}}}function re(h){const{onUpdateShow:$,"onUpdate:show":J}=e;$&&be($,h),J&&be(J,h),b.value=h}function Se(){W.value||(re(!0),b.value=!0,e.filterable&&st())}function w(){re(!1)}function Ne(){u.value="",j.value=_}const xe=O(!1);function F(){e.filterable&&(xe.value=!0)}function q(){e.filterable&&(xe.value=!1,m.value||Ne())}function ue(){W.value||(m.value?e.filterable?st():w():Se())}function ye(h){var $,J;!((J=($=x.value)===null||$===void 0?void 0:$.selfRef)===null||J===void 0)&&J.contains(h.relatedTarget)||(p.value=!1,B(h),w())}function Pe(h){s(h),p.value=!0}function Oe(h){p.value=!0}function Te(h){var $;!(($=C.value)===null||$===void 0)&&$.$el.contains(h.relatedTarget)||(p.value=!1,B(h),w())}function Ke(){var h;(h=C.value)===null||h===void 0||h.focus(),w()}function He(h){var $;m.value&&(!(($=C.value)===null||$===void 0)&&$.$el.contains(Un(h))||w())}function Ae(h){if(!Array.isArray(h))return[];if(Q.value)return Array.from(h);{const{remote:$}=e,{value:J}=g;if($){const{value:se}=X;return h.filter(ie=>J.has(ie)||se.has(ie))}else return h.filter(se=>J.has(se))}}function $e(h){ve(h.rawNode)}function ve(h){if(W.value)return;const{tag:$,remote:J,clearFilterAfterSelect:se,valueField:ie}=e;if($&&!J){const{value:oe}=j,le=oe[0]||null;if(le){const we=G.value;we.length?we.push(le):G.value=[le],j.value=_}}if(J&&X.value.set(h[ie],h),e.multiple){const oe=Ae(c.value),le=oe.findIndex(we=>we===h[ie]);if(~le){if(oe.splice(le,1),$&&!J){const we=S(h[ie]);~we&&(G.value.splice(we,1),se&&(u.value=""))}}else oe.push(h[ie]),se&&(u.value="");ne(oe,N(oe))}else{if($&&!J){const oe=S(h[ie]);~oe?G.value=[G.value[oe]]:G.value=_}at(),w(),ne(h[ie],h)}}function S(h){return G.value.findIndex(J=>J[e.valueField]===h)}function A(h){m.value||Se();const{value:$}=h.target;u.value=$;const{tag:J,remote:se}=e;if(L($),J&&!se){if(!$){j.value=_;return}const{onCreate:ie}=e,oe=ie?ie($):{[e.labelField]:$,[e.valueField]:$},{valueField:le,labelField:we}=e;z.value.some(Ee=>Ee[le]===oe[le]||Ee[we]===oe[we])||G.value.some(Ee=>Ee[le]===oe[le]||Ee[we]===oe[we])?j.value=_:j.value=[oe]}}function pe(h){h.stopPropagation();const{multiple:$}=e;!$&&e.filterable&&w(),f(),$?ne([],[]):ne(null,null)}function Rt(h){!et(h,"action")&&!et(h,"empty")&&h.preventDefault()}function Pt(h){ee(h)}function lt(h){var $,J,se,ie,oe;if(!e.keyboard){h.preventDefault();return}switch(h.key){case" ":if(e.filterable)break;h.preventDefault();case"Enter":if(!(!(($=C.value)===null||$===void 0)&&$.isComposing)){if(m.value){const le=(J=x.value)===null||J===void 0?void 0:J.getPendingTmNode();le?$e(le):e.filterable||(w(),at())}else if(Se(),e.tag&&xe.value){const le=j.value[0];if(le){const we=le[e.valueField],{value:Ee}=c;e.multiple&&Array.isArray(Ee)&&Ee.some(Tt=>Tt===we)||ve(le)}}}h.preventDefault();break;case"ArrowUp":if(h.preventDefault(),e.loading)return;m.value&&((se=x.value)===null||se===void 0||se.prev());break;case"ArrowDown":if(h.preventDefault(),e.loading)return;m.value?(ie=x.value)===null||ie===void 0||ie.next():Se();break;case"Escape":m.value&&(kr(h),w()),(oe=C.value)===null||oe===void 0||oe.focus();break}}function at(){var h;(h=C.value)===null||h===void 0||h.focus()}function st(){var h;(h=C.value)===null||h===void 0||h.focusInput()}function It(){var h;m.value&&((h=k.value)===null||h===void 0||h.syncPosition())}Re(),Be(fe(e,"options"),Re);const Ot={focus:()=>{var h;(h=C.value)===null||h===void 0||h.focus()},focusInput:()=>{var h;(h=C.value)===null||h===void 0||h.focusInput()},blur:()=>{var h;(h=C.value)===null||h===void 0||h.blur()},blurInput:()=>{var h;(h=C.value)===null||h===void 0||h.blurInput()}},dt=T(()=>{const{self:{menuBoxShadow:h}}=i.value;return{"--n-menu-box-shadow":h}}),De=r?qe("select",void 0,dt,e):void 0;return Object.assign(Object.assign({},Ot),{mergedStatus:te,mergedClsPrefix:o,mergedBordered:t,namespace:n,treeMate:v,isMounted:Vn(),triggerRef:C,menuRef:x,pattern:u,uncontrolledShow:b,mergedShow:m,adjustedTo:Dt(e),uncontrolledValue:l,mergedValue:c,followerRef:k,localizedPlaceholder:D,selectedOption:H,selectedOptions:K,mergedSize:M,mergedDisabled:W,focused:p,activeWithoutMenuOpen:xe,inlineThemeDisabled:r,onTriggerInputFocus:F,onTriggerInputBlur:q,handleTriggerOrMenuResize:It,handleMenuFocus:Oe,handleMenuBlur:Te,handleMenuTabOut:Ke,handleTriggerClick:ue,handleToggle:$e,handleDeleteOption:ve,handlePatternInput:A,handleClear:pe,handleTriggerBlur:ye,handleTriggerFocus:Pe,handleKeydown:lt,handleMenuAfterLeave:Ne,handleMenuClickOutside:He,handleMenuScroll:Pt,handleMenuKeydown:lt,handleMenuMousedown:Rt,mergedTheme:i,cssVars:r?void 0:dt,themeClass:De==null?void 0:De.themeClass,onRender:De==null?void 0:De.onRender})},render(){return d("div",{class:`${this.mergedClsPrefix}-select`},d(jo,null,{default:()=>[d(Vo,null,{default:()=>d(Ci,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,o;return[(o=(e=this.$slots).arrow)===null||o===void 0?void 0:o.call(e)]}})}),d(Wo,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Dt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>d(oo,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,o,t;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Eo(d(mi,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(o=this.menuProps)===null||o===void 0?void 0:o.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(t=this.menuProps)===null||t===void 0?void 0:t.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var n,r;return[(r=(n=this.$slots).empty)===null||r===void 0?void 0:r.call(n)]},header:()=>{var n,r;return[(r=(n=this.$slots).header)===null||r===void 0?void 0:r.call(n)]},action:()=>{var n,r;return[(r=(n=this.$slots).action)===null||r===void 0?void 0:r.call(n)]}}),this.displayDirective==="show"?[[Bo,this.mergedShow],[bo,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[bo,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Jo=ae({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),co=We("n-dropdown-menu"),zt=We("n-dropdown"),Ro=We("n-dropdown-option");function Ut(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function Ni(e){return e.type==="group"}function Qo(e){return e.type==="divider"}function Fi(e){return e.type==="render"}const en=ae({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=ce(zt),{hoverKeyRef:t,keyboardKeyRef:n,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:l,animatedRef:a,mergedShowRef:c,renderLabelRef:p,renderIconRef:u,labelFieldRef:v,childrenFieldRef:g,renderOptionRef:b,nodePropsRef:m,menuPropsRef:C}=o,k=ce(Ro,null),x=ce(co),E=ce(To),D=T(()=>e.tmNode.rawNode),z=T(()=>{const{value:M}=g;return Ut(e.tmNode.rawNode,M)}),_=T(()=>{const{disabled:M}=e.tmNode;return M}),G=T(()=>{if(!z.value)return!1;const{key:M,disabled:W}=e.tmNode;if(W)return!1;const{value:te}=t,{value:ne}=n,{value:B}=r,{value:f}=i;return te!==null?f.includes(M):ne!==null?f.includes(M)&&f[f.length-1]!==M:B!==null?f.includes(M):!1}),j=T(()=>n.value===null&&!a.value),X=Or(G,300,j),Q=T(()=>!!(k!=null&&k.enteringSubmenuRef.value)),Y=O(!1);me(Ro,{enteringSubmenuRef:Y});function P(){Y.value=!0}function y(){Y.value=!1}function N(){const{parentKey:M,tmNode:W}=e;W.disabled||c.value&&(r.value=M,n.value=null,t.value=W.key)}function K(){const{tmNode:M}=e;M.disabled||c.value&&t.value!==M.key&&N()}function H(M){if(e.tmNode.disabled||!c.value)return;const{relatedTarget:W}=M;W&&!et({target:W},"dropdownOption")&&!et({target:W},"scrollbarRail")&&(t.value=null)}function Z(){const{value:M}=z,{tmNode:W}=e;c.value&&!M&&!W.disabled&&(o.doSelect(W.key,W.rawNode),o.doUpdateShow(!1))}return{labelField:v,renderLabel:p,renderIcon:u,siblingHasIcon:x.showIconRef,siblingHasSubmenu:x.hasSubmenuRef,menuProps:C,popoverBody:E,animated:a,mergedShowSubmenu:T(()=>X.value&&!Q.value),rawNode:D,hasSubmenu:z,pending:Me(()=>{const{value:M}=i,{key:W}=e.tmNode;return M.includes(W)}),childActive:Me(()=>{const{value:M}=l,{key:W}=e.tmNode,te=M.findIndex(ne=>W===ne);return te===-1?!1:te<M.length-1}),active:Me(()=>{const{value:M}=l,{key:W}=e.tmNode,te=M.findIndex(ne=>W===ne);return te===-1?!1:te===M.length-1}),mergedDisabled:_,renderOption:b,nodeProps:m,handleClick:Z,handleMouseMove:K,handleMouseEnter:N,handleMouseLeave:H,handleSubmenuBeforeEnter:P,handleSubmenuAfterEnter:y}},render(){var e,o;const{animated:t,rawNode:n,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:l,siblingHasSubmenu:a,renderLabel:c,renderIcon:p,renderOption:u,nodeProps:v,props:g,scrollable:b}=this;let m=null;if(r){const E=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);m=d(tn,Object.assign({},E,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const C={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},k=v==null?void 0:v(n),x=d("div",Object.assign({class:[`${i}-dropdown-option`,k==null?void 0:k.class],"data-dropdown-option":!0},k),d("div",to(C,g),[d("div",{class:[`${i}-dropdown-option-body__prefix`,l&&`${i}-dropdown-option-body__prefix--show-icon`]},[p?p(n):ze(n.icon)]),d("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},c?c(n):ze((o=n[this.labelField])!==null&&o!==void 0?o:n.title)),d("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,a&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(jt,null,{default:()=>d(Er,null)}):null)]),this.hasSubmenu?d(jo,null,{default:()=>[d(Vo,null,{default:()=>d("div",{class:`${i}-dropdown-offset-container`},d(Wo,{show:this.mergedShowSubmenu,placement:this.placement,to:b&&this.popoverBody||void 0,teleportDisabled:!b},{default:()=>d("div",{class:`${i}-dropdown-menu-wrapper`},t?d(oo,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>m}):m)}))})]}):null);return u?u({node:x,option:n}):x}}),Mi=ae({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=ce(co),{renderLabelRef:t,labelFieldRef:n,nodePropsRef:r,renderOptionRef:i}=ce(zt);return{labelField:n,showIcon:e,hasSubmenu:o,renderLabel:t,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:o,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:l}=this,{rawNode:a}=this.tmNode,c=d("div",Object.assign({class:`${o}-dropdown-option`},r==null?void 0:r(a)),d("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,n&&`${o}-dropdown-option-body__prefix--show-icon`]},ze(a.icon)),d("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(a):ze((e=a.title)!==null&&e!==void 0?e:a[this.labelField])),d("div",{class:[`${o}-dropdown-option-body__suffix`,t&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:c,option:a}):c}}),Ai=ae({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:t}=this,{children:n}=e;return d(no,null,d(Mi,{clsPrefix:t,tmNode:e,key:e.key}),n==null?void 0:n.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Qo(i)?d(Jo,{clsPrefix:t,key:r.key}):r.isGroup?(Gn("dropdown","`group` node is not allowed to be put in `group` node."),null):d(en,{clsPrefix:t,tmNode:r,parentKey:o,key:r.key})}))}}),$i=ae({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return d("div",o,[e==null?void 0:e()])}}),tn=ae({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:t}=ce(zt);me(co,{showIconRef:T(()=>{const r=o.value;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:c})=>r?r(c):c.icon);const{rawNode:a}=i;return r?r(a):a.icon})}),hasSubmenuRef:T(()=>{const{value:r}=t;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:c})=>Ut(c,r));const{rawNode:a}=i;return Ut(a,r)})})});const n=O(null);return me(qn,null),me(Yn,null),me(To,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:o,scrollable:t}=this,n=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Fi(i)?d($i,{tmNode:r,key:r.key}):Qo(i)?d(Jo,{clsPrefix:o,key:r.key}):Ni(i)?d(Ai,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key}):d(en,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:t})});return d("div",{class:[`${o}-dropdown-menu`,t&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},t?d(Xn,{contentClass:`${o}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?yr({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Ei=I("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Xt(),I("dropdown-option",`
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
 `)]),I("dropdown-option-body",`
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
 `),ke("disabled",[U("pending",`
 color: var(--n-option-text-color-hover);
 `,[R("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),V("&::before","background-color: var(--n-option-color-hover);")]),U("active",`
 color: var(--n-option-text-color-active);
 `,[R("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),V("&::before","background-color: var(--n-option-color-active);")]),U("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[R("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),U("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),U("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[R("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[U("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),R("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[U("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),I("icon",`
 font-size: var(--n-option-icon-size);
 `)]),R("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),R("suffix",`
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
 `,[U("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),I("icon",`
 font-size: var(--n-option-icon-size);
 `)]),I("dropdown-menu","pointer-events: all;")]),I("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),I("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),I("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),V(">",[I("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ke("scrollable",`
 padding: var(--n-padding);
 `),U("scrollable",[R("content",`
 padding: var(--n-padding);
 `)])]),Bi={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Li=Object.keys(Uo),Ki=Object.assign(Object.assign(Object.assign({},Uo),Bi),Ie.props),Hi=ae({name:"Dropdown",inheritAttrs:!1,props:Ki,setup(e){const o=O(!1),t=rt(fe(e,"show"),o),n=T(()=>{const{keyField:y,childrenField:N}=e;return nt(e.options,{getKey(K){return K[y]},getDisabled(K){return K.disabled===!0},getIgnored(K){return K.type==="divider"||K.type==="render"},getChildren(K){return K[N]}})}),r=T(()=>n.value.treeNodes),i=O(null),l=O(null),a=O(null),c=T(()=>{var y,N,K;return(K=(N=(y=i.value)!==null&&y!==void 0?y:l.value)!==null&&N!==void 0?N:a.value)!==null&&K!==void 0?K:null}),p=T(()=>n.value.getPath(c.value).keyPath),u=T(()=>n.value.getPath(e.value).keyPath),v=Me(()=>e.keyboard&&t.value);Tr({keydown:{ArrowUp:{prevent:!0,handler:_},ArrowRight:{prevent:!0,handler:z},ArrowDown:{prevent:!0,handler:G},ArrowLeft:{prevent:!0,handler:D},Enter:{prevent:!0,handler:j},Escape:E}},v);const{mergedClsPrefixRef:g,inlineThemeDisabled:b}=Ve(e),m=Ie("Dropdown","-dropdown",Ei,Zn,e,g);me(zt,{labelFieldRef:fe(e,"labelField"),childrenFieldRef:fe(e,"childrenField"),renderLabelRef:fe(e,"renderLabel"),renderIconRef:fe(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:l,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:p,activeKeyPathRef:u,animatedRef:fe(e,"animated"),mergedShowRef:t,nodePropsRef:fe(e,"nodeProps"),renderOptionRef:fe(e,"renderOption"),menuPropsRef:fe(e,"menuProps"),doSelect:C,doUpdateShow:k}),Be(t,y=>{!e.animated&&!y&&x()});function C(y,N){const{onSelect:K}=e;K&&be(K,y,N)}function k(y){const{"onUpdate:show":N,onUpdateShow:K}=e;N&&be(N,y),K&&be(K,y),o.value=y}function x(){i.value=null,l.value=null,a.value=null}function E(){k(!1)}function D(){Q("left")}function z(){Q("right")}function _(){Q("up")}function G(){Q("down")}function j(){const y=X();y!=null&&y.isLeaf&&t.value&&(C(y.key,y.rawNode),k(!1))}function X(){var y;const{value:N}=n,{value:K}=c;return!N||K===null?null:(y=N.getNode(K))!==null&&y!==void 0?y:null}function Q(y){const{value:N}=c,{value:{getFirstAvailableNode:K}}=n;let H=null;if(N===null){const Z=K();Z!==null&&(H=Z.key)}else{const Z=X();if(Z){let M;switch(y){case"down":M=Z.getNext();break;case"up":M=Z.getPrev();break;case"right":M=Z.getChild();break;case"left":M=Z.getParent();break}M&&(H=M.key)}}H!==null&&(i.value=null,l.value=H)}const Y=T(()=>{const{size:y,inverted:N}=e,{common:{cubicBezierEaseInOut:K},self:H}=m.value,{padding:Z,dividerColor:M,borderRadius:W,optionOpacityDisabled:te,[de("optionIconSuffixWidth",y)]:ne,[de("optionSuffixWidth",y)]:B,[de("optionIconPrefixWidth",y)]:f,[de("optionPrefixWidth",y)]:s,[de("fontSize",y)]:L,[de("optionHeight",y)]:ee,[de("optionIconSize",y)]:Re}=H,re={"--n-bezier":K,"--n-font-size":L,"--n-padding":Z,"--n-border-radius":W,"--n-option-height":ee,"--n-option-prefix-width":s,"--n-option-icon-prefix-width":f,"--n-option-suffix-width":B,"--n-option-icon-suffix-width":ne,"--n-option-icon-size":Re,"--n-divider-color":M,"--n-option-opacity-disabled":te};return N?(re["--n-color"]=H.colorInverted,re["--n-option-color-hover"]=H.optionColorHoverInverted,re["--n-option-color-active"]=H.optionColorActiveInverted,re["--n-option-text-color"]=H.optionTextColorInverted,re["--n-option-text-color-hover"]=H.optionTextColorHoverInverted,re["--n-option-text-color-active"]=H.optionTextColorActiveInverted,re["--n-option-text-color-child-active"]=H.optionTextColorChildActiveInverted,re["--n-prefix-color"]=H.prefixColorInverted,re["--n-suffix-color"]=H.suffixColorInverted,re["--n-group-header-text-color"]=H.groupHeaderTextColorInverted):(re["--n-color"]=H.color,re["--n-option-color-hover"]=H.optionColorHover,re["--n-option-color-active"]=H.optionColorActive,re["--n-option-text-color"]=H.optionTextColor,re["--n-option-text-color-hover"]=H.optionTextColorHover,re["--n-option-text-color-active"]=H.optionTextColorActive,re["--n-option-text-color-child-active"]=H.optionTextColorChildActive,re["--n-prefix-color"]=H.prefixColor,re["--n-suffix-color"]=H.suffixColor,re["--n-group-header-text-color"]=H.groupHeaderTextColor),re}),P=b?qe("dropdown",T(()=>`${e.size[0]}${e.inverted?"i":""}`),Y,e):void 0;return{mergedClsPrefix:g,mergedTheme:m,tmNodes:r,mergedShow:t,handleAfterLeave:()=>{e.animated&&x()},doUpdateShow:k,cssVars:b?void 0:Y,themeClass:P==null?void 0:P.themeClass,onRender:P==null?void 0:P.onRender}},render(){const e=(n,r,i,l,a)=>{var c;const{mergedClsPrefix:p,menuProps:u}=this;(c=this.onRender)===null||c===void 0||c.call(this);const v=(u==null?void 0:u(void 0,this.tmNodes.map(b=>b.rawNode)))||{},g={ref:Ir(r),class:[n,`${p}-dropdown`,this.themeClass],clsPrefix:p,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:a};return d(tn,to(this.$attrs,g,v))},{mergedTheme:o}=this,t={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(lo,Object.assign({},gt(this.$props,Li),t),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}}),Di=We("n-layout-sider"),it=We("n-menu"),uo=We("n-submenu"),fo=We("n-menu-item-group"),mt=8;function ho(e){const o=ce(it),{props:t,mergedCollapsedRef:n}=o,r=ce(uo,null),i=ce(fo,null),l=T(()=>t.mode==="horizontal"),a=T(()=>l.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=T(()=>{var g;return Math.max((g=t.collapsedIconSize)!==null&&g!==void 0?g:t.iconSize,t.iconSize)}),p=T(()=>{var g;return!l.value&&e.root&&n.value&&(g=t.collapsedIconSize)!==null&&g!==void 0?g:t.iconSize}),u=T(()=>{if(l.value)return;const{collapsedWidth:g,indent:b,rootIndent:m}=t,{root:C,isGroup:k}=e,x=m===void 0?b:m;return C?n.value?g/2-c.value/2:x:i&&typeof i.paddingLeftRef.value=="number"?b/2+i.paddingLeftRef.value:r&&typeof r.paddingLeftRef.value=="number"?(k?b/2:b)+r.paddingLeftRef.value:0}),v=T(()=>{const{collapsedWidth:g,indent:b,rootIndent:m}=t,{value:C}=c,{root:k}=e;return l.value||!k||!n.value?mt:(m===void 0?b:m)+C+mt-(g+C)/2});return{dropdownPlacement:a,activeIconSize:p,maxIconSize:c,paddingLeft:u,iconMarginRight:v,NMenu:o,NSubmenu:r}}const vo={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},on=Object.assign(Object.assign({},vo),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),ji=ae({name:"MenuOptionGroup",props:on,setup(e){me(uo,null);const o=ho(e);me(fo,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:t,props:n}=ce(it);return function(){const{value:r}=t,i=o.paddingLeft.value,{nodeProps:l}=n,a=l==null?void 0:l(e.tmNode.rawNode);return d("div",{class:`${r}-menu-item-group`,role:"group"},d("div",Object.assign({},a,{class:[`${r}-menu-item-group-title`,a==null?void 0:a.class],style:[(a==null?void 0:a.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),ze(e.title),e.extra?d(no,null," ",ze(e.extra)):null),d("div",null,e.tmNodes.map(c=>po(c,n))))}}}),nn=ae({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:o}=ce(it);return{menuProps:o,style:T(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:T(()=>{const{maxIconSize:t,activeIconSize:n,iconMarginRight:r}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:t,renderLabel:n,renderExtra:r,expandIcon:i}}=this,l=t?t(o.rawNode):ze(this.icon);return d("div",{onClick:a=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,a)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},l&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[l]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:n?n(o.rawNode):ze(this.title),this.extra||r?d("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(o.rawNode):ze(this.extra)):null),this.showArrow?d(Yt,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(o.rawNode):d(Lr,null)}):null)}}),rn=Object.assign(Object.assign({},vo),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),Gt=ae({name:"Submenu",props:rn,setup(e){const o=ho(e),{NMenu:t,NSubmenu:n}=o,{props:r,mergedCollapsedRef:i,mergedThemeRef:l}=t,a=T(()=>{const{disabled:g}=e;return n!=null&&n.mergedDisabledRef.value||r.disabled?!0:g}),c=O(!1);me(uo,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:a}),me(fo,null);function p(){const{onClick:g}=e;g&&g()}function u(){a.value||(i.value||t.toggleExpand(e.internalKey),p())}function v(g){c.value=g}return{menuProps:r,mergedTheme:l,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:c,paddingLeft:o.paddingLeft,mergedDisabled:a,mergedValue:t.mergedValueRef,childActive:Me(()=>{var g;return(g=e.virtualChildActive)!==null&&g!==void 0?g:t.activePathRef.value.includes(e.internalKey)}),collapsed:T(()=>r.mode==="horizontal"?!1:i.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:T(()=>!a.value&&(r.mode==="horizontal"||i.value)),handlePopoverShowChange:v,handleClick:u}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:t,renderLabel:n}}=this,r=()=>{const{isHorizontal:l,paddingLeft:a,collapsed:c,mergedDisabled:p,maxIconSize:u,activeIconSize:v,title:g,childActive:b,icon:m,handleClick:C,menuProps:{nodeProps:k},dropdownShow:x,iconMarginRight:E,tmNode:D,mergedClsPrefix:z,isEllipsisPlaceholder:_,extra:G}=this,j=k==null?void 0:k(D.rawNode);return d("div",Object.assign({},j,{class:[`${z}-menu-item`,j==null?void 0:j.class],role:"menuitem"}),d(nn,{tmNode:D,paddingLeft:a,collapsed:c,disabled:p,iconMarginRight:E,maxIconSize:u,activeIconSize:v,title:g,extra:G,showArrow:!l,childActive:b,clsPrefix:z,icon:m,hover:x,onClick:C,isEllipsisPlaceholder:_}))},i=()=>d(Jn,null,{default:()=>{const{tmNodes:l,collapsed:a}=this;return a?null:d("div",{class:`${o}-submenu-children`,role:"menu"},l.map(c=>po(c,this.menuProps)))}});return this.root?d(Hi,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:n}),{default:()=>d("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},r(),this.isHorizontal?null:i())}):d("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},r(),i())}}),ln=Object.assign(Object.assign({},vo),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Vi=ae({name:"MenuOption",props:ln,setup(e){const o=ho(e),{NSubmenu:t,NMenu:n}=o,{props:r,mergedClsPrefixRef:i,mergedCollapsedRef:l}=n,a=t?t.mergedDisabledRef:{value:!1},c=T(()=>a.value||e.disabled);function p(v){const{onClick:g}=e;g&&g(v)}function u(v){c.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),p(v))}return{mergedClsPrefix:i,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:r,dropdownEnabled:Me(()=>e.root&&l.value&&r.mode!=="horizontal"&&!c.value),selected:Me(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:u}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:t,menuProps:{renderLabel:n,nodeProps:r}}=this,i=r==null?void 0:r(t.rawNode);return d("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),d(wr,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(t.rawNode):ze(this.title),trigger:()=>d(nn,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Wi=ae({name:"MenuDivider",setup(){const e=ce(it),{mergedClsPrefixRef:o,isHorizontalRef:t}=e;return()=>t.value?null:d("div",{class:`${o.value}-menu-divider`})}}),Ui=ao(on),Gi=ao(ln),qi=ao(rn);function qt(e){return e.type==="divider"||e.type==="render"}function Yi(e){return e.type==="divider"}function po(e,o){const{rawNode:t}=e,{show:n}=t;if(n===!1)return null;if(qt(t))return Yi(t)?d(Wi,Object.assign({key:e.key},t.props)):null;const{labelField:r}=o,{key:i,level:l,isGroup:a}=e,c=Object.assign(Object.assign({},t),{title:t.title||t[r],extra:t.titleExtra||t.extra,key:i,internalKey:i,level:l,root:l===0,isGroup:a});return e.children?e.isGroup?d(ji,gt(c,Ui,{tmNode:e,tmNodes:e.children,key:i})):d(Gt,gt(c,qi,{key:i,rawNodes:t[o.childrenField],tmNodes:e.children,tmNode:e})):d(Vi,gt(c,Gi,{key:i,tmNode:e}))}const Po=[V("&::before","background-color: var(--n-item-color-hover);"),R("arrow",`
 color: var(--n-arrow-color-hover);
 `),R("icon",`
 color: var(--n-item-icon-color-hover);
 `),I("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[V("a",`
 color: var(--n-item-text-color-hover);
 `),R("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Io=[R("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),I("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[V("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),R("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Xi=V([I("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[U("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[I("submenu","margin: 0;"),I("menu-item","margin: 0;"),I("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[V("&::before","display: none;"),U("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),I("menu-item-content",[U("selected",[R("icon","color: var(--n-item-icon-color-active-horizontal);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[V("a","color: var(--n-item-text-color-active-horizontal);"),R("extra","color: var(--n-item-text-color-active-horizontal);")])]),U("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[I("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[V("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),R("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),R("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ke("disabled",[ke("selected, child-active",[V("&:focus-within",Io)]),U("selected",[Ue(null,[R("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[V("a","color: var(--n-item-text-color-active-hover-horizontal);"),R("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),U("child-active",[Ue(null,[R("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[V("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),R("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),Ue("border-bottom: 2px solid var(--n-border-color-horizontal);",Io)]),I("menu-item-content-header",[V("a","color: var(--n-item-text-color-horizontal);")])])]),ke("responsive",[I("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),U("collapsed",[I("menu-item-content",[U("selected",[V("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),I("menu-item-content-header","opacity: 0;"),R("arrow","opacity: 0;"),R("icon","color: var(--n-item-icon-color-collapsed);")])]),I("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),I("menu-item-content",`
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
 `),U("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),U("collapsed",[R("arrow","transform: rotate(0);")]),U("selected",[V("&::before","background-color: var(--n-item-color-active);"),R("arrow","color: var(--n-arrow-color-active);"),R("icon","color: var(--n-item-icon-color-active);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[V("a","color: var(--n-item-text-color-active);"),R("extra","color: var(--n-item-text-color-active);")])]),U("child-active",[I("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[V("a",`
 color: var(--n-item-text-color-child-active);
 `),R("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),R("arrow",`
 color: var(--n-arrow-color-child-active);
 `),R("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ke("disabled",[ke("selected, child-active",[V("&:focus-within",Po)]),U("selected",[Ue(null,[R("arrow","color: var(--n-arrow-color-active-hover);"),R("icon","color: var(--n-item-icon-color-active-hover);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[V("a","color: var(--n-item-text-color-active-hover);"),R("extra","color: var(--n-item-text-color-active-hover);")])])]),U("child-active",[Ue(null,[R("arrow","color: var(--n-arrow-color-child-active-hover);"),R("icon","color: var(--n-item-icon-color-child-active-hover);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[V("a","color: var(--n-item-text-color-child-active-hover);"),R("extra","color: var(--n-item-text-color-child-active-hover);")])])]),U("selected",[Ue(null,[V("&::before","background-color: var(--n-item-color-active-hover);")])]),Ue(null,Po)]),R("icon",`
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
 `),R("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),I("menu-item-content-header",`
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
 `)]),R("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),I("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[I("menu-item-content",`
 height: var(--n-item-height);
 `),I("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[xr({duration:".2s"})])]),I("menu-item-group",[I("menu-item-group-title",`
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
 `)])]),I("menu-tooltip",[V("a",`
 color: inherit;
 text-decoration: none;
 `)]),I("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function Ue(e,o){return[U("hover",e,o),V("&:hover",e,o)]}const Zi=Object.assign(Object.assign({},Ie.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),Ji=ae({name:"Menu",props:Zi,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Ve(e),n=Ie("Menu","-menu",Xi,er,e,o),r=ce(Di,null),i=T(()=>{var B;const{collapsed:f}=e;if(f!==void 0)return f;if(r){const{collapseModeRef:s,collapsedRef:L}=r;if(s.value==="width")return(B=L.value)!==null&&B!==void 0?B:!1}return!1}),l=T(()=>{const{keyField:B,childrenField:f,disabledField:s}=e;return nt(e.items||e.options,{getIgnored(L){return qt(L)},getChildren(L){return L[f]},getDisabled(L){return L[s]},getKey(L){var ee;return(ee=L[B])!==null&&ee!==void 0?ee:L.name}})}),a=T(()=>new Set(l.value.treeNodes.map(B=>B.key))),{watchProps:c}=e,p=O(null);c!=null&&c.includes("defaultValue")?Kt(()=>{p.value=e.defaultValue}):p.value=e.defaultValue;const u=fe(e,"value"),v=rt(u,p),g=O([]),b=()=>{g.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(v.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?Kt(b):b();const m=Do(e,["expandedNames","expandedKeys"]),C=rt(m,g),k=T(()=>l.value.treeNodes),x=T(()=>l.value.getPath(v.value).keyPath);me(it,{props:e,mergedCollapsedRef:i,mergedThemeRef:n,mergedValueRef:v,mergedExpandedKeysRef:C,activePathRef:x,mergedClsPrefixRef:o,isHorizontalRef:T(()=>e.mode==="horizontal"),invertedRef:fe(e,"inverted"),doSelect:E,toggleExpand:z});function E(B,f){const{"onUpdate:value":s,onUpdateValue:L,onSelect:ee}=e;L&&be(L,B,f),s&&be(s,B,f),ee&&be(ee,B,f),p.value=B}function D(B){const{"onUpdate:expandedKeys":f,onUpdateExpandedKeys:s,onExpandedNamesChange:L,onOpenNamesChange:ee}=e;f&&be(f,B),s&&be(s,B),L&&be(L,B),ee&&be(ee,B),g.value=B}function z(B){const f=Array.from(C.value),s=f.findIndex(L=>L===B);if(~s)f.splice(s,1);else{if(e.accordion&&a.value.has(B)){const L=f.findIndex(ee=>a.value.has(ee));L>-1&&f.splice(L,1)}f.push(B)}D(f)}const _=B=>{const f=l.value.getPath(B??v.value,{includeSelf:!1}).keyPath;if(!f.length)return;const s=Array.from(C.value),L=new Set([...s,...f]);e.accordion&&a.value.forEach(ee=>{L.has(ee)&&!f.includes(ee)&&L.delete(ee)}),D(Array.from(L))},G=T(()=>{const{inverted:B}=e,{common:{cubicBezierEaseInOut:f},self:s}=n.value,{borderRadius:L,borderColorHorizontal:ee,fontSize:Re,itemHeight:re,dividerColor:Se}=s,w={"--n-divider-color":Se,"--n-bezier":f,"--n-font-size":Re,"--n-border-color-horizontal":ee,"--n-border-radius":L,"--n-item-height":re};return B?(w["--n-group-text-color"]=s.groupTextColorInverted,w["--n-color"]=s.colorInverted,w["--n-item-text-color"]=s.itemTextColorInverted,w["--n-item-text-color-hover"]=s.itemTextColorHoverInverted,w["--n-item-text-color-active"]=s.itemTextColorActiveInverted,w["--n-item-text-color-child-active"]=s.itemTextColorChildActiveInverted,w["--n-item-text-color-child-active-hover"]=s.itemTextColorChildActiveInverted,w["--n-item-text-color-active-hover"]=s.itemTextColorActiveHoverInverted,w["--n-item-icon-color"]=s.itemIconColorInverted,w["--n-item-icon-color-hover"]=s.itemIconColorHoverInverted,w["--n-item-icon-color-active"]=s.itemIconColorActiveInverted,w["--n-item-icon-color-active-hover"]=s.itemIconColorActiveHoverInverted,w["--n-item-icon-color-child-active"]=s.itemIconColorChildActiveInverted,w["--n-item-icon-color-child-active-hover"]=s.itemIconColorChildActiveHoverInverted,w["--n-item-icon-color-collapsed"]=s.itemIconColorCollapsedInverted,w["--n-item-text-color-horizontal"]=s.itemTextColorHorizontalInverted,w["--n-item-text-color-hover-horizontal"]=s.itemTextColorHoverHorizontalInverted,w["--n-item-text-color-active-horizontal"]=s.itemTextColorActiveHorizontalInverted,w["--n-item-text-color-child-active-horizontal"]=s.itemTextColorChildActiveHorizontalInverted,w["--n-item-text-color-child-active-hover-horizontal"]=s.itemTextColorChildActiveHoverHorizontalInverted,w["--n-item-text-color-active-hover-horizontal"]=s.itemTextColorActiveHoverHorizontalInverted,w["--n-item-icon-color-horizontal"]=s.itemIconColorHorizontalInverted,w["--n-item-icon-color-hover-horizontal"]=s.itemIconColorHoverHorizontalInverted,w["--n-item-icon-color-active-horizontal"]=s.itemIconColorActiveHorizontalInverted,w["--n-item-icon-color-active-hover-horizontal"]=s.itemIconColorActiveHoverHorizontalInverted,w["--n-item-icon-color-child-active-horizontal"]=s.itemIconColorChildActiveHorizontalInverted,w["--n-item-icon-color-child-active-hover-horizontal"]=s.itemIconColorChildActiveHoverHorizontalInverted,w["--n-arrow-color"]=s.arrowColorInverted,w["--n-arrow-color-hover"]=s.arrowColorHoverInverted,w["--n-arrow-color-active"]=s.arrowColorActiveInverted,w["--n-arrow-color-active-hover"]=s.arrowColorActiveHoverInverted,w["--n-arrow-color-child-active"]=s.arrowColorChildActiveInverted,w["--n-arrow-color-child-active-hover"]=s.arrowColorChildActiveHoverInverted,w["--n-item-color-hover"]=s.itemColorHoverInverted,w["--n-item-color-active"]=s.itemColorActiveInverted,w["--n-item-color-active-hover"]=s.itemColorActiveHoverInverted,w["--n-item-color-active-collapsed"]=s.itemColorActiveCollapsedInverted):(w["--n-group-text-color"]=s.groupTextColor,w["--n-color"]=s.color,w["--n-item-text-color"]=s.itemTextColor,w["--n-item-text-color-hover"]=s.itemTextColorHover,w["--n-item-text-color-active"]=s.itemTextColorActive,w["--n-item-text-color-child-active"]=s.itemTextColorChildActive,w["--n-item-text-color-child-active-hover"]=s.itemTextColorChildActiveHover,w["--n-item-text-color-active-hover"]=s.itemTextColorActiveHover,w["--n-item-icon-color"]=s.itemIconColor,w["--n-item-icon-color-hover"]=s.itemIconColorHover,w["--n-item-icon-color-active"]=s.itemIconColorActive,w["--n-item-icon-color-active-hover"]=s.itemIconColorActiveHover,w["--n-item-icon-color-child-active"]=s.itemIconColorChildActive,w["--n-item-icon-color-child-active-hover"]=s.itemIconColorChildActiveHover,w["--n-item-icon-color-collapsed"]=s.itemIconColorCollapsed,w["--n-item-text-color-horizontal"]=s.itemTextColorHorizontal,w["--n-item-text-color-hover-horizontal"]=s.itemTextColorHoverHorizontal,w["--n-item-text-color-active-horizontal"]=s.itemTextColorActiveHorizontal,w["--n-item-text-color-child-active-horizontal"]=s.itemTextColorChildActiveHorizontal,w["--n-item-text-color-child-active-hover-horizontal"]=s.itemTextColorChildActiveHoverHorizontal,w["--n-item-text-color-active-hover-horizontal"]=s.itemTextColorActiveHoverHorizontal,w["--n-item-icon-color-horizontal"]=s.itemIconColorHorizontal,w["--n-item-icon-color-hover-horizontal"]=s.itemIconColorHoverHorizontal,w["--n-item-icon-color-active-horizontal"]=s.itemIconColorActiveHorizontal,w["--n-item-icon-color-active-hover-horizontal"]=s.itemIconColorActiveHoverHorizontal,w["--n-item-icon-color-child-active-horizontal"]=s.itemIconColorChildActiveHorizontal,w["--n-item-icon-color-child-active-hover-horizontal"]=s.itemIconColorChildActiveHoverHorizontal,w["--n-arrow-color"]=s.arrowColor,w["--n-arrow-color-hover"]=s.arrowColorHover,w["--n-arrow-color-active"]=s.arrowColorActive,w["--n-arrow-color-active-hover"]=s.arrowColorActiveHover,w["--n-arrow-color-child-active"]=s.arrowColorChildActive,w["--n-arrow-color-child-active-hover"]=s.arrowColorChildActiveHover,w["--n-item-color-hover"]=s.itemColorHover,w["--n-item-color-active"]=s.itemColorActive,w["--n-item-color-active-hover"]=s.itemColorActiveHover,w["--n-item-color-active-collapsed"]=s.itemColorActiveCollapsed),w}),j=t?qe("menu",T(()=>e.inverted?"a":"b"),G,e):void 0,X=Qn(),Q=O(null),Y=O(null);let P=!0;const y=()=>{var B;P?P=!1:(B=Q.value)===null||B===void 0||B.sync({showAllItemsBeforeCalculate:!0})};function N(){return document.getElementById(X)}const K=O(-1);function H(B){K.value=e.options.length-B}function Z(B){B||(K.value=-1)}const M=T(()=>{const B=K.value;return{children:B===-1?[]:e.options.slice(B)}}),W=T(()=>{const{childrenField:B,disabledField:f,keyField:s}=e;return nt([M.value],{getIgnored(L){return qt(L)},getChildren(L){return L[B]},getDisabled(L){return L[f]},getKey(L){var ee;return(ee=L[s])!==null&&ee!==void 0?ee:L.name}})}),te=T(()=>nt([{}]).treeNodes[0]);function ne(){var B;if(K.value===-1)return d(Gt,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:te.value,domId:X,isEllipsisPlaceholder:!0});const f=W.value.treeNodes[0],s=x.value,L=!!(!((B=f.children)===null||B===void 0)&&B.some(ee=>s.includes(ee.key)));return d(Gt,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:L,tmNode:f,domId:X,rawNodes:f.rawNode.children||[],tmNodes:f.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:o,controlledExpandedKeys:m,uncontrolledExpanededKeys:g,mergedExpandedKeys:C,uncontrolledValue:p,mergedValue:v,activePath:x,tmNodes:k,mergedTheme:n,mergedCollapsed:i,cssVars:t?void 0:G,themeClass:j==null?void 0:j.themeClass,overflowRef:Q,counterRef:Y,updateCounter:()=>{},onResize:y,onUpdateOverflow:Z,onUpdateCount:H,renderCounter:ne,getCounter:N,onRender:j==null?void 0:j.onRender,showOption:_,deriveResponsiveState:y}},render(){const{mergedClsPrefix:e,mode:o,themeClass:t,onRender:n}=this;n==null||n();const r=()=>this.tmNodes.map(c=>po(c,this.$props)),l=o==="horizontal"&&this.responsive,a=()=>d("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${o}`,l&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},l?d(Vt,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:r,counter:this.renderCounter}):r());return l?d(Lt,{onResize:this.onResize},{default:a}):a()}}),Qi={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 192 512"},el=je("path",{d:"M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z",fill:"currentColor"},null,-1),tl=[el],ol=ae({name:"CaretLeft",render:function(o,t){return Ge(),ro("svg",Qi,tl)}}),nl={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 192 512"},rl=je("path",{d:"M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z",fill:"currentColor"},null,-1),il=[rl],ll=ae({name:"CaretRight",render:function(o,t){return Ge(),ro("svg",nl,il)}}),al=ae({__name:"Menu",props:{disableSwitch:{type:Boolean}},setup(e){const o=e,t=ce(_o),n=ce(Zt),r=[{label:"声笔简码",value:"sbjm"},{label:"声笔拼音",value:"sbpy"},{label:"声笔飞码",value:"sbfm"},{label:"声笔飞单",value:"sbfd"},{label:"声笔飞讯",value:"sbfx"},{label:"声笔小鹤",value:"sbxh"},{label:"声笔自然",value:"sbzr"}],i=ce(Jt),l=ce(No),a=ce(Qt),c=ce(Fo);function p(){tt().focus()}function u(v){p(),n(v)}return(v,g)=>(Ge(),xt(he(Ko),null,{default:_e(()=>[Ce(he(_i),{style:{width:"160px"},value:he(t),options:r,loading:he(i),"onUpdate:value":u,disabled:o.disableSwitch},null,8,["value","loading","disabled"]),Ce(he(Ii),{class:"square-group",onClick:p},{default:_e(()=>[Ce(he(wt),{secondary:"",onClick:he(a)},{default:_e(()=>[Fe(ot(he(l)?"En":"中"),1)]),_:1},8,["onClick"]),Ce(he(wt),{secondary:"",disabled:he(l),onClick:g[0]||(g[0]=()=>{})},{default:_e(()=>[Fe(ot(he(c)?".":"。"),1)]),_:1},8,["disabled"])]),_:1})]),_:1}))}});var an={exports:{}};(function(e){(function(){var o=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],t=typeof window<"u",n=t&&window.mozInnerScreenX!=null;function r(i,l,a){if(!t)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var c=a&&a.debug||!1;if(c){var p=document.querySelector("#input-textarea-caret-position-mirror-div");p&&p.parentNode.removeChild(p)}var u=document.createElement("div");u.id="input-textarea-caret-position-mirror-div",document.body.appendChild(u);var v=u.style,g=window.getComputedStyle?window.getComputedStyle(i):i.currentStyle,b=i.nodeName==="INPUT";v.whiteSpace="pre-wrap",b||(v.wordWrap="break-word"),v.position="absolute",c||(v.visibility="hidden"),o.forEach(function(k){b&&k==="lineHeight"?v.lineHeight=g.height:v[k]=g[k]}),n?i.scrollHeight>parseInt(g.height)&&(v.overflowY="scroll"):v.overflow="hidden",u.textContent=i.value.substring(0,l),b&&(u.textContent=u.textContent.replace(/\s/g," "));var m=document.createElement("span");m.textContent=i.value.substring(l)||".",u.appendChild(m);var C={top:m.offsetTop+parseInt(g.borderTopWidth),left:m.offsetLeft+parseInt(g.borderLeftWidth),height:parseInt(g.lineHeight)};return c?m.style.backgroundColor="#aaa":document.body.removeChild(u),C}e.exports=r})()})(an);var sl=an.exports;const dl=Rr(sl),cl=ae({__name:"Panel",props:{debugMode:{type:Boolean}},setup(e,{expose:o}){const t=ce(Mo),n=ce(Ao),r=ce(Jt),i=ce($o),l=ce(Zt),a=ce(Qt),c=e,{debugMode:p}=fr(c),u=O(0),v=O(0),g=O(!1),b=O(!1),m=O(0),C=O(0),k=O(""),x=O(""),E=O(""),D=O([]),z=O(0),_=O(!0),G=O(!1),j=O(!1),X=O(!1),Q=O(!1),Y=O(!1);async function P(F,q){j.value=!0,await M(q),F.target.focus()}const y={Escape:"Escape",F4:"F4",Backspace:"BackSpace",Delete:"Delete",Tab:"Tab",Enter:"Return",Home:"Home",End:"End",PageUp:"Page_Up",PageDown:"Page_Down",Alt:"Alt_L",ArrowUp:"Up",ArrowRight:"Right",ArrowDown:"Down",ArrowLeft:"Left","~":"asciitilde","`":"quoteleft","!":"exclam","@":"at","#":"numbersign",$:"dollar","%":"percent","^":"asciicircum","&":"ampersand","*":"asterisk","(":"parenleft",")":"parenright","-":"minus",_:"underscore","+":"plus","=":"equal","{":"braceleft","[":"bracketleft","}":"braceright","]":"bracketright",":":"colon",";":"semicolon",'"':"quotedbl","'":"apostrophe","|":"bar","\\":"backslash","<":"less",",":"comma",">":"greater",".":"period","?":"question","/":"slash"," ":"space"},N=["`"];function K(F){return/^[a-z0-9!"#$%&'()*+,./:;<=>?@[\] ^_`{|}~\\-]$/i.test(F)}function H(F){const q=tt(),{selectionStart:ue,selectionEnd:ye}=q;n.value=n.value.slice(0,ue)+F+n.value.slice(ye),Je(()=>{q.selectionEnd=ue+F.length})}async function Z(F,q){const ue=tt();!("updatedSchema"in F)&&F.updatedOptions&&i(F.updatedOptions),F.state===0?(j.value=!1,X.value=!1,b.value=!1,H(F.committed)):F.state===1?(k.value=F.head,x.value=F.body,E.value=F.tail,z.value=F.highlighted,D.value=F.candidates.map((ye,Pe)=>{var Te;let Oe=`${((Te=F.selectLabels)==null?void 0:Te[Pe])||Pe+1} ${ye.text}`;return ye.comment&&(Oe+=" "+ye.comment),{label:Oe,key:Pe}}),_.value=F.page===0,G.value=F.isLastPage,X.value||(X.value=!0,Q.value=!1),Je(()=>{document.querySelector(".n-popover").getBoundingClientRect().width>ue.getBoundingClientRect().width&&(Q.value=!0)}),F.committed&&H(F.committed)):(j.value=!1,X.value=!1,F.state===2&&F.updatedSchema&&await l(F.updatedSchema.split("/")[0]),F.state===3&&K(q)&&H(q)),ue.focus()}async function M(F){const q=await t.value.process(F);return Z(q,F)}let W=!1,te=0,ne=0;Be(n,(F,q)=>{if(W&&(W=!1,q.length+1===F.length&&q.substring(0,te)===F.substring(0,te)&&q.substring(ne)===F.substring(ne+1))){const ue=tt();n.value=q,Je(()=>{j.value=!0,ue.selectionEnd=te,M(F[te])})}});function B(F){if(p.value||r.value)return;const{code:q,key:ue}=F,ye=tt();if(ue==="Unidentified"){W=!0,te=ye.selectionStart,ne=ye.selectionEnd;return}if(ue==="Shift"){Y.value=!0;return}Y.value=!1;const Pe=K(ue),Oe=ue==="Alt",Te=F.getModifierState("Control"),Ke=F.getModifierState("Meta"),He=F.getModifierState("Alt"),Ae=F.getModifierState("Shift"),$e=Te||Ke||He||Ae&&!Pe;if(!j.value&&(document.activeElement!==ye||!Pe&&ue!=="F4"||$e&&!Ae&&!(Te&&N.includes(ue))))return;let ve;const S=A=>`{${A}}`;if($e||!Pe){if(ve=/^[0-9a-z]$/i.test(ue)?ue:y[ue],ve===void 0)return;Oe&&q==="AltRight"&&(ve="Alt_R");const A=[];Te&&A.push("Control"),Ke&&A.push("Meta"),He&&!Oe&&A.push("Alt"),Ae&&A.push("Shift"),A.push(ve),ve=S(A.join("+"))}else q.startsWith("Numpad")?ve=S(`KP_${q.substring(6)}`):ve=ue;if(!b.value){const A=ye.getBoundingClientRect(),pe=dl(ye,ye.selectionStart);m.value=A.x+pe.left,C.value=tr.value?8:A.y+pe.top+pe.height-ye.scrollTop}j.value=!0,F.preventDefault(),M(ve)}function f(F){if(p.value||r.value)return;const{key:q}=F;q==="Shift"&&Y.value&&a(),Y.value=!1,j.value&&M(`{Release+${y[q]||q}}`)}async function s(F){const q=JSON.parse(await t.value.selectCandidateOnCurrentPage(F));return Z(q,"")}function L(F){return F.touches.length===1?F.touches[0]:void 0}function ee(F,q){u.value=F,v.value=q;const ue=document.querySelector(".n-popover");m.value=ue.getBoundingClientRect().left,g.value=!0}function Re(F){ee(F.clientX,F.clientY)}function re(F){const q=L(F);q&&ee(q.clientX,q.clientY)}function Se(F,q){g.value&&(b.value=!0,m.value+=F-u.value,C.value+=q-v.value,u.value=F,v.value=q)}function w(F){Se(F.clientX,F.clientY)}function Ne(F){const q=L(F);q&&Se(q.clientX,q.clientY)}function xe(){g.value=!1}return Ye(()=>{document.addEventListener("keydown",B),document.addEventListener("keyup",f),document.addEventListener("mousemove",w),document.addEventListener("touchmove",Ne),document.addEventListener("mouseup",xe),document.addEventListener("touchend",xe)}),hr(()=>{document.removeEventListener("keydown",B),document.removeEventListener("keyup",f),document.removeEventListener("mousemove",w),document.removeEventListener("touchmove",Ne),document.removeEventListener("mouseup",xe),document.removeEventListener("touchend",xe)}),o({debug:P}),(F,q)=>(Ge(),xt(he(lo),{show:X.value,"show-arrow":!1,x:m.value,y:C.value,flip:!g.value,placement:"bottom-start",trigger:"manual",style:{cursor:"move"},onMousedown:Re,onTouchstart:re},{default:_e(()=>[Ce(he(yo),{type:"success"},{default:_e(()=>[Fe(ot(k.value),1)]),_:1}),Fe("  "),Ce(he(yo),{type:"info"},{default:_e(()=>[Fe(ot(x.value),1)]),_:1}),Fe("  "+ot(E.value)+" ",1),Eo(Ce(he(Ji),{options:D.value,mode:"horizontal",value:z.value,"onUpdate:value":s},null,8,["options","value"]),[[Bo,D.value.length]]),Ce(he(wt),{text:"",disabled:_.value},{default:_e(()=>[Ce(he(jt),{component:he(ol),onClick:q[0]||(q[0]=ue=>M("-"))},null,8,["component"])]),_:1},8,["disabled"]),Ce(he(wt),{text:"",disabled:G.value},{default:_e(()=>[Ce(he(jt),{component:he(ll),onClick:q[1]||(q[1]=ue=>M("="))},null,8,["component"])]),_:1},8,["disabled"])]),_:1},8,["show","x","y","flip"]))}}),Bt="ascii_mode",ul="ascii_punct",fl=ae({__name:"Input",props:{method:{},disableSwitch:{type:Boolean}},setup(e){const o=e;function t(k){a.value=k,l.value=k?"":i.value}const n=O(void 0),r=O(""),i=O(o.method??"sbjm"),l=O(""),a=O(!0),c=O(!1),p=O(!1),u={[Bt]:c,[ul]:p},g=(k=>async()=>{const x=u[k],E=!x.value;await n.value.setOption(k,E),x.value=E})(Bt);async function b(k){t(!0);try{await n.value.setIME(k),i.value=k;for(const[x,E]of Object.entries(u)){if(x===Bt){E.value=!1;continue}await n.value.setOption(x,E.value)}}catch(x){console.error(x)}t(!1)}function m(k){if(k.length===1){const x=k[0];for(const[E,D]of Object.entries(u)){if(E===x){D.value=!0;return}if(`!${E}`===x){D.value=!1;return}}}}me(_o,l),me(Zt,b),me(Jt,a),me(No,c),me(Fo,p),me(Qt,g),me(Ao,r),me($o,m),me(Mo,n),Ye(async()=>{n.value=new or,nr(),await b(i.value)});const C=O();return(k,x)=>(Ge(),xt(he(ir),{theme:he(rr)},{default:_e(()=>[(Ge(),xt(vr,null,[Ce(he(Ko),{vertical:""},{default:_e(()=>[Ce(al,{"disable-switch":o.disableSwitch},null,8,["disable-switch"]),Ce(he(zr),{id:"container",value:r.value,"onUpdate:value":x[0]||(x[0]=E=>r.value=E),type:"textarea",rows:15},null,8,["value"]),Ce(cl,{ref_key:"panel",ref:C},null,512)]),_:1})],1024))]),_:1},8,["theme"]))}}),hl=je("h1",{id:"声笔快打",tabindex:"-1"},[Fe("声笔快打 "),je("a",{class:"header-anchor",href:"#声笔快打","aria-label":'Permalink to "声笔快打"'},"​")],-1),vl=je("p",null,[Fe("「声笔快打」是声笔输入法的在线版，基于 "),je("a",{href:"http://github.com/libreservice/my_rime",target:"_blank",rel:"noreferrer"},"My Rime（梧桐输入法）"),Fe("实现。您无需安装就可以体验所有的声笔系列码输入方案，包括声笔简码、声笔飞码、声笔飞单、声笔飞讯、声笔自然、声笔小鹤和声笔拼音。")],-1),pl=je("p",null,[Fe("为提高访问速度，在线版中的每个方案仅包含六千余字和五万余词，且不包含反查功能。如您希望尝试完整版，欢迎在"),je("a",{href:"https://github.com/sbsrf/home/releases",target:"_blank",rel:"noreferrer"},"发布页"),Fe("下载。")],-1),Sl=JSON.parse('{"title":"声笔快打","description":"","frontmatter":{"sidebar":false,"editLink":false,"lastUpdated":false},"headers":[],"relativePath":"sbkd/index.md","filePath":"sbkd/index.md"}'),ml={name:"sbkd/index.md"},kl=Object.assign(ml,{setup(e){return(o,t)=>{const n=pr("ClientOnly");return Ge(),ro("div",null,[hl,vl,pl,Ce(n,null,{default:_e(()=>[Ce(fl)]),_:1})])}}});export{Sl as __pageData,kl as default};
