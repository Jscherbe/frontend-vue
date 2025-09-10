import { ref, computed, watch } from 'vue';
import Fuse from 'fuse.js';

/**
 * Generates facet groups and their possible values from a list of items.
 * @param {Array<Object>} allItems - The full list of items.
 * @param {Array<Object>} facetFields - Configuration for which fields to create facets from.
 * @returns {Array<Object>} The generated facet structure.
 */
function generateInitialFacets(allItems, facetFields) {
  if (!facetFields || !Array.isArray(facetFields)) return [];
  return facetFields.map(group => {
    const allValues = new Set();
    const getValue = group.getValue || (item => item[group.uid]);

    allItems.forEach(item => {
      const value = getValue(item);
      if (Array.isArray(value)) {
        value.forEach(v => v && allValues.add(v));
      } else if (value) {
        allValues.add(value);
      }
    });

    const getLabel = group.getLabel || (value => value);

    const children = [...allValues].map(value => ({
      uid: value,
      label: getLabel(value),
      selected: false
    }));

    // Sort by label, alphabetically
    children.sort((a, b) => String(a.label).localeCompare(String(b.label)));

    return {
      ...group,
      children
    };
  });
}


/**
 * A composable for handling client-side faceted search, filtering, and sorting.
 * @param {import('vue').Ref<Array<Object>>} allItems - A Vue ref containing the full list of items to be processed.
 * @param {Object} options - Configuration options for the composable.
 * @param {Array} [options.initialFacets] - The initial configuration for the facets. Can be generated automatically if `facetFields` is provided.
 * @param {Array} [options.facetFields] - A simpler configuration to automatically generate facets from items. Each item can have `uid`, `name`, `open`, `getValue` and `getLabel`.
 * @param {String} [options.initialSearchValue=''] - The initial value for the search input.
 * @param {String} [options.initialSortType='az'] - The initial sort type.
 * @param {Boolean} [options.noDefaultSorts=false] - If true, the default 'A-Z' and 'Z-A' sorts will not be included.
 * @param {Object} [options.extraSortTypes={}] - Additional sort types to be merged with the default ones.
 * @param {Object} [options.searchOptions={}] - Configuration options for Fuse.js.
 * @param {Function} [options.getItemFacet] - A function to retrieve facet information from an item. Should always return an array of values.
 * @param {Function} [options.getSortValue] - A function to get the value to sort by from an item.
 */
