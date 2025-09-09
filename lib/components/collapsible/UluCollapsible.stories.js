import UluCollapsible from './UluCollapsible.vue';

export default {
  title: 'Components/Collapsible/UluCollapsible',
  component: UluCollapsible,
  tags: ['autodocs'],
  // Common props for all stories
  args: {
    title: 'Toggle Collapsible Region',
    transitionHeight: true,
    transitionFades: true,
  },
  // Define controls for props and slots
  argTypes: {
    title: { control: 'text' },
    closeOnEscape: { control: 'boolean' },
    startOpen: { control: 'boolean' },
    transitionHeight: { control: 'boolean' },
    transitionFades: { control: 'boolean' },
    transitionTiming: { control: 'text' },
    transitionDuration: { control: 'text' },
    // Use a text control for the default slot content
    default: {
      control: 'text',
      name: 'slot: default',
      description: 'The content inside the collapsible region.'
    }
  },
  // A generic render function to handle slot content
  render: (args) => ({
    components: { UluCollapsible },
    setup() {
      return { args };
    },
    template: `
      <UluCollapsible v-bind="args">
        <div style="padding: 1rem; border-top: 1px solid #eee;">
          <p style="margin: 0;">{{ args.default || 'This is the collapsible content area. You can put any HTML or components here.' }}</p>
        </div>
      </UluCollapsible>
    `,
  }),
};

// --- Stories --- 

export const Default = {
  args: {
    default: 'This is a standard collapsible region with transitions enabled by default in these stories.',
  },
};

export const NoTransitions = {
  args: {
    ...Default.args,
    transitionHeight: false,
    transitionFades: false,
    title: 'Region Without Transitions',
    default: 'This collapsible region has transitions disabled.'
  },
};

export const StartsOpen = {
  args: {
    ...Default.args,
    startOpen: true,
    title: 'Region That Starts Open',
    default: 'This collapsible region was open when the component was first rendered.'
  },
};

export const CustomToggle = {
  render: (args) => ({
    components: { UluCollapsible },
    setup() {
      return { args };
    },
    template: `
      <UluCollapsible v-bind="args">
        <template #toggle="{ isOpen }">
          <span style="display: flex; align-items: center; gap: 0.5rem; font-weight: bold; color: #333;">
            <span :style="{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }">➡️</span>
            <span>{{ args.title }}</span>
            <span style="margin-left: auto; font-size: 0.8em; color: #666;">{{ isOpen ? '(open)' : '(closed)' }}</span>
          </span>
        </template>
        <div style="padding: 1rem; border-top: 1px solid #eee;">
          <p style="margin: 0;">{{ args.default || 'This collapsible region has a custom toggle button.' }}</p>
        </div>
      </UluCollapsible>
    `,
  }),
  args: {
    ...Default.args,
    title: 'Custom Toggle Slot',
    default: 'This content is controlled by a toggle button that was customized using the `toggle` named slot.'
  },
};
