import UluFormItem from './UluFormItem.vue';
import UluFormText from './UluFormText.vue';

export default {
  component: UluFormItem,
  tags: ['autodocs'],
  argTypes: {
    type: { 
      control: 'select', 
      options: ['text', 'textarea', 'select', 'checkbox', 'radio', 'file', 'color', 'date', 'range', 'tel', 'password', 'email', 'number', 'search', 'url', 'time', 'month', 'week', 'datetime-local'] 
    },
    label: { control: 'text' },
    description: { control: 'text' },
    errorMessage: { control: 'text' },
    warningMessage: { control: 'text' },
    required: { control: 'boolean' },
    error: { control: 'boolean' },
    warning: { control: 'boolean' },
    alignTop: { control: 'boolean' }
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
    type: 'text',
    label: 'First Name'
  },
};

export const WithDescription = {
  render,
  args: {
    type: 'text',
    label: 'First Name',
    description: 'Please enter your given name.'
  },
};

export const ErrorState = {
  render,
  args: {
    type: 'text',
    label: 'First Name',
    error: true,
    errorMessage: 'This field is required.'
  },
};

export const WarningState = {
  render,
  args: {
    type: 'text',
    label: 'First Name',
    warning: true,
    warningMessage: 'This name seems unusual.'
  },
};
