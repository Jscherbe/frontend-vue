import{a as y,_ as v}from"./iframe-VeyoJg8x.js";import{resolveComponent as p,createElementBlock as l,createCommentVNode as d,openBlock as s,normalizeClass as n,createElementVNode as k,Fragment as S,renderList as h,createBlock as I,renderSlot as u,withCtx as C,createTextVNode as b,toDisplayString as g,createVNode as j}from"vue";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";const _={name:"UluBreadcrumb",components:{UluIcon:v},props:{items:{type:Array,default:()=>[]},separatorIcon:String,classes:{type:Object,default:()=>({nav:"breadcrumb",list:"breadcrumb__list",item:"breadcrumb__item",link:"breadcrumb__link",current:"breadcrumb__current",separator:"breadcrumb__separator"})}}};function x(t,N,e,V,P,E){const B=p("router-link"),U=p("UluIcon");return e.items.length?(s(),l("nav",{key:0,class:n(e.classes.nav),"aria-label":"Breadcrumb"},[k("ol",{class:n(e.classes.list)},[(s(!0),l(S,null,h(e.items,(r,i)=>(s(),l("li",{key:i,class:n(e.classes.item)},[r.current?(s(),l("span",{key:1,class:n(r.current)},[u(t.$slots,"default",{item:r},()=>[b(g(r.title),1)])],2)):(s(),I(B,{key:0,to:r.to,class:n(e.classes.link),"aria-current":r.current?"page":null},{default:C(()=>[u(t.$slots,"default",{item:r},()=>[b(g(r.title),1)])]),_:2},1032,["to","class","aria-current"])),i<e.items.length-1?u(t.$slots,"separator",{key:2},()=>[j(U,{class:n(e.classes.separator),icon:e.separatorIcon||"type:pathSeparator"},null,8,["class","icon"])]):d("",!0)],2))),128))],2)],2)):d("",!0)}const m=y(_,[["render",x]]);_.__docgenInfo={displayName:"UluBreadcrumb",description:`Breadcrumb trail component
- Is now agnostic of router, pass precomputed breadcrumb trail via items prop`,tags:{},exportName:"default",props:[{name:"items",description:`Array of breadcrumb items.
Each item is an object: { title: String, to: [String, Object], current: Boolean }`,type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"separatorIcon",description:"Icon to use as a separator.",type:{name:"string"}},{name:"classes",description:`Classes object to be applied to elements.
Keys: nav, list, item, link, icon`,type:{name:"object"},defaultValue:{func:!1,value:`{
  nav: "breadcrumb",
  list: "breadcrumb__list",
  item: "breadcrumb__item",
  link: "breadcrumb__link",
  current: "breadcrumb__current",
  separator: "breadcrumb__separator"
}`}}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"separator"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/navigation/UluBreadcrumb.vue"]};const H={component:m,argTypes:{items:{control:"object"},separatorIcon:{control:"text"},classes:{control:"object"}}},f=t=>({components:{UluBreadcrumb:m},setup(){return{args:t}},template:'<UluBreadcrumb v-bind="args" />'}),a=f.bind({});a.args={items:[{title:"Home",to:{path:"/"}},{title:"Parent Page",to:{path:"/parent"}},{title:"Current Page",to:{path:"/parent/current"},current:!0}]};const o=f.bind({});o.args={...a.args,separatorIcon:"fas fa-arrow-right"};const c=t=>({components:{UluBreadcrumb:m},setup(){return{args:t}},template:`
    <UluBreadcrumb v-bind="args">
      <template #separator>
        <span style="padding: 0 8px;">/</span>
      </template>
    </UluBreadcrumb>
  `});c.args={...a.args};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluBreadcrumb
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluBreadcrumb v-bind="args" />'
})`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluBreadcrumb
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluBreadcrumb v-bind="args" />'
})`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluBreadcrumb
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <UluBreadcrumb v-bind="args">
      <template #separator>
        <span style="padding: 0 8px;">/</span>
      </template>
    </UluBreadcrumb>
  \`
})`,...c.parameters?.docs?.source}}};const K=["Default","CustomSeparator","CustomSeparatorSlot"];export{o as CustomSeparator,c as CustomSeparatorSlot,a as Default,K as __namedExportsOrder,H as default};
