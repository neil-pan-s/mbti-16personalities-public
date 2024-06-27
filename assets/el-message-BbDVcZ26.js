import{a5 as Z,aL as S,f as w,M as ie,z as d,a6 as _,q as U,L as A,o as y,b as k,r as j,h as I,w as B,Q as q,a as $,A as v,B as t,D as G,t as Q,V as W,W as X,G as J,Z as ue,aM as de,aN as ce,aE as K,aO as pe,aB as fe,N as M,aP as R,l as me,a7 as ge,aQ as ye,a8 as ve,c as h,e as N,E as V,C as Ce,ae as be,ab as he,aR as Se,aS as Te,aT as Ne,aU as F,a9 as H,a4 as Y,k as z,aV as P,aW as Be,aX as we}from"./index-Bd8qH6kT.js";const Ee=Z({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"},showZero:{type:Boolean,default:!0},color:String,dotStyle:{type:S([String,Object,Array])},badgeStyle:{type:S([String,Object,Array])},offset:{type:S(Array),default:[0,0]},dotClass:{type:String},badgeClass:{type:String}}),Me=["textContent"],_e=w({name:"ElBadge"}),ke=w({..._e,props:Ee,setup(s,{expose:n}){const e=s,a=ie("badge"),o=d(()=>e.isDot?"":_(e.value)&&_(e.max)?e.max<e.value?`${e.max}+`:e.value===0&&!e.showZero?"":`${e.value}`:`${e.value}`),p=d(()=>{var l,u,f,m,g,C;return[{backgroundColor:e.color,marginRight:U(-((u=(l=e.offset)==null?void 0:l[0])!=null?u:0)),marginTop:U((m=(f=e.offset)==null?void 0:f[1])!=null?m:0)},(g=e.dotStyle)!=null?g:{},(C=e.badgeStyle)!=null?C:{}]});return A({from:"dot-style",replacement:"badge-style",version:"2.8.0",scope:"el-badge",ref:"https://element-plus.org/en-US/component/badge.html"},d(()=>!!e.dotStyle)),A({from:"dot-class",replacement:"badge-class",version:"2.8.0",scope:"el-badge",ref:"https://element-plus.org/en-US/component/badge.html"},d(()=>!!e.dotClass)),n({content:o}),(l,u)=>(y(),k("div",{class:v(t(a).b())},[j(l.$slots,"default"),I(X,{name:`${t(a).namespace.value}-zoom-in-center`,persisted:""},{default:B(()=>[q($("sup",{class:v([t(a).e("content"),t(a).em("content",l.type),t(a).is("fixed",!!l.$slots.default),t(a).is("dot",l.isDot),l.dotClass,l.badgeClass]),style:G(t(p)),textContent:Q(t(o))},null,14,Me),[[W,!l.hidden&&(t(o)||l.isDot)]])]),_:1},8,["name"])],2))}});var $e=J(ke,[["__file","badge.vue"]]);const ze=ue($e),ee=["success","info","warning","error"],i=ce({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",plain:!1,offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:K?document.body:void 0}),Ie=Z({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:de,default:i.icon},id:{type:String,default:i.id},message:{type:S([String,Object,Function]),default:i.message},onClose:{type:S(Function),default:i.onClose},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:ee,default:i.type},plain:{type:Boolean,default:i.plain},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),Le={destroy:()=>!0},c=pe([]),Oe=s=>{const n=c.findIndex(o=>o.id===s),e=c[n];let a;return n>0&&(a=c[n-1]),{current:e,prev:a}},De=s=>{const{prev:n}=Oe(s);return n?n.vm.exposed.bottom.value:0},xe=(s,n)=>c.findIndex(a=>a.id===s)>0?16:n,Ue=["id"],Ae=["innerHTML"],Re=w({name:"ElMessage"}),Ve=w({...Re,props:Ie,emits:Le,setup(s,{expose:n}){const e=s,{Close:a}=Se,{ns:o,zIndex:p}=fe("message"),{currentZIndex:l,nextZIndex:u}=p,f=M(),m=M(!1),g=M(0);let C;const te=d(()=>e.type?e.type==="error"?"danger":e.type:"info"),ne=d(()=>{const r=e.type;return{[o.bm("icon",r)]:r&&R[r]}}),L=d(()=>e.icon||R[e.type]||""),oe=d(()=>De(e.id)),O=d(()=>xe(e.id,e.offset)+oe.value),ae=d(()=>g.value+O.value),le=d(()=>({top:`${O.value}px`,zIndex:l.value}));function E(){e.duration!==0&&({stop:C}=Te(()=>{T()},e.duration))}function D(){C==null||C()}function T(){m.value=!1}function re({code:r}){r===Ne.esc&&T()}return me(()=>{E(),u(),m.value=!0}),ge(()=>e.repeatNum,()=>{D(),E()}),ye(document,"keydown",re),ve(f,()=>{g.value=f.value.getBoundingClientRect().height}),n({visible:m,bottom:ae,close:T}),(r,x)=>(y(),h(X,{name:t(o).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:x[0]||(x[0]=qe=>r.$emit("destroy")),persisted:""},{default:B(()=>[q($("div",{id:r.id,ref_key:"messageRef",ref:f,class:v([t(o).b(),{[t(o).m(r.type)]:r.type},t(o).is("center",r.center),t(o).is("closable",r.showClose),t(o).is("plain",r.plain),r.customClass]),style:G(t(le)),role:"alert",onMouseenter:D,onMouseleave:E},[r.repeatNum>1?(y(),h(t(ze),{key:0,value:r.repeatNum,type:t(te),class:v(t(o).e("badge"))},null,8,["value","type","class"])):N("v-if",!0),t(L)?(y(),h(t(V),{key:1,class:v([t(o).e("icon"),t(ne)])},{default:B(()=>[(y(),h(Ce(t(L))))]),_:1},8,["class"])):N("v-if",!0),j(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(y(),k(be,{key:1},[N(" Caution here, message could've been compromised, never use user's input as message "),$("p",{class:v(t(o).e("content")),innerHTML:r.message},null,10,Ae)],2112)):(y(),k("p",{key:0,class:v(t(o).e("content"))},Q(r.message),3))]),r.showClose?(y(),h(t(V),{key:2,class:v(t(o).e("closeBtn")),onClick:he(T,["stop"])},{default:B(()=>[I(t(a))]),_:1},8,["class","onClick"])):N("v-if",!0)],46,Ue),[[W,m.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Fe=J(Ve,[["__file","message.vue"]]);let He=1;const se=s=>{const n=!s||H(s)||Y(s)||z(s)?{message:s}:s,e={...i,...n};if(!e.appendTo)e.appendTo=document.body;else if(H(e.appendTo)){let a=document.querySelector(e.appendTo);Be(a)||(a=document.body),e.appendTo=a}return e},Pe=s=>{const n=c.indexOf(s);if(n===-1)return;c.splice(n,1);const{handler:e}=s;e.close()},Ze=({appendTo:s,...n},e)=>{const a=`message_${He++}`,o=n.onClose,p=document.createElement("div"),l={...n,id:a,onClose:()=>{o==null||o(),Pe(g)},onDestroy:()=>{P(null,p)}},u=I(Fe,l,z(l.message)||Y(l.message)?{default:z(l.message)?l.message:()=>l.message}:null);u.appContext=e||b._context,P(u,p),s.appendChild(p.firstElementChild);const f=u.component,g={id:a,vnode:u,vm:f,handler:{close:()=>{f.exposed.visible.value=!1}},props:u.component.props};return g},b=(s={},n)=>{if(!K)return{close:()=>{}};if(_(F.max)&&c.length>=F.max)return{close:()=>{}};const e=se(s);if(e.grouping&&c.length){const o=c.find(({vnode:p})=>{var l;return((l=p.props)==null?void 0:l.message)===e.message});if(o)return o.props.repeatNum+=1,o.props.type=e.type,o.handler}const a=Ze(e,n);return c.push(a),a.handler};ee.forEach(s=>{b[s]=(n={},e)=>{const a=se(n);return b({...a,type:s},e)}});function je(s){for(const n of c)(!s||s===n.props.type)&&n.handler.close()}b.closeAll=je;b._context=null;const Qe=we(b,"$message");export{Qe as E};
