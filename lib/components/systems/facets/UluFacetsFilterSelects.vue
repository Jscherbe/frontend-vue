<template>
  <div class="UluFacetsDropdownFilters">
    <div
      class="UluFacetsDropdownFilters__group"
      v-for="group in facets"
      :key="group.uid"
    >
      <label :for="`facet-dropdown-${group.uid}`" class="UluFacetsDropdownFilters__label">
        {{ group.name }}
      </label>
      <select
        :id="`facet-dropdown-${group.uid}`"
        class="UluFacetsDropdownFilters__select"
        @change="onFilterChange(group, $event)"
      >
        <option value="">All {{ group.name }}s</option>
        <option
          v-for="option in group.children"
          :key="option.uid"
          :value="option.uid"
          :selected="option.selected"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  facets: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['facet-change']);

function onFilterChange(group, event) {
  const selectedUid = event.target.value;

  const currentlySelected = group.children.find(c => c.selected);
  if (currentlySelected?.uid === selectedUid) return;

  group.children.forEach(facet => {
    const shouldBeSelected = facet.uid === selectedUid;
    if (facet.selected !== shouldBeSelected) {
      emit('facet-change', {
        groupUid: group.uid,
        facetUid: facet.uid,
        selected: shouldBeSelected
      });
    }
  });
}
</script>

<style lang="scss">
.UluFacetsDropdownFilters {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}
.UluFacetsDropdownFilters__group {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
</style>
