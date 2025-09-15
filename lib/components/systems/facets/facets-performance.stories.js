import { ref } from 'vue';
import { useFacets } from './useFacets.js';
import { usePagination } from "../../../composables/usePagination.js";
import UluFacetsFilterAccordions from './UluFacetsFilterAccordions.vue';
import UluFacetsResults from './UluFacetsResults.vue';
import UluFacetsSearch from './UluFacetsSearch.vue';
import UluFacetsSort from './UluFacetsSort.vue';
import UluFacetsSidebarLayout from './UluFacetsSidebarLayout.vue';
import UluPager from '../../navigation/UluPager.vue';

export default {
  parameters: {
    // Disables Chromatic's snapshotting for this story
    // and its descendants.
    chromatic: { disableSnapshot: true },
  }
};

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
      <UluFacetsFilterAccordions :facets="facets" @facet-change="handleFacetChange" :max-visible="args.maxVisible" />
    </template>
    <template #main>
      <UluFacetsResults :items="paginatedItems">
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
      <UluPager
        v-if="totalPages > 1"
        :items="pagerItems"
        :current="currentPage"
        :ellipses="pagerEllipses"
        class="mt-4"
      />
    </template>
  </UluFacetsSidebarLayout>
`;


// --- Performance Test Story ---

const wordOptions = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'curabitur', 'vehicula',
  'vitae', 'sapien', 'nec', 'ultricies', 'mauris', 'pellentesque', 'egestas', 'enim', 'a', 'scelerisque'
];
const colorOptions = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Black', 'White', 'Gray', 'Brown'];
const animalOptions = ['Dog', 'Cat', 'Lion', 'Tiger', 'Bear', 'Elephant', 'Giraffe', 'Zebra', 'Monkey', 'Horse'];
const fruitOptions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon'];
const countryOptions = ['USA', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'UK', 'France', 'Germany', 'Japan', 'Australia'];
const materialOptions = ['Wood', 'Steel', 'Plastic', 'Cotton', 'Wool', 'Silk', 'Leather', 'Rubber', 'Glass', 'Ceramic'];

function generatePerfItems(count) {
  const items = [];
  for (let i = 0; i < count; i++) {
    const fruitCount = Math.floor(Math.random() * 3) + 1; // 1 to 3 fruits
    const fruits = new Set();
    while(fruits.size < fruitCount) {
      fruits.add(fruitOptions[Math.floor(Math.random() * fruitOptions.length)]);
    }

    items.push({
      id: i,
      title: `Item ${i + 1}`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae sapien nec ultricies.',
      facet1: wordOptions[Math.floor(Math.random() * wordOptions.length)],
      facet2: wordOptions[Math.floor(Math.random() * wordOptions.length)],
      facet3: wordOptions[Math.floor(Math.random() * wordOptions.length)],
      color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
      animal: animalOptions[Math.floor(Math.random() * animalOptions.length)],
      fruit: [...fruits],
      country: countryOptions[Math.floor(Math.random() * countryOptions.length)],
      material: materialOptions[Math.floor(Math.random() * materialOptions.length)],
    });
  }
  return items;
}

const perfTestFacetFields = [
  { name: 'Facet 1', uid: 'facet1', open: false },
  { name: 'Facet 2', uid: 'facet2', open: false },
  { name: 'Facet 3', uid: 'facet3', open: false },
  { name: 'Color', uid: 'color', open: false },
  { name: 'Animal', uid: 'animal', open: false },
  { name: 'Fruit (AND)', uid: 'fruit', open: true, multiple: true, match: 'all' },
  { name: 'Country', uid: 'country', open: false },
  { name: 'Material', uid: 'material', open: false },
];

export const PerformanceTestIntuitive = (args) => ({
  components: {
    UluFacetsFilterAccordions,
    UluFacetsResults,
    UluFacetsSearch,
    UluFacetsSort,
    UluFacetsSidebarLayout,
    UluPager
  },
  setup: () => defaultSetup(args),
  template: storyTemplate
});

PerformanceTestIntuitive.args = {
  items: generatePerfItems(2000),
  facetFields: perfTestFacetFields,
  countMode: 'intuitive',
  searchPlaceholder: 'Search 2000 items...',
  maxVisible: 10,
  itemsPerPage: 10,
  searchOptions: {
    keys: ['title', 'description', 'facet1', 'facet2', 'facet3', 'color', 'animal', 'fruit', 'country', 'material']
  }
};
PerformanceTestIntuitive.storyName = 'Performance (Intuitive, 2k items)';