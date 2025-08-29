import { ref } from 'vue';
import { useFacets } from './useFacets.js';
import { usePagination } from "../../../composables/usePagination.js";
import UluFacetsFilters from './UluFacetsFilters.vue';
import UluFacetsResults from './UluFacetsResults.vue';
import UluFacetsSearch from './UluFacetsSearch.vue';
import UluFacetsSort from './UluFacetsSort.vue';
import UluFacetsSidebarLayout from './UluFacetsSidebarLayout.vue';
import UluPager from '../../navigation/UluPager.vue';
import { mockItems } from './_mock-data';

export default {
  title: 'Systems/Facets/Paginated',
  parameters: {
    // Disables Chromatic's snapshotting for this story
    // and its descendants.
    chromatic: { disableSnapshot: true },
  }
};

// Define facet fields for automatic generation
const mockFacetFields = [
  { name: 'Category', uid: 'category', open: true },
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
    initialSortType: args.initialSortType
  });

  const {
    currentPage,
    totalPages,
    paginatedItems,
    pagerItems,
    pagerEllipses
  } = usePagination(displayItems, args.itemsPerPage);

  return { 
    args, 
    facets, 
    searchValue, 
    selectedSort, 
    sortTypes, 
    displayItems, 
    selectedFacets, 
    clearFilters, 
    handleFacetChange,
    currentPage,
    totalPages,
    paginatedItems,
    pagerItems,
    pagerEllipses
  };
};

// Story for the convenience layout component
export const SidebarLayout = (args) => ({
  components: {
    UluFacetsFilters,
    UluFacetsResults,
    UluFacetsSearch,
    UluFacetsSort,
    UluFacetsSidebarLayout,
    UluPager
  },
  setup: () => defaultSetup(args),
  template: `
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
        <UluFacetsFilters :facets="facets" @facet-change="handleFacetChange" :max-visible="args.maxVisible" />
      </template>
      <template #main>
        <UluFacetsResults :items="paginatedItems">
          <template #item="{ item }">
            <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </template>
          <template #empty>
            <div style="padding: 2rem; text-align: center;">
              <p>No matching items found. Try clearing some filters.</p>
            </div>
          </template>
        </UluFacetsResults>
        <UluPager
          v-if="totalPages > 1"
          :items="pagerItems"
          :current="currentPage"
          :ellipses="pagerEllipses"
          class="mt-4"
        />
      </template>
    </UluFacetsSidebarLayout>
  `
});
SidebarLayout.args = {
  facetFields: mockFacetFields,
  items: mockItems,
  searchPlaceholder: 'Search articles...',
  maxVisible: 5,
  itemsPerPage: 5
};