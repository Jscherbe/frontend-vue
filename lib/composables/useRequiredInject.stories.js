import { provide } from 'vue';
import { useRequiredInject } from './useRequiredInject';

export default {
  // The component property is often omitted for composable stories,
  // or set to a dummy component if needed for Storybook's UI.
  // For composables, it's more about the render function.
};

export const BasicUsage = {
  render: () => ({
    setup() {
      const injectedValue = useRequiredInject('uluIsMobile');
      return { injectedValue };
    },
    template: `<div>Injected Value (uluIsMobile): {{ injectedValue }}</div>`,
  }),
  args: {
    valueToProvide: 'This is the injected value!',
  },
};

export const MissingInjection = {
  render: () => ({
    setup() {
      try {
        const injectedValue = useRequiredInject('nonExistentKey');
        return { injectedValue };
      } catch (e) {
        return { error: e.message };
      }
    },
    template: `<div>Error: {{ error }}</div>`,
  }),
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};