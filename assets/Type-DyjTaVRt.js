import{aX as ke,a2 as j,aK as se,aM as fe,f as R,y as ne,aY as oe,M as q,N as T,a4 as H,at as le,a6 as pe,o as A,b as F,A as ve,B as L,D as me,G as he,aa as W,aZ as Se,a_ as Ee,z as U,l as _e,a$ as Me,h as a,E as D,ac as Be,ad as Le,b0 as xe,aS as K,P as Oe,r as te,b1 as ze,al as ge,ai as ce,a7 as He,a3 as Re,K as Ae,b2 as ue,ag as Fe,ah as Ie,Q as Ve,V as De,e as ae,Z as Ke,aj as Ue,_ as je,g as de,w as M,a as h,t as V,p as qe,j as We}from"./index-BThDkG95.js";import{u as Xe,m as J}from"./index-hwg_o51q.js";const O=e=>ke(e),X=Symbol("tabsRootContextKey"),Ye=j({tabs:{type:se(Array),default:()=>fe([])}}),ye="ElTabBar",Ze=R({name:ye}),Ge=R({...Ze,props:Ye,setup(e,{expose:l}){const p=e,x=W(),u=ne(X);u||oe(ye,"<el-tabs><el-tab-bar /></el-tabs>");const t=q("tabs"),w=T(),k=T(),o=()=>{let d=0,P=0;const b=["top","bottom"].includes(u.props.tabPosition)?"width":"height",i=b==="width"?"x":"y",B=i==="x"?"left":"top";return p.tabs.every(s=>{var v,C;const N=(C=(v=x.parent)==null?void 0:v.refs)==null?void 0:C[`tab-${s.uid}`];if(!N)return!1;if(!s.active)return!0;d=N[`offset${O(B)}`],P=N[`client${O(b)}`];const S=window.getComputedStyle(N);return b==="width"&&(p.tabs.length>1&&(P-=Number.parseFloat(S.paddingLeft)+Number.parseFloat(S.paddingRight)),d+=Number.parseFloat(S.paddingLeft)),!1}),{[b]:`${P}px`,transform:`translate${O(i)}(${d}px)`}},f=()=>k.value=o();return H(()=>p.tabs,async()=>{await le(),f()},{immediate:!0}),pe(w,()=>f()),l({ref:w,update:f}),(d,P)=>(A(),F("div",{ref_key:"barRef",ref:w,class:ve([L(t).e("active-bar"),L(t).is(L(u).props.tabPosition)]),style:me(k.value)},null,6))}});var Qe=he(Ge,[["__file","tab-bar.vue"]]);const Je=j({panes:{type:se(Array),default:()=>fe([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),et={tabClick:(e,l,p)=>p instanceof Event,tabRemove:(e,l)=>l instanceof Event},be="ElTabNav",tt=R({name:be,props:Je,emits:et,setup(e,{expose:l,emit:p}){const x=W(),u=ne(X);u||oe(be,"<el-tabs><tab-nav /></el-tabs>");const t=q("tabs"),w=Se(),k=Ee(),o=T(),f=T(),d=T(),P=T(),b=T(!1),i=T(0),B=T(!1),s=T(!0),v=U(()=>["top","bottom"].includes(u.props.tabPosition)?"width":"height"),C=U(()=>({transform:`translate${v.value==="width"?"X":"Y"}(-${i.value}px)`})),N=()=>{if(!o.value)return;const r=o.value[`offset${O(v.value)}`],c=i.value;if(!c)return;const n=c>r?c-r:0;i.value=n},S=()=>{if(!o.value||!f.value)return;const r=f.value[`offset${O(v.value)}`],c=o.value[`offset${O(v.value)}`],n=i.value;if(r-n<=c)return;const g=r-n>c*2?n+c:r-c;i.value=g},I=async()=>{const r=f.value;if(!b.value||!d.value||!o.value||!r)return;await le();const c=d.value.querySelector(".is-active");if(!c)return;const n=o.value,g=["top","bottom"].includes(u.props.tabPosition),y=c.getBoundingClientRect(),_=n.getBoundingClientRect(),E=g?r.offsetWidth-_.width:r.offsetHeight-_.height,$=i.value;let m=$;g?(y.left<_.left&&(m=$-(_.left-y.left)),y.right>_.right&&(m=$+y.right-_.right)):(y.top<_.top&&(m=$-(_.top-y.top)),y.bottom>_.bottom&&(m=$+(y.bottom-_.bottom))),m=Math.max(m,0),i.value=Math.min(m,E)},ie=()=>{var r;if(!f.value||!o.value)return;e.stretch&&((r=P.value)==null||r.update());const c=f.value[`offset${O(v.value)}`],n=o.value[`offset${O(v.value)}`],g=i.value;n<c?(b.value=b.value||{},b.value.prev=g,b.value.next=g+n<c,c-g<n&&(i.value=c-n)):(b.value=!1,g>0&&(i.value=0))},Ne=r=>{const c=r.code,{up:n,down:g,left:y,right:_}=K;if(![n,g,y,_].includes(c))return;const E=Array.from(r.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),$=E.indexOf(r.target);let m;c===y||c===n?$===0?m=E.length-1:m=$-1:$<E.length-1?m=$+1:m=0,E[m].focus({preventScroll:!0}),E[m].click(),re()},re=()=>{s.value&&(B.value=!0)},Y=()=>B.value=!1;return H(w,r=>{r==="hidden"?s.value=!1:r==="visible"&&setTimeout(()=>s.value=!0,50)}),H(k,r=>{r?setTimeout(()=>s.value=!0,50):s.value=!1}),pe(d,ie),_e(()=>setTimeout(()=>I(),0)),Me(()=>ie()),l({scrollToActiveTab:I,removeFocus:Y}),H(()=>e.panes,()=>x.update(),{flush:"post",deep:!0}),()=>{const r=b.value?[a("span",{class:[t.e("nav-prev"),t.is("disabled",!b.value.prev)],onClick:N},[a(D,null,{default:()=>[a(Be,null,null)]})]),a("span",{class:[t.e("nav-next"),t.is("disabled",!b.value.next)],onClick:S},[a(D,null,{default:()=>[a(Le,null,null)]})])]:null,c=e.panes.map((n,g)=>{var y,_,E,$;const m=n.uid,Z=n.props.disabled,G=(_=(y=n.props.name)!=null?y:n.index)!=null?_:`${g}`,Q=!Z&&(n.isClosable||e.editable);n.index=`${g}`;const $e=Q?a(D,{class:"is-icon-close",onClick:z=>p("tabRemove",n,z)},{default:()=>[a(xe,null,null)]}):null,Pe=(($=(E=n.slots).label)==null?void 0:$.call(E))||n.props.label,Ce=!Z&&n.active?0:-1;return a("div",{ref:`tab-${m}`,class:[t.e("item"),t.is(u.props.tabPosition),t.is("active",n.active),t.is("disabled",Z),t.is("closable",Q),t.is("focus",B.value)],id:`tab-${G}`,key:`tab-${m}`,"aria-controls":`pane-${G}`,role:"tab","aria-selected":n.active,tabindex:Ce,onFocus:()=>re(),onBlur:()=>Y(),onClick:z=>{Y(),p("tabClick",n,G,z)},onKeydown:z=>{Q&&(z.code===K.delete||z.code===K.backspace)&&p("tabRemove",n,z)}},[Pe,$e])});return a("div",{ref:d,class:[t.e("nav-wrap"),t.is("scrollable",!!b.value),t.is(u.props.tabPosition)]},[r,a("div",{class:t.e("nav-scroll"),ref:o},[a("div",{class:[t.e("nav"),t.is(u.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(u.props.tabPosition))],ref:f,style:C.value,role:"tablist",onKeydown:Ne},[e.type?null:a(Qe,{ref:P,tabs:[...e.panes]},null),c])])])}}}),at=j({type:{type:String,values:["card","border-card",""],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:se(Function),default:()=>!0},stretch:Boolean}),ee=e=>He(e)||Re(e),st={[ge]:e=>ee(e),tabClick:(e,l)=>l instanceof Event,tabChange:e=>ee(e),edit:(e,l)=>["remove","add"].includes(l),tabRemove:e=>ee(e),tabAdd:()=>!0},nt=R({name:"ElTabs",props:at,emits:st,setup(e,{emit:l,slots:p,expose:x}){var u;const t=q("tabs"),{children:w,addChild:k,removeChild:o}=Xe(W(),"ElTabPane"),f=T(),d=T((u=e.modelValue)!=null?u:"0"),P=async(s,v=!1)=>{var C,N,S;if(!(d.value===s||ce(s)))try{await((C=e.beforeLeave)==null?void 0:C.call(e,s,d.value))!==!1&&(d.value=s,v&&(l(ge,s),l("tabChange",s)),(S=(N=f.value)==null?void 0:N.removeFocus)==null||S.call(N))}catch{}},b=(s,v,C)=>{s.props.disabled||(P(v,!0),l("tabClick",s,C))},i=(s,v)=>{s.props.disabled||ce(s.props.name)||(v.stopPropagation(),l("edit",s.props.name,"remove"),l("tabRemove",s.props.name))},B=()=>{l("edit",void 0,"add"),l("tabAdd")};return H(()=>e.modelValue,s=>P(s)),H(d,async()=>{var s;await le(),(s=f.value)==null||s.scrollToActiveTab()}),Oe(X,{props:e,currentName:d,registerPane:k,unregisterPane:o}),x({currentName:d}),()=>{const s=p["add-icon"],v=e.editable||e.addable?a("span",{class:t.e("new-tab"),tabindex:"0",onClick:B,onKeydown:S=>{S.code===K.enter&&B()}},[s?te(p,"add-icon"):a(D,{class:t.is("icon-plus")},{default:()=>[a(ze,null,null)]})]):null,C=a("div",{class:[t.e("header"),t.is(e.tabPosition)]},[v,a(tt,{ref:f,currentName:d.value,editable:e.editable,type:e.type,panes:w.value,stretch:e.stretch,onTabClick:b,onTabRemove:i},null)]),N=a("div",{class:t.e("content")},[te(p,"default")]);return a("div",{class:[t.b(),t.m(e.tabPosition),{[t.m("card")]:e.type==="card",[t.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[C,N]:[N,C]])}}}),ot=j({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),lt=["id","aria-hidden","aria-labelledby"],Te="ElTabPane",it=R({name:Te}),rt=R({...it,props:ot,setup(e){const l=e,p=W(),x=Ae(),u=ne(X);u||oe(Te,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=q("tab-pane"),w=T(),k=U(()=>l.closable||u.props.closable),o=ue(()=>{var i;return u.currentName.value===((i=l.name)!=null?i:w.value)}),f=T(o.value),d=U(()=>{var i;return(i=l.name)!=null?i:w.value}),P=ue(()=>!l.lazy||f.value||o.value);H(o,i=>{i&&(f.value=!0)});const b=Fe({uid:p.uid,slots:x,props:l,paneName:d,active:o,index:w,isClosable:k});return _e(()=>{u.registerPane(b)}),Ie(()=>{u.unregisterPane(b.uid)}),(i,B)=>L(P)?Ve((A(),F("div",{key:0,id:`pane-${L(d)}`,class:ve(L(t).b()),role:"tabpanel","aria-hidden":!L(o),"aria-labelledby":`tab-${L(d)}`},[te(i.$slots,"default")],10,lt)),[[De,L(o)]]):ae("v-if",!0)}});var we=he(rt,[["__file","tab-pane.vue"]]);const ct=Ke(nt,{TabPane:we}),ut=Ue(we),dt=R({setup(){},data(){return{background:"#fff",tabPosition:"right",template:{type:"",title:"",group:"",motto:"",describe:"",article:"",photo:{desktop:"",mobile:""}},scene:{"strengths-and-weaknesses":"","relationships-dating":"",friends:"",parents:"",careers:"","at-work":"",conclusion:""}}},async beforeMount(){const e=this.$route.params.type||"",{default:l}=await J.template[e](),{default:p}=await J.scene[e]();this.template=l,this.scene=p,this.background=J.color[this.template.group],this.tabPosition=window.matchMedia("(max-width: 768px)").matches?"top":"right"}}),bt=e=>(qe("data-v-37a62fbe"),e=e(),We(),e),ft={class:"content"},pt={class:"type-img"},vt=["src"],mt=["src"],ht=bt(()=>h("div",{class:"clear"},null,-1)),_t={class:"article mbti-container"},gt=["innerHTML"],yt=["innerHTML"],Tt=["innerHTML"],wt=["innerHTML"],Nt=["innerHTML"],$t=["innerHTML"],Pt=["innerHTML"],Ct=["innerHTML"];function kt(e,l,p,x,u,t){const w=de("ui-header"),k=de("ui-container"),o=ut,f=ct;return A(),F("main",null,[a(w),a(k,{class:"container",background:e.background},{content:M(()=>[h("div",ft,[h("div",{class:"type-info",style:me({background:e.background})},[h("h1",null,V(e.template.title.split("-").pop()),1),h("h3",null,V(e.template.type.toUpperCase())+"性格",1),h("p",null,V(e.template.describe),1)],4),h("div",pt,[e.template.photo.mobile?(A(),F("img",{key:0,src:"/photo/"+e.template.photo.mobile,class:"desktop"},null,8,vt)):ae("",!0),e.template.photo.desktop?(A(),F("img",{key:1,src:"/photo/"+e.template.photo.desktop,class:"mobile"},null,8,mt)):ae("",!0)]),ht])]),_:1},8,["background"]),h("div",_t,[h("h1",null,V(e.template.title.split("-").pop()),1),a(f,{"tab-position":e.tabPosition,class:"tabs"},{default:M(()=>[a(o,{label:"性格概述"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.template.article},null,8,gt)]),_:1}),a(o,{label:"优势 & 劣势"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene["strengths-and-weaknesses"]},null,8,yt)]),_:1}),a(o,{label:"恋爱关系"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene["relationships-dating"]},null,8,Tt)]),_:1}),a(o,{label:"友谊"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene.friends},null,8,wt)]),_:1}),a(o,{label:"为人父母"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene.parents},null,8,Nt)]),_:1}),a(o,{label:"职业道路"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene.careers},null,8,$t)]),_:1}),a(o,{label:"职场习惯"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene["at-work"]},null,8,Pt)]),_:1}),a(o,{label:"性格总结"},{default:M(()=>[h("div",{class:"text mbti-template",innerHTML:e.scene.conclusion},null,8,Ct)]),_:1})]),_:1},8,["tab-position"])])])}const Mt=je(dt,[["render",kt],["__scopeId","data-v-37a62fbe"]]);export{Mt as default};
