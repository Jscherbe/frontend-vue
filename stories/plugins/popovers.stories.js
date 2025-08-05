
export default {
  title: 'Plugins/popovers (tooltip demo)',
  argTypes: {
    tooltipText: {
      control: 'text',
      description: 'The text to display in the tooltip.',
      defaultValue: 'This is a tooltip!',
    },
  },
};

// Template for basic usage
const Template = (args) => ({
  setup() {
    return { args };
  },
  "template": `
    <div style="padding: 50px; text-align: center;">
      <span v-ulu-tooltip="args.tooltipText">
        Hover over me
      </span>
    </div>
  `,
});

export const Basic = Template.bind({});
Basic.args = {
  tooltipText: 'This is a basic tooltip!',
};