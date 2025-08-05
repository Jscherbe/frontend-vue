import UluButton from "../../lib/components/UluButton.vue";

export default {
  title: 'Plugins/modals',
  // argTypes: {
    // tooltipText: {
    //   control: 'text',
    //   description: 'The text to display in the tooltip.',
    //   defaultValue: 'This is a tooltip!',
    // },
  // },
};

// Template for basic usage
const Template = () => ({
  components: { UluButton },
  "template": `
    <UluButton @click="$uluModals.open('test')" text="Open App-wide Modal"/>
  `,
});

export const Basic = Template.bind({});
Basic.args = {
};