import{ay as a,az as i,aA as u}from"./app-BtsrqYBu.js";const c=(o,t,r)=>i(o.subTree).filter(e=>{var d;return u(e)&&((d=e.type)==null?void 0:d.name)===t&&!!e.component}).map(e=>e.component.uid).map(e=>r[e]).filter(e=>!!e),m=(o,t)=>{const r={},n=a([]);return{children:n,addChild:d=>{r[d.uid]=d,n.value=c(o,t,r)},removeChild:d=>{delete r[d],n.value=n.value.filter(s=>s.uid!==d)}}};export{m as u};