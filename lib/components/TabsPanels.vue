<template>
  <TabPanels v-slot="slotProps">
    <slot v-bind="slotProps"/>
  </TabPanels>
</template>

<script setup>
  import { TabPanels } from "@headlessui/vue";
</script>