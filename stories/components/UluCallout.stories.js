// Generated automatically with ./generate-story.js
import UluCallout from "../../lib/components/UluCallout.vue";

const Template = (args) => ({
  components: { UluCallout },
  setup() {
    return { args };
  },
  template: `<UluCallout v-bind="args">This is the content in the callout</UluCallout>`,
});

export default {
  component: UluCallout,
  title: "Components/UluCallout",
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

export const Primary = Template.bind({});
Primary.args = {};

export const FullHeight = Template.bind({});
Secondary.args = {
  fullHeight: true,
};

export const WithModifier = Template.bind({});
Small.args = {
  modifiers: "danger",
};