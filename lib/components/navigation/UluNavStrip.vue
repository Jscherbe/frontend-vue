<template>
  <nav 
    v-if="items?.length"
    class="nav-strip"
    :class="resolvedModifiers"
  >
    <UluMenu 
      :items="items" 
      :classes="{
        list: 'nav-strip__list',
        item: 'nav-strip__item',
        link: 'nav-strip__link',
        linkExactActive: 'is-active'
      }"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </UluMenu>
  </nav>
</template>

<script setup>
  import { computed } from "vue";
  import UluMenu from "./UluMenu.vue";
  import { useModifiers } from "../../composables/useModifiers.js";

  const props = defineProps({
    /**
     * Array of items for list (uses UluMenu, see structure there)
     */
    items: Array,
    /**
     * Center aligned
     */
    center: Boolean,
    /**
     * Right aligned
     */
    right: Boolean,
    /**
     * Rule nav strip style
     */
    rule: Boolean,
    /**
     * Modifiers (to add any modifier classes based on base class)
     */
    modifiers: [String, Array]
  });

  const { resolvedModifiers } = useModifiers({
    props,
    baseClass: "nav-strip",
    internal: computed(() => ({
      "center": props.center,
      "right": props.right,
      "rule": props.rule
    }))
  });
</script>