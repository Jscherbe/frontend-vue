<template>
  <component 
    :is="element"
    class="popover"
    ref="contentEl"
    :style="floatingStyles"
    :data-placement="placement"
    :class="{ 'popover--fixed': isFixedStrategy }"
  >
    <component :is="element" class="popover__inner">
      <slot />
    </component>
    <component :is="element" v-if="$slots.footer" class="popover__footer">
      <slot name="footer" />
    </component>
    <component 
      :is="element"
      v-if="resolvedConfig.arrow"
      class="popover__arrow" 
      ref="contentArrow"
      :style="arrowStyles"
      data-ulu-popover-arrow
    ></component>
  </component>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useUluFloating } from '../../composables/useUluFloating.js';

  const props = defineProps({
    /**
     * The target element for the popover to float alongside
     */
    trigger: {
      type: Object,
      default: null
    },
    /**
     * Floating UI configuration
     */
    config: {
      type: Object,
      default: () => ({})
    },
    /**
     * The HTML element to use for the popover (defaults to span for inline validity)
     */
    element: {
      type: String,
      default: 'span'
    }
  });

  const contentEl = ref(null);
  
  const resolvedConfig = computed(() => props.config || {});

  
  const { floatingStyles, placement, arrowStyles, update, isFixedStrategy, contentArrow } = useUluFloating(
    computed(() => props.trigger), 
    contentEl, 
    resolvedConfig
  );
  console.log("isFixedStrategy:\n", isFixedStrategy.value);
  console.log("floatingStyles:\n", floatingStyles.value);

  defineExpose({
    /**
     * Manually trigger a floating UI position update
     */
    update,
    /**
     * The internal root popover element reference
     */
    content: contentEl
  });
</script>

