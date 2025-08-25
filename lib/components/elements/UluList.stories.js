import UluList from './UluList.vue';

export default {
  tags: ["autodocs"],
  component: UluList,
  args: {
    items: ['List Item 1', 'List Item 2', 'List Item 3', 'List Item 4'],
  },
  argTypes: {
    items: { control: 'object' },
    classes: { control: 'object' },
    ordered: { control: 'boolean' },
    unordered: { control: 'boolean' },
    lines: { control: 'boolean' },
    compact: { control: 'boolean' },
    forceOrdered: { control: 'boolean' },
    start: { control: 'text' },
    reversed: { control: 'boolean' },
    listStyleType: { control: 'text' },
  },
};

// --- Stories --- 

export const Unordered = {
  args: {
    unordered: true,
  },
};

export const Ordered = {
  args: {
    ordered: true,
  },
};

export const OrderedReversed = {
  args: {
    ordered: true,
    reversed: true,
    items: ['Three', 'Two', 'One'],
  },
};

export const OrderedStartValue = {
  args: {
    ordered: true,
    start: '5',
    items: ['Starts at 5', 'Item 6', 'Item 7'],
  },
};

export const LinesList = {
  render: (args) => ({
    components: { UluList },
    setup() {
      return { args };
    },
    template: `
      <UluList v-bind="args" lines />
    `,
  }),
  argTypes: {
    lines: { table: { disable: true } },
    compact: { table: { disable: true } },
  }
};

export const CustomItemSlot = {
  render: (args) => ({
    components: { UluList },
    setup() {
      return { args };
    },
    template: `
      <UluList v-bind="args">
        <template #default="{ item }">
          <a :href="item.href" style="text-decoration: none; color: #1a0dab;">
            <strong>{{ item.label }}</strong> - <small>{{ item.href }}</small>
          </a>
        </template>
      </UluList>
    `,
  }),
  args: {
    items: [
      { label: 'Google', href: 'https://google.com' },
      { label: 'Facebook', href: 'https://facebook.com' },
      { label: 'Amazon', href: 'https://amazon.com' },
    ],
  },
};
