import{i as Ce,r as _,w as ke,a as O,o as Ee,b as Be,c as Me,g as D,d as Le,e as He,f as X,h as oe,m as pe,j as F,k as le,t as ie,u as Y,n as re,l as fe,p as z,q as U,s as ve,v as L,x as me,_ as he,y as Ie,z as Oe,A as V,B as _e,C as Re,D as s,E as j,F as xe,G as Fe,H as ze,I as q,J as Ae,K as ne,L as Ue,U as ye,M as ue,N as Ve,O as De,P as Je,Q as de,R as Ke,S as je,T as qe,V as We,W,X as Xe,Y as Ye,Z as Ge,$ as ae,a0 as B,a1 as h,a2 as A,a3 as Qe,a4 as Ze,a5 as et,a6 as K,a7 as tt,a8 as at,a9 as st}from"./app-oqMLeN4Y.js";import{u as nt}from"./DdPt_UII.js";function ot(e,a={}){const i=a.head||Ce();if(i)return i.ssr?i.push(e,a):lt(i,e,a)}function lt(e,a,i={}){const T=_(!1),l=_({});ke(()=>{l.value=T.value?{}:Le(a)});const t=e.push(l.value,i);return O(l,$=>{t.patch($)}),D()&&(Ee(()=>{t.dispose()}),Be(()=>{T.value=!0}),Me(()=>{T.value=!1})),t}const I=e=>He(e),G=Symbol("tabsRootContextKey"),it=X({tabs:{type:oe(Array),default:()=>pe([])}}),ge="ElTabBar",rt=F({name:ge}),ct=F({...rt,props:it,setup(e,{expose:a}){const i=e,T=D(),l=le(G);l||ie(ge,"<el-tabs><el-tab-bar /></el-tabs>");const t=Y("tabs"),y=_(),$=_(),d=()=>{let r=0,f=0;const p=["top","bottom"].includes(l.props.tabPosition)?"width":"height",c=p==="width"?"x":"y",H=c==="x"?"left":"top";return i.tabs.every(E=>{var n,C;const N=(C=(n=T.parent)==null?void 0:n.refs)==null?void 0:C[`tab-${E.uid}`];if(!N)return!1;if(!E.active)return!0;r=N[`offset${I(H)}`],f=N[`client${I(p)}`];const k=window.getComputedStyle(N);return p==="width"&&(f-=Number.parseFloat(k.paddingLeft)+Number.parseFloat(k.paddingRight),r+=Number.parseFloat(k.paddingLeft)),!1}),{[p]:`${f}px`,transform:`translate${I(c)}(${r}px)`}},v=()=>$.value=d();return O(()=>i.tabs,async()=>{await re(),v()},{immediate:!0}),fe(y,()=>v()),a({ref:y,update:v}),(r,f)=>(z(),U("div",{ref_key:"barRef",ref:y,class:ve([L(t).e("active-bar"),L(t).is(L(l).props.tabPosition)]),style:me($.value)},null,6))}});var ut=he(ct,[["__file","tab-bar.vue"]]);const dt=X({panes:{type:oe(Array),default:()=>pe([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),bt={tabClick:(e,a,i)=>i instanceof Event,tabRemove:(e,a)=>a instanceof Event},be="ElTabNav",pt=F({name:be,props:dt,emits:bt,setup(e,{expose:a,emit:i}){const T=D(),l=le(G);l||ie(be,"<el-tabs><tab-nav /></el-tabs>");const t=Y("tabs"),y=Ie(),$=Oe(),d=_(),v=_(),r=_(),f=_(),p=_(!1),c=_(0),H=_(!1),E=_(!0),n=V(()=>["top","bottom"].includes(l.props.tabPosition)?"width":"height"),C=V(()=>({transform:`translate${n.value==="width"?"X":"Y"}(-${c.value}px)`})),N=()=>{if(!d.value)return;const u=d.value[`offset${I(n.value)}`],b=c.value;if(!b)return;const o=b>u?b-u:0;c.value=o},k=()=>{if(!d.value||!v.value)return;const u=v.value[`offset${I(n.value)}`],b=d.value[`offset${I(n.value)}`],o=c.value;if(u-o<=b)return;const P=u-o>b*2?o+b:u-b;c.value=P},R=async()=>{const u=v.value;if(!p.value||!r.value||!d.value||!u)return;await re();const b=r.value.querySelector(".is-active");if(!b)return;const o=d.value,P=["top","bottom"].includes(l.props.tabPosition),w=b.getBoundingClientRect(),g=o.getBoundingClientRect(),M=P?u.offsetWidth-g.width:u.offsetHeight-g.height,S=c.value;let m=S;P?(w.left<g.left&&(m=S-(g.left-w.left)),w.right>g.right&&(m=S+w.right-g.right)):(w.top<g.top&&(m=S-(g.top-w.top)),w.bottom>g.bottom&&(m=S+(w.bottom-g.bottom))),m=Math.max(m,0),c.value=Math.min(m,M)},J=()=>{var u;if(!v.value||!d.value)return;e.stretch&&((u=f.value)==null||u.update());const b=v.value[`offset${I(n.value)}`],o=d.value[`offset${I(n.value)}`],P=c.value;o<b?(p.value=p.value||{},p.value.prev=P,p.value.next=P+o<b,b-P<o&&(c.value=b-o)):(p.value=!1,P>0&&(c.value=0))},Pe=u=>{const b=u.code,{up:o,down:P,left:w,right:g}=q;if(![o,P,w,g].includes(b))return;const M=Array.from(u.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),S=M.indexOf(u.target);let m;b===w||b===o?S===0?m=M.length-1:m=S-1:S<M.length-1?m=S+1:m=0,M[m].focus({preventScroll:!0}),M[m].click(),ce()},ce=()=>{E.value&&(H.value=!0)},Q=()=>H.value=!1;return O(y,u=>{u==="hidden"?E.value=!1:u==="visible"&&setTimeout(()=>E.value=!0,50)}),O($,u=>{u?setTimeout(()=>E.value=!0,50):E.value=!1}),fe(r,J),_e(()=>setTimeout(()=>R(),0)),Re(()=>J()),a({scrollToActiveTab:R,removeFocus:Q}),O(()=>e.panes,()=>T.update(),{flush:"post",deep:!0}),()=>{const u=p.value?[s("span",{class:[t.e("nav-prev"),t.is("disabled",!p.value.prev)],onClick:N},[s(j,null,{default:()=>[s(xe,null,null)]})]),s("span",{class:[t.e("nav-next"),t.is("disabled",!p.value.next)],onClick:k},[s(j,null,{default:()=>[s(Fe,null,null)]})])]:null,b=e.panes.map((o,P)=>{var w,g,M,S;const m=o.uid,Z=o.props.disabled,ee=(g=(w=o.props.name)!=null?w:o.index)!=null?g:`${P}`,te=!Z&&(o.isClosable||e.editable);o.index=`${P}`;const we=te?s(j,{class:"is-icon-close",onClick:x=>i("tabRemove",o,x)},{default:()=>[s(ze,null,null)]}):null,Se=((S=(M=o.slots).label)==null?void 0:S.call(M))||o.props.label,$e=!Z&&o.active?0:-1;return s("div",{ref:`tab-${m}`,class:[t.e("item"),t.is(l.props.tabPosition),t.is("active",o.active),t.is("disabled",Z),t.is("closable",te),t.is("focus",H.value)],id:`tab-${ee}`,key:`tab-${m}`,"aria-controls":`pane-${ee}`,role:"tab","aria-selected":o.active,tabindex:$e,onFocus:()=>ce(),onBlur:()=>Q(),onClick:x=>{Q(),i("tabClick",o,ee,x)},onKeydown:x=>{te&&(x.code===q.delete||x.code===q.backspace)&&i("tabRemove",o,x)}},[Se,we])});return s("div",{ref:r,class:[t.e("nav-wrap"),t.is("scrollable",!!p.value),t.is(l.props.tabPosition)]},[u,s("div",{class:t.e("nav-scroll"),ref:d},[s("div",{class:[t.e("nav"),t.is(l.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(l.props.tabPosition))],ref:v,style:C.value,role:"tablist",onKeydown:Pe},[e.type?null:s(ut,{ref:f,tabs:[...e.panes]},null),b])])])}}}),ft=X({type:{type:String,values:["card","border-card",""],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:oe(Function),default:()=>!0},stretch:Boolean}),se=e=>Ve(e)||De(e),vt={[ye]:e=>se(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>se(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>se(e),tabAdd:()=>!0},mt=F({name:"ElTabs",props:ft,emits:vt,setup(e,{emit:a,slots:i,expose:T}){var l;const t=Y("tabs"),y=V(()=>["left","right"].includes(e.tabPosition)),{children:$,addChild:d,removeChild:v}=nt(D(),"ElTabPane"),r=_(),f=_((l=e.modelValue)!=null?l:"0"),p=async(n,C=!1)=>{var N,k,R;if(!(f.value===n||ue(n)))try{await((N=e.beforeLeave)==null?void 0:N.call(e,n,f.value))!==!1&&(f.value=n,C&&(a(ye,n),a("tabChange",n)),(R=(k=r.value)==null?void 0:k.removeFocus)==null||R.call(k))}catch{}},c=(n,C,N)=>{n.props.disabled||(p(C,!0),a("tabClick",n,N))},H=(n,C)=>{n.props.disabled||ue(n.props.name)||(C.stopPropagation(),a("edit",n.props.name,"remove"),a("tabRemove",n.props.name))},E=()=>{a("edit",void 0,"add"),a("tabAdd")};return O(()=>e.modelValue,n=>p(n)),O(f,async()=>{var n;await re(),(n=r.value)==null||n.scrollToActiveTab()}),Ae(G,{props:e,currentName:f,registerPane:d,unregisterPane:v}),T({currentName:f}),()=>{const n=i["add-icon"],C=e.editable||e.addable?s("div",{class:[t.e("new-tab"),y.value&&t.e("new-tab-vertical")],tabindex:"0",onClick:E,onKeydown:R=>{R.code===q.enter&&E()}},[n?ne(i,"add-icon"):s(j,{class:t.is("icon-plus")},{default:()=>[s(Ue,null,null)]})]):null,N=s("div",{class:[t.e("header"),y.value&&t.e("header-vertical"),t.is(e.tabPosition)]},[s(pt,{ref:r,currentName:f.value,editable:e.editable,type:e.type,panes:$.value,stretch:e.stretch,onTabClick:c,onTabRemove:H},null),C]),k=s("div",{class:t.e("content")},[ne(i,"default")]);return s("div",{class:[t.b(),t.m(e.tabPosition),{[t.m("card")]:e.type==="card",[t.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[N,k]:[k,N]])}}}),ht=X({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),_t=["id","aria-hidden","aria-labelledby"],Te="ElTabPane",yt=F({name:Te}),gt=F({...yt,props:ht,setup(e){const a=e,i=D(),T=Je(),l=le(G);l||ie(Te,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=Y("tab-pane"),y=_(),$=V(()=>a.closable||l.props.closable),d=de(()=>{var c;return l.currentName.value===((c=a.name)!=null?c:y.value)}),v=_(d.value),r=V(()=>{var c;return(c=a.name)!=null?c:y.value}),f=de(()=>!a.lazy||v.value||d.value);O(d,c=>{c&&(v.value=!0)});const p=Ke({uid:i.uid,slots:T,props:a,paneName:r,active:d,index:y,isClosable:$});return _e(()=>{l.registerPane(p)}),je(()=>{l.unregisterPane(p.uid)}),(c,H)=>L(f)?qe((z(),U("div",{key:0,id:`pane-${L(r)}`,class:ve(L(t).b()),role:"tabpanel","aria-hidden":!L(d),"aria-labelledby":`tab-${L(r)}`},[ne(c.$slots,"default")],10,_t)),[[We,L(d)]]):W("v-if",!0)}});var Ne=he(gt,[["__file","tab-pane.vue"]]);const Tt=Xe(mt,{TabPane:Ne}),Nt=Ye(Ne),Pt=F({props:{type:String},setup(e){const a=Ze(),i=et(),T=["INTJ","INTP","ENTJ","ENTP","INFJ","INFP","ENFJ","ENFP","ISTJ","ISFJ","ESTJ","ESFJ","ISTP","ISFP","ESTP","ESFP"],l=a.params.type||e.type||"";if(!T.includes(l.toUpperCase())){i.push("/404");return}ot({title:(l?l.toUpperCase()+" | ":"")+"MBTI性格测试 | 十六人格 | 16personalities"})},data(){return{background:"#fff",tabPosition:"",template:{type:"",title:"",group:"",motto:"",describe:"",article:"",photo:{desktop:"",mobile:""}},scene:{"strengths-and-weaknesses":"","relationships-dating":"",friends:"",parents:"",careers:"","at-work":"",conclusion:""}}},async created(){const e=this.$route.params.type||this.$props.type||"";if(K.template[e]){{const{default:a}=await K.template[e](),{default:i}=await K.scene[e]();this.template=a,this.scene=i}this.background=K.color[this.template.group],this.tabPosition=window.matchMedia("(max-width: 768px)").matches?"top":"right"}}}),wt=e=>(at("data-v-008dd22f"),e=e(),st(),e),St={class:"content"},$t={class:"type-img"},Ct=["src"],kt=["src"],Et=wt(()=>h("div",{class:"clear"},null,-1)),Bt={class:"article mbti-container"},Mt=["innerHTML"],Lt=["innerHTML"],Ht=["innerHTML"],It=["innerHTML"],Ot=["innerHTML"],Rt=["innerHTML"],xt=["innerHTML"],Ft=["innerHTML"];function zt(e,a,i,T,l,t){const y=ae("ui-header"),$=ae("ui-container"),d=tt,v=ae("client-only"),r=Nt,f=Tt;return z(),U("main",null,[s(y),s($,{class:"container",background:e.background},{content:B(()=>[h("div",St,[h("div",{class:"type-info",style:me({background:e.background})},[h("h1",null,A(e.template.title.split("-").pop()),1),h("h3",null,A(e.template.type.toUpperCase())+"性格-"+A(e.template.type[0])+"人",1),h("p",null,A(e.template.describe),1)],4),h("div",$t,[e.template.photo.mobile?(z(),U("img",{key:0,src:"/photo/"+e.template.photo.mobile,class:"desktop"},null,8,Ct)):W("",!0),e.template.photo.desktop?(z(),U("img",{key:1,src:"/photo/"+e.template.photo.desktop,class:"mobile"},null,8,kt)):W("",!0)]),Et])]),_:1},8,["background"]),s(v,null,{default:B(()=>[s(d,{"data-ad-client":"ca-pub-7002319867557344","data-ad-slot":"1527641688","data-ad-format":"auto","data-full-width-responsive":"true"})]),_:1}),h("div",Bt,[h("h1",null,A(e.template.title.split("-").pop()),1),e.tabPosition?(z(),Qe(f,{key:0,"tab-position":e.tabPosition,class:"tabs"},{default:B(()=>[s(r,{label:"性格概述"},{default:B(()=>[h("div",{class:"text mbti-template",innerHTML:e.template.article},null,8,Mt)]),_:1}),s(r,{label:"优势 & 劣势"},{default:B(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene["strengths-and-weaknesses"]},null,8,Lt)]),_:1}),s(r,{label:"恋爱关系"},{default:B(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene["relationships-dating"]},null,8,Ht)]),_:1}),s(r,{label:"友谊"},{default:B(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene.friends},null,8,It)]),_:1}),s(r,{label:"为人父母"},{default:B(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene.parents},null,8,Ot)]),_:1}),s(r,{label:"职业道路"},{default:B(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene.careers},null,8,Rt)]),_:1}),s(r,{label:"职场习惯"},{default:B(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene["at-work"]},null,8,xt)]),_:1}),s(r,{label:"性格总结"},{default:B(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene.conclusion},null,8,Ft)]),_:1})]),_:1},8,["tab-position"])):W("",!0)])])}const Vt=Ge(Pt,[["render",zt],["__scopeId","data-v-008dd22f"]]);export{Vt as default};