import{aX as Ce,a2 as q,aK as se,aM as fe,f as R,y as ne,aY as oe,M as W,N as T,a4 as H,at as le,a6 as pe,o as A,b as F,A as ve,B as L,D as me,G as he,aa as X,aZ as Se,a_ as Ee,z as j,l as _e,a$ as Me,h as n,E as D,ac as Be,ad as Le,b0 as Oe,aS as K,P as xe,r as ae,b1 as ze,al as ge,ai as ce,a7 as He,a3 as Re,K as Ae,b2 as ue,ag as Fe,ah as Ie,Q as Ve,V as De,e as U,Z as Ke,aj as Ue,_ as je,g as de,w as M,a as h,t as V,c as qe,p as We,j as Xe}from"./index-CErje0SO.js";import{u as Ye,m as ee}from"./index-DkLTyrgw.js";const x=e=>Ce(e),Y=Symbol("tabsRootContextKey"),Ze=q({tabs:{type:se(Array),default:()=>fe([])}}),ye="ElTabBar",Ge=R({name:ye}),Qe=R({...Ge,props:Ze,setup(e,{expose:l}){const p=e,O=X(),u=ne(Y);u||oe(ye,"<el-tabs><el-tab-bar /></el-tabs>");const t=W("tabs"),w=T(),C=T(),o=()=>{let d=0,P=0;const b=["top","bottom"].includes(u.props.tabPosition)?"width":"height",i=b==="width"?"x":"y",B=i==="x"?"left":"top";return p.tabs.every(a=>{var v,k;const N=(k=(v=O.parent)==null?void 0:v.refs)==null?void 0:k[`tab-${a.uid}`];if(!N)return!1;if(!a.active)return!0;d=N[`offset${x(B)}`],P=N[`client${x(b)}`];const S=window.getComputedStyle(N);return b==="width"&&(p.tabs.length>1&&(P-=Number.parseFloat(S.paddingLeft)+Number.parseFloat(S.paddingRight)),d+=Number.parseFloat(S.paddingLeft)),!1}),{[b]:`${P}px`,transform:`translate${x(i)}(${d}px)`}},f=()=>C.value=o();return H(()=>p.tabs,async()=>{await le(),f()},{immediate:!0}),pe(w,()=>f()),l({ref:w,update:f}),(d,P)=>(A(),F("div",{ref_key:"barRef",ref:w,class:ve([L(t).e("active-bar"),L(t).is(L(u).props.tabPosition)]),style:me(C.value)},null,6))}});var Je=he(Qe,[["__file","tab-bar.vue"]]);const et=q({panes:{type:se(Array),default:()=>fe([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),tt={tabClick:(e,l,p)=>p instanceof Event,tabRemove:(e,l)=>l instanceof Event},be="ElTabNav",at=R({name:be,props:et,emits:tt,setup(e,{expose:l,emit:p}){const O=X(),u=ne(Y);u||oe(be,"<el-tabs><tab-nav /></el-tabs>");const t=W("tabs"),w=Se(),C=Ee(),o=T(),f=T(),d=T(),P=T(),b=T(!1),i=T(0),B=T(!1),a=T(!0),v=j(()=>["top","bottom"].includes(u.props.tabPosition)?"width":"height"),k=j(()=>({transform:`translate${v.value==="width"?"X":"Y"}(-${i.value}px)`})),N=()=>{if(!o.value)return;const r=o.value[`offset${x(v.value)}`],c=i.value;if(!c)return;const s=c>r?c-r:0;i.value=s},S=()=>{if(!o.value||!f.value)return;const r=f.value[`offset${x(v.value)}`],c=o.value[`offset${x(v.value)}`],s=i.value;if(r-s<=c)return;const g=r-s>c*2?s+c:r-c;i.value=g},I=async()=>{const r=f.value;if(!b.value||!d.value||!o.value||!r)return;await le();const c=d.value.querySelector(".is-active");if(!c)return;const s=o.value,g=["top","bottom"].includes(u.props.tabPosition),y=c.getBoundingClientRect(),_=s.getBoundingClientRect(),E=g?r.offsetWidth-_.width:r.offsetHeight-_.height,$=i.value;let m=$;g?(y.left<_.left&&(m=$-(_.left-y.left)),y.right>_.right&&(m=$+y.right-_.right)):(y.top<_.top&&(m=$-(_.top-y.top)),y.bottom>_.bottom&&(m=$+(y.bottom-_.bottom))),m=Math.max(m,0),i.value=Math.min(m,E)},ie=()=>{var r;if(!f.value||!o.value)return;e.stretch&&((r=P.value)==null||r.update());const c=f.value[`offset${x(v.value)}`],s=o.value[`offset${x(v.value)}`],g=i.value;s<c?(b.value=b.value||{},b.value.prev=g,b.value.next=g+s<c,c-g<s&&(i.value=c-s)):(b.value=!1,g>0&&(i.value=0))},Ne=r=>{const c=r.code,{up:s,down:g,left:y,right:_}=K;if(![s,g,y,_].includes(c))return;const E=Array.from(r.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),$=E.indexOf(r.target);let m;c===y||c===s?$===0?m=E.length-1:m=$-1:$<E.length-1?m=$+1:m=0,E[m].focus({preventScroll:!0}),E[m].click(),re()},re=()=>{a.value&&(B.value=!0)},Z=()=>B.value=!1;return H(w,r=>{r==="hidden"?a.value=!1:r==="visible"&&setTimeout(()=>a.value=!0,50)}),H(C,r=>{r?setTimeout(()=>a.value=!0,50):a.value=!1}),pe(d,ie),_e(()=>setTimeout(()=>I(),0)),Me(()=>ie()),l({scrollToActiveTab:I,removeFocus:Z}),H(()=>e.panes,()=>O.update(),{flush:"post",deep:!0}),()=>{const r=b.value?[n("span",{class:[t.e("nav-prev"),t.is("disabled",!b.value.prev)],onClick:N},[n(D,null,{default:()=>[n(Be,null,null)]})]),n("span",{class:[t.e("nav-next"),t.is("disabled",!b.value.next)],onClick:S},[n(D,null,{default:()=>[n(Le,null,null)]})])]:null,c=e.panes.map((s,g)=>{var y,_,E,$;const m=s.uid,G=s.props.disabled,Q=(_=(y=s.props.name)!=null?y:s.index)!=null?_:`${g}`,J=!G&&(s.isClosable||e.editable);s.index=`${g}`;const $e=J?n(D,{class:"is-icon-close",onClick:z=>p("tabRemove",s,z)},{default:()=>[n(Oe,null,null)]}):null,Pe=(($=(E=s.slots).label)==null?void 0:$.call(E))||s.props.label,ke=!G&&s.active?0:-1;return n("div",{ref:`tab-${m}`,class:[t.e("item"),t.is(u.props.tabPosition),t.is("active",s.active),t.is("disabled",G),t.is("closable",J),t.is("focus",B.value)],id:`tab-${Q}`,key:`tab-${m}`,"aria-controls":`pane-${Q}`,role:"tab","aria-selected":s.active,tabindex:ke,onFocus:()=>re(),onBlur:()=>Z(),onClick:z=>{Z(),p("tabClick",s,Q,z)},onKeydown:z=>{J&&(z.code===K.delete||z.code===K.backspace)&&p("tabRemove",s,z)}},[Pe,$e])});return n("div",{ref:d,class:[t.e("nav-wrap"),t.is("scrollable",!!b.value),t.is(u.props.tabPosition)]},[r,n("div",{class:t.e("nav-scroll"),ref:o},[n("div",{class:[t.e("nav"),t.is(u.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(u.props.tabPosition))],ref:f,style:k.value,role:"tablist",onKeydown:Ne},[e.type?null:n(Je,{ref:P,tabs:[...e.panes]},null),c])])])}}}),st=q({type:{type:String,values:["card","border-card",""],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:se(Function),default:()=>!0},stretch:Boolean}),te=e=>He(e)||Re(e),nt={[ge]:e=>te(e),tabClick:(e,l)=>l instanceof Event,tabChange:e=>te(e),edit:(e,l)=>["remove","add"].includes(l),tabRemove:e=>te(e),tabAdd:()=>!0},ot=R({name:"ElTabs",props:st,emits:nt,setup(e,{emit:l,slots:p,expose:O}){var u;const t=W("tabs"),{children:w,addChild:C,removeChild:o}=Ye(X(),"ElTabPane"),f=T(),d=T((u=e.modelValue)!=null?u:"0"),P=async(a,v=!1)=>{var k,N,S;if(!(d.value===a||ce(a)))try{await((k=e.beforeLeave)==null?void 0:k.call(e,a,d.value))!==!1&&(d.value=a,v&&(l(ge,a),l("tabChange",a)),(S=(N=f.value)==null?void 0:N.removeFocus)==null||S.call(N))}catch{}},b=(a,v,k)=>{a.props.disabled||(P(v,!0),l("tabClick",a,k))},i=(a,v)=>{a.props.disabled||ce(a.props.name)||(v.stopPropagation(),l("edit",a.props.name,"remove"),l("tabRemove",a.props.name))},B=()=>{l("edit",void 0,"add"),l("tabAdd")};return H(()=>e.modelValue,a=>P(a)),H(d,async()=>{var a;await le(),(a=f.value)==null||a.scrollToActiveTab()}),xe(Y,{props:e,currentName:d,registerPane:C,unregisterPane:o}),O({currentName:d}),()=>{const a=p["add-icon"],v=e.editable||e.addable?n("span",{class:t.e("new-tab"),tabindex:"0",onClick:B,onKeydown:S=>{S.code===K.enter&&B()}},[a?ae(p,"add-icon"):n(D,{class:t.is("icon-plus")},{default:()=>[n(ze,null,null)]})]):null,k=n("div",{class:[t.e("header"),t.is(e.tabPosition)]},[v,n(at,{ref:f,currentName:d.value,editable:e.editable,type:e.type,panes:w.value,stretch:e.stretch,onTabClick:b,onTabRemove:i},null)]),N=n("div",{class:t.e("content")},[ae(p,"default")]);return n("div",{class:[t.b(),t.m(e.tabPosition),{[t.m("card")]:e.type==="card",[t.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[k,N]:[N,k]])}}}),lt=q({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),it=["id","aria-hidden","aria-labelledby"],Te="ElTabPane",rt=R({name:Te}),ct=R({...rt,props:lt,setup(e){const l=e,p=X(),O=Ae(),u=ne(Y);u||oe(Te,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=W("tab-pane"),w=T(),C=j(()=>l.closable||u.props.closable),o=ue(()=>{var i;return u.currentName.value===((i=l.name)!=null?i:w.value)}),f=T(o.value),d=j(()=>{var i;return(i=l.name)!=null?i:w.value}),P=ue(()=>!l.lazy||f.value||o.value);H(o,i=>{i&&(f.value=!0)});const b=Fe({uid:p.uid,slots:O,props:l,paneName:d,active:o,index:w,isClosable:C});return _e(()=>{u.registerPane(b)}),Ie(()=>{u.unregisterPane(b.uid)}),(i,B)=>L(P)?Ve((A(),F("div",{key:0,id:`pane-${L(d)}`,class:ve(L(t).b()),role:"tabpanel","aria-hidden":!L(o),"aria-labelledby":`tab-${L(d)}`},[ae(i.$slots,"default")],10,it)),[[De,L(o)]]):U("v-if",!0)}});var we=he(ct,[["__file","tab-pane.vue"]]);const ut=Ke(ot,{TabPane:we}),dt=Ue(we),bt=R({setup(){},data(){return{background:"#fff",tabPosition:"",template:{type:"",title:"",group:"",motto:"",describe:"",article:"",photo:{desktop:"",mobile:""}},scene:{"strengths-and-weaknesses":"","relationships-dating":"",friends:"",parents:"",careers:"","at-work":"",conclusion:""}}},async beforeMount(){const e=this.$route.params.type||"",{default:l}=await ee.template[e](),{default:p}=await ee.scene[e]();this.template=l,this.scene=p,this.background=ee.color[this.template.group],this.tabPosition=window.matchMedia("(max-width: 768px)").matches?"top":"right"}}),ft=e=>(We("data-v-1addfb7c"),e=e(),Xe(),e),pt={class:"content"},vt={class:"type-img"},mt=["src"],ht=["src"],_t=ft(()=>h("div",{class:"clear"},null,-1)),gt={class:"article mbti-container"},yt=["innerHTML"],Tt=["innerHTML"],wt=["innerHTML"],Nt=["innerHTML"],$t=["innerHTML"],Pt=["innerHTML"],kt=["innerHTML"],Ct=["innerHTML"];function St(e,l,p,O,u,t){const w=de("ui-header"),C=de("ui-container"),o=dt,f=ut;return A(),F("main",null,[n(w),n(C,{class:"container",background:e.background},{content:M(()=>[h("div",pt,[h("div",{class:"type-info",style:me({background:e.background})},[h("h1",null,V(e.template.title.split("-").pop()),1),h("h3",null,V(e.template.type.toUpperCase())+"性格",1),h("p",null,V(e.template.describe),1)],4),h("div",vt,[e.template.photo.mobile?(A(),F("img",{key:0,src:"/photo/"+e.template.photo.mobile,class:"desktop"},null,8,mt)):U("",!0),e.template.photo.desktop?(A(),F("img",{key:1,src:"/photo/"+e.template.photo.desktop,class:"mobile"},null,8,ht)):U("",!0)]),_t])]),_:1},8,["background"]),h("div",gt,[h("h1",null,V(e.template.title.split("-").pop()),1),e.tabPosition?(A(),qe(f,{key:0,"tab-position":e.tabPosition,class:"tabs"},{default:M(()=>[n(o,{label:"性格概述"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.template.article},null,8,yt)]),_:1}),n(o,{label:"优势 & 劣势"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene["strengths-and-weaknesses"]},null,8,Tt)]),_:1}),n(o,{label:"恋爱关系"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene["relationships-dating"]},null,8,wt)]),_:1}),n(o,{label:"友谊"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene.friends},null,8,Nt)]),_:1}),n(o,{label:"为人父母"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene.parents},null,8,$t)]),_:1}),n(o,{label:"职业道路"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene.careers},null,8,Pt)]),_:1}),n(o,{label:"职场习惯"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene["at-work"]},null,8,kt)]),_:1}),n(o,{label:"性格总结"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene.conclusion},null,8,Ct)]),_:1})]),_:1},8,["tab-position"])):U("",!0)])])}const Bt=je(bt,[["render",St],["__scopeId","data-v-1addfb7c"]]);export{Bt as default};
