<template>
  <div class="scroll-anchors" ref="componentEl">
    <slot/>
  </div>
</template>

<script setup>
  import { ref, computed, provide } from "vue";
  import { useScrollAnchors } from "./useScrollAnchors.js";

  const props = defineProps({
    /**
     * Make the first item active by default on load
     */
    firstItemActive: Boolean,
    /**
     * Custom IntersectionObserver options to completely override internal defaults.
     * Defaults: { root: null, threshold: 0, rootMargin: "-25% 0px -55% 0px" }
     * See: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver
     * @type {Object|null}
     */
    observerOptions: {
      type: Object,
      default: null
    },
    /**
     * Creates a strict 1% horizontal observation line to trigger active states.
     * - Accepts a number representing the percentage down from the top of the screen (e.g., 20 for 20%).
     * - If you pass true it will default to 20%
     * - Optional not enabled by default
     * - You can control this yourself with observerOptions
     * @type {Number|Boolean}
     * @default false
     */
    snapOffset: {
      type: [Number, Boolean],
      default: false
    },
    /**
     * Enable debug logging for the IntersectionObserver
     */
    debug: Boolean
  });

  const emit = defineEmits(["section-change"]);

  const sections = ref([]);
  const componentEl = ref(null);

  useScrollAnchors({ sections, props, emit, componentElRef: componentEl });

  provide('uluScrollAnchorsSections', computed(() => sections.value));

  provide('uluScrollAnchorsRegister', (section) => {
    sections.value.push(section);
  });

  provide('uluScrollAnchorsUnregister', (sectionId) => {
    const index = sections.value.findIndex(r => r.id === sectionId);
    if (index > -1) {
      sections.value.splice(index, 1);
    }
  });
</script>
