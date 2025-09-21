import UluFormRadio from './UluFormRadio.vue';
import UluFormItem from './UluFormItem.vue';
import { ref } from 'vue';

export default {
  component: UluFormRadio,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    modelValue: { control: 'text' },
    value: { control: 'text' },
    name: { control: 'text' },
    required: { control: 'boolean' },
  },
};

export const Default = {
  render: (args) => ({
    components: { UluFormItem, UluFormRadio },
    setup() {
      const selectedValue = ref('option2');
      return { args, selectedValue };
    },
    template: `
      <div class="form-theme">
        <UluFormItem>
          <UluFormRadio name="radio-group" label="Option 1" value="option1" v-model="selectedValue" />
        </UluFormItem>
        <UluFormItem>
          <UluFormRadio name="radio-group" label="Option 2" value="option2" v-model="selectedValue" />
        </UluFormItem>
        <UluFormItem>
          <UluFormRadio name="radio-group" label="Option 3" value="option3" v-model="selectedValue" />
        </UluFormItem>
        <p style="margin-top: 1rem;">Selected value: {{ selectedValue }}</p>
      </div>
    `,
  }),
  args: {},
};

export const Required = {
  render: (args) => ({
    components: { UluFormItem, UluFormRadio },
    setup() {
      const selectedValue = ref(null);
      return { args, selectedValue };
    },
    template: `
      <div class="form-theme">
        <UluFormItem>
          <UluFormRadio name="radio-group-req" label="Option 1" value="option1" v-model="selectedValue" required />
        </UluFormItem>
        <UluFormItem>
          <UluFormRadio name="radio-group-req" label="Option 2" value="option2" v-model="selectedValue" required />
        </UluFormItem>
        <UluFormItem>
          <UluFormRadio name="radio-group-req" label="Option 3" value="option3" v-model="selectedValue" required />
        </UluFormItem>
        <p style="margin-top: 1rem;">Selected value: {{ selectedValue }}</p>
      </div>
    `,
  }),
  args: {},
};