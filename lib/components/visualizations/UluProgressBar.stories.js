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
    labelElement: { control: 'text' },
    noValues: { control: 'boolean' },
    amountInHeader: { control: 'boolean' },
    formatValue: { table: { disable: true } },
    classes: { table: { disable: true } },
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
          <UluIcon icon="type:success" />
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

export const AmountInHeader = {
  args: {
    ...Default.args,
    label: 'Amount in Header',
    amount: 65,
    amountInHeader: true,
  },
};

export const NoValues = {
  args: {
    ...Default.args,
    label: 'No Values Displayed',
    amount: 40,
    noValues: true,
  },
};

export const FormattedValues = {
  args: {
    ...WithDeficit.args,
    label: 'Formatted Values (w/ type)',
    amount: 85,
    deficit: 5,
    formatValue: (value, type) => {
      if (type === 'total') return `out of ${value}`;
      return `${value}%`;
    },
  },
};

export const CustomLabel = {
  args: {
    ...Default.args,
    label: 'Custom Label Element (h3)',
    labelElement: 'h3',
  },
};

export const CustomValueSlots = {
  render: (args) => ({
    components: { UluProgressBar, UluIcon },
    setup() {
      return { args };
    },
    template: `
      <UluProgressBar v-bind="args">
        <template #valueAmount="{ value }">
          <strong>{{ value }}</strong> <UluIcon icon="type:image" />
        </template>
        <template #valueDeficit="{ value }">
          <span style="color: red;">-{{ value }}</span>
        </template>
        <template #valueTotal="{ value }">
          <em>{{ value }} Total</em>
        </template>
      </UluProgressBar>
    `,
  }),
  args: {
    ...WithDeficit.args,
    label: 'With Custom Value Slots',
  },
};
