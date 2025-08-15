// Generated automatically with ./generate-story.js
import UluAccordion from "../../lib/components/collapsible/UluAccordion.vue";

export default {
  component: UluAccordion,
  title: 'Components/UluAccordion',
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { UluAccordion },
  setup() {
    return { args };
  },
  template: `<UluAccordion v-bind="args">This is the content of the accordion</UluAccordion>`
});

export const Default = Template.bind({});
Default.args = {
  summaryText: 'Toggle me!',
};

export const OpenByDefault = Template.bind({});
OpenByDefault.args = {
  summaryText: "I'm already open!",
  defaultOpen: true,
};