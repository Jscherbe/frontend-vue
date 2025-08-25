import UluTag from './UluTag.vue';

export default {
  component: UluTag,
  args: {
    text: 'Tag Label',
  },
  argTypes: {
    text: { control: 'text' },
    icon: { control: 'text' },
    small: { control: 'boolean' },
    modifiers: { control: 'text' },
  },
};

// --- Stories --- 

export const Default = {};

export const WithIcon = {
  args: {
    text: 'Icon Tag',
    icon: 'fas fa-tag',
  },
};

export const Small = {
  args: {
    text: 'Small Tag',
    small: true,
  },
};

const renderModifiers = (args) => ({
  components: { UluTag },
  setup() {
    const modifiers = ['secondary', 'tertiary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    return { args, modifiers, capitalize };
  },
  template: `
    <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 0.5rem;">
      <UluTag :small="args.small" text="Primary" />
      <UluTag
        v-for="mod in modifiers"
        :key="mod"
        :small="args.small"
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
    small: { table: { disable: true } },
    icon: { table: { disable: true } },
  },
};

export const SmallModifiers = {
  ...AllModifiers,
  args: {
    small: true,
  },
};
