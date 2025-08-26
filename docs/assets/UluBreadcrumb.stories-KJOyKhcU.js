import{z as n}from"./iframe-vwPr47zg.js";import"./preload-helper-BJwshlQW.js";const u={title:"Components/Navigation/UluBreadcrumb",component:n,argTypes:{items:{control:"object"},separatorIcon:{control:"text"},classes:{control:"object"}}},s=a=>({components:{UluBreadcrumb:n},setup(){return{args:a}},template:'<UluBreadcrumb v-bind="args" />'}),r=s.bind({});r.args={items:[{title:"Home",to:{path:"/"}},{title:"Parent Page",to:{path:"/parent"}},{title:"Current Page",to:{path:"/parent/current"},current:!0}]};const e=s.bind({});e.args={...r.args,separatorIcon:"fas fa-arrow-right"};const t=a=>({components:{UluBreadcrumb:n},setup(){return{args:a}},template:`
    <UluBreadcrumb v-bind="args">
      <template #separator>
        <span style="padding: 0 8px;">/</span>
      </template>
    </UluBreadcrumb>
  `});t.args={...r.args};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluBreadcrumb
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluBreadcrumb v-bind="args" />'
})`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluBreadcrumb
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluBreadcrumb v-bind="args" />'
})`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
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
})`,...t.parameters?.docs?.source}}};const c=["Default","CustomSeparator","CustomSeparatorSlot"];export{e as CustomSeparator,t as CustomSeparatorSlot,r as Default,c as __namedExportsOrder,u as default};
