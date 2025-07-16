// Generated automatically with ./generate-story.js

import UluButton from '../../lib/components/UluButton.vue';
export default {
  component: UluButton,
  title: 'Components/UluButton',
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: 'text',
      description: 'Icon name'
    },
    iconBefore: {
      control: 'boolean',
      description: 'Whether the icon should be displayed before the text or not'
    },
    iconOnly: {
      control: 'boolean',
      description: 'Whether only the icon should be displayed or not'
    },
    to: {
      control: 'text',
      description: 'Target route of the link'
    },
    href: {
      control: 'text',
      description: 'Link URL'
    },
    download: {
      control: 'boolean',
      description: 'Whether the link should be downloaded or not'
    },
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'small'],
      description: 'Button type'
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the button'
    },
    text: {
      control: 'text',
      description: 'Button text'
    },
    size: {
      control: 'select',
      options: ['small', 'smaller'],
      description: 'Button size'
    },
    primary: {
      control: 'boolean',
      description: 'Whether the button should be displayed as primary or not'
    },
    secondary: {
      control: 'boolean',
      description: 'Whether the button should be displayed as secondary or not'
    },
    small: {
      control: 'boolean',
      description: 'Whether the button should be displayed as small or not'
    },
    smaller: {
      control: 'boolean',
      description: 'Whether the button should be displayed as smaller or not'
    },
    outline: {
      control: 'boolean',
      description: 'Whether the button should have an outline or not'
    },
    noMargin: {
      control: 'boolean',
      description: 'Whether the button should have a margin or not'
    },
    transparent: {
      control: 'boolean',
      description: 'Whether the button should be displayed as transparent or not'
    }
  }
};

const Template = (args) => ({
  components: { UluButton },
  setup() {
    return { args };
  },
  template: `<UluButton v-bind="args" />`, // Always use v-bind="args"
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Primary Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  text: 'Secondary Button'
};

export const Small = Template.bind({});
Small.args = {
  small: true,
  text: 'Small Button'
};

export const Smaller = Template.bind({});
Smaller.args = {
  smaller: true,
  text: 'Smaller Button'
};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
  text: 'Outline Button'
};

export const NoMargin = Template.bind({});
NoMargin.args = {
  noMargin: true,
  text: 'No Margin Button'
};

export const Transparent = Template.bind({});
Transparent.args = {
  transparent: true,
  text: 'Transparent Button'
};