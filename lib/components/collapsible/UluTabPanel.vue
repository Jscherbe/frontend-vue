<template>
  <TabPanel v-slot="slotProps" class="tabs__tabpanel">
    <slot v-bind="slotProps"/>
  </TabPanel>
</template>

<script setup>
  import { TabPanel } from "@headlessui/vue";
</script>