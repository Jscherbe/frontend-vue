<template>
  <TabPanel class="tabs__tabpanel">
    <template #default="slotProps">
      <slot v-bind="slotProps"/>
    </template>
  </TabPanel>
</template>

<script setup>
  import { TabPanel } from "@headlessui/vue";
</script>