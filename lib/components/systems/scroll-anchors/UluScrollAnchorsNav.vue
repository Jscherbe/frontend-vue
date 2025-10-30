<script setup>
  import { useScrollAnchorSections } from "./useScrollAnchorSections.js";

  defineProps({
    element: {
      type: String,
      default: "nav"
    }
  });

  const sections = useScrollAnchorSections();
</script>

<template>
  <component 
    v-if="sections.length" 
    :is="element"
    class="scroll-anchors__nav"
  >
    <ul>
      <li 
        v-for="(item, index) in sections" :key="index"
        :class="{ 'is-active' : item.active }"
      >
        <a 
          :class="{ 'is-active' : item.active }"
          :href="`#${ item.titleId }`" 
        >
          {{ item.title }}
        </a>
      </li>
    </ul>
  </component>
</template>