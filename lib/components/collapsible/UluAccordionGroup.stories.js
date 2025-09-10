import UluAccordionGroup from "./UluAccordionGroup.vue";

export default {
  component: UluAccordionGroup,
  tags: ['autodocs'],
};

const defaultItems = [
  {
    title: 'First Item',
    content: 'This is the content for the first item.',
    isOpen: true, // The first item will be open by default
  },
  {
    title: 'Second Item',
    content: 'This is the content for the second item.',
  },
  {
    title: 'Third Item',
    content: 'This is the content for the third item.',
  }
];

export const Default = {
  args: {
    items: defaultItems,
  },
};

export const CustomSlot = {
  args: {
    items: [
      { id: 'one', title: 'First Custom', content: { summary: 'Summary one', details: 'Details one' } },
      { id: 'two', title: 'Second Custom', content: { summary: 'Summary two', details: 'Details two' } },
    ]
  },
  render: (args) => ({
    components: { UluAccordionGroup },
    setup() {
      return { args };
    },
    template: `
      <UluAccordionGroup v-bind="args">
        <template #item="{ item }">
          <h4>{{ item.content.summary }}</h4>
          <p>{{ item.content.details }}</p>
        </template>
      </UluAccordionGroup>
    `
  }),
};