import { ref, computed, watch, nextTick } from 'vue';
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
 * @param {Object} [options.router] - Optional router configuration to sync state with URL.
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
    countMode = 'none', // 'none', 'simple', 'intuitive'
    router: routerOptions
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
      if (selectedChildren.length > 0) {
        selected.push({ ...group, children: selectedChildren });
      }
    });
    return selected;
  });

  const filteredItems = computed(() => {
    if (!selectedFacets.value.length) {
      return searchedItems.value;
    }
    const index = facetIndex.value;
    // This check is important because the index might not be ready on the first render.
    if (index.size === 0 && searchedItems.value.length > 0 && facetFields?.length > 0) {
      return [];
    }
    const allItemsSet = new Set(searchedItems.value.map((_, i) => i));
    const filteredIndexSet = getFilteredSetFromIndex(selectedFacets.value, index, allItemsSet);
    
    const result = [];
    // Using a direct loop for performance.
    for (const i of filteredIndexSet) {
      result.push(searchedItems.value[i]);
    }
    return result;
  });

  const displayItems = computed(() => {
    const sortFn = sortTypes.value[selectedSort.value]?.sort;
    if (typeof sortFn !== 'function') {
      return filteredItems.value;
    }
    return sortFn([...filteredItems.value]);
  });

  // --- Methods ---
  function clearFilters() {
    facets.value.forEach(group => {
      if (group.children) {
        group.children.forEach(child => child.selected = false);
      }
      group.selectedCount = 0;
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
      // Recalculate selectedCount for the group
      group.selectedCount = group.children.filter(c => c.selected).length;
    }
  }

  // --- Watchers ---
  watch(generatedFacets, (newGeneratedFacets) => {
    const newFacets = createFacets(initialFacets || newGeneratedFacets);
    // Calculate initial counts
    newFacets.forEach(group => {
      group.selectedCount = group.children.filter(c => c.selected).length;
    });
    facets.value = newFacets;
  }, { immediate: true });

  watch([selectedFacets, searchedItems], ([currentSelected, currentSearchedItems], [prevSelected, prevSearchedItems]) => {
    if (countMode === 'none' || !facets.value.length) return;

    // A simple optimization to prevent re-calculating counts if the actual data hasn't changed.
    if (currentSelected === prevSelected && currentSearchedItems === prevSearchedItems) return;

    if (countMode === 'simple') {
      const index = facetIndex.value;
      if (index.size === 0 && searchedItems.value.length > 0 && facetFields?.length > 0) {
        return; // Index not ready
      }
      const allItemsSet = new Set(searchedItems.value.map((_, i) => i));

      facets.value.forEach(group => {
        const otherSelected = currentSelected.filter(g => g.uid !== group.uid);
        
        // Get the set of indices for items filtered by OTHER groups
        const filteredByOthersSet = getFilteredSetFromIndex(otherSelected, index, allItemsSet);

        group.children.forEach(child => {
          const key = `${group.uid}:${child.uid}`;
          const childSet = index.get(key) || new Set();
          
          // The count is the size of the intersection between items that have this child facet
          // and items that match all the *other* selected groups.
          const intersection = intersectSets([filteredByOthersSet, childSet]);
          child.count = intersection.size;
        });
      });
    } else if (countMode === 'intuitive') {
      const index = facetIndex.value;
      if (index.size === 0 && searchedItems.value.length > 0 && facetFields?.length > 0) {
        // Index might not be ready yet.
        return;
      }
      const allItemsSet = new Set(searchedItems.value.map((_, i) => i));
      const currentFilteredSet = getFilteredSetFromIndex(currentSelected, index, allItemsSet);

      facets.value.forEach(group => {
        group.children.forEach(child => {
          const key = `${group.uid}:${child.uid}`;
          const childSet = index.get(key) || new Set();

          if (child.selected) {
            // --- Logic for already-selected facets (now performant) ---
            if (group.multiple) {
              // This is the intersection of currently filtered items and items with this facet value.
              const intersection = intersectSets([currentFilteredSet, childSet]);
              child.count = intersection.size;
            } else {
              // For single-select, the count is just the total number of filtered items.
              child.count = currentFilteredSet.size;
            }
          } else {
            // --- Logic for un-selected facets (now without deep clone) ---
            const tempSelected = [];
            for (const g of currentSelected) {
              tempSelected.push({ ...g, children: [...g.children] });
            }
      
            let groupInTemp = tempSelected.find(g => g.uid === group.uid);
      
            if (!groupInTemp) {
              groupInTemp = { ...group, children: [] };
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

  // --- Router Logic ---
  if (routerOptions?.router && routerOptions?.route) {
    const { router, route, defaultSort = 'az' } = routerOptions;

    const areFacetsReady = () => facets.value && facets.value.length > 0;

    const updateUrlFromState = () => {
      if (!areFacetsReady()) return;
  
      const query = { ...route.query };
  
      // Clean up params that we manage, preserving others
      delete query.sort;
      delete query.search;
      facets.value.forEach(group => delete query[group.uid]);
  
      // Add sort if it's not the default
      if (selectedSort.value && selectedSort.value !== defaultSort) {
        query.sort = selectedSort.value;
      }
  
      // Add search if present
      if (searchValue.value) {
        query.search = searchValue.value;
      }
  
      // Add selected facets
      selectedFacets.value.forEach(group => {
        if (group.children.length > 0) {
          query[group.uid] = group.children.map(c => c.uid).join(',');
        }
      });
      
      if (JSON.stringify(query) !== JSON.stringify(route.query)) {
        router.push({ query });
      }
    };

    const updateStateFromUrl = () => {
      const query = route.query;
  
      if (query.sort) {
        selectedSort.value = query.sort;
      }
      if (query.search) {
        searchValue.value = query.search;
      }
  
      const selectionsFromUrl = new Map();
      facets.value.forEach(group => {
        const selectedUids = query[group.uid] ? query[group.uid].split(',') : [];
        selectionsFromUrl.set(group.uid, new Set(selectedUids));
      });
  
      facets.value.forEach(group => {
        const shouldBeSelected = selectionsFromUrl.get(group.uid) || new Set();
        group.children.forEach(child => {
          const isSelected = child.selected;
          const shouldBe = shouldBeSelected.has(child.uid);
          if (isSelected !== shouldBe) {
            handleFacetChange({ groupUid: group.uid, facetUid: child.uid, selected: shouldBe });
          }
        });
      });
    };

    // Initial sync from URL
    const stopInitWatcher = watch(facets, (newFacets) => {
      if (newFacets && newFacets.length > 0) {
        updateStateFromUrl();
        stopInitWatcher();
      }
    }, { deep: true, immediate: true });

    // Sync state changes TO the URL
    watch([selectedSort, searchValue, selectedFacets], updateUrlFromState, { deep: true });

    // Sync URL changes TO the state
    watch(() => route.query, updateStateFromUrl);
  }

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
