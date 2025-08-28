import { ref, computed } from 'vue';
import Fuse from 'fuse.js';

const sortAlpha = items => {
  const getTitle = i => (i.title || i.label || "");
  return items.sort((a, b) => getTitle(a).localeCompare(getTitle(b)));
}
const defaultSorts = {
  az: { text: "A-Z", sort: sortAlpha },
  za: { text: "Z-A", sort: items => sortAlpha(items).reverse() },
};

/**
 * A composable for handling client-side faceted search, filtering, and sorting.
 * @param {import('vue').Ref<Array<Object>>} allItems - A Vue ref containing the full list of items to be processed.
 * @param {Object} options - Configuration options for the composable.
 * @param {Array} [options.initialFacets=[]] - The initial configuration for the facets.
 * @param {String} [options.initialSearchValue=''] - The initial value for the search input.
 * @param {String} [options.initialSortType='az'] - The initial sort type.
 * @param {Boolean} [options.noDefaultSorts=false] - If true, the default 'A-Z' and 'Z-A' sorts will not be included.
 * @param {Object} [options.extraSortTypes={}] - Additional sort types to be merged with the default ones.
 * @param {Object} [options.searchOptions={}] - Configuration options for Fuse.js.
 * @param {Function} [options.getItemFacet] - A function to retrieve facet information from an item.
 */
export function useFacets(allItems, options = {}) {
  const {
    initialFacets = [],
    initialSearchValue = '',
    initialSortType = 'az',
    noDefaultSorts = false,
    extraSortTypes = {},
    searchOptions: initialSearchOptions = {},
    getItemFacet = (item, uid) => item[uid]
  } = options;

  // --- State ---
  const facets = ref(createFacets(initialFacets));
  const searchValue = ref(initialSearchValue);
  const selectedSort = ref(initialSortType);

  // --- Helpers ---
  function createFacets(initial) {
    return initial.map(group => ({
      ...group,
      open: group.open || false,
      children: group.children.map(facet => ({
        ...facet,
        selected: facet.selected || false
      })),
      selectedCount: 0
    }));
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
      const { name, uid, children } = group;
      let count = 0;
      let added = false;
      if (children) {
        children.forEach(child => {
          if (child.selected) {
            ++count;
            if (!added) {
              selected.push({ uid, name, children: [] });
              added = true;
            }
            selected[selected.length - 1].children.push(child);
          }
        });
      }
      group.selectedCount = count;
    });
    return selected;
  });

  const filteredItems = computed(() => {
    if (!selectedFacets.value.length) {
      return allItems.value;
    }
    return allItems.value.filter(item => {
      return selectedFacets.value.some(group => {
        const cats = getItemFacet(item, group.uid);
        if (cats && cats.length) {
          return group.children.some(facet => cats.includes(facet.uid));
        }
        return false;
      });
    });
  });

  const searchedItems = computed(() => {
    if (!searchValue.value?.length) {
      return filteredItems.value;
    }
    const fuse = new Fuse(filteredItems.value, searchOptions.value);
    return fuse.search(searchValue.value).map(result => result.item);
  });

  const displayItems = computed(() => {
    const sortFn = sortTypes.value[selectedSort.value]?.sort;
    if (typeof sortFn !== 'function') {
      return searchedItems.value;
    }
    // The sort function should not mutate the original array
    return sortFn([...searchedItems.value]);
  });

  // --- Methods ---
  function clearFilters() {
    facets.value = createFacets(initialFacets);
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
    clearFilters
  };
}
