import UluFormCheckbox from './UluFormCheckbox.vue';
import UluFormItem from './UluFormItem.vue';

export default {
  component: UluFormCheckbox,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
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
        <UluFormItem label="Accept terms and conditions" labelAfter>
          <UluFormCheckbox v-bind="args" />
        </UluFormItem>
      </div>
    `,
  }),
  args: {
    modelValue: false,
  },
};

export const Checked = {
  render: (args) => ({
    components: { UluFormItem, UluFormCheckbox },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme">
        <UluFormItem label="Accept terms and conditions" labelAfter>
          <UluFormCheckbox v-bind="args" />
        </UluFormItem>
      </div>
    `,
  }),
  args: {
    modelValue: true,
  },
};

export const Required = {
  render: (args) => ({
    components: { UluFormItem, UluFormCheckbox },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme">
        <UluFormItem label="I agree to the terms" labelAfter required>
          <UluFormCheckbox v-bind="args" />
        </UluFormItem>
      </div>
    `,
  }),
  args: {
    modelValue: false,
  },
};