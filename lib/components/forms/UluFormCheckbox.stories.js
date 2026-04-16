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
        <UluFormItem type="checkbox" label="Accept terms and conditions">
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
        <UluFormItem type="checkbox" label="Accept terms and conditions">
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
        <UluFormItem type="checkbox" label="I agree to the terms" required>
          <UluFormCheckbox v-bind="args" />
        </UluFormItem>
      </div>
    `,
  }),
  args: {
    modelValue: false,
  },
};