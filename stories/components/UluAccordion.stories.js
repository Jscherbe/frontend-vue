// Generated automatically with ./generate-story.js

import UluAccordion from '../../lib/components/UluAccordion.vue';

export default {
  component: UluAccordion,
  title: 'Components/UluAccordion',
  tags: ['autodocs'],
  argTypes: {
    toggleText: {
      control: { type: 'text' },
      description: 'Test to use for accordion, alternatively use #toggle slot',
    },
    toggleElement: {
      control: { type: 'select' },
      options: ['strong', 'h1', 'h2', 'h3'],
      defaultValue: 'strong',
      description: 'If using toggle text sets the inner element the text is wrapped in, usually a headline or strong',
    },
    toggleClasses: {
      control: { type: 'object' },
      description: 'Classes to bind for the toggle button',
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
  template: `<UluAccordion v-bind="args" />`, // Always use v-bind="args"
});

export const Primary = Template.bind({});
Primary.args = {
  toggleText: 'Toggle me!',
};

export const Secondary = Template.bind({});
Secondary.args = {
  toggleText: 'Toggle me too!',
  toggleElement: 'h2',
};

export const Small = Template.bind({});
Small.args = {
  toggleText: 'I am small!',
  toggleClasses: ['small'],
};