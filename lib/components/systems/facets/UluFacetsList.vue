<template>
  <UluSelectableMenu
    class="ulu-facets__facet-list"
    :legend="groupUid"
    :type="type"
    :options="menuOptions"
    :model-value="modelValue"
    @update:model-value="handleChange"
  >
    <template #default="{ option }">
      {{ option.label }} <span v-if="option.count !== undefined">({{ option.count }})</span>
    </template>
  </UluSelectableMenu>
</template>

<script setup>
import { computed } from 'vue';
import UluSelectableMenu from '../../forms/UluSelectableMenu.vue';

const props = defineProps({
  groupUid: String,
  groupName: String,
  children: Array,
  type: {
    type: String,
    default: 'checkbox',
  },
  modelValue: [String, Array],
});

const emit = defineEmits(['facet-change']);

const menuOptions = computed(() => {
  if (props.type === 'radio') {
    return [{ label: `All ${props.groupName}s`, uid: '' }, ...props.children];
  }
  return props.children;
});

function handleChange(value) {
  if (props.type === 'radio') {
    const selectedUid = value;
    props.children.forEach(facet => {
      const shouldBeSelected = facet.uid === selectedUid;
      if (facet.selected !== shouldBeSelected) {
        emit('facet-change', {
          groupUid: props.groupUid,
          facetUid: facet.uid,
          selected: shouldBeSelected
        });
      }
    });
  } else {
    const selectedUids = new Set(value);
    props.children.forEach(facet => {
      const shouldBeSelected = selectedUids.has(facet.uid);
      if (facet.selected !== shouldBeSelected) {
        emit('facet-change', {
          groupUid: props.groupUid,
          facetUid: facet.uid,
          selected: shouldBeSelected
        });
      }
    });
  }
}
</script>