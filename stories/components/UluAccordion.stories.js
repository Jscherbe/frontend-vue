import UluAccordion from "../../lib/components/UluAccordion.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/UluAccordion',
  component: UluAccordion,
  tags: ['autodocs'],
  argTypes: {
    slotDefault: {
      control: 'text', 
      description: 'Content for the default slot'
    },
  },
  args: {
    slotDefault: "This is the content to be revealed"
  },
  render: (args) => ({
    components: { UluAccordion }, // Register your component
    setup() {
      return { args }; // Make args available in the template
    },
    "template": `
      <UluAccordion v-bind="args">
        <template #toggle v-if="args.slotToggle">
          This is <em>the content</em> from toggle slot
        </template>
        <template #default>{{ args.slotDefault }}</template>
      </UluAccordion>
    `
  }),
};

export const PassingToggleText = {
  args: {
    toggleText: "This is the toggle text",
    activeClass: "test-active"
  },
};

export const UsingToggleSlot = {
  args: {
    slotToggle: true
  },
};
