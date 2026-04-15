import UluFormSelect from './UluFormSelect.vue';
import UluFormItem from './UluFormItem.vue';

export default {
  component: UluFormSelect,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    options: { control: 'object' }
  },
};

const options = [
  { value: 'option1', text: 'Option 1' },
  { value: 'option2', text: 'Option 2' },
  { value: 'option3', text: 'Option 3' },
];

export const Default = {
  render: (args) => ({
    components: { UluFormItem, UluFormSelect },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme">
        <UluFormItem select label="Select an option">
          <UluFormSelect v-bind="args" />
        </UluFormItem>
      </div>
    `,
  }),
  args: {
    options,
    modelValue: '',
  },
};

export const PreSelected = {
  render: (args) => ({
    components: { UluFormItem, UluFormSelect },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme">
        <UluFormItem select label="Select an option">
          <UluFormSelect v-bind="args" />
        </UluFormItem>
      </div>
    `,
  }),
  args: {
    options,
    modelValue: 'option2',
  },
};

export const Required = {
  render: (args) => ({
    components: { UluFormItem, UluFormSelect },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme">
        <UluFormItem select label="Select an option" required>
          <UluFormSelect v-bind="args" />
        </UFormItem>
      </div>
    `,
  }),
  args: {
    options,
    modelValue: '',
  },
};