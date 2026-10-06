import{Z as n,r as s}from"./iframe-DmVn5gjR.js";import"./preload-helper-BJwshlQW.js";const g={component:n,tags:["autodocs"]},t={args:{classes:{trigger:"button"}},render:e=>({components:{UluPopover:n},setup(){return{args:e}},template:`
<UluPopover v-bind="args">
  <template #trigger>
    {{ args.triggerText || 'Show Popover' }}
  </template>
  <template #default>
    This is the content of the popover
  </template>
</UluPopover>
  `})},r={args:{classes:{trigger:"button"},config:{strategy:"fixed"}},render:e=>({components:{UluPopover:n},setup(){return{args:e}},template:`
<UluPopover v-bind="args">
  <template #trigger>
    {{ args.triggerText || 'Show Popover' }}
  </template>
  <template #default>
    This is the content of the popover
  </template>
</UluPopover>
  `})},o={args:{classes:{trigger:"button"}},render:e=>({components:{UluPopover:n},setup(){const a=s(null);return{args:e,popoverRef:a}},template:`
<div>
  <div class="margin-bottom-small">
    <button class="button button--outline" @click="popoverRef?.toggle()">Toggle Popover via Ref</button>
  </div>
  <UluPopover v-bind="args" ref="popoverRef">
    <template #trigger>
      {{ args.triggerText || 'Original Trigger' }}
    </template>
    <template #default>
      This popover can be controlled from the outside!
    </template>
  </UluPopover>
</div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
      const popoverRef = ref(null);
      return {
        args,
        popoverRef
      };
    },
    template: \`
<div>
  <div class="margin-bottom-small">
    <button class="button button--outline" @click="popoverRef?.toggle()">Toggle Popover via Ref</button>
  </div>
  <UluPopover v-bind="args" ref="popoverRef">
    <template #trigger>
      {{ args.triggerText || 'Original Trigger' }}
    </template>
    <template #default>
      This popover can be controlled from the outside!
    </template>
  </UluPopover>
</div>
    \`
  })
}`,...o.parameters?.docs?.source}}};const i=["Default","FixedStrategy","Programmatic"];export{t as Default,r as FixedStrategy,o as Programmatic,i as __namedExportsOrder,g as default};
