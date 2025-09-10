// Generated automatically with ./generate-story.js
import UluPopover from "./UluPopover.vue";

export default {
  component: UluPopover,
  // title: 'Components/UluPopover',
  tags: ['autodocs'],
};

const Template = (args) => ({
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
});

export const Default = Template.bind({});
Default.args = {
  classes: {
    trigger: "button"
  }
};
