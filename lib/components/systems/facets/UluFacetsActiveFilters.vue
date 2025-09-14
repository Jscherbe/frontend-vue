<template>
  <div v-if="activeFilters.length" class="facets-active" :class="classes.container">
    <component :is="labelElement" class="facets-active__label" :class="classes.label">
      <slot name="label">
        Active Filters:
      </slot>
    </component>
    <ul class="facets-active__list" :class="classes.list">
      <li  
        class="facets-active__item"
        v-for="filter in activeFilters" 
        :key="`${ filter.groupUid }-${ filter.uid }`"
        :class="classes.item"
      >
        <button
          :class="classes.filterButton"
          icon="type:remove"
          @click="removeFilter(filter)"
        >
          <span :class="classes.filterButtonText">
            <span class="hidden-visually">Remove Active Filter:</span>
            {{ filter.label }}
          </span>
          <span :class="classes.filterButtonIcon">
            <UluIcon :icon="removeIcon" />
          </span>
        </button>
      </li>
    </ul>
    <button @click="clearFilters" :class="classes.clearButton">Clear All</button>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import UluIcon from '../../elements/UluIcon.vue';

  const props = defineProps({
    /**
     * The selectedFacets array from the useFacets composable.
     */
    selectedFacets: {
      type: Array,
      default: () => []
    },
    /**
     * Element to use for label
     */
    labelElement: {
      type: String,
      default: "strong"
    },
    /**
     * Icon to use for remove (in button)
     */
    removeIcon: {
      type: String,
      default: "type:close"
    },
    /**
     * Classes for different element { label, list, item, filterButton, filterButtonText, filterButtonIcon, clearButton }
     */
    classes: {
      type: Object,
      default: () => ({
        container: "layout-flex flex-wrap",
        label: "hidden-visually",
        list: "layout-flex flex-wrap",
        item: "margin-right-small-x",
        filterButton: "button button--small button--outline no-min-width",
        filterButtonText: null,
        filterButtonIcon: "button__icon",
        clearButton: "button button--small"
      })
    }
  });

  const emit = defineEmits(['facet-change', 'clear-filters']);

  const activeFilters = computed(() => {
    const filters = [];
    props.selectedFacets.forEach(group => {
      group.children.forEach(child => {
        filters.push({
          ...child,
          groupUid: group.uid
        });
      });
    });
    return filters;
  });

  function removeFilter(filter) {
    emit('facet-change', {
      groupUid: filter.groupUid,
      facetUid: filter.uid,
      selected: false
    });
  }

  function clearFilters() {
    emit('clear-filters');
  }
</script>
