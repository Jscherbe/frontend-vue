import{a as g,_ as h}from"./iframe-VeyoJg8x.js";import{resolveComponent as y,createElementBlock as r,openBlock as l,normalizeClass as i,createElementVNode as _,createCommentVNode as c,createBlock as m,resolveDynamicComponent as T,normalizeStyle as U,withCtx as S,renderSlot as u,createTextVNode as v,toDisplayString as I}from"vue";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";const p={name:"UluTitleRail",components:{UluIcon:h},props:{icon:String,iconAlign:{type:String,default:"baseline"},classes:{type:Object,default:()=>({title:"h2",icon:"margin-right-small"})},title:String,titleElement:{type:String,default:"h2"},rule:Boolean}},b={key:0,class:"rail__item rail__item--pull"};function R(t,E,e,k,x,W){const f=y("UluIcon");return l(),r("div",{class:i(["rail rail--title-rail",{"rail--rule":e.rule}])},[_("div",{class:i(["rail__item rail__item--title",e.classes.itemTitle])},[(l(),m(T(e.titleElement),{class:i(["layout-flex type-max-width-small no-margin",e.classes.title]),style:U({alignItems:e.iconAlign})},{default:S(()=>[e.icon?(l(),m(f,{key:0,class:i(e.classes.icon),icon:e.icon},null,8,["class","icon"])):c("",!0),u(t.$slots,"default",{},()=>[v(I(e.title),1)])]),_:3},8,["class","style"]))],2),t.$slots.end?(l(),r("div",b,[u(t.$slots,"end")])):c("",!0)],2)}const d=g(p,[["render",R]]);p.__docgenInfo={displayName:"UluTitleRail",exportName:"default",description:"",tags:{},props:[{name:"icon",description:"Icon to display next to the title.",type:{name:"string"}},{name:"iconAlign",description:"The alignment of the icon with the title.",type:{name:"string"},defaultValue:{func:!1,value:'"baseline"'}},{name:"classes",description:"Classes for the different elements in the component.",type:{name:"object"},defaultValue:{func:!1,value:`{
  title: "h2",
  icon: "margin-right-small"
}`}},{name:"title",description:"The title to display.",type:{name:"string"}},{name:"titleElement",description:"The HTML element to use for the title.",type:{name:"string"},defaultValue:{func:!1,value:'"h2"'}},{name:"rule",description:"If true, a rule will be displayed under the title.",type:{name:"boolean"}}],slots:[{name:"default"},{name:"end"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/layout/UluTitleRail.vue"]};const M={component:d,tags:["autodocs"]},n={args:{title:"My Title",icon:"type:info"}},s={args:{title:"This has a user set icon",icon:"fas fa-circle-check"}},a={args:{...n.args,icon:"type:info"}},o={render:t=>({components:{UluTitleRail:d},setup(){return{args:t}},template:`
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "This has a user set icon",
    icon: "fas fa-circle-check"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const z=["Default","WithIcon","WithIconType","WithEndSlot"];export{n as Default,o as WithEndSlot,s as WithIcon,a as WithIconType,z as __namedExportsOrder,M as default};
