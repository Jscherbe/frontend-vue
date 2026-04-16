import UluFormRadio from './UluFormRadio.vue';
import UluFormItem from './UluFormItem.vue';
import { ref } from 'vue';

export default {
  component: UluFormRadio,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    value: { control: 'text' },
    name: { control: 'text' },
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
        <UluFormItem type="radio" label="Option 1">
          <UluFormRadio name="radio-group" value="option1" v-model="selectedValue" />
        </UluFormItem>
        <UluFormItem type="radio" label="Option 2">
          <UluFormRadio name="radio-group" value="option2" v-model="selectedValue" />
        </UluFormItem>
        <UluFormItem type="radio" label="Option 3">
          <UluFormRadio name="radio-group" value="option3" v-model="selectedValue" />
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
        <UluFormItem type="radio" label="Option 1" required>
          <UluFormRadio name="radio-group-req" value="option1" v-model="selectedValue" />
        </UluFormItem>
        <UluFormItem type="radio" label="Option 2" required>
          <UluFormRadio name="radio-group-req" value="option2" v-model="selectedValue" />
        </UluFormItem>
        <UluFormItem type="radio" label="Option 3" required>
          <UluFormRadio name="radio-group-req" value="option3" v-model="selectedValue" />
        </UluFormItem>
        <p style="margin-top: 1rem;">Selected value: {{ selectedValue }}</p>
      </div>
    `,
  }),
  args: {},
};