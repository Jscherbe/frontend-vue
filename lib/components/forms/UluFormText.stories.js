import UluFormText from './UluFormText.vue';
import UluFormItem from './UluFormItem.vue';
import { ref } from 'vue';

export default {
  component: UluFormText,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The value of the text input (for v-model).',
    },
  },
};

export const Default = {
  render: (args) => ({
    components: { UluFormItem, UluFormText },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme">
        <UluFormItem text label="First Name">
          <UluFormText v-bind="args" />
        </UluFormItem>
      </div>
    `,
  }),
  args: {
    modelValue: 'John',
  },
};

export const Required = {
  render: (args) => ({
    components: { UluFormItem, UluFormText },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme">
        <UluFormItem text label="First Name" required>
          <UluFormText v-bind="args" />
        </UluFormItem>
      </div>
    `,
  }),
  args: {
    modelValue: 'John',
  },
};

export const CustomRequiredLabel = {
  render: (args) => ({
    components: { UluFormItem, UluFormText },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme">
        <UluFormItem text required>
          <template #label>
            My Custom Required Label
          </template>
          <UluFormText v-bind="args" />
        </UluFormItem>
      </div>
    `,
  }),
  args: {},
};

export const LabelHidden = {
  render: (args) => ({
    components: { UluFormItem, UluFormText },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme">
        <UluFormItem text label="First Name" labelHidden>
          <UluFormText v-bind="args" />
        </UluFormItem>
      </div>
    `,
  }),
  args: {
    modelValue: 'John',
  },
};

export const VModel = {
  render: (args) => ({
    components: { UluFormItem, UluFormText },
    setup() {
      const textValue = ref('Initial Text');
      return { args, textValue };
    },
    template: `
      <div class="form-theme">
        <UluFormItem text label="My Text Input">
          <UluFormText v-model="textValue" />
        </UluFormItem>
        <p style="margin-top: 1rem;">Current value: {{ textValue }}</p>
      </div>
    `,
  }),
  args: {},
};

