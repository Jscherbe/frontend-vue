<template>
  <component 
    v-if="sections && sections.length" 
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
          <slot :item="item" :index="index">
            {{ item.title }}
          </slot>
        </a>
      </li>
    </ul>
  </component>
</template>

<script setup>
  import { useScrollAnchorSections } from "./useScrollAnchorSections.js";

  defineProps({
    /**
     * The HTML element to use for the navigation root
     */
    element: {
      type: String,
      default: "nav"
    }
  });

  const sections = useScrollAnchorSections();
</script>
