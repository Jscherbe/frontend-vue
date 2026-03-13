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
    modifiers: { control: 'text' },
    inline: { control: 'boolean' },
    inlineAll: { control: 'boolean' },
    table: { control: 'boolean' },
    separated: { control: 'boolean' },
    separatedFirst: { control: 'boolean' },
    separatedLast: { control: 'boolean' },
    compact: { control: 'boolean' },
  },
};

// --- Stories --- 

export const Default = {};

export const Inline = {
  args: {
    inline: true
  }
};

export const InlineAll = {
  args: {
    inlineAll: true,
    items: [
      { term: 'Term 1', description: 'Desc 1' },
      { term: 'Term 2', description: 'Desc 2' },
      { term: 'Term 3', description: 'Desc 3' },
    ]
  }
};

export const Table = {
  args: {
    table: true
  }
};

export const Separated = {
  args: {
    separated: true
  }
};

export const SeparatedVariations = {
  args: {
    separated: true,
  },
  render: (args) => ({
    components: { UluDefinitionList },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <p>Separated</p>
          <UluDefinitionList v-bind="args" />
        </div>
        <div>
          <p>Separated (with first)</p>
          <UluDefinitionList v-bind="args" :separated-first="true" />
        </div>
        <div>
          <p>Separated (with last)</p>
          <UluDefinitionList v-bind="args" :separated-last="true" />
        </div>
        <div>
          <p>Separated (with first and last)</p>
          <UluDefinitionList v-bind="args" :separated-first="true" :separated-last="true" />
        </div>
      </div>
    `,
  }),
};

export const Compact = {
  args: {
    compact: true
  }
};

export const TableSeparatedCompact = {
  args: {
    table: true,
    separated: true,
    compact: true
  }
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

export const MultipleDescriptions = {
  args: {
    items: [
      { 
        term: 'Single Description', 
        description: 'This term has one description.' 
      },
      { 
        term: 'Multiple Descriptions', 
        description: [
          'First description for this term.',
          'Second description for this term.',
          'Third description for this term.'
        ] 
      },
      { 
        term: 'Another Single', 
        description: 'Just to show mixing works.' 
      },
    ]
  }
};

export const MultipleDescriptionsWithSlots = {
  render: (args) => ({
    components: { UluDefinitionList },
    setup() {
      return { args };
    },
    template: `
      <UluDefinitionList v-bind="args">
        <template #term="{ item }">
          <strong>{{ item.term }}</strong>
        </template>
        <template #description="{ description, index, descriptionIndex }">
          <div style="display: flex; align-items: center; gap: 0.5em;">
            <span style="background: #eee; padding: 0.2em 0.4em; border-radius: 4px; font-size: 0.8em;">
              {{ index }}.{{ descriptionIndex }}
            </span>
            <span>{{ description }}</span>
          </div>
        </template>
      </UluDefinitionList>
    `,
  }),
  args: {
    items: [
      { 
        term: 'Features', 
        description: ['Fast', 'Reliable', 'Secure'] 
      },
      { 
        term: 'Pricing', 
        description: 'Free' 
      },
    ]
  }
};
