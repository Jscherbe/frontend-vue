import{Z as o,$ as g,r as p}from"./iframe-BI4NSGaj.js";import"./preload-helper-BJwshlQW.js";const m={component:o,tags:["autodocs"]},n={args:{classes:{trigger:"button"}},render:e=>({components:{UluPopover:o},setup(){return{args:e}},template:`
<UluPopover v-bind="args">
  <template #trigger>
    {{ args.triggerText || 'Show Popover' }}
  </template>
  <template #default>
    This is the content of the popover
  </template>
</UluPopover>
  `})},r={args:{classes:{trigger:"button"},config:{strategy:"fixed"}},render:e=>({components:{UluPopover:o},setup(){return{args:e}},template:`
<UluPopover v-bind="args">
  <template #trigger>
    {{ args.triggerText || 'Show Popover' }}
  </template>
  <template #default>
    This is the content of the popover
  </template>
</UluPopover>
  `})},s={args:{classes:{trigger:"button"}},render:e=>({components:{UluPopover:o},setup(){const t=p(null);return{args:e,popoverRef:t}},template:`
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
    `})},a={args:{classes:{trigger:"button"}},render:e=>({components:{UluPopover:o},setup(){const t=p(!1);return{args:e,isPopoverOpen:t}},template:`
<div>
  <div class="margin-bottom-small">
    <p>External State: {{ isPopoverOpen }}</p>
    <button class="button button--primary" @click="isPopoverOpen = true">Force Open</button>
    <button class="button button--danger" @click="isPopoverOpen = false">Force Close</button>
  </div>
  <UluPopover v-bind="args" v-model="isPopoverOpen">
    <template #trigger>
      {{ args.triggerText || 'Click to Toggle' }}
    </template>
    <template #default="{ close }">
      <p>This popover is controlled by v-model.</p>
      <button class="button button--small margin-top-small" @click="close">Close via Slot Prop</button>
    </template>
  </UluPopover>
</div>
    `})},l={args:{},render:e=>({components:{UluPopoverBase:g},setup(){const t=p(!1),i=p(null);return{args:e,isOpen:t,targetEl:i}},template:`
<div>
  <button ref="targetEl" class="button" @click="isOpen = !isOpen">
    Toggle Headless Base (v-model:isOpen)
  </button>
  <UluPopoverBase 
    v-if="targetEl" 
    :trigger="targetEl" 
    v-model:isOpen="isOpen" 
    class="popover--large"
  >
    <p>This is the raw UluPopoverBase component being controlled completely manually.</p>
  </UluPopoverBase>
</div>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
      const isPopoverOpen = ref(false);
      return {
        args,
        isPopoverOpen
      };
    },
    template: \`
<div>
  <div class="margin-bottom-small">
    <p>External State: {{ isPopoverOpen }}</p>
    <button class="button button--primary" @click="isPopoverOpen = true">Force Open</button>
    <button class="button button--danger" @click="isPopoverOpen = false">Force Close</button>
  </div>
  <UluPopover v-bind="args" v-model="isPopoverOpen">
    <template #trigger>
      {{ args.triggerText || 'Click to Toggle' }}
    </template>
    <template #default="{ close }">
      <p>This popover is controlled by v-model.</p>
      <button class="button button--small margin-top-small" @click="close">Close via Slot Prop</button>
    </template>
  </UluPopover>
</div>
    \`
  })
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      UluPopoverBase
    },
    setup() {
      const isOpen = ref(false);
      const targetEl = ref(null);
      return {
        args,
        isOpen,
        targetEl
      };
    },
    template: \`
<div>
  <button ref="targetEl" class="button" @click="isOpen = !isOpen">
    Toggle Headless Base (v-model:isOpen)
  </button>
  <UluPopoverBase 
    v-if="targetEl" 
    :trigger="targetEl" 
    v-model:isOpen="isOpen" 
    class="popover--large"
  >
    <p>This is the raw UluPopoverBase component being controlled completely manually.</p>
  </UluPopoverBase>
</div>
    \`
  })
}`,...l.parameters?.docs?.source}}};const v=["Default","FixedStrategy","Programmatic","ControlledWithVModel","ControlledBaseWithVModel"];export{l as ControlledBaseWithVModel,a as ControlledWithVModel,n as Default,r as FixedStrategy,s as Programmatic,v as __namedExportsOrder,m as default};
