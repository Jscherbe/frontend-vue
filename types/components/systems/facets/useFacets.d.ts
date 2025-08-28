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
export function useFacets(allItems: import("vue").Ref<Array<any>>, options?: {
    initialFacets?: any[];
    facetFields?: any[];
    initialSearchValue?: string;
    initialSortType?: string;
    noDefaultSorts?: boolean;
    extraSortTypes?: any;
    searchOptions?: any;
    getItemFacet?: Function;
    getSortValue?: Function;
}): {
    facets: import("vue").Ref<any, any>;
    searchValue: import("vue").Ref<string, string>;
    selectedSort: import("vue").Ref<string, string>;
    sortTypes: import("vue").ComputedRef<any>;
    displayItems: import("vue").ComputedRef<any>;
    selectedFacets: import("vue").ComputedRef<any[]>;
    clearFilters: () => void;
    handleFacetChange: ({ groupUid, facetUid, selected }: {
        groupUid: any;
        facetUid: any;
        selected: any;
    }) => void;
};
//# sourceMappingURL=useFacets.d.ts.map