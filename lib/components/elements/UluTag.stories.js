import UluTag from "./UluTag.vue";

export default {
  component: UluTag,
  args: {
    text: "Tag Label",
    counter: false,
  },
  argTypes: {
    text: { control: "text" },
    icon: { control: "text" },
    size: { control: "text" },
    type: { control: "text" },
    modifiers: { control: "text" },
    counter: { control: "boolean" },
  },
};

// --- Stories ---

export const Default = {};

export const WithIcon = {
  args: {
    text: "Icon Tag",
    icon: "type:file",
  },
};

export const Small = {
  args: {
    text: "Small Tag",
    size: "small",
  },
};

const renderModifiers = (args) => ({
  components: { UluTag },
  setup() {
    const modifiers = ["secondary", "tertiary", "success", "danger", "warning", "info", "light", "dark"];
    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    return { args, modifiers, capitalize };
  },
  template: `
    <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 0.5rem;">
      <UluTag :size="args.size" text="Primary" />
      <UluTag
        v-for="mod in modifiers"
        :key="mod"
        :size="args.size"
        :text="capitalize(mod)"
        :modifiers="mod"
      />
    </div>
  `,
});

export const AllModifiers = {
  render: renderModifiers,
  argTypes: {
    text: { table: { disable: true } },
    modifiers: { table: { disable: true } },
    size: { table: { disable: true } },
    icon: { table: { disable: true } },
  },
};

export const SmallModifiers = {
  ...AllModifiers,
  args: {
    size: "small",
  },
};

export const WithCounter = {
  args: {
    text: "3",
    counter: true,
  },
};