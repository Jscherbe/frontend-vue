<template>
  <component 
    v-if="items !== undefined ? items.length : $slots.default"
    :is="resolvedElement"
    :class="[
      {
        'list-ordered' : ordered,
        'list-unordered' : unordered,
        'list-lines' : lines,
        'list-compact' : compact,
      }, 
      classes.list
    ]"
    :style="{ 
      listStyleType: listStyleType
    }"
    :reversed="isOrdered ? reversed : null"
    :start="start"
  >
    <template v-if="items !== undefined">
      <component 
        :is="itemElement"
        v-for="(item, index) in items" 
        :key="index"
        :class="[
          classes.item,
          item?.classes?.item
        ]"
      >
        <slot :item="item" :index="index">
          {{ item }}
        </slot>
      </component>
    </template>
    <slot v-else />
  </component>
</template>

<script setup>
  import { computed, provide } from "vue";

  const props = defineProps({
    /**
     * Array of list items, output as is or use slot to template the item
     * - Note item can add classes by defining { classes: { item } }
     */
    items: Array,
    /**
     * Classes object (keys are { list, item } to be applied to list and item elements)
     * - Any valid class binding for each
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Use list-ordered class, and sets element to <ol>
     */
    ordered: Boolean,
    /**
     * Use list-unordered class
     */
    unordered: Boolean,
    /**
     * Use list-lines class
     */
    lines: Boolean,
    /**
     * Use list-compact class
     */
    compact: Boolean,
    /**
     * If setting up custom ordered list this will ensure the correct element type
     * - Note: 'ordered' prop sets the ordered list class, this does not
     */
    forceOrdered: Boolean,
    /**
     * Define the start value for <ol>
     */
    start: String,
    /**
     * Reverse ordered list
     */
    reversed: Boolean,
    /**
     * Define list style type (ie. disc, decimal, etc)
     */
    listStyleType: String,
    /**
     * Element to render the list as (overrides ul/ol)
     */
    element: String,
    /**
     * Element to render items as when using items array
     */
    itemElement: {
      type: String,
      default: "li"
    }
  });

  provide("uluListContext", computed(() => ({
    classes: props.classes,
    itemElement: props.itemElement
  })));

  const isOrdered = computed(() => props.ordered || props.forceOrdered);
  const resolvedElement = computed(() => props.element || (isOrdered.value ? "ol" : "ul"));
</script>
