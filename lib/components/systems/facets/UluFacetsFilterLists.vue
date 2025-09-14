<template>
  <div class="UluFacetsFilters">
    <UluCollapsible
      v-for="group in facets"
      :key="group.uid"
      :classes="{
        container: ['ulu-facets__group', classes.group],
        containerOpen: ['ulu-facets__group--open', classes.groupOpen],
        containerClosed: ['ulu-facets__group--closed', classes.groupClosed],
        trigger: ['ulu-facets__group-trigger', classes.groupTrigger],
        content: ['ulu-facets__group-content', classes.groupContent]
      }"
      :startOpen="group.open"
    >
      <template #trigger="{ isOpen }">
        <slot name="groupTrigger" :group="group" :isOpen="isOpen">
          {{ group.name }}
        </slot>
      </template>
      <template #default>
        <UluFacetsList
          :children="group.children.slice(0, maxVisible)"
          :groupUid="group.uid"
          :groupName="group.name"
          :type="group.multiple ? 'checkbox' : 'radio'"
          :compact="compact"
          :model-value="selectedUids(group)"
          @facet-change="emit('facet-change', $event)"
        />
        <UluCollapsible
          v-if="group.children.length > maxVisible"
          class="ulu-facets__more-facets"
          :class="classes.moreFacets"
          :clickOutsideCloses="false"
          :closeOnEscape="false"
          :transitionHeight="true"
        >
          <template #trigger="{ isOpen }">
            {{ isOpen ? "View Less" : "Show More" }}
          </template>
          <template #default>
            <UluFacetsList
              :children="group.children.slice(maxVisible)"
              :groupUid="group.uid"
              :groupName="group.name"
              :type="group.multiple ? 'checkbox' : 'radio'"
              :compact="compact"
              :model-value="selectedUids(group)"
              @facet-change="emit('facet-change', $event)"
            />
          </template>
        </UluCollapsible>
      </template>
    </UluCollapsible>
  </div>
</template>

<script setup>
  import UluFacetsList from "./UluFacetsList.vue";
  import UluCollapsible from "../../collapsible/UluCollapsible.vue";

  defineProps({
    /**
     * An object of classes to apply to the component.
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * The maximum number of facets to show before showing the "More" button.
     */
    maxVisible: {
      type: Number,
      default: 5
    },
    /**
     * An array of facet groups to display.
     */
    facets: {
      type: Array,
      default: () => []
    },
    /**
     * Whether to use compact modifier on selectable menu
     */
    compact: Boolean,
  });

  const emit = defineEmits(['facet-change']);

  const selectedUids = (group) => {
    if (group.multiple) {
      return group.children.filter(c => c.selected).map(c => c.uid);
    }
    return group.children.find(c => c.selected)?.uid || '';
  };
</script>