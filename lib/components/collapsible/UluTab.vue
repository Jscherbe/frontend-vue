<template>
  <Tab class="tabs__tab" v-slot="slotProps">
    <slot v-bind="slotProps"/>
  </Tab>
</template>

<script setup>
  import { Tab } from "@headlessui/vue";
</script>