export function useFacets(allItems, options = {}) {
  const defaultGetItemFacet = (item, uid) => {
    const value = item[uid];
    if (value === null || typeof value === 'undefined') return [];
    return Array.isArray(value) ? value : [value];
  };

  const {
    initialFacets,
    facetFields,
    initialSearchValue = '',
    initialSortType = 'az',
    noDefaultSorts = false,
    extraSortTypes = {},
    searchOptions: initialSearchOptions = {},
    getItemFacet = defaultGetItemFacet,
    getSortValue = item => (item.title || item.label || "")
  } = options;

  const sortAlpha = items => {
    return items.sort((a, b) => {
      const va = getSortValue(a);
      const vb = getSortValue(b);
      if (va && vb) {
        return String(va).localeCompare(String(vb));
      } else {
        return va ? -1 : vb ? 1 : 0;
      }
    });
  }
  const defaultSorts = {
    az: { text: "A-Z", sort: sortAlpha },
    za: { text: "Z-A", sort: items => sortAlpha(items).reverse() },
  };

  // --- Helpers ---
  function createFacets(initial) {
    return (initial || []).map(group => ({
      ...group,
      open: group.open || false,
      children: group.children.map(facet => ({
        ...facet,
        selected: facet.selected || false
      })),
      selectedCount: 0
    }));
  }

  const generatedFacets = computed(() => {
    if (!facetFields || !allItems.value?.length) return null;
    return generateInitialFacets(allItems.value, facetFields);
  });

  // --- State ---
  const facets = ref(createFacets(initialFacets || generatedFacets.value));
  const searchValue = ref(initialSearchValue);
  const selectedSort = ref(initialSortType);

  // If using facetFields, watch for changes in items and regenerate facets
  if (facetFields && !initialFacets) {
    watch(generatedFacets, (newGeneratedFacets) => {
      facets.value = createFacets(newGeneratedFacets);
    });
  }

  // --- Computed ---
  const sortTypes = computed(() => ({
    ...(noDefaultSorts ? {} : defaultSorts),
    ...extraSortTypes
  }));

  const searchOptions = computed(() => ({
    shouldSort: true,
    keys: ["title", "label", "description", "author"],
    ...initialSearchOptions
  }));

  const selectedFacets = computed(() => {
    const selected = [];
    facets.value.forEach((group) => {
      const selectedChildren = group.children.filter(child => child.selected);
      
      group.selectedCount = selectedChildren.length;

      if (selectedChildren.length > 0) {
        // copy group properties and overwrite children
        selected.push({ ...group, children: selectedChildren });
      }
    });
    return selected;
  });

  const searchedItems = computed(() => {
    if (!searchValue.value?.length) {
      return allItems.value;
    }
    const fuse = new Fuse(allItems.value, searchOptions.value);
    return fuse.search(searchValue.value).map(result => result.item);
  });

  const filteredItems = computed(() => {
    if (!selectedFacets.value.length) {
      return searchedItems.value;
    }
    return searchedItems.value.filter(item => {
      // An item must match every active facet group
      return selectedFacets.value.every(group => {
        const itemFacetValues = getItemFacet(item, group.uid);
        if (itemFacetValues && itemFacetValues.length) {
          // If group.match is 'all', all selected facets in this group must match (AND)
          if (group.match === 'all') {
            return group.children.every(facet => itemFacetValues.includes(facet.uid));
          }
          // Otherwise, any selected facet in this group can match (OR)
          return group.children.some(facet => itemFacetValues.includes(facet.uid));
        }
        return false;
      });
    });
  });

  const displayItems = computed(() => {
    const sortFn = sortTypes.value[selectedSort.value]?.sort;
    if (typeof sortFn !== 'function') {
      return filteredItems.value;
    }
    // The sort function should not mutate the original array
    return sortFn([...filteredItems.value]);
  });

  watch([searchedItems, selectedFacets], () => {
    if (!facets.value) return;
    facets.value.forEach(group => {
      const otherSelectedFacets = selectedFacets.value.filter(g => g.uid !== group.uid);

      let itemsToCount = searchedItems.value;
      if (otherSelectedFacets.length > 0) {
        itemsToCount = itemsToCount.filter(item => {
          return otherSelectedFacets.every(otherGroup => {
            const itemFacetValues = getItemFacet(item, otherGroup.uid);
            if (itemFacetValues && itemFacetValues.length) {
              if (otherGroup.match === 'all') {
                return otherGroup.children.every(facet => itemFacetValues.includes(facet.uid));
              }
              return otherGroup.children.some(facet => itemFacetValues.includes(facet.uid));
            }
            return false;
          });
        });
      }

      group.children.forEach(child => {
        child.count = itemsToCount.filter(item => {
          const itemValues = getItemFacet(item, group.uid);
          return itemValues.includes(child.uid);
        }).length;
      });
    });
  }, { immediate: true, deep: true });

  // --- Methods ---
  function clearFilters() {
    facets.value.forEach(group => {
      if (group.children) {
        group.children.forEach(child => child.selected = false);
      }
    });
  }

  function handleFacetChange({ groupUid, facetUid, selected }) {
    const group = facets.value.find(g => g.uid === groupUid);
    if (group) {
      // For single-select groups, deselect other options when a new one is selected.
      if (!group.multiple && selected) {
        group.children.forEach(f => {
          if (f.uid !== facetUid) {
            f.selected = false;
          }
        });
      }
      const facet = group.children.find(f => f.uid === facetUid);
      if (facet) {
        facet.selected = selected;
      }
    }
  }

  return {
    // State
    facets,
    searchValue,
    selectedSort,
    sortTypes,

    // Computed
    displayItems,
    selectedFacets,

    // Methods
    clearFilters,
    handleFacetChange
  };
}