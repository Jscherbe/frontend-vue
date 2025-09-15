<template>
  <component
    class="menu-stack"
    :is="containerElement" 
    :class="resolvedModifiers"
  >
    <UluMenu 
      :items="items" 
      :classes="{
        list: 'menu-stack__list',
        item: 'menu-stack__item',
        link: 'menu-stack__link',
        linkText: 'menu-stack__link-text',
        linkIcon: 'menu-stack__link-icon',
        itemSeparatorBefore: 'menu-stack__item--separator-before',
        itemSeparatorAfter: 'menu-stack__item--separator-after'
      }" 
      :noChildren="noChildren"
    />
  </component>
</template>

<script setup>
  import { computed } from "vue";
  import UluMenu from "./UluMenu.vue";
  import { useModifiers } from "../../composables/useModifiers.js";

  const props = defineProps({
    /**
     * Menu item (see UluMenu)
     */
    items: Array,
    /**
    * The HTML element to use as the container (e.g., 'nav', 'div', 'aside').
     */
    containerElement: {
      type: String,
      default: "nav"
    },
    /**
     * Hanging style menu
     */
    hanging: Boolean,
    /**
     * Compact style menu
     */
    compact: Boolean,
    /**
     * Don't include children of menu
     */
    noChildren: Boolean,
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     */
    modifiers: [String, Array]
  });

  const internalModifiers = computed(() => ({
    "hanging" : props.hanging,
    "compact" : props.compact,
  }));

  const { resolvedModifiers } = useModifiers({ 
    props, 
    internal: internalModifiers,
    baseClass: "menu-stack"
  });
</script>