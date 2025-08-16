// Generated automatically with ./generate-story.js
import UluCallout from "./UluCallout.vue";

const Template = (args) => ({
  components: { UluCallout },
  setup() {
    return { args };
  },
  template: `<UluCallout v-bind="args">This is the content in the callout</UluCallout>`,
});

export default {
  component: UluCallout,
  // title: "Components/UluCallout",
  tags: ["autodocs"],
  argTypes: {
    fullHeight: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    modifiers: {
      control: { type: "text" },
      defaultValue: "",
    },
  },
};

export const Default = Template.bind({});
Default.args = {};

export const FullHeight = Template.bind({});
FullHeight.args = {
  fullHeight: true,
};

export const WithModifier = Template.bind({});
WithModifier.args = {
  modifiers: "danger",
};