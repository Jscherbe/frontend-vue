<template>
  <div class="FacetView">
    <div class="FacetView__header" :class="classes.header">
      <slot name="header" :count="filteredItems.length"></slot>
      <div class="FacetView__header-actions" :class="classes.headerActions">
        <button 
          @click="toggleFilterVisibility"
          :class="classes.buttonFilterToggle" 
          :aria-controls="filterId"
          :aria-expanded="filtersHidden ? 'false' : 'true'" 
          type="button"
        >
          <slot name="buttonFilterToggle" :hidden="filtersHidden">
            {{ filtersHidden ? 'Show' : 'Hide' }} Filters
          </slot>
        </button>
        <button 
          v-if="selectedFacets.length"
          @click="clearFilters" 
          :class="classes.buttonClearFilters" 
          type="button"
        >
          <slot name="buttonClearFilters">
            Clear Filters
          </slot>
        </button>
        <div :class="classes.sortForm">
          <label 
            :for="sortId" 
            :class="classes.sortFormLabel"
          >Sort:</label>
          <select 
            v-model="selectedSort" 
            :id="sortId" 
            :class="classes.sortFormSelect"
          >
            <option v-for="(item, key) in sortTypes" :value="key" :key="key">
              {{ item.text }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="FacetView__body">
      <transition name="FacetViewFade" mode="out-in">
        <div 
          v-show="!filtersHidden"
          class="FacetView__filters"
          :id="filterId" 
          :class="{ 'FacetView__filters--hidden' : filtersHidden }"
        >
          <UluFacetsSearch 
            :classes="classes"
            :initialValue="initialSearchValue"
            :placeholder="searchPlaceholder"
            v-model="searchValue"
          />
          <UluCollapsibleRegion 
            class="FacetView__group"
            :class="classes.group"
            :classToggle="['FacetView__group-toggle', classes.groupToggle]"
            :classContent="['FacetView__group-content', classes.groupContent]"
            v-for="group in facets"
            :key="group.uid"
            :group="group"
            :startOpen="group.open"
            :clickOutsideCloses="false"
            :closeOnEscape="false"
            :transitionHeight="true"
          >
            <template #toggle="{ isOpen }">
              <slot name="groupToggle" :group="group" :isOpen="isOpen">
                {{ group.name }}
              </slot>
            </template>
            <template #default>
              <UluFacetsList 
                :children="group.children.slice(0, maxVisible)"
                :groupUid="group.uid"
                :classFacet="classes.facet"
              />
              <UluCollapsibleRegion 
                v-if="group.children.length > maxVisible"
                class="FacetView__more-facets"
                :class="classes.moreFacets"
                :clickOutsideCloses="false"
                :closeOnEscape="false"
                :transitionHeight="true"
              >
                <template #toggle="{ isOpen }">
                  {{ isOpen ? "- Less" : "+ More" }}
                </template>
                <template #default>
                  <UluFacetsList 
                    :children="group.children.slice(maxVisible)"
                    :groupUid="group.uid"
                    :classFacet="classes.facet"
                  />
                </template>
              </UluCollapsibleRegion>
            </template>
          </UluCollapsibleRegion>
        </div>
      </transition>
      <transition name="FacetViewFade" mode="out-in">
        <ul
          class="FacetView__results"
          :class="classes.results"
          :key="filterIteration"
          v-if="resultsVisible && filteredItems.length"
        >

          <li
            class="FacetView__results-item"
            :class="classes.resultsItem"
            v-for="(item, index) in filteredItems"
            :key="index"
          >
            <slot name="item" :item="item" :index="index"></slot>
          </li>
        </ul>
        <div v-else class="FacetView__empty">
          <slot name="empty">
            No Results Found
          </slot>
        </div>
      </transition>
      <!-- <div class="FacetView__pagination"></div> -->
    </div>
  </div>
</template>

<script>
  import Fuse from 'fuse.js';
  import UluFacetsList from "./UluFacetsList.vue";
  import UluFacetsSearch from "./UluFacetsSearch.vue";
  import UluCollapsibleRegion from "../../collapsible/UluCollapsibleRegion.vue";

  let idCounter = 0;
  const sortAlpha = items => {
    const getTitle = i => (i.title || i.label || "");
    return items.sort((a, b) => getTitle(a).localeCompare(getTitle(b)));
  }
  const defaultSorts = {
    az: { text: "A-Z", sort: sortAlpha },
    za: { text: "Z-A", sort: items => sortAlpha(items).reverse() },
  };
  export default {
    name: 'FacetView',
    components: { 
      UluCollapsibleRegion, 
      UluFacetsList,
      UluFacetsSearch
    },
    props: {
      /**
       * Options passed to fuse js for search feature
       */
      searchOptions: {
        type: Object,
        default: () => ({
          // isCaseSensitive: false,
          // includeScore: false,
          shouldSort: true,
          // includeMatches: false,
          // findAllMatches: false,
          // minMatchCharLength: 1,
          // location: 0,
          // threshold: 0.6,
          // distance: 100,
          // useExtendedSearch: false,
          // ignoreLocation: false,
          // ignoreFieldNorm: false,
          // fieldNormWeight: 1,
          keys: [
            "title",
            "label",
            "description",
            "author"
          ]
        })
      },
      initialFiltersHidden: Boolean,
      searchPlaceholder: String,
      /**
       * Array of facet configurations
       */
      initialFacets: {
        required: true,
        type: Array
      },
      initialSearchValue: String,
      classes: {
        type: Object,
        required: false,
        default: () => ({})
      },
      /**
       * Maximum facets shown per group before truncating
       */
      maxVisible: {
        type: Number,
        default: 5
      },
      /**
       * Array of objects of the items to display
       */
      items: {
        required: true,
        type: Array
      },
      /**
       * Provides a way to find categories for each facet
       * @param {Object} item An item to lookup the facet/category info for
       * @param {String} uid The facet's uid (the categories uid) to return a value, value should be an array of facet (child) keys
       */
      getItemFacet: {
        type: Function,
        default: (item, uid) => item[uid]
      },
      /**
       * Return the value for an item to use for sorting alphabetically
       */
      getItemSortAlpha: {
        type: Function,
        default: item => (item.title || item.label || "")
      },
      initialSortType: {
        type: String,
        default: "az"
      },
      noDefaultSorts: Boolean,
      extraSortTypes: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      const { 
        initialFiltersHidden, 
        initialSearchValue,
        noDefaultSorts,
        initialSortType,
        extraSortTypes
      } = this;
      return {
        filterId: `facet-filters-${ ++idCounter }`,
        sortId: `facet-sort-${ ++idCounter }`,
        selectedSort: initialSortType,
        sortTypes: {
          ...(noDefaultSorts ? {} : defaultSorts),
          ...extraSortTypes
        },
        facets: this.createFacets(), // Copy of users facet configs
        filtersHidden: initialFiltersHidden || false,
        searchValue: initialSearchValue || null,
        resultsVisible: true,
        filterIteration: 0,
      }
    },
    computed: {
      /**
       * Returns an array of groups with children that are active
       */
      selectedFacets() {
        const selected = [];
        this.facets.forEach((group) => {
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
      },
      filteredItems() {
        this.resultsVisible = false;
        const { getItemFacet, selectedFacets, sortTypes, selectedSort } = this;
        const sort = sortTypes[selectedSort].sort;

        const filteredItems = this.items.filter(item => {
          if (selectedFacets.length) {
            return selectedFacets.some(group => {
              let matched;
              const cats = getItemFacet(item, group.uid);
              if (cats && cats.length) {
                matched = group.children.some(facet => cats.includes(facet.uid));
              }
              return matched;
            });
          // No filters are applied
          } else {
            return true;
          }
        });
        // Increment counter (used for transitions)
        // this.filterIteration = filterIteration + 1;
        const newItems = sort(this.search(filteredItems));
        // this.resultsVisible = false;
        this.$nextTick(() => {
          this.resultsVisible = true;
          this.filterIteration = this.filterIteration + 1;
          //  this.$nextTick(() => this.resultsVisible = true);
        });
        return newItems;
      }
    },
    methods: {
      /**
       * Resets all active filters to user's initial
       */
      clearFilters() {
        this.facets = this.createFacets();
      },
      /**
       * Maps users initial facets to the local facet array used in this component
       */
      createFacets() {
        return this.initialFacets.map(group => {
          const children =  group.children.map(facet => ({
            ...facet,
            selected: facet.selected || false
          }));
          return {
            ...group,
            open: group.open || false,
            children,
            selectedCount: 0
          };
        })
      },
      /**
       * Search applied to an already filtered batch of items
       */
      search(items) {
        const { searchValue, searchOptions } = this;
        if (!searchValue?.length) return items;
        const fuse = new Fuse(items, searchOptions);
        const results = fuse.search(searchValue);
        return results.map(result => result.item);
      },
      toggleFilterVisibility() {
        this.filtersHidden = !this.filtersHidden;
      }
    }
  }
</script>

<style lang="scss">
  .FacetView__more-facets {
    display: flex;
    flex-direction: column;
    &.UluCollapsibleRegion--open,
    &.UluCollapsibleRegion--transitioning {
      .UluCollapsibleRegion__content {
        order: -1;
      }
    }
  }
  .FacetViewFade-enter-active,
  .FacetViewFade-leave-active {
    transition: opacity 0.25s ease;
  }

  .FacetViewFade-enter-from,
  .FacetViewFade-leave-to {
    opacity: 0;
  }
</style>