import{i as Ce,r as _,w as ke,a as O,o as Ee,b as Be,c as Me,g as A,d as Le,e as He,f as W,h as se,m as pe,j as x,k as ne,t as oe,u as X,n as le,l as fe,p as F,q as z,s as ve,v as H,x as me,_ as he,y as Ie,z as Oe,A as q,B as _e,C as Re,D as o,E as J,F as xe,G as Fe,H as ze,I as K,J as Ae,K as ae,L as Ue,U as ye,M as ce,N as Ve,O as De,P as Je,Q as ue,R as Ke,S as je,T as qe,V as We,W as j,X as Xe,Y as Ye,Z as Ge,$ as de,a0 as M,a1 as h,a2 as V,a3 as Qe,a4 as Ze,a5 as et,a6 as D,a7 as tt,a8 as at}from"./app-BtsrqYBu.js";import{u as st}from"./BvFF9tVp.js";function nt(e,a={}){const r=a.head||Ce();if(r)return r.ssr?r.push(e,a):ot(r,e,a)}function ot(e,a,r={}){const g=_(!1),l=_({});ke(()=>{l.value=g.value?{}:Le(a)});const t=e.push(l.value,r);return O(l,$=>{t.patch($)}),A()&&(Ee(()=>{t.dispose()}),Be(()=>{g.value=!0}),Me(()=>{g.value=!1})),t}const I=e=>He(e),Y=Symbol("tabsRootContextKey"),lt=W({tabs:{type:se(Array),default:()=>pe([])}}),ge="ElTabBar",it=x({name:ge}),rt=x({...it,props:lt,setup(e,{expose:a}){const r=e,g=A(),l=ne(Y);l||oe(ge,"<el-tabs><el-tab-bar /></el-tabs>");const t=X("tabs"),T=_(),$=_(),i=()=>{let b=0,C=0;const p=["top","bottom"].includes(l.props.tabPosition)?"width":"height",c=p==="width"?"x":"y",L=c==="x"?"left":"top";return r.tabs.every(s=>{var v,k;const S=(k=(v=g.parent)==null?void 0:v.refs)==null?void 0:k[`tab-${s.uid}`];if(!S)return!1;if(!s.active)return!0;b=S[`offset${I(L)}`],C=S[`client${I(p)}`];const E=window.getComputedStyle(S);return p==="width"&&(r.tabs.length>1&&(C-=Number.parseFloat(E.paddingLeft)+Number.parseFloat(E.paddingRight)),b+=Number.parseFloat(E.paddingLeft)),!1}),{[p]:`${C}px`,transform:`translate${I(c)}(${b}px)`}},f=()=>$.value=i();return O(()=>r.tabs,async()=>{await le(),f()},{immediate:!0}),fe(T,()=>f()),a({ref:T,update:f}),(b,C)=>(F(),z("div",{ref_key:"barRef",ref:T,class:ve([H(t).e("active-bar"),H(t).is(H(l).props.tabPosition)]),style:me($.value)},null,6))}});var ct=he(rt,[["__file","tab-bar.vue"]]);const ut=W({panes:{type:se(Array),default:()=>pe([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),dt={tabClick:(e,a,r)=>r instanceof Event,tabRemove:(e,a)=>a instanceof Event},be="ElTabNav",bt=x({name:be,props:ut,emits:dt,setup(e,{expose:a,emit:r}){const g=A(),l=ne(Y);l||oe(be,"<el-tabs><tab-nav /></el-tabs>");const t=X("tabs"),T=Ie(),$=Oe(),i=_(),f=_(),b=_(),C=_(),p=_(!1),c=_(0),L=_(!1),s=_(!0),v=q(()=>["top","bottom"].includes(l.props.tabPosition)?"width":"height"),k=q(()=>({transform:`translate${v.value==="width"?"X":"Y"}(-${c.value}px)`})),S=()=>{if(!i.value)return;const u=i.value[`offset${I(v.value)}`],d=c.value;if(!d)return;const n=d>u?d-u:0;c.value=n},E=()=>{if(!i.value||!f.value)return;const u=f.value[`offset${I(v.value)}`],d=i.value[`offset${I(v.value)}`],n=c.value;if(u-n<=d)return;const N=u-n>d*2?n+d:u-d;c.value=N},U=async()=>{const u=f.value;if(!p.value||!b.value||!i.value||!u)return;await le();const d=b.value.querySelector(".is-active");if(!d)return;const n=i.value,N=["top","bottom"].includes(l.props.tabPosition),P=d.getBoundingClientRect(),y=n.getBoundingClientRect(),B=N?u.offsetWidth-y.width:u.offsetHeight-y.height,w=c.value;let m=w;N?(P.left<y.left&&(m=w-(y.left-P.left)),P.right>y.right&&(m=w+P.right-y.right)):(P.top<y.top&&(m=w-(y.top-P.top)),P.bottom>y.bottom&&(m=w+(P.bottom-y.bottom))),m=Math.max(m,0),c.value=Math.min(m,B)},ie=()=>{var u;if(!f.value||!i.value)return;e.stretch&&((u=C.value)==null||u.update());const d=f.value[`offset${I(v.value)}`],n=i.value[`offset${I(v.value)}`],N=c.value;n<d?(p.value=p.value||{},p.value.prev=N,p.value.next=N+n<d,d-N<n&&(c.value=d-n)):(p.value=!1,N>0&&(c.value=0))},Pe=u=>{const d=u.code,{up:n,down:N,left:P,right:y}=K;if(![n,N,P,y].includes(d))return;const B=Array.from(u.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),w=B.indexOf(u.target);let m;d===P||d===n?w===0?m=B.length-1:m=w-1:w<B.length-1?m=w+1:m=0,B[m].focus({preventScroll:!0}),B[m].click(),re()},re=()=>{s.value&&(L.value=!0)},G=()=>L.value=!1;return O(T,u=>{u==="hidden"?s.value=!1:u==="visible"&&setTimeout(()=>s.value=!0,50)}),O($,u=>{u?setTimeout(()=>s.value=!0,50):s.value=!1}),fe(b,ie),_e(()=>setTimeout(()=>U(),0)),Re(()=>ie()),a({scrollToActiveTab:U,removeFocus:G}),O(()=>e.panes,()=>g.update(),{flush:"post",deep:!0}),()=>{const u=p.value?[o("span",{class:[t.e("nav-prev"),t.is("disabled",!p.value.prev)],onClick:S},[o(J,null,{default:()=>[o(xe,null,null)]})]),o("span",{class:[t.e("nav-next"),t.is("disabled",!p.value.next)],onClick:E},[o(J,null,{default:()=>[o(Fe,null,null)]})])]:null,d=e.panes.map((n,N)=>{var P,y,B,w;const m=n.uid,Q=n.props.disabled,Z=(y=(P=n.props.name)!=null?P:n.index)!=null?y:`${N}`,ee=!Q&&(n.isClosable||e.editable);n.index=`${N}`;const Se=ee?o(J,{class:"is-icon-close",onClick:R=>r("tabRemove",n,R)},{default:()=>[o(ze,null,null)]}):null,we=((w=(B=n.slots).label)==null?void 0:w.call(B))||n.props.label,$e=!Q&&n.active?0:-1;return o("div",{ref:`tab-${m}`,class:[t.e("item"),t.is(l.props.tabPosition),t.is("active",n.active),t.is("disabled",Q),t.is("closable",ee),t.is("focus",L.value)],id:`tab-${Z}`,key:`tab-${m}`,"aria-controls":`pane-${Z}`,role:"tab","aria-selected":n.active,tabindex:$e,onFocus:()=>re(),onBlur:()=>G(),onClick:R=>{G(),r("tabClick",n,Z,R)},onKeydown:R=>{ee&&(R.code===K.delete||R.code===K.backspace)&&r("tabRemove",n,R)}},[we,Se])});return o("div",{ref:b,class:[t.e("nav-wrap"),t.is("scrollable",!!p.value),t.is(l.props.tabPosition)]},[u,o("div",{class:t.e("nav-scroll"),ref:i},[o("div",{class:[t.e("nav"),t.is(l.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(l.props.tabPosition))],ref:f,style:k.value,role:"tablist",onKeydown:Pe},[e.type?null:o(ct,{ref:C,tabs:[...e.panes]},null),d])])])}}}),pt=W({type:{type:String,values:["card","border-card",""],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:se(Function),default:()=>!0},stretch:Boolean}),te=e=>Ve(e)||De(e),ft={[ye]:e=>te(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>te(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>te(e),tabAdd:()=>!0},vt=x({name:"ElTabs",props:pt,emits:ft,setup(e,{emit:a,slots:r,expose:g}){var l;const t=X("tabs"),{children:T,addChild:$,removeChild:i}=st(A(),"ElTabPane"),f=_(),b=_((l=e.modelValue)!=null?l:"0"),C=async(s,v=!1)=>{var k,S,E;if(!(b.value===s||ce(s)))try{await((k=e.beforeLeave)==null?void 0:k.call(e,s,b.value))!==!1&&(b.value=s,v&&(a(ye,s),a("tabChange",s)),(E=(S=f.value)==null?void 0:S.removeFocus)==null||E.call(S))}catch{}},p=(s,v,k)=>{s.props.disabled||(C(v,!0),a("tabClick",s,k))},c=(s,v)=>{s.props.disabled||ce(s.props.name)||(v.stopPropagation(),a("edit",s.props.name,"remove"),a("tabRemove",s.props.name))},L=()=>{a("edit",void 0,"add"),a("tabAdd")};return O(()=>e.modelValue,s=>C(s)),O(b,async()=>{var s;await le(),(s=f.value)==null||s.scrollToActiveTab()}),Ae(Y,{props:e,currentName:b,registerPane:$,unregisterPane:i}),g({currentName:b}),()=>{const s=r["add-icon"],v=e.editable||e.addable?o("span",{class:t.e("new-tab"),tabindex:"0",onClick:L,onKeydown:E=>{E.code===K.enter&&L()}},[s?ae(r,"add-icon"):o(J,{class:t.is("icon-plus")},{default:()=>[o(Ue,null,null)]})]):null,k=o("div",{class:[t.e("header"),t.is(e.tabPosition)]},[v,o(bt,{ref:f,currentName:b.value,editable:e.editable,type:e.type,panes:T.value,stretch:e.stretch,onTabClick:p,onTabRemove:c},null)]),S=o("div",{class:t.e("content")},[ae(r,"default")]);return o("div",{class:[t.b(),t.m(e.tabPosition),{[t.m("card")]:e.type==="card",[t.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[k,S]:[S,k]])}}}),mt=W({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ht=["id","aria-hidden","aria-labelledby"],Te="ElTabPane",_t=x({name:Te}),yt=x({..._t,props:mt,setup(e){const a=e,r=A(),g=Je(),l=ne(Y);l||oe(Te,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=X("tab-pane"),T=_(),$=q(()=>a.closable||l.props.closable),i=ue(()=>{var c;return l.currentName.value===((c=a.name)!=null?c:T.value)}),f=_(i.value),b=q(()=>{var c;return(c=a.name)!=null?c:T.value}),C=ue(()=>!a.lazy||f.value||i.value);O(i,c=>{c&&(f.value=!0)});const p=Ke({uid:r.uid,slots:g,props:a,paneName:b,active:i,index:T,isClosable:$});return _e(()=>{l.registerPane(p)}),je(()=>{l.unregisterPane(p.uid)}),(c,L)=>H(C)?qe((F(),z("div",{key:0,id:`pane-${H(b)}`,class:ve(H(t).b()),role:"tabpanel","aria-hidden":!H(i),"aria-labelledby":`tab-${H(b)}`},[ae(c.$slots,"default")],10,ht)),[[We,H(i)]]):j("v-if",!0)}});var Ne=he(yt,[["__file","tab-pane.vue"]]);const gt=Xe(vt,{TabPane:Ne}),Tt=Ye(Ne),Nt=x({props:{type:String},setup(e){const a=Ze(),r=et(),g=["INTJ","INTP","ENTJ","ENTP","INFJ","INFP","ENFJ","ENFP","ISTJ","ISFJ","ESTJ","ESFJ","ISTP","ISFP","ESTP","ESFP"],l=a.params.type||e.type||"";if(!g.includes(l.toUpperCase())){r.push("/404");return}nt({title:(l?l.toUpperCase()+" | ":"")+"MBTI性格测试 | 十六人格 | 16personalities"})},data(){return{background:"#fff",tabPosition:"",template:{type:"",title:"",group:"",motto:"",describe:"",article:"",photo:{desktop:"",mobile:""}},scene:{"strengths-and-weaknesses":"","relationships-dating":"",friends:"",parents:"",careers:"","at-work":"",conclusion:""}}},async created(){const e=this.$route.params.type||this.$props.type||"";if(D.template[e]){{const{default:a}=await D.template[e](),{default:r}=await D.scene[e]();this.template=a,this.scene=r}this.background=D.color[this.template.group],this.tabPosition=window.matchMedia("(max-width: 768px)").matches?"top":"right"}}}),Pt=e=>(tt("data-v-e1203421"),e=e(),at(),e),St={class:"content"},wt={class:"type-img"},$t=["src"],Ct=["src"],kt=Pt(()=>h("div",{class:"clear"},null,-1)),Et={class:"article mbti-container"},Bt=["innerHTML"],Mt=["innerHTML"],Lt=["innerHTML"],Ht=["innerHTML"],It=["innerHTML"],Ot=["innerHTML"],Rt=["innerHTML"],xt=["innerHTML"];function Ft(e,a,r,g,l,t){const T=de("ui-header"),$=de("ui-container"),i=Tt,f=gt;return F(),z("main",null,[o(T),o($,{class:"container",background:e.background},{content:M(()=>[h("div",St,[h("div",{class:"type-info",style:me({background:e.background})},[h("h1",null,V(e.template.title.split("-").pop()),1),h("h3",null,V(e.template.type.toUpperCase())+"性格",1),h("p",null,V(e.template.describe),1)],4),h("div",wt,[e.template.photo.mobile?(F(),z("img",{key:0,src:"/photo/"+e.template.photo.mobile,class:"desktop"},null,8,$t)):j("",!0),e.template.photo.desktop?(F(),z("img",{key:1,src:"/photo/"+e.template.photo.desktop,class:"mobile"},null,8,Ct)):j("",!0)]),kt])]),_:1},8,["background"]),h("div",Et,[h("h1",null,V(e.template.title.split("-").pop()),1),e.tabPosition?(F(),Qe(f,{key:0,"tab-position":e.tabPosition,class:"tabs"},{default:M(()=>[o(i,{label:"性格概述"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.template.article},null,8,Bt)]),_:1}),o(i,{label:"优势 & 劣势"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene["strengths-and-weaknesses"]},null,8,Mt)]),_:1}),o(i,{label:"恋爱关系"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene["relationships-dating"]},null,8,Lt)]),_:1}),o(i,{label:"友谊"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene.friends},null,8,Ht)]),_:1}),o(i,{label:"为人父母"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene.parents},null,8,It)]),_:1}),o(i,{label:"职业道路"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene.careers},null,8,Ot)]),_:1}),o(i,{label:"职场习惯"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene["at-work"]},null,8,Rt)]),_:1}),o(i,{label:"性格总结"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene.conclusion},null,8,xt)]),_:1})]),_:1},8,["tab-position"])):j("",!0)])])}const Ut=Ge(Nt,[["render",Ft],["__scopeId","data-v-e1203421"]]);export{Ut as default};