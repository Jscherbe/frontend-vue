import{at as t}from"./iframe-DSsytvcb.js";import"./preload-helper-BJwshlQW.js";const s={component:t,tags:["autodocs"]},n=o=>({components:{UluPopover:t},setup(){return{args:o}},template:`
<UluPopover v-bind="args">
  <template #trigger>
    Show Popover
  </template>
  <template #content>
    This is the content of the popover
  </template>
</UluPopover>
  `}),e=n.bind({});e.args={classes:{trigger:"button"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluPopover
  },
  setup() {
    return {
      args
    };
  },
  template: \`
<UluPopover v-bind="args">
  <template #trigger>
    Show Popover
  </template>
  <template #content>
    This is the content of the popover
  </template>
</UluPopover>
  \`
})`,...e.parameters?.docs?.source}}};const a=["Default"];export{e as Default,a as __namedExportsOrder,s as default};
