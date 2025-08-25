import UluBadgeStack from './UluBadgeStack.vue';

export default {
  component: UluBadgeStack,
  // Common arguments for all stories
  args: {
    items: [
      { label: 'Alpha' },
      { label: 'Beta', modifier: 'secondary' },
      { label: 'Gamma', modifier: 'tertiary' },
    ]
  },
  argTypes: {
    items: { 
      control: 'object',
      description: 'An array of objects, where each object is the set of props for a UluBadge component.'
    },
  },
};

// --- Stories --- 

export const Default = {};

export const ManyBadges = {
  args: {
    items: [
      { label: 'Primary' },
      { label: 'Secondary', modifier: 'secondary' },
      { label: 'Success', modifier: 'success' },
      { label: 'Danger', modifier: 'danger' },
      { label: 'Warning', modifier: 'warning' },
      { label: 'Info', modifier: 'info' },
      { label: 'Light', modifier: 'light' },
      { label: 'Dark', modifier: 'dark' },
    ]
  }
};
