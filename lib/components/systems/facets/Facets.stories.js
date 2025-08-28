import { ref } from 'vue';
import { useFacets } from './useFacets.js';
import UluFacetsFilters from './UluFacetsFilters.vue';
import UluFacetsResults from './UluFacetsResults.vue';
import UluFacetsSearch from './UluFacetsSearch.vue';
import UluFacetsSort from './UluFacetsSort.vue';
import UluFacetsSidebarLayout from './UluFacetsSidebarLayout.vue';
import { initialMockFacets, mockItems } from './_mock-data';

export default {};

const defaultSetup = (args) => {
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
};

// Story for the convenience layout component
export const SidebarLayout = (args) => ({
  components: {
    UluFacetsFilters,
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
        <UluFacetsFilters :facets="facets" @facet-change="onFacetChange" :max-visible="args.maxVisible" />
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
  initialFacets: initialMockFacets,
  items: mockItems,
  searchPlaceholder: 'Search articles...',
  maxVisible: 5,
};


// Story for building a custom layout
export const CustomLayout = (args) => ({
  components: {
    UluFacetsFilters,
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
                <UluFacetsFilters :facets="facets" @facet-change="onFacetChange" />
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
