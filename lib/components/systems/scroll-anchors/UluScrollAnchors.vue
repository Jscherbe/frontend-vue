<template>
  <div class="scroll-anchors">
    <slot/>
  </div>
</template>

<script setup>
  import { ref, computed, provide } from "vue";
  import { SECTIONS, REGISTER, UNREGISTER } from "./symbols.js";
  import { useScrollAnchorsController } from "./useScrollAnchorsController.js";

  const props = defineProps({
    firstItemActive: Boolean,
    observerOptions: {
      type: Object,
      default: () => ({
        root: null,
        threshhold: [0, 1],
        rootMargin: "-25% 0px -55% 0px"
      })
    }
  });

  const emit = defineEmits(["section-change"]);

  const sections = ref([]);

  useScrollAnchorsController({ sections, props, emit });

  provide(SECTIONS, computed(() => sections.value));

  provide(REGISTER, (section) => {
    sections.value.push(section);
  });

  provide(UNREGISTER, (sectionId) => {
    const index = sections.value.findIndex(r => r.id === sectionId);
    if (index > -1) {
      sections.value.splice(index, 1);
    }
  });
</script>
