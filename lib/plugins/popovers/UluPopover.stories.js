// Generated automatically with ./generate-story.js
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