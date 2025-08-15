// Generated automatically with ./generate-story.js

import UluBadge from "../../lib/components/elements/UluBadge.vue";
import UluPlaceholderImage from "../../lib/components/utils/UluPlaceholderImage.vue";

export default {
  component: UluBadge,
  title: 'Components/UluBadge',
  tags: ["autodocs"],
  argTypes: {
    skeleton: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      defaultValue: 'medium',
    },
    text: {
      control: { type: 'text' },
      defaultValue: '',
    },
    alt: {
      control: { type: 'text' },
      defaultValue: '',
    },
    type: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      defaultValue: 'primary',
    },
    click: {
      action: 'clicked',
    },
    to: {
      control: { type: 'object' },
      defaultValue: null,
    },
    href: {
      control: { type: 'text' },
      defaultValue: '',
    },
  }
}

const Template = (args) => ({
  components: { UluBadge },
  setup() {
    return { args };
  },
  template: `<UluBadge v-bind="args" />`, // Always use v-bind="args"
});

const TemplateImage = (args) => ({
  components: { UluBadge, UluPlaceholderImage },
  setup() {
    return { args };
  },
  template: `
    <UluBadge v-bind="args">
      <UluPlaceholderImage imageId="64" width="300" height="300"/>
    </UluBadge>
  `, 
});

export const UsingImage = TemplateImage.bind({});
UsingImage.args = {
  // alt: "Jane Doe"
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   type: 'secondary',
//   text: "ULU"
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   text: "ULU"
// };

// export const WithImage = Template.bind({});
// WithImage.args = {
//   size: 'medium',
//   text: "ULU"
// };

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  text: "ULU"
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  text: "ULU"
};

export const Clickable = Template.bind({});
Clickable.args = {
  click: () => console.log('clicked'),
  text: "ULU"
};

export const Link = Template.bind({});
Link.args = {
  to: '/some-link',
  text: "ULU"
};

export const Href = Template.bind({});
Href.args = {
  href: 'https://www.example.com',
  text: "ULU"
};

export const WithAltText = Template.bind({});
WithAltText.args = {
  text: "JD",
  alt: "Jane Doe"
};