import{c as u,h as c,a as Q,Q as b}from"./use-router-link.d877275b.js";import{c as o,h as t,g as f,j as l,k as m,m as S,E as $,a1 as h,D as C}from"./index.33dd8135.js";import{u as q,a as _}from"./QImg.50cbeda0.js";var P=u({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:i}){const n=o(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>t(e.tag,{class:n.value},c(i.default))}}),T=u({name:"QCard",props:{...q,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:i}){const{proxy:{$q:n}}=f(),a=_(e,n),s=o(()=>"q-card"+(a.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>t(e.tag,{class:s.value},c(i.default))}}),z=u({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:i}){const{proxy:{$q:n}}=f(),a=m(S,l);if(a===l)return console.error("QPage needs to be a deep child of QLayout"),l;if(m($,l)===l)return console.error("QPage needs to be child of QPageContainer"),l;const g=o(()=>{const r=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof e.styleFn=="function"){const v=a.isContainer.value===!0?a.containerHeight.value:n.screen.height;return e.styleFn(r,v)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-r+"px":n.screen.height===0?r!==0?`calc(100vh - ${r}px)`:"100vh":n.screen.height-r+"px"}}),d=o(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>t("main",{class:d.value,style:g.value},c(i.default))}}),D=u({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(e,{slots:i}){const n=m(h,l);if(n===l)return console.error("QTimelineEntry needs to be child of QTimeline"),l;const a=o(()=>`q-timeline__entry q-timeline__entry--${e.side}`+(e.icon!==void 0||e.avatar!==void 0?" q-timeline__entry--icon":"")),s=o(()=>`q-timeline__dot text-${e.color||n.color}`),g=o(()=>n.layout==="comfortable"&&n.side==="left");return()=>{const d=Q(i.default,[]);if(e.body!==void 0&&d.unshift(e.body),e.heading===!0){const y=[t("div"),t("div"),t(e.tag,{class:"q-timeline__heading-title"},d)];return t("div",{class:"q-timeline__heading"},g.value===!0?y.reverse():y)}let r;e.icon!==void 0?r=[t(b,{class:"row items-center justify-center",name:e.icon})]:e.avatar!==void 0&&(r=[t("img",{class:"q-timeline__dot-img",src:e.avatar})]);const v=[t("div",{class:"q-timeline__subtitle"},[t("span",{},c(i.subtitle,[e.subtitle]))]),t("div",{class:s.value},r),t("div",{class:"q-timeline__content"},[t("h6",{class:"q-timeline__title"},c(i.title,[e.title]))].concat(d))];return t("li",{class:a.value},g.value===!0?v.reverse():v)}}}),F=u({name:"QTimeline",props:{...q,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},layout:{type:String,default:"dense",validator:e=>["dense","comfortable","loose"].includes(e)}},setup(e,{slots:i}){const n=f(),a=_(e,n.proxy.$q);C(h,e);const s=o(()=>`q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}`+(a.value===!0?" q-timeline--dark":""));return()=>t("ul",{class:s.value},c(i.default))}});export{z as Q,T as a,P as b,F as c,D as d};