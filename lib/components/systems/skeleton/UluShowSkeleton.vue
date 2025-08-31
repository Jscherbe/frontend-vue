<template>
  <slot v-if="!when"/>
  <UluSkeletonText v-else inline/>
</template>

<script setup>
  import UluSkeletonText from "./UluSkeletonText.vue";
  defineProps({
    /**
     * If true will show whatever is passed to slot, else skeleton text
     */
    when: Boolean,
  });
</script>