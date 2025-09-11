import { ref, computed, watch } from 'vue';
import Fuse from 'fuse.js';

/**
 * Helper function to create a union of multiple Sets.
 * @param {Array<Set>} sets - An array of sets to unify.
 * @returns {Set} A new set containing all unique items from the input sets.
 */
function unionSets(sets) {
  const union = new Set();
  for (const set of sets) {
    for (const item of set) {
      union.add(item);
    }
  }
  return union;
}

/**
 * Helper function to create an intersection of multiple Sets.
 * @param {Array<Set>} sets - An array of sets to intersect.
 * @returns {Set} A new set containing only the items present in all input sets.
 */
function intersectSets(sets) {
  if (!sets || sets.length === 0) return new Set();
  // Start with a copy of the first set, which is an optimization if it's the smallest.
  // For better performance, sort sets by size and start with the smallest.
  const sortedSets = sets.sort((a, b) => a.size - b.size);
  const intersection = new Set(sortedSets[0]);
  for (let i = 1; i < sortedSets.length; i++) {
    for (const item of intersection) {
      if (!sortedSets[i].has(item)) {
        intersection.delete(item);
      }
    }
    // If intersection becomes empty, no need to continue.
    if (intersection.size === 0) break;
  }
  return intersection;
}

/**
 * Calculates the final set of item indices based on selected facets using the pre-built index.
 * @param {Array<Object>} selected - The array of selected facet groups.
 * @param {Map<String, Set>} index - The inverted index.
 * @param {Set<number>} allItemsSet - A set of all possible item indices.
 * @returns {Set} A set of indices for the items that match the filters.
 */
