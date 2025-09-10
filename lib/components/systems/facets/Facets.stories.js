import { ref } from 'vue';
import { useFacets } from './useFacets.js';
import UluFacetsFilterLists from './UluFacetsFilterLists.vue';
import UluFacetsResults from './UluFacetsResults.vue';
import UluFacetsSearch from './UluFacetsSearch.vue';
import UluFacetsSort from './UluFacetsSort.vue';
import UluFacetsSidebarLayout from './UluFacetsSidebarLayout.vue';
import { mockItems } from './_mock-data';

export default {};

// Define facet fields for automatic generation
const mockFacetFields = [
  { name: 'Category', uid: 'category', open: true, multiple: true },
  { name: 'Author', uid: 'author', open: true }
];

const defaultSetup = (args) => {
  const allItems = ref(args.items);
  const { 
    facets, 
    searchValue, 
    selectedSort, 
    sortTypes, 
    displayItems, 
    selectedFacets, 
    clearFilters,
    handleFacetChange
  } = useFacets(allItems, {
    facetFields: args.facetFields,
    extraSortTypes: args.extraSortTypes,
    initialSortType: args.initialSortType,
    countMode: args.countMode
  });

  return { 
    args, 
    facets, 
    searchValue, 
    selectedSort, 
    sortTypes, 
    displayItems, 
    selectedFacets, 
    clearFilters, 
    handleFacetChange
  };
};

const storyTemplate = `
  <UluFacetsSidebarLayout>
    <template #header>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #eee;">
        <h2>Found {{ displayItems.length }} items</h2>
        <UluFacetsSort v-model="selectedSort" :sort-types="sortTypes" />
      </div>
    </template>
    <template #sidebar>
      <UluFacetsSearch v-model="searchValue" :placeholder="args.searchPlaceholder" />
      <hr/>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h3>Filters</h3>
        <button v-if="selectedFacets.length" @click="clearFilters" style="border: none; background: none; color: blue; cursor: pointer;">Clear</button>
      </div>
      <UluFacetsFilterLists :facets="facets" @facet-change="handleFacetChange" :max-visible="args.maxVisible" />
    </template>
    <template #main>
      <UluFacetsResults :items="displayItems">
        <template #item="{ item }">
          <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <p><small><strong>Author:</strong> {{ Array.isArray(item.author) ? item.author.join(', ') : item.author }}</small></p>
            <p><small><strong>Categories:</strong> {{ Array.isArray(item.category) ? item.category.join(', ') : item.category }}</small></p>
          </div>
        </template>
        <template #empty>
          <div style="padding: 2rem; text-align: center;">
            <p>No matching items found. Try clearing some filters.</p>
          </div>
        </template>
      </UluFacetsResults>
    </template>
  </UluFacetsSidebarLayout>
`;

const baseArgs = {
  items: mockItems,
  searchPlaceholder: 'Search articles...',
  maxVisible: 5,
};

// Story for the convenience layout component
export const Default = (args) => ({
  components: {
    UluFacetsFilterLists,
    UluFacetsResults,
    UluFacetsSearch,
    UluFacetsSort,
    UluFacetsSidebarLayout
  },
  setup: () => defaultSetup(args),
  template: storyTemplate
});
Default.args = {
  ...baseArgs,
  facetFields: mockFacetFields,
  countMode: 'none'
};

export const CountsSimple = (args) => ({
  ...Default(args),
  setup: () => defaultSetup(args),
});
CountsSimple.args = {
  ...baseArgs,
  facetFields: mockFacetFields,
  countMode: 'simple'
};
CountsSimple.storyName = 'Counts (Simple)';

export const CountsIntuitive = (args) => ({
  ...Default(args),
  setup: () => defaultSetup(args),
});
CountsIntuitive.args = {
  ...baseArgs,
  facetFields: mockFacetFields,
  countMode: 'intuitive'
};
CountsIntuitive.storyName = 'Counts (Intuitive)';

export const CountsIntuitiveAndLogic = (args) => ({
  ...Default(args),
  setup: () => defaultSetup(args),
});
CountsIntuitiveAndLogic.args = {
  ...baseArgs,
  facetFields: [
    { name: 'Category', uid: 'category', open: true, multiple: true, match: 'all' },
    { name: 'Author', uid: 'author', open: true }
  ],
  countMode: 'intuitive'
};
CountsIntuitiveAndLogic.storyName = 'Counts (Intuitive) with AND logic';
