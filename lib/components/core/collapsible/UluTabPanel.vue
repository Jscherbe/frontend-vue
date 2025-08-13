<template>
  <TabPanel v-slot="slotProps">
    <slot v-bind="slotProps"/>
  </TabPanel>
</template>

<script setup>
  import { TabPanel } from "@headlessui/vue";
</script>