function getFilteredSetFromIndex(selected, index, allItemsSet) {
  if (!selected || selected.length === 0) {
    return allItemsSet;
  }

  const groupSets = selected.map(group => {
    const childSets = group.children.map(child => {
      const key = `${group.uid}:${child.uid}`;
      return index.get(key) || new Set();
    });

    // For 'all' (AND), intersect the sets within the group.
    if (group.match === 'all') {
      return intersectSets(childSets);
    }
    // For 'some' (OR), union the sets within the group.
    return unionSets(childSets);
  });

  // Intersect the results from each group.
  return intersectSets(groupSets);
}

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
 * @param {String} [options.countMode='none'] - The mode for calculating facet counts. Can be 'none', 'simple', or 'intuitive'.
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
    getSortValue = item => (item.title || item.label || ""),
    countMode = 'none' // 'none', 'simple', 'intuitive'
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

  // --- State ---
  const facets = ref([]);
  const searchValue = ref(initialSearchValue);
  const selectedSort = ref(initialSortType);

  // --- Computed ---
  const generatedFacets = computed(() => {
    if (!facetFields || !allItems.value?.length) return null;
    return generateInitialFacets(allItems.value, facetFields);
  });

  const sortTypes = computed(() => ({
    ...(noDefaultSorts ? {} : defaultSorts),
    ...extraSortTypes
  }));

  const facetIndex = computed(() => {
    const index = new Map();
    // Depend on searchedItems to re-build when search changes.
    const items = searchedItems.value;
    if (!items || !facetFields) return index;

    // Create a map of getters for efficiency inside the loop.
    const getters = new Map(facetFields.map(group => {
      const getValue = group.getValue || (item => item[group.uid]);
      return [group.uid, getValue];
    }));

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      for (const group of facetFields) {
        const getValue = getters.get(group.uid);
        const value = getValue(item);
        const values = Array.isArray(value) ? value : (value ? [value] : []);

        for (const v of values) {
          const key = `${group.uid}:${v}`;
          if (!index.has(key)) {
            index.set(key, new Set());
          }
          index.get(key).add(i);
        }
      }
    }
    return index;
  });

  const searchOptions = computed(() => ({
    shouldSort: true,
    keys: ["title", "label", "description", "author"],
    ...initialSearchOptions
  }));

  const searchedItems = computed(() => {
    if (!searchValue.value?.length) {
      return allItems.value;
    }
    const fuse = new Fuse(allItems.value, searchOptions.value);
    return fuse.search(searchValue.value).map(result => result.item);
  });

  const selectedFacets = computed(() => {
    const selected = [];
    facets.value.forEach((group) => {
      const selectedChildren = group.children.filter(child => child.selected);
      group.selectedCount = selectedChildren.length;
      if (selectedChildren.length > 0) {
        selected.push({ ...group, children: selectedChildren });
      }
    });
    return selected;
  });

  const filteredItems = computed(() => {
    return getFilteredItems(searchedItems.value, selectedFacets.value);
  });

  const displayItems = computed(() => {
    const sortFn = sortTypes.value[selectedSort.value]?.sort;
    if (typeof sortFn !== 'function') {
      return filteredItems.value;
    }
    return sortFn([...filteredItems.value]);
  });

  // --- Methods ---
  function getFilteredItems(items, selected) {
    if (!selected.length) return items;
    return items.filter(item => {
      return selected.every(group => {
        const itemFacetValues = getItemFacet(item, group.uid);
        if (itemFacetValues && itemFacetValues.length) {
          if (group.match === 'all') {
            return group.children.every(facet => itemFacetValues.includes(facet.uid));
          }
          return group.children.some(facet => itemFacetValues.includes(facet.uid));
        }
        return false;
      });
    });
  }

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

  // --- Watchers ---
  watch(generatedFacets, (newGeneratedFacets) => {
    facets.value = createFacets(initialFacets || newGeneratedFacets);
  }, { immediate: true });

  watch([selectedFacets, searchedItems], ([currentSelected, currentSearchedItems], [prevSelected, prevSearchedItems]) => {
    if (countMode === 'none' || !facets.value.length) return;

    // A simple optimization to prevent re-calculating counts if the actual data hasn't changed.
    if (currentSelected === prevSelected && currentSearchedItems === prevSearchedItems) return;

    if (countMode === 'simple') {
      facets.value.forEach(group => {
        const otherSelected = currentSelected.filter(g => g.uid !== group.uid);
        const itemsToCount = getFilteredItems(currentSearchedItems, otherSelected);
        group.children.forEach(child => {
          child.count = itemsToCount.filter(item => {
            const itemValues = getItemFacet(item, group.uid);
            return itemValues.includes(child.uid);
          }).length;
        });
      });
    } else if (countMode === 'intuitive') {
      const index = facetIndex.value;
      if (index.size === 0 && searchedItems.value.length > 0) {
        // Index might not be ready yet, or there are no facet fields.
        return;
      }
      const allItemsSet = new Set(searchedItems.value.map((_, i) => i));

      facets.value.forEach(group => {
        group.children.forEach(child => {
          if (child.selected) {
            // --- Logic for already-selected facets ---
            if (group.multiple) {
              // Count how many of the currently visible items match this facet value.
              child.count = filteredItems.value.filter(item => {
                const itemValues = getItemFacet(item, group.uid);
                return itemValues.includes(child.uid);
              }).length;
            } else {
              // If it's a single-select group, and this child is selected,
              // its count is simply the total number of currently visible items.
              child.count = filteredItems.value.length;
            }
          } else {
            // --- New performant logic for un-selected facets ---
            const tempSelected = JSON.parse(JSON.stringify(selectedFacets.value));
            let groupInTemp = tempSelected.find(g => g.uid === group.uid);

            if (!groupInTemp) {
              // The group object from `facets.value` has the `match` property.
              const originalGroup = facets.value.find(g => g.uid === group.uid);
              groupInTemp = { ...originalGroup, children: [] };
              tempSelected.push(groupInTemp);
            }

            if (group.multiple) {
              groupInTemp.children.push(child);
            } else {
              groupInTemp.children = [child];
            }
            
            const finalSet = getFilteredSetFromIndex(tempSelected, index, allItemsSet);
            child.count = finalSet.size;
          }
        });
      });
    }
  }, { deep: true, immediate: true });

  return {
    facets,
    searchValue,
    selectedSort,
    sortTypes,
    displayItems,
    selectedFacets,
    clearFilters,
    handleFacetChange
  };
}