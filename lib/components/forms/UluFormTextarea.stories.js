import UluFormTextarea from './UluFormTextarea.vue';
import UluFormItem from './UluFormItem.vue';
import { ref } from 'vue';

export default {
  component: UluFormTextarea,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The value of the textarea (for v-model).',
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
        <UluFormItem textarea label="Your Message">
          <UluFormTextarea v-bind="args" />
        </UluFormItem>
      </div>
    `,
  }),
  args: {
    modelValue: 'This is a message in a textarea.',
  },
};

export const Required = {
  render: (args) => ({
    components: { UluFormItem, UluFormTextarea },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme">
        <UluFormItem textarea label="Your Message" required>
          <UluFormTextarea v-bind="args" />
        </UluFormItem>
      </div>
    `,
  }),
  args: {
    modelValue: 'This is a message in a textarea.',
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
        <UluFormItem textarea required>
          <template #label>
            My Custom Required Label
          </template>
          <UluFormTextarea v-bind="args" />
        </UluFormItem>
      </div>
    `,
  }),
  args: {},
};

export const LabelHidden = {
  render: (args) => ({
    components: { UluFormItem, UluFormTextarea },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme">
        <UluFormItem textarea label="Your Message" labelHidden>
          <UluFormTextarea v-bind="args" />
        </UluFormItem>
      </div>
    `,
  }),
  args: {
    modelValue: 'This is a message in a textarea.',
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
        <UluFormItem textarea label="My Textarea">
          <UluFormTextarea v-model="textValue" />
        </UluFormItem>
        <p style="margin-top: 1rem;">Current value: {{ textValue }}</p>
      </div>
    `,
  }),
  args: {},
};

