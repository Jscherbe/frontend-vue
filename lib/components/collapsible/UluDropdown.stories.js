import UluDropdown from './UluDropdown.vue';
import UluButton from '../elements/UluButton.vue';

export default {
  component: UluDropdown,
  tags: ['autodocs'],
  args: {
    items: [
      { title: 'View Profile', to: '/' },
      { title: 'Account Settings', to: '/example', separatorBefore: true },
      { title: 'Sign Out', to: '/sign-out' },
    ],
    triggerText: "Show Dropdown"
  },
  // Use a render function to provide the trigger slot content
  render: (args) => ({
    components: { UluDropdown, UluButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 4rem;">
        <UluDropdown v-bind="args"/>
      </div>
    `,
  }),
  argTypes: {
    items: { control: 'object' },
    triggerText: { control: 'text' },
  },
};

export const Default = {};
