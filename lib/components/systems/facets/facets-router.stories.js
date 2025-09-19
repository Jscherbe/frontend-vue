import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useFacets } from './useFacets.js';
import UluFacetsFilterAccordions from './UluFacetsFilterAccordions.vue';
import UluFacetsResults from './UluFacetsResults.vue';
import UluFacetsSearch from './UluFacetsSearch.vue';
import UluFacetsSort from './UluFacetsSort.vue';
import UluFacetsSidebarLayout from './UluFacetsSidebarLayout.vue';
import UluFacetsActiveFilters from './UluFacetsActiveFilters.vue';
import { mockItems } from './_mock-data';

export default {
  parameters: {
    // Disables Chromatic's snapshotting for this story
    // and its descendants.
    chromatic: { disableSnapshot: true },
  }
};

// Define facet fields for automatic generation
const mockFacetFields = [
  { name: 'Category', uid: 'category', open: true, multiple: true },
  { name: 'Author', uid: 'author', open: true }
];

const routerSetup = (args) => {
  const allItems = ref(args.items);
  
  const router = useRouter();
  const route = useRoute();

  const facetsState = useFacets(allItems, {
    facetFields: args.facetFields,
    extraSortTypes: args.extraSortTypes,
    initialSortType: args.initialSortType,
    countMode: args.countMode,
    searchOptions: args.searchOptions,
    router: {
      router,
      route,
      defaultSort: args.initialSortType
    }
  });

  return {
    args,
    route,
    ...facetsState
  };
};

const storyTemplate = `
  <div>
    <div style="padding: 1rem; background: #f3f3f3; border-radius: 4px; margin-bottom: 2rem;">
      <p>This story demonstrates how <code>useFacets</code> can sync its state with the URL query parameters.</p>
      <p>Interact with the filters, search, and sort below, and watch the simulated URL update.</p>
      <div style="background: #e0e0e0; padding: 1rem; border-radius: 4px; margin-top: 1rem; font-family: monospace; word-break: break-all;">
        <strong>Simulated URL:</strong> {{ route.fullPath }}
      </div>
    </div>
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
        <UluFacetsFilterAccordions :facets="facets" @facet-change="handleFacetChange" :max-visible="args.maxVisible" />
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
  </div>
`;

const baseArgs = {
  items: mockItems,
  searchPlaceholder: 'Search articles...',
  maxVisible: 5,
  initialSortType: 'az'
};

export const Default = (args) => ({
  components: {
    UluFacetsFilterAccordions,
    UluFacetsResults,
    UluFacetsSearch,
    UluFacetsSort,
    UluFacetsSidebarLayout,
    UluFacetsActiveFilters
  },
  setup: () => routerSetup(args),
  template: storyTemplate
});
Default.args = {
  ...baseArgs,
  facetFields: mockFacetFields,
  countMode: 'intuitive'
};
