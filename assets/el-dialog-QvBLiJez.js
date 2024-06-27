import{k as V,l as W,m as G,n as J,q as _,f as F,u as Q,v as Z,x,y as K,F as ee,z as $,o as L,b as Y,a as A,r as C,A as v,B as e,t as oe,h as R,w as h,c as X,C as te,E as se,e as z,D as U,G as q,H as ae,I as ne,J as le,K as re,L as ie,M as de,N,O as ce,P as ue,Q as fe,R as me,S as pe,T as ve,U as ge,V as ye,W as be,X as he,Y as Ce,Z as we}from"./index-BDoi3KUH.js";const Ee=(...t)=>s=>{t.forEach(a=>{V(a)?a(s):a.value=s})},Le=(t,s,a,r)=>{let i={offsetX:0,offsetY:0};const m=p=>{const w=p.clientX,E=p.clientY,{offsetX:g,offsetY:y}=i,u=t.value.getBoundingClientRect(),l=u.left,b=u.top,k=u.width,I=u.height,D=document.documentElement.clientWidth,O=document.documentElement.clientHeight,P=-l+g,S=-b+y,j=D-l-k+g,B=O-b-I+y,f=o=>{let d=g+o.clientX-w,c=y+o.clientY-E;r!=null&&r.value||(d=Math.min(Math.max(d,P),j),c=Math.min(Math.max(c,S),B)),i={offsetX:d,offsetY:c},t.value&&(t.value.style.transform=`translate(${_(d)}, ${_(c)})`)},T=()=>{document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",T)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",T)},M=()=>{s.value&&t.value&&s.value.addEventListener("mousedown",m)},n=()=>{s.value&&t.value&&s.value.removeEventListener("mousedown",m)};W(()=>{G(()=>{a.value?M():n()})}),J(()=>{n()})};var Se=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function je(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Be(t){if(t.__esModule)return t;var s=t.default;if(typeof s=="function"){var a=function r(){return this instanceof r?Reflect.construct(s,arguments,this.constructor):s.apply(this,arguments)};a.prototype=s.prototype}else a={};return Object.defineProperty(a,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(a,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),a}const H=Symbol("dialogInjectionKey"),Me=["aria-level"],$e=["aria-label"],ke=["id"],De=F({name:"ElDialogContent"}),Te=F({...De,props:Q,emits:Z,setup(t){const s=t,{t:a}=x(),{Close:r}=ae,{dialogRef:i,headerRef:m,bodyId:M,ns:n,style:p}=K(H),{focusTrapRef:w}=K(ee),E=$(()=>[n.b(),n.is("fullscreen",s.fullscreen),n.is("draggable",s.draggable),n.is("align-center",s.alignCenter),{[n.m("center")]:s.center}]),g=Ee(w,i),y=$(()=>s.draggable),u=$(()=>s.overflow);return Le(i,m,y,u),(l,b)=>(L(),Y("div",{ref:e(g),class:v(e(E)),style:U(e(p)),tabindex:"-1"},[A("header",{ref_key:"headerRef",ref:m,class:v([e(n).e("header"),{"show-close":l.showClose}])},[C(l.$slots,"header",{},()=>[A("span",{role:"heading","aria-level":l.ariaLevel,class:v(e(n).e("title"))},oe(l.title),11,Me)]),l.showClose?(L(),Y("button",{key:0,"aria-label":e(a)("el.dialog.close"),class:v(e(n).e("headerbtn")),type:"button",onClick:b[0]||(b[0]=k=>l.$emit("close"))},[R(e(se),{class:v(e(n).e("close"))},{default:h(()=>[(L(),X(te(l.closeIcon||e(r))))]),_:1},8,["class"])],10,$e)):z("v-if",!0)],2),A("div",{id:e(M),class:v(e(n).e("body"))},[C(l.$slots,"default")],10,ke),l.$slots.footer?(L(),Y("footer",{key:0,class:v(e(n).e("footer"))},[C(l.$slots,"footer")],2)):z("v-if",!0)],6))}});var Ae=q(Te,[["__file","dialog-content.vue"]]);const Re=["aria-label","aria-labelledby","aria-describedby"],Fe=F({name:"ElDialog",inheritAttrs:!1}),Ie=F({...Fe,props:ne,emits:le,setup(t,{expose:s}){const a=t,r=re();ie({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},$(()=>!!r.title));const i=de("dialog"),m=N(),M=N(),n=N(),{visible:p,titleId:w,bodyId:E,style:g,overlayDialogStyle:y,rendered:u,zIndex:l,afterEnter:b,afterLeave:k,beforeLeave:I,handleClose:D,onModalClick:O,onOpenAutoFocus:P,onCloseAutoFocus:S,onCloseRequested:j,onFocusoutPrevented:B}=ce(a,m);ue(H,{dialogRef:m,headerRef:M,bodyId:E,ns:i,rendered:u,style:g});const f=Ce(O),T=$(()=>a.draggable&&!a.fullscreen);return s({visible:p,dialogContentRef:n}),(o,d)=>(L(),X(he,{to:o.appendTo,disabled:o.appendTo!=="body"?!1:!o.appendToBody},[R(be,{name:"dialog-fade",onAfterEnter:e(b),onAfterLeave:e(k),onBeforeLeave:e(I),persisted:""},{default:h(()=>[fe(R(e(me),{"custom-mask-event":"",mask:o.modal,"overlay-class":o.modalClass,"z-index":e(l)},{default:h(()=>[A("div",{role:"dialog","aria-modal":"true","aria-label":o.title||void 0,"aria-labelledby":o.title?void 0:e(w),"aria-describedby":e(E),class:v(`${e(i).namespace.value}-overlay-dialog`),style:U(e(y)),onClick:d[0]||(d[0]=(...c)=>e(f).onClick&&e(f).onClick(...c)),onMousedown:d[1]||(d[1]=(...c)=>e(f).onMousedown&&e(f).onMousedown(...c)),onMouseup:d[2]||(d[2]=(...c)=>e(f).onMouseup&&e(f).onMouseup(...c))},[R(e(pe),{loop:"",trapped:e(p),"focus-start-el":"container",onFocusAfterTrapped:e(P),onFocusAfterReleased:e(S),onFocusoutPrevented:e(B),onReleaseRequested:e(j)},{default:h(()=>[e(u)?(L(),X(Ae,ve({key:0,ref_key:"dialogContentRef",ref:n},o.$attrs,{center:o.center,"align-center":o.alignCenter,"close-icon":o.closeIcon,draggable:e(T),overflow:o.overflow,fullscreen:o.fullscreen,"show-close":o.showClose,title:o.title,"aria-level":o.headerAriaLevel,onClose:e(D)}),ge({header:h(()=>[o.$slots.title?C(o.$slots,"title",{key:1}):C(o.$slots,"header",{key:0,close:e(D),titleId:e(w),titleClass:e(i).e("title")})]),default:h(()=>[C(o.$slots,"default")]),_:2},[o.$slots.footer?{name:"footer",fn:h(()=>[C(o.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):z("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Re)]),_:3},8,["mask","overlay-class","z-index"]),[[ye,e(p)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}});var Oe=q(Ie,[["__file","dialog.vue"]]);const Ye=we(Oe);export{Ye as E,je as a,Se as c,Be as g};
