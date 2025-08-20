import UluDropdown from './UluDropdown.vue';
import UluButton from '../elements/UluButton.vue';

export default {
  title: 'Components/Collapsible/UluDropdown',
  component: UluDropdown,
  // Common arguments for all stories
  args: {
    items: [
      { title: 'View Profile', to: '/' },
      { title: 'Account Settings', to: '/example', classes: { item: "menu-stack__item--separator-before" } },
      { title: 'Sign Out', to: '/sign-out' },
    ],
    triggerClass: 'button--primary'
  },
  // Use a render function to provide the trigger slot content
  render: (args) => ({
    components: { UluDropdown, UluButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 4rem;">
        <UluDropdown v-bind="args">
          <template #default="{ isOpen }">
            <UluButton :class="args.triggerClass">
              <span>My Account</span>
              <span :style="{ display: 'inline-block', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }">▾</span>
            </UluButton>
          </template>
        </UluDropdown>
      </div>
    `,
  }),
  argTypes: {
    items: { control: 'object' },
    triggerClass: { control: 'text' },
  },
};

// --- Stories --- 

export const Default = {};

export const SecondaryButton = {
  args: {
    triggerClass: 'button--secondary',
  },
};
