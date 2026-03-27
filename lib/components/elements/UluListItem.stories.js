import UluListItem from './UluListItem.vue';
import { provide, computed } from 'vue';

export default {
  tags: ["autodocs"],
  component: UluListItem,
  decorators: [
    (story) => ({
      setup() {
        provide('uluListContext', computed(() => ({
          classes: { item: 'ulu-injected-item-class' },
          itemElement: 'li'
        })));
      },
      template: '<ul class="ulu-list-demo-container"><story /></ul>',
    }),
  ],
  argTypes: {
    classes: { control: 'object' },
    element: { control: 'text' },
  },
};

// --- Stories --- 

export const Default = {
  render: (args) => ({
    components: { UluListItem },
    setup() {
      return { args };
    },
    template: `
      <UluListItem v-bind="args">
        This is a standard list item
      </UluListItem>
    `,
  }),
};

export const CustomElement = {
  args: {
    element: 'div',
  },
  render: (args) => ({
    components: { UluListItem },
    setup() {
      return { args };
    },
    template: `
      <UluListItem v-bind="args">
        I am rendered as a <strong>div</strong>
      </UluListItem>
    `,
  }),
};

export const CustomClasses = {
  args: {
    classes: 'custom-class-from-prop',
  },
  render: (args) => ({
    components: { UluListItem },
    setup() {
      return { args };
    },
    template: `
      <UluListItem v-bind="args">
        Item with custom classes (check DOM)
      </UluListItem>
    `,
  }),
};
