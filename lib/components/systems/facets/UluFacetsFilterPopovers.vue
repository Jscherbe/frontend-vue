<template>
  <div :class="classes.container">
    <div v-for="group in facets" :key="group.uid" :class="classes.group">
      <UluPopover 
        :classes="{ 
          trigger: classes.trigger,
          content: classes.content
        }
      ">
        <template #trigger>
          <slot name="trigger" :group="group" :label="selectedLabel(group)">
            <span>{{ group.name }}: <strong>{{ selectedLabel(group) }}</strong></span>
          </slot>
          <UluIcon :class="classes.triggerIcon" icon="fas fa-chevron-down" />
        </template>
        <template #content="{ close }">
          <UluSelectableMenu
            :legend="group.name"
            :type="group.multiple ? 'checkbox' : 'radio'"
            :options="getMenuOptions(group)"
            :model-value="selectedUids(group)"
            @update:model-value="onFilterChange(group, $event, close)"
            :hideInputs="hideInputs"
          />
        </template>
      </UluPopover>
    </div>
  </div>
</template>

<script setup>
import UluPopover from '../../../plugins/popovers/UluPopover.vue';
import UluSelectableMenu from '../../forms/UluSelectableMenu.vue';
import UluIcon from '../../elements/UluIcon.vue';

const props = defineProps({
  /**
   * An array of facet groups to display.
   */
  facets: {
    type: Array,
    default: () => []
  },
  /**
   * An object of classes to apply to the component.
   */
  classes: {
    type: Object,
    default: () => ({
      trigger: "button",
      triggerIcon: "button__icon"
      // content: null,
      // container: null,
      // group: null
    })
  },
  /**
   * If true, the input elements will be visually hidden.
   */
  hideInputs: Boolean
});

const emit = defineEmits(['facet-change']);

const getMenuOptions = (group) => {
  if (group.multiple) {
    return group.children;
  }
  return [{ label: `All ${group.name}s`, uid: '' }, ...group.children];
};

const selectedUids = (group) => {
  if (group.multiple) {
    return group.children.filter(c => c.selected).map(c => c.uid);
  }
  return group.children.find(c => c.selected)?.uid || '';
};

const selectedLabel = (group) => {
  const selectedItems = group.children.filter(c => c.selected);
  const count = selectedItems.length;

  if (count === 0) {
    return 'All';
  }

  if (group.multiple) {
    if (count === 1) {
      return selectedItems[0].label;
    }
    return `${count} selected`;
  }

  return selectedItems[0].label;
};

function onFilterChange(group, value, closePopover) {
  if (group.multiple) {
    const selectedUids = new Set(value);
    group.children.forEach(facet => {
      const shouldBeSelected = selectedUids.has(facet.uid);
      if (facet.selected !== shouldBeSelected) {
        emit('facet-change', {
          groupUid: group.uid,
          facetUid: facet.uid,
          selected: shouldBeSelected
        });
      }
    });
  } else {
    const selectedUid = value;
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
}
</script>