// Generated automatically with ./generate-story.js
import UluButton from "../../lib/components/elements/UluButton.vue";

export default {
  component: UluButton,
  title: 'Components/UluButton',
  tags: ["autodocs"],
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

export const Large = Template.bind({});
Large.args = {
  large: true,
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

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: "fas fa-plus",
  text: 'Transparent Button',
};

export const WithIconBefore = Template.bind({});
WithIconBefore.args = {
  icon: "fas fa-plus",
  iconBefore: true,
  text: 'Transparent Button',
};

export const WithIconOnly = Template.bind({});
WithIconOnly.args = {
  icon: "fas fa-plus",
  iconOnly: true,
  text: 'Transparent Button',
};