import UluFormSelect from './UluFormSelect.vue';
import UluFormItem from './UluFormItem.vue';

export default {
  component: UluFormSelect,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    modelValue: { control: 'text' },
    options: { control: 'object' },
    labelHidden: { control: 'boolean' },
    required: { control: 'boolean' },
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
        <UluFormItem select>
          <UluFormSelect v-bind="args" />
        </UluFormItem>
      </div>
    `,
  }),
  args: {
    label: 'Select an option',
    options,
    modelValue: '',
  },
};

export const PreSelected = {
  ...Default,
  args: {
    ...Default.args,
    modelValue: 'option2',
  },
};

export const Required = {
  ...Default,
  args: {
    ...Default.args,
    required: true,
  },
};