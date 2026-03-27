<template>
  <UluList
    class="counter-list"
    :class="resolvedModifiers"
    :items="items"
    :element="element"
    :itemElement="itemElement"
    :classes="resolvedClasses"
  >
    <template v-if="$slots.default" #default="slotProps">
      <slot v-bind="slotProps" />
    </template>
  </UluList>
</template>

<script setup>
  import { computed } from "vue";
  import { useModifiers } from "../../composables/useModifiers.js";
  import UluList from "./UluList.vue";

  const props = defineProps({
    /**
     * Array of list items, output as is or use slot to template the item
     * - Note item can add classes by defining { classes: { item } }
     */
    items: Array,
    /**
     * HTML element for the list
     */
    element: {
      type: String,
      default: "ol"
    },
    /**
     * HTML element for the list items (when using items array)
     */
    itemElement: {
      type: String,
      default: "li"
    },
    /**
     * Classes object (keys are { list, item } to be applied to list and item elements)
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Use alphabetical counter
     */
    alphabetical: Boolean,
    /**
     * Remove counter reset
     */
    noReset: Boolean,
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'alphabetical'])
     */
    modifiers: [String, Array]
  });

  const { resolvedModifiers } = useModifiers({
    props,
    baseClass: "counter-list",
    internal: computed(() => ({
      "alphabetical": props.alphabetical,
      "no-reset": props.noReset
    }))
  });

  const resolvedClasses = computed(() => {
    return {
      list: props.classes.list,
      item: ["counter-list__item", props.classes.item]
    };
  });
</script>
