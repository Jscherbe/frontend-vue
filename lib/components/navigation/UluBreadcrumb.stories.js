import UluBreadcrumb from './UluBreadcrumb.vue';

export default {
  title: 'Components/Navigation/UluBreadcrumb',
  component: UluBreadcrumb,
  argTypes: {
    items: { control: 'object' },
    separatorIcon: { control: 'text' },
    classes: { control: 'object' },
  },
};

const Template = (args) => ({
  components: { UluBreadcrumb },
  setup() {
    return { args };
  },
  template: '<UluBreadcrumb v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'Home', to: { path: '/' } },
    { title: 'Parent Page', to: { path: '/parent' } },
    { title: 'Current Page', to: { path: '/parent/current' }, current: true },
  ],
};

export const CustomSeparator = Template.bind({});
CustomSeparator.args = {
  ...Default.args,
  separatorIcon: 'fas fa-arrow-right',
};

export const CustomSeparatorSlot = (args) => ({
  components: { UluBreadcrumb },
  setup() {
    return { args };
  },
  template: `
    <UluBreadcrumb v-bind="args">
      <template #separator>
        <span style="padding: 0 8px;">/</span>
      </template>
    </UluBreadcrumb>
  `,
});
CustomSeparatorSlot.args = {
  ...Default.args
};
