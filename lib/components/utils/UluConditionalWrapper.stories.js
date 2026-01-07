import UluConditionalWrapper from './UluConditionalWrapper.vue';

export default {
  component: UluConditionalWrapper,
  tags: ['autodocs'],
  argTypes: {
    is: {
      control: 'text',
      description: 'The underlying component or HTML tag to render.'
    },
    unwrapped: {
      control: 'boolean',
      description: 'If true, the wrapper will not be rendered.'
    }
  }
};

export const Default = {
  args: {
    unwrapped: false,
    is: 'div'
  },
  render: (args) => ({
    components: { UluConditionalWrapper },
    setup() {
      return { args };
    },
    template: `
      <UluConditionalWrapper v-bind="args" style="border: 2px dashed #ccc; padding: 1rem;">
        <p>I am content inside the wrapper. The wrapper has a dashed border.</p>
      </UluConditionalWrapper>
    `
  })
};

export const Unwrapped = {
  args: {
    unwrapped: true,
    is: 'div'
  },
  render: (args) => ({
    components: { UluConditionalWrapper },
    setup() {
      return { args };
    },
    template: `
      <UluConditionalWrapper v-bind="args" style="border: 2px dashed #ccc; padding: 1rem;">
        <p>I am content. The wrapper (and its border) should be gone.</p>
      </UluConditionalWrapper>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'When `unwrapped` is true, the `style` attribute (and other non-prop attributes) are not rendered because the wrapper element is removed.'
      }
    }
  }
};

export const CustomElement = {
  args: {
    unwrapped: false,
    is: 'section'
  },
  render: (args) => ({
    components: { UluConditionalWrapper },
    setup() {
      return { args };
    },
    template: `
      <UluConditionalWrapper v-bind="args" style="background: #f0f0f0; padding: 1rem;">
        <h2>Section Wrapper</h2>
        <p>I am inside a <code>&lt;section&gt;</code> tag.</p>
      </UluConditionalWrapper>
    `
  })
};

export const WithEventsAndAttrs = {
  args: {
    unwrapped: false,
    is: 'button'
  },
  render: (args) => ({
    components: { UluConditionalWrapper },
    setup() {
      return { 
        args,
        handleClick: () => alert('Wrapper clicked!') 
      };
    },
    template: `
      <UluConditionalWrapper 
        v-bind="args" 
        @click="handleClick"
        class="example-class"
        style="padding: 1rem; cursor: pointer; background-color: #e6f7ff; border: 1px solid #1890ff;"
      >
        <strong>Click me!</strong>
        <p>I have a click listener and custom styles attached to the wrapper.</p>
      </UluConditionalWrapper>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Attributes and event listeners are bound to the wrapper element. If you toggle `unwrapped` to true, the click listener and styles will disappear.'
      }
    }
  }
};
