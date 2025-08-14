<template>
  <div class="FilterList">
    <div class="FilterList__header">
      <slot name="label" :count="filteredItems.length">
        <h2 class="FilterList__title">Results {{ filteredItems.length }}</h2>
      </slot>
      <div class="FilterList__actions" :class="classes.headerActions">
        <div 
          class="FilterList__dropdown FilterList__dropdown--filter"
          v-for="(group, index) in filters"
          :key="index"
        >
          <button class="FilterList__dropdown-toggle" type="button">
            <slot name="buttonFilter">
              {{ group.name }}
            </slot>
          </button>
          <!-- Todo actuqal dropdown (could use select) -->
        </div>
        <div class="FilterList__action FilterList__action--sort">
          <button class="FilterList__action FilterList__action--sort" type="button">
            <slot name="buttonSort">
              Sort By
            </slot>
          </button>
        </div>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <ul 
        class="FilterList__results" 
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
          <slot name="item" :item="item" :index="index">
            <strong>{{ item.title || item.label }}</strong>
          </slot>
        </li>
      </ul>
      <div v-else class="FilterList__empty">
        <slot name="empty">
          No Results Found
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'FilterList',
    props: {
      items: {
        type: Array,
        required: true
      },
      initialFilters: {
        type: Array,
        required: false,
        default: () => []
      },
      classes: {
        type: Object,
        required: false,
        default: () => ({})
      },
      /**
       * Provides a way to find categories for each filter
       * @param {Object} item An item to lookup the facet/category info for
       * @param {String} uid The filter's uid (the categories uid) to return a value, value should be an array of facet (child) keys
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
      }
    },
    data() {

      return {
        /**
         * Map original user filters to working 'filters' used internally
         */
        filters: this.initialFilters.map(group => {
          // Remove empty
          if (!group.children?.length) {
            return false;
          };
          // console.log('group:\n', group.children);
          const children = group.children.map(child => ({
            ...child,
            selected: child.selected || false
          }));
          return { ...group, children };
        }).filter(i => i),
        /**
         * Counter so that vue will transition the results
         */
        filterIteration: 0,
        resultsVisible: true,
      }
    },
    computed: {
      filteredItems() {
        /* eslint-disable  */
        /**
         * @todo Need to think about how to fix the error (don't mutate things in computed property, unsure)
         */
        this.resultsVisible = false;

        /**
         * @todo Need to actually implement the filtering here
         */
        this.$nextTick(() => {
          this.resultsVisible = true;
          this.filterIteration = this.filterIteration + 1;
        });
        /* eslint-enable  */
        return this.items;
      }
    }
  }
</script>

<style lang="scss">
</style>