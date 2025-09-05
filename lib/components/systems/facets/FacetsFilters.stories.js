import { ref } from 'vue';
import { useFacets } from './useFacets.js';
import UluFacetsFilterLists from './UluFacetsFilterLists.vue';
import UluFacetsFilterSelects from './UluFacetsFilterSelects.vue';
import UluFacetsFilterPopovers from './UluFacetsFilterPopovers.vue';
import { mockItems } from './_mock-data';

export default {};

const mockFacetFields = [
  { name: 'Category', uid: 'category', open: true, multiple: true },
  { name: 'Author', uid: 'author', open: true }
];

const defaultSetup = (args) => {
  const allItems = ref(args.items);
  const { 
    facets, 
    handleFacetChange 
  } = useFacets(allItems, {
    facetFields: args.facetFields,
  });

  return { 
    args, 
    facets, 
    handleFacetChange
  };
};

export const FilterLists = (args) => ({
  components: { UluFacetsFilterLists },
  setup: () => defaultSetup(args),
  template: `<UluFacetsFilterLists :facets="facets" @facet-change="handleFacetChange" />`
});
FilterLists.args = {
  items: mockItems,
  facetFields: mockFacetFields
};

export const FilterSelects = (args) => ({
  components: { UluFacetsFilterSelects },
  setup: () => defaultSetup(args),
  template: `<UluFacetsFilterSelects :facets="facets" @facet-change="handleFacetChange" />`
});
FilterSelects.args = {
  items: mockItems,
  facetFields: mockFacetFields
};

export const FilterPopovers = (args) => ({
  components: { UluFacetsFilterPopovers },
  setup: () => defaultSetup(args),
  template: `<UluFacetsFilterPopovers :facets="facets" @facet-change="handleFacetChange" />`
});
FilterPopovers.args = {
  items: mockItems,
  facetFields: mockFacetFields
};
