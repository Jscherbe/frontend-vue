// Generated automatically with ./generate-story.js

import UluAccordion from '../../lib/components/UluAccordion.vue';

export default {
  component: UluAccordion,
  title: 'Components/UluAccordion',
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: {
      control: { type: 'boolean' },
      description: "Whether open by default"
    },
    summaryText: {
      control: { type: 'text' },
      description: 'Test to use for accordion, alternatively use #toggle slot',
    },
    summaryElement: {
      control: { type: 'select' },
      options: ['strong', 'h1', 'h2', 'h3'],
      defaultValue: 'strong',
      description: 'If using toggle text sets the inner element the text is wrapped in, usually a headline or strong',
    },
    classes: {
      control: { type: 'object' },
      description: 'Classes to bind for the different elements ({ container, summary, summaryIcon, content })',
    },
    activeClass: {
      control: { type: 'text' },
      defaultValue: 'is-active',
      description: 'Active class output on container and toggle elements',
    }
  },
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