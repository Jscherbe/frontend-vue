import UluFormFieldset from './UluFormFieldset.vue';
import UluFormItem from './UluFormItem.vue';
import UluFormText from './UluFormText.vue';

export default {
  component: UluFormFieldset,
  tags: ['autodocs'],
  argTypes: {
    legend: { control: 'text' },
  },
};

export const Default = {
  render: (args) => ({
    components: { UluFormFieldset, UluFormItem, UluFormText },
    setup() {
      return { args };
    },
    template: `
      <div class="form-theme">
        <UluFormFieldset v-bind="args">
          <UluFormItem text>
            <UluFormText label="First Name" modelValue="John" />
          </UluFormItem>
          <UluFormItem text>
            <UluFormText label="Last Name" modelValue="Doe" />
          </UluFormItem>
        </UluFormFieldset>
      </div>
    `,
  }),
  args: {
    legend: 'Personal Information'
  },
};
