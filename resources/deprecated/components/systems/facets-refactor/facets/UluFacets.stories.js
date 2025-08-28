import { ref } from 'vue';
import UluFacets from './UluFacets.vue';
import { useFacets } from '../../composables/useFacets';

export default {
  component: UluFacets,
  tags: ["autodocs"]
};

// --- Mock Data ---
const initialMockFacets = [
  {
    name: 'Category',
    uid: 'category',
    open: true,
    children: [
      { uid: 'cat1', label: 'Design' },
      { uid: 'cat2', label: 'Development' },
      { uid: 'cat3', label: 'Marketing' },
      { uid: 'cat4', label: 'Business' },
      { uid: 'cat5', label: 'Lifestyle' },
      { uid: 'cat6', label: 'Technology' },
    ]
  },
  {
    name: 'Author',
    uid: 'author',
    open: true,
    children: [
      { uid: 'jane-doe', label: 'Jane Doe' },
      { uid: 'john-smith', label: 'John Smith' },
      { uid: 'peter-jones', label: 'Peter Jones' },
    ]
  }
];

const mockItems = [
  { id: 1, title: 'The Art of UI Design', description: 'A deep dive into creating beautiful user interfaces.', category: ['cat1', 'cat2'], author: ['jane-doe'], date: new Date(2023, 5, 15) },
  { id: 2, title: 'Vue.js for Beginners', description: 'Getting started with the popular JavaScript framework.', category: ['cat2', 'cat6'], author: ['john-smith'], date: new Date(2023, 8, 22) },
  { id: 3, title: 'Content Marketing Strategies', description: 'How to attract and retain customers with great content.', category: ['cat3'], author: ['peter-jones'], date: new Date(2022, 11, 10) },
  { id: 4, title: 'Startup Funding 101', description: 'A guide to raising capital for your new venture.', category: ['cat4'], author: ['jane-doe'], date: new Date(2024, 1, 5) },
  { id: 5, title: 'Minimalist Living', description: 'Declutter your life and find more happiness.', category: ['cat5'], author: ['john-smith'], date: new Date(2023, 3, 30) },
  { id: 6, title: 'The Future of AI', description: 'Exploring the impact of artificial intelligence on society.', category: ['cat6'], author: ['peter-jones'], date: new Date(2024, 0, 1) },
  { id: 7, title: 'Advanced CSS Techniques', description: 'Take your styling skills to the next level.', category: ['cat1', 'cat2'], author: ['jane-doe'], date: new Date(2023, 10, 18) },
  { id: 8, title: 'Building a Scalable API', description: 'Best practices for designing and implementing APIs.', category: ['cat2', 'cat6'], author: ['john-smith'], date: new Date(2023, 7, 3) },
  { id: 9, title: 'Social Media for Business', description: 'Leveraging social platforms for growth.', category: ['cat3'], author: ['peter-jones'], date: new Date(2022, 9, 14) },
  { id: 10, title: 'Negotiation and Deal Making', description: 'Master the art of getting what you want.', category: ['cat4'], author: ['jane-doe'], date: new Date(2023, 6, 25) },
  { id: 11, title: 'Healthy Eating Habits', description: 'A guide to a balanced and nutritious diet.', category: ['cat5'], author: ['john-smith'], date: new Date(2024, 2, 12) },
  { id: 12, title: 'Quantum Computing Explained', description: 'A simple introduction to a complex topic.', category: ['cat6'], author: ['peter-jones'], date: new Date(2023, 9, 9) },
];

const Template = (args) => ({
  components: { UluFacets },
  setup() {
    const allItems = ref(args.items);

    const { 
      facets, 
      searchValue, 
      selectedSort, 
      sortTypes, 
      displayItems, 
      selectedFacets, 
      clearFilters 
    } = useFacets(allItems, {
      initialFacets: args.initialFacets,
      extraSortTypes: args.extraSortTypes,
      initialSortType: args.initialSortType
    });

    function onFacetChange({ groupUid, facetUid, selected }) {
      const group = facets.value.find(g => g.uid === groupUid);
      if (group) {
        const facet = group.children.find(f => f.uid === facetUid);
        if (facet) {
          facet.selected = selected;
        }
      }
    }

    return { 
      args, 
      facets, 
      searchValue, 
      selectedSort, 
      sortTypes, 
      displayItems, 
      selectedFacets, 
      clearFilters, 
      onFacetChange 
    };
  },
  template: `
    <UluFacets
      :facets="facets"
      :sort-types="sortTypes"
      v-model:selectedSort="selectedSort"
      v-model:searchValue="searchValue"
      :selected-facets-count="selectedFacets.length"
      :results-count="displayItems.length"
      :search-placeholder="args.searchPlaceholder"
      :max-visible="args.maxVisible"
      @clear-filters="clearFilters"
      @facet-change="onFacetChange"
    >
      <template #header="{ count }">
        <h2>Found {{ count }} items</h2>
      </template>
      <template #results>
        <transition-group name="UluFacetsFade" tag="ul" v-if="displayItems.length" style="list-style: none; padding: 0;">
          <li
            class="UluFacets__results-item"
            v-for="item in displayItems"
            :key="item.id"
          >
            <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <p v-if="item.category"><strong>Category:</strong> {{ item.category.join(', ') }}</p>
              <p v-if="item.author"><strong>Author:</strong> {{ item.author.join(', ') }}</p>
              <p v-if="item.date"><strong>Date:</strong> {{ item.date.toLocaleDateString() }}</p>
            </div>
          </li>
        </transition-group>
        <div v-else style="padding: 2rem; text-align: center;">
          <p>No matching items found. Try clearing some filters.</p>
        </div>
      </template>
    </UluFacets>
  `,
});

export const Default = Template.bind({});
Default.args = {
  initialFacets: initialMockFacets,
  items: mockItems,
  searchPlaceholder: 'Search articles...',
  maxVisible: 5,
};

export const WithCustomSort = Template.bind({});
WithCustomSort.args = {
  ...Default.args,
  initialSortType: 'newest',
  extraSortTypes: {
    newest: {
      text: 'Date (Newest)',
      sort: (items) => items.sort((a, b) => b.date - a.date)
    },
    oldest: {
      text: 'Date (Oldest)',
      sort: (items) => items.sort((a, b) => a.date - b.date)
    }
  }
};

export const PreSelectedFilter = Template.bind({});
PreSelectedFilter.args = {
  ...Default.args,
  initialFacets: [
    {
      name: 'Category',
      uid: 'category',
      open: true,
      children: [
        { uid: 'cat1', label: 'Design' },
        { uid: 'cat2', label: 'Development', selected: true }, // This one is pre-selected
        { uid: 'cat3', label: 'Marketing' },
        { uid: 'cat4', label: 'Business' },
        { uid: 'cat5', label: 'Lifestyle' },
        { uid: 'cat6', label: 'Technology' },
      ]
    },
    {
      name: 'Author',
      uid: 'author',
      open: true,
      children: [
        { uid: 'jane-doe', label: 'Jane Doe' },
        { uid: 'john-smith', label: 'John Smith' },
        { uid: 'peter-jones', label: 'Peter Jones' },
      ]
    }
  ]
};

export const NoResults = Template.bind({});
NoResults.args = {
  ...Default.args,
  items: []
};