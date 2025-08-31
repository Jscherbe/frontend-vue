import UluSkeletonText from "./UluSkeletonText.vue";

export default {
  component: UluSkeletonText,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A simple component to render a block of skeleton text. It can be styled with standard CSS for width, etc."
      }
    }
  }
};

export const Default = {
  render: (args) => ({
    components: { UluSkeletonText },
    setup() {
      return { args };
    },
    template: `
      <p>Some text with <UluSkeletonText v-bind="args" inline /> in the middle of it.</p>`,
  }),
  args: {},
};

export const Blocks = {
  render: () => ({
    components: { UluSkeletonText },
    template: `
      <div>
        <p><UluSkeletonText width="large-x" inline /></p>
        <p><UluSkeletonText width="large" inline /></p>
        <p><UluSkeletonText width="large-x" inline /></p>
      </div>
    `
  }),
  name: "As text blocks"
};