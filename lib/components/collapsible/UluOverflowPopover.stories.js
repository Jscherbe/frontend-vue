import UluOverflowPopover from './UluOverflowPopover.vue';

export default {
  title: 'Components/Collapsible/UluOverflowPopover',
  component: UluOverflowPopover,
  // Use a decorator to wrap all stories in a resizable container
  decorators: [
    () => ({
      template: `
        <div style="max-width: 400px; border: 1px solid #ccc; padding: 1rem; resize: horizontal; overflow: auto;">
          <p style="margin-top: 0;"><i>This container is resizable. Drag the bottom-right handle to see the popover appear/disappear.</i></p>
          <hr>
          <story/>
        </div>
      `,
    }),
  ],
  // Define props and slots for Storybook controls
  argTypes: {
    triggerIcon: { control: 'text' },
    default: {
      control: 'text',
      name: 'slot: default',
      description: 'The content that may be truncated.'
    }
  },
  // Generic render function to handle the default slot
  render: (args) => ({
    components: { UluOverflowPopover },
    setup() {
      return { args };
    },
    template: `
      <UluOverflowPopover v-bind="args">
        {{ args.default }}
      </UluOverflowPopover>
    `,
  }),
};

// --- Stories --- 

export const OverflowingContent = {
  args: {
    default: 'This is a very long line of text that will most likely overflow the container, which will cause the popover trigger to appear.'
  },
};

export const NonOverflowingContent = {
  args: {
    default: 'Short text.'
  },
};

export const CustomTriggerIcon = {
  args: {
    ...OverflowingContent.args,
    triggerIcon: 'fas fa-info-circle'
  },
};
