import UluFormText from './UluFormText.vue';
import UluFormItem from './UluFormItem.vue';
import { ref } from 'vue';

export default {
  component: UluFormText,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the text input.',
    },
    modelValue: {
      control: 'text',
      description: 'The value of the text input (for v-model).',
    },
    labelHidden: {
      control: 'boolean',
      description: 'If true, the label will be visually hidden.',
    },
    required: {
      control: 'boolean',
      description: 'If true, the field will be required.',
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
        <UluFormItem text>
          <UluFormText v-bind="args" />
        </UluFormItem>
      </div>
    `,
  }),
  args: {
    label: 'First Name',
    modelValue: 'John',
  },
};

export const Required = {
  ...Default,
  args: {
    ...Default.args,
    required: true,
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
        <UluFormItem text>
          <UluFormText v-bind="args">
            <template #label>
              My Custom Required Label
            </template>
          </UluFormText>
        </UluFormItem>
      </div>
    `,
  }),
  args: {
    required: true,
  },
};

export const LabelHidden = {
  ...Default,
  args: {
    ...Default.args,
    label: 'First Name',
    labelHidden: true,
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
        <UluFormItem text>
          <UluFormText label="My Text Input" v-model="textValue" />
        </UluFormItem>
        <p style="margin-top: 1rem;">Current value: {{ textValue }}</p>
      </div>
    `,
  }),
  args: {},
};
