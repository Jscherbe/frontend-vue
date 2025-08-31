import UluSkeletonContent from "./UluSkeletonContent.vue";

export default {
  component: UluSkeletonContent,
  tags: ["autodocs"],
  argTypes: {
    lines: { control: "number" },
  },
  parameters: {
    docs: {
      description: {
        component: "A component to render a block of skeleton content with a random number of lines and widths."
      }
    }
  }
};

export const Default = {
  render: (args) => ({
    components: { UluSkeletonContent },
    setup() {
      return { args };
    },
    template: '<UluSkeletonContent v-bind="args" />',
  }),
  args: {
    lines: 6,
  },
};

export const ThreeLines = {
  ...Default,
  args: {
    lines: 3,
  },
  name: "3 Lines"
};