<template>
  <div class="UluFacetsFiltersDropdown">
    <div v-for="group in facets" :key="group.uid" class="UluFacetsFiltersDropdown__group">
      <UluPopover :classes="{ trigger: 'button' }">
        <template #trigger>
          <span>{{ group.name }}: <strong>{{ selectedLabel(group) }}</strong></span>
          <UluIcon icon="fas fa-chevron-down" style="margin-left: 0.5em;" />
        </template>
        <template #content="{ close }">
          <UluCheckboxMenu
            :legend="group.name"
            type="radio"
            :options="getMenuOptions(group)"
            :model-value="selectedUid(group)"
            @update:model-value="onFilterChange(group, $event, close)"
          />
        </template>
      </UluPopover>
    </div>
  </div>
</template>

<script setup>
import UluPopover from '../../../plugins/popovers/UluPopover.vue';
import UluCheckboxMenu from '../../forms/UluCheckboxMenu.vue';
import UluIcon from '../../elements/UluIcon.vue';

const props = defineProps({
  facets: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['facet-change']);

const getMenuOptions = (group) => {
  return [{ label: `All ${group.name}s`, uid: '' }, ...group.children];
};

const selectedUid = (group) => {
  return group.children.find(c => c.selected)?.uid || '';
};

const selectedLabel = (group) => {
  return group.children.find(c => c.selected)?.label || `All`;
};

function onFilterChange(group, selectedUid, closePopover) {
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
  closePopover();
}
</script>

<style lang="scss">
.UluFacetsFiltersDropdown {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}
</style>
