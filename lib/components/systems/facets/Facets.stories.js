import { ref } from 'vue';
import { useFacets } from './useFacets.js';
import UluFacetsFilterLists from './UluFacetsFilterLists.vue';
import UluFacetsResults from './UluFacetsResults.vue';
import UluFacetsSearch from './UluFacetsSearch.vue';
import UluFacetsSort from './UluFacetsSort.vue';
import UluFacetsSidebarLayout from './UluFacetsSidebarLayout.vue';
import UluFacetsActiveFilters from './UluFacetsActiveFilters.vue';
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
    countMode: args.countMode,
    searchOptions: args.searchOptions
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
      <h3>Filters</h3>
      <UluFacetsFilterLists :facets="facets" @facet-change="handleFacetChange" :max-visible="args.maxVisible" />
    </template>
    <template #main>
      <UluFacetsActiveFilters 
        :selected-facets="selectedFacets" 
        @facet-change="handleFacetChange"
        @clear-filters="clearFilters"
      />
      <UluFacetsResults :items="displayItems">
        <template #item="{ item }">
          <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <p><small><strong>Author:</strong> {{ Array.isArray(item.author) ? item.author.join(', ') : item.author }}</small></p>
            <p><small><strong>Categories:</strong> {{ Array.isArray(item.category) ? item.category.join(', ') : item.category }}</small></p>
            <p v-if="item.animal"><small><strong>Animal:</strong> {{ item.animal }}</small></p>
            <p v-if="item.color"><small><strong>Color:</strong> {{ item.color }}</small></p>
            <p v-if="item.fruit"><small><strong>Fruit:</strong> {{ item.fruit.join(', ') }}</small></p>
            <p v-if="item.country"><small><strong>Country:</strong> {{ item.country }}</small></p>
            <p v-if="item.material"><small><strong>Material:</strong> {{ item.material }}</small></p>
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
    UluFacetsSidebarLayout,
    UluFacetsActiveFilters
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

export const WithInitialFilters = (args) => ({
  components: {
    UluFacetsFilterLists,
    UluFacetsResults,
    UluFacetsSearch,
    UluFacetsSort,
    UluFacetsSidebarLayout,
    UluFacetsActiveFilters
  },
  setup: () => {
    const setup = defaultSetup(args);
    
    // Pre-select some filters
    setup.handleFacetChange({ groupUid: 'category', facetUid: 'cat2', selected: true });
    setup.handleFacetChange({ groupUid: 'author', facetUid: 'jane-doe', selected: true });

    return setup;
  },
  template: storyTemplate
});
WithInitialFilters.args = {
  ...baseArgs,
  facetFields: mockFacetFields,
  countMode: 'intuitive'
};
WithInitialFilters.storyName = 'With Initial Filters';

