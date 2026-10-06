<template>
  <span 
    class="popover"
    ref="contentEl"
    :style="floatingStyles"
    :data-placement="placement"
    :class="[
      { 
        'popover--fixed': isFixedStrategy,
        'is-active': isOpen 
      },
      resolvedModifiers
    ]"
    @keydown.esc="handleEsc"
    tabindex="-1"
  >
    <span class="popover__inner">
      <slot :isOpen="isOpen" :close="close" />
    </span>
    <span v-if="$slots.footer" class="popover__footer">
      <slot name="footer" :isOpen="isOpen" :close="close" />
    </span>
    <span 
      v-if="resolvedConfig.arrow"
      class="popover__arrow" 
      ref="contentArrow"
      :style="arrowStyles"
      data-ulu-popover-arrow
    ></span>
  </span>
</template>

<script setup>
  import { ref, computed, watch, onUnmounted, nextTick } from 'vue';
  import { useUluFloating } from '../../composables/useUluFloating.js';
  import { useModifiers } from '../../composables/useModifiers.js';
  import { wasClickOutside } from '@ulu/utils/browser/dom.js';

  const emit = defineEmits(['close']);

  const props = defineProps({
    /**
     * Controls the open/active state of the popover
     */
    isOpen: {
      type: Boolean,
      default: false
    },
    /**
     * Close popover when click is outside
     */
    clickOutsideCloses: {
      type: Boolean,
      default: true
    },
    /**
     * Close popover when escape key is pressed
     */
    escapeCloses: {
      type: Boolean,
      default: true
    },
    /**
     * Direct focus when open/closing popover
     */
    directFocus: {
      type: Function,
      default: ({ isOpen, trigger, content }) => {
        if (isOpen && content) {
          content.focus({ preventScroll: true });
        } else if (!isOpen && trigger && trigger instanceof HTMLElement) {
          // Note: using nextTick prevents scroll jumping in some cases
          trigger.focus({ preventScroll: true });
        }
      }
    },
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
     * Modifiers (to add any modifier classes based on base class [ie. 'large'])
     */
    modifiers: [String, Array, Object]
  });

  const contentEl = ref(null);
  
  const { resolvedModifiers } = useModifiers({ props, baseClass: "popover" });
  
  const resolvedConfig = computed(() => props.config || {});

  const { floatingStyles, placement, arrowStyles, update, isFixedStrategy, contentArrow } = useUluFloating(
    computed(() => props.trigger), 
    contentEl, 
    resolvedConfig
  );

  const close = () => {
    emit('close');
  };

  const handleEsc = (event) => {
    if (props.isOpen && props.escapeCloses) {
      event.preventDefault();
      close();
    }
  };

  let outsideHandler = null;

  const destroyOutsideClick = () => {
    if (outsideHandler) {
      document.removeEventListener("click", outsideHandler);
      outsideHandler = null;
    }
  };

  const addOutsideClick = () => {
    destroyOutsideClick();
    if (props.clickOutsideCloses) {
      outsideHandler = (event) => {
        if (!props.isOpen || !contentEl.value) return;
        
        // Ignore clicks on elements that have been removed from the DOM
        if (!document.body.contains(event.target)) return;

        if (wasClickOutside(contentEl.value, event)) {
          // If the click is on the trigger itself, we let the trigger handle toggling
          if (props.trigger instanceof HTMLElement && props.trigger.contains(event.target)) {
            return;
          }
          close();
        }
      };
      // Defer so the click that opened the popover doesn't instantly close it
      setTimeout(() => {
        if (outsideHandler) {
          document.addEventListener("click", outsideHandler);
        }
      }, 0);
    }
  };

  watch(() => props.isOpen, (newVal) => {
    if (newVal) {
      update();
      addOutsideClick();
      if (props.directFocus) {
        nextTick(() => {
          props.directFocus({ isOpen: true, trigger: props.trigger, content: contentEl.value });
        });
      }
    } else {
      destroyOutsideClick();
      if (props.directFocus) {
        nextTick(() => {
          props.directFocus({ isOpen: false, trigger: props.trigger, content: contentEl.value });
        });
      }
    }
  }, { immediate: true });

  onUnmounted(() => {
    destroyOutsideClick();
  });

  defineExpose({
    /**
     * Emits the close event
     */
    close,
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
