import UluFormItem from './UluFormItem.vue';
import UluFormText from './UluFormText.vue';

export default {
  component: UluFormItem,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    errorMessage: { control: 'text' },
    warningMessage: { control: 'text' },
    required: { control: 'boolean' },
    error: { control: 'boolean' },
    warning: { control: 'boolean' },
    alignTop: { control: 'boolean' },
    text: { control: 'boolean' },
    file: { control: 'boolean' },
    select: { control: 'boolean' },
    textarea: { control: 'boolean' },
    labelAfter: { control: 'boolean' },
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
        <UluFormText modelValue="John" />
      </UluFormItem>
    </div>
  `,
});

export const Default = {
  render,
  args: {
    label: 'First Name',
    text: true
  },
};

export const WithDescription = {
  render,
  args: {
    label: 'First Name',
    description: 'Please enter your given name.',
    text: true
  },
};

export const ErrorState = {
  render,
  args: {
    label: 'First Name',
    error: true,
    errorMessage: 'This field is required.',
    text: true
  },
};

export const WarningState = {
  render,
  args: {
    label: 'First Name',
    warning: true,
    warningMessage: 'This name seems unusual.',
    text: true
  },
};
