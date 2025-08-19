<template>
  <div class="layout-flex-baseline">
    <div class="type-truncate" ref="text">
      <slot/>
    </div>
    <UluPopover 
      v-if="isOverflown && !resizing"
      triggerAlt="Show Full Text"
      size="large"
    >
      <template #trigger>
        <UluIcon :definition="triggerIcon"/>
      </template>
      <template #content>
        <div class="type-word-break">
          <slot/>
        </div>
      </template>
    </UluPopover>
  </div>
</template>

<script setup>
  import { ref, nextTick, onMounted, onUnmounted } from "vue";
  import { useWindowResize } from "../../composables";

  import UluPopover from "../../plugins/popovers/UluPopover.vue";
  import UluIcon from "../elements/UluIcon.vue";

  defineProps({
    /**
     * Default icon for overflow popover trigger
     */
    triggerIcon: {
      type: String,
      default: "fas fa-ellipsis"
    },
  });

  const { resizing, onResizeEnd } = useWindowResize();
  const text = ref(null);
  const isOverflown = ref(false);
  /**
   * Function checks if text element is overflown
   */
  const update = () => {
    nextTick(() => {
      const element = text.value;
      isOverflown.value = element.offsetWidth < element.scrollWidth;
    });
  };
  const removeResize = onResizeEnd(update);
  onMounted(update);
  onUnmounted(removeResize);
</script>