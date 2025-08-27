import UluAnimateNumber from './UluAnimateNumber.vue';
import UluButton from "../elements/UluButton.vue";
import { ref } from 'vue';

export default {
  component: UluAnimateNumber,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 1000, step: 1 },
      description: 'The target number to animate to.',
    },
  },
  args: {
    value: 0,
  },
};

export const Default = {
  render: (args) => ({
    components: { UluAnimateNumber, UluButton },
    setup() {
      const animatedValue = ref(args.value);

      const increment = () => {
        animatedValue.value += 100;
      };

      const decrement = () => {
        animatedValue.value -= 50;
      };

      const reset = () => {
        animatedValue.value = 0;
      };

      return { animatedValue, increment, decrement, reset };
    },
    template: `
      <div>
        <p>Current Animated Value: <strong style="font-size: 2em;"><UluAnimateNumber :value="animatedValue" /></strong></p>
        <UluButton @click="increment">Increment (+100)</UluButton>
        <UluButton @click="decrement">Decrement (-50)</UluButton>
        <UluButton @click="reset">Reset (0)</UluButton>
        <p style="margin-top: 1rem;">Adjust the 'value' control or use the buttons to see the animation.</p>
      </div>
    `,
  }),
  args: {
    value: 123,
  },
};

export const LargeNumber = {
  render: Default.render, // Reuse the render function
  args: {
    value: 98765,
  },
};

export const NegativeNumber = {
  render: Default.render, // Reuse the render function
  args: {
    value: -500,
  },
};

export const SlotWithCustomFormat = {
  render: (args) => ({
    components: { UluAnimateNumber, UluButton },
    setup() {
      const animatedValue = ref(args.value);
      const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
      return { animatedValue, formatter };
    },
    template: `
      <div>
        <p>Currency Formatted with Slot: <strong style="font-size: 2em;">
          <UluAnimateNumber :value="animatedValue">
            <template #default="{ currentValue }">
              {{ formatter.format(currentValue) }}
            </template>
          </UluAnimateNumber>
        </strong></p>
        <UluButton @click="animatedValue += 100">Increment (+100)</UluButton>
        <UluButton @click="animatedValue -= 50">Decrement (-50)</UluButton>
      </div>
    `,
  }),
  args: {
    value: 1234.56,
  },
};
