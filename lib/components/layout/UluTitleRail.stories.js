import UluTitleRail from "./UluTitleRail.vue";

export default {
  component: UluTitleRail,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: "My Title",
    icon: "type:info"
  }
};

export const WithIcon = {
  args: {
    title: "This has a user set icon",
    icon: "fas fa-circle-check"
  }
};

export const WithIconType = {
  args: {
    ...Default.args,
    icon: "type:info"
  }
};

export const WithEndSlot = {
  render: (args) => ({
    components: { UluTitleRail },
    setup() {
      return { args };
    },
    template: `
      <UluTitleRail v-bind="args">
        <template #end>
          <p>Some content on the end</p>
        </template>
      </UluTitleRail>
    `,
  }),
  args: {
    ...WithIconType.args
  }
};
