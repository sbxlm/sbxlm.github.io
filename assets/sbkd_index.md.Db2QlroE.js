import{h as Eo,b as ht,o as vt,X as Pe,Y as Lt,af as pn,ag as Bo,U as Fn,u as Xe,N as Xt,v as Yt,ah as Lo,r as yt,Q as Ko,S as Ho,g as Do,ai as mn,aj as jo,c as be,ak as Vo,al as Wo,M as Uo,am as Go,V as it,W as qo,x as Xo,q as gn,an as Yo,A as Zo,p as Nn,w as Jo,j as Qo,l as er,ac as tr,ao as nr,s as gt,a5 as or,a1 as rr,ap as ir,B as wt,aq as _n,ar as Zt,as as Jt,at as Mn,au as Qt,av as An,aw as nt,ax as $n,ay as En,az as Bn,aA as lr,aB as ar,E as sr,G as dr,H as cr,aC as ur}from"./chunks/util.Cip-6f37.js";import{p as P,q as Be,ai as fr,a3 as hr,$ as en,S as vr,h as O,X as he,d as le,L as ue,v as Ye,ad as pr,ae as mr,a5 as de,a4 as c,K as kt,P as Qe,r as gr,T as tn,s as Kt,F as nn,a7 as Ln,a8 as Kn,o as qe,c as on,j as je,b as xt,w as Ne,G as Ce,k as ve,a as Me,t as ot,aj as br,x as yr,ak as wr,B as xr}from"./chunks/framework.BDLWvHlL.js";import{y as Hn,D as Ht,a2 as tt,d as I,g as z,b as V,u as Ve,k as Oe,m as ce,f as W,F as ke,l as Rt,n as et,o as We,N as Dn}from"./chunks/Space.CydpLst9.js";import{d as jn,e as bt,b as Cr,i as rn,g as Sr,h as ln,u as Vn,j as Dt,B as Wn,V as Un,k as Gn,a as jt,r as kr,p as qn,N as Rr,f as zr,c as bn}from"./chunks/text.DDP6mPy9.js";import{r as Re,N as Ir,b as Pr,m as Or,k as an,a as Tr}from"./chunks/Input.DYzTz7CS.js";import{g as Fr}from"./chunks/theme.UgGh9S4k.js";function Ge(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function yn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Nr(e){return n=>{n?e.value=n.$el:e.value=null}}function Ft(e){const n=e.filter(t=>t!==void 0);if(n.length!==0)return n.length===1?n[0]:t=>{e.forEach(o=>{o&&o(t)})}}function _r(e,n,t){const o=P(e.value);let r=null;return Be(e,i=>{r!==null&&window.clearTimeout(r),i===!0?t&&!t.value?o.value=!0:r=window.setTimeout(()=>{o.value=!0},n):o.value=!1}),o}function Mr(e={},n){const t=fr({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:o,keyup:r}=e,i=s=>{switch(s.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}o!==void 0&&Object.keys(o).forEach(f=>{if(f!==s.key)return;const u=o[f];if(typeof u=="function")u(s);else{const{stop:h=!1,prevent:p=!1}=u;h&&s.stopPropagation(),p&&s.preventDefault(),u.handler(s)}})},l=s=>{switch(s.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}r!==void 0&&Object.keys(r).forEach(f=>{if(f!==s.key)return;const u=r[f];if(typeof u=="function")u(s);else{const{stop:h=!1,prevent:p=!1}=u;h&&s.stopPropagation(),p&&s.preventDefault(),u.handler(s)}})},a=()=>{(n===void 0||n.value)&&(vt("keydown",document,i),vt("keyup",document,l)),n!==void 0&&Be(n,s=>{s?(vt("keydown",document,i),vt("keyup",document,l)):(ht("keydown",document,i),ht("keyup",document,l))})};return Eo()?(hr(a),en(()=>{(n===void 0||n.value)&&(ht("keydown",document,i),ht("keyup",document,l))})):a(),vr(t)}function wn(e){return e&-e}class Xn{constructor(n,t){this.l=n,this.min=t;const o=new Array(n+1);for(let r=0;r<n+1;++r)o[r]=0;this.ft=o}add(n,t){if(t===0)return;const{l:o,ft:r}=this;for(n+=1;n<=o;)r[n]+=t,n+=wn(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:t,min:o,l:r}=this;if(n>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let i=n*o;for(;n>0;)i+=t[n],n-=wn(n);return i}getBound(n){let t=0,o=this.l;for(;o>t;){const r=Math.floor((t+o)/2),i=this.sum(r);if(i>n){o=r;continue}else if(i<n){if(t===r)return this.sum(t+1)<=n?t+1:r;t=r}else return r}return t}}let pt;function Ar(){return typeof document>"u"?!1:(pt===void 0&&("matchMedia"in window?pt=window.matchMedia("(pointer:coarse)").matches:pt=!1),pt)}let Nt;function xn(){return typeof document>"u"?1:(Nt===void 0&&(Nt="chrome"in window?window.devicePixelRatio:1),Nt)}const Yn="VVirtualListXScroll";function $r({columnsRef:e,renderColRef:n,renderItemWithColsRef:t}){const o=P(0),r=P(0),i=O(()=>{const f=e.value;if(f.length===0)return null;const u=new Xn(f.length,0);return f.forEach((h,p)=>{u.add(p,h.width)}),u}),l=Pe(()=>{const f=i.value;return f!==null?Math.max(f.getBound(r.value)-1,0):0}),a=f=>{const u=i.value;return u!==null?u.sum(f):0},s=Pe(()=>{const f=i.value;return f!==null?Math.min(f.getBound(r.value+o.value)+1,e.value.length-1):0});return he(Yn,{startIndexRef:l,endIndexRef:s,columnsRef:e,renderColRef:n,renderItemWithColsRef:t,getLeft:a}),{listWidthRef:o,scrollLeftRef:r}}const Cn=le({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:n,columnsRef:t,getLeft:o,renderColRef:r,renderItemWithColsRef:i}=ue(Yn);return{startIndex:e,endIndex:n,columns:t,renderCol:r,renderItemWithCols:i,getLeft:o}},render(){const{startIndex:e,endIndex:n,columns:t,renderCol:o,renderItemWithCols:r,getLeft:i,item:l}=this;if(r!=null)return r({itemIndex:this.index,startColIndex:e,endColIndex:n,allColumns:t,item:l,getLeft:i});if(o!=null){const a=[];for(let s=e;s<=n;++s){const f=t[s];a.push(o({column:f,left:i(s),item:l}))}return a}return null}}),Er=bt(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[bt("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[bt("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Br=le({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=Hn();Er.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:jn,ssr:n}),Ye(()=>{const{defaultScrollIndex:y,defaultScrollKey:C}=e;y!=null?$({index:y}):C!=null&&$({key:C})});let t=!1,o=!1;pr(()=>{if(t=!1,!o){o=!0;return}$({top:b.value,left:l.value})}),mr(()=>{t=!0,o||(o=!0)});const r=Pe(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let y=0;return e.columns.forEach(C=>{y+=C.width}),y}),i=O(()=>{const y=new Map,{keyField:C}=e;return e.items.forEach((E,X)=>{y.set(E[C],X)}),y}),{scrollLeftRef:l,listWidthRef:a}=$r({columnsRef:de(e,"columns"),renderColRef:de(e,"renderCol"),renderItemWithColsRef:de(e,"renderItemWithCols")}),s=P(null),f=P(void 0),u=new Map,h=O(()=>{const{items:y,itemSize:C,keyField:E}=e,X=new Xn(y.length,C);return y.forEach((K,j)=>{const Y=K[E],Z=u.get(Y);Z!==void 0&&X.add(j,Z)}),X}),p=P(0),b=P(0),g=Pe(()=>Math.max(h.value.getBound(b.value-Ht(e.paddingTop))-1,0)),A=O(()=>{const{value:y}=f;if(y===void 0)return[];const{items:C,itemSize:E}=e,X=g.value,K=Math.min(X+Math.ceil(y/E+1),C.length-1),j=[];for(let Y=X;Y<=K;++Y)j.push(C[Y]);return j}),$=(y,C)=>{if(typeof y=="number"){x(y,C,"auto");return}const{left:E,top:X,index:K,key:j,position:Y,behavior:Z,debounce:F=!0}=y;if(E!==void 0||X!==void 0)x(E,X,Z);else if(K!==void 0)_(K,Z,F);else if(j!==void 0){const m=i.value.get(j);m!==void 0&&_(m,Z,F)}else Y==="bottom"?x(0,Number.MAX_SAFE_INTEGER,Z):Y==="top"&&x(0,0,Z)};let k,N=null;function _(y,C,E){const{value:X}=h,K=X.sum(y)+Ht(e.paddingTop);if(!E)s.value.scrollTo({left:0,top:K,behavior:C});else{k=y,N!==null&&window.clearTimeout(N),N=window.setTimeout(()=>{k=void 0,N=null},16);const{scrollTop:j,offsetHeight:Y}=s.value;if(K>j){const Z=X.get(y);K+Z<=j+Y||s.value.scrollTo({left:0,top:K+Z-Y,behavior:C})}else s.value.scrollTo({left:0,top:K,behavior:C})}}function x(y,C,E){s.value.scrollTo({left:y,top:C,behavior:E})}function R(y,C){var E,X,K;if(t||e.ignoreItemResize||D(C.target))return;const{value:j}=h,Y=i.value.get(y),Z=j.get(Y),F=(K=(X=(E=C.borderBoxSize)===null||E===void 0?void 0:E[0])===null||X===void 0?void 0:X.blockSize)!==null&&K!==void 0?K:C.contentRect.height;if(F===Z)return;F-e.itemSize===0?u.delete(y):u.set(y,F-e.itemSize);const d=F-Z;if(d===0)return;j.add(Y,d);const T=s.value;if(T!=null){if(k===void 0){const J=j.sum(Y);T.scrollTop>J&&T.scrollBy(0,d)}else if(Y<k)T.scrollBy(0,d);else if(Y===k){const J=j.sum(Y);F+J>T.scrollTop+T.offsetHeight&&T.scrollBy(0,d)}ae()}p.value++}const q=!Ar();let H=!1;function ee(y){var C;(C=e.onScroll)===null||C===void 0||C.call(e,y),(!q||!H)&&ae()}function te(y){var C;if((C=e.onWheel)===null||C===void 0||C.call(e,y),q){const E=s.value;if(E!=null){if(y.deltaX===0&&(E.scrollTop===0&&y.deltaY<=0||E.scrollTop+E.offsetHeight>=E.scrollHeight&&y.deltaY>=0))return;y.preventDefault(),E.scrollTop+=y.deltaY/xn(),E.scrollLeft+=y.deltaX/xn(),ae(),H=!0,Cr(()=>{H=!1})}}}function G(y){if(t||D(y.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(y.contentRect.height===f.value)return}else if(y.contentRect.height===f.value&&y.contentRect.width===a.value)return;f.value=y.contentRect.height,a.value=y.contentRect.width;const{onResize:C}=e;C!==void 0&&C(y)}function ae(){const{value:y}=s;y!=null&&(b.value=y.scrollTop,l.value=y.scrollLeft)}function D(y){let C=y;for(;C!==null;){if(C.style.display==="none")return!0;C=C.parentElement}return!1}return{listHeight:f,listStyle:{overflow:"auto"},keyToIndex:i,itemsStyle:O(()=>{const{itemResizable:y}=e,C=tt(h.value.sum());return p.value,[e.itemsStyle,{boxSizing:"content-box",width:tt(r.value),height:y?"":C,minHeight:y?C:"",paddingTop:tt(e.paddingTop),paddingBottom:tt(e.paddingBottom)}]}),visibleItemsStyle:O(()=>(p.value,{transform:`translateY(${tt(h.value.sum(g.value))})`})),viewportItems:A,listElRef:s,itemsElRef:P(null),scrollTo:$,handleListResize:G,handleListScroll:ee,handleListWheel:te,handleItemResize:R}},render(){const{itemResizable:e,keyField:n,keyToIndex:t,visibleItemsTag:o}=this;return c(Lt,{onResize:this.handleListResize},{default:()=>{var r,i;return c("div",kt(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?c("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[c(o,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:l,renderItemWithCols:a}=this;return this.viewportItems.map(s=>{const f=s[n],u=t.get(f),h=l!=null?c(Cn,{index:u,item:s}):void 0,p=a!=null?c(Cn,{index:u,item:s}):void 0,b=this.$slots.default({item:s,renderedCols:h,renderedItemWithCols:p,index:u})[0];return e?c(Lt,{key:f,onResize:g=>this.handleItemResize(f,g)},{default:()=>b}):(b.key=f,b)})}})]):(i=(r=this.$slots).empty)===null||i===void 0?void 0:i.call(r)])}})}}),Le="v-hidden",Lr=bt("[v-hidden]",{display:"none!important"}),Vt=le({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const t=P(null),o=P(null);function r(l){const{value:a}=t,{getCounter:s,getTail:f}=e;let u;if(s!==void 0?u=s():u=o.value,!a||!u)return;u.hasAttribute(Le)&&u.removeAttribute(Le);const{children:h}=a;if(l.showAllItemsBeforeCalculate)for(const _ of h)_.hasAttribute(Le)&&_.removeAttribute(Le);const p=a.offsetWidth,b=[],g=n.tail?f==null?void 0:f():null;let A=g?g.offsetWidth:0,$=!1;const k=a.children.length-(n.tail?1:0);for(let _=0;_<k-1;++_){if(_<0)continue;const x=h[_];if($){x.hasAttribute(Le)||x.setAttribute(Le,"");continue}else x.hasAttribute(Le)&&x.removeAttribute(Le);const R=x.offsetWidth;if(A+=R,b[_]=R,A>p){const{updateCounter:q}=e;for(let H=_;H>=0;--H){const ee=k-1-H;q!==void 0?q(ee):u.textContent=`${ee}`;const te=u.offsetWidth;if(A-=b[H],A+te<=p||H===0){$=!0,_=H-1,g&&(_===-1?(g.style.maxWidth=`${p-te}px`,g.style.boxSizing="border-box"):g.style.maxWidth="");const{onUpdateCount:G}=e;G&&G(ee);break}}}}const{onUpdateOverflow:N}=e;$?N!==void 0&&N(!0):(N!==void 0&&N(!1),u.setAttribute(Le,""))}const i=Hn();return Lr.mount({id:"vueuc/overflow",head:!0,anchorMetaName:jn,ssr:i}),Ye(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:o,sync:r}},render(){const{$slots:e}=this;return Qe(()=>this.sync({showAllItemsBeforeCalculate:!1})),c("div",{class:"v-overflow",ref:"selfRef"},[gr(e,"default"),e.counter?e.counter():c("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Zn(e,n){n&&(Ye(()=>{const{value:t}=e;t&&pn.registerHandler(t,n)}),en(()=>{const{value:t}=e;t&&pn.unregisterHandler(t)}))}const Kr=le({name:"Checkmark",render(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},c("g",{fill:"none"},c("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Hr=le({name:"ChevronRight",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Dr=le({name:"Empty",render(){return c("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),c("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),jr=le({name:"ChevronDownFilled",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Vr=le({props:{onFocus:Function,onBlur:Function},setup(e){return()=>c("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Sn(e){return Array.isArray(e)?e:[e]}const Wt={STOP:"STOP"};function Jn(e,n){const t=n(e);e.children!==void 0&&t!==Wt.STOP&&e.children.forEach(o=>Jn(o,n))}function Wr(e,n={}){const{preserveGroup:t=!1}=n,o=[],r=t?l=>{l.isLeaf||(o.push(l.key),i(l.children))}:l=>{l.isLeaf||(l.isGroup||o.push(l.key),i(l.children))};function i(l){l.forEach(r)}return i(e),o}function Ur(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function Gr(e){return e.children}function qr(e){return e.key}function Xr(){return!1}function Yr(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function Zr(e){return e.disabled===!0}function Jr(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function _t(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function Mt(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function Qr(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)||t.add(o)}),Array.from(t)}function ei(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)&&t.delete(o)}),Array.from(t)}function ti(e){return(e==null?void 0:e.type)==="group"}function ni(e){const n=new Map;return e.forEach((t,o)=>{n.set(t.key,o)}),t=>{var o;return(o=n.get(t))!==null&&o!==void 0?o:null}}class oi extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function ri(e,n,t,o){return Ct(n.concat(e),t,o,!1)}function ii(e,n){const t=new Set;return e.forEach(o=>{const r=n.treeNodeMap.get(o);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function li(e,n,t,o){const r=Ct(n,t,o,!1),i=Ct(e,t,o,!0),l=ii(e,t),a=[];return r.forEach(s=>{(i.has(s)||l.has(s))&&a.push(s)}),a.forEach(s=>r.delete(s)),r}function At(e,n){const{checkedKeys:t,keysToCheck:o,keysToUncheck:r,indeterminateKeys:i,cascade:l,leafOnly:a,checkStrategy:s,allowNotLoaded:f}=e;if(!l)return o!==void 0?{checkedKeys:Qr(t,o),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:ei(t,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:u}=n;let h;r!==void 0?h=li(r,t,n,f):o!==void 0?h=ri(o,t,n,f):h=Ct(t,n,f,!1);const p=s==="parent",b=s==="child"||a,g=h,A=new Set,$=Math.max.apply(null,Array.from(u.keys()));for(let k=$;k>=0;k-=1){const N=k===0,_=u.get(k);for(const x of _){if(x.isLeaf)continue;const{key:R,shallowLoaded:q}=x;if(b&&q&&x.children.forEach(G=>{!G.disabled&&!G.isLeaf&&G.shallowLoaded&&g.has(G.key)&&g.delete(G.key)}),x.disabled||!q)continue;let H=!0,ee=!1,te=!0;for(const G of x.children){const ae=G.key;if(!G.disabled){if(te&&(te=!1),g.has(ae))ee=!0;else if(A.has(ae)){ee=!0,H=!1;break}else if(H=!1,ee)break}}H&&!te?(p&&x.children.forEach(G=>{!G.disabled&&g.has(G.key)&&g.delete(G.key)}),g.add(R)):ee&&A.add(R),N&&b&&g.has(R)&&g.delete(R)}}return{checkedKeys:Array.from(g),indeterminateKeys:Array.from(A)}}function Ct(e,n,t,o){const{treeNodeMap:r,getChildren:i}=n,l=new Set,a=new Set(e);return e.forEach(s=>{const f=r.get(s);f!==void 0&&Jn(f,u=>{if(u.disabled)return Wt.STOP;const{key:h}=u;if(!l.has(h)&&(l.add(h),a.add(h),Jr(u.rawNode,i))){if(o)return Wt.STOP;if(!t)throw new oi}})}),a}function ai(e,{includeGroup:n=!1,includeSelf:t=!0},o){var r;const i=o.treeNodeMap;let l=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const a={keyPath:[],treeNodePath:[],treeNode:l};if(l!=null&&l.ignored)return a.treeNode=null,a;for(;l;)!l.ignored&&(n||!l.isGroup)&&a.treeNodePath.push(l),l=l.parent;return a.treeNodePath.reverse(),t||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(s=>s.key),a}function si(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function di(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r+1)%o]:r===t.length-1?null:t[r+1]}function kn(e,n,{loop:t=!1,includeDisabled:o=!1}={}){const r=n==="prev"?ci:di,i={reverse:n==="prev"};let l=!1,a=null;function s(f){if(f!==null){if(f===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){a=e;return}}else if((!f.disabled||o)&&!f.ignored&&!f.isGroup){a=f;return}if(f.isGroup){const u=sn(f,i);u!==null?a=u:s(r(f,t))}else{const u=r(f,!1);if(u!==null)s(u);else{const h=ui(f);h!=null&&h.isGroup?s(r(h,t)):t&&s(r(f,!0))}}}}return s(e),a}function ci(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r-1+o)%o]:r===0?null:t[r-1]}function ui(e){return e.parent}function sn(e,n={}){const{reverse:t=!1}=n,{children:o}=e;if(o){const{length:r}=o,i=t?r-1:0,l=t?-1:r,a=t?-1:1;for(let s=i;s!==l;s+=a){const f=o[s];if(!f.disabled&&!f.ignored)if(f.isGroup){const u=sn(f,n);if(u!==null)return u}else return f}}return null}const fi={getChild(){return this.ignored?null:sn(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return kn(this,"next",e)},getPrev(e={}){return kn(this,"prev",e)}};function hi(e,n){const t=n?new Set(n):void 0,o=[];function r(i){i.forEach(l=>{o.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||t===void 0||t.has(l.key))&&r(l.children)})}return r(e),o}function vi(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function Qn(e,n,t,o,r,i=null,l=0){const a=[];return e.forEach((s,f)=>{var u;const h=Object.create(o);if(h.rawNode=s,h.siblings=a,h.level=l,h.index=f,h.isFirstChild=f===0,h.isLastChild=f+1===e.length,h.parent=i,!h.ignored){const p=r(s);Array.isArray(p)&&(h.children=Qn(p,n,t,o,r,h,l+1))}a.push(h),n.set(h.key,h),t.has(l)||t.set(l,[]),(u=t.get(l))===null||u===void 0||u.push(h)}),a}function rt(e,n={}){var t;const o=new Map,r=new Map,{getDisabled:i=Zr,getIgnored:l=Xr,getIsGroup:a=ti,getKey:s=qr}=n,f=(t=n.getChildren)!==null&&t!==void 0?t:Gr,u=n.ignoreEmptyChildren?x=>{const R=f(x);return Array.isArray(R)?R.length?R:null:R}:f,h=Object.assign({get key(){return s(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return Ur(this.rawNode,u)},get shallowLoaded(){return Yr(this.rawNode,u)},get ignored(){return l(this.rawNode)},contains(x){return vi(this,x)}},fi),p=Qn(e,o,r,h,u);function b(x){if(x==null)return null;const R=o.get(x);return R&&!R.isGroup&&!R.ignored?R:null}function g(x){if(x==null)return null;const R=o.get(x);return R&&!R.ignored?R:null}function A(x,R){const q=g(x);return q?q.getPrev(R):null}function $(x,R){const q=g(x);return q?q.getNext(R):null}function k(x){const R=g(x);return R?R.getParent():null}function N(x){const R=g(x);return R?R.getChild():null}const _={treeNodes:p,treeNodeMap:o,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:u,getFlattenedNodes(x){return hi(p,x)},getNode:b,getPrev:A,getNext:$,getParent:k,getChild:N,getFirstAvailableNode(){return si(p)},getPath(x,R={}){return ai(x,R,_)},getCheckedKeys(x,R={}){const{cascade:q=!0,leafOnly:H=!1,checkStrategy:ee="all",allowNotLoaded:te=!1}=R;return At({checkedKeys:_t(x),indeterminateKeys:Mt(x),cascade:q,leafOnly:H,checkStrategy:ee,allowNotLoaded:te},_)},check(x,R,q={}){const{cascade:H=!0,leafOnly:ee=!1,checkStrategy:te="all",allowNotLoaded:G=!1}=q;return At({checkedKeys:_t(R),indeterminateKeys:Mt(R),keysToCheck:x==null?[]:Sn(x),cascade:H,leafOnly:ee,checkStrategy:te,allowNotLoaded:G},_)},uncheck(x,R,q={}){const{cascade:H=!0,leafOnly:ee=!1,checkStrategy:te="all",allowNotLoaded:G=!1}=q;return At({checkedKeys:_t(R),indeterminateKeys:Mt(R),keysToUncheck:x==null?[]:Sn(x),cascade:H,leafOnly:ee,checkStrategy:te,allowNotLoaded:G},_)},getNonLeafKeys(x={}){return Wr(p,x)}};return _}const pi=I("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[z("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[V("+",[z("description",`
 margin-top: 8px;
 `)])]),z("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),z("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),mi=Object.assign(Object.assign({},Oe.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),gi=le({name:"Empty",props:mi,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t,mergedComponentPropsRef:o}=Ve(e),r=Oe("Empty","-empty",pi,Bo,e,n),{localeRef:i}=Fn("Empty"),l=O(()=>{var u,h,p;return(u=e.description)!==null&&u!==void 0?u:(p=(h=o==null?void 0:o.value)===null||h===void 0?void 0:h.Empty)===null||p===void 0?void 0:p.description}),a=O(()=>{var u,h;return((h=(u=o==null?void 0:o.value)===null||u===void 0?void 0:u.Empty)===null||h===void 0?void 0:h.renderIcon)||(()=>c(Dr,null))}),s=O(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:h},self:{[ce("iconSize",u)]:p,[ce("fontSize",u)]:b,textColor:g,iconColor:A,extraTextColor:$}}=r.value;return{"--n-icon-size":p,"--n-font-size":b,"--n-bezier":h,"--n-text-color":g,"--n-icon-color":A,"--n-extra-text-color":$}}),f=t?Xe("empty",O(()=>{let u="";const{size:h}=e;return u+=h[0],u}),s,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:a,localizedDescription:O(()=>l.value||i.value.description),cssVars:t?void 0:s,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:t}=this;return t==null||t(),c("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?c("div",{class:`${n}-empty__icon`},e.icon?e.icon():c(Xt,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?c("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?c("div",{class:`${n}-empty__extra`},e.extra()):null)}});function bi(e,n){return c(tn,{name:"fade-in-scale-up-transition"},{default:()=>e?c(Xt,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>c(Kr)}):null})}const Rn=le({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:t,multipleRef:o,valueSetRef:r,renderLabelRef:i,renderOptionRef:l,labelFieldRef:a,valueFieldRef:s,showCheckmarkRef:f,nodePropsRef:u,handleOptionClick:h,handleOptionMouseEnter:p}=ue(rn),b=Pe(()=>{const{value:k}=t;return k?e.tmNode.key===k.key:!1});function g(k){const{tmNode:N}=e;N.disabled||h(k,N)}function A(k){const{tmNode:N}=e;N.disabled||p(k,N)}function $(k){const{tmNode:N}=e,{value:_}=b;N.disabled||_||p(k,N)}return{multiple:o,isGrouped:Pe(()=>{const{tmNode:k}=e,{parent:N}=k;return N&&N.rawNode.type==="group"}),showCheckmark:f,nodeProps:u,isPending:b,isSelected:Pe(()=>{const{value:k}=n,{value:N}=o;if(k===null)return!1;const _=e.tmNode.rawNode[s.value];if(N){const{value:x}=r;return x.has(_)}else return k===_}),labelField:a,renderLabel:i,renderOption:l,handleMouseMove:$,handleMouseEnter:A,handleClick:g}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:t,isPending:o,isGrouped:r,showCheckmark:i,nodeProps:l,renderOption:a,renderLabel:s,handleClick:f,handleMouseEnter:u,handleMouseMove:h}=this,p=bi(t,e),b=s?[s(n,t),i&&p]:[Re(n[this.labelField],n,t),i&&p],g=l==null?void 0:l(n),A=c("div",Object.assign({},g,{class:[`${e}-base-select-option`,n.class,g==null?void 0:g.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:r,[`${e}-base-select-option--pending`]:o,[`${e}-base-select-option--show-checkmark`]:i}],style:[(g==null?void 0:g.style)||"",n.style||""],onClick:Ft([f,g==null?void 0:g.onClick]),onMouseenter:Ft([u,g==null?void 0:g.onMouseenter]),onMousemove:Ft([h,g==null?void 0:g.onMousemove])}),c("div",{class:`${e}-base-select-option__content`},b));return n.render?n.render({node:A,option:n,selected:t}):a?a({node:A,option:n,selected:t}):A}}),zn=le({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:t,nodePropsRef:o}=ue(rn);return{labelField:t,nodeProps:o,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:t,nodeProps:o,tmNode:{rawNode:r}}=this,i=o==null?void 0:o(r),l=n?n(r,!1):Re(r[this.labelField],r,!1),a=c("div",Object.assign({},i,{class:[`${e}-base-select-group-header`,i==null?void 0:i.class]}),l);return r.render?r.render({node:a,option:r}):t?t({node:a,option:r,selected:!1}):a}}),yi=I("base-select-menu",`
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
 `,[z("content",`
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
 `),z("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),z("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),z("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),z("action",`
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
 `,[W("show-checkmark",`
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
 `),W("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),W("pending",[V("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),W("selected",`
 color: var(--n-option-text-color-active);
 `,[V("&::before",`
 background-color: var(--n-option-color-active);
 `),W("pending",[V("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),W("disabled",`
 cursor: not-allowed;
 `,[ke("selected",`
 color: var(--n-option-text-color-disabled);
 `),W("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),z("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Yt({enterScale:"0.5"})])])]),wi=le({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Oe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:t}=Ve(e),o=Rt("InternalSelectMenu",t,n),r=Oe("InternalSelectMenu","-internal-select-menu",yi,Lo,e,de(e,"clsPrefix")),i=P(null),l=P(null),a=P(null),s=O(()=>e.treeMate.getFlattenedNodes()),f=O(()=>ni(s.value)),u=P(null);function h(){const{treeMate:m}=e;let d=null;const{value:T}=e;T===null?d=m.getFirstAvailableNode():(e.multiple?d=m.getNode((T||[])[(T||[]).length-1]):d=m.getNode(T),(!d||d.disabled)&&(d=m.getFirstAvailableNode())),C(d||null)}function p(){const{value:m}=u;m&&!e.treeMate.getNode(m.key)&&(u.value=null)}let b;Be(()=>e.show,m=>{m?b=Be(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?h():p(),Qe(E)):p()},{immediate:!0}):b==null||b()},{immediate:!0}),en(()=>{b==null||b()});const g=O(()=>Ht(r.value.self[ce("optionHeight",e.size)])),A=O(()=>et(r.value.self[ce("padding",e.size)])),$=O(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),k=O(()=>{const m=s.value;return m&&m.length===0});function N(m){const{onToggle:d}=e;d&&d(m)}function _(m){const{onScroll:d}=e;d&&d(m)}function x(m){var d;(d=a.value)===null||d===void 0||d.sync(),_(m)}function R(){var m;(m=a.value)===null||m===void 0||m.sync()}function q(){const{value:m}=u;return m||null}function H(m,d){d.disabled||C(d,!1)}function ee(m,d){d.disabled||N(d)}function te(m){var d;Ge(m,"action")||(d=e.onKeyup)===null||d===void 0||d.call(e,m)}function G(m){var d;Ge(m,"action")||(d=e.onKeydown)===null||d===void 0||d.call(e,m)}function ae(m){var d;(d=e.onMousedown)===null||d===void 0||d.call(e,m),!e.focusable&&m.preventDefault()}function D(){const{value:m}=u;m&&C(m.getNext({loop:!0}),!0)}function y(){const{value:m}=u;m&&C(m.getPrev({loop:!0}),!0)}function C(m,d=!1){u.value=m,d&&E()}function E(){var m,d;const T=u.value;if(!T)return;const J=f.value(T.key);J!==null&&(e.virtualScroll?(m=l.value)===null||m===void 0||m.scrollTo({index:J}):(d=a.value)===null||d===void 0||d.scrollTo({index:J,elSize:g.value}))}function X(m){var d,T;!((d=i.value)===null||d===void 0)&&d.contains(m.target)&&((T=e.onFocus)===null||T===void 0||T.call(e,m))}function K(m){var d,T;!((d=i.value)===null||d===void 0)&&d.contains(m.relatedTarget)||(T=e.onBlur)===null||T===void 0||T.call(e,m)}he(rn,{handleOptionMouseEnter:H,handleOptionClick:ee,valueSetRef:$,pendingTmNodeRef:u,nodePropsRef:de(e,"nodeProps"),showCheckmarkRef:de(e,"showCheckmark"),multipleRef:de(e,"multiple"),valueRef:de(e,"value"),renderLabelRef:de(e,"renderLabel"),renderOptionRef:de(e,"renderOption"),labelFieldRef:de(e,"labelField"),valueFieldRef:de(e,"valueField")}),he(Sr,i),Ye(()=>{const{value:m}=a;m&&m.sync()});const j=O(()=>{const{size:m}=e,{common:{cubicBezierEaseInOut:d},self:{height:T,borderRadius:J,color:ze,groupHeaderTextColor:oe,actionDividerColor:Se,optionTextColorPressed:w,optionTextColor:_e,optionTextColorDisabled:xe,optionTextColorActive:M,optionOpacityDisabled:U,optionCheckColor:fe,actionTextColor:ye,optionColorPending:Ie,optionColorActive:Te,loadingColor:Fe,loadingSize:Ke,optionColorActivePending:He,[ce("optionFontSize",m)]:Ae,[ce("optionHeight",m)]:$e,[ce("optionPadding",m)]:pe}}=r.value;return{"--n-height":T,"--n-action-divider-color":Se,"--n-action-text-color":ye,"--n-bezier":d,"--n-border-radius":J,"--n-color":ze,"--n-option-font-size":Ae,"--n-group-header-text-color":oe,"--n-option-check-color":fe,"--n-option-color-pending":Ie,"--n-option-color-active":Te,"--n-option-color-active-pending":He,"--n-option-height":$e,"--n-option-opacity-disabled":U,"--n-option-text-color":_e,"--n-option-text-color-active":M,"--n-option-text-color-disabled":xe,"--n-option-text-color-pressed":w,"--n-option-padding":pe,"--n-option-padding-left":et(pe,"left"),"--n-option-padding-right":et(pe,"right"),"--n-loading-color":Fe,"--n-loading-size":Ke}}),{inlineThemeDisabled:Y}=e,Z=Y?Xe("internal-select-menu",O(()=>e.size[0]),j,e):void 0,F={selfRef:i,next:D,prev:y,getPendingTmNode:q};return Zn(i,e.onResize),Object.assign({mergedTheme:r,mergedClsPrefix:n,rtlEnabled:o,virtualListRef:l,scrollbarRef:a,itemSize:g,padding:A,flattenedNodes:s,empty:k,virtualListContainer(){const{value:m}=l;return m==null?void 0:m.listElRef},virtualListContent(){const{value:m}=l;return m==null?void 0:m.itemsElRef},doScroll:_,handleFocusin:X,handleFocusout:K,handleKeyUp:te,handleKeyDown:G,handleMouseDown:ae,handleVirtualListResize:R,handleVirtualListScroll:x,cssVars:Y?void 0:j,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender},F)},render(){const{$slots:e,virtualScroll:n,clsPrefix:t,mergedTheme:o,themeClass:r,onRender:i}=this;return i==null||i(),c("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,this.rtlEnabled&&`${t}-base-select-menu--rtl`,r,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},yt(e.header,l=>l&&c("div",{class:`${t}-base-select-menu__header`,"data-header":!0,key:"header"},l)),this.loading?c("div",{class:`${t}-base-select-menu__loading`},c(Ko,{clsPrefix:t,strokeWidth:20})):this.empty?c("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},Do(e.empty,()=>[c(gi,{theme:o.peers.Empty,themeOverrides:o.peerOverrides.Empty,size:this.size})])):c(Ho,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?c(Br,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:l})=>l.isGroup?c(zn,{key:l.key,clsPrefix:t,tmNode:l}):l.ignored?null:c(Rn,{clsPrefix:t,key:l.key,tmNode:l})}):c("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(l=>l.isGroup?c(zn,{key:l.key,clsPrefix:t,tmNode:l}):c(Rn,{clsPrefix:t,key:l.key,tmNode:l})))}),yt(e.action,l=>l&&[c("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},l),c(Vr,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),xi={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Ci=I("tag",`
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
`,[W("strong",`
 font-weight: var(--n-font-weight-strong);
 `),z("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),z("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),z("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),z("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),W("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[z("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),z("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),W("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),W("icon, avatar",[W("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),W("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),W("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[ke("disabled",[V("&:hover","background-color: var(--n-color-hover-checkable);",[ke("checked","color: var(--n-text-color-hover-checkable);")]),V("&:active","background-color: var(--n-color-pressed-checkable);",[ke("checked","color: var(--n-text-color-pressed-checkable);")])]),W("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[ke("disabled",[V("&:hover","background-color: var(--n-color-checked-hover);"),V("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Si=Object.assign(Object.assign(Object.assign({},Oe.props),xi),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),ki=We("n-tag"),$t=le({name:"Tag",props:Si,setup(e){const n=P(null),{mergedBorderedRef:t,mergedClsPrefixRef:o,inlineThemeDisabled:r,mergedRtlRef:i}=Ve(e),l=Oe("Tag","-tag",Ci,jo,e,o);he(ki,{roundRef:de(e,"round")});function a(){if(!e.disabled&&e.checkable){const{checked:b,onCheckedChange:g,onUpdateChecked:A,"onUpdate:checked":$}=e;A&&A(!b),$&&$(!b),g&&g(!b)}}function s(b){if(e.triggerClickOnClose||b.stopPropagation(),!e.disabled){const{onClose:g}=e;g&&be(g,b)}}const f={setTextContent(b){const{value:g}=n;g&&(g.textContent=b)}},u=Rt("Tag",i,o),h=O(()=>{const{type:b,size:g,color:{color:A,textColor:$}={}}=e,{common:{cubicBezierEaseInOut:k},self:{padding:N,closeMargin:_,borderRadius:x,opacityDisabled:R,textColorCheckable:q,textColorHoverCheckable:H,textColorPressedCheckable:ee,textColorChecked:te,colorCheckable:G,colorHoverCheckable:ae,colorPressedCheckable:D,colorChecked:y,colorCheckedHover:C,colorCheckedPressed:E,closeBorderRadius:X,fontWeightStrong:K,[ce("colorBordered",b)]:j,[ce("closeSize",g)]:Y,[ce("closeIconSize",g)]:Z,[ce("fontSize",g)]:F,[ce("height",g)]:m,[ce("color",b)]:d,[ce("textColor",b)]:T,[ce("border",b)]:J,[ce("closeIconColor",b)]:ze,[ce("closeIconColorHover",b)]:oe,[ce("closeIconColorPressed",b)]:Se,[ce("closeColorHover",b)]:w,[ce("closeColorPressed",b)]:_e}}=l.value,xe=et(_);return{"--n-font-weight-strong":K,"--n-avatar-size-override":`calc(${m} - 8px)`,"--n-bezier":k,"--n-border-radius":x,"--n-border":J,"--n-close-icon-size":Z,"--n-close-color-pressed":_e,"--n-close-color-hover":w,"--n-close-border-radius":X,"--n-close-icon-color":ze,"--n-close-icon-color-hover":oe,"--n-close-icon-color-pressed":Se,"--n-close-icon-color-disabled":ze,"--n-close-margin-top":xe.top,"--n-close-margin-right":xe.right,"--n-close-margin-bottom":xe.bottom,"--n-close-margin-left":xe.left,"--n-close-size":Y,"--n-color":A||(t.value?j:d),"--n-color-checkable":G,"--n-color-checked":y,"--n-color-checked-hover":C,"--n-color-checked-pressed":E,"--n-color-hover-checkable":ae,"--n-color-pressed-checkable":D,"--n-font-size":F,"--n-height":m,"--n-opacity-disabled":R,"--n-padding":N,"--n-text-color":$||T,"--n-text-color-checkable":q,"--n-text-color-checked":te,"--n-text-color-hover-checkable":H,"--n-text-color-pressed-checkable":ee}}),p=r?Xe("tag",O(()=>{let b="";const{type:g,size:A,color:{color:$,textColor:k}={}}=e;return b+=g[0],b+=A[0],$&&(b+=`a${mn($)}`),k&&(b+=`b${mn(k)}`),t.value&&(b+="c"),b}),h,e):void 0;return Object.assign(Object.assign({},f),{rtlEnabled:u,mergedClsPrefix:o,contentRef:n,mergedBordered:t,handleClick:a,handleCloseClick:s,cssVars:r?void 0:h,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender})},render(){var e,n;const{mergedClsPrefix:t,rtlEnabled:o,closable:r,color:{borderColor:i}={},round:l,onRender:a,$slots:s}=this;a==null||a();const f=yt(s.avatar,h=>h&&c("div",{class:`${t}-tag__avatar`},h)),u=yt(s.icon,h=>h&&c("div",{class:`${t}-tag__icon`},h));return c("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:o,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:l,[`${t}-tag--avatar`]:f,[`${t}-tag--icon`]:u,[`${t}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},u||f,c("span",{class:`${t}-tag__content`,ref:"contentRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)),!this.checkable&&r?c(Ir,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:l,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?c("div",{class:`${t}-tag__border`,style:{borderColor:i}}):null)}}),Ri=V([I("base-selection",`
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
 `),I("base-selection-tags","min-height: var(--n-height);"),z("border, state-border",`
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
 `),z("state-border",`
 z-index: 1;
 border-color: #0000;
 `),I("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[z("arrow",`
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
 `,[z("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),I("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[z("inner",`
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
 `,[z("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),z("render-label",`
 color: var(--n-text-color);
 `)]),ke("disabled",[V("&:hover",[z("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),W("focus",[z("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),W("active",[z("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),I("base-selection-label","background-color: var(--n-color-active);"),I("base-selection-tags","background-color: var(--n-color-active);")])]),W("disabled","cursor: not-allowed;",[z("arrow",`
 color: var(--n-arrow-color-disabled);
 `),I("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[I("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),z("render-label",`
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
 `,[z("input",`
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
 `),z("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>W(`${e}-status`,[z("state-border",`border: var(--n-border-${e});`),ke("disabled",[V("&:hover",[z("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),W("active",[z("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),I("base-selection-label",`background-color: var(--n-color-active-${e});`),I("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),W("focus",[z("state-border",`
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
 `,[z("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),zi=le({name:"InternalSelection",props:Object.assign(Object.assign({},Oe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:t}=Ve(e),o=Rt("InternalSelection",t,n),r=P(null),i=P(null),l=P(null),a=P(null),s=P(null),f=P(null),u=P(null),h=P(null),p=P(null),b=P(null),g=P(!1),A=P(!1),$=P(!1),k=Oe("InternalSelection","-internal-selection",Ri,Vo,e,de(e,"clsPrefix")),N=O(()=>e.clearable&&!e.disabled&&($.value||e.active)),_=O(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Re(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),x=O(()=>{const S=e.selectedOption;if(S)return S[e.labelField]}),R=O(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function q(){var S;const{value:B}=r;if(B){const{value:me}=i;me&&(me.style.width=`${B.offsetWidth}px`,e.maxTagCount!=="responsive"&&((S=p.value)===null||S===void 0||S.sync({showAllItemsBeforeCalculate:!1})))}}function H(){const{value:S}=b;S&&(S.style.display="none")}function ee(){const{value:S}=b;S&&(S.style.display="inline-block")}Be(de(e,"active"),S=>{S||H()}),Be(de(e,"pattern"),()=>{e.multiple&&Qe(q)});function te(S){const{onFocus:B}=e;B&&B(S)}function G(S){const{onBlur:B}=e;B&&B(S)}function ae(S){const{onDeleteOption:B}=e;B&&B(S)}function D(S){const{onClear:B}=e;B&&B(S)}function y(S){const{onPatternInput:B}=e;B&&B(S)}function C(S){var B;(!S.relatedTarget||!(!((B=l.value)===null||B===void 0)&&B.contains(S.relatedTarget)))&&te(S)}function E(S){var B;!((B=l.value)===null||B===void 0)&&B.contains(S.relatedTarget)||G(S)}function X(S){D(S)}function K(){$.value=!0}function j(){$.value=!1}function Y(S){!e.active||!e.filterable||S.target!==i.value&&S.preventDefault()}function Z(S){ae(S)}const F=P(!1);function m(S){if(S.key==="Backspace"&&!F.value&&!e.pattern.length){const{selectedOptions:B}=e;B!=null&&B.length&&Z(B[B.length-1])}}let d=null;function T(S){const{value:B}=r;if(B){const me=S.target.value;B.textContent=me,q()}e.ignoreComposition&&F.value?d=S:y(S)}function J(){F.value=!0}function ze(){F.value=!1,e.ignoreComposition&&y(d),d=null}function oe(S){var B;A.value=!0,(B=e.onPatternFocus)===null||B===void 0||B.call(e,S)}function Se(S){var B;A.value=!1,(B=e.onPatternBlur)===null||B===void 0||B.call(e,S)}function w(){var S,B;if(e.filterable)A.value=!1,(S=f.value)===null||S===void 0||S.blur(),(B=i.value)===null||B===void 0||B.blur();else if(e.multiple){const{value:me}=a;me==null||me.blur()}else{const{value:me}=s;me==null||me.blur()}}function _e(){var S,B,me;e.filterable?(A.value=!1,(S=f.value)===null||S===void 0||S.focus()):e.multiple?(B=a.value)===null||B===void 0||B.focus():(me=s.value)===null||me===void 0||me.focus()}function xe(){const{value:S}=i;S&&(ee(),S.focus())}function M(){const{value:S}=i;S&&S.blur()}function U(S){const{value:B}=u;B&&B.setTextContent(`+${S}`)}function fe(){const{value:S}=h;return S}function ye(){return i.value}let Ie=null;function Te(){Ie!==null&&window.clearTimeout(Ie)}function Fe(){e.active||(Te(),Ie=window.setTimeout(()=>{R.value&&(g.value=!0)},100))}function Ke(){Te()}function He(S){S||(Te(),g.value=!1)}Be(R,S=>{S||(g.value=!1)}),Ye(()=>{Kt(()=>{const S=f.value;S&&(e.disabled?S.removeAttribute("tabindex"):S.tabIndex=A.value?-1:0)})}),Zn(l,e.onResize);const{inlineThemeDisabled:Ae}=e,$e=O(()=>{const{size:S}=e,{common:{cubicBezierEaseInOut:B},self:{borderRadius:me,color:It,placeholderColor:Pt,textColor:at,paddingSingle:st,paddingMultiple:dt,caretColor:Ot,colorDisabled:Tt,textColorDisabled:ct,placeholderColorDisabled:De,colorActive:v,boxShadowFocus:L,boxShadowActive:Q,boxShadowHover:se,border:re,borderFocus:ne,borderHover:ie,borderActive:we,arrowColor:Ee,arrowColorDisabled:fo,loadingColor:ho,colorActiveWarning:vo,boxShadowFocusWarning:po,boxShadowActiveWarning:mo,boxShadowHoverWarning:go,borderWarning:bo,borderFocusWarning:yo,borderHoverWarning:wo,borderActiveWarning:xo,colorActiveError:Co,boxShadowFocusError:So,boxShadowActiveError:ko,boxShadowHoverError:Ro,borderError:zo,borderFocusError:Io,borderHoverError:Po,borderActiveError:Oo,clearColor:To,clearColorHover:Fo,clearColorPressed:No,clearSize:_o,arrowSize:Mo,[ce("height",S)]:Ao,[ce("fontSize",S)]:$o}}=k.value,ut=et(st),ft=et(dt);return{"--n-bezier":B,"--n-border":re,"--n-border-active":we,"--n-border-focus":ne,"--n-border-hover":ie,"--n-border-radius":me,"--n-box-shadow-active":Q,"--n-box-shadow-focus":L,"--n-box-shadow-hover":se,"--n-caret-color":Ot,"--n-color":It,"--n-color-active":v,"--n-color-disabled":Tt,"--n-font-size":$o,"--n-height":Ao,"--n-padding-single-top":ut.top,"--n-padding-multiple-top":ft.top,"--n-padding-single-right":ut.right,"--n-padding-multiple-right":ft.right,"--n-padding-single-left":ut.left,"--n-padding-multiple-left":ft.left,"--n-padding-single-bottom":ut.bottom,"--n-padding-multiple-bottom":ft.bottom,"--n-placeholder-color":Pt,"--n-placeholder-color-disabled":De,"--n-text-color":at,"--n-text-color-disabled":ct,"--n-arrow-color":Ee,"--n-arrow-color-disabled":fo,"--n-loading-color":ho,"--n-color-active-warning":vo,"--n-box-shadow-focus-warning":po,"--n-box-shadow-active-warning":mo,"--n-box-shadow-hover-warning":go,"--n-border-warning":bo,"--n-border-focus-warning":yo,"--n-border-hover-warning":wo,"--n-border-active-warning":xo,"--n-color-active-error":Co,"--n-box-shadow-focus-error":So,"--n-box-shadow-active-error":ko,"--n-box-shadow-hover-error":Ro,"--n-border-error":zo,"--n-border-focus-error":Io,"--n-border-hover-error":Po,"--n-border-active-error":Oo,"--n-clear-size":_o,"--n-clear-color":To,"--n-clear-color-hover":Fo,"--n-clear-color-pressed":No,"--n-arrow-size":Mo}}),pe=Ae?Xe("internal-selection",O(()=>e.size[0]),$e,e):void 0;return{mergedTheme:k,mergedClearable:N,mergedClsPrefix:n,rtlEnabled:o,patternInputFocused:A,filterablePlaceholder:_,label:x,selected:R,showTagsPanel:g,isComposing:F,counterRef:u,counterWrapperRef:h,patternInputMirrorRef:r,patternInputRef:i,selfRef:l,multipleElRef:a,singleElRef:s,patternInputWrapperRef:f,overflowRef:p,inputTagElRef:b,handleMouseDown:Y,handleFocusin:C,handleClear:X,handleMouseEnter:K,handleMouseLeave:j,handleDeleteOption:Z,handlePatternKeyDown:m,handlePatternInputInput:T,handlePatternInputBlur:Se,handlePatternInputFocus:oe,handleMouseEnterCounter:Fe,handleMouseLeaveCounter:Ke,handleFocusout:E,handleCompositionEnd:ze,handleCompositionStart:J,onPopoverUpdateShow:He,focus:_e,focusInput:xe,blur:w,blurInput:M,updateCounter:U,getCounter:fe,getTail:ye,renderLabel:e.renderLabel,cssVars:Ae?void 0:$e,themeClass:pe==null?void 0:pe.themeClass,onRender:pe==null?void 0:pe.onRender}},render(){const{status:e,multiple:n,size:t,disabled:o,filterable:r,maxTagCount:i,bordered:l,clsPrefix:a,ellipsisTagPopoverProps:s,onRender:f,renderTag:u,renderLabel:h}=this;f==null||f();const p=i==="responsive",b=typeof i=="number",g=p||b,A=c(Wo,null,{default:()=>c(Pr,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var k,N;return(N=(k=this.$slots).arrow)===null||N===void 0?void 0:N.call(k)}})});let $;if(n){const{labelField:k}=this,N=y=>c("div",{class:`${a}-base-selection-tag-wrapper`,key:y.value},u?u({option:y,handleClose:()=>{this.handleDeleteOption(y)}}):c($t,{size:t,closable:!y.disabled,disabled:o,onClose:()=>{this.handleDeleteOption(y)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>h?h(y,!0):Re(y[k],y,!0)})),_=()=>(b?this.selectedOptions.slice(0,i):this.selectedOptions).map(N),x=r?c("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},c("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:o,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),c("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,R=p?()=>c("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},c($t,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:o})):void 0;let q;if(b){const y=this.selectedOptions.length-i;y>0&&(q=c("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},c($t,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:o},{default:()=>`+${y}`})))}const H=p?r?c(Vt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:_,counter:R,tail:()=>x}):c(Vt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:_,counter:R}):b&&q?_().concat(q):_(),ee=g?()=>c("div",{class:`${a}-base-selection-popover`},p?_():this.selectedOptions.map(N)):void 0,te=g?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},s):null,ae=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?c("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},c("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,D=r?c("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},H,p?null:x,A):c("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:o?void 0:0},H,A);$=c(nn,null,g?c(ln,Object.assign({},te,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>D,default:ee}):D,ae)}else if(r){const k=this.pattern||this.isComposing,N=this.active?!k:!this.selected,_=this.active?!1:this.selected;$=c("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`,title:this.patternInputFocused?void 0:yn(this.label)},c("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:o,disabled:o,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),_?c("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},c("div",{class:`${a}-base-selection-overlay__wrapper`},u?u({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):Re(this.label,this.selectedOption,!0))):null,N?c("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},c("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,A)}else $=c("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?c("div",{class:`${a}-base-selection-input`,title:yn(this.label),key:"input"},c("div",{class:`${a}-base-selection-input__content`},u?u({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):Re(this.label,this.selectedOption,!0))):c("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},c("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),A);return c("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},$,l?c("div",{class:`${a}-base-selection__border`}):null,l?c("div",{class:`${a}-base-selection__state-border`}):null)}});function St(e){return e.type==="group"}function eo(e){return e.type==="ignored"}function Et(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Ii(e,n){return{getIsGroup:St,getIgnored:eo,getKey(o){return St(o)?o.name||o.key||"key-required":o[e]},getChildren(o){return o[n]}}}function Pi(e,n,t,o){if(!n)return e;function r(i){if(!Array.isArray(i))return[];const l=[];for(const a of i)if(St(a)){const s=r(a[o]);s.length&&l.push(Object.assign({},a,{[o]:s}))}else{if(eo(a))continue;n(t,a)&&l.push(a)}return l}return r(e)}function Oi(e,n,t){const o=new Map;return e.forEach(r=>{St(r)?r[t].forEach(i=>{o.set(i[n],i)}):o.set(r[n],r)}),o}const ge="0!important",to="-1px!important";function Ze(e){return W(`${e}-type`,[V("& +",[I("button",{},[W(`${e}-type`,[z("border",{borderLeftWidth:ge}),z("state-border",{left:to})])])])])}function Je(e){return W(`${e}-type`,[V("& +",[I("button",[W(`${e}-type`,[z("border",{borderTopWidth:ge}),z("state-border",{top:to})])])])])}const Ti=I("button-group",`
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
 `),Ze("default"),W("ghost",[Ze("primary"),Ze("info"),Ze("success"),Ze("warning"),Ze("error")])])])]),W("vertical",{flexDirection:"column"},[I("button",[V("&:first-child:not(:last-child)",`
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
 `),Je("default"),W("ghost",[Je("primary"),Je("info"),Je("success"),Je("warning"),Je("error")])])])]),Fi={size:{type:String,default:void 0},vertical:Boolean},Ni=le({name:"ButtonGroup",props:Fi,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:t}=Ve(e);return Uo("-button-group",Ti,n),he(Go,e),{rtlEnabled:Rt("ButtonGroup",t,n),mergedClsPrefix:n}},render(){const{mergedClsPrefix:e}=this;return c("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),_i=V([I("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),I("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Yt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Mi=Object.assign(Object.assign({},Oe.props),{to:Dt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Ai=le({name:"Select",props:Mi,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:t,namespaceRef:o,inlineThemeDisabled:r}=Ve(e),i=Oe("Select","-select",_i,Yo,e,n),l=P(e.defaultValue),a=de(e,"value"),s=it(a,l),f=P(!1),u=P(""),h=Vn(e,["items","options"]),p=P([]),b=P([]),g=O(()=>b.value.concat(p.value).concat(h.value)),A=O(()=>{const{filter:v}=e;if(v)return v;const{labelField:L,valueField:Q}=e;return(se,re)=>{if(!re)return!1;const ne=re[L];if(typeof ne=="string")return Et(se,ne);const ie=re[Q];return typeof ie=="string"?Et(se,ie):typeof ie=="number"?Et(se,String(ie)):!1}}),$=O(()=>{if(e.remote)return h.value;{const{value:v}=g,{value:L}=u;return!L.length||!e.filterable?v:Pi(v,A.value,L,e.childrenField)}}),k=O(()=>{const{valueField:v,childrenField:L}=e,Q=Ii(v,L);return rt($.value,Q)}),N=O(()=>Oi(g.value,e.valueField,e.childrenField)),_=P(!1),x=it(de(e,"show"),_),R=P(null),q=P(null),H=P(null),{localeRef:ee}=Fn("Select"),te=O(()=>{var v;return(v=e.placeholder)!==null&&v!==void 0?v:ee.value.placeholder}),G=[],ae=P(new Map),D=O(()=>{const{fallbackOption:v}=e;if(v===void 0){const{labelField:L,valueField:Q}=e;return se=>({[L]:String(se),[Q]:se})}return v===!1?!1:L=>Object.assign(v(L),{value:L})});function y(v){const L=e.remote,{value:Q}=ae,{value:se}=N,{value:re}=D,ne=[];return v.forEach(ie=>{if(se.has(ie))ne.push(se.get(ie));else if(L&&Q.has(ie))ne.push(Q.get(ie));else if(re){const we=re(ie);we&&ne.push(we)}}),ne}const C=O(()=>{if(e.multiple){const{value:v}=s;return Array.isArray(v)?y(v):[]}return null}),E=O(()=>{const{value:v}=s;return!e.multiple&&!Array.isArray(v)?v===null?null:y([v])[0]||null:null}),X=qo(e),{mergedSizeRef:K,mergedDisabledRef:j,mergedStatusRef:Y}=X;function Z(v,L){const{onChange:Q,"onUpdate:value":se,onUpdateValue:re}=e,{nTriggerFormChange:ne,nTriggerFormInput:ie}=X;Q&&be(Q,v,L),re&&be(re,v,L),se&&be(se,v,L),l.value=v,ne(),ie()}function F(v){const{onBlur:L}=e,{nTriggerFormBlur:Q}=X;L&&be(L,v),Q()}function m(){const{onClear:v}=e;v&&be(v)}function d(v){const{onFocus:L,showOnFocus:Q}=e,{nTriggerFormFocus:se}=X;L&&be(L,v),se(),Q&&Se()}function T(v){const{onSearch:L}=e;L&&be(L,v)}function J(v){const{onScroll:L}=e;L&&be(L,v)}function ze(){var v;const{remote:L,multiple:Q}=e;if(L){const{value:se}=ae;if(Q){const{valueField:re}=e;(v=C.value)===null||v===void 0||v.forEach(ne=>{se.set(ne[re],ne)})}else{const re=E.value;re&&se.set(re[e.valueField],re)}}}function oe(v){const{onUpdateShow:L,"onUpdate:show":Q}=e;L&&be(L,v),Q&&be(Q,v),_.value=v}function Se(){j.value||(oe(!0),_.value=!0,e.filterable&&dt())}function w(){oe(!1)}function _e(){u.value="",b.value=G}const xe=P(!1);function M(){e.filterable&&(xe.value=!0)}function U(){e.filterable&&(xe.value=!1,x.value||_e())}function fe(){j.value||(x.value?e.filterable?dt():w():Se())}function ye(v){var L,Q;!((Q=(L=H.value)===null||L===void 0?void 0:L.selfRef)===null||Q===void 0)&&Q.contains(v.relatedTarget)||(f.value=!1,F(v),w())}function Ie(v){d(v),f.value=!0}function Te(){f.value=!0}function Fe(v){var L;!((L=R.value)===null||L===void 0)&&L.$el.contains(v.relatedTarget)||(f.value=!1,F(v),w())}function Ke(){var v;(v=R.value)===null||v===void 0||v.focus(),w()}function He(v){var L;x.value&&(!((L=R.value)===null||L===void 0)&&L.$el.contains(Zo(v))||w())}function Ae(v){if(!Array.isArray(v))return[];if(D.value)return Array.from(v);{const{remote:L}=e,{value:Q}=N;if(L){const{value:se}=ae;return v.filter(re=>Q.has(re)||se.has(re))}else return v.filter(se=>Q.has(se))}}function $e(v){pe(v.rawNode)}function pe(v){if(j.value)return;const{tag:L,remote:Q,clearFilterAfterSelect:se,valueField:re}=e;if(L&&!Q){const{value:ne}=b,ie=ne[0]||null;if(ie){const we=p.value;we.length?we.push(ie):p.value=[ie],b.value=G}}if(Q&&ae.value.set(v[re],v),e.multiple){const ne=Ae(s.value),ie=ne.findIndex(we=>we===v[re]);if(~ie){if(ne.splice(ie,1),L&&!Q){const we=S(v[re]);~we&&(p.value.splice(we,1),se&&(u.value=""))}}else ne.push(v[re]),se&&(u.value="");Z(ne,y(ne))}else{if(L&&!Q){const ne=S(v[re]);~ne?p.value=[p.value[ne]]:p.value=G}st(),w(),Z(v[re],v)}}function S(v){return p.value.findIndex(Q=>Q[e.valueField]===v)}function B(v){x.value||Se();const{value:L}=v.target;u.value=L;const{tag:Q,remote:se}=e;if(T(L),Q&&!se){if(!L){b.value=G;return}const{onCreate:re}=e,ne=re?re(L):{[e.labelField]:L,[e.valueField]:L},{valueField:ie,labelField:we}=e;h.value.some(Ee=>Ee[ie]===ne[ie]||Ee[we]===ne[we])||p.value.some(Ee=>Ee[ie]===ne[ie]||Ee[we]===ne[we])?b.value=G:b.value=[ne]}}function me(v){v.stopPropagation();const{multiple:L}=e;!L&&e.filterable&&w(),m(),L?Z([],[]):Z(null,null)}function It(v){!Ge(v,"action")&&!Ge(v,"empty")&&!Ge(v,"header")&&v.preventDefault()}function Pt(v){J(v)}function at(v){var L,Q,se,re,ne;if(!e.keyboard){v.preventDefault();return}switch(v.key){case" ":if(e.filterable)break;v.preventDefault();case"Enter":if(!(!((L=R.value)===null||L===void 0)&&L.isComposing)){if(x.value){const ie=(Q=H.value)===null||Q===void 0?void 0:Q.getPendingTmNode();ie?$e(ie):e.filterable||(w(),st())}else if(Se(),e.tag&&xe.value){const ie=b.value[0];if(ie){const we=ie[e.valueField],{value:Ee}=s;e.multiple&&Array.isArray(Ee)&&Ee.includes(we)||pe(ie)}}}v.preventDefault();break;case"ArrowUp":if(v.preventDefault(),e.loading)return;x.value&&((se=H.value)===null||se===void 0||se.prev());break;case"ArrowDown":if(v.preventDefault(),e.loading)return;x.value?(re=H.value)===null||re===void 0||re.next():Se();break;case"Escape":x.value&&(Or(v),w()),(ne=R.value)===null||ne===void 0||ne.focus();break}}function st(){var v;(v=R.value)===null||v===void 0||v.focus()}function dt(){var v;(v=R.value)===null||v===void 0||v.focusInput()}function Ot(){var v;x.value&&((v=q.value)===null||v===void 0||v.syncPosition())}ze(),Be(de(e,"options"),ze);const Tt={focus:()=>{var v;(v=R.value)===null||v===void 0||v.focus()},focusInput:()=>{var v;(v=R.value)===null||v===void 0||v.focusInput()},blur:()=>{var v;(v=R.value)===null||v===void 0||v.blur()},blurInput:()=>{var v;(v=R.value)===null||v===void 0||v.blurInput()}},ct=O(()=>{const{self:{menuBoxShadow:v}}=i.value;return{"--n-menu-box-shadow":v}}),De=r?Xe("select",void 0,ct,e):void 0;return Object.assign(Object.assign({},Tt),{mergedStatus:Y,mergedClsPrefix:n,mergedBordered:t,namespace:o,treeMate:k,isMounted:Xo(),triggerRef:R,menuRef:H,pattern:u,uncontrolledShow:_,mergedShow:x,adjustedTo:Dt(e),uncontrolledValue:l,mergedValue:s,followerRef:q,localizedPlaceholder:te,selectedOption:E,selectedOptions:C,mergedSize:K,mergedDisabled:j,focused:f,activeWithoutMenuOpen:xe,inlineThemeDisabled:r,onTriggerInputFocus:M,onTriggerInputBlur:U,handleTriggerOrMenuResize:Ot,handleMenuFocus:Te,handleMenuBlur:Fe,handleMenuTabOut:Ke,handleTriggerClick:fe,handleToggle:$e,handleDeleteOption:pe,handlePatternInput:B,handleClear:me,handleTriggerBlur:ye,handleTriggerFocus:Ie,handleKeydown:at,handleMenuAfterLeave:_e,handleMenuClickOutside:He,handleMenuScroll:Pt,handleMenuKeydown:at,handleMenuMousedown:It,mergedTheme:i,cssVars:r?void 0:ct,themeClass:De==null?void 0:De.themeClass,onRender:De==null?void 0:De.onRender})},render(){return c("div",{class:`${this.mergedClsPrefix}-select`},c(Wn,null,{default:()=>[c(Un,null,{default:()=>c(zi,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),c(Gn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Dt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>c(tn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,t;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Ln(c(wi,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(t=this.menuProps)===null||t===void 0?void 0:t.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var o,r;return[(r=(o=this.$slots).empty)===null||r===void 0?void 0:r.call(o)]},header:()=>{var o,r;return[(r=(o=this.$slots).header)===null||r===void 0?void 0:r.call(o)]},action:()=>{var o,r;return[(r=(o=this.$slots).action)===null||r===void 0?void 0:r.call(o)]}}),this.displayDirective==="show"?[[Kn,this.mergedShow],[gn,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[gn,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),no=le({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return c("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),dn=We("n-dropdown-menu"),zt=We("n-dropdown"),In=We("n-dropdown-option");function Ut(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function $i(e){return e.type==="group"}function oo(e){return e.type==="divider"}function Ei(e){return e.type==="render"}const ro=le({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=ue(zt),{hoverKeyRef:t,keyboardKeyRef:o,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:l,animatedRef:a,mergedShowRef:s,renderLabelRef:f,renderIconRef:u,labelFieldRef:h,childrenFieldRef:p,renderOptionRef:b,nodePropsRef:g,menuPropsRef:A}=n,$=ue(In,null),k=ue(dn),N=ue(Nn),_=O(()=>e.tmNode.rawNode),x=O(()=>{const{value:K}=p;return Ut(e.tmNode.rawNode,K)}),R=O(()=>{const{disabled:K}=e.tmNode;return K}),q=O(()=>{if(!x.value)return!1;const{key:K,disabled:j}=e.tmNode;if(j)return!1;const{value:Y}=t,{value:Z}=o,{value:F}=r,{value:m}=i;return Y!==null?m.includes(K):Z!==null?m.includes(K)&&m[m.length-1]!==K:F!==null?m.includes(K):!1}),H=O(()=>o.value===null&&!a.value),ee=_r(q,300,H),te=O(()=>!!($!=null&&$.enteringSubmenuRef.value)),G=P(!1);he(In,{enteringSubmenuRef:G});function ae(){G.value=!0}function D(){G.value=!1}function y(){const{parentKey:K,tmNode:j}=e;j.disabled||s.value&&(r.value=K,o.value=null,t.value=j.key)}function C(){const{tmNode:K}=e;K.disabled||s.value&&t.value!==K.key&&y()}function E(K){if(e.tmNode.disabled||!s.value)return;const{relatedTarget:j}=K;j&&!Ge({target:j},"dropdownOption")&&!Ge({target:j},"scrollbarRail")&&(t.value=null)}function X(){const{value:K}=x,{tmNode:j}=e;s.value&&!K&&!j.disabled&&(n.doSelect(j.key,j.rawNode),n.doUpdateShow(!1))}return{labelField:h,renderLabel:f,renderIcon:u,siblingHasIcon:k.showIconRef,siblingHasSubmenu:k.hasSubmenuRef,menuProps:A,popoverBody:N,animated:a,mergedShowSubmenu:O(()=>ee.value&&!te.value),rawNode:_,hasSubmenu:x,pending:Pe(()=>{const{value:K}=i,{key:j}=e.tmNode;return K.includes(j)}),childActive:Pe(()=>{const{value:K}=l,{key:j}=e.tmNode,Y=K.findIndex(Z=>j===Z);return Y===-1?!1:Y<K.length-1}),active:Pe(()=>{const{value:K}=l,{key:j}=e.tmNode,Y=K.findIndex(Z=>j===Z);return Y===-1?!1:Y===K.length-1}),mergedDisabled:R,renderOption:b,nodeProps:g,handleClick:X,handleMouseMove:C,handleMouseEnter:y,handleMouseLeave:E,handleSubmenuBeforeEnter:ae,handleSubmenuAfterEnter:D}},render(){var e,n;const{animated:t,rawNode:o,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:l,siblingHasSubmenu:a,renderLabel:s,renderIcon:f,renderOption:u,nodeProps:h,props:p,scrollable:b}=this;let g=null;if(r){const N=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,o,o.children);g=c(io,Object.assign({},N,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const A={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},$=h==null?void 0:h(o),k=c("div",Object.assign({class:[`${i}-dropdown-option`,$==null?void 0:$.class],"data-dropdown-option":!0},$),c("div",kt(A,p),[c("div",{class:[`${i}-dropdown-option-body__prefix`,l&&`${i}-dropdown-option-body__prefix--show-icon`]},[f?f(o):Re(o.icon)]),c("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},s?s(o):Re((n=o[this.labelField])!==null&&n!==void 0?n:o.title)),c("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,a&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?c(jt,null,{default:()=>c(Hr,null)}):null)]),this.hasSubmenu?c(Wn,null,{default:()=>[c(Un,null,{default:()=>c("div",{class:`${i}-dropdown-offset-container`},c(Gn,{show:this.mergedShowSubmenu,placement:this.placement,to:b&&this.popoverBody||void 0,teleportDisabled:!b},{default:()=>c("div",{class:`${i}-dropdown-menu-wrapper`},t?c(tn,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>g}):g)}))})]}):null);return u?u({node:k,option:o}):k}}),Bi=le({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=ue(dn),{renderLabelRef:t,labelFieldRef:o,nodePropsRef:r,renderOptionRef:i}=ue(zt);return{labelField:o,showIcon:e,hasSubmenu:n,renderLabel:t,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:o,nodeProps:r,renderLabel:i,renderOption:l}=this,{rawNode:a}=this.tmNode,s=c("div",Object.assign({class:`${n}-dropdown-option`},r==null?void 0:r(a)),c("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},c("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,o&&`${n}-dropdown-option-body__prefix--show-icon`]},Re(a.icon)),c("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(a):Re((e=a.title)!==null&&e!==void 0?e:a[this.labelField])),c("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:s,option:a}):s}}),Li=le({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:o}=e;return c(nn,null,c(Bi,{clsPrefix:t,tmNode:e,key:e.key}),o==null?void 0:o.map(r=>{const{rawNode:i}=r;return i.show===!1?null:oo(i)?c(no,{clsPrefix:t,key:r.key}):r.isGroup?(Jo("dropdown","`group` node is not allowed to be put in `group` node."),null):c(ro,{clsPrefix:t,tmNode:r,parentKey:n,key:r.key})}))}}),Ki=le({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return c("div",n,[e==null?void 0:e()])}}),io=le({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=ue(zt);he(dn,{showIconRef:O(()=>{const r=n.value;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:s})=>r?r(s):s.icon);const{rawNode:a}=i;return r?r(a):a.icon})}),hasSubmenuRef:O(()=>{const{value:r}=t;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:s})=>Ut(s,r));const{rawNode:a}=i;return Ut(a,r)})})});const o=P(null);return he(Qo,null),he(er,null),he(Nn,o),{bodyRef:o}},render(){const{parentKey:e,clsPrefix:n,scrollable:t}=this,o=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Ei(i)?c(Ki,{tmNode:r,key:r.key}):oo(i)?c(no,{clsPrefix:n,key:r.key}):$i(i)?c(Li,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key}):c(ro,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:t})});return c("div",{class:[`${n}-dropdown-menu`,t&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},t?c(tr,{contentClass:`${n}-dropdown-menu__content`},{default:()=>o}):o,this.showArrow?kr({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Hi=I("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Yt(),I("dropdown-option",`
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
 `),ke("disabled",[W("pending",`
 color: var(--n-option-text-color-hover);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),V("&::before","background-color: var(--n-option-color-hover);")]),W("active",`
 color: var(--n-option-text-color-active);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),V("&::before","background-color: var(--n-option-color-active);")]),W("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),W("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),W("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[z("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[W("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),z("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[W("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),I("icon",`
 font-size: var(--n-option-icon-size);
 `)]),z("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),z("suffix",`
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
 `,[W("has-submenu",`
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
 `),W("scrollable",[z("content",`
 padding: var(--n-padding);
 `)])]),Di={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},ji=Object.keys(qn),Vi=Object.assign(Object.assign(Object.assign({},qn),Di),Oe.props),Wi=le({name:"Dropdown",inheritAttrs:!1,props:Vi,setup(e){const n=P(!1),t=it(de(e,"show"),n),o=O(()=>{const{keyField:D,childrenField:y}=e;return rt(e.options,{getKey(C){return C[D]},getDisabled(C){return C.disabled===!0},getIgnored(C){return C.type==="divider"||C.type==="render"},getChildren(C){return C[y]}})}),r=O(()=>o.value.treeNodes),i=P(null),l=P(null),a=P(null),s=O(()=>{var D,y,C;return(C=(y=(D=i.value)!==null&&D!==void 0?D:l.value)!==null&&y!==void 0?y:a.value)!==null&&C!==void 0?C:null}),f=O(()=>o.value.getPath(s.value).keyPath),u=O(()=>o.value.getPath(e.value).keyPath),h=Pe(()=>e.keyboard&&t.value);Mr({keydown:{ArrowUp:{prevent:!0,handler:R},ArrowRight:{prevent:!0,handler:x},ArrowDown:{prevent:!0,handler:q},ArrowLeft:{prevent:!0,handler:_},Enter:{prevent:!0,handler:H},Escape:N}},h);const{mergedClsPrefixRef:p,inlineThemeDisabled:b}=Ve(e),g=Oe("Dropdown","-dropdown",Hi,nr,e,p);he(zt,{labelFieldRef:de(e,"labelField"),childrenFieldRef:de(e,"childrenField"),renderLabelRef:de(e,"renderLabel"),renderIconRef:de(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:l,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:f,activeKeyPathRef:u,animatedRef:de(e,"animated"),mergedShowRef:t,nodePropsRef:de(e,"nodeProps"),renderOptionRef:de(e,"renderOption"),menuPropsRef:de(e,"menuProps"),doSelect:A,doUpdateShow:$}),Be(t,D=>{!e.animated&&!D&&k()});function A(D,y){const{onSelect:C}=e;C&&be(C,D,y)}function $(D){const{"onUpdate:show":y,onUpdateShow:C}=e;y&&be(y,D),C&&be(C,D),n.value=D}function k(){i.value=null,l.value=null,a.value=null}function N(){$(!1)}function _(){te("left")}function x(){te("right")}function R(){te("up")}function q(){te("down")}function H(){const D=ee();D!=null&&D.isLeaf&&t.value&&(A(D.key,D.rawNode),$(!1))}function ee(){var D;const{value:y}=o,{value:C}=s;return!y||C===null?null:(D=y.getNode(C))!==null&&D!==void 0?D:null}function te(D){const{value:y}=s,{value:{getFirstAvailableNode:C}}=o;let E=null;if(y===null){const X=C();X!==null&&(E=X.key)}else{const X=ee();if(X){let K;switch(D){case"down":K=X.getNext();break;case"up":K=X.getPrev();break;case"right":K=X.getChild();break;case"left":K=X.getParent();break}K&&(E=K.key)}}E!==null&&(i.value=null,l.value=E)}const G=O(()=>{const{size:D,inverted:y}=e,{common:{cubicBezierEaseInOut:C},self:E}=g.value,{padding:X,dividerColor:K,borderRadius:j,optionOpacityDisabled:Y,[ce("optionIconSuffixWidth",D)]:Z,[ce("optionSuffixWidth",D)]:F,[ce("optionIconPrefixWidth",D)]:m,[ce("optionPrefixWidth",D)]:d,[ce("fontSize",D)]:T,[ce("optionHeight",D)]:J,[ce("optionIconSize",D)]:ze}=E,oe={"--n-bezier":C,"--n-font-size":T,"--n-padding":X,"--n-border-radius":j,"--n-option-height":J,"--n-option-prefix-width":d,"--n-option-icon-prefix-width":m,"--n-option-suffix-width":F,"--n-option-icon-suffix-width":Z,"--n-option-icon-size":ze,"--n-divider-color":K,"--n-option-opacity-disabled":Y};return y?(oe["--n-color"]=E.colorInverted,oe["--n-option-color-hover"]=E.optionColorHoverInverted,oe["--n-option-color-active"]=E.optionColorActiveInverted,oe["--n-option-text-color"]=E.optionTextColorInverted,oe["--n-option-text-color-hover"]=E.optionTextColorHoverInverted,oe["--n-option-text-color-active"]=E.optionTextColorActiveInverted,oe["--n-option-text-color-child-active"]=E.optionTextColorChildActiveInverted,oe["--n-prefix-color"]=E.prefixColorInverted,oe["--n-suffix-color"]=E.suffixColorInverted,oe["--n-group-header-text-color"]=E.groupHeaderTextColorInverted):(oe["--n-color"]=E.color,oe["--n-option-color-hover"]=E.optionColorHover,oe["--n-option-color-active"]=E.optionColorActive,oe["--n-option-text-color"]=E.optionTextColor,oe["--n-option-text-color-hover"]=E.optionTextColorHover,oe["--n-option-text-color-active"]=E.optionTextColorActive,oe["--n-option-text-color-child-active"]=E.optionTextColorChildActive,oe["--n-prefix-color"]=E.prefixColor,oe["--n-suffix-color"]=E.suffixColor,oe["--n-group-header-text-color"]=E.groupHeaderTextColor),oe}),ae=b?Xe("dropdown",O(()=>`${e.size[0]}${e.inverted?"i":""}`),G,e):void 0;return{mergedClsPrefix:p,mergedTheme:g,tmNodes:r,mergedShow:t,handleAfterLeave:()=>{e.animated&&k()},doUpdateShow:$,cssVars:b?void 0:G,themeClass:ae==null?void 0:ae.themeClass,onRender:ae==null?void 0:ae.onRender}},render(){const e=(o,r,i,l,a)=>{var s;const{mergedClsPrefix:f,menuProps:u}=this;(s=this.onRender)===null||s===void 0||s.call(this);const h=(u==null?void 0:u(void 0,this.tmNodes.map(b=>b.rawNode)))||{},p={ref:Nr(r),class:[o,`${f}-dropdown`,this.themeClass],clsPrefix:f,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:a};return c(io,kt(this.$attrs,p,h))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return c(ln,Object.assign({},gt(this.$props,ji),t),{trigger:()=>{var o,r;return(r=(o=this.$slots).default)===null||r===void 0?void 0:r.call(o)}})}}),Ui=We("n-layout-sider"),lt=We("n-menu"),cn=We("n-submenu"),un=We("n-menu-item-group"),mt=8;function fn(e){const n=ue(lt),{props:t,mergedCollapsedRef:o}=n,r=ue(cn,null),i=ue(un,null),l=O(()=>t.mode==="horizontal"),a=O(()=>l.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=O(()=>{var p;return Math.max((p=t.collapsedIconSize)!==null&&p!==void 0?p:t.iconSize,t.iconSize)}),f=O(()=>{var p;return!l.value&&e.root&&o.value&&(p=t.collapsedIconSize)!==null&&p!==void 0?p:t.iconSize}),u=O(()=>{if(l.value)return;const{collapsedWidth:p,indent:b,rootIndent:g}=t,{root:A,isGroup:$}=e,k=g===void 0?b:g;return A?o.value?p/2-s.value/2:k:i&&typeof i.paddingLeftRef.value=="number"?b/2+i.paddingLeftRef.value:r&&typeof r.paddingLeftRef.value=="number"?($?b/2:b)+r.paddingLeftRef.value:0}),h=O(()=>{const{collapsedWidth:p,indent:b,rootIndent:g}=t,{value:A}=s,{root:$}=e;return l.value||!$||!o.value?mt:(g===void 0?b:g)+A+mt-(p+A)/2});return{dropdownPlacement:a,activeIconSize:f,maxIconSize:s,paddingLeft:u,iconMarginRight:h,NMenu:n,NSubmenu:r}}const hn={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},lo=Object.assign(Object.assign({},hn),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Gi=le({name:"MenuOptionGroup",props:lo,setup(e){he(cn,null);const n=fn(e);he(un,{paddingLeftRef:n.paddingLeft});const{mergedClsPrefixRef:t,props:o}=ue(lt);return function(){const{value:r}=t,i=n.paddingLeft.value,{nodeProps:l}=o,a=l==null?void 0:l(e.tmNode.rawNode);return c("div",{class:`${r}-menu-item-group`,role:"group"},c("div",Object.assign({},a,{class:[`${r}-menu-item-group-title`,a==null?void 0:a.class],style:[(a==null?void 0:a.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),Re(e.title),e.extra?c(nn,null," ",Re(e.extra)):null),c("div",null,e.tmNodes.map(s=>vn(s,o))))}}}),ao=le({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:n}=ue(lt);return{menuProps:n,style:O(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:O(()=>{const{maxIconSize:t,activeIconSize:o,iconMarginRight:r}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${o}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:n,menuProps:{renderIcon:t,renderLabel:o,renderExtra:r,expandIcon:i}}=this,l=t?t(n.rawNode):Re(this.icon);return c("div",{onClick:a=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,a)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},l&&c("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[l]),c("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:o?o(n.rawNode):Re(this.title),this.extra||r?c("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(n.rawNode):Re(this.extra)):null),this.showArrow?c(Xt,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(n.rawNode):c(jr,null)}):null)}}),so=Object.assign(Object.assign({},hn),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),Gt=le({name:"Submenu",props:so,setup(e){const n=fn(e),{NMenu:t,NSubmenu:o}=n,{props:r,mergedCollapsedRef:i,mergedThemeRef:l}=t,a=O(()=>{const{disabled:p}=e;return o!=null&&o.mergedDisabledRef.value||r.disabled?!0:p}),s=P(!1);he(cn,{paddingLeftRef:n.paddingLeft,mergedDisabledRef:a}),he(un,null);function f(){const{onClick:p}=e;p&&p()}function u(){a.value||(i.value||t.toggleExpand(e.internalKey),f())}function h(p){s.value=p}return{menuProps:r,mergedTheme:l,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,iconMarginRight:n.iconMarginRight,dropdownPlacement:n.dropdownPlacement,dropdownShow:s,paddingLeft:n.paddingLeft,mergedDisabled:a,mergedValue:t.mergedValueRef,childActive:Pe(()=>{var p;return(p=e.virtualChildActive)!==null&&p!==void 0?p:t.activePathRef.value.includes(e.internalKey)}),collapsed:O(()=>r.mode==="horizontal"?!1:i.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:O(()=>!a.value&&(r.mode==="horizontal"||i.value)),handlePopoverShowChange:h,handleClick:u}},render(){var e;const{mergedClsPrefix:n,menuProps:{renderIcon:t,renderLabel:o}}=this,r=()=>{const{isHorizontal:l,paddingLeft:a,collapsed:s,mergedDisabled:f,maxIconSize:u,activeIconSize:h,title:p,childActive:b,icon:g,handleClick:A,menuProps:{nodeProps:$},dropdownShow:k,iconMarginRight:N,tmNode:_,mergedClsPrefix:x,isEllipsisPlaceholder:R,extra:q}=this,H=$==null?void 0:$(_.rawNode);return c("div",Object.assign({},H,{class:[`${x}-menu-item`,H==null?void 0:H.class],role:"menuitem"}),c(ao,{tmNode:_,paddingLeft:a,collapsed:s,disabled:f,iconMarginRight:N,maxIconSize:u,activeIconSize:h,title:p,extra:q,showArrow:!l,childActive:b,clsPrefix:x,icon:g,hover:k,onClick:A,isEllipsisPlaceholder:R}))},i=()=>c(or,null,{default:()=>{const{tmNodes:l,collapsed:a}=this;return a?null:c("div",{class:`${n}-submenu-children`,role:"menu"},l.map(s=>vn(s,this.menuProps)))}});return this.root?c(Wi,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:o}),{default:()=>c("div",{class:`${n}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},r(),this.isHorizontal?null:i())}):c("div",{class:`${n}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},r(),i())}}),co=Object.assign(Object.assign({},hn),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),qi=le({name:"MenuOption",props:co,setup(e){const n=fn(e),{NSubmenu:t,NMenu:o}=n,{props:r,mergedClsPrefixRef:i,mergedCollapsedRef:l}=o,a=t?t.mergedDisabledRef:{value:!1},s=O(()=>a.value||e.disabled);function f(h){const{onClick:p}=e;p&&p(h)}function u(h){s.value||(o.doSelect(e.internalKey,e.tmNode.rawNode),f(h))}return{mergedClsPrefix:i,dropdownPlacement:n.dropdownPlacement,paddingLeft:n.paddingLeft,iconMarginRight:n.iconMarginRight,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,mergedTheme:o.mergedThemeRef,menuProps:r,dropdownEnabled:Pe(()=>e.root&&l.value&&r.mode!=="horizontal"&&!s.value),selected:Pe(()=>o.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:u}},render(){const{mergedClsPrefix:e,mergedTheme:n,tmNode:t,menuProps:{renderLabel:o,nodeProps:r}}=this,i=r==null?void 0:r(t.rawNode);return c("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),c(Rr,{theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>o?o(t.rawNode):Re(this.title),trigger:()=>c(ao,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Xi=le({name:"MenuDivider",setup(){const e=ue(lt),{mergedClsPrefixRef:n,isHorizontalRef:t}=e;return()=>t.value?null:c("div",{class:`${n.value}-menu-divider`})}}),Yi=an(lo),Zi=an(co),Ji=an(so);function qt(e){return e.type==="divider"||e.type==="render"}function Qi(e){return e.type==="divider"}function vn(e,n){const{rawNode:t}=e,{show:o}=t;if(o===!1)return null;if(qt(t))return Qi(t)?c(Xi,Object.assign({key:e.key},t.props)):null;const{labelField:r}=n,{key:i,level:l,isGroup:a}=e,s=Object.assign(Object.assign({},t),{title:t.title||t[r],extra:t.titleExtra||t.extra,key:i,internalKey:i,level:l,root:l===0,isGroup:a});return e.children?e.isGroup?c(Gi,gt(s,Yi,{tmNode:e,tmNodes:e.children,key:i})):c(Gt,gt(s,Ji,{key:i,rawNodes:t[n.childrenField],tmNodes:e.children,tmNode:e})):c(qi,gt(s,Zi,{key:i,tmNode:e}))}const Pn=[V("&::before","background-color: var(--n-item-color-hover);"),z("arrow",`
 color: var(--n-arrow-color-hover);
 `),z("icon",`
 color: var(--n-item-icon-color-hover);
 `),I("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[V("a",`
 color: var(--n-item-text-color-hover);
 `),z("extra",`
 color: var(--n-item-text-color-hover);
 `)])],On=[z("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),I("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[V("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),z("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],el=V([I("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[W("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[I("submenu","margin: 0;"),I("menu-item","margin: 0;"),I("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[V("&::before","display: none;"),W("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),I("menu-item-content",[W("selected",[z("icon","color: var(--n-item-icon-color-active-horizontal);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[V("a","color: var(--n-item-text-color-active-horizontal);"),z("extra","color: var(--n-item-text-color-active-horizontal);")])]),W("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[I("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[V("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),z("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),z("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ke("disabled",[ke("selected, child-active",[V("&:focus-within",On)]),W("selected",[Ue(null,[z("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[V("a","color: var(--n-item-text-color-active-hover-horizontal);"),z("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),W("child-active",[Ue(null,[z("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[V("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),z("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),Ue("border-bottom: 2px solid var(--n-border-color-horizontal);",On)]),I("menu-item-content-header",[V("a","color: var(--n-item-text-color-horizontal);")])])]),ke("responsive",[I("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),W("collapsed",[I("menu-item-content",[W("selected",[V("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),I("menu-item-content-header","opacity: 0;"),z("arrow","opacity: 0;"),z("icon","color: var(--n-item-icon-color-collapsed);")])]),I("menu-item",`
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
 `),W("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),W("collapsed",[z("arrow","transform: rotate(0);")]),W("selected",[V("&::before","background-color: var(--n-item-color-active);"),z("arrow","color: var(--n-arrow-color-active);"),z("icon","color: var(--n-item-icon-color-active);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[V("a","color: var(--n-item-text-color-active);"),z("extra","color: var(--n-item-text-color-active);")])]),W("child-active",[I("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[V("a",`
 color: var(--n-item-text-color-child-active);
 `),z("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),z("arrow",`
 color: var(--n-arrow-color-child-active);
 `),z("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ke("disabled",[ke("selected, child-active",[V("&:focus-within",Pn)]),W("selected",[Ue(null,[z("arrow","color: var(--n-arrow-color-active-hover);"),z("icon","color: var(--n-item-icon-color-active-hover);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[V("a","color: var(--n-item-text-color-active-hover);"),z("extra","color: var(--n-item-text-color-active-hover);")])])]),W("child-active",[Ue(null,[z("arrow","color: var(--n-arrow-color-child-active-hover);"),z("icon","color: var(--n-item-icon-color-child-active-hover);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[V("a","color: var(--n-item-text-color-child-active-hover);"),z("extra","color: var(--n-item-text-color-child-active-hover);")])])]),W("selected",[Ue(null,[V("&::before","background-color: var(--n-item-color-active-hover);")])]),Ue(null,Pn)]),z("icon",`
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
 `),z("arrow",`
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
 `)]),z("extra",`
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
 `,[zr({duration:".2s"})])]),I("menu-item-group",[I("menu-item-group-title",`
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
 `)]);function Ue(e,n){return[W("hover",e,n),V("&:hover",e,n)]}const tl=Object.assign(Object.assign({},Oe.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),nl=le({name:"Menu",inheritAttrs:!1,props:tl,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=Ve(e),o=Oe("Menu","-menu",el,ir,e,n),r=ue(Ui,null),i=O(()=>{var F;const{collapsed:m}=e;if(m!==void 0)return m;if(r){const{collapseModeRef:d,collapsedRef:T}=r;if(d.value==="width")return(F=T.value)!==null&&F!==void 0?F:!1}return!1}),l=O(()=>{const{keyField:F,childrenField:m,disabledField:d}=e;return rt(e.items||e.options,{getIgnored(T){return qt(T)},getChildren(T){return T[m]},getDisabled(T){return T[d]},getKey(T){var J;return(J=T[F])!==null&&J!==void 0?J:T.name}})}),a=O(()=>new Set(l.value.treeNodes.map(F=>F.key))),{watchProps:s}=e,f=P(null);s!=null&&s.includes("defaultValue")?Kt(()=>{f.value=e.defaultValue}):f.value=e.defaultValue;const u=de(e,"value"),h=it(u,f),p=P([]),b=()=>{p.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(h.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?Kt(b):b();const g=Vn(e,["expandedNames","expandedKeys"]),A=it(g,p),$=O(()=>l.value.treeNodes),k=O(()=>l.value.getPath(h.value).keyPath);he(lt,{props:e,mergedCollapsedRef:i,mergedThemeRef:o,mergedValueRef:h,mergedExpandedKeysRef:A,activePathRef:k,mergedClsPrefixRef:n,isHorizontalRef:O(()=>e.mode==="horizontal"),invertedRef:de(e,"inverted"),doSelect:N,toggleExpand:x});function N(F,m){const{"onUpdate:value":d,onUpdateValue:T,onSelect:J}=e;T&&be(T,F,m),d&&be(d,F,m),J&&be(J,F,m),f.value=F}function _(F){const{"onUpdate:expandedKeys":m,onUpdateExpandedKeys:d,onExpandedNamesChange:T,onOpenNamesChange:J}=e;m&&be(m,F),d&&be(d,F),T&&be(T,F),J&&be(J,F),p.value=F}function x(F){const m=Array.from(A.value),d=m.findIndex(T=>T===F);if(~d)m.splice(d,1);else{if(e.accordion&&a.value.has(F)){const T=m.findIndex(J=>a.value.has(J));T>-1&&m.splice(T,1)}m.push(F)}_(m)}const R=F=>{const m=l.value.getPath(F??h.value,{includeSelf:!1}).keyPath;if(!m.length)return;const d=Array.from(A.value),T=new Set([...d,...m]);e.accordion&&a.value.forEach(J=>{T.has(J)&&!m.includes(J)&&T.delete(J)}),_(Array.from(T))},q=O(()=>{const{inverted:F}=e,{common:{cubicBezierEaseInOut:m},self:d}=o.value,{borderRadius:T,borderColorHorizontal:J,fontSize:ze,itemHeight:oe,dividerColor:Se}=d,w={"--n-divider-color":Se,"--n-bezier":m,"--n-font-size":ze,"--n-border-color-horizontal":J,"--n-border-radius":T,"--n-item-height":oe};return F?(w["--n-group-text-color"]=d.groupTextColorInverted,w["--n-color"]=d.colorInverted,w["--n-item-text-color"]=d.itemTextColorInverted,w["--n-item-text-color-hover"]=d.itemTextColorHoverInverted,w["--n-item-text-color-active"]=d.itemTextColorActiveInverted,w["--n-item-text-color-child-active"]=d.itemTextColorChildActiveInverted,w["--n-item-text-color-child-active-hover"]=d.itemTextColorChildActiveInverted,w["--n-item-text-color-active-hover"]=d.itemTextColorActiveHoverInverted,w["--n-item-icon-color"]=d.itemIconColorInverted,w["--n-item-icon-color-hover"]=d.itemIconColorHoverInverted,w["--n-item-icon-color-active"]=d.itemIconColorActiveInverted,w["--n-item-icon-color-active-hover"]=d.itemIconColorActiveHoverInverted,w["--n-item-icon-color-child-active"]=d.itemIconColorChildActiveInverted,w["--n-item-icon-color-child-active-hover"]=d.itemIconColorChildActiveHoverInverted,w["--n-item-icon-color-collapsed"]=d.itemIconColorCollapsedInverted,w["--n-item-text-color-horizontal"]=d.itemTextColorHorizontalInverted,w["--n-item-text-color-hover-horizontal"]=d.itemTextColorHoverHorizontalInverted,w["--n-item-text-color-active-horizontal"]=d.itemTextColorActiveHorizontalInverted,w["--n-item-text-color-child-active-horizontal"]=d.itemTextColorChildActiveHorizontalInverted,w["--n-item-text-color-child-active-hover-horizontal"]=d.itemTextColorChildActiveHoverHorizontalInverted,w["--n-item-text-color-active-hover-horizontal"]=d.itemTextColorActiveHoverHorizontalInverted,w["--n-item-icon-color-horizontal"]=d.itemIconColorHorizontalInverted,w["--n-item-icon-color-hover-horizontal"]=d.itemIconColorHoverHorizontalInverted,w["--n-item-icon-color-active-horizontal"]=d.itemIconColorActiveHorizontalInverted,w["--n-item-icon-color-active-hover-horizontal"]=d.itemIconColorActiveHoverHorizontalInverted,w["--n-item-icon-color-child-active-horizontal"]=d.itemIconColorChildActiveHorizontalInverted,w["--n-item-icon-color-child-active-hover-horizontal"]=d.itemIconColorChildActiveHoverHorizontalInverted,w["--n-arrow-color"]=d.arrowColorInverted,w["--n-arrow-color-hover"]=d.arrowColorHoverInverted,w["--n-arrow-color-active"]=d.arrowColorActiveInverted,w["--n-arrow-color-active-hover"]=d.arrowColorActiveHoverInverted,w["--n-arrow-color-child-active"]=d.arrowColorChildActiveInverted,w["--n-arrow-color-child-active-hover"]=d.arrowColorChildActiveHoverInverted,w["--n-item-color-hover"]=d.itemColorHoverInverted,w["--n-item-color-active"]=d.itemColorActiveInverted,w["--n-item-color-active-hover"]=d.itemColorActiveHoverInverted,w["--n-item-color-active-collapsed"]=d.itemColorActiveCollapsedInverted):(w["--n-group-text-color"]=d.groupTextColor,w["--n-color"]=d.color,w["--n-item-text-color"]=d.itemTextColor,w["--n-item-text-color-hover"]=d.itemTextColorHover,w["--n-item-text-color-active"]=d.itemTextColorActive,w["--n-item-text-color-child-active"]=d.itemTextColorChildActive,w["--n-item-text-color-child-active-hover"]=d.itemTextColorChildActiveHover,w["--n-item-text-color-active-hover"]=d.itemTextColorActiveHover,w["--n-item-icon-color"]=d.itemIconColor,w["--n-item-icon-color-hover"]=d.itemIconColorHover,w["--n-item-icon-color-active"]=d.itemIconColorActive,w["--n-item-icon-color-active-hover"]=d.itemIconColorActiveHover,w["--n-item-icon-color-child-active"]=d.itemIconColorChildActive,w["--n-item-icon-color-child-active-hover"]=d.itemIconColorChildActiveHover,w["--n-item-icon-color-collapsed"]=d.itemIconColorCollapsed,w["--n-item-text-color-horizontal"]=d.itemTextColorHorizontal,w["--n-item-text-color-hover-horizontal"]=d.itemTextColorHoverHorizontal,w["--n-item-text-color-active-horizontal"]=d.itemTextColorActiveHorizontal,w["--n-item-text-color-child-active-horizontal"]=d.itemTextColorChildActiveHorizontal,w["--n-item-text-color-child-active-hover-horizontal"]=d.itemTextColorChildActiveHoverHorizontal,w["--n-item-text-color-active-hover-horizontal"]=d.itemTextColorActiveHoverHorizontal,w["--n-item-icon-color-horizontal"]=d.itemIconColorHorizontal,w["--n-item-icon-color-hover-horizontal"]=d.itemIconColorHoverHorizontal,w["--n-item-icon-color-active-horizontal"]=d.itemIconColorActiveHorizontal,w["--n-item-icon-color-active-hover-horizontal"]=d.itemIconColorActiveHoverHorizontal,w["--n-item-icon-color-child-active-horizontal"]=d.itemIconColorChildActiveHorizontal,w["--n-item-icon-color-child-active-hover-horizontal"]=d.itemIconColorChildActiveHoverHorizontal,w["--n-arrow-color"]=d.arrowColor,w["--n-arrow-color-hover"]=d.arrowColorHover,w["--n-arrow-color-active"]=d.arrowColorActive,w["--n-arrow-color-active-hover"]=d.arrowColorActiveHover,w["--n-arrow-color-child-active"]=d.arrowColorChildActive,w["--n-arrow-color-child-active-hover"]=d.arrowColorChildActiveHover,w["--n-item-color-hover"]=d.itemColorHover,w["--n-item-color-active"]=d.itemColorActive,w["--n-item-color-active-hover"]=d.itemColorActiveHover,w["--n-item-color-active-collapsed"]=d.itemColorActiveCollapsed),w}),H=t?Xe("menu",O(()=>e.inverted?"a":"b"),q,e):void 0,ee=rr(),te=P(null),G=P(null);let ae=!0;const D=()=>{var F;ae?ae=!1:(F=te.value)===null||F===void 0||F.sync({showAllItemsBeforeCalculate:!0})};function y(){return document.getElementById(ee)}const C=P(-1);function E(F){C.value=e.options.length-F}function X(F){F||(C.value=-1)}const K=O(()=>{const F=C.value;return{children:F===-1?[]:e.options.slice(F)}}),j=O(()=>{const{childrenField:F,disabledField:m,keyField:d}=e;return rt([K.value],{getIgnored(T){return qt(T)},getChildren(T){return T[F]},getDisabled(T){return T[m]},getKey(T){var J;return(J=T[d])!==null&&J!==void 0?J:T.name}})}),Y=O(()=>rt([{}]).treeNodes[0]);function Z(){var F;if(C.value===-1)return c(Gt,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:Y.value,domId:ee,isEllipsisPlaceholder:!0});const m=j.value.treeNodes[0],d=k.value,T=!!(!((F=m.children)===null||F===void 0)&&F.some(J=>d.includes(J.key)));return c(Gt,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:T,tmNode:m,domId:ee,rawNodes:m.rawNode.children||[],tmNodes:m.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:n,controlledExpandedKeys:g,uncontrolledExpanededKeys:p,mergedExpandedKeys:A,uncontrolledValue:f,mergedValue:h,activePath:k,tmNodes:$,mergedTheme:o,mergedCollapsed:i,cssVars:t?void 0:q,themeClass:H==null?void 0:H.themeClass,overflowRef:te,counterRef:G,updateCounter:()=>{},onResize:D,onUpdateOverflow:X,onUpdateCount:E,renderCounter:Z,getCounter:y,onRender:H==null?void 0:H.onRender,showOption:R,deriveResponsiveState:D}},render(){const{mergedClsPrefix:e,mode:n,themeClass:t,onRender:o}=this;o==null||o();const r=()=>this.tmNodes.map(s=>vn(s,this.$props)),l=n==="horizontal"&&this.responsive,a=()=>c("div",kt(this.$attrs,{role:n==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${n}`,l&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),l?c(Vt,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:r,counter:this.renderCounter}):r());return l?c(Lt,{onResize:this.onResize},{default:a}):a()}}),ol={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 192 512"},rl=je("path",{d:"M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z",fill:"currentColor"},null,-1),il=[rl],ll=le({name:"CaretLeft",render:function(n,t){return qe(),on("svg",ol,il)}}),al={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 192 512"},sl=je("path",{d:"M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z",fill:"currentColor"},null,-1),dl=[sl],cl=le({name:"CaretRight",render:function(n,t){return qe(),on("svg",al,dl)}}),ul=le({__name:"Menu",props:{disableSwitch:{type:Boolean}},setup(e){const n=e,t=ue(_n),o=ue(Zt),r=[{label:"声笔简码",value:"sbjm"},{label:"声笔拼音",value:"sbpy"},{label:"声笔飞码",value:"sbfm"},{label:"声笔飞单",value:"sbfd"},{label:"声笔飞讯",value:"sbfx"},{label:"声笔小鹤",value:"sbxh"},{label:"声笔自然",value:"sbzr"}],i=ue(Jt),l=ue(Mn),a=ue(Qt),s=ue(An);function f(){nt().focus()}function u(h){f(),o(h)}return(h,p)=>(qe(),xt(ve(Dn),null,{default:Ne(()=>[Ce(ve(Ai),{style:{width:"160px"},value:ve(t),options:r,loading:ve(i),"onUpdate:value":u,disabled:n.disableSwitch},null,8,["value","loading","disabled"]),Ce(ve(Ni),{class:"square-group",onClick:f},{default:Ne(()=>[Ce(ve(wt),{secondary:"",onClick:ve(a)},{default:Ne(()=>[Me(ot(ve(l)?"En":"中"),1)]),_:1},8,["onClick"]),Ce(ve(wt),{secondary:"",disabled:ve(l),onClick:p[0]||(p[0]=()=>{})},{default:Ne(()=>[Me(ot(ve(s)?".":"。"),1)]),_:1},8,["disabled"])]),_:1})]),_:1}))}});var uo={exports:{}};(function(e){(function(){var n=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],t=typeof window<"u",o=t&&window.mozInnerScreenX!=null;function r(i,l,a){if(!t)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var s=a&&a.debug||!1;if(s){var f=document.querySelector("#input-textarea-caret-position-mirror-div");f&&f.parentNode.removeChild(f)}var u=document.createElement("div");u.id="input-textarea-caret-position-mirror-div",document.body.appendChild(u);var h=u.style,p=window.getComputedStyle?window.getComputedStyle(i):i.currentStyle,b=i.nodeName==="INPUT";h.whiteSpace="pre-wrap",b||(h.wordWrap="break-word"),h.position="absolute",s||(h.visibility="hidden"),n.forEach(function($){b&&$==="lineHeight"?h.lineHeight=p.height:h[$]=p[$]}),o?i.scrollHeight>parseInt(p.height)&&(h.overflowY="scroll"):h.overflow="hidden",u.textContent=i.value.substring(0,l),b&&(u.textContent=u.textContent.replace(/\s/g," "));var g=document.createElement("span");g.textContent=i.value.substring(l)||".",u.appendChild(g);var A={top:g.offsetTop+parseInt(p.borderTopWidth),left:g.offsetLeft+parseInt(p.borderLeftWidth),height:parseInt(p.lineHeight)};return s?g.style.backgroundColor="#aaa":document.body.removeChild(u),A}e.exports=r})()})(uo);var fl=uo.exports;const hl=Fr(fl),vl=le({__name:"Panel",props:{debugMode:{type:Boolean}},setup(e,{expose:n}){const t=ue($n),o=ue(En),r=ue(Jt),i=ue(Bn),l=ue(Zt),a=ue(Qt),s=e,{debugMode:f}=br(s),u=P(0),h=P(0),p=P(!1),b=P(!1),g=P(0),A=P(0),$=P(""),k=P(""),N=P(""),_=P([]),x=P(0),R=P(!0),q=P(!1),H=P(!1),ee=P(!1),te=P(!1),G=P(!1);async function ae(M,U){H.value=!0,await K(U),M.target.focus()}const D={Escape:"Escape",F4:"F4",Backspace:"BackSpace",Delete:"Delete",Tab:"Tab",Enter:"Return",Home:"Home",End:"End",PageUp:"Page_Up",PageDown:"Page_Down",Alt:"Alt_L",ArrowUp:"Up",ArrowRight:"Right",ArrowDown:"Down",ArrowLeft:"Left","~":"asciitilde","`":"quoteleft","!":"exclam","@":"at","#":"numbersign",$:"dollar","%":"percent","^":"asciicircum","&":"ampersand","*":"asterisk","(":"parenleft",")":"parenright","-":"minus",_:"underscore","+":"plus","=":"equal","{":"braceleft","[":"bracketleft","}":"braceright","]":"bracketright",":":"colon",";":"semicolon",'"':"quotedbl","'":"apostrophe","|":"bar","\\":"backslash","<":"less",",":"comma",">":"greater",".":"period","?":"question","/":"slash"," ":"space"},y=["`"];function C(M){return/^[a-z0-9!"#$%&'()*+,./:;<=>?@[\] ^_`{|}~\\-]$/i.test(M)}function E(M){const U=nt(),{selectionStart:fe,selectionEnd:ye}=U;o.value=o.value.slice(0,fe)+M+o.value.slice(ye),Qe(()=>{U.selectionEnd=fe+M.length})}async function X(M,U){const fe=nt();!("updatedSchema"in M)&&M.updatedOptions&&i(M.updatedOptions),M.state===0?(H.value=!1,ee.value=!1,b.value=!1,E(M.committed)):M.state===1?($.value=M.head,k.value=M.body,N.value=M.tail,x.value=M.highlighted,_.value=M.candidates.map((ye,Ie)=>{var Fe;let Te=`${((Fe=M.selectLabels)==null?void 0:Fe[Ie])||Ie+1} ${ye.text}`;return ye.comment&&(Te+=" "+ye.comment),{label:Te,key:Ie}}),R.value=M.page===0,q.value=M.isLastPage,ee.value||(ee.value=!0,te.value=!1),Qe(()=>{document.querySelector(".n-popover").getBoundingClientRect().width>fe.getBoundingClientRect().width&&(te.value=!0)}),M.committed&&E(M.committed)):(H.value=!1,ee.value=!1,M.state===2&&M.updatedSchema&&await l(M.updatedSchema.split("/")[0]),M.state===3&&C(U)&&E(U)),fe.focus()}async function K(M){const U=await t.value.process(M);return X(U,M)}let j=!1,Y=0,Z=0;Be(o,(M,U)=>{if(j&&(j=!1,U.length+1===M.length&&U.substring(0,Y)===M.substring(0,Y)&&U.substring(Z)===M.substring(Z+1))){const fe=nt();o.value=U,Qe(()=>{H.value=!0,fe.selectionEnd=Y,K(M[Y])})}});function F(M){if(f.value||r.value)return;const{code:U,key:fe}=M,ye=nt();if(fe==="Unidentified"){j=!0,Y=ye.selectionStart,Z=ye.selectionEnd;return}if(fe==="Shift"){G.value=!0;return}G.value=!1;const Ie=C(fe),Te=fe==="Alt",Fe=M.getModifierState("Control"),Ke=M.getModifierState("Meta"),He=M.getModifierState("Alt"),Ae=M.getModifierState("Shift"),$e=Fe||Ke||He||Ae&&!Ie;if(!H.value&&(document.activeElement!==ye||!Ie&&fe!=="F4"||$e&&!Ae&&!(Fe&&y.includes(fe))))return;let pe;const S=B=>`{${B}}`;if($e||!Ie){if(pe=/^[0-9a-z]$/i.test(fe)?fe:D[fe],pe===void 0)return;Te&&U==="AltRight"&&(pe="Alt_R");const B=[];Fe&&B.push("Control"),Ke&&B.push("Meta"),He&&!Te&&B.push("Alt"),Ae&&B.push("Shift"),B.push(pe),pe=S(B.join("+"))}else U.startsWith("Numpad")?pe=S(`KP_${U.substring(6)}`):pe=fe;if(!b.value){const B=ye.getBoundingClientRect(),me=hl(ye,ye.selectionStart);g.value=B.x+me.left,A.value=lr.value?8:B.y+me.top+me.height-ye.scrollTop}H.value=!0,M.preventDefault(),K(pe)}function m(M){if(f.value||r.value)return;const{key:U}=M;U==="Shift"&&G.value&&a(),G.value=!1,H.value&&K(`{Release+${D[U]||U}}`)}async function d(M){const U=JSON.parse(await t.value.selectCandidateOnCurrentPage(M));return X(U,"")}function T(M){return M.touches.length===1?M.touches[0]:void 0}function J(M,U){u.value=M,h.value=U;const fe=document.querySelector(".n-popover");g.value=fe.getBoundingClientRect().left,p.value=!0}function ze(M){J(M.clientX,M.clientY)}function oe(M){const U=T(M);U&&J(U.clientX,U.clientY)}function Se(M,U){p.value&&(b.value=!0,g.value+=M-u.value,A.value+=U-h.value,u.value=M,h.value=U)}function w(M){Se(M.clientX,M.clientY)}function _e(M){const U=T(M);U&&Se(U.clientX,U.clientY)}function xe(){p.value=!1}return Ye(()=>{document.addEventListener("keydown",F),document.addEventListener("keyup",m),document.addEventListener("mousemove",w),document.addEventListener("touchmove",_e),document.addEventListener("mouseup",xe),document.addEventListener("touchend",xe)}),yr(()=>{document.removeEventListener("keydown",F),document.removeEventListener("keyup",m),document.removeEventListener("mousemove",w),document.removeEventListener("touchmove",_e),document.removeEventListener("mouseup",xe),document.removeEventListener("touchend",xe)}),n({debug:ae}),(M,U)=>(qe(),xt(ve(ln),{show:ee.value,"show-arrow":!1,x:g.value,y:A.value,flip:!p.value,placement:"bottom-start",trigger:"manual",style:{cursor:"move"},onMousedown:ze,onTouchstart:oe},{default:Ne(()=>[Ce(ve(bn),{type:"success"},{default:Ne(()=>[Me(ot($.value),1)]),_:1}),U[2]||(U[2]=Me("  ")),Ce(ve(bn),{type:"info"},{default:Ne(()=>[Me(ot(k.value),1)]),_:1}),Me("  "+ot(N.value)+" ",1),Ln(Ce(ve(nl),{options:_.value,mode:"horizontal",value:x.value,"onUpdate:value":d},null,8,["options","value"]),[[Kn,_.value.length]]),Ce(ve(wt),{text:"",disabled:R.value},{default:Ne(()=>[Ce(ve(jt),{component:ve(ll),onClick:U[0]||(U[0]=fe=>K("-"))},null,8,["component"])]),_:1},8,["disabled"]),Ce(ve(wt),{text:"",disabled:q.value},{default:Ne(()=>[Ce(ve(jt),{component:ve(cl),onClick:U[1]||(U[1]=fe=>K("="))},null,8,["component"])]),_:1},8,["disabled"])]),_:1},8,["show","x","y","flip"]))}}),Bt="ascii_mode",Tn="ascii_punct",pl=le({__name:"Input",props:{method:{},disableSwitch:{type:Boolean}},setup(e){const n=e;function t(k){a.value=k,l.value=k?"":i.value}const o=P(void 0),r=P(""),i=P(n.method??"sbjm"),l=P(""),a=P(!0),s=P(!1),f=P(!1),u={[Bt]:s,[Tn]:f},h=k=>async()=>{const N=u[k],_=!N.value;await o.value.setOption(k,_),N.value=_},p=h(Bt),b=h(Tn);async function g(k){t(!0);try{await o.value.setIME(k),i.value=k;for(const[N,_]of Object.entries(u)){if(N===Bt){_.value=!1;continue}await o.value.setOption(N,_.value)}}catch(N){console.error(N)}t(!1)}function A(k){if(k.length===1){const N=k[0];for(const[_,x]of Object.entries(u)){if(_===N){x.value=!0;return}if(`!${_}`===N){x.value=!1;return}}}}he(_n,l),he(Zt,g),he(Jt,a),he(Mn,s),he(An,f),he(Qt,p),he(ur,b),he(En,r),he(Bn,A),he($n,o),Ye(async()=>{o.value=new ar,sr(),await g(i.value)});const $=P();return(k,N)=>(qe(),xt(ve(cr),{theme:ve(dr)},{default:Ne(()=>[(qe(),xt(wr,null,[Ce(ve(Dn),{vertical:""},{default:Ne(()=>[Ce(ul,{"disable-switch":n.disableSwitch},null,8,["disable-switch"]),Ce(ve(Tr),{id:"container",value:r.value,"onUpdate:value":N[0]||(N[0]=_=>r.value=_),type:"textarea",rows:15},null,8,["value"]),Ce(vl,{ref_key:"panel",ref:$},null,512)]),_:1})],1024))]),_:1},8,["theme"]))}}),Sl=JSON.parse('{"title":"声笔快打","description":"","frontmatter":{"sidebar":false,"editLink":false,"lastUpdated":false},"headers":[],"relativePath":"sbkd/index.md","filePath":"sbkd/index.md"}'),ml={name:"sbkd/index.md"},kl=Object.assign(ml,{setup(e){return(n,t)=>{const o=xr("ClientOnly");return qe(),on("div",null,[t[0]||(t[0]=je("h1",{id:"声笔快打",tabindex:"-1"},[Me("声笔快打 "),je("a",{class:"header-anchor",href:"#声笔快打","aria-label":'Permalink to "声笔快打"'},"​")],-1)),t[1]||(t[1]=je("p",null,[Me("「声笔快打」是声笔输入法的在线版，基于 "),je("a",{href:"http://github.com/libreservice/my_rime",target:"_blank",rel:"noreferrer"},"My Rime（梧桐输入法）"),Me("实现。您无需安装就可以体验所有的声笔系列码输入方案，包括声笔简码、声笔飞码、声笔飞单、声笔飞讯、声笔自然、声笔小鹤和声笔拼音。")],-1)),t[2]||(t[2]=je("p",null,[Me("为提高访问速度，在线版中的每个方案仅包含六千余字和五万余词，且不包含反查功能。如您希望尝试完整版，欢迎在"),je("a",{href:"https://github.com/sbsrf/home/releases",target:"_blank",rel:"noreferrer"},"发布页"),Me("下载。")],-1)),Ce(o,null,{default:Ne(()=>[Ce(pl)]),_:1})])}}});export{Sl as __pageData,kl as default};
