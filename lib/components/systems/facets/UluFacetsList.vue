<template>
  <ul class="UluFacets__facet-list">
    <li 
      class="UluFacets__facet"
      :class="classFacet"
      v-for="facet in children"
      :key="facet.uid"
    >
      <input 
        class="UluFacets__facet-checkbox"
        :id="facetCheckboxId(facet)"
        type="checkbox" 
        :checked="facet.selected"
        @change="emit('facet-change', { groupUid, facetUid: facet.uid, selected: $event.target.checked })"
      >
      <label 
        class="UluFacets__facet-label" 
        :for="facetCheckboxId(facet)"
      >
        {{ facet.label }}
      </label>
    </li>
  </ul>
</template>

<script setup>
  const props = defineProps({
    groupUid: String,
    children: Array,
    classFacet: String
  });

  const emit = defineEmits(['facet-change']);

  function facetCheckboxId(facet) {
    return `facet-${props.groupUid}-${facet.uid}`;
  }
</script>