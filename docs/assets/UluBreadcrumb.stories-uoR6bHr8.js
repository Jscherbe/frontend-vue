import{d as l,f as b,b as U,F as y,g as k,n as t,D as v,o as s,a as _,e as i,w as S,j as g,t as f,B as h,_ as C}from"./iframe-DAIrjjun.js";import"./preload-helper-BJwshlQW.js";const u={__name:"UluBreadcrumb",props:{items:{type:Array,default:()=>[]},separatorIcon:String,classes:{type:Object,default:()=>({nav:"breadcrumb",list:"breadcrumb__list",item:"breadcrumb__item",link:"breadcrumb__link",current:"breadcrumb__current",separator:"breadcrumb__separator"})}},setup(e){return(m,j)=>{const B=v("router-link");return e.items.length?(s(),l("nav",{key:0,class:t(e.classes.nav),"aria-label":"Breadcrumb"},[U("ol",{class:t(e.classes.list)},[(s(!0),l(y,null,k(e.items,(r,d)=>(s(),l("li",{key:d,class:t([e.classes.item,r?.classes?.item])},[r.current?(s(),l("span",{key:1,class:t([e.classes.current,r?.classes?.current])},[i(m.$slots,"default",{item:r},()=>[g(f(r.title),1)])],2)):(s(),_(B,{key:0,to:r.to,class:t([e.classes.link,r?.classes?.link]),"aria-current":r.current?"page":null},{default:S(()=>[i(m.$slots,"default",{item:r},()=>[g(f(r.title),1)])]),_:2},1032,["to","class","aria-current"])),d<e.items.length-1?i(m.$slots,"separator",{key:2},()=>[h(C,{class:t([e.classes.separator,r?.classes?.separator]),icon:e.separatorIcon||"type:pathSeparator"},null,8,["class","icon"])]):b("",!0)],2))),128))],2)],2)):b("",!0)}}};u.__docgenInfo={exportName:"default",displayName:"UluBreadcrumb",description:"",tags:{},props:[{name:"items",description:`Array of breadcrumb items.
Each item is an object: { title: String, to: [String, Object], current: Boolean }`,type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"separatorIcon",description:"Icon to use as a separator.",type:{name:"string"}},{name:"classes",description:`Classes object to be applied to elements.
Keys: nav, list, item, link, current, separator`,type:{name:"object"},defaultValue:{func:!1,value:`{
  nav: "breadcrumb",
  list: "breadcrumb__list",
  item: "breadcrumb__item",
  link: "breadcrumb__link",
  current: "breadcrumb__current",
  separator: "breadcrumb__separator"
}`}}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"separator"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/navigation/UluBreadcrumb.vue"]};const x={component:u,argTypes:{items:{control:"object"},separatorIcon:{control:"text"},classes:{control:"object"}}},p=e=>({components:{UluBreadcrumb:u},setup(){return{args:e}},template:'<UluBreadcrumb v-bind="args" />'}),a=p.bind({});a.args={items:[{title:"Home",to:{path:"/"}},{title:"Parent Page",to:{path:"/parent"}},{title:"Current Page",to:{path:"/parent/current"},current:!0}]};const n=p.bind({});n.args={...a.args,separatorIcon:"fas fa-arrow-right"};const o=e=>({components:{UluBreadcrumb:u},setup(){return{args:e}},template:`
    <UluBreadcrumb v-bind="args">
      <template #separator>
        <span style="padding: 0 8px;">/</span>
      </template>
    </UluBreadcrumb>
  `});o.args={...a.args};const c=p.bind({});c.args={items:[{title:"Home",to:{path:"/"},classes:{item:"custom-item-class",link:"custom-link-class"}},{title:"Parent Page",to:{path:"/parent"}},{title:"Current Page",to:{path:"/parent/current"},current:!0,classes:{current:"text-bold"}}]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
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
})`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluBreadcrumb
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluBreadcrumb v-bind="args" />'
})`,...c.parameters?.docs?.source}}};const N=["Default","CustomSeparator","CustomSeparatorSlot","PerItemClasses"];export{n as CustomSeparator,o as CustomSeparatorSlot,a as Default,c as PerItemClasses,N as __namedExportsOrder,x as default};
