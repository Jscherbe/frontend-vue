import{f as o}from"./iframe-DYOmpgae.js";import"./preload-helper-BJwshlQW.js";import"vue";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";const u={component:o,tags:["autodocs"]},e={args:{classes:{trigger:"button"}},render:r=>({components:{UluPopover:o},setup(){return{args:r}},template:`
<UluPopover v-bind="args">
  <template #trigger>
    {{ args.triggerText || 'Show Popover' }}
  </template>
  <template #default>
    This is the content of the popover
  </template>
</UluPopover>
  `})},t={args:{classes:{trigger:"button"},config:{strategy:"fixed"}},render:r=>({components:{UluPopover:o},setup(){return{args:r}},template:`
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
}`,...t.parameters?.docs?.source}}};const c=["Default","FixedStrategy"];export{e as Default,t as FixedStrategy,c as __namedExportsOrder,u as default};
