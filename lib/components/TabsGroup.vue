<template>
  <TabGroup v-slot="slotProps" :defaultIndex="defaultIndex">
    <slot v-bind="slotProps"/>
  </TabGroup>
</template>

<script setup>
  import { TabGroup } from "@headlessui/vue";
  defineOptions({ inheritAttrs: false });
  defineProps({ defaultIndex: Number });
</script>