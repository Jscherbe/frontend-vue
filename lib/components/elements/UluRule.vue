<template>
  <hr v-if="semantic" class="rule" :class="resolvedModifiers">
  <div v-else class="rule" :class="resolvedModifiers"></div>
</template>

<script setup>
  import { computed } from "vue";
  import { useModifiers } from "../../composables/useModifiers.js";

  const props = defineProps({
    /**
     * Whether to use the actual <hr> vs superficial <div></div> for rule element
     */
    semantic: Boolean,
    /**
     * Use short modifier
     */
    short: Boolean,
    /**
     * Optional margin (keyword from your rule margins config in frontend)
     */
    margin: String,
    /**
     * Add light modifier (if set, usually exists, this is for convenience, use modifiers prop if you have custom naming)
     */
    light: Boolean,
    /**
     * Add large modifier (if set, usually exists, this is for convenience, use modifiers prop if you have custom naming)
     */
    large: Boolean,
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: [String, Array]
  });

  const internalModifiers = computed(() => ({
    "short" : props.short,
    "light" : props.light,
    "large" : props.large,
    [`margin-${ props.margin }`] : props.margin
  }));

  const { resolvedModifiers } = useModifiers({ 
    props, 
    baseClass: "rule",
    internal: internalModifiers 
  });
</script>