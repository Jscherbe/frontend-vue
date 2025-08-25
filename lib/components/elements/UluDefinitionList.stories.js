import UluDefinitionList from './UluDefinitionList.vue';

export default {
  component: UluDefinitionList,
  tags: ["autodocs"],
  args: {
    items: [
      { term: 'Term 1', description: 'This is the description for the first term.' },
      { term: 'Term 2', description: 'This is the description for the second term, which can be a bit longer to show how it wraps.' },
      { term: 'Term 3', description: 'A short description.' },
    ]
  },
  argTypes: {
    items: { control: 'object' },
    classes: { control: 'object' },
  },
};

// --- Stories --- 

export const Default = {};

export const CustomClasses = {
  args: {
    classes: {
      list: 'custom-dl',
      item: 'custom-dl__item',
      term: 'custom-dl__term',
      description: 'custom-dl__description'
    }
  },
  decorators: [
    () => ({
      template: `
        <div>
          <p>This story demonstrates custom classes. Inspect the elements to see them applied.</p>
          <style>
            .custom-dl__term { font-weight: bold; color: #005ea2; }
            .custom-dl__description { color: #555; padding-left: 1rem; border-left: 2px solid #eee; }
            .custom-dl__item:not(:last-child) { margin-bottom: 1rem; }
          </style>
          <story/>
        </div>
      `,
    }),
  ],
};

export const CustomSlots = {
  render: (args) => ({
    components: { UluDefinitionList },
    setup() {
      return { args };
    },
    template: `
      <UluDefinitionList v-bind="args">
        <template #term="{ item }">
          <strong style="text-transform: uppercase;">{{ item.term }} 🚀</strong>
        </template>
        <template #description="{ item }">
          <a :href="item.description.link">{{ item.description.text }}</a>
        </template>
      </UluDefinitionList>
    `,
  }),
  args: {
    items: [
      { term: 'Website', description: { text: 'Visit our main website', link: '#' } },
      { term: 'Email', description: { text: 'Contact Support', link: 'mailto:support@example.com' } },
    ]
  }
};
