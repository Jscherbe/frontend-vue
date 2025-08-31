import UluSkeletonMedia from "./UluSkeletonMedia.vue";

export default {
  component: UluSkeletonMedia,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A simple component to render a skeleton media block."
      }
    }
  }
};

export const Default = {
  render: (args) => ({
    components: { UluSkeletonMedia },
    setup() {
      return { args };
    },
    template: '<div style="width: 200px; height: 200px;"><UluSkeletonMedia v-bind="args" /></div>',
  }),
  args: {},
};