import{D as n}from"./iframe-XGjKMfgv.js";import"./preload-helper-BJwshlQW.js";const u={component:n,argTypes:{items:{control:"object"},separatorIcon:{control:"text"},classes:{control:"object"}}},s=t=>({components:{UluBreadcrumb:n},setup(){return{args:t}},template:'<UluBreadcrumb v-bind="args" />'}),r=s.bind({});r.args={items:[{title:"Home",to:{path:"/"}},{title:"Parent Page",to:{path:"/parent"}},{title:"Current Page",to:{path:"/parent/current"},current:!0}]};const e=s.bind({});e.args={...r.args,separatorIcon:"fas fa-arrow-right"};const a=t=>({components:{UluBreadcrumb:n},setup(){return{args:t}},template:`
    <UluBreadcrumb v-bind="args">
      <template #separator>
        <span style="padding: 0 8px;">/</span>
      </template>
    </UluBreadcrumb>
  `});a.args={...r.args};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
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
})`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
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
})`,...a.parameters?.docs?.source}}};const c=["Default","CustomSeparator","CustomSeparatorSlot"];export{e as CustomSeparator,a as CustomSeparatorSlot,r as Default,c as __namedExportsOrder,u as default};
