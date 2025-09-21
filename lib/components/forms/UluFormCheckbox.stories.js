import UluFormCheckbox from './UluFormCheckbox.vue';
import UluFormItem from './UluFormItem.vue';

export default {
  component: UluFormCheckbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    modelValue: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};

export const Default = {
  render: (args) => ({
    components: { UluFormItem, UluFormCheckbox },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme">
        <UluFormItem>
          <UluFormCheckbox v-bind="args" />
        </UluFormItem>
      </div>
    `,
  }),
  args: {
    label: 'Accept terms and conditions',
    modelValue: false,
  },
};

export const Checked = {
  ...Default,
  args: {
    ...Default.args,
    modelValue: true,
  },
};

export const Required = {
  ...Default,
  args: {
    ...Default.args,
    label: 'I agree to the terms',
    required: true,
  },
};