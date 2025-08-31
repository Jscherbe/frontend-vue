import UluBadgeStack from './UluBadgeStack.vue';

export default {
  component: UluBadgeStack,
  // Common arguments for all stories
  args: {
    items: [
      { text: 'AL', size: 'small' },
      { text: 'BET', modifier: 'secondary', size: 'small' },
      { text: 'GM', modifier: 'tertiary', size: 'small' },
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
      { text: 'PI', size: 'small' },
      { text: 'SE', modifier: 'secondary', size: 'small' },
      { text: 'TX', modifier: 'success', size: 'small' },
      { text: 'DO', modifier: 'danger', size: 'small' },
      { text: 'WO', modifier: 'warning', size: 'small' },
      { text: 'IF', modifier: 'info', size: 'small' },
      { text: 'LG', modifier: 'light', size: 'small' },
      { text: 'DK', modifier: 'dark', size: 'small' },
    ]
  }
};
