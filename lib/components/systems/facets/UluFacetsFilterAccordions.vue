<template>
  <div class="facets-filters">
    <UluAccordion
      v-for="group in facets"
      :key="group.uid"
      :modifiers="accordionModifiers"
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
        <UluAccordion
          v-if="group.children.length > maxVisible"
          class="facets-filters__more-facets"
          :class="classes.moreFacets"
          :modifiers="accordionModifiers"
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
        </UluAccordion>
      </template>
    </UluAccordion>
  </div>
</template>

<script setup>
  import UluFacetsList from "./UluFacetsList.vue";
  import UluAccordion from "../../collapsible/UluAccordion.vue";

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
    /**
     * Class modifiers for accordion (ie. 'transparent', 'secondary', etc)
     */
    accordionModifiers: [String, Array]
  });

  const emit = defineEmits(['facet-change']);

  const selectedUids = (group) => {
    if (group.multiple) {
      return group.children.filter(c => c.selected).map(c => c.uid);
    }
    return group.children.find(c => c.selected)?.uid || '';
  };
</script>