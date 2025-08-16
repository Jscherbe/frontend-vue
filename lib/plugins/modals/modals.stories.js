import UluButton from "../../components/elements/UluButton.vue";

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
    <UluButton @click="$uluModals.open('demo')" text="Open App-wide Modal"/>
  `,
});

export const GlobalApiTest = Template.bind({});
GlobalApiTest.args = {};