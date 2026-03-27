<template>
  <component :is="resolvedElement" :class="[listClasses.item, classes]">
    <slot></slot>
  </component>
</template>

<script setup>
  import { computed, inject } from "vue";

  const props = defineProps({
    /**
     * Optional class binding to append to the injected parent classes
     */
    classes: [String, Array, Object],
    /**
     * The HTML element to render the item as
     */
    element: String
  });

  const injectedContext = inject("uluListContext", { value: {} });
  const listClasses = computed(() => injectedContext.value?.classes || {});
  const resolvedElement = computed(() => props.element || injectedContext.value?.itemElement || "li");
</script>