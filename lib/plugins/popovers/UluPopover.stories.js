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