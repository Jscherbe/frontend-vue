import UluProgressCircle from './UluProgressCircle.vue';
import UluButton from '../elements/UluButton.vue';
import { ref } from 'vue';

export default {
  component: UluProgressCircle,
  tags: ['autodocs'],
  argTypes: {
    percentage: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'The progress percentage (0-100).',
    },
    status: {
      control: 'select',
      options: ['', 'low', 'incomplete', 'complete'],
      description: 'Sets the status color of the progress circle.',
    },
    small: { control: 'boolean' },
    outside: { control: 'boolean' },
    outsideBelow: { control: 'boolean' },
    pieStyle: { control: 'boolean' },
    noMask: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    label: 'Progress',
    percentage: 75,
  },
};

export const WithValueOutside = {
  args: {
    ...Default.args,
    outside: true,
  },
};

export const Small = {
  args: {
    ...Default.args,
    percentage: 45,
    small: true,
  },
};

export const Statuses = {
  render: () => ({
    components: { UluProgressCircle },
    template: `
      <div style="display: flex; gap: 2rem; align-items: center; padding: 1rem;">
        <div>
          <UluProgressCircle label="Low Status" :percentage="25" status="low" />
          <p style="text-align: center; margin-top: 0.5rem;">Low</p>
        </div>
        <div>
          <UluProgressCircle label="Incomplete Status" :percentage="75" status="incomplete" />
          <p style="text-align: center; margin-top: 0.5rem;">Incomplete</p>
        </div>
        <div>
          <UluProgressCircle label="Complete Status" :percentage="100" status="complete" />
          <p style="text-align: center; margin-top: 0.5rem;">Complete</p>
        </div>
      </div>
    `,
  }),
};

export const PieStyle = {
  args: {
    ...Default.args,
    percentage: 60,
    pieStyle: true,
  },
};

export const Customizations = {
  render: () => ({
    components: { UluProgressCircle },
    template: `
      <div style="display: flex; gap: 2rem; align-items: center; padding: 1rem;">
        <div>
          <UluProgressCircle label="Small, Outside Below" :percentage="50" :small="true" :outsideBelow="true" />
          <p style="text-align: center; margin-top: 0.5rem;">Small, Outside Below</p>
        </div>
        <div>
          <UluProgressCircle label="No Mask" :percentage="80" :noMask="true" />
          <p style="text-align: center; margin-top: 0.5rem;">No Mask</p>
        </div>
        <div>
          <UluProgressCircle label="Pie, No Mask" :percentage="30" :pieStyle="true" :noMask="true" />
          <p style="text-align: center; margin-top: 0.5rem;">Pie, No Mask</p>
        </div>
      </div>
    `,
  }),
};

export const Animated = {
  render: (args) => ({
    components: { UluProgressCircle, UluButton },
    setup() {
      const percentage = ref(10);
      const increase = () => {
        percentage.value = Math.min(100, percentage.value + 10);
      };
      const decrease = () => {
        percentage.value = Math.max(0, percentage.value - 10);
      };
      return { args, percentage, increase, decrease };
    },
    template: `
      <div style="padding: 1rem;">
        <UluProgressCircle v-bind="args" :percentage="percentage" />
        <div style="margin-top: 1rem;">
          <UluButton @click="increase" text="Increase" />
          <UluButton @click="decrease" text="Decrease" />
        </div>
      </div>
    `,
  }),
  args: {
    label: 'Animated Progress',
  },
};
