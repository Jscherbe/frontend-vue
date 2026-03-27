import UluCounterList from './UluCounterList.vue';
import UluListItem from './UluListItem.vue';

export default {
  tags: ["autodocs"],
  component: UluCounterList,
  args: {
    items: ['List Item 1', 'List Item 2', 'List Item 3', 'List Item 4'],
  },
  argTypes: {
    items: { control: 'object' },
    element: { control: 'text' },
    itemElement: { control: 'text' },
    classes: { control: 'object' },
    alphabetical: { control: 'boolean' },
    noReset: { control: 'boolean' },
    modifiers: { control: 'object' },
  },
};

// --- Stories --- 

export const Default = {};

export const Alphabetical = {
  args: {
    alphabetical: true,
  },
};

export const NoReset = {
  render: () => ({
    components: { UluCounterList, UluListItem },
    template: `
      <p>This list will continue from previous lists if they exist in the same scope (or just won't reset its own internal counter if styled that way).</p>
      <UluCounterList>
        <UluListItem>Manually composed item 1</UluListItem>
        <UluListItem>Manually composed item 2</UluListItem>
        <UluListItem>Manually composed item 3</UluListItem>
      </UluCounterList>
      <p>A paragraph in between</p>
      <UluCounterList no-reset>
        <UluListItem>Manually composed item 4</UluListItem>
        <UluListItem>Manually composed item 5</UluListItem>
      </UluCounterList>
    `,
  }),
};

export const CustomElements = {
  args: {
    element: 'div',
    itemElement: 'div',
    items: ['Div Item 1', 'Div Item 2', 'Div Item 3'],
  },
};

export const Compositional = {
  render: (args) => ({
    components: { UluCounterList, UluListItem },
    setup() {
      return { args };
    },
    template: `
      <UluCounterList v-bind="args">
        <UluListItem>Manually composed item 1</UluListItem>
        <UluListItem>Manually composed item 2</UluListItem>
        <UluListItem>Manually composed item 3</UluListItem>
      </UluCounterList>
    `,
  }),
  args: {
    items: undefined
  }
};
