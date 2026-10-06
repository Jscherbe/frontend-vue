// Generated automatically with ./generate-story.js
import { ref } from "vue";
import UluPopover from "./UluPopover.vue";

export default {
  component: UluPopover,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    classes: {
      trigger: "button"
    }
  },
  render: (args) => ({
    components: { UluPopover },
    setup() {
      return { args };
    },
    template: `
<UluPopover v-bind="args">
  <template #trigger>
    {{ args.triggerText || 'Show Popover' }}
  </template>
  <template #default>
    This is the content of the popover
  </template>
</UluPopover>
  `
  }),
};

export const FixedStrategy = {
  args: {
    classes: {
      trigger: "button"
    },
    config: {
      strategy: "fixed"
    }
  },
  render: (args) => ({
    components: { UluPopover },
    setup() {
      return { args };
    },
    template: `
<UluPopover v-bind="args">
  <template #trigger>
    {{ args.triggerText || 'Show Popover' }}
  </template>
  <template #default>
    This is the content of the popover
  </template>
</UluPopover>
  `
  }),
};

export const Programmatic = {
  args: {
    classes: {
      trigger: "button"
    }
  },
  render: (args) => ({
    components: { UluPopover },
    setup() {
      const popoverRef = ref(null);
      return { args, popoverRef };
    },
    template: `
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
    `
  }),
};
export const ControlledWithVModel = {
  args: {
    classes: {
      trigger: "button"
    }
  },
  render: (args) => ({
    components: { UluPopover },
    setup() {
      const isPopoverOpen = ref(false);
      return { args, isPopoverOpen };
    },
    template: `
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
    `
  }),
};

import UluPopoverBase from "./UluPopoverBase.vue";
export const ControlledBaseWithVModel = {
  args: {},
  render: (args) => ({
    components: { UluPopoverBase },
    setup() {
      const isOpen = ref(false);
      const targetEl = ref(null);
      return { args, isOpen, targetEl };
    },
    template: `
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
    `
  }),
};
