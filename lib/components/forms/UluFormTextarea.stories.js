import UluFormTextarea from './UluFormTextarea.vue';
import UluFormItem from './UluFormItem.vue';
import { ref } from 'vue';

export default {
  component: UluFormTextarea,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the textarea.',
    },
    modelValue: {
      control: 'text',
      description: 'The value of the textarea (for v-model).',
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
    components: { UluFormItem, UluFormTextarea },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme">
        <UluFormItem textarea>
          <UluFormTextarea v-bind="args" />
        </UluFormItem>
      </div>
    `,
  }),
  args: {
    label: 'Your Message',
    modelValue: 'This is a message in a textarea.',
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
    components: { UluFormItem, UluFormTextarea },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme">
        <UluFormItem textarea>
          <UluFormTextarea v-bind="args">
            <template #label>
              My Custom Required Label
            </template>
          </UluFormTextarea>
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
    label: 'Your Message',
    labelHidden: true,
  },
};

export const VModel = {
  render: (args) => ({
    components: { UluFormItem, UluFormTextarea },
    setup() {
      const textValue = ref('Initial Text');
      return { args, textValue };
    },
    template: `
      <div class="form-theme">
        <UluFormItem textarea>
          <UluFormTextarea label="My Textarea" v-model="textValue" />
        </UluFormItem>
        <p style="margin-top: 1rem;">Current value: {{ textValue }}</p>
      </div>
    `,
  }),
  args: {},
};
