<template>
  <div class="UluFacetsFilters">
    <UluCollapsibleRegion
      class="ulu-facets__group"
      :class="classes.group"
      :classToggle="['ulu-facets__group-toggle', classes.groupToggle]"
      :classContent="['ulu-facets__group-content', classes.groupContent]"
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
          :groupName="group.name"
          :type="group.multiple ? 'checkbox' : 'radio'"
          :model-value="selectedUids(group)"
          @facet-change="emit('facet-change', $event)"
        />
        <UluCollapsibleRegion
          v-if="group.children.length > maxVisible"
          class="ulu-facets__more-facets"
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
              :groupName="group.name"
              :type="group.multiple ? 'checkbox' : 'radio'"
              :model-value="selectedUids(group)"
              @facet-change="emit('facet-change', $event)"
            />
          </template>
        </UluCollapsibleRegion>
      </template>
    </UluCollapsibleRegion>
  </div>
</template>

<script setup>
  import UluFacetsList from "./UluFacetsList.vue";
  import UluCollapsibleRegion from "../../collapsible/UluCollapsibleRegion.vue";

  defineProps({
    classes: {
      type: Object,
      default: () => ({})
    },
    maxVisible: {
      type: Number,
      default: 5
    },
    facets: {
      type: Array,
      default: () => []
    }
  });

  const emit = defineEmits(['facet-change']);

  const selectedUids = (group) => {
    if (group.multiple) {
      return group.children.filter(c => c.selected).map(c => c.uid);
    }
    return group.children.find(c => c.selected)?.uid || '';
  };
</script>