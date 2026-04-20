import UluForm from './UluForm.vue';
import UluFormItem from './UluFormItem.vue';
import UluFormText from './UluFormText.vue';
import UluFormActions from './UluFormActions.vue';
import UluButton from '../elements/UluButton.vue';

export default {
  component: UluForm,
  tags: ['autodocs'],
  argTypes: {
    element: { control: 'text' },
    fullWidth: { control: 'boolean' },
    fullWidthSelect: { control: 'boolean' },
    hideLabels: { control: 'boolean' },
    actionsRight: { control: 'boolean' },
  },
};

const render = (args) => ({
  components: { UluForm, UluFormItem, UluFormText, UluFormActions, UluButton },
  setup() {
    return { args };
  },
  template: `
    <UluForm v-bind="args">
      <UluFormItem layout="text" label="First Name">
        <UluFormText modelValue="John" />
      </UluFormItem>
      <UluFormItem layout="text" label="Last Name">
        <UluFormText modelValue="Doe" />
      </UluFormItem>
      <UluFormActions>
        <UluButton primary text="Submit" />
        <UluButton text="Cancel" />
      </UluFormActions>
    </UluForm>
  `,
});

export const Default = {
  render,
  args: {},
};

export const AsDiv = {
  render,
  args: {
    element: 'div',
  },
};

export const FullWidth = {
  render,
  args: {
    fullWidth: true,
  },
};

export const HideLabels = {
  render,
  args: {
    hideLabels: true,
  },
};

export const ActionsRight = {
  render,
  args: {
    actionsRight: true,
  },
};
