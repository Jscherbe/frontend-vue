import{g as y,_ as v,d as l,f as p,b as k,F as S,x as h,n as s,h as d,o as n,a as I,e as u,w as j,j as b,t as g,v as C}from"./iframe-ClpBgbxC.js";import"./preload-helper-BJwshlQW.js";const _={name:"UluBreadcrumb",components:{UluIcon:v},props:{items:{type:Array,default:()=>[]},separatorIcon:String,classes:{type:Object,default:()=>({nav:"breadcrumb",list:"breadcrumb__list",item:"breadcrumb__item",link:"breadcrumb__link",current:"breadcrumb__current",separator:"breadcrumb__separator"})}}};function x(a,N,e,V,P,w){const B=d("router-link"),U=d("UluIcon");return e.items.length?(n(),l("nav",{key:0,class:s(e.classes.nav),"aria-label":"Breadcrumb"},[k("ol",{class:s(e.classes.list)},[(n(!0),l(S,null,h(e.items,(r,i)=>(n(),l("li",{key:i,class:s(e.classes.item)},[r.current?(n(),l("span",{key:1,class:s(r.current)},[u(a.$slots,"default",{item:r},()=>[b(g(r.title),1)])],2)):(n(),I(B,{key:0,to:r.to,class:s(e.classes.link),"aria-current":r.current?"page":null},{default:j(()=>[u(a.$slots,"default",{item:r},()=>[b(g(r.title),1)])]),_:2},1032,["to","class","aria-current"])),i<e.items.length-1?u(a.$slots,"separator",{key:2},()=>[C(U,{class:s(e.classes.separator),icon:e.separatorIcon||"type:pathSeparator"},null,8,["class","icon"])]):p("",!0)],2))),128))],2)],2)):p("",!0)}const m=y(_,[["render",x]]);_.__docgenInfo={displayName:"UluBreadcrumb",description:`Breadcrumb trail component
- Is now agnostic of router, pass precomputed breadcrumb trail via items prop`,tags:{},exportName:"default",props:[{name:"items",description:`Array of breadcrumb items.
Each item is an object: { title: String, to: [String, Object], current: Boolean }`,type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"separatorIcon",description:"Icon to use as a separator.",type:{name:"string"}},{name:"classes",description:`Classes object to be applied to elements.
Keys: nav, list, item, link, icon`,type:{name:"object"},defaultValue:{func:!1,value:`{
  nav: "breadcrumb",
  list: "breadcrumb__list",
  item: "breadcrumb__item",
  link: "breadcrumb__link",
  current: "breadcrumb__current",
  separator: "breadcrumb__separator"
}`}}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"separator"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/navigation/UluBreadcrumb.vue"]};const F={component:m,argTypes:{items:{control:"object"},separatorIcon:{control:"text"},classes:{control:"object"}}},f=a=>({components:{UluBreadcrumb:m},setup(){return{args:a}},template:'<UluBreadcrumb v-bind="args" />'}),t=f.bind({});t.args={items:[{title:"Home",to:{path:"/"}},{title:"Parent Page",to:{path:"/parent"}},{title:"Current Page",to:{path:"/parent/current"},current:!0}]};const o=f.bind({});o.args={...t.args,separatorIcon:"fas fa-arrow-right"};const c=a=>({components:{UluBreadcrumb:m},setup(){return{args:a}},template:`
    <UluBreadcrumb v-bind="args">
      <template #separator>
        <span style="padding: 0 8px;">/</span>
      </template>
    </UluBreadcrumb>
  `});c.args={...t.args};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluBreadcrumb
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluBreadcrumb v-bind="args" />'
})`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
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
})`,...c.parameters?.docs?.source}}};const O=["Default","CustomSeparator","CustomSeparatorSlot"];export{o as CustomSeparator,c as CustomSeparatorSlot,t as Default,O as __namedExportsOrder,F as default};
