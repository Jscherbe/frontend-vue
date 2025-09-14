import{aB as t}from"./iframe-HnnkON3K.js";import"./preload-helper-BJwshlQW.js";const s={component:t,tags:["autodocs"]},r=o=>({components:{UluPopover:t},setup(){return{args:o}},template:`
<UluPopover v-bind="args">
  <template #trigger>
    {{ args.triggerText || 'Show Popover' }}
  </template>
  <template #default>
    This is the content of the popover
  </template>
</UluPopover>
  `}),e=r.bind({});e.args={classes:{trigger:"button"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
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
    {{ args.triggerText || 'Show Popover' }}
  </template>
  <template #default>
    This is the content of the popover
  </template>
</UluPopover>
  \`
})`,...e.parameters?.docs?.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,s as default};
