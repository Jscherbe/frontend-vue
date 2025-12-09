import{g,_ as h,d as r,b as y,f as c,a as m,w as _,p as T,n as s,r as U,e as u,h as S,o as l,j as v,t as I}from"./iframe-CSRVEcn3.js";import"./preload-helper-BJwshlQW.js";const d={name:"UluTitleRail",components:{UluIcon:h},props:{icon:String,iconAlign:{type:String,default:"baseline"},classes:{type:Object,default:()=>({title:"h2",icon:"margin-right-small"})},title:String,titleElement:{type:String,default:"h2"},rule:Boolean}},b={key:0,class:"rail__item rail__item--pull"};function R(t,k,e,x,E,W){const f=S("UluIcon");return l(),r("div",{class:s(["rail rail--title-rail",{"rail--rule":e.rule}])},[y("div",{class:s(["rail__item rail__item--title",e.classes.itemTitle])},[(l(),m(U(e.titleElement),{class:s(["layout-flex type-max-width-small no-margin",e.classes.title]),style:T({alignItems:e.iconAlign})},{default:_(()=>[e.icon?(l(),m(f,{key:0,class:s(e.classes.icon),icon:e.icon},null,8,["class","icon"])):c("",!0),u(t.$slots,"default",{},()=>[v(I(e.title),1)])]),_:3},8,["class","style"]))],2),t.$slots.end?(l(),r("div",b,[u(t.$slots,"end")])):c("",!0)],2)}const p=g(d,[["render",R]]);d.__docgenInfo={displayName:"UluTitleRail",exportName:"default",description:"",tags:{},props:[{name:"icon",description:"Icon to display next to the title.",type:{name:"string"}},{name:"iconAlign",description:"The alignment of the icon with the title.",type:{name:"string"},defaultValue:{func:!1,value:'"baseline"'}},{name:"classes",description:"Classes for the different elements in the component.",type:{name:"object"},defaultValue:{func:!1,value:`{
  title: "h2",
  icon: "margin-right-small"
}`}},{name:"title",description:"The title to display.",type:{name:"string"}},{name:"titleElement",description:"The HTML element to use for the title.",type:{name:"string"},defaultValue:{func:!1,value:'"h2"'}},{name:"rule",description:"If true, a rule will be displayed under the title.",type:{name:"boolean"}}],slots:[{name:"default"},{name:"end"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/layout/UluTitleRail.vue"]};const j={component:p,tags:["autodocs"]},n={args:{title:"My Title",icon:"type:info"}},i={args:{title:"This has a user set icon",icon:"fas fa-circle-check"}},a={args:{...n.args,icon:"type:info"}},o={render:t=>({components:{UluTitleRail:p},setup(){return{args:t}},template:`
      <UluTitleRail v-bind="args">
        <template #end>
          <p>Some content on the end</p>
        </template>
      </UluTitleRail>
    `}),args:{...a.args}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "My Title",
    icon: "type:info"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "This has a user set icon",
    icon: "fas fa-circle-check"
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    icon: "type:info"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluTitleRail
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluTitleRail v-bind="args">
        <template #end>
          <p>Some content on the end</p>
        </template>
      </UluTitleRail>
    \`
  }),
  args: {
    ...WithIconType.args
  }
}`,...o.parameters?.docs?.source}}};const w=["Default","WithIcon","WithIconType","WithEndSlot"];export{n as Default,o as WithEndSlot,i as WithIcon,a as WithIconType,w as __namedExportsOrder,j as default};
