import UluAccordionGroup from "./UluAccordionGroup.vue";
import UluIcon from "../elements/UluIcon.vue";

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
      { title: 'First Custom', content: { summary: 'Summary one', details: 'Details one' } },
      { title: 'Second Custom', content: { summary: 'Summary two', details: 'Details two' } },
    ]
  },
  render: (args) => ({
    components: { UluAccordionGroup },
    setup() {
      return { args };
    },
    template: `
      <UluAccordionGroup v-bind="args">
        <template #item="{ item, isOpen, toggle }">
          <h4 class="h3">{{ item.content.summary }}</h4>
          <p>{{ item.content.details }}</p>
          <p><small>Current state: {{ isOpen ? 'Open' : 'Closed' }}</small></p>
          <button @click="toggle()">Toggle from inside</button>
        </template>
      </UluAccordionGroup>
    `
  }),
};

export const CustomTrigger = {
  args: {
    items: [
      { title: 'First Custom Trigger', content: 'Content for first item' },
      { title: 'Second Custom Trigger', content: 'Content for second item' },
    ]
  },
  render: (args) => ({
    components: { UluAccordionGroup, UluIcon },
    setup() {
      return { args };
    },
    template: `
      <UluAccordionGroup v-bind="args">
        <template #trigger="{ item, isOpen }">
          <strong style="color: rebeccapurple;">{{ item.title }} ({{ isOpen ? 'Open' : 'Closed' }})</strong>
        </template>
        <template #icon="{ isOpen }">
          <UluIcon :icon="isOpen ? 'type:danger' : 'type:success'" style="display: inline-block; vertical-align: middle;"/>
        </template>
      </UluAccordionGroup>
    `
  }),
};
