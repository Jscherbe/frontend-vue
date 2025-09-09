import UluProgressBar from './UluProgressBar.vue';
import UluIcon from '../elements/UluIcon.vue';

export default {
  component: UluProgressBar,
  tags: ['autodocs'],
  argTypes: {
    amount: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    total: {
      control: { type: 'number' },
    },
    deficit: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
};

export const Default = {
  args: {
    label: 'Default Progress',
    amount: 50,
    total: 100,
  },
};

export const WithDeficit = {
  args: {
    ...Default.args,
    label: 'Progress with Deficit',
    amount: 60,
    deficit: 20,
  },
};

export const Small = {
  args: {
    ...Default.args,
    label: 'Small Progress',
    amount: 75,
    small: true,
  },
};

export const Positive = {
  args: {
    ...Default.args,
    label: 'Positive Style',
    amount: 80,
    positive: true,
  },
};

export const Negative = {
  args: {
    ...Default.args,
    label: 'Negative Style',
    amount: 25,
    negative: true,
  },
};

export const WithIcon = {
  render: (args) => ({
    components: { UluProgressBar, UluIcon },
    setup() {
      return { args };
    },
    template: `
      <UluProgressBar v-bind="args">
        <template #icon>
          <UluIcon icon="fas fa-check" />
        </template>
      </UluProgressBar>
    `,
  }),
  args: {
    ...Positive.args,
    label: 'Completed with Icon',
    amount: 100,
  },
};

export const Loader = {
  args: {
    label: 'Loading...',
    amount: 65,
    loader: true,
  },
};

export const Indeterminate = {
  args: {
    label: 'Indeterminate Loading',
    loader: true,
    indeterminate: true,
  },
};
