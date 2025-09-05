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
    handleFacetChange // Use new handler
  } = useFacets(allItems, {
    facetFields: args.facetFields, // Use facetFields
    extraSortTypes: args.extraSortTypes,
    initialSortType: args.initialSortType
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
    handleFacetChange // Pass new handler
  };
};

// Story for the convenience layout component
export const SidebarLayout = (args) => ({
  components: {
    UluFacetsFilterLists,
    UluFacetsResults,
    UluFacetsSearch,
    UluFacetsSort,
    UluFacetsSidebarLayout
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
        <UluFacetsFilterLists :facets="facets" @facet-change="handleFacetChange" :max-visible="args.maxVisible" />
      </template>
      <template #main>
        <UluFacetsResults :items="displayItems">
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
      </template>
    </UluFacetsSidebarLayout>
  `
});
SidebarLayout.args = {
  facetFields: mockFacetFields, // use facetFields
  items: mockItems,
  searchPlaceholder: 'Search articles...',
  maxVisible: 5,
};


// Story for building a custom layout
export const CustomLayout = (args) => ({
  components: {
    UluFacetsFilterLists,
    UluFacetsResults,
    UluFacetsSearch,
    UluFacetsSort,
  },
  setup: () => defaultSetup(args),
  template: `
    <div>
        <h1>My Custom Layout</h1>
        <div style="display: grid; grid-template-columns: 1fr 3fr; gap: 2rem;">
            <div>
                <h3>Filters</h3>
                <UluFacetsSearch v-model="searchValue" :placeholder="args.searchPlaceholder" />
                <hr/>
                <UluFacetsFilterLists :facets="facets" @facet-change="handleFacetChange" />
            </div>
            <div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h3>Results ({{displayItems.length}})</h3>
                    <UluFacetsSort v-model="selectedSort" :sort-types="sortTypes" />
                </div>
                <hr/>
                <UluFacetsResults :items="displayItems">
                    <template #item="{ item }">
                        <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
                            <h4>{{ item.title }}</h4>
                            <p>{{ item.description }}</p>
                        </div>
                    </template>
                </UluFacetsResults>
            </div>
        </div>
    </div>
    `
});
CustomLayout.args = { ...SidebarLayout.args };

export const CustomClasses = (args) => ({
  components: {
    UluFacetsFilterLists,
    UluFacetsResults,
    UluFacetsSearch,
    UluFacetsSort,
    UluFacetsSidebarLayout
  },
  setup: () => defaultSetup(args),
  template: `
    <style>
      .custom-list-class {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
      .custom-item-class {
        border: 2px solid red;
        padding: 1rem;
      }
    </style>
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
        <UluFacetsResults :items="displayItems" :classes="args.classes">
          <template #item="{ item }">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </template>
          <template #empty>
            <div style="padding: 2rem; text-align: center;">
              <p>No matching items found. Try clearing some filters.</p>
            </div>
          </template>
        </UluFacetsResults>
      </template>
    </UluFacetsSidebarLayout>
  `
});
CustomClasses.args = {
  ...SidebarLayout.args,
  classes: {
    list: 'custom-list-class',
    item: 'custom-item-class'
  }
};
