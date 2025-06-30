<template>
  <TabList as="template">
    <div class="nav-strip nav-strip--rule">
      <ul class="nav-strip__list">
        <slot/>
      </ul>
    </div>
  </TabList>
</template>


<script setup>
  import { TabList } from "@headlessui/vue";
</script>