import UluExternalLink from './UluExternalLink.vue';

export default {
  component: UluExternalLink,
  tags: ["autodocs"],
  args: {
    href: 'https://example.com',
    text: 'Default link text (from prop)',
  },
  // A render function to handle the default slot
  render: (args) => ({
    components: { UluExternalLink },
    setup() {
      return { args };
    },
    // If slotContent is provided, it will be used as the slot, overriding the `text` prop.
    template: `<UluExternalLink v-bind="args"/>`,
  }),
  argTypes: {
    text: { control: 'text' },
    href: { control: 'text' },
    target: { control: 'text' },
    icon: { control: 'text' },
  },
};

// --- Stories --- 

export const Default = {
  name: 'Using Text Prop',
  args: {
    text: 'This is an external link.'
  }
};

export const UsingSlot = {
  args: {},
  render: (args) => ({
    components: { UluExternalLink },
    setup() {
      return { args };
    },
    template: `<UluExternalLink v-bind="args">This is <strong>slot</strong> content.</UluExternalLink>`,
  }),
};

export const CustomIcon = {
  args: {
    text: 'External link with a custom icon',
    icon: 'fas fa-circle-info'
  }
};
