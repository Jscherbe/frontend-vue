<template>
  <TabPanels as="template">
    <template #default="slotProps">
      <slot v-bind="slotProps"/>
    </template>
  </TabPanels>
</template>

<script setup>
  import { TabPanels } from "@headlessui/vue";
</script>