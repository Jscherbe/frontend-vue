<template>
  <li :class="[listClasses.item, classes]">
    <slot></slot>
  </li>
</template>

<script setup>
  import { computed, inject } from "vue";

  defineProps({
    /**
     * Optional class binding to append to the injected parent classes
     */
    classes: [String, Array, Object]
  });

  const injectedClasses = inject("uluListClasses", { value: {} });
  const listClasses = computed(() => injectedClasses.value || {});
</script>