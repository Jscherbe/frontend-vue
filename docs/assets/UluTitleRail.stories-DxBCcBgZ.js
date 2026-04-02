import{u as g,c as h,d as m,b as y,f as d,a as u,w as T,g as S,n,r as b,e as p,l as U,o as s,_ as v,j as R,t as I}from"./iframe-Cct7deJN.js";import"./preload-helper-BJwshlQW.js";const k={key:0,class:"rail__item rail__item--pull"},o={__name:"UluTitleRail",props:{icon:String,iconAlign:{type:String,default:"baseline"},classes:{type:Object,default:()=>({title:"h2",icon:"margin-right-small"})},title:String,titleElement:{type:String,default:"h2"},rule:Boolean,modifiers:[String,Array]},setup(e){const c=e,{resolvedModifiers:f}=g({props:c,baseClass:"rail",internal:h(()=>({"title-rail":!0,rule:c.rule}))});return(r,E)=>(s(),m("div",{class:n(["rail",U(f)])},[y("div",{class:n(["rail__item rail__item--title",e.classes.itemTitle])},[(s(),u(b(e.titleElement),{class:n(["layout-flex type-max-width-small no-margin",e.classes.title]),style:S({alignItems:e.iconAlign})},{default:T(()=>[e.icon?(s(),u(v,{key:0,class:n(e.classes.icon),icon:e.icon},null,8,["class","icon"])):d("",!0),p(r.$slots,"default",{},()=>[R(I(e.title),1)])]),_:3},8,["class","style"]))],2),r.$slots.end?(s(),m("div",k,[p(r.$slots,"end")])):d("",!0)],2))}};o.__docgenInfo={exportName:"default",displayName:"UluTitleRail",description:"",tags:{},props:[{name:"icon",description:"Icon to display next to the title.",type:{name:"string"}},{name:"iconAlign",description:"The alignment of the icon with the title.",type:{name:"string"},defaultValue:{func:!1,value:'"baseline"'}},{name:"classes",description:"Classes for the different elements in the component.",type:{name:"object"},defaultValue:{func:!1,value:`{
  title: "h2",
  icon: "margin-right-small"
}`}},{name:"title",description:"The title to display.",type:{name:"string"}},{name:"titleElement",description:"The HTML element to use for the title.",type:{name:"string"},defaultValue:{func:!1,value:'"h2"'}},{name:"rule",description:"If true, a rule will be displayed under the title.",type:{name:"boolean"}},{name:"modifiers",description:"Modifiers (to add any modifier classes based on base class)",type:{name:"string|array"}}],slots:[{name:"default"},{name:"end"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/layout/UluTitleRail.vue"]};const C={component:o,tags:["autodocs"]},t={args:{title:"My Title",icon:"type:info"}},i={args:{title:"This has a user set icon",icon:"fas fa-circle-check"}},a={args:{...t.args,icon:"type:info"}},l={render:e=>({components:{UluTitleRail:o},setup(){return{args:e}},template:`
      <UluTitleRail v-bind="args">
        <template #end>
          <p>Some content on the end</p>
        </template>
      </UluTitleRail>
    `}),args:{...a.args}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "My Title",
    icon: "type:info"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "This has a user set icon",
    icon: "fas fa-circle-check"
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    icon: "type:info"
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const M=["Default","WithIcon","WithIconType","WithEndSlot"];export{t as Default,l as WithEndSlot,i as WithIcon,a as WithIconType,M as __namedExportsOrder,C as default};
