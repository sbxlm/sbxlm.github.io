import{a0 as Bo,c as ht,o as vt,p as Pe,a1 as Ht,a2 as _t,u as Nn,d as Xe,N as Yt,a3 as Lo,a as Zt,U as yt,a4 as Ko,a5 as Ho,j as Do,a6 as jo,g as ge,a7 as pn,a8 as Wo,a9 as Vo,aa as Uo,ab as Go,ac as qo,b as it,s as Xo,i as Yo,R as mn,T as Zo,ad as Jo,G as _n,w as Qo,D as er,F as tr,X as nr,ae as or,W as gt,m as rr,af as ir,ag as Fn,ah as Jt,ai as Qt,aj as Mn,ak as en,al as An,am as nt,B as wt,an as $n,ao as En,ap as Bn,aq as lr,ar,x as sr,as as dr,y as cr,A as ur}from"./chunks/util.C1ESl689.js";import{a4 as fr,$ as tn,S as hr,aj as vr,q as Ae,p as A,X as ve,h as O,d as ie,L as ce,v as Ye,ac as pr,ad as mr,a5 as d,K as kt,a9 as ae,P as Qe,r as gr,T as nn,s as Dt,F as on,a6 as Ln,a7 as Kn,o as qe,c as rn,j as je,b as xt,w as Fe,E as Se,k as he,a as Me,t as ot,x as br,a8 as yr,ak as wr,B as xr}from"./chunks/framework.DQB51EXC.js";import{n as Hn,b as M,f as T,a as q,e as We,u as Oe,g as de,h as X,d as Re,j as Rt,B as Cr,k as et,c as Ve,N as Dn}from"./chunks/Space.CgZqM9Zv.js";import{d as jn,e as bt,g as Sr,i as ln,h as kr,j as an,u as jt,B as Wn,V as Vn,k as Un,l as Gn,a as Wt,r as Rr,p as qn,f as zr,N as Ir,c as Pr,b as gn}from"./chunks/text.Dkq0RvIQ.js";import{r as ze,N as Or,a as Tr,m as Nr,k as sn,b as _r}from"./chunks/Input.Dc7VTfA8.js";import{g as Fr}from"./chunks/theme.D8WwGwl_.js";function Ge(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function Mr(e={},n){const t=vr({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:o,keyup:r}=e,i=s=>{switch(s.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}o!==void 0&&Object.keys(o).forEach(c=>{if(c!==s.key)return;const u=o[c];if(typeof u=="function")u(s);else{const{stop:f=!1,prevent:m=!1}=u;f&&s.stopPropagation(),m&&s.preventDefault(),u.handler(s)}})},l=s=>{switch(s.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}r!==void 0&&Object.keys(r).forEach(c=>{if(c!==s.key)return;const u=r[c];if(typeof u=="function")u(s);else{const{stop:f=!1,prevent:m=!1}=u;f&&s.stopPropagation(),m&&s.preventDefault(),u.handler(s)}})},a=()=>{(n===void 0||n.value)&&(vt("keydown",document,i),vt("keyup",document,l)),n!==void 0&&Ae(n,s=>{s?(vt("keydown",document,i),vt("keyup",document,l)):(ht("keydown",document,i),ht("keyup",document,l))})};return Bo()?(fr(a),tn(()=>{(n===void 0||n.value)&&(ht("keydown",document,i),ht("keyup",document,l))})):a(),hr(t)}function Ar(e,n,t){const o=A(e.value);let r=null;return Ae(e,i=>{r!==null&&window.clearTimeout(r),i===!0?t&&!t.value?o.value=!0:r=window.setTimeout(()=>{o.value=!0},n):o.value=!1}),o}function bn(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function tt(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function yn(e){return e&-e}class Xn{constructor(n,t){this.l=n,this.min=t;const o=new Array(n+1);for(let r=0;r<n+1;++r)o[r]=0;this.ft=o}add(n,t){if(t===0)return;const{l:o,ft:r}=this;for(n+=1;n<=o;)r[n]+=t,n+=yn(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:t,min:o,l:r}=this;if(n>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let i=n*o;for(;n>0;)i+=t[n],n-=yn(n);return i}getBound(n){let t=0,o=this.l;for(;o>t;){const r=Math.floor((t+o)/2),i=this.sum(r);if(i>n){o=r;continue}else if(i<n){if(t===r)return this.sum(t+1)<=n?t+1:r;t=r}else return r}return t}}let pt;function $r(){return typeof document>"u"?!1:(pt===void 0&&("matchMedia"in window?pt=window.matchMedia("(pointer:coarse)").matches:pt=!1),pt)}let Ft;function wn(){return typeof document>"u"?1:(Ft===void 0&&(Ft="chrome"in window?window.devicePixelRatio:1),Ft)}const Yn="VVirtualListXScroll";function Er({columnsRef:e,renderColRef:n,renderItemWithColsRef:t}){const o=A(0),r=A(0),i=O(()=>{const c=e.value;if(c.length===0)return null;const u=new Xn(c.length,0);return c.forEach((f,m)=>{u.add(m,f.width)}),u}),l=Pe(()=>{const c=i.value;return c!==null?Math.max(c.getBound(r.value)-1,0):0}),a=c=>{const u=i.value;return u!==null?u.sum(c):0},s=Pe(()=>{const c=i.value;return c!==null?Math.min(c.getBound(r.value+o.value)+1,e.value.length-1):0});return ve(Yn,{startIndexRef:l,endIndexRef:s,columnsRef:e,renderColRef:n,renderItemWithColsRef:t,getLeft:a}),{listWidthRef:o,scrollLeftRef:r}}const xn=ie({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:n,columnsRef:t,getLeft:o,renderColRef:r,renderItemWithColsRef:i}=ce(Yn);return{startIndex:e,endIndex:n,columns:t,renderCol:r,renderItemWithCols:i,getLeft:o}},render(){const{startIndex:e,endIndex:n,columns:t,renderCol:o,renderItemWithCols:r,getLeft:i,item:l}=this;if(r!=null)return r({itemIndex:this.index,startColIndex:e,endColIndex:n,allColumns:t,item:l,getLeft:i});if(o!=null){const a=[];for(let s=e;s<=n;++s){const c=t[s];a.push(o({column:c,left:i(s),item:l}))}return a}return null}}),Br=bt(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[bt("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[bt("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Lr=ie({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=Hn();Br.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:jn,ssr:n}),Ye(()=>{const{defaultScrollIndex:C,defaultScrollKey:w}=e;C!=null?N({index:C}):w!=null&&N({key:w})});let t=!1,o=!1;pr(()=>{if(t=!1,!o){o=!0;return}N({top:I.value,left:l.value})}),mr(()=>{t=!0,o||(o=!0)});const r=Pe(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let C=0;return e.columns.forEach(w=>{C+=w.width}),C}),i=O(()=>{const C=new Map,{keyField:w}=e;return e.items.forEach((K,H)=>{C.set(K[w],H)}),C}),{scrollLeftRef:l,listWidthRef:a}=Er({columnsRef:ae(e,"columns"),renderColRef:ae(e,"renderCol"),renderItemWithColsRef:ae(e,"renderItemWithCols")}),s=A(null),c=A(void 0),u=new Map,f=O(()=>{const{items:C,itemSize:w,keyField:K}=e,H=new Xn(C.length,w);return C.forEach((S,j)=>{const G=S[K],ee=u.get(G);ee!==void 0&&H.add(j,ee)}),H}),m=A(0),I=A(0),p=Pe(()=>Math.max(f.value.getBound(I.value-bn(e.paddingTop))-1,0)),y=O(()=>{const{value:C}=c;if(C===void 0)return[];const{items:w,itemSize:K}=e,H=p.value,S=Math.min(H+Math.ceil(C/K+1),w.length-1),j=[];for(let G=H;G<=S;++G)j.push(w[G]);return j}),N=(C,w)=>{if(typeof C=="number"){R(C,w,"auto");return}const{left:K,top:H,index:S,key:j,position:G,behavior:ee,debounce:F=!0}=C;if(K!==void 0||H!==void 0)R(K,H,ee);else if(S!==void 0)L(S,ee,F);else if(j!==void 0){const D=i.value.get(j);D!==void 0&&L(D,ee,F)}else G==="bottom"?R(0,Number.MAX_SAFE_INTEGER,ee):G==="top"&&R(0,0,ee)};let z,P=null;function L(C,w,K){const{value:H}=f,S=H.sum(C)+bn(e.paddingTop);if(!K)s.value.scrollTo({left:0,top:S,behavior:w});else{z=C,P!==null&&window.clearTimeout(P),P=window.setTimeout(()=>{z=void 0,P=null},16);const{scrollTop:j,offsetHeight:G}=s.value;if(S>j){const ee=H.get(C);S+ee<=j+G||s.value.scrollTo({left:0,top:S+ee-G,behavior:w})}else s.value.scrollTo({left:0,top:S,behavior:w})}}function R(C,w,K){s.value.scrollTo({left:C,top:w,behavior:K})}function _(C,w){var K,H,S;if(t||e.ignoreItemResize||fe(w.target))return;const{value:j}=f,G=i.value.get(C),ee=j.get(G),F=(S=(H=(K=w.borderBoxSize)===null||K===void 0?void 0:K[0])===null||H===void 0?void 0:H.blockSize)!==null&&S!==void 0?S:w.contentRect.height;if(F===ee)return;F-e.itemSize===0?u.delete(C):u.set(C,F-e.itemSize);const g=F-ee;if(g===0)return;j.add(G,g);const v=s.value;if(v!=null){if(z===void 0){const x=j.sum(G);v.scrollTop>x&&v.scrollBy(0,g)}else if(G<z)v.scrollBy(0,g);else if(G===z){const x=j.sum(G);F+x>v.scrollTop+v.offsetHeight&&v.scrollBy(0,g)}le()}m.value++}const W=!$r();let V=!1;function Z(C){var w;(w=e.onScroll)===null||w===void 0||w.call(e,C),(!W||!V)&&le()}function oe(C){var w;if((w=e.onWheel)===null||w===void 0||w.call(e,C),W){const K=s.value;if(K!=null){if(C.deltaX===0&&(K.scrollTop===0&&C.deltaY<=0||K.scrollTop+K.offsetHeight>=K.scrollHeight&&C.deltaY>=0))return;C.preventDefault(),K.scrollTop+=C.deltaY/wn(),K.scrollLeft+=C.deltaX/wn(),le(),V=!0,Sr(()=>{V=!1})}}}function J(C){if(t||fe(C.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(C.contentRect.height===c.value)return}else if(C.contentRect.height===c.value&&C.contentRect.width===a.value)return;c.value=C.contentRect.height,a.value=C.contentRect.width;const{onResize:w}=e;w!==void 0&&w(C)}function le(){const{value:C}=s;C!=null&&(I.value=C.scrollTop,l.value=C.scrollLeft)}function fe(C){let w=C;for(;w!==null;){if(w.style.display==="none")return!0;w=w.parentElement}return!1}return{listHeight:c,listStyle:{overflow:"auto"},keyToIndex:i,itemsStyle:O(()=>{const{itemResizable:C}=e,w=tt(f.value.sum());return m.value,[e.itemsStyle,{boxSizing:"content-box",width:tt(r.value),height:C?"":w,minHeight:C?w:"",paddingTop:tt(e.paddingTop),paddingBottom:tt(e.paddingBottom)}]}),visibleItemsStyle:O(()=>(m.value,{transform:`translateY(${tt(f.value.sum(p.value))})`})),viewportItems:y,listElRef:s,itemsElRef:A(null),scrollTo:N,handleListResize:J,handleListScroll:Z,handleListWheel:oe,handleItemResize:_}},render(){const{itemResizable:e,keyField:n,keyToIndex:t,visibleItemsTag:o}=this;return d(Ht,{onResize:this.handleListResize},{default:()=>{var r,i;return d("div",kt(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?d("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[d(o,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:l,renderItemWithCols:a}=this;return this.viewportItems.map(s=>{const c=s[n],u=t.get(c),f=l!=null?d(xn,{index:u,item:s}):void 0,m=a!=null?d(xn,{index:u,item:s}):void 0,I=this.$slots.default({item:s,renderedCols:f,renderedItemWithCols:m,index:u})[0];return e?d(Ht,{key:c,onResize:p=>this.handleItemResize(c,p)},{default:()=>I}):(I.key=c,I)})}})]):(i=(r=this.$slots).empty)===null||i===void 0?void 0:i.call(r)])}})}}),Le="v-hidden",Kr=bt("[v-hidden]",{display:"none!important"}),Vt=ie({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const t=A(null),o=A(null);function r(l){const{value:a}=t,{getCounter:s,getTail:c}=e;let u;if(s!==void 0?u=s():u=o.value,!a||!u)return;u.hasAttribute(Le)&&u.removeAttribute(Le);const{children:f}=a;if(l.showAllItemsBeforeCalculate)for(const L of f)L.hasAttribute(Le)&&L.removeAttribute(Le);const m=a.offsetWidth,I=[],p=n.tail?c==null?void 0:c():null;let y=p?p.offsetWidth:0,N=!1;const z=a.children.length-(n.tail?1:0);for(let L=0;L<z-1;++L){if(L<0)continue;const R=f[L];if(N){R.hasAttribute(Le)||R.setAttribute(Le,"");continue}else R.hasAttribute(Le)&&R.removeAttribute(Le);const _=R.offsetWidth;if(y+=_,I[L]=_,y>m){const{updateCounter:W}=e;for(let V=L;V>=0;--V){const Z=z-1-V;W!==void 0?W(Z):u.textContent=`${Z}`;const oe=u.offsetWidth;if(y-=I[V],y+oe<=m||V===0){N=!0,L=V-1,p&&(L===-1?(p.style.maxWidth=`${m-oe}px`,p.style.boxSizing="border-box"):p.style.maxWidth="");const{onUpdateCount:J}=e;J&&J(Z);break}}}}const{onUpdateOverflow:P}=e;N?P!==void 0&&P(!0):(P!==void 0&&P(!1),u.setAttribute(Le,""))}const i=Hn();return Kr.mount({id:"vueuc/overflow",head:!0,anchorMetaName:jn,ssr:i}),Ye(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:o,sync:r}},render(){const{$slots:e}=this;return Qe(()=>this.sync({showAllItemsBeforeCalculate:!1})),d("div",{class:"v-overflow",ref:"selfRef"},[gr(e,"default"),e.counter?e.counter():d("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Zn(e,n){n&&(Ye(()=>{const{value:t}=e;t&&_t.registerHandler(t,n)}),Ae(e,(t,o)=>{o&&_t.unregisterHandler(o)},{deep:!1}),tn(()=>{const{value:t}=e;t&&_t.unregisterHandler(t)}))}function Cn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Hr(e){return n=>{n?e.value=n.$el:e.value=null}}function Mt(e){const n=e.filter(t=>t!==void 0);if(n.length!==0)return n.length===1?n[0]:t=>{e.forEach(o=>{o&&o(t)})}}const Dr=ie({name:"Checkmark",render(){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},d("g",{fill:"none"},d("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),jr=ie({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Wr=ie({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Vr=ie({name:"Empty",render(){return d("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),d("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Ur=ie({props:{onFocus:Function,onBlur:Function},setup(e){return()=>d("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Sn(e){return Array.isArray(e)?e:[e]}const Ut={STOP:"STOP"};function Jn(e,n){const t=n(e);e.children!==void 0&&t!==Ut.STOP&&e.children.forEach(o=>Jn(o,n))}function Gr(e,n={}){const{preserveGroup:t=!1}=n,o=[],r=t?l=>{l.isLeaf||(o.push(l.key),i(l.children))}:l=>{l.isLeaf||(l.isGroup||o.push(l.key),i(l.children))};function i(l){l.forEach(r)}return i(e),o}function qr(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function Xr(e){return e.children}function Yr(e){return e.key}function Zr(){return!1}function Jr(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function Qr(e){return e.disabled===!0}function ei(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function At(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function $t(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function ti(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)||t.add(o)}),Array.from(t)}function ni(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)&&t.delete(o)}),Array.from(t)}function oi(e){return(e==null?void 0:e.type)==="group"}function ri(e){const n=new Map;return e.forEach((t,o)=>{n.set(t.key,o)}),t=>{var o;return(o=n.get(t))!==null&&o!==void 0?o:null}}class ii extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function li(e,n,t,o){return Ct(n.concat(e),t,o,!1)}function ai(e,n){const t=new Set;return e.forEach(o=>{const r=n.treeNodeMap.get(o);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function si(e,n,t,o){const r=Ct(n,t,o,!1),i=Ct(e,t,o,!0),l=ai(e,t),a=[];return r.forEach(s=>{(i.has(s)||l.has(s))&&a.push(s)}),a.forEach(s=>r.delete(s)),r}function Et(e,n){const{checkedKeys:t,keysToCheck:o,keysToUncheck:r,indeterminateKeys:i,cascade:l,leafOnly:a,checkStrategy:s,allowNotLoaded:c}=e;if(!l)return o!==void 0?{checkedKeys:ti(t,o),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:ni(t,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:u}=n;let f;r!==void 0?f=si(r,t,n,c):o!==void 0?f=li(o,t,n,c):f=Ct(t,n,c,!1);const m=s==="parent",I=s==="child"||a,p=f,y=new Set,N=Math.max.apply(null,Array.from(u.keys()));for(let z=N;z>=0;z-=1){const P=z===0,L=u.get(z);for(const R of L){if(R.isLeaf)continue;const{key:_,shallowLoaded:W}=R;if(I&&W&&R.children.forEach(J=>{!J.disabled&&!J.isLeaf&&J.shallowLoaded&&p.has(J.key)&&p.delete(J.key)}),R.disabled||!W)continue;let V=!0,Z=!1,oe=!0;for(const J of R.children){const le=J.key;if(!J.disabled){if(oe&&(oe=!1),p.has(le))Z=!0;else if(y.has(le)){Z=!0,V=!1;break}else if(V=!1,Z)break}}V&&!oe?(m&&R.children.forEach(J=>{!J.disabled&&p.has(J.key)&&p.delete(J.key)}),p.add(_)):Z&&y.add(_),P&&I&&p.has(_)&&p.delete(_)}}return{checkedKeys:Array.from(p),indeterminateKeys:Array.from(y)}}function Ct(e,n,t,o){const{treeNodeMap:r,getChildren:i}=n,l=new Set,a=new Set(e);return e.forEach(s=>{const c=r.get(s);c!==void 0&&Jn(c,u=>{if(u.disabled)return Ut.STOP;const{key:f}=u;if(!l.has(f)&&(l.add(f),a.add(f),ei(u.rawNode,i))){if(o)return Ut.STOP;if(!t)throw new ii}})}),a}function di(e,{includeGroup:n=!1,includeSelf:t=!0},o){var r;const i=o.treeNodeMap;let l=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const a={keyPath:[],treeNodePath:[],treeNode:l};if(l!=null&&l.ignored)return a.treeNode=null,a;for(;l;)!l.ignored&&(n||!l.isGroup)&&a.treeNodePath.push(l),l=l.parent;return a.treeNodePath.reverse(),t||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(s=>s.key),a}function ci(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function ui(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r+1)%o]:r===t.length-1?null:t[r+1]}function kn(e,n,{loop:t=!1,includeDisabled:o=!1}={}){const r=n==="prev"?fi:ui,i={reverse:n==="prev"};let l=!1,a=null;function s(c){if(c!==null){if(c===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){a=e;return}}else if((!c.disabled||o)&&!c.ignored&&!c.isGroup){a=c;return}if(c.isGroup){const u=dn(c,i);u!==null?a=u:s(r(c,t))}else{const u=r(c,!1);if(u!==null)s(u);else{const f=hi(c);f!=null&&f.isGroup?s(r(f,t)):t&&s(r(c,!0))}}}}return s(e),a}function fi(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r-1+o)%o]:r===0?null:t[r-1]}function hi(e){return e.parent}function dn(e,n={}){const{reverse:t=!1}=n,{children:o}=e;if(o){const{length:r}=o,i=t?r-1:0,l=t?-1:r,a=t?-1:1;for(let s=i;s!==l;s+=a){const c=o[s];if(!c.disabled&&!c.ignored)if(c.isGroup){const u=dn(c,n);if(u!==null)return u}else return c}}return null}const vi={getChild(){return this.ignored?null:dn(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return kn(this,"next",e)},getPrev(e={}){return kn(this,"prev",e)}};function pi(e,n){const t=n?new Set(n):void 0,o=[];function r(i){i.forEach(l=>{o.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||t===void 0||t.has(l.key))&&r(l.children)})}return r(e),o}function mi(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function Qn(e,n,t,o,r,i=null,l=0){const a=[];return e.forEach((s,c)=>{var u;const f=Object.create(o);if(f.rawNode=s,f.siblings=a,f.level=l,f.index=c,f.isFirstChild=c===0,f.isLastChild=c+1===e.length,f.parent=i,!f.ignored){const m=r(s);Array.isArray(m)&&(f.children=Qn(m,n,t,o,r,f,l+1))}a.push(f),n.set(f.key,f),t.has(l)||t.set(l,[]),(u=t.get(l))===null||u===void 0||u.push(f)}),a}function rt(e,n={}){var t;const o=new Map,r=new Map,{getDisabled:i=Qr,getIgnored:l=Zr,getIsGroup:a=oi,getKey:s=Yr}=n,c=(t=n.getChildren)!==null&&t!==void 0?t:Xr,u=n.ignoreEmptyChildren?R=>{const _=c(R);return Array.isArray(_)?_.length?_:null:_}:c,f=Object.assign({get key(){return s(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return qr(this.rawNode,u)},get shallowLoaded(){return Jr(this.rawNode,u)},get ignored(){return l(this.rawNode)},contains(R){return mi(this,R)}},vi),m=Qn(e,o,r,f,u);function I(R){if(R==null)return null;const _=o.get(R);return _&&!_.isGroup&&!_.ignored?_:null}function p(R){if(R==null)return null;const _=o.get(R);return _&&!_.ignored?_:null}function y(R,_){const W=p(R);return W?W.getPrev(_):null}function N(R,_){const W=p(R);return W?W.getNext(_):null}function z(R){const _=p(R);return _?_.getParent():null}function P(R){const _=p(R);return _?_.getChild():null}const L={treeNodes:m,treeNodeMap:o,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:u,getFlattenedNodes(R){return pi(m,R)},getNode:I,getPrev:y,getNext:N,getParent:z,getChild:P,getFirstAvailableNode(){return ci(m)},getPath(R,_={}){return di(R,_,L)},getCheckedKeys(R,_={}){const{cascade:W=!0,leafOnly:V=!1,checkStrategy:Z="all",allowNotLoaded:oe=!1}=_;return Et({checkedKeys:At(R),indeterminateKeys:$t(R),cascade:W,leafOnly:V,checkStrategy:Z,allowNotLoaded:oe},L)},check(R,_,W={}){const{cascade:V=!0,leafOnly:Z=!1,checkStrategy:oe="all",allowNotLoaded:J=!1}=W;return Et({checkedKeys:At(_),indeterminateKeys:$t(_),keysToCheck:R==null?[]:Sn(R),cascade:V,leafOnly:Z,checkStrategy:oe,allowNotLoaded:J},L)},uncheck(R,_,W={}){const{cascade:V=!0,leafOnly:Z=!1,checkStrategy:oe="all",allowNotLoaded:J=!1}=W;return Et({checkedKeys:At(_),indeterminateKeys:$t(_),keysToUncheck:R==null?[]:Sn(R),cascade:V,leafOnly:Z,checkStrategy:oe,allowNotLoaded:J},L)},getNonLeafKeys(R={}){return Gr(m,R)}};return L}const gi=M("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[T("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[q("+",[T("description",`
 margin-top: 8px;
 `)])]),T("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),T("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),bi=Object.assign(Object.assign({},Oe.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),yi=ie({name:"Empty",props:bi,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t,mergedComponentPropsRef:o}=We(e),r=Oe("Empty","-empty",gi,Lo,e,n),{localeRef:i}=Nn("Empty"),l=O(()=>{var u,f,m;return(u=e.description)!==null&&u!==void 0?u:(m=(f=o==null?void 0:o.value)===null||f===void 0?void 0:f.Empty)===null||m===void 0?void 0:m.description}),a=O(()=>{var u,f;return((f=(u=o==null?void 0:o.value)===null||u===void 0?void 0:u.Empty)===null||f===void 0?void 0:f.renderIcon)||(()=>d(Vr,null))}),s=O(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:f},self:{[de("iconSize",u)]:m,[de("fontSize",u)]:I,textColor:p,iconColor:y,extraTextColor:N}}=r.value;return{"--n-icon-size":m,"--n-font-size":I,"--n-bezier":f,"--n-text-color":p,"--n-icon-color":y,"--n-extra-text-color":N}}),c=t?Xe("empty",O(()=>{let u="";const{size:f}=e;return u+=f[0],u}),s,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:a,localizedDescription:O(()=>l.value||i.value.description),cssVars:t?void 0:s,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:t}=this;return t==null||t(),d("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?d("div",{class:`${n}-empty__icon`},e.icon?e.icon():d(Yt,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?d("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?d("div",{class:`${n}-empty__extra`},e.extra()):null)}}),Rn=ie({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:t,nodePropsRef:o}=ce(ln);return{labelField:t,nodeProps:o,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:t,nodeProps:o,tmNode:{rawNode:r}}=this,i=o==null?void 0:o(r),l=n?n(r,!1):ze(r[this.labelField],r,!1),a=d("div",Object.assign({},i,{class:[`${e}-base-select-group-header`,i==null?void 0:i.class]}),l);return r.render?r.render({node:a,option:r}):t?t({node:a,option:r,selected:!1}):a}});function wi(e,n){return d(nn,{name:"fade-in-scale-up-transition"},{default:()=>e?d(Yt,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>d(Dr)}):null})}const zn=ie({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:t,multipleRef:o,valueSetRef:r,renderLabelRef:i,renderOptionRef:l,labelFieldRef:a,valueFieldRef:s,showCheckmarkRef:c,nodePropsRef:u,handleOptionClick:f,handleOptionMouseEnter:m}=ce(ln),I=Pe(()=>{const{value:z}=t;return z?e.tmNode.key===z.key:!1});function p(z){const{tmNode:P}=e;P.disabled||f(z,P)}function y(z){const{tmNode:P}=e;P.disabled||m(z,P)}function N(z){const{tmNode:P}=e,{value:L}=I;P.disabled||L||m(z,P)}return{multiple:o,isGrouped:Pe(()=>{const{tmNode:z}=e,{parent:P}=z;return P&&P.rawNode.type==="group"}),showCheckmark:c,nodeProps:u,isPending:I,isSelected:Pe(()=>{const{value:z}=n,{value:P}=o;if(z===null)return!1;const L=e.tmNode.rawNode[s.value];if(P){const{value:R}=r;return R.has(L)}else return z===L}),labelField:a,renderLabel:i,renderOption:l,handleMouseMove:N,handleMouseEnter:y,handleClick:p}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:t,isPending:o,isGrouped:r,showCheckmark:i,nodeProps:l,renderOption:a,renderLabel:s,handleClick:c,handleMouseEnter:u,handleMouseMove:f}=this,m=wi(t,e),I=s?[s(n,t),i&&m]:[ze(n[this.labelField],n,t),i&&m],p=l==null?void 0:l(n),y=d("div",Object.assign({},p,{class:[`${e}-base-select-option`,n.class,p==null?void 0:p.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:r,[`${e}-base-select-option--pending`]:o,[`${e}-base-select-option--show-checkmark`]:i}],style:[(p==null?void 0:p.style)||"",n.style||""],onClick:Mt([c,p==null?void 0:p.onClick]),onMouseenter:Mt([u,p==null?void 0:p.onMouseenter]),onMousemove:Mt([f,p==null?void 0:p.onMousemove])}),d("div",{class:`${e}-base-select-option__content`},I));return n.render?n.render({node:y,option:n,selected:t}):a?a({node:y,option:n,selected:t}):y}}),xi=M("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[M("scrollbar",`
 max-height: var(--n-height);
 `),M("virtual-list",`
 max-height: var(--n-height);
 `),M("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[T("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),M("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),M("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),T("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),T("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),T("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),T("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),M("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),M("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[X("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),q("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),q("&:active",`
 color: var(--n-option-text-color-pressed);
 `),X("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),X("pending",[q("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),X("selected",`
 color: var(--n-option-text-color-active);
 `,[q("&::before",`
 background-color: var(--n-option-color-active);
 `),X("pending",[q("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),X("disabled",`
 cursor: not-allowed;
 `,[Re("selected",`
 color: var(--n-option-text-color-disabled);
 `),X("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),T("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Zt({enterScale:"0.5"})])])]),Ci=ie({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Oe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:t,mergedComponentPropsRef:o}=We(e),r=Rt("InternalSelectMenu",t,n),i=Oe("InternalSelectMenu","-internal-select-menu",xi,jo,e,ae(e,"clsPrefix")),l=A(null),a=A(null),s=A(null),c=O(()=>e.treeMate.getFlattenedNodes()),u=O(()=>ri(c.value)),f=A(null);function m(){const{treeMate:v}=e;let x=null;const{value:se}=e;se===null?x=v.getFirstAvailableNode():(e.multiple?x=v.getNode((se||[])[(se||[]).length-1]):x=v.getNode(se),(!x||x.disabled)&&(x=v.getFirstAvailableNode())),H(x||null)}function I(){const{value:v}=f;v&&!e.treeMate.getNode(v.key)&&(f.value=null)}let p;Ae(()=>e.show,v=>{v?p=Ae(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?m():I(),Qe(S)):I()},{immediate:!0}):p==null||p()},{immediate:!0}),tn(()=>{p==null||p()});const y=O(()=>Cr(i.value.self[de("optionHeight",e.size)])),N=O(()=>et(i.value.self[de("padding",e.size)])),z=O(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),P=O(()=>{const v=c.value;return v&&v.length===0}),L=O(()=>{var v,x;return(x=(v=o==null?void 0:o.value)===null||v===void 0?void 0:v.Select)===null||x===void 0?void 0:x.renderEmpty});function R(v){const{onToggle:x}=e;x&&x(v)}function _(v){const{onScroll:x}=e;x&&x(v)}function W(v){var x;(x=s.value)===null||x===void 0||x.sync(),_(v)}function V(){var v;(v=s.value)===null||v===void 0||v.sync()}function Z(){const{value:v}=f;return v||null}function oe(v,x){x.disabled||H(x,!1)}function J(v,x){x.disabled||R(x)}function le(v){var x;Ge(v,"action")||(x=e.onKeyup)===null||x===void 0||x.call(e,v)}function fe(v){var x;Ge(v,"action")||(x=e.onKeydown)===null||x===void 0||x.call(e,v)}function C(v){var x;(x=e.onMousedown)===null||x===void 0||x.call(e,v),!e.focusable&&v.preventDefault()}function w(){const{value:v}=f;v&&H(v.getNext({loop:!0}),!0)}function K(){const{value:v}=f;v&&H(v.getPrev({loop:!0}),!0)}function H(v,x=!1){f.value=v,x&&S()}function S(){var v,x;const se=f.value;if(!se)return;const xe=u.value(se.key);xe!==null&&(e.virtualScroll?(v=a.value)===null||v===void 0||v.scrollTo({index:xe}):(x=s.value)===null||x===void 0||x.scrollTo({index:xe,elSize:y.value}))}function j(v){var x,se;!((x=l.value)===null||x===void 0)&&x.contains(v.target)&&((se=e.onFocus)===null||se===void 0||se.call(e,v))}function G(v){var x,se;!((x=l.value)===null||x===void 0)&&x.contains(v.relatedTarget)||(se=e.onBlur)===null||se===void 0||se.call(e,v)}ve(ln,{handleOptionMouseEnter:oe,handleOptionClick:J,valueSetRef:z,pendingTmNodeRef:f,nodePropsRef:ae(e,"nodeProps"),showCheckmarkRef:ae(e,"showCheckmark"),multipleRef:ae(e,"multiple"),valueRef:ae(e,"value"),renderLabelRef:ae(e,"renderLabel"),renderOptionRef:ae(e,"renderOption"),labelFieldRef:ae(e,"labelField"),valueFieldRef:ae(e,"valueField")}),ve(kr,l),Ye(()=>{const{value:v}=s;v&&v.sync()});const ee=O(()=>{const{size:v}=e,{common:{cubicBezierEaseInOut:x},self:{height:se,borderRadius:xe,color:ke,groupHeaderTextColor:b,actionDividerColor:Ce,optionTextColorPressed:Te,optionTextColor:$,optionTextColorDisabled:U,optionTextColorActive:ue,optionOpacityDisabled:be,optionCheckColor:Ie,actionTextColor:Ne,optionColorPending:_e,optionColorActive:Ke,loadingColor:He,loadingSize:$e,optionColorActivePending:Be,[de("optionFontSize",v)]:ye,[de("optionHeight",v)]:k,[de("optionPadding",v)]:E}}=i.value;return{"--n-height":se,"--n-action-divider-color":Ce,"--n-action-text-color":Ne,"--n-bezier":x,"--n-border-radius":xe,"--n-color":ke,"--n-option-font-size":ye,"--n-group-header-text-color":b,"--n-option-check-color":Ie,"--n-option-color-pending":_e,"--n-option-color-active":Ke,"--n-option-color-active-pending":Be,"--n-option-height":k,"--n-option-opacity-disabled":be,"--n-option-text-color":$,"--n-option-text-color-active":ue,"--n-option-text-color-disabled":U,"--n-option-text-color-pressed":Te,"--n-option-padding":E,"--n-option-padding-left":et(E,"left"),"--n-option-padding-right":et(E,"right"),"--n-loading-color":He,"--n-loading-size":$e}}),{inlineThemeDisabled:F}=e,D=F?Xe("internal-select-menu",O(()=>e.size[0]),ee,e):void 0,g={selfRef:l,next:w,prev:K,getPendingTmNode:Z};return Zn(l,e.onResize),Object.assign({mergedTheme:i,mergedClsPrefix:n,rtlEnabled:r,virtualListRef:a,scrollbarRef:s,itemSize:y,padding:N,flattenedNodes:c,empty:P,mergedRenderEmpty:L,virtualListContainer(){const{value:v}=a;return v==null?void 0:v.listElRef},virtualListContent(){const{value:v}=a;return v==null?void 0:v.itemsElRef},doScroll:_,handleFocusin:j,handleFocusout:G,handleKeyUp:le,handleKeyDown:fe,handleMouseDown:C,handleVirtualListResize:V,handleVirtualListScroll:W,cssVars:F?void 0:ee,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender},g)},render(){const{$slots:e,virtualScroll:n,clsPrefix:t,mergedTheme:o,themeClass:r,onRender:i}=this;return i==null||i(),d("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,`${t}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${t}-base-select-menu--rtl`,r,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},yt(e.header,l=>l&&d("div",{class:`${t}-base-select-menu__header`,"data-header":!0,key:"header"},l)),this.loading?d("div",{class:`${t}-base-select-menu__loading`},d(Ko,{clsPrefix:t,strokeWidth:20})):this.empty?d("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},Do(e.empty,()=>{var l;return[((l=this.mergedRenderEmpty)===null||l===void 0?void 0:l.call(this))||d(yi,{theme:o.peers.Empty,themeOverrides:o.peerOverrides.Empty,size:this.size})]})):d(Ho,Object.assign({ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},this.scrollbarProps),{default:()=>n?d(Lr,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:l})=>l.isGroup?d(Rn,{key:l.key,clsPrefix:t,tmNode:l}):l.ignored?null:d(zn,{clsPrefix:t,key:l.key,tmNode:l})}):d("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(l=>l.isGroup?d(Rn,{key:l.key,clsPrefix:t,tmNode:l}):d(zn,{clsPrefix:t,key:l.key,tmNode:l})))}),yt(e.action,l=>l&&[d("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},l),d(Ur,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Si={color:Object,type:{type:String,default:"default"},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},ki=M("tag",`
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
`,[X("strong",`
 font-weight: var(--n-font-weight-strong);
 `),T("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),T("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),T("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),T("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),X("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[T("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),T("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),X("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),X("icon, avatar",[X("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),X("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),X("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[Re("disabled",[q("&:hover","background-color: var(--n-color-hover-checkable);",[Re("checked","color: var(--n-text-color-hover-checkable);")]),q("&:active","background-color: var(--n-color-pressed-checkable);",[Re("checked","color: var(--n-text-color-pressed-checkable);")])]),X("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[Re("disabled",[q("&:hover","background-color: var(--n-color-checked-hover);"),q("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Ri=Object.assign(Object.assign(Object.assign({},Oe.props),Si),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),zi=Ve("n-tag"),Bt=ie({name:"Tag",props:Ri,slots:Object,setup(e){const n=A(null),{mergedBorderedRef:t,mergedClsPrefixRef:o,inlineThemeDisabled:r,mergedRtlRef:i,mergedComponentPropsRef:l}=We(e),a=O(()=>{var y,N;return e.size||((N=(y=l==null?void 0:l.value)===null||y===void 0?void 0:y.Tag)===null||N===void 0?void 0:N.size)||"medium"}),s=Oe("Tag","-tag",ki,Wo,e,o);ve(zi,{roundRef:ae(e,"round")});function c(){if(!e.disabled&&e.checkable){const{checked:y,onCheckedChange:N,onUpdateChecked:z,"onUpdate:checked":P}=e;z&&z(!y),P&&P(!y),N&&N(!y)}}function u(y){if(e.triggerClickOnClose||y.stopPropagation(),!e.disabled){const{onClose:N}=e;N&&ge(N,y)}}const f={setTextContent(y){const{value:N}=n;N&&(N.textContent=y)}},m=Rt("Tag",i,o),I=O(()=>{const{type:y,color:{color:N,textColor:z}={}}=e,P=a.value,{common:{cubicBezierEaseInOut:L},self:{padding:R,closeMargin:_,borderRadius:W,opacityDisabled:V,textColorCheckable:Z,textColorHoverCheckable:oe,textColorPressedCheckable:J,textColorChecked:le,colorCheckable:fe,colorHoverCheckable:C,colorPressedCheckable:w,colorChecked:K,colorCheckedHover:H,colorCheckedPressed:S,closeBorderRadius:j,fontWeightStrong:G,[de("colorBordered",y)]:ee,[de("closeSize",P)]:F,[de("closeIconSize",P)]:D,[de("fontSize",P)]:g,[de("height",P)]:v,[de("color",y)]:x,[de("textColor",y)]:se,[de("border",y)]:xe,[de("closeIconColor",y)]:ke,[de("closeIconColorHover",y)]:b,[de("closeIconColorPressed",y)]:Ce,[de("closeColorHover",y)]:Te,[de("closeColorPressed",y)]:$}}=s.value,U=et(_);return{"--n-font-weight-strong":G,"--n-avatar-size-override":`calc(${v} - 8px)`,"--n-bezier":L,"--n-border-radius":W,"--n-border":xe,"--n-close-icon-size":D,"--n-close-color-pressed":$,"--n-close-color-hover":Te,"--n-close-border-radius":j,"--n-close-icon-color":ke,"--n-close-icon-color-hover":b,"--n-close-icon-color-pressed":Ce,"--n-close-icon-color-disabled":ke,"--n-close-margin-top":U.top,"--n-close-margin-right":U.right,"--n-close-margin-bottom":U.bottom,"--n-close-margin-left":U.left,"--n-close-size":F,"--n-color":N||(t.value?ee:x),"--n-color-checkable":fe,"--n-color-checked":K,"--n-color-checked-hover":H,"--n-color-checked-pressed":S,"--n-color-hover-checkable":C,"--n-color-pressed-checkable":w,"--n-font-size":g,"--n-height":v,"--n-opacity-disabled":V,"--n-padding":R,"--n-text-color":z||se,"--n-text-color-checkable":Z,"--n-text-color-checked":le,"--n-text-color-hover-checkable":oe,"--n-text-color-pressed-checkable":J}}),p=r?Xe("tag",O(()=>{let y="";const{type:N,color:{color:z,textColor:P}={}}=e;return y+=N[0],y+=a.value[0],z&&(y+=`a${pn(z)}`),P&&(y+=`b${pn(P)}`),t.value&&(y+="c"),y}),I,e):void 0;return Object.assign(Object.assign({},f),{rtlEnabled:m,mergedClsPrefix:o,contentRef:n,mergedBordered:t,handleClick:c,handleCloseClick:u,cssVars:r?void 0:I,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender})},render(){var e,n;const{mergedClsPrefix:t,rtlEnabled:o,closable:r,color:{borderColor:i}={},round:l,onRender:a,$slots:s}=this;a==null||a();const c=yt(s.avatar,f=>f&&d("div",{class:`${t}-tag__avatar`},f)),u=yt(s.icon,f=>f&&d("div",{class:`${t}-tag__icon`},f));return d("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:o,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:l,[`${t}-tag--avatar`]:c,[`${t}-tag--icon`]:u,[`${t}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},u||c,d("span",{class:`${t}-tag__content`,ref:"contentRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)),!this.checkable&&r?d(Or,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:l,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?d("div",{class:`${t}-tag__border`,style:{borderColor:i}}):null)}}),Ii=q([M("base-selection",`
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
 `,[M("base-loading",`
 color: var(--n-loading-color);
 `),M("base-selection-tags","min-height: var(--n-height);"),T("border, state-border",`
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
 `),T("state-border",`
 z-index: 1;
 border-color: #0000;
 `),M("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[T("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),M("base-selection-overlay",`
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
 `,[T("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),M("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[T("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),M("base-selection-tags",`
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
 `),M("base-selection-label",`
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
 `,[M("base-selection-input",`
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
 `,[T("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),T("render-label",`
 color: var(--n-text-color);
 `)]),Re("disabled",[q("&:hover",[T("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),X("focus",[T("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),X("active",[T("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),M("base-selection-label","background-color: var(--n-color-active);"),M("base-selection-tags","background-color: var(--n-color-active);")])]),X("disabled","cursor: not-allowed;",[T("arrow",`
 color: var(--n-arrow-color-disabled);
 `),M("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[M("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),T("render-label",`
 color: var(--n-text-color-disabled);
 `)]),M("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),M("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),M("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[T("input",`
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
 `),T("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>X(`${e}-status`,[T("state-border",`border: var(--n-border-${e});`),Re("disabled",[q("&:hover",[T("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),X("active",[T("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),M("base-selection-label",`background-color: var(--n-color-active-${e});`),M("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),X("focus",[T("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),M("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),M("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[q("&:last-child","padding-right: 0;"),M("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[T("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Pi=ie({name:"InternalSelection",props:Object.assign(Object.assign({},Oe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:t}=We(e),o=Rt("InternalSelection",t,n),r=A(null),i=A(null),l=A(null),a=A(null),s=A(null),c=A(null),u=A(null),f=A(null),m=A(null),I=A(null),p=A(!1),y=A(!1),N=A(!1),z=Oe("InternalSelection","-internal-selection",Ii,Uo,e,ae(e,"clsPrefix")),P=O(()=>e.clearable&&!e.disabled&&(N.value||e.active)),L=O(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):ze(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),R=O(()=>{const k=e.selectedOption;if(k)return k[e.labelField]}),_=O(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function W(){var k;const{value:E}=r;if(E){const{value:pe}=i;pe&&(pe.style.width=`${E.offsetWidth}px`,e.maxTagCount!=="responsive"&&((k=m.value)===null||k===void 0||k.sync({showAllItemsBeforeCalculate:!1})))}}function V(){const{value:k}=I;k&&(k.style.display="none")}function Z(){const{value:k}=I;k&&(k.style.display="inline-block")}Ae(ae(e,"active"),k=>{k||V()}),Ae(ae(e,"pattern"),()=>{e.multiple&&Qe(W)});function oe(k){const{onFocus:E}=e;E&&E(k)}function J(k){const{onBlur:E}=e;E&&E(k)}function le(k){const{onDeleteOption:E}=e;E&&E(k)}function fe(k){const{onClear:E}=e;E&&E(k)}function C(k){const{onPatternInput:E}=e;E&&E(k)}function w(k){var E;(!k.relatedTarget||!(!((E=l.value)===null||E===void 0)&&E.contains(k.relatedTarget)))&&oe(k)}function K(k){var E;!((E=l.value)===null||E===void 0)&&E.contains(k.relatedTarget)||J(k)}function H(k){fe(k)}function S(){N.value=!0}function j(){N.value=!1}function G(k){!e.active||!e.filterable||k.target!==i.value&&k.preventDefault()}function ee(k){le(k)}const F=A(!1);function D(k){if(k.key==="Backspace"&&!F.value&&!e.pattern.length){const{selectedOptions:E}=e;E!=null&&E.length&&ee(E[E.length-1])}}let g=null;function v(k){const{value:E}=r;if(E){const pe=k.target.value;E.textContent=pe,W()}e.ignoreComposition&&F.value?g=k:C(k)}function x(){F.value=!0}function se(){F.value=!1,e.ignoreComposition&&C(g),g=null}function xe(k){var E;y.value=!0,(E=e.onPatternFocus)===null||E===void 0||E.call(e,k)}function ke(k){var E;y.value=!1,(E=e.onPatternBlur)===null||E===void 0||E.call(e,k)}function b(){var k,E;if(e.filterable)y.value=!1,(k=c.value)===null||k===void 0||k.blur(),(E=i.value)===null||E===void 0||E.blur();else if(e.multiple){const{value:pe}=a;pe==null||pe.blur()}else{const{value:pe}=s;pe==null||pe.blur()}}function Ce(){var k,E,pe;e.filterable?(y.value=!1,(k=c.value)===null||k===void 0||k.focus()):e.multiple?(E=a.value)===null||E===void 0||E.focus():(pe=s.value)===null||pe===void 0||pe.focus()}function Te(){const{value:k}=i;k&&(Z(),k.focus())}function $(){const{value:k}=i;k&&k.blur()}function U(k){const{value:E}=u;E&&E.setTextContent(`+${k}`)}function ue(){const{value:k}=f;return k}function be(){return i.value}let Ie=null;function Ne(){Ie!==null&&window.clearTimeout(Ie)}function _e(){e.active||(Ne(),Ie=window.setTimeout(()=>{_.value&&(p.value=!0)},100))}function Ke(){Ne()}function He(k){k||(Ne(),p.value=!1)}Ae(_,k=>{k||(p.value=!1)}),Ye(()=>{Dt(()=>{const k=c.value;k&&(e.disabled?k.removeAttribute("tabindex"):k.tabIndex=y.value?-1:0)})}),Zn(l,e.onResize);const{inlineThemeDisabled:$e}=e,Be=O(()=>{const{size:k}=e,{common:{cubicBezierEaseInOut:E},self:{fontWeight:pe,borderRadius:It,color:Pt,placeholderColor:Ot,textColor:at,paddingSingle:st,paddingMultiple:dt,caretColor:Tt,colorDisabled:Nt,textColorDisabled:ct,placeholderColorDisabled:De,colorActive:h,boxShadowFocus:B,boxShadowActive:Y,boxShadowHover:ne,border:Q,borderFocus:te,borderHover:re,borderActive:we,arrowColor:Ee,arrowColorDisabled:ho,loadingColor:vo,colorActiveWarning:po,boxShadowFocusWarning:mo,boxShadowActiveWarning:go,boxShadowHoverWarning:bo,borderWarning:yo,borderFocusWarning:wo,borderHoverWarning:xo,borderActiveWarning:Co,colorActiveError:So,boxShadowFocusError:ko,boxShadowActiveError:Ro,boxShadowHoverError:zo,borderError:Io,borderFocusError:Po,borderHoverError:Oo,borderActiveError:To,clearColor:No,clearColorHover:_o,clearColorPressed:Fo,clearSize:Mo,arrowSize:Ao,[de("height",k)]:$o,[de("fontSize",k)]:Eo}}=z.value,ut=et(st),ft=et(dt);return{"--n-bezier":E,"--n-border":Q,"--n-border-active":we,"--n-border-focus":te,"--n-border-hover":re,"--n-border-radius":It,"--n-box-shadow-active":Y,"--n-box-shadow-focus":B,"--n-box-shadow-hover":ne,"--n-caret-color":Tt,"--n-color":Pt,"--n-color-active":h,"--n-color-disabled":Nt,"--n-font-size":Eo,"--n-height":$o,"--n-padding-single-top":ut.top,"--n-padding-multiple-top":ft.top,"--n-padding-single-right":ut.right,"--n-padding-multiple-right":ft.right,"--n-padding-single-left":ut.left,"--n-padding-multiple-left":ft.left,"--n-padding-single-bottom":ut.bottom,"--n-padding-multiple-bottom":ft.bottom,"--n-placeholder-color":Ot,"--n-placeholder-color-disabled":De,"--n-text-color":at,"--n-text-color-disabled":ct,"--n-arrow-color":Ee,"--n-arrow-color-disabled":ho,"--n-loading-color":vo,"--n-color-active-warning":po,"--n-box-shadow-focus-warning":mo,"--n-box-shadow-active-warning":go,"--n-box-shadow-hover-warning":bo,"--n-border-warning":yo,"--n-border-focus-warning":wo,"--n-border-hover-warning":xo,"--n-border-active-warning":Co,"--n-color-active-error":So,"--n-box-shadow-focus-error":ko,"--n-box-shadow-active-error":Ro,"--n-box-shadow-hover-error":zo,"--n-border-error":Io,"--n-border-focus-error":Po,"--n-border-hover-error":Oo,"--n-border-active-error":To,"--n-clear-size":Mo,"--n-clear-color":No,"--n-clear-color-hover":_o,"--n-clear-color-pressed":Fo,"--n-arrow-size":Ao,"--n-font-weight":pe}}),ye=$e?Xe("internal-selection",O(()=>e.size[0]),Be,e):void 0;return{mergedTheme:z,mergedClearable:P,mergedClsPrefix:n,rtlEnabled:o,patternInputFocused:y,filterablePlaceholder:L,label:R,selected:_,showTagsPanel:p,isComposing:F,counterRef:u,counterWrapperRef:f,patternInputMirrorRef:r,patternInputRef:i,selfRef:l,multipleElRef:a,singleElRef:s,patternInputWrapperRef:c,overflowRef:m,inputTagElRef:I,handleMouseDown:G,handleFocusin:w,handleClear:H,handleMouseEnter:S,handleMouseLeave:j,handleDeleteOption:ee,handlePatternKeyDown:D,handlePatternInputInput:v,handlePatternInputBlur:ke,handlePatternInputFocus:xe,handleMouseEnterCounter:_e,handleMouseLeaveCounter:Ke,handleFocusout:K,handleCompositionEnd:se,handleCompositionStart:x,onPopoverUpdateShow:He,focus:Ce,focusInput:Te,blur:b,blurInput:$,updateCounter:U,getCounter:ue,getTail:be,renderLabel:e.renderLabel,cssVars:$e?void 0:Be,themeClass:ye==null?void 0:ye.themeClass,onRender:ye==null?void 0:ye.onRender}},render(){const{status:e,multiple:n,size:t,disabled:o,filterable:r,maxTagCount:i,bordered:l,clsPrefix:a,ellipsisTagPopoverProps:s,onRender:c,renderTag:u,renderLabel:f}=this;c==null||c();const m=i==="responsive",I=typeof i=="number",p=m||I,y=d(Vo,null,{default:()=>d(Tr,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var z,P;return(P=(z=this.$slots).arrow)===null||P===void 0?void 0:P.call(z)}})});let N;if(n){const{labelField:z}=this,P=C=>d("div",{class:`${a}-base-selection-tag-wrapper`,key:C.value},u?u({option:C,handleClose:()=>{this.handleDeleteOption(C)}}):d(Bt,{size:t,closable:!C.disabled,disabled:o,onClose:()=>{this.handleDeleteOption(C)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>f?f(C,!0):ze(C[z],C,!0)})),L=()=>(I?this.selectedOptions.slice(0,i):this.selectedOptions).map(P),R=r?d("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:o,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),d("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,_=m?()=>d("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},d(Bt,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:o})):void 0;let W;if(I){const C=this.selectedOptions.length-i;C>0&&(W=d("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},d(Bt,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:o},{default:()=>`+${C}`})))}const V=m?r?d(Vt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:L,counter:_,tail:()=>R}):d(Vt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:L,counter:_}):I&&W?L().concat(W):L(),Z=p?()=>d("div",{class:`${a}-base-selection-popover`},m?L():this.selectedOptions.map(P)):void 0,oe=p?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},s):null,le=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},d("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,fe=r?d("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},V,m?null:R,y):d("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:o?void 0:0},V,y);N=d(on,null,p?d(an,Object.assign({},oe,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>fe,default:Z}):fe,le)}else if(r){const z=this.pattern||this.isComposing,P=this.active?!z:!this.selected,L=this.active?!1:this.selected;N=d("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`,title:this.patternInputFocused?void 0:Cn(this.label)},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:o,disabled:o,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),L?d("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},d("div",{class:`${a}-base-selection-overlay__wrapper`},u?u({option:this.selectedOption,handleClose:()=>{}}):f?f(this.selectedOption,!0):ze(this.label,this.selectedOption,!0))):null,P?d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,y)}else N=d("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?d("div",{class:`${a}-base-selection-input`,title:Cn(this.label),key:"input"},d("div",{class:`${a}-base-selection-input__content`},u?u({option:this.selectedOption,handleClose:()=>{}}):f?f(this.selectedOption,!0):ze(this.label,this.selectedOption,!0))):d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),y);return d("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},N,l?d("div",{class:`${a}-base-selection__border`}):null,l?d("div",{class:`${a}-base-selection__state-border`}):null)}});function St(e){return e.type==="group"}function eo(e){return e.type==="ignored"}function Lt(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Oi(e,n){return{getIsGroup:St,getIgnored:eo,getKey(o){return St(o)?o.name||o.key||"key-required":o[e]},getChildren(o){return o[n]}}}function Ti(e,n,t,o){if(!n)return e;function r(i){if(!Array.isArray(i))return[];const l=[];for(const a of i)if(St(a)){const s=r(a[o]);s.length&&l.push(Object.assign({},a,{[o]:s}))}else{if(eo(a))continue;n(t,a)&&l.push(a)}return l}return r(e)}function Ni(e,n,t){const o=new Map;return e.forEach(r=>{St(r)?r[t].forEach(i=>{o.set(i[n],i)}):o.set(r[n],r)}),o}const me="0!important",to="-1px!important";function Ze(e){return X(`${e}-type`,[q("& +",[M("button",{},[X(`${e}-type`,[T("border",{borderLeftWidth:me}),T("state-border",{left:to})])])])])}function Je(e){return X(`${e}-type`,[q("& +",[M("button",[X(`${e}-type`,[T("border",{borderTopWidth:me}),T("state-border",{top:to})])])])])}const _i=M("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[Re("vertical",{flexDirection:"row"},[Re("rtl",[M("button",[q("&:first-child:not(:last-child)",`
 margin-right: ${me};
 border-top-right-radius: ${me};
 border-bottom-right-radius: ${me};
 `),q("&:last-child:not(:first-child)",`
 margin-left: ${me};
 border-top-left-radius: ${me};
 border-bottom-left-radius: ${me};
 `),q("&:not(:first-child):not(:last-child)",`
 margin-left: ${me};
 margin-right: ${me};
 border-radius: ${me};
 `),Ze("default"),X("ghost",[Ze("primary"),Ze("info"),Ze("success"),Ze("warning"),Ze("error")])])])]),X("vertical",{flexDirection:"column"},[M("button",[q("&:first-child:not(:last-child)",`
 margin-bottom: ${me};
 margin-left: ${me};
 margin-right: ${me};
 border-bottom-left-radius: ${me};
 border-bottom-right-radius: ${me};
 `),q("&:last-child:not(:first-child)",`
 margin-top: ${me};
 margin-left: ${me};
 margin-right: ${me};
 border-top-left-radius: ${me};
 border-top-right-radius: ${me};
 `),q("&:not(:first-child):not(:last-child)",`
 margin: ${me};
 border-radius: ${me};
 `),Je("default"),X("ghost",[Je("primary"),Je("info"),Je("success"),Je("warning"),Je("error")])])])]),Fi={size:String,vertical:Boolean},Mi=ie({name:"ButtonGroup",props:Fi,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:t}=We(e);return Go("-button-group",_i,n),ve(qo,e),{rtlEnabled:Rt("ButtonGroup",t,n),mergedClsPrefix:n}},render(){const{mergedClsPrefix:e}=this;return d("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),Ai=q([M("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),M("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Zt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),$i=Object.assign(Object.assign({},Oe.props),{to:jt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array}),Ei=ie({name:"Select",props:$i,slots:Object,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:t,namespaceRef:o,inlineThemeDisabled:r,mergedComponentPropsRef:i}=We(e),l=Oe("Select","-select",Ai,Jo,e,n),a=A(e.defaultValue),s=ae(e,"value"),c=it(s,a),u=A(!1),f=A(""),m=Gn(e,["items","options"]),I=A([]),p=A([]),y=O(()=>p.value.concat(I.value).concat(m.value)),N=O(()=>{const{filter:h}=e;if(h)return h;const{labelField:B,valueField:Y}=e;return(ne,Q)=>{if(!Q)return!1;const te=Q[B];if(typeof te=="string")return Lt(ne,te);const re=Q[Y];return typeof re=="string"?Lt(ne,re):typeof re=="number"?Lt(ne,String(re)):!1}}),z=O(()=>{if(e.remote)return m.value;{const{value:h}=y,{value:B}=f;return!B.length||!e.filterable?h:Ti(h,N.value,B,e.childrenField)}}),P=O(()=>{const{valueField:h,childrenField:B}=e,Y=Oi(h,B);return rt(z.value,Y)}),L=O(()=>Ni(y.value,e.valueField,e.childrenField)),R=A(!1),_=it(ae(e,"show"),R),W=A(null),V=A(null),Z=A(null),{localeRef:oe}=Nn("Select"),J=O(()=>{var h;return(h=e.placeholder)!==null&&h!==void 0?h:oe.value.placeholder}),le=[],fe=A(new Map),C=O(()=>{const{fallbackOption:h}=e;if(h===void 0){const{labelField:B,valueField:Y}=e;return ne=>({[B]:String(ne),[Y]:ne})}return h===!1?!1:B=>Object.assign(h(B),{value:B})});function w(h){const B=e.remote,{value:Y}=fe,{value:ne}=L,{value:Q}=C,te=[];return h.forEach(re=>{if(ne.has(re))te.push(ne.get(re));else if(B&&Y.has(re))te.push(Y.get(re));else if(Q){const we=Q(re);we&&te.push(we)}}),te}const K=O(()=>{if(e.multiple){const{value:h}=c;return Array.isArray(h)?w(h):[]}return null}),H=O(()=>{const{value:h}=c;return!e.multiple&&!Array.isArray(h)?h===null?null:w([h])[0]||null:null}),S=Xo(e,{mergedSize:h=>{var B,Y;const{size:ne}=e;if(ne)return ne;const{mergedSize:Q}=h||{};if(Q!=null&&Q.value)return Q.value;const te=(Y=(B=i==null?void 0:i.value)===null||B===void 0?void 0:B.Select)===null||Y===void 0?void 0:Y.size;return te||"medium"}}),{mergedSizeRef:j,mergedDisabledRef:G,mergedStatusRef:ee}=S;function F(h,B){const{onChange:Y,"onUpdate:value":ne,onUpdateValue:Q}=e,{nTriggerFormChange:te,nTriggerFormInput:re}=S;Y&&ge(Y,h,B),Q&&ge(Q,h,B),ne&&ge(ne,h,B),a.value=h,te(),re()}function D(h){const{onBlur:B}=e,{nTriggerFormBlur:Y}=S;B&&ge(B,h),Y()}function g(){const{onClear:h}=e;h&&ge(h)}function v(h){const{onFocus:B,showOnFocus:Y}=e,{nTriggerFormFocus:ne}=S;B&&ge(B,h),ne(),Y&&b()}function x(h){const{onSearch:B}=e;B&&ge(B,h)}function se(h){const{onScroll:B}=e;B&&ge(B,h)}function xe(){var h;const{remote:B,multiple:Y}=e;if(B){const{value:ne}=fe;if(Y){const{valueField:Q}=e;(h=K.value)===null||h===void 0||h.forEach(te=>{ne.set(te[Q],te)})}else{const Q=H.value;Q&&ne.set(Q[e.valueField],Q)}}}function ke(h){const{onUpdateShow:B,"onUpdate:show":Y}=e;B&&ge(B,h),Y&&ge(Y,h),R.value=h}function b(){G.value||(ke(!0),R.value=!0,e.filterable&&dt())}function Ce(){ke(!1)}function Te(){f.value="",p.value=le}const $=A(!1);function U(){e.filterable&&($.value=!0)}function ue(){e.filterable&&($.value=!1,_.value||Te())}function be(){G.value||(_.value?e.filterable?dt():Ce():b())}function Ie(h){var B,Y;!((Y=(B=Z.value)===null||B===void 0?void 0:B.selfRef)===null||Y===void 0)&&Y.contains(h.relatedTarget)||(u.value=!1,D(h),Ce())}function Ne(h){v(h),u.value=!0}function _e(){u.value=!0}function Ke(h){var B;!((B=W.value)===null||B===void 0)&&B.$el.contains(h.relatedTarget)||(u.value=!1,D(h),Ce())}function He(){var h;(h=W.value)===null||h===void 0||h.focus(),Ce()}function $e(h){var B;_.value&&(!((B=W.value)===null||B===void 0)&&B.$el.contains(Zo(h))||Ce())}function Be(h){if(!Array.isArray(h))return[];if(C.value)return Array.from(h);{const{remote:B}=e,{value:Y}=L;if(B){const{value:ne}=fe;return h.filter(Q=>Y.has(Q)||ne.has(Q))}else return h.filter(ne=>Y.has(ne))}}function ye(h){k(h.rawNode)}function k(h){if(G.value)return;const{tag:B,remote:Y,clearFilterAfterSelect:ne,valueField:Q}=e;if(B&&!Y){const{value:te}=p,re=te[0]||null;if(re){const we=I.value;we.length?we.push(re):I.value=[re],p.value=le}}if(Y&&fe.value.set(h[Q],h),e.multiple){const te=Be(c.value),re=te.findIndex(we=>we===h[Q]);if(~re){if(te.splice(re,1),B&&!Y){const we=E(h[Q]);~we&&(I.value.splice(we,1),ne&&(f.value=""))}}else te.push(h[Q]),ne&&(f.value="");F(te,w(te))}else{if(B&&!Y){const te=E(h[Q]);~te?I.value=[I.value[te]]:I.value=le}st(),Ce(),F(h[Q],h)}}function E(h){return I.value.findIndex(Y=>Y[e.valueField]===h)}function pe(h){_.value||b();const{value:B}=h.target;f.value=B;const{tag:Y,remote:ne}=e;if(x(B),Y&&!ne){if(!B){p.value=le;return}const{onCreate:Q}=e,te=Q?Q(B):{[e.labelField]:B,[e.valueField]:B},{valueField:re,labelField:we}=e;m.value.some(Ee=>Ee[re]===te[re]||Ee[we]===te[we])||I.value.some(Ee=>Ee[re]===te[re]||Ee[we]===te[we])?p.value=le:p.value=[te]}}function It(h){h.stopPropagation();const{multiple:B,tag:Y,remote:ne,clearCreatedOptionsOnClear:Q}=e;!B&&e.filterable&&Ce(),Y&&!ne&&Q&&(I.value=le),g(),B?F([],[]):F(null,null)}function Pt(h){!Ge(h,"action")&&!Ge(h,"empty")&&!Ge(h,"header")&&h.preventDefault()}function Ot(h){se(h)}function at(h){var B,Y,ne,Q,te;if(!e.keyboard){h.preventDefault();return}switch(h.key){case" ":if(e.filterable)break;h.preventDefault();case"Enter":if(!(!((B=W.value)===null||B===void 0)&&B.isComposing)){if(_.value){const re=(Y=Z.value)===null||Y===void 0?void 0:Y.getPendingTmNode();re?ye(re):e.filterable||(Ce(),st())}else if(b(),e.tag&&$.value){const re=p.value[0];if(re){const we=re[e.valueField],{value:Ee}=c;e.multiple&&Array.isArray(Ee)&&Ee.includes(we)||k(re)}}}h.preventDefault();break;case"ArrowUp":if(h.preventDefault(),e.loading)return;_.value&&((ne=Z.value)===null||ne===void 0||ne.prev());break;case"ArrowDown":if(h.preventDefault(),e.loading)return;_.value?(Q=Z.value)===null||Q===void 0||Q.next():b();break;case"Escape":_.value&&(Nr(h),Ce()),(te=W.value)===null||te===void 0||te.focus();break}}function st(){var h;(h=W.value)===null||h===void 0||h.focus()}function dt(){var h;(h=W.value)===null||h===void 0||h.focusInput()}function Tt(){var h;_.value&&((h=V.value)===null||h===void 0||h.syncPosition())}xe(),Ae(ae(e,"options"),xe);const Nt={focus:()=>{var h;(h=W.value)===null||h===void 0||h.focus()},focusInput:()=>{var h;(h=W.value)===null||h===void 0||h.focusInput()},blur:()=>{var h;(h=W.value)===null||h===void 0||h.blur()},blurInput:()=>{var h;(h=W.value)===null||h===void 0||h.blurInput()}},ct=O(()=>{const{self:{menuBoxShadow:h}}=l.value;return{"--n-menu-box-shadow":h}}),De=r?Xe("select",void 0,ct,e):void 0;return Object.assign(Object.assign({},Nt),{mergedStatus:ee,mergedClsPrefix:n,mergedBordered:t,namespace:o,treeMate:P,isMounted:Yo(),triggerRef:W,menuRef:Z,pattern:f,uncontrolledShow:R,mergedShow:_,adjustedTo:jt(e),uncontrolledValue:a,mergedValue:c,followerRef:V,localizedPlaceholder:J,selectedOption:H,selectedOptions:K,mergedSize:j,mergedDisabled:G,focused:u,activeWithoutMenuOpen:$,inlineThemeDisabled:r,onTriggerInputFocus:U,onTriggerInputBlur:ue,handleTriggerOrMenuResize:Tt,handleMenuFocus:_e,handleMenuBlur:Ke,handleMenuTabOut:He,handleTriggerClick:be,handleToggle:ye,handleDeleteOption:k,handlePatternInput:pe,handleClear:It,handleTriggerBlur:Ie,handleTriggerFocus:Ne,handleKeydown:at,handleMenuAfterLeave:Te,handleMenuClickOutside:$e,handleMenuScroll:Ot,handleMenuKeydown:at,handleMenuMousedown:Pt,mergedTheme:l,cssVars:r?void 0:ct,themeClass:De==null?void 0:De.themeClass,onRender:De==null?void 0:De.onRender})},render(){return d("div",{class:`${this.mergedClsPrefix}-select`},d(Wn,null,{default:()=>[d(Vn,null,{default:()=>d(Pi,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),d(Un,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===jt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>d(nn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,t;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Ln(d(Ci,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(t=this.menuProps)===null||t===void 0?void 0:t.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{empty:()=>{var o,r;return[(r=(o=this.$slots).empty)===null||r===void 0?void 0:r.call(o)]},header:()=>{var o,r;return[(r=(o=this.$slots).header)===null||r===void 0?void 0:r.call(o)]},action:()=>{var o,r;return[(r=(o=this.$slots).action)===null||r===void 0?void 0:r.call(o)]}}),this.displayDirective==="show"?[[Kn,this.mergedShow],[mn,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[mn,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),cn=Ve("n-dropdown-menu"),zt=Ve("n-dropdown"),In=Ve("n-dropdown-option"),no=ie({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Bi=ie({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=ce(cn),{renderLabelRef:t,labelFieldRef:o,nodePropsRef:r,renderOptionRef:i}=ce(zt);return{labelField:o,showIcon:e,hasSubmenu:n,renderLabel:t,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:o,nodeProps:r,renderLabel:i,renderOption:l}=this,{rawNode:a}=this.tmNode,s=d("div",Object.assign({class:`${n}-dropdown-option`},r==null?void 0:r(a)),d("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,o&&`${n}-dropdown-option-body__prefix--show-icon`]},ze(a.icon)),d("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(a):ze((e=a.title)!==null&&e!==void 0?e:a[this.labelField])),d("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:s,option:a}):s}});function Gt(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function Li(e){return e.type==="group"}function oo(e){return e.type==="divider"}function Ki(e){return e.type==="render"}const ro=ie({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=ce(zt),{hoverKeyRef:t,keyboardKeyRef:o,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:l,animatedRef:a,mergedShowRef:s,renderLabelRef:c,renderIconRef:u,labelFieldRef:f,childrenFieldRef:m,renderOptionRef:I,nodePropsRef:p,menuPropsRef:y}=n,N=ce(In,null),z=ce(cn),P=ce(_n),L=O(()=>e.tmNode.rawNode),R=O(()=>{const{value:S}=m;return Gt(e.tmNode.rawNode,S)}),_=O(()=>{const{disabled:S}=e.tmNode;return S}),W=O(()=>{if(!R.value)return!1;const{key:S,disabled:j}=e.tmNode;if(j)return!1;const{value:G}=t,{value:ee}=o,{value:F}=r,{value:D}=i;return G!==null?D.includes(S):ee!==null?D.includes(S)&&D[D.length-1]!==S:F!==null?D.includes(S):!1}),V=O(()=>o.value===null&&!a.value),Z=Ar(W,300,V),oe=O(()=>!!(N!=null&&N.enteringSubmenuRef.value)),J=A(!1);ve(In,{enteringSubmenuRef:J});function le(){J.value=!0}function fe(){J.value=!1}function C(){const{parentKey:S,tmNode:j}=e;j.disabled||s.value&&(r.value=S,o.value=null,t.value=j.key)}function w(){const{tmNode:S}=e;S.disabled||s.value&&t.value!==S.key&&C()}function K(S){if(e.tmNode.disabled||!s.value)return;const{relatedTarget:j}=S;j&&!Ge({target:j},"dropdownOption")&&!Ge({target:j},"scrollbarRail")&&(t.value=null)}function H(){const{value:S}=R,{tmNode:j}=e;s.value&&!S&&!j.disabled&&(n.doSelect(j.key,j.rawNode),n.doUpdateShow(!1))}return{labelField:f,renderLabel:c,renderIcon:u,siblingHasIcon:z.showIconRef,siblingHasSubmenu:z.hasSubmenuRef,menuProps:y,popoverBody:P,animated:a,mergedShowSubmenu:O(()=>Z.value&&!oe.value),rawNode:L,hasSubmenu:R,pending:Pe(()=>{const{value:S}=i,{key:j}=e.tmNode;return S.includes(j)}),childActive:Pe(()=>{const{value:S}=l,{key:j}=e.tmNode,G=S.findIndex(ee=>j===ee);return G===-1?!1:G<S.length-1}),active:Pe(()=>{const{value:S}=l,{key:j}=e.tmNode,G=S.findIndex(ee=>j===ee);return G===-1?!1:G===S.length-1}),mergedDisabled:_,renderOption:I,nodeProps:p,handleClick:H,handleMouseMove:w,handleMouseEnter:C,handleMouseLeave:K,handleSubmenuBeforeEnter:le,handleSubmenuAfterEnter:fe}},render(){var e,n;const{animated:t,rawNode:o,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:l,siblingHasSubmenu:a,renderLabel:s,renderIcon:c,renderOption:u,nodeProps:f,props:m,scrollable:I}=this;let p=null;if(r){const P=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,o,o.children);p=d(io,Object.assign({},P,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const y={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},N=f==null?void 0:f(o),z=d("div",Object.assign({class:[`${i}-dropdown-option`,N==null?void 0:N.class],"data-dropdown-option":!0},N),d("div",kt(y,m),[d("div",{class:[`${i}-dropdown-option-body__prefix`,l&&`${i}-dropdown-option-body__prefix--show-icon`]},[c?c(o):ze(o.icon)]),d("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},s?s(o):ze((n=o[this.labelField])!==null&&n!==void 0?n:o.title)),d("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,a&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(Wt,null,{default:()=>d(Wr,null)}):null)]),this.hasSubmenu?d(Wn,null,{default:()=>[d(Vn,null,{default:()=>d("div",{class:`${i}-dropdown-offset-container`},d(Un,{show:this.mergedShowSubmenu,placement:this.placement,to:I&&this.popoverBody||void 0,teleportDisabled:!I},{default:()=>d("div",{class:`${i}-dropdown-menu-wrapper`},t?d(nn,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>p}):p)}))})]}):null);return u?u({node:z,option:o}):z}}),Hi=ie({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:o}=e;return d(on,null,d(Bi,{clsPrefix:t,tmNode:e,key:e.key}),o==null?void 0:o.map(r=>{const{rawNode:i}=r;return i.show===!1?null:oo(i)?d(no,{clsPrefix:t,key:r.key}):r.isGroup?(Qo("dropdown","`group` node is not allowed to be put in `group` node."),null):d(ro,{clsPrefix:t,tmNode:r,parentKey:n,key:r.key})}))}}),Di=ie({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return d("div",n,[e==null?void 0:e()])}}),io=ie({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=ce(zt);ve(cn,{showIconRef:O(()=>{const r=n.value;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:s})=>r?r(s):s.icon);const{rawNode:a}=i;return r?r(a):a.icon})}),hasSubmenuRef:O(()=>{const{value:r}=t;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:s})=>Gt(s,r));const{rawNode:a}=i;return Gt(a,r)})})});const o=A(null);return ve(er,null),ve(tr,null),ve(_n,o),{bodyRef:o}},render(){const{parentKey:e,clsPrefix:n,scrollable:t}=this,o=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Ki(i)?d(Di,{tmNode:r,key:r.key}):oo(i)?d(no,{clsPrefix:n,key:r.key}):Li(i)?d(Hi,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key}):d(ro,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:t})});return d("div",{class:[`${n}-dropdown-menu`,t&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},t?d(nr,{contentClass:`${n}-dropdown-menu__content`},{default:()=>o}):o,this.showArrow?Rr({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),ji=M("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Zt(),M("dropdown-option",`
 position: relative;
 `,[q("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[q("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),M("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[q("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),Re("disabled",[X("pending",`
 color: var(--n-option-text-color-hover);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),q("&::before","background-color: var(--n-option-color-hover);")]),X("active",`
 color: var(--n-option-text-color-active);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),q("&::before","background-color: var(--n-option-color-active);")]),X("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),X("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),X("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[T("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[X("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),T("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[X("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),M("icon",`
 font-size: var(--n-option-icon-size);
 `)]),T("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),T("suffix",`
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
 `,[X("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),M("icon",`
 font-size: var(--n-option-icon-size);
 `)]),M("dropdown-menu","pointer-events: all;")]),M("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),M("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),M("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),q(">",[M("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),Re("scrollable",`
 padding: var(--n-padding);
 `),X("scrollable",[T("content",`
 padding: var(--n-padding);
 `)])]),Wi={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Vi=Object.keys(qn),Ui=Object.assign(Object.assign(Object.assign({},qn),Wi),Oe.props),Gi=ie({name:"Dropdown",inheritAttrs:!1,props:Ui,setup(e){const n=A(!1),t=it(ae(e,"show"),n),o=O(()=>{const{keyField:w,childrenField:K}=e;return rt(e.options,{getKey(H){return H[w]},getDisabled(H){return H.disabled===!0},getIgnored(H){return H.type==="divider"||H.type==="render"},getChildren(H){return H[K]}})}),r=O(()=>o.value.treeNodes),i=A(null),l=A(null),a=A(null),s=O(()=>{var w,K,H;return(H=(K=(w=i.value)!==null&&w!==void 0?w:l.value)!==null&&K!==void 0?K:a.value)!==null&&H!==void 0?H:null}),c=O(()=>o.value.getPath(s.value).keyPath),u=O(()=>o.value.getPath(e.value).keyPath),f=Pe(()=>e.keyboard&&t.value);Mr({keydown:{ArrowUp:{prevent:!0,handler:V},ArrowRight:{prevent:!0,handler:W},ArrowDown:{prevent:!0,handler:Z},ArrowLeft:{prevent:!0,handler:_},Enter:{prevent:!0,handler:oe},Escape:R}},f);const{mergedClsPrefixRef:m,inlineThemeDisabled:I,mergedComponentPropsRef:p}=We(e),y=O(()=>{var w,K;return e.size||((K=(w=p==null?void 0:p.value)===null||w===void 0?void 0:w.Dropdown)===null||K===void 0?void 0:K.size)||"medium"}),N=Oe("Dropdown","-dropdown",ji,or,e,m);ve(zt,{labelFieldRef:ae(e,"labelField"),childrenFieldRef:ae(e,"childrenField"),renderLabelRef:ae(e,"renderLabel"),renderIconRef:ae(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:l,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:c,activeKeyPathRef:u,animatedRef:ae(e,"animated"),mergedShowRef:t,nodePropsRef:ae(e,"nodeProps"),renderOptionRef:ae(e,"renderOption"),menuPropsRef:ae(e,"menuProps"),doSelect:z,doUpdateShow:P}),Ae(t,w=>{!e.animated&&!w&&L()});function z(w,K){const{onSelect:H}=e;H&&ge(H,w,K)}function P(w){const{"onUpdate:show":K,onUpdateShow:H}=e;K&&ge(K,w),H&&ge(H,w),n.value=w}function L(){i.value=null,l.value=null,a.value=null}function R(){P(!1)}function _(){le("left")}function W(){le("right")}function V(){le("up")}function Z(){le("down")}function oe(){const w=J();w!=null&&w.isLeaf&&t.value&&(z(w.key,w.rawNode),P(!1))}function J(){var w;const{value:K}=o,{value:H}=s;return!K||H===null?null:(w=K.getNode(H))!==null&&w!==void 0?w:null}function le(w){const{value:K}=s,{value:{getFirstAvailableNode:H}}=o;let S=null;if(K===null){const j=H();j!==null&&(S=j.key)}else{const j=J();if(j){let G;switch(w){case"down":G=j.getNext();break;case"up":G=j.getPrev();break;case"right":G=j.getChild();break;case"left":G=j.getParent();break}G&&(S=G.key)}}S!==null&&(i.value=null,l.value=S)}const fe=O(()=>{const{inverted:w}=e,K=y.value,{common:{cubicBezierEaseInOut:H},self:S}=N.value,{padding:j,dividerColor:G,borderRadius:ee,optionOpacityDisabled:F,[de("optionIconSuffixWidth",K)]:D,[de("optionSuffixWidth",K)]:g,[de("optionIconPrefixWidth",K)]:v,[de("optionPrefixWidth",K)]:x,[de("fontSize",K)]:se,[de("optionHeight",K)]:xe,[de("optionIconSize",K)]:ke}=S,b={"--n-bezier":H,"--n-font-size":se,"--n-padding":j,"--n-border-radius":ee,"--n-option-height":xe,"--n-option-prefix-width":x,"--n-option-icon-prefix-width":v,"--n-option-suffix-width":g,"--n-option-icon-suffix-width":D,"--n-option-icon-size":ke,"--n-divider-color":G,"--n-option-opacity-disabled":F};return w?(b["--n-color"]=S.colorInverted,b["--n-option-color-hover"]=S.optionColorHoverInverted,b["--n-option-color-active"]=S.optionColorActiveInverted,b["--n-option-text-color"]=S.optionTextColorInverted,b["--n-option-text-color-hover"]=S.optionTextColorHoverInverted,b["--n-option-text-color-active"]=S.optionTextColorActiveInverted,b["--n-option-text-color-child-active"]=S.optionTextColorChildActiveInverted,b["--n-prefix-color"]=S.prefixColorInverted,b["--n-suffix-color"]=S.suffixColorInverted,b["--n-group-header-text-color"]=S.groupHeaderTextColorInverted):(b["--n-color"]=S.color,b["--n-option-color-hover"]=S.optionColorHover,b["--n-option-color-active"]=S.optionColorActive,b["--n-option-text-color"]=S.optionTextColor,b["--n-option-text-color-hover"]=S.optionTextColorHover,b["--n-option-text-color-active"]=S.optionTextColorActive,b["--n-option-text-color-child-active"]=S.optionTextColorChildActive,b["--n-prefix-color"]=S.prefixColor,b["--n-suffix-color"]=S.suffixColor,b["--n-group-header-text-color"]=S.groupHeaderTextColor),b}),C=I?Xe("dropdown",O(()=>`${y.value[0]}${e.inverted?"i":""}`),fe,e):void 0;return{mergedClsPrefix:m,mergedTheme:N,mergedSize:y,tmNodes:r,mergedShow:t,handleAfterLeave:()=>{e.animated&&L()},doUpdateShow:P,cssVars:I?void 0:fe,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender}},render(){const e=(o,r,i,l,a)=>{var s;const{mergedClsPrefix:c,menuProps:u}=this;(s=this.onRender)===null||s===void 0||s.call(this);const f=(u==null?void 0:u(void 0,this.tmNodes.map(I=>I.rawNode)))||{},m={ref:Hr(r),class:[o,`${c}-dropdown`,`${c}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:c,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:a};return d(io,kt(this.$attrs,m,f))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(an,Object.assign({},gt(this.$props,Vi),t),{trigger:()=>{var o,r;return(r=(o=this.$slots).default)===null||r===void 0?void 0:r.call(o)}})}}),qi=Ve("n-layout-sider"),lt=Ve("n-menu"),lo=Ve("n-submenu"),un=Ve("n-menu-item-group"),Pn=[q("&::before","background-color: var(--n-item-color-hover);"),T("arrow",`
 color: var(--n-arrow-color-hover);
 `),T("icon",`
 color: var(--n-item-icon-color-hover);
 `),M("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[q("a",`
 color: var(--n-item-text-color-hover);
 `),T("extra",`
 color: var(--n-item-text-color-hover);
 `)])],On=[T("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),M("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[q("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),T("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Xi=q([M("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[X("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[M("submenu","margin: 0;"),M("menu-item","margin: 0;"),M("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[q("&::before","display: none;"),X("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),M("menu-item-content",[X("selected",[T("icon","color: var(--n-item-icon-color-active-horizontal);"),M("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[q("a","color: var(--n-item-text-color-active-horizontal);"),T("extra","color: var(--n-item-text-color-active-horizontal);")])]),X("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[M("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[q("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),T("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),T("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),Re("disabled",[Re("selected, child-active",[q("&:focus-within",On)]),X("selected",[Ue(null,[T("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),M("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[q("a","color: var(--n-item-text-color-active-hover-horizontal);"),T("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),X("child-active",[Ue(null,[T("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),M("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[q("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),T("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),Ue("border-bottom: 2px solid var(--n-border-color-horizontal);",On)]),M("menu-item-content-header",[q("a","color: var(--n-item-text-color-horizontal);")])])]),Re("responsive",[M("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),X("collapsed",[M("menu-item-content",[X("selected",[q("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),M("menu-item-content-header","opacity: 0;"),T("arrow","opacity: 0;"),T("icon","color: var(--n-item-icon-color-collapsed);")])]),M("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),M("menu-item-content",`
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
 `,[q("> *","z-index: 1;"),q("&::before",`
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
 `),X("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),X("collapsed",[T("arrow","transform: rotate(0);")]),X("selected",[q("&::before","background-color: var(--n-item-color-active);"),T("arrow","color: var(--n-arrow-color-active);"),T("icon","color: var(--n-item-icon-color-active);"),M("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[q("a","color: var(--n-item-text-color-active);"),T("extra","color: var(--n-item-text-color-active);")])]),X("child-active",[M("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[q("a",`
 color: var(--n-item-text-color-child-active);
 `),T("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),T("arrow",`
 color: var(--n-arrow-color-child-active);
 `),T("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),Re("disabled",[Re("selected, child-active",[q("&:focus-within",Pn)]),X("selected",[Ue(null,[T("arrow","color: var(--n-arrow-color-active-hover);"),T("icon","color: var(--n-item-icon-color-active-hover);"),M("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[q("a","color: var(--n-item-text-color-active-hover);"),T("extra","color: var(--n-item-text-color-active-hover);")])])]),X("child-active",[Ue(null,[T("arrow","color: var(--n-arrow-color-child-active-hover);"),T("icon","color: var(--n-item-icon-color-child-active-hover);"),M("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[q("a","color: var(--n-item-text-color-child-active-hover);"),T("extra","color: var(--n-item-text-color-child-active-hover);")])])]),X("selected",[Ue(null,[q("&::before","background-color: var(--n-item-color-active-hover);")])]),Ue(null,Pn)]),T("icon",`
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
 `),T("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),M("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[q("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[q("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),T("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),M("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[M("menu-item-content",`
 height: var(--n-item-height);
 `),M("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[zr({duration:".2s"})])]),M("menu-item-group",[M("menu-item-group-title",`
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
 `)])]),M("menu-tooltip",[q("a",`
 color: inherit;
 text-decoration: none;
 `)]),M("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function Ue(e,n){return[X("hover",e,n),q("&:hover",e,n)]}const ao=ie({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:n}=ce(lt);return{menuProps:n,style:O(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:O(()=>{const{maxIconSize:t,activeIconSize:o,iconMarginRight:r}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${o}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:n,menuProps:{renderIcon:t,renderLabel:o,renderExtra:r,expandIcon:i}}=this,l=t?t(n.rawNode):ze(this.icon);return d("div",{onClick:a=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,a)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},l&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[l]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:o?o(n.rawNode):ze(this.title),this.extra||r?d("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(n.rawNode):ze(this.extra)):null),this.showArrow?d(Yt,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(n.rawNode):d(jr,null)}):null)}}),mt=8;function fn(e){const n=ce(lt),{props:t,mergedCollapsedRef:o}=n,r=ce(lo,null),i=ce(un,null),l=O(()=>t.mode==="horizontal"),a=O(()=>l.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=O(()=>{var m;return Math.max((m=t.collapsedIconSize)!==null&&m!==void 0?m:t.iconSize,t.iconSize)}),c=O(()=>{var m;return!l.value&&e.root&&o.value&&(m=t.collapsedIconSize)!==null&&m!==void 0?m:t.iconSize}),u=O(()=>{if(l.value)return;const{collapsedWidth:m,indent:I,rootIndent:p}=t,{root:y,isGroup:N}=e,z=p===void 0?I:p;return y?o.value?m/2-s.value/2:z:i&&typeof i.paddingLeftRef.value=="number"?I/2+i.paddingLeftRef.value:r&&typeof r.paddingLeftRef.value=="number"?(N?I/2:I)+r.paddingLeftRef.value:0}),f=O(()=>{const{collapsedWidth:m,indent:I,rootIndent:p}=t,{value:y}=s,{root:N}=e;return l.value||!N||!o.value?mt:(p===void 0?I:p)+y+mt-(m+y)/2});return{dropdownPlacement:a,activeIconSize:c,maxIconSize:s,paddingLeft:u,iconMarginRight:f,NMenu:n,NSubmenu:r,NMenuOptionGroup:i}}const hn={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Yi=ie({name:"MenuDivider",setup(){const e=ce(lt),{mergedClsPrefixRef:n,isHorizontalRef:t}=e;return()=>t.value?null:d("div",{class:`${n.value}-menu-divider`})}}),so=Object.assign(Object.assign({},hn),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Zi=sn(so),Ji=ie({name:"MenuOption",props:so,setup(e){const n=fn(e),{NSubmenu:t,NMenu:o,NMenuOptionGroup:r}=n,{props:i,mergedClsPrefixRef:l,mergedCollapsedRef:a}=o,s=t?t.mergedDisabledRef:r?r.mergedDisabledRef:{value:!1},c=O(()=>s.value||e.disabled);function u(m){const{onClick:I}=e;I&&I(m)}function f(m){c.value||(o.doSelect(e.internalKey,e.tmNode.rawNode),u(m))}return{mergedClsPrefix:l,dropdownPlacement:n.dropdownPlacement,paddingLeft:n.paddingLeft,iconMarginRight:n.iconMarginRight,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,mergedTheme:o.mergedThemeRef,menuProps:i,dropdownEnabled:Pe(()=>e.root&&a.value&&i.mode!=="horizontal"&&!c.value),selected:Pe(()=>o.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:f}},render(){const{mergedClsPrefix:e,mergedTheme:n,tmNode:t,menuProps:{renderLabel:o,nodeProps:r}}=this,i=r==null?void 0:r(t.rawNode);return d("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),d(Ir,{theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>o?o(t.rawNode):ze(this.title),trigger:()=>d(ao,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),co=Object.assign(Object.assign({},hn),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Qi=sn(co),el=ie({name:"MenuOptionGroup",props:co,setup(e){const n=fn(e),{NSubmenu:t}=n,o=O(()=>t!=null&&t.mergedDisabledRef.value?!0:e.tmNode.disabled);ve(un,{paddingLeftRef:n.paddingLeft,mergedDisabledRef:o});const{mergedClsPrefixRef:r,props:i}=ce(lt);return function(){const{value:l}=r,a=n.paddingLeft.value,{nodeProps:s}=i,c=s==null?void 0:s(e.tmNode.rawNode);return d("div",{class:`${l}-menu-item-group`,role:"group"},d("div",Object.assign({},c,{class:[`${l}-menu-item-group-title`,c==null?void 0:c.class],style:[(c==null?void 0:c.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),ze(e.title),e.extra?d(on,null," ",ze(e.extra)):null),d("div",null,e.tmNodes.map(u=>vn(u,i))))}}});function qt(e){return e.type==="divider"||e.type==="render"}function tl(e){return e.type==="divider"}function vn(e,n){const{rawNode:t}=e,{show:o}=t;if(o===!1)return null;if(qt(t))return tl(t)?d(Yi,Object.assign({key:e.key},t.props)):null;const{labelField:r}=n,{key:i,level:l,isGroup:a}=e,s=Object.assign(Object.assign({},t),{title:t.title||t[r],extra:t.titleExtra||t.extra,key:i,internalKey:i,level:l,root:l===0,isGroup:a});return e.children?e.isGroup?d(el,gt(s,Qi,{tmNode:e,tmNodes:e.children,key:i})):d(Xt,gt(s,nl,{key:i,rawNodes:t[n.childrenField],tmNodes:e.children,tmNode:e})):d(Ji,gt(s,Zi,{key:i,tmNode:e}))}const uo=Object.assign(Object.assign({},hn),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),nl=sn(uo),Xt=ie({name:"Submenu",props:uo,setup(e){const n=fn(e),{NMenu:t,NSubmenu:o}=n,{props:r,mergedCollapsedRef:i,mergedThemeRef:l}=t,a=O(()=>{const{disabled:m}=e;return o!=null&&o.mergedDisabledRef.value||r.disabled?!0:m}),s=A(!1);ve(lo,{paddingLeftRef:n.paddingLeft,mergedDisabledRef:a}),ve(un,null);function c(){const{onClick:m}=e;m&&m()}function u(){a.value||(i.value||t.toggleExpand(e.internalKey),c())}function f(m){s.value=m}return{menuProps:r,mergedTheme:l,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,iconMarginRight:n.iconMarginRight,dropdownPlacement:n.dropdownPlacement,dropdownShow:s,paddingLeft:n.paddingLeft,mergedDisabled:a,mergedValue:t.mergedValueRef,childActive:Pe(()=>{var m;return(m=e.virtualChildActive)!==null&&m!==void 0?m:t.activePathRef.value.includes(e.internalKey)}),collapsed:O(()=>r.mode==="horizontal"?!1:i.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:O(()=>!a.value&&(r.mode==="horizontal"||i.value)),handlePopoverShowChange:f,handleClick:u}},render(){var e;const{mergedClsPrefix:n,menuProps:{renderIcon:t,renderLabel:o}}=this,r=()=>{const{isHorizontal:l,paddingLeft:a,collapsed:s,mergedDisabled:c,maxIconSize:u,activeIconSize:f,title:m,childActive:I,icon:p,handleClick:y,menuProps:{nodeProps:N},dropdownShow:z,iconMarginRight:P,tmNode:L,mergedClsPrefix:R,isEllipsisPlaceholder:_,extra:W}=this,V=N==null?void 0:N(L.rawNode);return d("div",Object.assign({},V,{class:[`${R}-menu-item`,V==null?void 0:V.class],role:"menuitem"}),d(ao,{tmNode:L,paddingLeft:a,collapsed:s,disabled:c,iconMarginRight:P,maxIconSize:u,activeIconSize:f,title:m,extra:W,showArrow:!l,childActive:I,clsPrefix:R,icon:p,hover:z,onClick:y,isEllipsisPlaceholder:_}))},i=()=>d(rr,null,{default:()=>{const{tmNodes:l,collapsed:a}=this;return a?null:d("div",{class:`${n}-submenu-children`,role:"menu"},l.map(s=>vn(s,this.menuProps)))}});return this.root?d(Gi,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:o}),{default:()=>d("div",{class:`${n}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},r(),this.isHorizontal?null:i())}):d("div",{class:`${n}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},r(),i())}}),ol=Object.assign(Object.assign({},Oe.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),rl=ie({name:"Menu",inheritAttrs:!1,props:ol,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=We(e),o=Oe("Menu","-menu",Xi,ir,e,n),r=ce(qi,null),i=O(()=>{var F;const{collapsed:D}=e;if(D!==void 0)return D;if(r){const{collapseModeRef:g,collapsedRef:v}=r;if(g.value==="width")return(F=v.value)!==null&&F!==void 0?F:!1}return!1}),l=O(()=>{const{keyField:F,childrenField:D,disabledField:g}=e;return rt(e.items||e.options,{getIgnored(v){return qt(v)},getChildren(v){return v[D]},getDisabled(v){return v[g]},getKey(v){var x;return(x=v[F])!==null&&x!==void 0?x:v.name}})}),a=O(()=>new Set(l.value.treeNodes.map(F=>F.key))),{watchProps:s}=e,c=A(null);s!=null&&s.includes("defaultValue")?Dt(()=>{c.value=e.defaultValue}):c.value=e.defaultValue;const u=ae(e,"value"),f=it(u,c),m=A([]),I=()=>{m.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(f.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?Dt(I):I();const p=Gn(e,["expandedNames","expandedKeys"]),y=it(p,m),N=O(()=>l.value.treeNodes),z=O(()=>l.value.getPath(f.value).keyPath);ve(lt,{props:e,mergedCollapsedRef:i,mergedThemeRef:o,mergedValueRef:f,mergedExpandedKeysRef:y,activePathRef:z,mergedClsPrefixRef:n,isHorizontalRef:O(()=>e.mode==="horizontal"),invertedRef:ae(e,"inverted"),doSelect:P,toggleExpand:R});function P(F,D){const{"onUpdate:value":g,onUpdateValue:v,onSelect:x}=e;v&&ge(v,F,D),g&&ge(g,F,D),x&&ge(x,F,D),c.value=F}function L(F){const{"onUpdate:expandedKeys":D,onUpdateExpandedKeys:g,onExpandedNamesChange:v,onOpenNamesChange:x}=e;D&&ge(D,F),g&&ge(g,F),v&&ge(v,F),x&&ge(x,F),m.value=F}function R(F){const D=Array.from(y.value),g=D.findIndex(v=>v===F);if(~g)D.splice(g,1);else{if(e.accordion&&a.value.has(F)){const v=D.findIndex(x=>a.value.has(x));v>-1&&D.splice(v,1)}D.push(F)}L(D)}const _=F=>{const D=l.value.getPath(F??f.value,{includeSelf:!1}).keyPath;if(!D.length)return;const g=Array.from(y.value),v=new Set([...g,...D]);e.accordion&&a.value.forEach(x=>{v.has(x)&&!D.includes(x)&&v.delete(x)}),L(Array.from(v))},W=O(()=>{const{inverted:F}=e,{common:{cubicBezierEaseInOut:D},self:g}=o.value,{borderRadius:v,borderColorHorizontal:x,fontSize:se,itemHeight:xe,dividerColor:ke}=g,b={"--n-divider-color":ke,"--n-bezier":D,"--n-font-size":se,"--n-border-color-horizontal":x,"--n-border-radius":v,"--n-item-height":xe};return F?(b["--n-group-text-color"]=g.groupTextColorInverted,b["--n-color"]=g.colorInverted,b["--n-item-text-color"]=g.itemTextColorInverted,b["--n-item-text-color-hover"]=g.itemTextColorHoverInverted,b["--n-item-text-color-active"]=g.itemTextColorActiveInverted,b["--n-item-text-color-child-active"]=g.itemTextColorChildActiveInverted,b["--n-item-text-color-child-active-hover"]=g.itemTextColorChildActiveInverted,b["--n-item-text-color-active-hover"]=g.itemTextColorActiveHoverInverted,b["--n-item-icon-color"]=g.itemIconColorInverted,b["--n-item-icon-color-hover"]=g.itemIconColorHoverInverted,b["--n-item-icon-color-active"]=g.itemIconColorActiveInverted,b["--n-item-icon-color-active-hover"]=g.itemIconColorActiveHoverInverted,b["--n-item-icon-color-child-active"]=g.itemIconColorChildActiveInverted,b["--n-item-icon-color-child-active-hover"]=g.itemIconColorChildActiveHoverInverted,b["--n-item-icon-color-collapsed"]=g.itemIconColorCollapsedInverted,b["--n-item-text-color-horizontal"]=g.itemTextColorHorizontalInverted,b["--n-item-text-color-hover-horizontal"]=g.itemTextColorHoverHorizontalInverted,b["--n-item-text-color-active-horizontal"]=g.itemTextColorActiveHorizontalInverted,b["--n-item-text-color-child-active-horizontal"]=g.itemTextColorChildActiveHorizontalInverted,b["--n-item-text-color-child-active-hover-horizontal"]=g.itemTextColorChildActiveHoverHorizontalInverted,b["--n-item-text-color-active-hover-horizontal"]=g.itemTextColorActiveHoverHorizontalInverted,b["--n-item-icon-color-horizontal"]=g.itemIconColorHorizontalInverted,b["--n-item-icon-color-hover-horizontal"]=g.itemIconColorHoverHorizontalInverted,b["--n-item-icon-color-active-horizontal"]=g.itemIconColorActiveHorizontalInverted,b["--n-item-icon-color-active-hover-horizontal"]=g.itemIconColorActiveHoverHorizontalInverted,b["--n-item-icon-color-child-active-horizontal"]=g.itemIconColorChildActiveHorizontalInverted,b["--n-item-icon-color-child-active-hover-horizontal"]=g.itemIconColorChildActiveHoverHorizontalInverted,b["--n-arrow-color"]=g.arrowColorInverted,b["--n-arrow-color-hover"]=g.arrowColorHoverInverted,b["--n-arrow-color-active"]=g.arrowColorActiveInverted,b["--n-arrow-color-active-hover"]=g.arrowColorActiveHoverInverted,b["--n-arrow-color-child-active"]=g.arrowColorChildActiveInverted,b["--n-arrow-color-child-active-hover"]=g.arrowColorChildActiveHoverInverted,b["--n-item-color-hover"]=g.itemColorHoverInverted,b["--n-item-color-active"]=g.itemColorActiveInverted,b["--n-item-color-active-hover"]=g.itemColorActiveHoverInverted,b["--n-item-color-active-collapsed"]=g.itemColorActiveCollapsedInverted):(b["--n-group-text-color"]=g.groupTextColor,b["--n-color"]=g.color,b["--n-item-text-color"]=g.itemTextColor,b["--n-item-text-color-hover"]=g.itemTextColorHover,b["--n-item-text-color-active"]=g.itemTextColorActive,b["--n-item-text-color-child-active"]=g.itemTextColorChildActive,b["--n-item-text-color-child-active-hover"]=g.itemTextColorChildActiveHover,b["--n-item-text-color-active-hover"]=g.itemTextColorActiveHover,b["--n-item-icon-color"]=g.itemIconColor,b["--n-item-icon-color-hover"]=g.itemIconColorHover,b["--n-item-icon-color-active"]=g.itemIconColorActive,b["--n-item-icon-color-active-hover"]=g.itemIconColorActiveHover,b["--n-item-icon-color-child-active"]=g.itemIconColorChildActive,b["--n-item-icon-color-child-active-hover"]=g.itemIconColorChildActiveHover,b["--n-item-icon-color-collapsed"]=g.itemIconColorCollapsed,b["--n-item-text-color-horizontal"]=g.itemTextColorHorizontal,b["--n-item-text-color-hover-horizontal"]=g.itemTextColorHoverHorizontal,b["--n-item-text-color-active-horizontal"]=g.itemTextColorActiveHorizontal,b["--n-item-text-color-child-active-horizontal"]=g.itemTextColorChildActiveHorizontal,b["--n-item-text-color-child-active-hover-horizontal"]=g.itemTextColorChildActiveHoverHorizontal,b["--n-item-text-color-active-hover-horizontal"]=g.itemTextColorActiveHoverHorizontal,b["--n-item-icon-color-horizontal"]=g.itemIconColorHorizontal,b["--n-item-icon-color-hover-horizontal"]=g.itemIconColorHoverHorizontal,b["--n-item-icon-color-active-horizontal"]=g.itemIconColorActiveHorizontal,b["--n-item-icon-color-active-hover-horizontal"]=g.itemIconColorActiveHoverHorizontal,b["--n-item-icon-color-child-active-horizontal"]=g.itemIconColorChildActiveHorizontal,b["--n-item-icon-color-child-active-hover-horizontal"]=g.itemIconColorChildActiveHoverHorizontal,b["--n-arrow-color"]=g.arrowColor,b["--n-arrow-color-hover"]=g.arrowColorHover,b["--n-arrow-color-active"]=g.arrowColorActive,b["--n-arrow-color-active-hover"]=g.arrowColorActiveHover,b["--n-arrow-color-child-active"]=g.arrowColorChildActive,b["--n-arrow-color-child-active-hover"]=g.arrowColorChildActiveHover,b["--n-item-color-hover"]=g.itemColorHover,b["--n-item-color-active"]=g.itemColorActive,b["--n-item-color-active-hover"]=g.itemColorActiveHover,b["--n-item-color-active-collapsed"]=g.itemColorActiveCollapsed),b}),V=t?Xe("menu",O(()=>e.inverted?"a":"b"),W,e):void 0,Z=Pr(),oe=A(null),J=A(null);let le=!0;const fe=()=>{var F;le?le=!1:(F=oe.value)===null||F===void 0||F.sync({showAllItemsBeforeCalculate:!0})};function C(){return document.getElementById(Z)}const w=A(-1);function K(F){w.value=e.options.length-F}function H(F){F||(w.value=-1)}const S=O(()=>{const F=w.value;return{children:F===-1?[]:e.options.slice(F)}}),j=O(()=>{const{childrenField:F,disabledField:D,keyField:g}=e;return rt([S.value],{getIgnored(v){return qt(v)},getChildren(v){return v[F]},getDisabled(v){return v[D]},getKey(v){var x;return(x=v[g])!==null&&x!==void 0?x:v.name}})}),G=O(()=>rt([{}]).treeNodes[0]);function ee(){var F;if(w.value===-1)return d(Xt,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:G.value,domId:Z,isEllipsisPlaceholder:!0});const D=j.value.treeNodes[0],g=z.value,v=!!(!((F=D.children)===null||F===void 0)&&F.some(x=>g.includes(x.key)));return d(Xt,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:v,tmNode:D,domId:Z,rawNodes:D.rawNode.children||[],tmNodes:D.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:n,controlledExpandedKeys:p,uncontrolledExpanededKeys:m,mergedExpandedKeys:y,uncontrolledValue:c,mergedValue:f,activePath:z,tmNodes:N,mergedTheme:o,mergedCollapsed:i,cssVars:t?void 0:W,themeClass:V==null?void 0:V.themeClass,overflowRef:oe,counterRef:J,updateCounter:()=>{},onResize:fe,onUpdateOverflow:H,onUpdateCount:K,renderCounter:ee,getCounter:C,onRender:V==null?void 0:V.onRender,showOption:_,deriveResponsiveState:fe}},render(){const{mergedClsPrefix:e,mode:n,themeClass:t,onRender:o}=this;o==null||o();const r=()=>this.tmNodes.map(s=>vn(s,this.$props)),l=n==="horizontal"&&this.responsive,a=()=>d("div",kt(this.$attrs,{role:n==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${n}`,l&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),l?d(Vt,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:r,counter:this.renderCounter}):r());return l?d(Ht,{onResize:this.onResize},{default:a}):a()}}),il={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 192 512"},ll=je("path",{d:"M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z",fill:"currentColor"},null,-1),al=[ll],sl=ie({name:"CaretLeft",render:function(n,t){return qe(),rn("svg",il,al)}}),dl={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 192 512"},cl=je("path",{d:"M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z",fill:"currentColor"},null,-1),ul=[cl],fl=ie({name:"CaretRight",render:function(n,t){return qe(),rn("svg",dl,ul)}}),hl=ie({__name:"Menu",props:{disableSwitch:{type:Boolean}},setup(e){const n=e,t=ce(Fn),o=ce(Jt),r=[{label:"声笔简码",value:"sbjm"},{label:"声笔拼音",value:"sbpy"},{label:"声笔飞码",value:"sbfm"},{label:"声笔飞单",value:"sbfd"},{label:"声笔飞讯",value:"sbfx"},{label:"声笔小鹤",value:"sbxh"},{label:"声笔自然",value:"sbzr"}],i=ce(Qt),l=ce(Mn),a=ce(en),s=ce(An);function c(){nt().focus()}function u(f){c(),o(f)}return(f,m)=>(qe(),xt(he(Dn),null,{default:Fe(()=>[Se(he(Ei),{style:{width:"160px"},value:he(t),options:r,loading:he(i),"onUpdate:value":u,disabled:n.disableSwitch},null,8,["value","loading","disabled"]),Se(he(Mi),{class:"square-group",onClick:c},{default:Fe(()=>[Se(he(wt),{secondary:"",onClick:he(a)},{default:Fe(()=>[Me(ot(he(l)?"En":"中"),1)]),_:1},8,["onClick"]),Se(he(wt),{secondary:"",disabled:he(l),onClick:m[0]||(m[0]=()=>{})},{default:Fe(()=>[Me(ot(he(s)?".":"。"),1)]),_:1},8,["disabled"])]),_:1})]),_:1}))}});var fo={exports:{}};(function(e){(function(){var n=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],t=typeof window<"u",o=t&&window.mozInnerScreenX!=null;function r(i,l,a){if(!t)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var s=a&&a.debug||!1;if(s){var c=document.querySelector("#input-textarea-caret-position-mirror-div");c&&c.parentNode.removeChild(c)}var u=document.createElement("div");u.id="input-textarea-caret-position-mirror-div",document.body.appendChild(u);var f=u.style,m=window.getComputedStyle?window.getComputedStyle(i):i.currentStyle,I=i.nodeName==="INPUT";f.whiteSpace="pre-wrap",I||(f.wordWrap="break-word"),f.position="absolute",s||(f.visibility="hidden"),n.forEach(function(N){I&&N==="lineHeight"?f.lineHeight=m.height:f[N]=m[N]}),o?i.scrollHeight>parseInt(m.height)&&(f.overflowY="scroll"):f.overflow="hidden",u.textContent=i.value.substring(0,l),I&&(u.textContent=u.textContent.replace(/\s/g," "));var p=document.createElement("span");p.textContent=i.value.substring(l)||".",u.appendChild(p);var y={top:p.offsetTop+parseInt(m.borderTopWidth),left:p.offsetLeft+parseInt(m.borderLeftWidth),height:parseInt(m.lineHeight)};return s?p.style.backgroundColor="#aaa":document.body.removeChild(u),y}e.exports=r})()})(fo);var vl=fo.exports;const pl=Fr(vl),ml=ie({__name:"Panel",props:{debugMode:{type:Boolean}},setup(e,{expose:n}){const t=ce($n),o=ce(En),r=ce(Qt),i=ce(Bn),l=ce(Jt),a=ce(en),s=e,{debugMode:c}=yr(s),u=A(0),f=A(0),m=A(!1),I=A(!1),p=A(0),y=A(0),N=A(""),z=A(""),P=A(""),L=A([]),R=A(0),_=A(!0),W=A(!1),V=A(!1),Z=A(!1),oe=A(!1),J=A(!1);async function le($,U){V.value=!0,await S(U),$.target.focus()}const fe={Escape:"Escape",F4:"F4",Backspace:"BackSpace",Delete:"Delete",Tab:"Tab",Enter:"Return",Home:"Home",End:"End",PageUp:"Page_Up",PageDown:"Page_Down",Alt:"Alt_L",ArrowUp:"Up",ArrowRight:"Right",ArrowDown:"Down",ArrowLeft:"Left","~":"asciitilde","`":"quoteleft","!":"exclam","@":"at","#":"numbersign",$:"dollar","%":"percent","^":"asciicircum","&":"ampersand","*":"asterisk","(":"parenleft",")":"parenright","-":"minus",_:"underscore","+":"plus","=":"equal","{":"braceleft","[":"bracketleft","}":"braceright","]":"bracketright",":":"colon",";":"semicolon",'"':"quotedbl","'":"apostrophe","|":"bar","\\":"backslash","<":"less",",":"comma",">":"greater",".":"period","?":"question","/":"slash"," ":"space"},C=["`"];function w($){return/^[a-z0-9!"#$%&'()*+,./:;<=>?@[\] ^_`{|}~\\-]$/i.test($)}function K($){const U=nt(),{selectionStart:ue,selectionEnd:be}=U;o.value=o.value.slice(0,ue)+$+o.value.slice(be),Qe(()=>{U.selectionEnd=ue+$.length})}async function H($,U){const ue=nt();!("updatedSchema"in $)&&$.updatedOptions&&i($.updatedOptions),$.state===0?(V.value=!1,Z.value=!1,I.value=!1,K($.committed)):$.state===1?(N.value=$.head,z.value=$.body,P.value=$.tail,R.value=$.highlighted,L.value=$.candidates.map((be,Ie)=>{var _e;let Ne=`${((_e=$.selectLabels)==null?void 0:_e[Ie])||Ie+1} ${be.text}`;return be.comment&&(Ne+=" "+be.comment),{label:Ne,key:Ie}}),_.value=$.page===0,W.value=$.isLastPage,Z.value||(Z.value=!0,oe.value=!1),Qe(()=>{document.querySelector(".n-popover").getBoundingClientRect().width>ue.getBoundingClientRect().width&&(oe.value=!0)}),$.committed&&K($.committed)):(V.value=!1,Z.value=!1,$.state===2&&$.updatedSchema&&await l($.updatedSchema.split("/")[0]),$.state===3&&w(U)&&K(U)),ue.focus()}async function S($){const U=await t.value.process($);return H(U,$)}let j=!1,G=0,ee=0;Ae(o,($,U)=>{if(j&&(j=!1,U.length+1===$.length&&U.substring(0,G)===$.substring(0,G)&&U.substring(ee)===$.substring(ee+1))){const ue=nt();o.value=U,Qe(()=>{V.value=!0,ue.selectionEnd=G,S($[G])})}});function F($){if(c.value||r.value)return;const{code:U,key:ue}=$,be=nt();if(ue==="Unidentified"){j=!0,G=be.selectionStart,ee=be.selectionEnd;return}if(ue==="Shift"){J.value=!0;return}J.value=!1;const Ie=w(ue),Ne=ue==="Alt",_e=$.getModifierState("Control"),Ke=$.getModifierState("Meta"),He=$.getModifierState("Alt"),$e=$.getModifierState("Shift"),Be=_e||Ke||He||$e&&!Ie;if(!V.value&&(document.activeElement!==be||!Ie&&ue!=="F4"||Be&&!$e&&!(_e&&C.includes(ue))))return;let ye;const k=E=>`{${E}}`;if(Be||!Ie){if(ye=/^[0-9a-z]$/i.test(ue)?ue:fe[ue],ye===void 0)return;Ne&&U==="AltRight"&&(ye="Alt_R");const E=[];_e&&E.push("Control"),Ke&&E.push("Meta"),He&&!Ne&&E.push("Alt"),$e&&E.push("Shift"),E.push(ye),ye=k(E.join("+"))}else U.startsWith("Numpad")?ye=k(`KP_${U.substring(6)}`):ye=ue;if(!I.value){const E=be.getBoundingClientRect(),pe=pl(be,be.selectionStart);p.value=E.x+pe.left,y.value=lr.value?8:E.y+pe.top+pe.height-be.scrollTop}V.value=!0,$.preventDefault(),S(ye)}function D($){if(c.value||r.value)return;const{key:U}=$;U==="Shift"&&J.value&&a(),J.value=!1,V.value&&S(`{Release+${fe[U]||U}}`)}async function g($){const U=JSON.parse(await t.value.selectCandidateOnCurrentPage($));return H(U,"")}function v($){return $.touches.length===1?$.touches[0]:void 0}function x($,U){u.value=$,f.value=U;const ue=document.querySelector(".n-popover");p.value=ue.getBoundingClientRect().left,m.value=!0}function se($){x($.clientX,$.clientY)}function xe($){const U=v($);U&&x(U.clientX,U.clientY)}function ke($,U){m.value&&(I.value=!0,p.value+=$-u.value,y.value+=U-f.value,u.value=$,f.value=U)}function b($){ke($.clientX,$.clientY)}function Ce($){const U=v($);U&&ke(U.clientX,U.clientY)}function Te(){m.value=!1}return Ye(()=>{document.addEventListener("keydown",F),document.addEventListener("keyup",D),document.addEventListener("mousemove",b),document.addEventListener("touchmove",Ce),document.addEventListener("mouseup",Te),document.addEventListener("touchend",Te)}),br(()=>{document.removeEventListener("keydown",F),document.removeEventListener("keyup",D),document.removeEventListener("mousemove",b),document.removeEventListener("touchmove",Ce),document.removeEventListener("mouseup",Te),document.removeEventListener("touchend",Te)}),n({debug:le}),($,U)=>(qe(),xt(he(an),{show:Z.value,"show-arrow":!1,x:p.value,y:y.value,flip:!m.value,placement:"bottom-start",trigger:"manual",style:{cursor:"move"},onMousedown:se,onTouchstart:xe},{default:Fe(()=>[Se(he(gn),{type:"success"},{default:Fe(()=>[Me(ot(N.value),1)]),_:1}),U[2]||(U[2]=Me("  ",-1)),Se(he(gn),{type:"info"},{default:Fe(()=>[Me(ot(z.value),1)]),_:1}),Me("  "+ot(P.value)+" ",1),Ln(Se(he(rl),{options:L.value,mode:"horizontal",value:R.value,"onUpdate:value":g},null,8,["options","value"]),[[Kn,L.value.length]]),Se(he(wt),{text:"",disabled:_.value},{default:Fe(()=>[Se(he(Wt),{component:he(sl),onClick:U[0]||(U[0]=ue=>S("-"))},null,8,["component"])]),_:1},8,["disabled"]),Se(he(wt),{text:"",disabled:W.value},{default:Fe(()=>[Se(he(Wt),{component:he(fl),onClick:U[1]||(U[1]=ue=>S("="))},null,8,["component"])]),_:1},8,["disabled"])]),_:1},8,["show","x","y","flip"]))}}),Kt="ascii_mode",Tn="ascii_punct",gl=ie({__name:"Input",props:{method:{},disableSwitch:{type:Boolean}},setup(e){const n=e;function t(z){a.value=z,l.value=z?"":i.value}const o=A(void 0),r=A(""),i=A(n.method??"sbjm"),l=A(""),a=A(!0),s=A(!1),c=A(!1),u={[Kt]:s,[Tn]:c},f=z=>async()=>{const P=u[z],L=!P.value;await o.value.setOption(z,L),P.value=L},m=f(Kt),I=f(Tn);async function p(z){t(!0);try{await o.value.setIME(z),i.value=z;for(const[P,L]of Object.entries(u)){if(P===Kt){L.value=!1;continue}await o.value.setOption(P,L.value)}}catch(P){console.error(P)}t(!1)}function y(z){if(z.length===1){const P=z[0];for(const[L,R]of Object.entries(u)){if(L===P){R.value=!0;return}if(`!${L}`===P){R.value=!1;return}}}}ve(Fn,l),ve(Jt,p),ve(Qt,a),ve(Mn,s),ve(An,c),ve(en,m),ve(dr,I),ve(En,r),ve(Bn,y),ve($n,o),Ye(async()=>{o.value=new ar,sr(),await p(i.value)});const N=A();return(z,P)=>(qe(),xt(he(ur),{theme:he(cr)},{default:Fe(()=>[(qe(),xt(wr,null,[Se(he(Dn),{vertical:""},{default:Fe(()=>[Se(hl,{"disable-switch":n.disableSwitch},null,8,["disable-switch"]),Se(he(_r),{id:"container",value:r.value,"onUpdate:value":P[0]||(P[0]=L=>r.value=L),type:"textarea",rows:15},null,8,["value"]),Se(ml,{ref_key:"panel",ref:N},null,512)]),_:1})],1024))]),_:1},8,["theme"]))}}),Rl=JSON.parse('{"title":"声笔快打","description":"","frontmatter":{"sidebar":false,"editLink":false,"lastUpdated":false},"headers":[],"relativePath":"sbkd/index.md","filePath":"sbkd/index.md"}'),bl={name:"sbkd/index.md"},zl=Object.assign(bl,{setup(e){return(n,t)=>{const o=xr("ClientOnly");return qe(),rn("div",null,[t[0]||(t[0]=je("h1",{id:"声笔快打",tabindex:"-1"},[Me("声笔快打 "),je("a",{class:"header-anchor",href:"#声笔快打","aria-label":'Permalink to "声笔快打"'},"​")],-1)),t[1]||(t[1]=je("p",null,[Me("「声笔快打」是声笔输入法的在线版，基于 "),je("a",{href:"http://github.com/libreservice/my_rime",target:"_blank",rel:"noreferrer"},"My Rime（梧桐输入法）"),Me("实现。您无需安装就可以体验所有的声笔系列码输入方案，包括声笔简码、声笔飞码、声笔飞单、声笔飞讯、声笔自然、声笔小鹤和声笔拼音。")],-1)),t[2]||(t[2]=je("p",null,[Me("为提高访问速度，在线版中的每个方案仅包含六千余字和五万余词，且不包含反查功能。如您希望尝试完整版，欢迎在"),je("a",{href:"https://github.com/sbsrf/home/releases",target:"_blank",rel:"noreferrer"},"发布页"),Me("下载。")],-1)),Se(o,null,{default:Fe(()=>[Se(gl)]),_:1})])}}});export{Rl as __pageData,zl as default};
