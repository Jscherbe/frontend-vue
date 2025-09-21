import UluFormItem from './UluFormItem.vue';
import UluFormText from './UluFormText.vue';

export default {
  component: UluFormItem,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'boolean' },
    warning: { control: 'boolean' },
    alignTop: { control: 'boolean' },
    text: { control: 'boolean' },
    file: { control: 'boolean' },
    select: { control: 'boolean' },
    textarea: { control: 'boolean' },
  },
};

const render = (args) => ({
  components: { UluFormItem, UluFormText },
  setup() {
    return { args };
  },
  template: `
    <div class="form-theme">
      <UluFormItem v-bind="args">
        <UluFormText label="First Name" modelValue="John" />
      </UluFormItem>
    </div>
  `,
});

export const Default = {
  render,
  args: {},
};

export const Error = {
  render,
  args: {
    error: true,
  },
};

export const Warning = {
  render,
  args: {
    warning: true,
  },
};
