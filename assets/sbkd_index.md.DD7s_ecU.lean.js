import{h as Fn,b as ft,o as ht,V as Me,W as Lt,ac as mo,ad as Mn,R as To,u as qe,N as Yt,t as Xt,ae as An,r as yt,O as En,S as $n,f as Bn,af as go,ag as Ln,c as be,ah as Kn,ai as Hn,J as Dn,aj as jn,T as rt,U as Vn,v as Wn,j as bo,ak as Un,y as Gn,q as No,w as qn,n as Yn,p as Xn,a9 as Zn,al as Jn,l as gt,a2 as Qn,$ as er,am as tr,B as wt,an as _o,ao as Zt,ap as Jt,aq as Fo,ar as Qt,as as Mo,at as tt,au as Ao,av as Eo,aw as $o,ax as or,ay as nr,C as rr,D as ir,E as lr,az as ar}from"./chunks/util.BM3nYC8c.js";import{p as I,q as Be,ai as sr,a4 as dr,$ as eo,S as cr,d as ae,v as Ye,ad as ur,ae as fr,h as O,a2 as d,K as to,P as Je,r as hr,L as ce,T as oo,a5 as fe,X as ve,s as Kt,F as no,a7 as Bo,a8 as Lo,o as Ge,c as ro,j as je,b as xt,w as Ne,G as Ce,k as he,a as Fe,t as ot,aj as vr,x as pr,ak as mr,B as gr}from"./chunks/framework.hU1yMXPg.js";import{y as Ko,a1 as Ht,a2 as vt,d as P,g as z,b as V,u as Ve,k as Ie,x as br,m as de,f as U,E as ke,l as kt,n as Qe,o as We,N as Ho}from"./chunks/Space.BnRoX1E1.js";import{d as Do,e as bt,b as yr,i as io,g as wr,h as lo,u as jo,j as Dt,B as Vo,V as Wo,k as Uo,a as jt,r as xr,p as Go,N as Cr,f as Sr,c as yo}from"./chunks/text.Z_c5LeGv.js";import{r as ze,N as kr,b as zr,m as Rr,k as ao,a as Pr}from"./chunks/Input.CWwQNHdo.js";import{g as Ir}from"./chunks/theme.BNf09E1X.js";function et(e,o){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[o]!==void 0)return!0;t=t.parentElement}return!1}function Or(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Tr(e){return o=>{o?e.value=o.$el:e.value=null}}function Nt(e){const o=e.filter(t=>t!==void 0);if(o.length!==0)return o.length===1?o[0]:t=>{e.forEach(n=>{n&&n(t)})}}function Nr(e,o,t){const n=I(e.value);let r=null;return Be(e,i=>{r!==null&&window.clearTimeout(r),i===!0?t&&!t.value?n.value=!0:r=window.setTimeout(()=>{n.value=!0},o):n.value=!1}),n}function _r(e={},o){const t=sr({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:r}=e,i=c=>{switch(c.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}n!==void 0&&Object.keys(n).forEach(m=>{if(m!==c.key)return;const u=n[m];if(typeof u=="function")u(c);else{const{stop:v=!1,prevent:g=!1}=u;v&&c.stopPropagation(),g&&c.preventDefault(),u.handler(c)}})},l=c=>{switch(c.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}r!==void 0&&Object.keys(r).forEach(m=>{if(m!==c.key)return;const u=r[m];if(typeof u=="function")u(c);else{const{stop:v=!1,prevent:g=!1}=u;v&&c.stopPropagation(),g&&c.preventDefault(),u.handler(c)}})},a=()=>{(o===void 0||o.value)&&(ht("keydown",document,i),ht("keyup",document,l)),o!==void 0&&Be(o,c=>{c?(ht("keydown",document,i),ht("keyup",document,l)):(ft("keydown",document,i),ft("keyup",document,l))})};return Fn()?(dr(a),eo(()=>{(o===void 0||o.value)&&(ft("keydown",document,i),ft("keyup",document,l))})):a(),cr(t)}function wo(e){return e&-e}class Fr{constructor(o,t){this.l=o,this.min=t;const n=new Array(o+1);for(let r=0;r<o+1;++r)n[r]=0;this.ft=n}add(o,t){if(t===0)return;const{l:n,ft:r}=this;for(o+=1;o<=n;)r[o]+=t,o+=wo(o)}get(o){return this.sum(o+1)-this.sum(o)}sum(o){if(o===void 0&&(o=this.l),o<=0)return 0;const{ft:t,min:n,l:r}=this;if(o>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let i=o*n;for(;o>0;)i+=t[o],o-=wo(o);return i}getBound(o){let t=0,n=this.l;for(;n>t;){const r=Math.floor((t+n)/2),i=this.sum(r);if(i>o){n=r;continue}else if(i<o){if(t===r)return this.sum(t+1)<=o?t+1:r;t=r}else return r}return t}}let pt;function Mr(){return typeof document>"u"?!1:(pt===void 0&&("matchMedia"in window?pt=window.matchMedia("(pointer:coarse)").matches:pt=!1),pt)}let _t;function xo(){return typeof document>"u"?1:(_t===void 0&&(_t="chrome"in window?window.devicePixelRatio:1),_t)}const Ar=bt(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[bt("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[bt("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Er=ae({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const o=Ko();Ar.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Do,ssr:o}),Ye(()=>{const{defaultScrollIndex:R,defaultScrollKey:b}=e;R!=null?p({index:R}):b!=null&&p({key:b})});let t=!1,n=!1;ur(()=>{if(t=!1,!n){n=!0;return}p({top:v.value,left:u})}),fr(()=>{t=!0,n||(n=!0)});const r=O(()=>{const R=new Map,{keyField:b}=e;return e.items.forEach((N,H)=>{R.set(N[b],H)}),R}),i=I(null),l=I(void 0),a=new Map,c=O(()=>{const{items:R,itemSize:b,keyField:N}=e,H=new Fr(R.length,b);return R.forEach((D,Z)=>{const A=D[N],W=a.get(A);W!==void 0&&H.add(Z,W)}),H}),m=I(0);let u=0;const v=I(0),g=Me(()=>Math.max(c.value.getBound(v.value-Ht(e.paddingTop))-1,0)),w=O(()=>{const{value:R}=l;if(R===void 0)return[];const{items:b,itemSize:N}=e,H=g.value,D=Math.min(H+Math.ceil(R/N+1),b.length-1),Z=[];for(let A=H;A<=D;++A)Z.push(b[A]);return Z}),p=(R,b)=>{if(typeof R=="number"){F(R,b,"auto");return}const{left:N,top:H,index:D,key:Z,position:A,behavior:W,debounce:te=!0}=R;if(N!==void 0||H!==void 0)F(N,H,W);else if(D!==void 0)x(D,W,te);else if(Z!==void 0){const ne=r.value.get(Z);ne!==void 0&&x(ne,W,te)}else A==="bottom"?F(0,Number.MAX_SAFE_INTEGER,W):A==="top"&&F(0,0,W)};let C,_=null;function x(R,b,N){const{value:H}=c,D=H.sum(R)+Ht(e.paddingTop);if(!N)i.value.scrollTo({left:0,top:D,behavior:b});else{C=R,_!==null&&window.clearTimeout(_),_=window.setTimeout(()=>{C=void 0,_=null},16);const{scrollTop:Z,offsetHeight:A}=i.value;if(D>Z){const W=H.get(R);D+W<=Z+A||i.value.scrollTo({left:0,top:D+W-A,behavior:b})}else i.value.scrollTo({left:0,top:D,behavior:b})}}function F(R,b,N){i.value.scrollTo({left:R,top:b,behavior:N})}function B(R,b){var N,H,D;if(t||e.ignoreItemResize||Y(b.target))return;const{value:Z}=c,A=r.value.get(R),W=Z.get(A),te=(D=(H=(N=b.borderBoxSize)===null||N===void 0?void 0:N[0])===null||H===void 0?void 0:H.blockSize)!==null&&D!==void 0?D:b.contentRect.height;if(te===W)return;te-e.itemSize===0?a.delete(R):a.set(R,te-e.itemSize);const L=te-W;if(L===0)return;Z.add(A,L);const f=i.value;if(f!=null){if(C===void 0){const s=Z.sum(A);f.scrollTop>s&&f.scrollBy(0,L)}else if(A<C)f.scrollBy(0,L);else if(A===C){const s=Z.sum(A);te+s>f.scrollTop+f.offsetHeight&&f.scrollBy(0,L)}Q()}m.value++}const S=!Mr();let T=!1;function G(R){var b;(b=e.onScroll)===null||b===void 0||b.call(e,R),(!S||!T)&&Q()}function j(R){var b;if((b=e.onWheel)===null||b===void 0||b.call(e,R),S){const N=i.value;if(N!=null){if(R.deltaX===0&&(N.scrollTop===0&&R.deltaY<=0||N.scrollTop+N.offsetHeight>=N.scrollHeight&&R.deltaY>=0))return;R.preventDefault(),N.scrollTop+=R.deltaY/xo(),N.scrollLeft+=R.deltaX/xo(),Q(),T=!0,yr(()=>{T=!1})}}}function X(R){if(t||Y(R.target)||R.contentRect.height===l.value)return;l.value=R.contentRect.height;const{onResize:b}=e;b!==void 0&&b(R)}function Q(){const{value:R}=i;R!=null&&(v.value=R.scrollTop,u=R.scrollLeft)}function Y(R){let b=R;for(;b!==null;){if(b.style.display==="none")return!0;b=b.parentElement}return!1}return{listHeight:l,listStyle:{overflow:"auto"},keyToIndex:r,itemsStyle:O(()=>{const{itemResizable:R}=e,b=vt(c.value.sum());return m.value,[e.itemsStyle,{boxSizing:"content-box",height:R?"":b,minHeight:R?b:"",paddingTop:vt(e.paddingTop),paddingBottom:vt(e.paddingBottom)}]}),visibleItemsStyle:O(()=>(m.value,{transform:`translateY(${vt(c.value.sum(g.value))})`})),viewportItems:w,listElRef:i,itemsElRef:I(null),scrollTo:p,handleListResize:X,handleListScroll:G,handleListWheel:j,handleItemResize:B}},render(){const{itemResizable:e,keyField:o,keyToIndex:t,visibleItemsTag:n}=this;return d(Lt,{onResize:this.handleListResize},{default:()=>{var r,i;return d("div",to(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?d("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[d(n,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(l=>{const a=l[o],c=t.get(a),m=this.$slots.default({item:l,index:c})[0];return e?d(Lt,{key:a,onResize:u=>this.handleItemResize(a,u)},{default:()=>m}):(m.key=a,m)})})]):(i=(r=this.$slots).empty)===null||i===void 0?void 0:i.call(r)])}})}}),Le="v-hidden",$r=bt("[v-hidden]",{display:"none!important"}),Vt=ae({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:o}){const t=I(null),n=I(null);function r(l){const{value:a}=t,{getCounter:c,getTail:m}=e;let u;if(c!==void 0?u=c():u=n.value,!a||!u)return;u.hasAttribute(Le)&&u.removeAttribute(Le);const{children:v}=a;if(l.showAllItemsBeforeCalculate)for(const B of v)B.hasAttribute(Le)&&B.removeAttribute(Le);const g=a.offsetWidth,w=[],p=o.tail?m==null?void 0:m():null;let C=p?p.offsetWidth:0,_=!1;const x=a.children.length-(o.tail?1:0);for(let B=0;B<x-1;++B){if(B<0)continue;const S=v[B];if(_){S.hasAttribute(Le)||S.setAttribute(Le,"");continue}else S.hasAttribute(Le)&&S.removeAttribute(Le);const T=S.offsetWidth;if(C+=T,w[B]=T,C>g){const{updateCounter:G}=e;for(let j=B;j>=0;--j){const X=x-1-j;G!==void 0?G(X):u.textContent=`${X}`;const Q=u.offsetWidth;if(C-=w[j],C+Q<=g||j===0){_=!0,B=j-1,p&&(B===-1?(p.style.maxWidth=`${g-Q}px`,p.style.boxSizing="border-box"):p.style.maxWidth="");const{onUpdateCount:Y}=e;Y&&Y(X);break}}}}const{onUpdateOverflow:F}=e;_?F!==void 0&&F(!0):(F!==void 0&&F(!1),u.setAttribute(Le,""))}const i=Ko();return $r.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Do,ssr:i}),Ye(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:n,sync:r}},render(){const{$slots:e}=this;return Je(()=>this.sync({showAllItemsBeforeCalculate:!1})),d("div",{class:"v-overflow",ref:"selfRef"},[hr(e,"default"),e.counter?e.counter():d("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function qo(e,o){o&&(Ye(()=>{const{value:t}=e;t&&mo.registerHandler(t,o)}),eo(()=>{const{value:t}=e;t&&mo.unregisterHandler(t)}))}const Br=ae({name:"Checkmark",render(){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},d("g",{fill:"none"},d("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Lr=ae({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Kr=ae({name:"Empty",render(){return d("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),d("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Hr=ae({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Dr=ae({props:{onFocus:Function,onBlur:Function},setup(e){return()=>d("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Co(e){return Array.isArray(e)?e:[e]}const Wt={STOP:"STOP"};function Yo(e,o){const t=o(e);e.children!==void 0&&t!==Wt.STOP&&e.children.forEach(n=>Yo(n,o))}function jr(e,o={}){const{preserveGroup:t=!1}=o,n=[],r=t?l=>{l.isLeaf||(n.push(l.key),i(l.children))}:l=>{l.isLeaf||(l.isGroup||n.push(l.key),i(l.children))};function i(l){l.forEach(r)}return i(e),n}function Vr(e,o){const{isLeaf:t}=e;return t!==void 0?t:!o(e)}function Wr(e){return e.children}function Ur(e){return e.key}function Gr(){return!1}function qr(e,o){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(o(e)))}function Yr(e){return e.disabled===!0}function Xr(e,o){return e.isLeaf===!1&&!Array.isArray(o(e))}function Ft(e){var o;return e==null?[]:Array.isArray(e)?e:(o=e.checkedKeys)!==null&&o!==void 0?o:[]}function Mt(e){var o;return e==null||Array.isArray(e)?[]:(o=e.indeterminateKeys)!==null&&o!==void 0?o:[]}function Zr(e,o){const t=new Set(e);return o.forEach(n=>{t.has(n)||t.add(n)}),Array.from(t)}function Jr(e,o){const t=new Set(e);return o.forEach(n=>{t.has(n)&&t.delete(n)}),Array.from(t)}function Qr(e){return(e==null?void 0:e.type)==="group"}function ei(e){const o=new Map;return e.forEach((t,n)=>{o.set(t.key,n)}),t=>{var n;return(n=o.get(t))!==null&&n!==void 0?n:null}}class ti extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function oi(e,o,t,n){return Ct(o.concat(e),t,n,!1)}function ni(e,o){const t=new Set;return e.forEach(n=>{const r=o.treeNodeMap.get(n);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function ri(e,o,t,n){const r=Ct(o,t,n,!1),i=Ct(e,t,n,!0),l=ni(e,t),a=[];return r.forEach(c=>{(i.has(c)||l.has(c))&&a.push(c)}),a.forEach(c=>r.delete(c)),r}function At(e,o){const{checkedKeys:t,keysToCheck:n,keysToUncheck:r,indeterminateKeys:i,cascade:l,leafOnly:a,checkStrategy:c,allowNotLoaded:m}=e;if(!l)return n!==void 0?{checkedKeys:Zr(t,n),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:Jr(t,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:u}=o;let v;r!==void 0?v=ri(r,t,o,m):n!==void 0?v=oi(n,t,o,m):v=Ct(t,o,m,!1);const g=c==="parent",w=c==="child"||a,p=v,C=new Set,_=Math.max.apply(null,Array.from(u.keys()));for(let x=_;x>=0;x-=1){const F=x===0,B=u.get(x);for(const S of B){if(S.isLeaf)continue;const{key:T,shallowLoaded:G}=S;if(w&&G&&S.children.forEach(Y=>{!Y.disabled&&!Y.isLeaf&&Y.shallowLoaded&&p.has(Y.key)&&p.delete(Y.key)}),S.disabled||!G)continue;let j=!0,X=!1,Q=!0;for(const Y of S.children){const R=Y.key;if(!Y.disabled){if(Q&&(Q=!1),p.has(R))X=!0;else if(C.has(R)){X=!0,j=!1;break}else if(j=!1,X)break}}j&&!Q?(g&&S.children.forEach(Y=>{!Y.disabled&&p.has(Y.key)&&p.delete(Y.key)}),p.add(T)):X&&C.add(T),F&&w&&p.has(T)&&p.delete(T)}}return{checkedKeys:Array.from(p),indeterminateKeys:Array.from(C)}}function Ct(e,o,t,n){const{treeNodeMap:r,getChildren:i}=o,l=new Set,a=new Set(e);return e.forEach(c=>{const m=r.get(c);m!==void 0&&Yo(m,u=>{if(u.disabled)return Wt.STOP;const{key:v}=u;if(!l.has(v)&&(l.add(v),a.add(v),Xr(u.rawNode,i))){if(n)return Wt.STOP;if(!t)throw new ti}})}),a}function ii(e,{includeGroup:o=!1,includeSelf:t=!0},n){var r;const i=n.treeNodeMap;let l=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const a={keyPath:[],treeNodePath:[],treeNode:l};if(l!=null&&l.ignored)return a.treeNode=null,a;for(;l;)!l.ignored&&(o||!l.isGroup)&&a.treeNodePath.push(l),l=l.parent;return a.treeNodePath.reverse(),t||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(c=>c.key),a}function li(e){if(e.length===0)return null;const o=e[0];return o.isGroup||o.ignored||o.disabled?o.getNext():o}function ai(e,o){const t=e.siblings,n=t.length,{index:r}=e;return o?t[(r+1)%n]:r===t.length-1?null:t[r+1]}function So(e,o,{loop:t=!1,includeDisabled:n=!1}={}){const r=o==="prev"?si:ai,i={reverse:o==="prev"};let l=!1,a=null;function c(m){if(m!==null){if(m===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){a=e;return}}else if((!m.disabled||n)&&!m.ignored&&!m.isGroup){a=m;return}if(m.isGroup){const u=so(m,i);u!==null?a=u:c(r(m,t))}else{const u=r(m,!1);if(u!==null)c(u);else{const v=di(m);v!=null&&v.isGroup?c(r(v,t)):t&&c(r(m,!0))}}}}return c(e),a}function si(e,o){const t=e.siblings,n=t.length,{index:r}=e;return o?t[(r-1+n)%n]:r===0?null:t[r-1]}function di(e){return e.parent}function so(e,o={}){const{reverse:t=!1}=o,{children:n}=e;if(n){const{length:r}=n,i=t?r-1:0,l=t?-1:r,a=t?-1:1;for(let c=i;c!==l;c+=a){const m=n[c];if(!m.disabled&&!m.ignored)if(m.isGroup){const u=so(m,o);if(u!==null)return u}else return m}}return null}const ci={getChild(){return this.ignored?null:so(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return So(this,"next",e)},getPrev(e={}){return So(this,"prev",e)}};function ui(e,o){const t=o?new Set(o):void 0,n=[];function r(i){i.forEach(l=>{n.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||t===void 0||t.has(l.key))&&r(l.children)})}return r(e),n}function fi(e,o){const t=e.key;for(;o;){if(o.key===t)return!0;o=o.parent}return!1}function Xo(e,o,t,n,r,i=null,l=0){const a=[];return e.forEach((c,m)=>{var u;const v=Object.create(n);if(v.rawNode=c,v.siblings=a,v.level=l,v.index=m,v.isFirstChild=m===0,v.isLastChild=m+1===e.length,v.parent=i,!v.ignored){const g=r(c);Array.isArray(g)&&(v.children=Xo(g,o,t,n,r,v,l+1))}a.push(v),o.set(v.key,v),t.has(l)||t.set(l,[]),(u=t.get(l))===null||u===void 0||u.push(v)}),a}function nt(e,o={}){var t;const n=new Map,r=new Map,{getDisabled:i=Yr,getIgnored:l=Gr,getIsGroup:a=Qr,getKey:c=Ur}=o,m=(t=o.getChildren)!==null&&t!==void 0?t:Wr,u=o.ignoreEmptyChildren?S=>{const T=m(S);return Array.isArray(T)?T.length?T:null:T}:m,v=Object.assign({get key(){return c(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return Vr(this.rawNode,u)},get shallowLoaded(){return qr(this.rawNode,u)},get ignored(){return l(this.rawNode)},contains(S){return fi(this,S)}},ci),g=Xo(e,n,r,v,u);function w(S){if(S==null)return null;const T=n.get(S);return T&&!T.isGroup&&!T.ignored?T:null}function p(S){if(S==null)return null;const T=n.get(S);return T&&!T.ignored?T:null}function C(S,T){const G=p(S);return G?G.getPrev(T):null}function _(S,T){const G=p(S);return G?G.getNext(T):null}function x(S){const T=p(S);return T?T.getParent():null}function F(S){const T=p(S);return T?T.getChild():null}const B={treeNodes:g,treeNodeMap:n,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:u,getFlattenedNodes(S){return ui(g,S)},getNode:w,getPrev:C,getNext:_,getParent:x,getChild:F,getFirstAvailableNode(){return li(g)},getPath(S,T={}){return ii(S,T,B)},getCheckedKeys(S,T={}){const{cascade:G=!0,leafOnly:j=!1,checkStrategy:X="all",allowNotLoaded:Q=!1}=T;return At({checkedKeys:Ft(S),indeterminateKeys:Mt(S),cascade:G,leafOnly:j,checkStrategy:X,allowNotLoaded:Q},B)},check(S,T,G={}){const{cascade:j=!0,leafOnly:X=!1,checkStrategy:Q="all",allowNotLoaded:Y=!1}=G;return At({checkedKeys:Ft(T),indeterminateKeys:Mt(T),keysToCheck:S==null?[]:Co(S),cascade:j,leafOnly:X,checkStrategy:Q,allowNotLoaded:Y},B)},uncheck(S,T,G={}){const{cascade:j=!0,leafOnly:X=!1,checkStrategy:Q="all",allowNotLoaded:Y=!1}=G;return At({checkedKeys:Ft(T),indeterminateKeys:Mt(T),keysToUncheck:S==null?[]:Co(S),cascade:j,leafOnly:X,checkStrategy:Q,allowNotLoaded:Y},B)},getNonLeafKeys(S={}){return jr(g,S)}};return B}const hi=P("empty",`
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
 `)]),vi=Object.assign(Object.assign({},Ie.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),pi=ae({name:"Empty",props:vi,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Ve(e),n=Ie("Empty","-empty",hi,Mn,e,o),{localeRef:r}=To("Empty"),i=ce(br,null),l=O(()=>{var u,v,g;return(u=e.description)!==null&&u!==void 0?u:(g=(v=i==null?void 0:i.mergedComponentPropsRef.value)===null||v===void 0?void 0:v.Empty)===null||g===void 0?void 0:g.description}),a=O(()=>{var u,v;return((v=(u=i==null?void 0:i.mergedComponentPropsRef.value)===null||u===void 0?void 0:u.Empty)===null||v===void 0?void 0:v.renderIcon)||(()=>d(Kr,null))}),c=O(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:v},self:{[de("iconSize",u)]:g,[de("fontSize",u)]:w,textColor:p,iconColor:C,extraTextColor:_}}=n.value;return{"--n-icon-size":g,"--n-font-size":w,"--n-bezier":v,"--n-text-color":p,"--n-icon-color":C,"--n-extra-text-color":_}}),m=t?qe("empty",O(()=>{let u="";const{size:v}=e;return u+=v[0],u}),c,e):void 0;return{mergedClsPrefix:o,mergedRenderIcon:a,localizedDescription:O(()=>l.value||r.value.description),cssVars:t?void 0:c,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender}},render(){const{$slots:e,mergedClsPrefix:o,onRender:t}=this;return t==null||t(),d("div",{class:[`${o}-empty`,this.themeClass],style:this.cssVars},this.showIcon?d("div",{class:`${o}-empty__icon`},e.icon?e.icon():d(Yt,{clsPrefix:o},{default:this.mergedRenderIcon})):null,this.showDescription?d("div",{class:`${o}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?d("div",{class:`${o}-empty__extra`},e.extra()):null)}});function mi(e,o){return d(oo,{name:"fade-in-scale-up-transition"},{default:()=>e?d(Yt,{clsPrefix:o,class:`${o}-base-select-option__check`},{default:()=>d(Br)}):null})}const ko=ae({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:o,pendingTmNodeRef:t,multipleRef:n,valueSetRef:r,renderLabelRef:i,renderOptionRef:l,labelFieldRef:a,valueFieldRef:c,showCheckmarkRef:m,nodePropsRef:u,handleOptionClick:v,handleOptionMouseEnter:g}=ce(io),w=Me(()=>{const{value:x}=t;return x?e.tmNode.key===x.key:!1});function p(x){const{tmNode:F}=e;F.disabled||v(x,F)}function C(x){const{tmNode:F}=e;F.disabled||g(x,F)}function _(x){const{tmNode:F}=e,{value:B}=w;F.disabled||B||g(x,F)}return{multiple:n,isGrouped:Me(()=>{const{tmNode:x}=e,{parent:F}=x;return F&&F.rawNode.type==="group"}),showCheckmark:m,nodeProps:u,isPending:w,isSelected:Me(()=>{const{value:x}=o,{value:F}=n;if(x===null)return!1;const B=e.tmNode.rawNode[c.value];if(F){const{value:S}=r;return S.has(B)}else return x===B}),labelField:a,renderLabel:i,renderOption:l,handleMouseMove:_,handleMouseEnter:C,handleClick:p}},render(){const{clsPrefix:e,tmNode:{rawNode:o},isSelected:t,isPending:n,isGrouped:r,showCheckmark:i,nodeProps:l,renderOption:a,renderLabel:c,handleClick:m,handleMouseEnter:u,handleMouseMove:v}=this,g=mi(t,e),w=c?[c(o,t),i&&g]:[ze(o[this.labelField],o,t),i&&g],p=l==null?void 0:l(o),C=d("div",Object.assign({},p,{class:[`${e}-base-select-option`,o.class,p==null?void 0:p.class,{[`${e}-base-select-option--disabled`]:o.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:r,[`${e}-base-select-option--pending`]:n,[`${e}-base-select-option--show-checkmark`]:i}],style:[(p==null?void 0:p.style)||"",o.style||""],onClick:Nt([m,p==null?void 0:p.onClick]),onMouseenter:Nt([u,p==null?void 0:p.onMouseenter]),onMousemove:Nt([v,p==null?void 0:p.onMousemove])}),d("div",{class:`${e}-base-select-option__content`},w));return o.render?o.render({node:C,option:o,selected:t}):a?a({node:C,option:o,selected:t}):C}}),zo=ae({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:o,labelFieldRef:t,nodePropsRef:n}=ce(io);return{labelField:t,nodeProps:n,renderLabel:e,renderOption:o}},render(){const{clsPrefix:e,renderLabel:o,renderOption:t,nodeProps:n,tmNode:{rawNode:r}}=this,i=n==null?void 0:n(r),l=o?o(r,!1):ze(r[this.labelField],r,!1),a=d("div",Object.assign({},i,{class:[`${e}-base-select-group-header`,i==null?void 0:i.class]}),l);return r.render?r.render({node:a,option:r}):t?t({node:a,option:r,selected:!1}):a}}),gi=P("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[P("scrollbar",`
 max-height: var(--n-height);
 `),P("virtual-list",`
 max-height: var(--n-height);
 `),P("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[z("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),P("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),P("base-select-menu-option-wrapper",`
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
 `),P("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),P("base-select-option",`
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
 `)]),z("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Xt({enterScale:"0.5"})])])]),bi=ae({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Ie.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:t}=Ve(e),n=kt("InternalSelectMenu",t,o),r=Ie("InternalSelectMenu","-internal-select-menu",gi,An,e,fe(e,"clsPrefix")),i=I(null),l=I(null),a=I(null),c=O(()=>e.treeMate.getFlattenedNodes()),m=O(()=>ei(c.value)),u=I(null);function v(){const{treeMate:f}=e;let s=null;const{value:K}=e;K===null?s=f.getFirstAvailableNode():(e.multiple?s=f.getNode((K||[])[(K||[]).length-1]):s=f.getNode(K),(!s||s.disabled)&&(s=f.getFirstAvailableNode())),H(s||null)}function g(){const{value:f}=u;f&&!e.treeMate.getNode(f.key)&&(u.value=null)}let w;Be(()=>e.show,f=>{f?w=Be(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?v():g(),Je(D)):g()},{immediate:!0}):w==null||w()},{immediate:!0}),eo(()=>{w==null||w()});const p=O(()=>Ht(r.value.self[de("optionHeight",e.size)])),C=O(()=>Qe(r.value.self[de("padding",e.size)])),_=O(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),x=O(()=>{const f=c.value;return f&&f.length===0});function F(f){const{onToggle:s}=e;s&&s(f)}function B(f){const{onScroll:s}=e;s&&s(f)}function S(f){var s;(s=a.value)===null||s===void 0||s.sync(),B(f)}function T(){var f;(f=a.value)===null||f===void 0||f.sync()}function G(){const{value:f}=u;return f||null}function j(f,s){s.disabled||H(s,!1)}function X(f,s){s.disabled||F(s)}function Q(f){var s;et(f,"action")||(s=e.onKeyup)===null||s===void 0||s.call(e,f)}function Y(f){var s;et(f,"action")||(s=e.onKeydown)===null||s===void 0||s.call(e,f)}function R(f){var s;(s=e.onMousedown)===null||s===void 0||s.call(e,f),!e.focusable&&f.preventDefault()}function b(){const{value:f}=u;f&&H(f.getNext({loop:!0}),!0)}function N(){const{value:f}=u;f&&H(f.getPrev({loop:!0}),!0)}function H(f,s=!1){u.value=f,s&&D()}function D(){var f,s;const K=u.value;if(!K)return;const ee=m.value(K.key);ee!==null&&(e.virtualScroll?(f=l.value)===null||f===void 0||f.scrollTo({index:ee}):(s=a.value)===null||s===void 0||s.scrollTo({index:ee,elSize:p.value}))}function Z(f){var s,K;!((s=i.value)===null||s===void 0)&&s.contains(f.target)&&((K=e.onFocus)===null||K===void 0||K.call(e,f))}function A(f){var s,K;!((s=i.value)===null||s===void 0)&&s.contains(f.relatedTarget)||(K=e.onBlur)===null||K===void 0||K.call(e,f)}ve(io,{handleOptionMouseEnter:j,handleOptionClick:X,valueSetRef:_,pendingTmNodeRef:u,nodePropsRef:fe(e,"nodeProps"),showCheckmarkRef:fe(e,"showCheckmark"),multipleRef:fe(e,"multiple"),valueRef:fe(e,"value"),renderLabelRef:fe(e,"renderLabel"),renderOptionRef:fe(e,"renderOption"),labelFieldRef:fe(e,"labelField"),valueFieldRef:fe(e,"valueField")}),ve(wr,i),Ye(()=>{const{value:f}=a;f&&f.sync()});const W=O(()=>{const{size:f}=e,{common:{cubicBezierEaseInOut:s},self:{height:K,borderRadius:ee,color:Re,groupHeaderTextColor:re,actionDividerColor:Se,optionTextColorPressed:y,optionTextColor:_e,optionTextColorDisabled:xe,optionTextColorActive:M,optionOpacityDisabled:q,optionCheckColor:ue,actionTextColor:ye,optionColorPending:Pe,optionColorActive:Oe,loadingColor:Te,loadingSize:Ke,optionColorActivePending:He,[de("optionFontSize",f)]:Ae,[de("optionHeight",f)]:Ee,[de("optionPadding",f)]:pe}}=r.value;return{"--n-height":K,"--n-action-divider-color":Se,"--n-action-text-color":ye,"--n-bezier":s,"--n-border-radius":ee,"--n-color":Re,"--n-option-font-size":Ae,"--n-group-header-text-color":re,"--n-option-check-color":ue,"--n-option-color-pending":Pe,"--n-option-color-active":Oe,"--n-option-color-active-pending":He,"--n-option-height":Ee,"--n-option-opacity-disabled":q,"--n-option-text-color":_e,"--n-option-text-color-active":M,"--n-option-text-color-disabled":xe,"--n-option-text-color-pressed":y,"--n-option-padding":pe,"--n-option-padding-left":Qe(pe,"left"),"--n-option-padding-right":Qe(pe,"right"),"--n-loading-color":Te,"--n-loading-size":Ke}}),{inlineThemeDisabled:te}=e,ne=te?qe("internal-select-menu",O(()=>e.size[0]),W,e):void 0,L={selfRef:i,next:b,prev:N,getPendingTmNode:G};return qo(i,e.onResize),Object.assign({mergedTheme:r,mergedClsPrefix:o,rtlEnabled:n,virtualListRef:l,scrollbarRef:a,itemSize:p,padding:C,flattenedNodes:c,empty:x,virtualListContainer(){const{value:f}=l;return f==null?void 0:f.listElRef},virtualListContent(){const{value:f}=l;return f==null?void 0:f.itemsElRef},doScroll:B,handleFocusin:Z,handleFocusout:A,handleKeyUp:Q,handleKeyDown:Y,handleMouseDown:R,handleVirtualListResize:T,handleVirtualListScroll:S,cssVars:te?void 0:W,themeClass:ne==null?void 0:ne.themeClass,onRender:ne==null?void 0:ne.onRender},L)},render(){const{$slots:e,virtualScroll:o,clsPrefix:t,mergedTheme:n,themeClass:r,onRender:i}=this;return i==null||i(),d("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,this.rtlEnabled&&`${t}-base-select-menu--rtl`,r,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},yt(e.header,l=>l&&d("div",{class:`${t}-base-select-menu__header`,"data-header":!0,key:"header"},l)),this.loading?d("div",{class:`${t}-base-select-menu__loading`},d(En,{clsPrefix:t,strokeWidth:20})):this.empty?d("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},Bn(e.empty,()=>[d(pi,{theme:n.peers.Empty,themeOverrides:n.peerOverrides.Empty})])):d($n,{ref:"scrollbarRef",theme:n.peers.Scrollbar,themeOverrides:n.peerOverrides.Scrollbar,scrollable:this.scrollable,container:o?this.virtualListContainer:void 0,content:o?this.virtualListContent:void 0,onScroll:o?void 0:this.doScroll},{default:()=>o?d(Er,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:l})=>l.isGroup?d(zo,{key:l.key,clsPrefix:t,tmNode:l}):l.ignored?null:d(ko,{clsPrefix:t,key:l.key,tmNode:l})}):d("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(l=>l.isGroup?d(zo,{key:l.key,clsPrefix:t,tmNode:l}):d(ko,{clsPrefix:t,key:l.key,tmNode:l})))}),yt(e.action,l=>l&&[d("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},l),d(Dr,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),yi={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},wi=P("tag",`
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
 `),U("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[z("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),z("avatar",`
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
 `,[ke("disabled",[V("&:hover","background-color: var(--n-color-checked-hover);"),V("&:active","background-color: var(--n-color-checked-pressed);")])])])]),xi=Object.assign(Object.assign(Object.assign({},Ie.props),yi),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Ci=We("n-tag"),Et=ae({name:"Tag",props:xi,setup(e){const o=I(null),{mergedBorderedRef:t,mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=Ve(e),l=Ie("Tag","-tag",wi,Ln,e,n);ve(Ci,{roundRef:fe(e,"round")});function a(w){if(!e.disabled&&e.checkable){const{checked:p,onCheckedChange:C,onUpdateChecked:_,"onUpdate:checked":x}=e;_&&_(!p),x&&x(!p),C&&C(!p)}}function c(w){if(e.triggerClickOnClose||w.stopPropagation(),!e.disabled){const{onClose:p}=e;p&&be(p,w)}}const m={setTextContent(w){const{value:p}=o;p&&(p.textContent=w)}},u=kt("Tag",i,n),v=O(()=>{const{type:w,size:p,color:{color:C,textColor:_}={}}=e,{common:{cubicBezierEaseInOut:x},self:{padding:F,closeMargin:B,borderRadius:S,opacityDisabled:T,textColorCheckable:G,textColorHoverCheckable:j,textColorPressedCheckable:X,textColorChecked:Q,colorCheckable:Y,colorHoverCheckable:R,colorPressedCheckable:b,colorChecked:N,colorCheckedHover:H,colorCheckedPressed:D,closeBorderRadius:Z,fontWeightStrong:A,[de("colorBordered",w)]:W,[de("closeSize",p)]:te,[de("closeIconSize",p)]:ne,[de("fontSize",p)]:L,[de("height",p)]:f,[de("color",w)]:s,[de("textColor",w)]:K,[de("border",w)]:ee,[de("closeIconColor",w)]:Re,[de("closeIconColorHover",w)]:re,[de("closeIconColorPressed",w)]:Se,[de("closeColorHover",w)]:y,[de("closeColorPressed",w)]:_e}}=l.value,xe=Qe(B);return{"--n-font-weight-strong":A,"--n-avatar-size-override":`calc(${f} - 8px)`,"--n-bezier":x,"--n-border-radius":S,"--n-border":ee,"--n-close-icon-size":ne,"--n-close-color-pressed":_e,"--n-close-color-hover":y,"--n-close-border-radius":Z,"--n-close-icon-color":Re,"--n-close-icon-color-hover":re,"--n-close-icon-color-pressed":Se,"--n-close-icon-color-disabled":Re,"--n-close-margin-top":xe.top,"--n-close-margin-right":xe.right,"--n-close-margin-bottom":xe.bottom,"--n-close-margin-left":xe.left,"--n-close-size":te,"--n-color":C||(t.value?W:s),"--n-color-checkable":Y,"--n-color-checked":N,"--n-color-checked-hover":H,"--n-color-checked-pressed":D,"--n-color-hover-checkable":R,"--n-color-pressed-checkable":b,"--n-font-size":L,"--n-height":f,"--n-opacity-disabled":T,"--n-padding":F,"--n-text-color":_||K,"--n-text-color-checkable":G,"--n-text-color-checked":Q,"--n-text-color-hover-checkable":j,"--n-text-color-pressed-checkable":X}}),g=r?qe("tag",O(()=>{let w="";const{type:p,size:C,color:{color:_,textColor:x}={}}=e;return w+=p[0],w+=C[0],_&&(w+=`a${go(_)}`),x&&(w+=`b${go(x)}`),t.value&&(w+="c"),w}),v,e):void 0;return Object.assign(Object.assign({},m),{rtlEnabled:u,mergedClsPrefix:n,contentRef:o,mergedBordered:t,handleClick:a,handleCloseClick:c,cssVars:r?void 0:v,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender})},render(){var e,o;const{mergedClsPrefix:t,rtlEnabled:n,closable:r,color:{borderColor:i}={},round:l,onRender:a,$slots:c}=this;a==null||a();const m=yt(c.avatar,v=>v&&d("div",{class:`${t}-tag__avatar`},v)),u=yt(c.icon,v=>v&&d("div",{class:`${t}-tag__icon`},v));return d("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:n,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:l,[`${t}-tag--avatar`]:m,[`${t}-tag--icon`]:u,[`${t}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},u||m,d("span",{class:`${t}-tag__content`,ref:"contentRef"},(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e)),!this.checkable&&r?d(kr,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:l,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?d("div",{class:`${t}-tag__border`,style:{borderColor:i}}):null)}}),Si=V([P("base-selection",`
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
 `,[P("base-loading",`
 color: var(--n-loading-color);
 `),P("base-selection-tags","min-height: var(--n-height);"),z("border, state-border",`
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
 `),P("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[z("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),P("base-selection-overlay",`
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
 `)]),P("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[z("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),P("base-selection-tags",`
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
 `),P("base-selection-label",`
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
 `,[P("base-selection-input",`
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
 `)]),U("focus",[z("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),U("active",[z("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),P("base-selection-label","background-color: var(--n-color-active);"),P("base-selection-tags","background-color: var(--n-color-active);")])]),U("disabled","cursor: not-allowed;",[z("arrow",`
 color: var(--n-arrow-color-disabled);
 `),P("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[P("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),z("render-label",`
 color: var(--n-text-color-disabled);
 `)]),P("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),P("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),P("base-selection-input-tag",`
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
 `)]),["warning","error"].map(e=>U(`${e}-status`,[z("state-border",`border: var(--n-border-${e});`),ke("disabled",[V("&:hover",[z("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),U("active",[z("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),P("base-selection-label",`background-color: var(--n-color-active-${e});`),P("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),U("focus",[z("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),P("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),P("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[V("&:last-child","padding-right: 0;"),P("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[z("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),ki=ae({name:"InternalSelection",props:Object.assign(Object.assign({},Ie.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:t}=Ve(e),n=kt("InternalSelection",t,o),r=I(null),i=I(null),l=I(null),a=I(null),c=I(null),m=I(null),u=I(null),v=I(null),g=I(null),w=I(null),p=I(!1),C=I(!1),_=I(!1),x=Ie("InternalSelection","-internal-selection",Si,Kn,e,fe(e,"clsPrefix")),F=O(()=>e.clearable&&!e.disabled&&(_.value||e.active)),B=O(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):ze(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),S=O(()=>{const k=e.selectedOption;if(k)return k[e.labelField]}),T=O(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function G(){var k;const{value:E}=r;if(E){const{value:me}=i;me&&(me.style.width=`${E.offsetWidth}px`,e.maxTagCount!=="responsive"&&((k=g.value)===null||k===void 0||k.sync({showAllItemsBeforeCalculate:!1})))}}function j(){const{value:k}=w;k&&(k.style.display="none")}function X(){const{value:k}=w;k&&(k.style.display="inline-block")}Be(fe(e,"active"),k=>{k||j()}),Be(fe(e,"pattern"),()=>{e.multiple&&Je(G)});function Q(k){const{onFocus:E}=e;E&&E(k)}function Y(k){const{onBlur:E}=e;E&&E(k)}function R(k){const{onDeleteOption:E}=e;E&&E(k)}function b(k){const{onClear:E}=e;E&&E(k)}function N(k){const{onPatternInput:E}=e;E&&E(k)}function H(k){var E;(!k.relatedTarget||!(!((E=l.value)===null||E===void 0)&&E.contains(k.relatedTarget)))&&Q(k)}function D(k){var E;!((E=l.value)===null||E===void 0)&&E.contains(k.relatedTarget)||Y(k)}function Z(k){b(k)}function A(){_.value=!0}function W(){_.value=!1}function te(k){!e.active||!e.filterable||k.target!==i.value&&k.preventDefault()}function ne(k){R(k)}function L(k){if(k.key==="Backspace"&&!f.value&&!e.pattern.length){const{selectedOptions:E}=e;E!=null&&E.length&&ne(E[E.length-1])}}const f=I(!1);let s=null;function K(k){const{value:E}=r;if(E){const me=k.target.value;E.textContent=me,G()}e.ignoreComposition&&f.value?s=k:N(k)}function ee(){f.value=!0}function Re(){f.value=!1,e.ignoreComposition&&N(s),s=null}function re(k){var E;C.value=!0,(E=e.onPatternFocus)===null||E===void 0||E.call(e,k)}function Se(k){var E;C.value=!1,(E=e.onPatternBlur)===null||E===void 0||E.call(e,k)}function y(){var k,E;if(e.filterable)C.value=!1,(k=m.value)===null||k===void 0||k.blur(),(E=i.value)===null||E===void 0||E.blur();else if(e.multiple){const{value:me}=a;me==null||me.blur()}else{const{value:me}=c;me==null||me.blur()}}function _e(){var k,E,me;e.filterable?(C.value=!1,(k=m.value)===null||k===void 0||k.focus()):e.multiple?(E=a.value)===null||E===void 0||E.focus():(me=c.value)===null||me===void 0||me.focus()}function xe(){const{value:k}=i;k&&(X(),k.focus())}function M(){const{value:k}=i;k&&k.blur()}function q(k){const{value:E}=u;E&&E.setTextContent(`+${k}`)}function ue(){const{value:k}=v;return k}function ye(){return i.value}let Pe=null;function Oe(){Pe!==null&&window.clearTimeout(Pe)}function Te(){e.active||(Oe(),Pe=window.setTimeout(()=>{T.value&&(p.value=!0)},100))}function Ke(){Oe()}function He(k){k||(Oe(),p.value=!1)}Be(T,k=>{k||(p.value=!1)}),Ye(()=>{Kt(()=>{const k=m.value;k&&(e.disabled?k.removeAttribute("tabindex"):k.tabIndex=C.value?-1:0)})}),qo(l,e.onResize);const{inlineThemeDisabled:Ae}=e,Ee=O(()=>{const{size:k}=e,{common:{cubicBezierEaseInOut:E},self:{borderRadius:me,color:Rt,placeholderColor:Pt,textColor:lt,paddingSingle:at,paddingMultiple:st,caretColor:It,colorDisabled:Ot,textColorDisabled:dt,placeholderColorDisabled:De,colorActive:h,boxShadowFocus:$,boxShadowActive:J,boxShadowHover:se,border:ie,borderFocus:oe,borderHover:le,borderActive:we,arrowColor:$e,arrowColorDisabled:Tt,loadingColor:dn,colorActiveWarning:cn,boxShadowFocusWarning:un,boxShadowActiveWarning:fn,boxShadowHoverWarning:hn,borderWarning:vn,borderFocusWarning:pn,borderHoverWarning:mn,borderActiveWarning:gn,colorActiveError:bn,boxShadowFocusError:yn,boxShadowActiveError:wn,boxShadowHoverError:xn,borderError:Cn,borderFocusError:Sn,borderHoverError:kn,borderActiveError:zn,clearColor:Rn,clearColorHover:Pn,clearColorPressed:In,clearSize:On,arrowSize:Tn,[de("height",k)]:Nn,[de("fontSize",k)]:_n}}=x.value,ct=Qe(at),ut=Qe(st);return{"--n-bezier":E,"--n-border":ie,"--n-border-active":we,"--n-border-focus":oe,"--n-border-hover":le,"--n-border-radius":me,"--n-box-shadow-active":J,"--n-box-shadow-focus":$,"--n-box-shadow-hover":se,"--n-caret-color":It,"--n-color":Rt,"--n-color-active":h,"--n-color-disabled":Ot,"--n-font-size":_n,"--n-height":Nn,"--n-padding-single-top":ct.top,"--n-padding-multiple-top":ut.top,"--n-padding-single-right":ct.right,"--n-padding-multiple-right":ut.right,"--n-padding-single-left":ct.left,"--n-padding-multiple-left":ut.left,"--n-padding-single-bottom":ct.bottom,"--n-padding-multiple-bottom":ut.bottom,"--n-placeholder-color":Pt,"--n-placeholder-color-disabled":De,"--n-text-color":lt,"--n-text-color-disabled":dt,"--n-arrow-color":$e,"--n-arrow-color-disabled":Tt,"--n-loading-color":dn,"--n-color-active-warning":cn,"--n-box-shadow-focus-warning":un,"--n-box-shadow-active-warning":fn,"--n-box-shadow-hover-warning":hn,"--n-border-warning":vn,"--n-border-focus-warning":pn,"--n-border-hover-warning":mn,"--n-border-active-warning":gn,"--n-color-active-error":bn,"--n-box-shadow-focus-error":yn,"--n-box-shadow-active-error":wn,"--n-box-shadow-hover-error":xn,"--n-border-error":Cn,"--n-border-focus-error":Sn,"--n-border-hover-error":kn,"--n-border-active-error":zn,"--n-clear-size":On,"--n-clear-color":Rn,"--n-clear-color-hover":Pn,"--n-clear-color-pressed":In,"--n-arrow-size":Tn}}),pe=Ae?qe("internal-selection",O(()=>e.size[0]),Ee,e):void 0;return{mergedTheme:x,mergedClearable:F,mergedClsPrefix:o,rtlEnabled:n,patternInputFocused:C,filterablePlaceholder:B,label:S,selected:T,showTagsPanel:p,isComposing:f,counterRef:u,counterWrapperRef:v,patternInputMirrorRef:r,patternInputRef:i,selfRef:l,multipleElRef:a,singleElRef:c,patternInputWrapperRef:m,overflowRef:g,inputTagElRef:w,handleMouseDown:te,handleFocusin:H,handleClear:Z,handleMouseEnter:A,handleMouseLeave:W,handleDeleteOption:ne,handlePatternKeyDown:L,handlePatternInputInput:K,handlePatternInputBlur:Se,handlePatternInputFocus:re,handleMouseEnterCounter:Te,handleMouseLeaveCounter:Ke,handleFocusout:D,handleCompositionEnd:Re,handleCompositionStart:ee,onPopoverUpdateShow:He,focus:_e,focusInput:xe,blur:y,blurInput:M,updateCounter:q,getCounter:ue,getTail:ye,renderLabel:e.renderLabel,cssVars:Ae?void 0:Ee,themeClass:pe==null?void 0:pe.themeClass,onRender:pe==null?void 0:pe.onRender}},render(){const{status:e,multiple:o,size:t,disabled:n,filterable:r,maxTagCount:i,bordered:l,clsPrefix:a,ellipsisTagPopoverProps:c,onRender:m,renderTag:u,renderLabel:v}=this;m==null||m();const g=i==="responsive",w=typeof i=="number",p=g||w,C=d(Hn,null,{default:()=>d(zr,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var x,F;return(F=(x=this.$slots).arrow)===null||F===void 0?void 0:F.call(x)}})});let _;if(o){const{labelField:x}=this,F=N=>d("div",{class:`${a}-base-selection-tag-wrapper`,key:N.value},u?u({option:N,handleClose:()=>{this.handleDeleteOption(N)}}):d(Et,{size:t,closable:!N.disabled,disabled:n,onClose:()=>{this.handleDeleteOption(N)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>v?v(N,!0):ze(N[x],N,!0)})),B=()=>(w?this.selectedOptions.slice(0,i):this.selectedOptions).map(F),S=r?d("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:n,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),d("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,T=g?()=>d("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},d(Et,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:n})):void 0;let G;if(w){const N=this.selectedOptions.length-i;N>0&&(G=d("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},d(Et,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:n},{default:()=>`+${N}`})))}const j=g?r?d(Vt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:B,counter:T,tail:()=>S}):d(Vt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:B,counter:T}):w&&G?B().concat(G):B(),X=p?()=>d("div",{class:`${a}-base-selection-popover`},g?B():this.selectedOptions.map(F)):void 0,Q=p?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},c):null,R=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},d("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,b=r?d("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},j,g?null:S,C):d("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:n?void 0:0},j,C);_=d(no,null,p?d(lo,Object.assign({},Q,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>b,default:X}):b,R)}else if(r){const x=this.pattern||this.isComposing,F=this.active?!x:!this.selected,B=this.active?!1:this.selected;_=d("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:n,disabled:n,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),B?d("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},d("div",{class:`${a}-base-selection-overlay__wrapper`},u?u({option:this.selectedOption,handleClose:()=>{}}):v?v(this.selectedOption,!0):ze(this.label,this.selectedOption,!0))):null,F?d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,C)}else _=d("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?d("div",{class:`${a}-base-selection-input`,title:Or(this.label),key:"input"},d("div",{class:`${a}-base-selection-input__content`},u?u({option:this.selectedOption,handleClose:()=>{}}):v?v(this.selectedOption,!0):ze(this.label,this.selectedOption,!0))):d("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),C);return d("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},_,l?d("div",{class:`${a}-base-selection__border`}):null,l?d("div",{class:`${a}-base-selection__state-border`}):null)}});function St(e){return e.type==="group"}function Zo(e){return e.type==="ignored"}function $t(e,o){try{return!!(1+o.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function zi(e,o){return{getIsGroup:St,getIgnored:Zo,getKey(n){return St(n)?n.name||n.key||"key-required":n[e]},getChildren(n){return n[o]}}}function Ri(e,o,t,n){if(!o)return e;function r(i){if(!Array.isArray(i))return[];const l=[];for(const a of i)if(St(a)){const c=r(a[n]);c.length&&l.push(Object.assign({},a,{[n]:c}))}else{if(Zo(a))continue;o(t,a)&&l.push(a)}return l}return r(e)}function Pi(e,o,t){const n=new Map;return e.forEach(r=>{St(r)?r[t].forEach(i=>{n.set(i[o],i)}):n.set(r[o],r)}),n}const ge="0!important",Jo="-1px!important";function Xe(e){return U(e+"-type",[V("& +",[P("button",{},[U(e+"-type",[z("border",{borderLeftWidth:ge}),z("state-border",{left:Jo})])])])])}function Ze(e){return U(e+"-type",[V("& +",[P("button",[U(e+"-type",[z("border",{borderTopWidth:ge}),z("state-border",{top:Jo})])])])])}const Ii=P("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[ke("vertical",{flexDirection:"row"},[ke("rtl",[P("button",[V("&:first-child:not(:last-child)",`
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
 `),Xe("default"),U("ghost",[Xe("primary"),Xe("info"),Xe("success"),Xe("warning"),Xe("error")])])])]),U("vertical",{flexDirection:"column"},[P("button",[V("&:first-child:not(:last-child)",`
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
 `),Ze("default"),U("ghost",[Ze("primary"),Ze("info"),Ze("success"),Ze("warning"),Ze("error")])])])]),Oi={size:{type:String,default:void 0},vertical:Boolean},Ti=ae({name:"ButtonGroup",props:Oi,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:t}=Ve(e);return Dn("-button-group",Ii,o),ve(jn,e),{rtlEnabled:kt("ButtonGroup",t,o),mergedClsPrefix:o}},render(){const{mergedClsPrefix:e}=this;return d("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),Ni=V([P("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),P("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Xt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),_i=Object.assign(Object.assign({},Ie.props),{to:Dt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Fi=ae({name:"Select",props:_i,setup(e){const{mergedClsPrefixRef:o,mergedBorderedRef:t,namespaceRef:n,inlineThemeDisabled:r}=Ve(e),i=Ie("Select","-select",Ni,Un,e,o),l=I(e.defaultValue),a=fe(e,"value"),c=rt(a,l),m=I(!1),u=I(""),v=O(()=>{const{valueField:h,childrenField:$}=e,J=zi(h,$);return nt(b.value,J)}),g=O(()=>Pi(Y.value,e.valueField,e.childrenField)),w=I(!1),p=rt(fe(e,"show"),w),C=I(null),_=I(null),x=I(null),{localeRef:F}=To("Select"),B=O(()=>{var h;return(h=e.placeholder)!==null&&h!==void 0?h:F.value.placeholder}),S=jo(e,["items","options"]),T=[],G=I([]),j=I([]),X=I(new Map),Q=O(()=>{const{fallbackOption:h}=e;if(h===void 0){const{labelField:$,valueField:J}=e;return se=>({[$]:String(se),[J]:se})}return h===!1?!1:$=>Object.assign(h($),{value:$})}),Y=O(()=>j.value.concat(G.value).concat(S.value)),R=O(()=>{const{filter:h}=e;if(h)return h;const{labelField:$,valueField:J}=e;return(se,ie)=>{if(!ie)return!1;const oe=ie[$];if(typeof oe=="string")return $t(se,oe);const le=ie[J];return typeof le=="string"?$t(se,le):typeof le=="number"?$t(se,String(le)):!1}}),b=O(()=>{if(e.remote)return S.value;{const{value:h}=Y,{value:$}=u;return!$.length||!e.filterable?h:Ri(h,R.value,$,e.childrenField)}});function N(h){const $=e.remote,{value:J}=X,{value:se}=g,{value:ie}=Q,oe=[];return h.forEach(le=>{if(se.has(le))oe.push(se.get(le));else if($&&J.has(le))oe.push(J.get(le));else if(ie){const we=ie(le);we&&oe.push(we)}}),oe}const H=O(()=>{if(e.multiple){const{value:h}=c;return Array.isArray(h)?N(h):[]}return null}),D=O(()=>{const{value:h}=c;return!e.multiple&&!Array.isArray(h)?h===null?null:N([h])[0]||null:null}),Z=Vn(e),{mergedSizeRef:A,mergedDisabledRef:W,mergedStatusRef:te}=Z;function ne(h,$){const{onChange:J,"onUpdate:value":se,onUpdateValue:ie}=e,{nTriggerFormChange:oe,nTriggerFormInput:le}=Z;J&&be(J,h,$),ie&&be(ie,h,$),se&&be(se,h,$),l.value=h,oe(),le()}function L(h){const{onBlur:$}=e,{nTriggerFormBlur:J}=Z;$&&be($,h),J()}function f(){const{onClear:h}=e;h&&be(h)}function s(h){const{onFocus:$,showOnFocus:J}=e,{nTriggerFormFocus:se}=Z;$&&be($,h),se(),J&&Se()}function K(h){const{onSearch:$}=e;$&&be($,h)}function ee(h){const{onScroll:$}=e;$&&be($,h)}function Re(){var h;const{remote:$,multiple:J}=e;if($){const{value:se}=X;if(J){const{valueField:ie}=e;(h=H.value)===null||h===void 0||h.forEach(oe=>{se.set(oe[ie],oe)})}else{const ie=D.value;ie&&se.set(ie[e.valueField],ie)}}}function re(h){const{onUpdateShow:$,"onUpdate:show":J}=e;$&&be($,h),J&&be(J,h),w.value=h}function Se(){W.value||(re(!0),w.value=!0,e.filterable&&st())}function y(){re(!1)}function _e(){u.value="",j.value=T}const xe=I(!1);function M(){e.filterable&&(xe.value=!0)}function q(){e.filterable&&(xe.value=!1,p.value||_e())}function ue(){W.value||(p.value?e.filterable?st():y():Se())}function ye(h){var $,J;!((J=($=x.value)===null||$===void 0?void 0:$.selfRef)===null||J===void 0)&&J.contains(h.relatedTarget)||(m.value=!1,L(h),y())}function Pe(h){s(h),m.value=!0}function Oe(h){m.value=!0}function Te(h){var $;!(($=C.value)===null||$===void 0)&&$.$el.contains(h.relatedTarget)||(m.value=!1,L(h),y())}function Ke(){var h;(h=C.value)===null||h===void 0||h.focus(),y()}function He(h){var $;p.value&&(!(($=C.value)===null||$===void 0)&&$.$el.contains(Gn(h))||y())}function Ae(h){if(!Array.isArray(h))return[];if(Q.value)return Array.from(h);{const{remote:$}=e,{value:J}=g;if($){const{value:se}=X;return h.filter(ie=>J.has(ie)||se.has(ie))}else return h.filter(se=>J.has(se))}}function Ee(h){pe(h.rawNode)}function pe(h){if(W.value)return;const{tag:$,remote:J,clearFilterAfterSelect:se,valueField:ie}=e;if($&&!J){const{value:oe}=j,le=oe[0]||null;if(le){const we=G.value;we.length?we.push(le):G.value=[le],j.value=T}}if(J&&X.value.set(h[ie],h),e.multiple){const oe=Ae(c.value),le=oe.findIndex(we=>we===h[ie]);if(~le){if(oe.splice(le,1),$&&!J){const we=k(h[ie]);~we&&(G.value.splice(we,1),se&&(u.value=""))}}else oe.push(h[ie]),se&&(u.value="");ne(oe,N(oe))}else{if($&&!J){const oe=k(h[ie]);~oe?G.value=[G.value[oe]]:G.value=T}at(),y(),ne(h[ie],h)}}function k(h){return G.value.findIndex(J=>J[e.valueField]===h)}function E(h){p.value||Se();const{value:$}=h.target;u.value=$;const{tag:J,remote:se}=e;if(K($),J&&!se){if(!$){j.value=T;return}const{onCreate:ie}=e,oe=ie?ie($):{[e.labelField]:$,[e.valueField]:$},{valueField:le,labelField:we}=e;S.value.some($e=>$e[le]===oe[le]||$e[we]===oe[we])||G.value.some($e=>$e[le]===oe[le]||$e[we]===oe[we])?j.value=T:j.value=[oe]}}function me(h){h.stopPropagation();const{multiple:$}=e;!$&&e.filterable&&y(),f(),$?ne([],[]):ne(null,null)}function Rt(h){!et(h,"action")&&!et(h,"empty")&&h.preventDefault()}function Pt(h){ee(h)}function lt(h){var $,J,se,ie,oe;if(!e.keyboard){h.preventDefault();return}switch(h.key){case" ":if(e.filterable)break;h.preventDefault();case"Enter":if(!(!(($=C.value)===null||$===void 0)&&$.isComposing)){if(p.value){const le=(J=x.value)===null||J===void 0?void 0:J.getPendingTmNode();le?Ee(le):e.filterable||(y(),at())}else if(Se(),e.tag&&xe.value){const le=j.value[0];if(le){const we=le[e.valueField],{value:$e}=c;e.multiple&&Array.isArray($e)&&$e.some(Tt=>Tt===we)||pe(le)}}}h.preventDefault();break;case"ArrowUp":if(h.preventDefault(),e.loading)return;p.value&&((se=x.value)===null||se===void 0||se.prev());break;case"ArrowDown":if(h.preventDefault(),e.loading)return;p.value?(ie=x.value)===null||ie===void 0||ie.next():Se();break;case"Escape":p.value&&(Rr(h),y()),(oe=C.value)===null||oe===void 0||oe.focus();break}}function at(){var h;(h=C.value)===null||h===void 0||h.focus()}function st(){var h;(h=C.value)===null||h===void 0||h.focusInput()}function It(){var h;p.value&&((h=_.value)===null||h===void 0||h.syncPosition())}Re(),Be(fe(e,"options"),Re);const Ot={focus:()=>{var h;(h=C.value)===null||h===void 0||h.focus()},focusInput:()=>{var h;(h=C.value)===null||h===void 0||h.focusInput()},blur:()=>{var h;(h=C.value)===null||h===void 0||h.blur()},blurInput:()=>{var h;(h=C.value)===null||h===void 0||h.blurInput()}},dt=O(()=>{const{self:{menuBoxShadow:h}}=i.value;return{"--n-menu-box-shadow":h}}),De=r?qe("select",void 0,dt,e):void 0;return Object.assign(Object.assign({},Ot),{mergedStatus:te,mergedClsPrefix:o,mergedBordered:t,namespace:n,treeMate:v,isMounted:Wn(),triggerRef:C,menuRef:x,pattern:u,uncontrolledShow:w,mergedShow:p,adjustedTo:Dt(e),uncontrolledValue:l,mergedValue:c,followerRef:_,localizedPlaceholder:B,selectedOption:D,selectedOptions:H,mergedSize:A,mergedDisabled:W,focused:m,activeWithoutMenuOpen:xe,inlineThemeDisabled:r,onTriggerInputFocus:M,onTriggerInputBlur:q,handleTriggerOrMenuResize:It,handleMenuFocus:Oe,handleMenuBlur:Te,handleMenuTabOut:Ke,handleTriggerClick:ue,handleToggle:Ee,handleDeleteOption:pe,handlePatternInput:E,handleClear:me,handleTriggerBlur:ye,handleTriggerFocus:Pe,handleKeydown:lt,handleMenuAfterLeave:_e,handleMenuClickOutside:He,handleMenuScroll:Pt,handleMenuKeydown:lt,handleMenuMousedown:Rt,mergedTheme:i,cssVars:r?void 0:dt,themeClass:De==null?void 0:De.themeClass,onRender:De==null?void 0:De.onRender})},render(){return d("div",{class:`${this.mergedClsPrefix}-select`},d(Vo,null,{default:()=>[d(Wo,null,{default:()=>d(ki,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,o;return[(o=(e=this.$slots).arrow)===null||o===void 0?void 0:o.call(e)]}})}),d(Uo,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Dt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>d(oo,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,o,t;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Bo(d(bi,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(o=this.menuProps)===null||o===void 0?void 0:o.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(t=this.menuProps)===null||t===void 0?void 0:t.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var n,r;return[(r=(n=this.$slots).empty)===null||r===void 0?void 0:r.call(n)]},header:()=>{var n,r;return[(r=(n=this.$slots).header)===null||r===void 0?void 0:r.call(n)]},action:()=>{var n,r;return[(r=(n=this.$slots).action)===null||r===void 0?void 0:r.call(n)]}}),this.displayDirective==="show"?[[Lo,this.mergedShow],[bo,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[bo,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Qo=ae({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),co=We("n-dropdown-menu"),zt=We("n-dropdown"),Ro=We("n-dropdown-option");function Ut(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function Mi(e){return e.type==="group"}function en(e){return e.type==="divider"}function Ai(e){return e.type==="render"}const tn=ae({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=ce(zt),{hoverKeyRef:t,keyboardKeyRef:n,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:l,animatedRef:a,mergedShowRef:c,renderLabelRef:m,renderIconRef:u,labelFieldRef:v,childrenFieldRef:g,renderOptionRef:w,nodePropsRef:p,menuPropsRef:C}=o,_=ce(Ro,null),x=ce(co),F=ce(No),B=O(()=>e.tmNode.rawNode),S=O(()=>{const{value:A}=g;return Ut(e.tmNode.rawNode,A)}),T=O(()=>{const{disabled:A}=e.tmNode;return A}),G=O(()=>{if(!S.value)return!1;const{key:A,disabled:W}=e.tmNode;if(W)return!1;const{value:te}=t,{value:ne}=n,{value:L}=r,{value:f}=i;return te!==null?f.includes(A):ne!==null?f.includes(A)&&f[f.length-1]!==A:L!==null?f.includes(A):!1}),j=O(()=>n.value===null&&!a.value),X=Nr(G,300,j),Q=O(()=>!!(_!=null&&_.enteringSubmenuRef.value)),Y=I(!1);ve(Ro,{enteringSubmenuRef:Y});function R(){Y.value=!0}function b(){Y.value=!1}function N(){const{parentKey:A,tmNode:W}=e;W.disabled||c.value&&(r.value=A,n.value=null,t.value=W.key)}function H(){const{tmNode:A}=e;A.disabled||c.value&&t.value!==A.key&&N()}function D(A){if(e.tmNode.disabled||!c.value)return;const{relatedTarget:W}=A;W&&!et({target:W},"dropdownOption")&&!et({target:W},"scrollbarRail")&&(t.value=null)}function Z(){const{value:A}=S,{tmNode:W}=e;c.value&&!A&&!W.disabled&&(o.doSelect(W.key,W.rawNode),o.doUpdateShow(!1))}return{labelField:v,renderLabel:m,renderIcon:u,siblingHasIcon:x.showIconRef,siblingHasSubmenu:x.hasSubmenuRef,menuProps:C,popoverBody:F,animated:a,mergedShowSubmenu:O(()=>X.value&&!Q.value),rawNode:B,hasSubmenu:S,pending:Me(()=>{const{value:A}=i,{key:W}=e.tmNode;return A.includes(W)}),childActive:Me(()=>{const{value:A}=l,{key:W}=e.tmNode,te=A.findIndex(ne=>W===ne);return te===-1?!1:te<A.length-1}),active:Me(()=>{const{value:A}=l,{key:W}=e.tmNode,te=A.findIndex(ne=>W===ne);return te===-1?!1:te===A.length-1}),mergedDisabled:T,renderOption:w,nodeProps:p,handleClick:Z,handleMouseMove:H,handleMouseEnter:N,handleMouseLeave:D,handleSubmenuBeforeEnter:R,handleSubmenuAfterEnter:b}},render(){var e,o;const{animated:t,rawNode:n,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:l,siblingHasSubmenu:a,renderLabel:c,renderIcon:m,renderOption:u,nodeProps:v,props:g,scrollable:w}=this;let p=null;if(r){const F=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);p=d(on,Object.assign({},F,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const C={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},_=v==null?void 0:v(n),x=d("div",Object.assign({class:[`${i}-dropdown-option`,_==null?void 0:_.class],"data-dropdown-option":!0},_),d("div",to(C,g),[d("div",{class:[`${i}-dropdown-option-body__prefix`,l&&`${i}-dropdown-option-body__prefix--show-icon`]},[m?m(n):ze(n.icon)]),d("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},c?c(n):ze((o=n[this.labelField])!==null&&o!==void 0?o:n.title)),d("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,a&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(jt,null,{default:()=>d(Lr,null)}):null)]),this.hasSubmenu?d(Vo,null,{default:()=>[d(Wo,null,{default:()=>d("div",{class:`${i}-dropdown-offset-container`},d(Uo,{show:this.mergedShowSubmenu,placement:this.placement,to:w&&this.popoverBody||void 0,teleportDisabled:!w},{default:()=>d("div",{class:`${i}-dropdown-menu-wrapper`},t?d(oo,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>p}):p)}))})]}):null);return u?u({node:x,option:n}):x}}),Ei=ae({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=ce(co),{renderLabelRef:t,labelFieldRef:n,nodePropsRef:r,renderOptionRef:i}=ce(zt);return{labelField:n,showIcon:e,hasSubmenu:o,renderLabel:t,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:o,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:l}=this,{rawNode:a}=this.tmNode,c=d("div",Object.assign({class:`${o}-dropdown-option`},r==null?void 0:r(a)),d("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,n&&`${o}-dropdown-option-body__prefix--show-icon`]},ze(a.icon)),d("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(a):ze((e=a.title)!==null&&e!==void 0?e:a[this.labelField])),d("div",{class:[`${o}-dropdown-option-body__suffix`,t&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:c,option:a}):c}}),$i=ae({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:t}=this,{children:n}=e;return d(no,null,d(Ei,{clsPrefix:t,tmNode:e,key:e.key}),n==null?void 0:n.map(r=>{const{rawNode:i}=r;return i.show===!1?null:en(i)?d(Qo,{clsPrefix:t,key:r.key}):r.isGroup?(qn("dropdown","`group` node is not allowed to be put in `group` node."),null):d(tn,{clsPrefix:t,tmNode:r,parentKey:o,key:r.key})}))}}),Bi=ae({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return d("div",o,[e==null?void 0:e()])}}),on=ae({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:t}=ce(zt);ve(co,{showIconRef:O(()=>{const r=o.value;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:c})=>r?r(c):c.icon);const{rawNode:a}=i;return r?r(a):a.icon})}),hasSubmenuRef:O(()=>{const{value:r}=t;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:c})=>Ut(c,r));const{rawNode:a}=i;return Ut(a,r)})})});const n=I(null);return ve(Yn,null),ve(Xn,null),ve(No,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:o,scrollable:t}=this,n=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Ai(i)?d(Bi,{tmNode:r,key:r.key}):en(i)?d(Qo,{clsPrefix:o,key:r.key}):Mi(i)?d($i,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key}):d(tn,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:t})});return d("div",{class:[`${o}-dropdown-menu`,t&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},t?d(Zn,{contentClass:`${o}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?xr({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Li=P("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Xt(),P("dropdown-option",`
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
 `)]),P("dropdown-option-body",`
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
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),V("&::before","background-color: var(--n-option-color-hover);")]),U("active",`
 color: var(--n-option-text-color-active);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),V("&::before","background-color: var(--n-option-color-active);")]),U("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),U("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),U("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[z("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[U("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),z("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[U("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),P("icon",`
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
 `,[U("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),P("icon",`
 font-size: var(--n-option-icon-size);
 `)]),P("dropdown-menu","pointer-events: all;")]),P("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),P("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),P("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),V(">",[P("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ke("scrollable",`
 padding: var(--n-padding);
 `),U("scrollable",[z("content",`
 padding: var(--n-padding);
 `)])]),Ki={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Hi=Object.keys(Go),Di=Object.assign(Object.assign(Object.assign({},Go),Ki),Ie.props),ji=ae({name:"Dropdown",inheritAttrs:!1,props:Di,setup(e){const o=I(!1),t=rt(fe(e,"show"),o),n=O(()=>{const{keyField:b,childrenField:N}=e;return nt(e.options,{getKey(H){return H[b]},getDisabled(H){return H.disabled===!0},getIgnored(H){return H.type==="divider"||H.type==="render"},getChildren(H){return H[N]}})}),r=O(()=>n.value.treeNodes),i=I(null),l=I(null),a=I(null),c=O(()=>{var b,N,H;return(H=(N=(b=i.value)!==null&&b!==void 0?b:l.value)!==null&&N!==void 0?N:a.value)!==null&&H!==void 0?H:null}),m=O(()=>n.value.getPath(c.value).keyPath),u=O(()=>n.value.getPath(e.value).keyPath),v=Me(()=>e.keyboard&&t.value);_r({keydown:{ArrowUp:{prevent:!0,handler:T},ArrowRight:{prevent:!0,handler:S},ArrowDown:{prevent:!0,handler:G},ArrowLeft:{prevent:!0,handler:B},Enter:{prevent:!0,handler:j},Escape:F}},v);const{mergedClsPrefixRef:g,inlineThemeDisabled:w}=Ve(e),p=Ie("Dropdown","-dropdown",Li,Jn,e,g);ve(zt,{labelFieldRef:fe(e,"labelField"),childrenFieldRef:fe(e,"childrenField"),renderLabelRef:fe(e,"renderLabel"),renderIconRef:fe(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:l,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:m,activeKeyPathRef:u,animatedRef:fe(e,"animated"),mergedShowRef:t,nodePropsRef:fe(e,"nodeProps"),renderOptionRef:fe(e,"renderOption"),menuPropsRef:fe(e,"menuProps"),doSelect:C,doUpdateShow:_}),Be(t,b=>{!e.animated&&!b&&x()});function C(b,N){const{onSelect:H}=e;H&&be(H,b,N)}function _(b){const{"onUpdate:show":N,onUpdateShow:H}=e;N&&be(N,b),H&&be(H,b),o.value=b}function x(){i.value=null,l.value=null,a.value=null}function F(){_(!1)}function B(){Q("left")}function S(){Q("right")}function T(){Q("up")}function G(){Q("down")}function j(){const b=X();b!=null&&b.isLeaf&&t.value&&(C(b.key,b.rawNode),_(!1))}function X(){var b;const{value:N}=n,{value:H}=c;return!N||H===null?null:(b=N.getNode(H))!==null&&b!==void 0?b:null}function Q(b){const{value:N}=c,{value:{getFirstAvailableNode:H}}=n;let D=null;if(N===null){const Z=H();Z!==null&&(D=Z.key)}else{const Z=X();if(Z){let A;switch(b){case"down":A=Z.getNext();break;case"up":A=Z.getPrev();break;case"right":A=Z.getChild();break;case"left":A=Z.getParent();break}A&&(D=A.key)}}D!==null&&(i.value=null,l.value=D)}const Y=O(()=>{const{size:b,inverted:N}=e,{common:{cubicBezierEaseInOut:H},self:D}=p.value,{padding:Z,dividerColor:A,borderRadius:W,optionOpacityDisabled:te,[de("optionIconSuffixWidth",b)]:ne,[de("optionSuffixWidth",b)]:L,[de("optionIconPrefixWidth",b)]:f,[de("optionPrefixWidth",b)]:s,[de("fontSize",b)]:K,[de("optionHeight",b)]:ee,[de("optionIconSize",b)]:Re}=D,re={"--n-bezier":H,"--n-font-size":K,"--n-padding":Z,"--n-border-radius":W,"--n-option-height":ee,"--n-option-prefix-width":s,"--n-option-icon-prefix-width":f,"--n-option-suffix-width":L,"--n-option-icon-suffix-width":ne,"--n-option-icon-size":Re,"--n-divider-color":A,"--n-option-opacity-disabled":te};return N?(re["--n-color"]=D.colorInverted,re["--n-option-color-hover"]=D.optionColorHoverInverted,re["--n-option-color-active"]=D.optionColorActiveInverted,re["--n-option-text-color"]=D.optionTextColorInverted,re["--n-option-text-color-hover"]=D.optionTextColorHoverInverted,re["--n-option-text-color-active"]=D.optionTextColorActiveInverted,re["--n-option-text-color-child-active"]=D.optionTextColorChildActiveInverted,re["--n-prefix-color"]=D.prefixColorInverted,re["--n-suffix-color"]=D.suffixColorInverted,re["--n-group-header-text-color"]=D.groupHeaderTextColorInverted):(re["--n-color"]=D.color,re["--n-option-color-hover"]=D.optionColorHover,re["--n-option-color-active"]=D.optionColorActive,re["--n-option-text-color"]=D.optionTextColor,re["--n-option-text-color-hover"]=D.optionTextColorHover,re["--n-option-text-color-active"]=D.optionTextColorActive,re["--n-option-text-color-child-active"]=D.optionTextColorChildActive,re["--n-prefix-color"]=D.prefixColor,re["--n-suffix-color"]=D.suffixColor,re["--n-group-header-text-color"]=D.groupHeaderTextColor),re}),R=w?qe("dropdown",O(()=>`${e.size[0]}${e.inverted?"i":""}`),Y,e):void 0;return{mergedClsPrefix:g,mergedTheme:p,tmNodes:r,mergedShow:t,handleAfterLeave:()=>{e.animated&&x()},doUpdateShow:_,cssVars:w?void 0:Y,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender}},render(){const e=(n,r,i,l,a)=>{var c;const{mergedClsPrefix:m,menuProps:u}=this;(c=this.onRender)===null||c===void 0||c.call(this);const v=(u==null?void 0:u(void 0,this.tmNodes.map(w=>w.rawNode)))||{},g={ref:Tr(r),class:[n,`${m}-dropdown`,this.themeClass],clsPrefix:m,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:a};return d(on,to(this.$attrs,g,v))},{mergedTheme:o}=this,t={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(lo,Object.assign({},gt(this.$props,Hi),t),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}}),Vi=We("n-layout-sider"),it=We("n-menu"),uo=We("n-submenu"),fo=We("n-menu-item-group"),mt=8;function ho(e){const o=ce(it),{props:t,mergedCollapsedRef:n}=o,r=ce(uo,null),i=ce(fo,null),l=O(()=>t.mode==="horizontal"),a=O(()=>l.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=O(()=>{var g;return Math.max((g=t.collapsedIconSize)!==null&&g!==void 0?g:t.iconSize,t.iconSize)}),m=O(()=>{var g;return!l.value&&e.root&&n.value&&(g=t.collapsedIconSize)!==null&&g!==void 0?g:t.iconSize}),u=O(()=>{if(l.value)return;const{collapsedWidth:g,indent:w,rootIndent:p}=t,{root:C,isGroup:_}=e,x=p===void 0?w:p;return C?n.value?g/2-c.value/2:x:i&&typeof i.paddingLeftRef.value=="number"?w/2+i.paddingLeftRef.value:r&&typeof r.paddingLeftRef.value=="number"?(_?w/2:w)+r.paddingLeftRef.value:0}),v=O(()=>{const{collapsedWidth:g,indent:w,rootIndent:p}=t,{value:C}=c,{root:_}=e;return l.value||!_||!n.value?mt:(p===void 0?w:p)+C+mt-(g+C)/2});return{dropdownPlacement:a,activeIconSize:m,maxIconSize:c,paddingLeft:u,iconMarginRight:v,NMenu:o,NSubmenu:r}}const vo={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},nn=Object.assign(Object.assign({},vo),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Wi=ae({name:"MenuOptionGroup",props:nn,setup(e){ve(uo,null);const o=ho(e);ve(fo,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:t,props:n}=ce(it);return function(){const{value:r}=t,i=o.paddingLeft.value,{nodeProps:l}=n,a=l==null?void 0:l(e.tmNode.rawNode);return d("div",{class:`${r}-menu-item-group`,role:"group"},d("div",Object.assign({},a,{class:[`${r}-menu-item-group-title`,a==null?void 0:a.class],style:[(a==null?void 0:a.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),ze(e.title),e.extra?d(no,null," ",ze(e.extra)):null),d("div",null,e.tmNodes.map(c=>po(c,n))))}}}),rn=ae({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:o}=ce(it);return{menuProps:o,style:O(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:O(()=>{const{maxIconSize:t,activeIconSize:n,iconMarginRight:r}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:t,renderLabel:n,renderExtra:r,expandIcon:i}}=this,l=t?t(o.rawNode):ze(this.icon);return d("div",{onClick:a=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,a)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},l&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[l]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:n?n(o.rawNode):ze(this.title),this.extra||r?d("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(o.rawNode):ze(this.extra)):null),this.showArrow?d(Yt,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(o.rawNode):d(Hr,null)}):null)}}),ln=Object.assign(Object.assign({},vo),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),Gt=ae({name:"Submenu",props:ln,setup(e){const o=ho(e),{NMenu:t,NSubmenu:n}=o,{props:r,mergedCollapsedRef:i,mergedThemeRef:l}=t,a=O(()=>{const{disabled:g}=e;return n!=null&&n.mergedDisabledRef.value||r.disabled?!0:g}),c=I(!1);ve(uo,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:a}),ve(fo,null);function m(){const{onClick:g}=e;g&&g()}function u(){a.value||(i.value||t.toggleExpand(e.internalKey),m())}function v(g){c.value=g}return{menuProps:r,mergedTheme:l,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:c,paddingLeft:o.paddingLeft,mergedDisabled:a,mergedValue:t.mergedValueRef,childActive:Me(()=>{var g;return(g=e.virtualChildActive)!==null&&g!==void 0?g:t.activePathRef.value.includes(e.internalKey)}),collapsed:O(()=>r.mode==="horizontal"?!1:i.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:O(()=>!a.value&&(r.mode==="horizontal"||i.value)),handlePopoverShowChange:v,handleClick:u}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:t,renderLabel:n}}=this,r=()=>{const{isHorizontal:l,paddingLeft:a,collapsed:c,mergedDisabled:m,maxIconSize:u,activeIconSize:v,title:g,childActive:w,icon:p,handleClick:C,menuProps:{nodeProps:_},dropdownShow:x,iconMarginRight:F,tmNode:B,mergedClsPrefix:S,isEllipsisPlaceholder:T,extra:G}=this,j=_==null?void 0:_(B.rawNode);return d("div",Object.assign({},j,{class:[`${S}-menu-item`,j==null?void 0:j.class],role:"menuitem"}),d(rn,{tmNode:B,paddingLeft:a,collapsed:c,disabled:m,iconMarginRight:F,maxIconSize:u,activeIconSize:v,title:g,extra:G,showArrow:!l,childActive:w,clsPrefix:S,icon:p,hover:x,onClick:C,isEllipsisPlaceholder:T}))},i=()=>d(Qn,null,{default:()=>{const{tmNodes:l,collapsed:a}=this;return a?null:d("div",{class:`${o}-submenu-children`,role:"menu"},l.map(c=>po(c,this.menuProps)))}});return this.root?d(ji,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:n}),{default:()=>d("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},r(),this.isHorizontal?null:i())}):d("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},r(),i())}}),an=Object.assign(Object.assign({},vo),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Ui=ae({name:"MenuOption",props:an,setup(e){const o=ho(e),{NSubmenu:t,NMenu:n}=o,{props:r,mergedClsPrefixRef:i,mergedCollapsedRef:l}=n,a=t?t.mergedDisabledRef:{value:!1},c=O(()=>a.value||e.disabled);function m(v){const{onClick:g}=e;g&&g(v)}function u(v){c.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),m(v))}return{mergedClsPrefix:i,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:r,dropdownEnabled:Me(()=>e.root&&l.value&&r.mode!=="horizontal"&&!c.value),selected:Me(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:u}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:t,menuProps:{renderLabel:n,nodeProps:r}}=this,i=r==null?void 0:r(t.rawNode);return d("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),d(Cr,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(t.rawNode):ze(this.title),trigger:()=>d(rn,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Gi=ae({name:"MenuDivider",setup(){const e=ce(it),{mergedClsPrefixRef:o,isHorizontalRef:t}=e;return()=>t.value?null:d("div",{class:`${o.value}-menu-divider`})}}),qi=ao(nn),Yi=ao(an),Xi=ao(ln);function qt(e){return e.type==="divider"||e.type==="render"}function Zi(e){return e.type==="divider"}function po(e,o){const{rawNode:t}=e,{show:n}=t;if(n===!1)return null;if(qt(t))return Zi(t)?d(Gi,Object.assign({key:e.key},t.props)):null;const{labelField:r}=o,{key:i,level:l,isGroup:a}=e,c=Object.assign(Object.assign({},t),{title:t.title||t[r],extra:t.titleExtra||t.extra,key:i,internalKey:i,level:l,root:l===0,isGroup:a});return e.children?e.isGroup?d(Wi,gt(c,qi,{tmNode:e,tmNodes:e.children,key:i})):d(Gt,gt(c,Xi,{key:i,rawNodes:t[o.childrenField],tmNodes:e.children,tmNode:e})):d(Ui,gt(c,Yi,{key:i,tmNode:e}))}const Po=[V("&::before","background-color: var(--n-item-color-hover);"),z("arrow",`
 color: var(--n-arrow-color-hover);
 `),z("icon",`
 color: var(--n-item-icon-color-hover);
 `),P("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[V("a",`
 color: var(--n-item-text-color-hover);
 `),z("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Io=[z("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),P("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[V("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),z("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Ji=V([P("menu",`
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
 `,[P("submenu","margin: 0;"),P("menu-item","margin: 0;"),P("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[V("&::before","display: none;"),U("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),P("menu-item-content",[U("selected",[z("icon","color: var(--n-item-icon-color-active-horizontal);"),P("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[V("a","color: var(--n-item-text-color-active-horizontal);"),z("extra","color: var(--n-item-text-color-active-horizontal);")])]),U("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[P("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[V("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),z("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),z("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ke("disabled",[ke("selected, child-active",[V("&:focus-within",Io)]),U("selected",[Ue(null,[z("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),P("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[V("a","color: var(--n-item-text-color-active-hover-horizontal);"),z("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),U("child-active",[Ue(null,[z("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),P("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[V("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),z("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),Ue("border-bottom: 2px solid var(--n-border-color-horizontal);",Io)]),P("menu-item-content-header",[V("a","color: var(--n-item-text-color-horizontal);")])])]),ke("responsive",[P("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),U("collapsed",[P("menu-item-content",[U("selected",[V("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),P("menu-item-content-header","opacity: 0;"),z("arrow","opacity: 0;"),z("icon","color: var(--n-item-icon-color-collapsed);")])]),P("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),P("menu-item-content",`
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
 `),U("collapsed",[z("arrow","transform: rotate(0);")]),U("selected",[V("&::before","background-color: var(--n-item-color-active);"),z("arrow","color: var(--n-arrow-color-active);"),z("icon","color: var(--n-item-icon-color-active);"),P("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[V("a","color: var(--n-item-text-color-active);"),z("extra","color: var(--n-item-text-color-active);")])]),U("child-active",[P("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[V("a",`
 color: var(--n-item-text-color-child-active);
 `),z("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),z("arrow",`
 color: var(--n-arrow-color-child-active);
 `),z("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ke("disabled",[ke("selected, child-active",[V("&:focus-within",Po)]),U("selected",[Ue(null,[z("arrow","color: var(--n-arrow-color-active-hover);"),z("icon","color: var(--n-item-icon-color-active-hover);"),P("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[V("a","color: var(--n-item-text-color-active-hover);"),z("extra","color: var(--n-item-text-color-active-hover);")])])]),U("child-active",[Ue(null,[z("arrow","color: var(--n-arrow-color-child-active-hover);"),z("icon","color: var(--n-item-icon-color-child-active-hover);"),P("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[V("a","color: var(--n-item-text-color-child-active-hover);"),z("extra","color: var(--n-item-text-color-child-active-hover);")])])]),U("selected",[Ue(null,[V("&::before","background-color: var(--n-item-color-active-hover);")])]),Ue(null,Po)]),z("icon",`
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
 `),P("menu-item-content-header",`
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
 `)])]),P("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[P("menu-item-content",`
 height: var(--n-item-height);
 `),P("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Sr({duration:".2s"})])]),P("menu-item-group",[P("menu-item-group-title",`
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
 `)])]),P("menu-tooltip",[V("a",`
 color: inherit;
 text-decoration: none;
 `)]),P("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function Ue(e,o){return[U("hover",e,o),V("&:hover",e,o)]}const Qi=Object.assign(Object.assign({},Ie.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),el=ae({name:"Menu",props:Qi,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Ve(e),n=Ie("Menu","-menu",Ji,tr,e,o),r=ce(Vi,null),i=O(()=>{var L;const{collapsed:f}=e;if(f!==void 0)return f;if(r){const{collapseModeRef:s,collapsedRef:K}=r;if(s.value==="width")return(L=K.value)!==null&&L!==void 0?L:!1}return!1}),l=O(()=>{const{keyField:L,childrenField:f,disabledField:s}=e;return nt(e.items||e.options,{getIgnored(K){return qt(K)},getChildren(K){return K[f]},getDisabled(K){return K[s]},getKey(K){var ee;return(ee=K[L])!==null&&ee!==void 0?ee:K.name}})}),a=O(()=>new Set(l.value.treeNodes.map(L=>L.key))),{watchProps:c}=e,m=I(null);c!=null&&c.includes("defaultValue")?Kt(()=>{m.value=e.defaultValue}):m.value=e.defaultValue;const u=fe(e,"value"),v=rt(u,m),g=I([]),w=()=>{g.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(v.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?Kt(w):w();const p=jo(e,["expandedNames","expandedKeys"]),C=rt(p,g),_=O(()=>l.value.treeNodes),x=O(()=>l.value.getPath(v.value).keyPath);ve(it,{props:e,mergedCollapsedRef:i,mergedThemeRef:n,mergedValueRef:v,mergedExpandedKeysRef:C,activePathRef:x,mergedClsPrefixRef:o,isHorizontalRef:O(()=>e.mode==="horizontal"),invertedRef:fe(e,"inverted"),doSelect:F,toggleExpand:S});function F(L,f){const{"onUpdate:value":s,onUpdateValue:K,onSelect:ee}=e;K&&be(K,L,f),s&&be(s,L,f),ee&&be(ee,L,f),m.value=L}function B(L){const{"onUpdate:expandedKeys":f,onUpdateExpandedKeys:s,onExpandedNamesChange:K,onOpenNamesChange:ee}=e;f&&be(f,L),s&&be(s,L),K&&be(K,L),ee&&be(ee,L),g.value=L}function S(L){const f=Array.from(C.value),s=f.findIndex(K=>K===L);if(~s)f.splice(s,1);else{if(e.accordion&&a.value.has(L)){const K=f.findIndex(ee=>a.value.has(ee));K>-1&&f.splice(K,1)}f.push(L)}B(f)}const T=L=>{const f=l.value.getPath(L??v.value,{includeSelf:!1}).keyPath;if(!f.length)return;const s=Array.from(C.value),K=new Set([...s,...f]);e.accordion&&a.value.forEach(ee=>{K.has(ee)&&!f.includes(ee)&&K.delete(ee)}),B(Array.from(K))},G=O(()=>{const{inverted:L}=e,{common:{cubicBezierEaseInOut:f},self:s}=n.value,{borderRadius:K,borderColorHorizontal:ee,fontSize:Re,itemHeight:re,dividerColor:Se}=s,y={"--n-divider-color":Se,"--n-bezier":f,"--n-font-size":Re,"--n-border-color-horizontal":ee,"--n-border-radius":K,"--n-item-height":re};return L?(y["--n-group-text-color"]=s.groupTextColorInverted,y["--n-color"]=s.colorInverted,y["--n-item-text-color"]=s.itemTextColorInverted,y["--n-item-text-color-hover"]=s.itemTextColorHoverInverted,y["--n-item-text-color-active"]=s.itemTextColorActiveInverted,y["--n-item-text-color-child-active"]=s.itemTextColorChildActiveInverted,y["--n-item-text-color-child-active-hover"]=s.itemTextColorChildActiveInverted,y["--n-item-text-color-active-hover"]=s.itemTextColorActiveHoverInverted,y["--n-item-icon-color"]=s.itemIconColorInverted,y["--n-item-icon-color-hover"]=s.itemIconColorHoverInverted,y["--n-item-icon-color-active"]=s.itemIconColorActiveInverted,y["--n-item-icon-color-active-hover"]=s.itemIconColorActiveHoverInverted,y["--n-item-icon-color-child-active"]=s.itemIconColorChildActiveInverted,y["--n-item-icon-color-child-active-hover"]=s.itemIconColorChildActiveHoverInverted,y["--n-item-icon-color-collapsed"]=s.itemIconColorCollapsedInverted,y["--n-item-text-color-horizontal"]=s.itemTextColorHorizontalInverted,y["--n-item-text-color-hover-horizontal"]=s.itemTextColorHoverHorizontalInverted,y["--n-item-text-color-active-horizontal"]=s.itemTextColorActiveHorizontalInverted,y["--n-item-text-color-child-active-horizontal"]=s.itemTextColorChildActiveHorizontalInverted,y["--n-item-text-color-child-active-hover-horizontal"]=s.itemTextColorChildActiveHoverHorizontalInverted,y["--n-item-text-color-active-hover-horizontal"]=s.itemTextColorActiveHoverHorizontalInverted,y["--n-item-icon-color-horizontal"]=s.itemIconColorHorizontalInverted,y["--n-item-icon-color-hover-horizontal"]=s.itemIconColorHoverHorizontalInverted,y["--n-item-icon-color-active-horizontal"]=s.itemIconColorActiveHorizontalInverted,y["--n-item-icon-color-active-hover-horizontal"]=s.itemIconColorActiveHoverHorizontalInverted,y["--n-item-icon-color-child-active-horizontal"]=s.itemIconColorChildActiveHorizontalInverted,y["--n-item-icon-color-child-active-hover-horizontal"]=s.itemIconColorChildActiveHoverHorizontalInverted,y["--n-arrow-color"]=s.arrowColorInverted,y["--n-arrow-color-hover"]=s.arrowColorHoverInverted,y["--n-arrow-color-active"]=s.arrowColorActiveInverted,y["--n-arrow-color-active-hover"]=s.arrowColorActiveHoverInverted,y["--n-arrow-color-child-active"]=s.arrowColorChildActiveInverted,y["--n-arrow-color-child-active-hover"]=s.arrowColorChildActiveHoverInverted,y["--n-item-color-hover"]=s.itemColorHoverInverted,y["--n-item-color-active"]=s.itemColorActiveInverted,y["--n-item-color-active-hover"]=s.itemColorActiveHoverInverted,y["--n-item-color-active-collapsed"]=s.itemColorActiveCollapsedInverted):(y["--n-group-text-color"]=s.groupTextColor,y["--n-color"]=s.color,y["--n-item-text-color"]=s.itemTextColor,y["--n-item-text-color-hover"]=s.itemTextColorHover,y["--n-item-text-color-active"]=s.itemTextColorActive,y["--n-item-text-color-child-active"]=s.itemTextColorChildActive,y["--n-item-text-color-child-active-hover"]=s.itemTextColorChildActiveHover,y["--n-item-text-color-active-hover"]=s.itemTextColorActiveHover,y["--n-item-icon-color"]=s.itemIconColor,y["--n-item-icon-color-hover"]=s.itemIconColorHover,y["--n-item-icon-color-active"]=s.itemIconColorActive,y["--n-item-icon-color-active-hover"]=s.itemIconColorActiveHover,y["--n-item-icon-color-child-active"]=s.itemIconColorChildActive,y["--n-item-icon-color-child-active-hover"]=s.itemIconColorChildActiveHover,y["--n-item-icon-color-collapsed"]=s.itemIconColorCollapsed,y["--n-item-text-color-horizontal"]=s.itemTextColorHorizontal,y["--n-item-text-color-hover-horizontal"]=s.itemTextColorHoverHorizontal,y["--n-item-text-color-active-horizontal"]=s.itemTextColorActiveHorizontal,y["--n-item-text-color-child-active-horizontal"]=s.itemTextColorChildActiveHorizontal,y["--n-item-text-color-child-active-hover-horizontal"]=s.itemTextColorChildActiveHoverHorizontal,y["--n-item-text-color-active-hover-horizontal"]=s.itemTextColorActiveHoverHorizontal,y["--n-item-icon-color-horizontal"]=s.itemIconColorHorizontal,y["--n-item-icon-color-hover-horizontal"]=s.itemIconColorHoverHorizontal,y["--n-item-icon-color-active-horizontal"]=s.itemIconColorActiveHorizontal,y["--n-item-icon-color-active-hover-horizontal"]=s.itemIconColorActiveHoverHorizontal,y["--n-item-icon-color-child-active-horizontal"]=s.itemIconColorChildActiveHorizontal,y["--n-item-icon-color-child-active-hover-horizontal"]=s.itemIconColorChildActiveHoverHorizontal,y["--n-arrow-color"]=s.arrowColor,y["--n-arrow-color-hover"]=s.arrowColorHover,y["--n-arrow-color-active"]=s.arrowColorActive,y["--n-arrow-color-active-hover"]=s.arrowColorActiveHover,y["--n-arrow-color-child-active"]=s.arrowColorChildActive,y["--n-arrow-color-child-active-hover"]=s.arrowColorChildActiveHover,y["--n-item-color-hover"]=s.itemColorHover,y["--n-item-color-active"]=s.itemColorActive,y["--n-item-color-active-hover"]=s.itemColorActiveHover,y["--n-item-color-active-collapsed"]=s.itemColorActiveCollapsed),y}),j=t?qe("menu",O(()=>e.inverted?"a":"b"),G,e):void 0,X=er(),Q=I(null),Y=I(null);let R=!0;const b=()=>{var L;R?R=!1:(L=Q.value)===null||L===void 0||L.sync({showAllItemsBeforeCalculate:!0})};function N(){return document.getElementById(X)}const H=I(-1);function D(L){H.value=e.options.length-L}function Z(L){L||(H.value=-1)}const A=O(()=>{const L=H.value;return{children:L===-1?[]:e.options.slice(L)}}),W=O(()=>{const{childrenField:L,disabledField:f,keyField:s}=e;return nt([A.value],{getIgnored(K){return qt(K)},getChildren(K){return K[L]},getDisabled(K){return K[f]},getKey(K){var ee;return(ee=K[s])!==null&&ee!==void 0?ee:K.name}})}),te=O(()=>nt([{}]).treeNodes[0]);function ne(){var L;if(H.value===-1)return d(Gt,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:te.value,domId:X,isEllipsisPlaceholder:!0});const f=W.value.treeNodes[0],s=x.value,K=!!(!((L=f.children)===null||L===void 0)&&L.some(ee=>s.includes(ee.key)));return d(Gt,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:K,tmNode:f,domId:X,rawNodes:f.rawNode.children||[],tmNodes:f.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:o,controlledExpandedKeys:p,uncontrolledExpanededKeys:g,mergedExpandedKeys:C,uncontrolledValue:m,mergedValue:v,activePath:x,tmNodes:_,mergedTheme:n,mergedCollapsed:i,cssVars:t?void 0:G,themeClass:j==null?void 0:j.themeClass,overflowRef:Q,counterRef:Y,updateCounter:()=>{},onResize:b,onUpdateOverflow:Z,onUpdateCount:D,renderCounter:ne,getCounter:N,onRender:j==null?void 0:j.onRender,showOption:T,deriveResponsiveState:b}},render(){const{mergedClsPrefix:e,mode:o,themeClass:t,onRender:n}=this;n==null||n();const r=()=>this.tmNodes.map(c=>po(c,this.$props)),l=o==="horizontal"&&this.responsive,a=()=>d("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${o}`,l&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},l?d(Vt,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:r,counter:this.renderCounter}):r());return l?d(Lt,{onResize:this.onResize},{default:a}):a()}}),tl={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 192 512"},ol=je("path",{d:"M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z",fill:"currentColor"},null,-1),nl=[ol],rl=ae({name:"CaretLeft",render:function(o,t){return Ge(),ro("svg",tl,nl)}}),il={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 192 512"},ll=je("path",{d:"M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z",fill:"currentColor"},null,-1),al=[ll],sl=ae({name:"CaretRight",render:function(o,t){return Ge(),ro("svg",il,al)}}),dl=ae({__name:"Menu",props:{disableSwitch:{type:Boolean}},setup(e){const o=e,t=ce(_o),n=ce(Zt),r=[{label:"声笔简码",value:"sbjm"},{label:"声笔拼音",value:"sbpy"},{label:"声笔飞码",value:"sbfm"},{label:"声笔飞单",value:"sbfd"},{label:"声笔飞讯",value:"sbfx"},{label:"声笔小鹤",value:"sbxh"},{label:"声笔自然",value:"sbzr"}],i=ce(Jt),l=ce(Fo),a=ce(Qt),c=ce(Mo);function m(){tt().focus()}function u(v){m(),n(v)}return(v,g)=>(Ge(),xt(he(Ho),null,{default:Ne(()=>[Ce(he(Fi),{style:{width:"160px"},value:he(t),options:r,loading:he(i),"onUpdate:value":u,disabled:o.disableSwitch},null,8,["value","loading","disabled"]),Ce(he(Ti),{class:"square-group",onClick:m},{default:Ne(()=>[Ce(he(wt),{secondary:"",onClick:he(a)},{default:Ne(()=>[Fe(ot(he(l)?"En":"中"),1)]),_:1},8,["onClick"]),Ce(he(wt),{secondary:"",disabled:he(l),onClick:g[0]||(g[0]=()=>{})},{default:Ne(()=>[Fe(ot(he(c)?".":"。"),1)]),_:1},8,["disabled"])]),_:1})]),_:1}))}});var sn={exports:{}};(function(e){(function(){var o=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],t=typeof window<"u",n=t&&window.mozInnerScreenX!=null;function r(i,l,a){if(!t)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var c=a&&a.debug||!1;if(c){var m=document.querySelector("#input-textarea-caret-position-mirror-div");m&&m.parentNode.removeChild(m)}var u=document.createElement("div");u.id="input-textarea-caret-position-mirror-div",document.body.appendChild(u);var v=u.style,g=window.getComputedStyle?window.getComputedStyle(i):i.currentStyle,w=i.nodeName==="INPUT";v.whiteSpace="pre-wrap",w||(v.wordWrap="break-word"),v.position="absolute",c||(v.visibility="hidden"),o.forEach(function(_){w&&_==="lineHeight"?v.lineHeight=g.height:v[_]=g[_]}),n?i.scrollHeight>parseInt(g.height)&&(v.overflowY="scroll"):v.overflow="hidden",u.textContent=i.value.substring(0,l),w&&(u.textContent=u.textContent.replace(/\s/g," "));var p=document.createElement("span");p.textContent=i.value.substring(l)||".",u.appendChild(p);var C={top:p.offsetTop+parseInt(g.borderTopWidth),left:p.offsetLeft+parseInt(g.borderLeftWidth),height:parseInt(g.lineHeight)};return c?p.style.backgroundColor="#aaa":document.body.removeChild(u),C}e.exports=r})()})(sn);var cl=sn.exports;const ul=Ir(cl),fl=ae({__name:"Panel",props:{debugMode:{type:Boolean}},setup(e,{expose:o}){const t=ce(Ao),n=ce(Eo),r=ce(Jt),i=ce($o),l=ce(Zt),a=ce(Qt),c=e,{debugMode:m}=vr(c),u=I(0),v=I(0),g=I(!1),w=I(!1),p=I(0),C=I(0),_=I(""),x=I(""),F=I(""),B=I([]),S=I(0),T=I(!0),G=I(!1),j=I(!1),X=I(!1),Q=I(!1),Y=I(!1);async function R(M,q){j.value=!0,await A(q),M.target.focus()}const b={Escape:"Escape",F4:"F4",Backspace:"BackSpace",Delete:"Delete",Tab:"Tab",Enter:"Return",Home:"Home",End:"End",PageUp:"Page_Up",PageDown:"Page_Down",Alt:"Alt_L",ArrowUp:"Up",ArrowRight:"Right",ArrowDown:"Down",ArrowLeft:"Left","~":"asciitilde","`":"quoteleft","!":"exclam","@":"at","#":"numbersign",$:"dollar","%":"percent","^":"asciicircum","&":"ampersand","*":"asterisk","(":"parenleft",")":"parenright","-":"minus",_:"underscore","+":"plus","=":"equal","{":"braceleft","[":"bracketleft","}":"braceright","]":"bracketright",":":"colon",";":"semicolon",'"':"quotedbl","'":"apostrophe","|":"bar","\\":"backslash","<":"less",",":"comma",">":"greater",".":"period","?":"question","/":"slash"," ":"space"},N=["`"];function H(M){return/^[a-z0-9!"#$%&'()*+,./:;<=>?@[\] ^_`{|}~\\-]$/i.test(M)}function D(M){const q=tt(),{selectionStart:ue,selectionEnd:ye}=q;n.value=n.value.slice(0,ue)+M+n.value.slice(ye),Je(()=>{q.selectionEnd=ue+M.length})}async function Z(M,q){const ue=tt();!("updatedSchema"in M)&&M.updatedOptions&&i(M.updatedOptions),M.state===0?(j.value=!1,X.value=!1,w.value=!1,D(M.committed)):M.state===1?(_.value=M.head,x.value=M.body,F.value=M.tail,S.value=M.highlighted,B.value=M.candidates.map((ye,Pe)=>{var Te;let Oe=`${((Te=M.selectLabels)==null?void 0:Te[Pe])||Pe+1} ${ye.text}`;return ye.comment&&(Oe+=" "+ye.comment),{label:Oe,key:Pe}}),T.value=M.page===0,G.value=M.isLastPage,X.value||(X.value=!0,Q.value=!1),Je(()=>{document.querySelector(".n-popover").getBoundingClientRect().width>ue.getBoundingClientRect().width&&(Q.value=!0)}),M.committed&&D(M.committed)):(j.value=!1,X.value=!1,M.state===2&&M.updatedSchema&&await l(M.updatedSchema.split("/")[0]),M.state===3&&H(q)&&D(q)),ue.focus()}async function A(M){const q=await t.value.process(M);return Z(q,M)}let W=!1,te=0,ne=0;Be(n,(M,q)=>{if(W&&(W=!1,q.length+1===M.length&&q.substring(0,te)===M.substring(0,te)&&q.substring(ne)===M.substring(ne+1))){const ue=tt();n.value=q,Je(()=>{j.value=!0,ue.selectionEnd=te,A(M[te])})}});function L(M){if(m.value||r.value)return;const{code:q,key:ue}=M,ye=tt();if(ue==="Unidentified"){W=!0,te=ye.selectionStart,ne=ye.selectionEnd;return}if(ue==="Shift"){Y.value=!0;return}Y.value=!1;const Pe=H(ue),Oe=ue==="Alt",Te=M.getModifierState("Control"),Ke=M.getModifierState("Meta"),He=M.getModifierState("Alt"),Ae=M.getModifierState("Shift"),Ee=Te||Ke||He||Ae&&!Pe;if(!j.value&&(document.activeElement!==ye||!Pe&&ue!=="F4"||Ee&&!Ae&&!(Te&&N.includes(ue))))return;let pe;const k=E=>`{${E}}`;if(Ee||!Pe){if(pe=/^[0-9a-z]$/i.test(ue)?ue:b[ue],pe===void 0)return;Oe&&q==="AltRight"&&(pe="Alt_R");const E=[];Te&&E.push("Control"),Ke&&E.push("Meta"),He&&!Oe&&E.push("Alt"),Ae&&E.push("Shift"),E.push(pe),pe=k(E.join("+"))}else q.startsWith("Numpad")?pe=k(`KP_${q.substring(6)}`):pe=ue;if(!w.value){const E=ye.getBoundingClientRect(),me=ul(ye,ye.selectionStart);p.value=E.x+me.left,C.value=or.value?8:E.y+me.top+me.height-ye.scrollTop}j.value=!0,M.preventDefault(),A(pe)}function f(M){if(m.value||r.value)return;const{key:q}=M;q==="Shift"&&Y.value&&a(),Y.value=!1,j.value&&A(`{Release+${b[q]||q}}`)}async function s(M){const q=JSON.parse(await t.value.selectCandidateOnCurrentPage(M));return Z(q,"")}function K(M){return M.touches.length===1?M.touches[0]:void 0}function ee(M,q){u.value=M,v.value=q;const ue=document.querySelector(".n-popover");p.value=ue.getBoundingClientRect().left,g.value=!0}function Re(M){ee(M.clientX,M.clientY)}function re(M){const q=K(M);q&&ee(q.clientX,q.clientY)}function Se(M,q){g.value&&(w.value=!0,p.value+=M-u.value,C.value+=q-v.value,u.value=M,v.value=q)}function y(M){Se(M.clientX,M.clientY)}function _e(M){const q=K(M);q&&Se(q.clientX,q.clientY)}function xe(){g.value=!1}return Ye(()=>{document.addEventListener("keydown",L),document.addEventListener("keyup",f),document.addEventListener("mousemove",y),document.addEventListener("touchmove",_e),document.addEventListener("mouseup",xe),document.addEventListener("touchend",xe)}),pr(()=>{document.removeEventListener("keydown",L),document.removeEventListener("keyup",f),document.removeEventListener("mousemove",y),document.removeEventListener("touchmove",_e),document.removeEventListener("mouseup",xe),document.removeEventListener("touchend",xe)}),o({debug:R}),(M,q)=>(Ge(),xt(he(lo),{show:X.value,"show-arrow":!1,x:p.value,y:C.value,flip:!g.value,placement:"bottom-start",trigger:"manual",style:{cursor:"move"},onMousedown:Re,onTouchstart:re},{default:Ne(()=>[Ce(he(yo),{type:"success"},{default:Ne(()=>[Fe(ot(_.value),1)]),_:1}),q[2]||(q[2]=Fe("  ")),Ce(he(yo),{type:"info"},{default:Ne(()=>[Fe(ot(x.value),1)]),_:1}),Fe("  "+ot(F.value)+" ",1),Bo(Ce(he(el),{options:B.value,mode:"horizontal",value:S.value,"onUpdate:value":s},null,8,["options","value"]),[[Lo,B.value.length]]),Ce(he(wt),{text:"",disabled:T.value},{default:Ne(()=>[Ce(he(jt),{component:he(rl),onClick:q[0]||(q[0]=ue=>A("-"))},null,8,["component"])]),_:1},8,["disabled"]),Ce(he(wt),{text:"",disabled:G.value},{default:Ne(()=>[Ce(he(jt),{component:he(sl),onClick:q[1]||(q[1]=ue=>A("="))},null,8,["component"])]),_:1},8,["disabled"])]),_:1},8,["show","x","y","flip"]))}}),Bt="ascii_mode",Oo="ascii_punct",hl=ae({__name:"Input",props:{method:{},disableSwitch:{type:Boolean}},setup(e){const o=e;function t(x){a.value=x,l.value=x?"":i.value}const n=I(void 0),r=I(""),i=I(o.method??"sbjm"),l=I(""),a=I(!0),c=I(!1),m=I(!1),u={[Bt]:c,[Oo]:m},v=x=>async()=>{const F=u[x],B=!F.value;await n.value.setOption(x,B),F.value=B},g=v(Bt),w=v(Oo);async function p(x){t(!0);try{await n.value.setIME(x),i.value=x;for(const[F,B]of Object.entries(u)){if(F===Bt){B.value=!1;continue}await n.value.setOption(F,B.value)}}catch(F){console.error(F)}t(!1)}function C(x){if(x.length===1){const F=x[0];for(const[B,S]of Object.entries(u)){if(B===F){S.value=!0;return}if(`!${B}`===F){S.value=!1;return}}}}ve(_o,l),ve(Zt,p),ve(Jt,a),ve(Fo,c),ve(Mo,m),ve(Qt,g),ve(ar,w),ve(Eo,r),ve($o,C),ve(Ao,n),Ye(async()=>{n.value=new nr,rr(),await p(i.value)});const _=I();return(x,F)=>(Ge(),xt(he(lr),{theme:he(ir)},{default:Ne(()=>[(Ge(),xt(mr,null,[Ce(he(Ho),{vertical:""},{default:Ne(()=>[Ce(dl,{"disable-switch":o.disableSwitch},null,8,["disable-switch"]),Ce(he(Pr),{id:"container",value:r.value,"onUpdate:value":F[0]||(F[0]=B=>r.value=B),type:"textarea",rows:15},null,8,["value"]),Ce(fl,{ref_key:"panel",ref:_},null,512)]),_:1})],1024))]),_:1},8,["theme"]))}}),xl=JSON.parse('{"title":"声笔快打","description":"","frontmatter":{"sidebar":false,"editLink":false,"lastUpdated":false},"headers":[],"relativePath":"sbkd/index.md","filePath":"sbkd/index.md"}'),vl={name:"sbkd/index.md"},Cl=Object.assign(vl,{setup(e){return(o,t)=>{const n=gr("ClientOnly");return Ge(),ro("div",null,[t[0]||(t[0]=je("h1",{id:"声笔快打",tabindex:"-1"},[Fe("声笔快打 "),je("a",{class:"header-anchor",href:"#声笔快打","aria-label":'Permalink to "声笔快打"'},"​")],-1)),t[1]||(t[1]=je("p",null,[Fe("「声笔快打」是声笔输入法的在线版，基于 "),je("a",{href:"http://github.com/libreservice/my_rime",target:"_blank",rel:"noreferrer"},"My Rime（梧桐输入法）"),Fe("实现。您无需安装就可以体验所有的声笔系列码输入方案，包括声笔简码、声笔飞码、声笔飞单、声笔飞讯、声笔自然、声笔小鹤和声笔拼音。")],-1)),t[2]||(t[2]=je("p",null,[Fe("为提高访问速度，在线版中的每个方案仅包含六千余字和五万余词，且不包含反查功能。如您希望尝试完整版，欢迎在"),je("a",{href:"https://github.com/sbsrf/home/releases",target:"_blank",rel:"noreferrer"},"发布页"),Fe("下载。")],-1)),Ce(n,null,{default:Ne(()=>[Ce(hl)]),_:1})])}}});export{xl as __pageData,Cl as default};
