<template>
  <Tab class="tabs__tab">
    <template #default="slotProps">
      <slot v-bind="slotProps"/>
    </template>
  </Tab>
</template>

<script setup>
  import { Tab } from "@headlessui/vue";
</script>