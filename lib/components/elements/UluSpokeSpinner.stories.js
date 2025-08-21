import UluSpokeSpinner from './UluSpokeSpinner.vue';

export default {
  title: 'Components/Elements/UluSpokeSpinner',
  component: UluSpokeSpinner,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: 'select',
      options: ["small"], 
    },
  },
};

// --- Stories --- 

export const Default = {
  render: () => ({
    components: { UluSpokeSpinner },
    template: `
      <UluSpokeSpinner v-bind="args" />
    `,
  }),
};
