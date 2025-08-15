// Generated automatically with ./generate-story.js
import UluPopover from "../../lib/plugins/popovers/UluPopover.vue";

export default {
  component: UluPopover,
  title: 'Components/UluPopover',
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
    Show Popover
  </template>
  <template #content>
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
