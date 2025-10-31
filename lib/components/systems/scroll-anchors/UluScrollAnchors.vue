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
     * IntersectionObserver options
     * - Defaults: { root: null, threshold: 0, rootMargin: "-25% 0px -55% 0px" }
     * See: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver
     */
    observerOptions: {
      type: Object,
      default: () => ({
        root: null,
        threshold: 0,
        rootMargin: "-25% 0px -55% 0px"
      })
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
