<template>
  <Tab as="template" v-slot="{ selected }">
    <li>
      <button
        class="nav-strip__link"
        :class="{ 'is-active': selected }"
      >
        <slot/>
      </button>
    </li>
  </Tab>
</template>

<script setup>
  import { Tab } from "@headlessui/vue";
</script>