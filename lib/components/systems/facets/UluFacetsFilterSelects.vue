<template>
  <div class="facets-dropdown-filters" :class="classes.container">
    <div
      class="facets-dropdown-filters__group"
      :class="classes.group"
      v-for="group in facets"
      :key="group.uid"
    >
      <label 
        :for="`facet-dropdown-${ group.uid }`" 
        class="facets-dropdown-filters__label"
        :class="classes.label"
      >
        <slot name="label">
          {{ group.name }}
        </slot>
      </label>
      <select
        :id="`facet-dropdown-${group.uid}`"
        class="facets-dropdown-filters__select"
        :class="classes.select"
        @change="onFilterChange(group, $event)"
      >
        <option value="">
          <slot name="optionAll" :group="group">
            All {{ group.name }}s
          </slot>
        </option>
        <option
          v-for="(option, index) in group.children"
          :key="option.uid"
          :value="option.uid"
          :selected="option.selected"
        >
          <slot name="option" :group="group" :option="option" :index="index">
            {{ option.label }}
          </slot>
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  /**
   * Facets Array
   */
  facets: {
    type: Array,
    default: () => []
  },
  /**
   * Optional classes bindings for all elements { container, group, label, select }
   */
  classes: {
    type: Object,
    default: () => ({})
  },
});

console.log(props);


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
.facets-dropdown-filters {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}
.facets-dropdown-filters__group {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
</style>
