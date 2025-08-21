import UluPlaceholderText from './UluPlaceholderText.vue';

export default {
  component: UluPlaceholderText,
  tags: ['autodocs'],
  argTypes: {
    amount: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'The number of paragraphs of placeholder text to render.',
    },
    element: {
      control: { type: 'text' },
      description: 'The HTML element to wrap the text in (e.g., `p`, `div`, `span`).',
    },
  },
  args: {
    amount: 1,
    element: 'p',
  },
};

export const Default = {
  render: (args) => ({
    components: { UluPlaceholderText },
    setup() {
      return { args };
    },
    template: '<UluPlaceholderText v-bind="args" />',
  }),
  args: {},
};

export const MultipleParagraphs = {
  render: (args) => ({
    components: { UluPlaceholderText },
    setup() {
      return { args };
    },
    template: '<UluPlaceholderText v-bind="args" />',
  }),
  args: {
    amount: 3,
  },
};

export const DifferentElement = {
  render: (args) => ({
    components: { UluPlaceholderText },
    setup() {
      return { args };
    },
    template: `
      <div>
        <h3>Placeholder text in a div:</h3>
        <UluPlaceholderText v-bind="args" />
      </div>
    `,
  }),
  args: {
    amount: 1,
    element: 'div',
  },
};
