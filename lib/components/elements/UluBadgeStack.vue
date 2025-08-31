<template>
  <ul class="badge-stack">
    <li
      class="badge-stack__item"
      v-for="(item, index) in items"
      :key="index"
    >
      <UluBadge v-bind="item" />
    </li>
  </ul>
</template>

<script setup>
  import UluBadge from "./UluBadge.vue";

  defineProps({
    /**
     * Array of props for each badge
     */
    items: Array
  });
</script>