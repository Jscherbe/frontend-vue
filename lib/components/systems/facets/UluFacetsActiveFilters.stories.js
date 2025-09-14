import { ref } from 'vue';
import { useFacets } from './useFacets.js';
import UluFacetsActiveFilters from './UluFacetsActiveFilters.vue';
import UluFacetsFilterLists from './UluFacetsFilterLists.vue';
import { mockItems } from './_mock-data';

export default {};

const mockFacetFields = [
  { name: 'Category', uid: 'category', open: true, multiple: true },
  { name: 'Author', uid: 'author', open: true }
];

export const Default = (args) => ({
  components: { UluFacetsActiveFilters, UluFacetsFilterLists },
  setup() {
    const allItems = ref(mockItems);
    const { facets, selectedFacets, handleFacetChange, clearFilters } = useFacets(allItems, {
      facetFields: mockFacetFields,
    });

    // Pre-select some facets for demonstration
    handleFacetChange({ groupUid: 'category', facetUid: 'cat1', selected: true });
    handleFacetChange({ groupUid: 'author', facetUid: 'john-smith', selected: true });

    return {
      args,
      facets,
      selectedFacets,
      handleFacetChange,
      clearFilters
    };
  },
  template: `
    <div>
      <p>This component displays active filters and allows removing them.</p>
      <UluFacetsActiveFilters 
        :selected-facets="selectedFacets" 
        @facet-change="handleFacetChange"
        @clear-filters="clearFilters"
      />
      <hr style="margin: 2rem 0;">
      <p>Interact with the filters below to see the active filters change.</p>
      <UluFacetsFilterLists :facets="facets" @facet-change="handleFacetChange" />
    </div>
  `,
});
