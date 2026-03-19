import{d as c,f as p,b as B,F as y,g as U,n as t,z as _,o as s,a as k,e as m,w as v,j as d,t as b,x as S,_ as h}from"./iframe-BmUNP_tL.js";import"./preload-helper-BJwshlQW.js";const l={__name:"UluBreadcrumb",props:{items:{type:Array,default:()=>[]},separatorIcon:String,classes:{type:Object,default:()=>({nav:"breadcrumb",list:"breadcrumb__list",item:"breadcrumb__item",link:"breadcrumb__link",current:"breadcrumb__current",separator:"breadcrumb__separator"})}},setup(e){return(u,j)=>{const f=_("router-link");return e.items.length?(s(),c("nav",{key:0,class:t(e.classes.nav),"aria-label":"Breadcrumb"},[B("ol",{class:t(e.classes.list)},[(s(!0),c(y,null,U(e.items,(r,i)=>(s(),c("li",{key:i,class:t(e.classes.item)},[r.current?(s(),c("span",{key:1,class:t(r.current)},[m(u.$slots,"default",{item:r},()=>[d(b(r.title),1)])],2)):(s(),k(f,{key:0,to:r.to,class:t(e.classes.link),"aria-current":r.current?"page":null},{default:v(()=>[m(u.$slots,"default",{item:r},()=>[d(b(r.title),1)])]),_:2},1032,["to","class","aria-current"])),i<e.items.length-1?m(u.$slots,"separator",{key:2},()=>[S(h,{class:t(e.classes.separator),icon:e.separatorIcon||"type:pathSeparator"},null,8,["class","icon"])]):p("",!0)],2))),128))],2)],2)):p("",!0)}}};l.__docgenInfo={exportName:"default",displayName:"UluBreadcrumb",description:"",tags:{},props:[{name:"items",description:`Array of breadcrumb items.
Each item is an object: { title: String, to: [String, Object], current: Boolean }`,type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"separatorIcon",description:"Icon to use as a separator.",type:{name:"string"}},{name:"classes",description:`Classes object to be applied to elements.
Keys: nav, list, item, link, icon`,type:{name:"object"},defaultValue:{func:!1,value:`{
  nav: "breadcrumb",
  list: "breadcrumb__list",
  item: "breadcrumb__item",
  link: "breadcrumb__link",
  current: "breadcrumb__current",
  separator: "breadcrumb__separator"
}`}}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"separator"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/navigation/UluBreadcrumb.vue"]};const x={component:l,argTypes:{items:{control:"object"},separatorIcon:{control:"text"},classes:{control:"object"}}},g=e=>({components:{UluBreadcrumb:l},setup(){return{args:e}},template:'<UluBreadcrumb v-bind="args" />'}),a=g.bind({});a.args={items:[{title:"Home",to:{path:"/"}},{title:"Parent Page",to:{path:"/parent"}},{title:"Current Page",to:{path:"/parent/current"},current:!0}]};const n=g.bind({});n.args={...a.args,separatorIcon:"fas fa-arrow-right"};const o=e=>({components:{UluBreadcrumb:l},setup(){return{args:e}},template:`
    <UluBreadcrumb v-bind="args">
      <template #separator>
        <span style="padding: 0 8px;">/</span>
      </template>
    </UluBreadcrumb>
  `});o.args={...a.args};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluBreadcrumb
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluBreadcrumb v-bind="args" />'
})`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluBreadcrumb
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluBreadcrumb v-bind="args" />'
})`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
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
})`,...o.parameters?.docs?.source}}};const N=["Default","CustomSeparator","CustomSeparatorSlot"];export{n as CustomSeparator,o as CustomSeparatorSlot,a as Default,N as __namedExportsOrder,x as default};
