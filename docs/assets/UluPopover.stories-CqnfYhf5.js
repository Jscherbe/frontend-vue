import{aH as n}from"./iframe-h65IHHsm.js";import"./preload-helper-BJwshlQW.js";const s={component:n,tags:["autodocs"]},e={args:{classes:{trigger:"button"}},render:r=>({components:{UluPopover:n},setup(){return{args:r}},template:`
<UluPopover v-bind="args">
  <template #trigger>
    {{ args.triggerText || 'Show Popover' }}
  </template>
  <template #default>
    This is the content of the popover
  </template>
</UluPopover>
  `})},t={args:{classes:{trigger:"button"},config:{strategy:"fixed"}},render:r=>({components:{UluPopover:n},setup(){return{args:r}},template:`
<UluPopover v-bind="args">
  <template #trigger>
    {{ args.triggerText || 'Show Popover' }}
  </template>
  <template #default>
    This is the content of the popover
  </template>
</UluPopover>
  `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    classes: {
      trigger: "button"
    }
  },
  render: args => ({
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
  })
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    classes: {
      trigger: "button"
    },
    config: {
      strategy: "fixed"
    }
  },
  render: args => ({
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
  })
}`,...t.parameters?.docs?.source}}};const p=["Default","FixedStrategy"];export{e as Default,t as FixedStrategy,p as __namedExportsOrder,s as default};
