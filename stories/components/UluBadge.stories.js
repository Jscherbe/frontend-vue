import UluBadge from "../../lib/components/UluBadge.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/UluBadge',
  component: UluBadge,
  tags: ['autodocs'],
  // argTypes: {
  //   slotDefault: {
  //     control: 'text', 
  //     description: '<strong>Content for the default slot</strong>'
  //   },
  // },
  args: {
    text: "JS"
  },
  // render: (args) => ({
  //   components: { UluBadge }, // Register your component
  //   setup() {
  //     return { args }; // Make args available in the template
  //   },
  //   "template": `
  //     <UluBadge v-bind="args">
  //       <template #default v-if="args.slotDefault">{{ args.slotDefault }}</template>
  //     </UluBadge>
  //   `
  // }),
};

export const SizeExample = {
  args: {
    size: "large"
  }
};