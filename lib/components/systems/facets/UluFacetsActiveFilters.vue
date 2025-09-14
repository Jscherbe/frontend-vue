<template>
  <div v-if="activeFilters.length" class="facets-active-filters">
    <slot name="label">
      <strong class="facets-active-filters__label">Active Filters:</strong>
    </slot>
    <div class="facets-active-filters__items">
      <UluButton
        v-for="filter in activeFilters"
        :key="`${filter.groupUid}-${filter.uid}`"
        class="button--sm"
        @click="removeFilter(filter)"
      >
        {{ filter.label }}
        <UluIcon icon="type:close" />
      </UluButton>
    </div>
    <button @click="clearFilters" class="button button--link">Clear All</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import UluButton from '../../elements/UluButton.vue';
import UluIcon from '../../elements/UluIcon.vue';

const props = defineProps({
  /**
   * The selectedFacets array from the useFacets composable.
   */
  selectedFacets: {
    type: Array,
    default: () => []
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
