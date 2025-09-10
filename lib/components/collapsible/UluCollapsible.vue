<template>
  <div
    ref="parent"
    @keydown.esc="handleEscape"
    :class="[classes.container, containerStateClasses]"
  >
    <button
      :class="classes.toggle"
      :id="toggleId"
      :aria-controls="contentId"
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <slot name="toggle" :isOpen="isOpen">
        {{ title }}
      </slot>
    </button>
    <div
      v-if="isOpen"
      :class="classes.content"
      tabindex="-1"
      :id="contentId"
      :aria-hidden="!isOpen"
      :aria-labelledby="toggleId"
    >
      <div :class="classes.contentInner">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, watch } from 'vue';
  import { useAutoAnimate } from '@formkit/auto-animate/vue';
  import { newId } from '../../utils/dom.js';

  const props = defineProps({
    /**
     * v-model for controlling open state
     */
    modelValue: Boolean,
    /**
     * Set title for toggle (instead of using slot)
     */
    title: String,
    /**
     * Closes with escape key
     */
    closeOnEscape: Boolean,
    /**
     * When the component is shown it should start visible or hidden
     */
    startOpen: Boolean,
    /**
     * Enable or configure animations.
     * - `false` (default) to disable all animations.
     * - `true` to enable animations with default settings.
     * - An object to provide custom options to auto-animate (e.g., { duration: 100, easing: 'linear' }).
     */
    animate: {
      type: [Boolean, Object],
      default: false
    },
    /**
     * Classes for elements ({ container, toggle, content, contentInner })
     * - Any valid class binding value per element
     */
    classes: {
      type: Object,
      default: () => ({
        container: 'ulu-collapsible',
        toggle: 'ulu-collapsible__toggle',
        content: 'ulu-collapsible__content',
        contentInner: 'ulu-collapsible__content-inner',
        containerOpen: 'ulu-collapsible--open',
        containerClosed: 'ulu-collapsible--closed'
      })
    },
  });

  const emit = defineEmits(['update:modelValue']);

  const autoAnimateOptions = computed(() => {
    if (typeof props.animate === 'object') {
      return props.animate;
    }
    return {};
  });

  const [parent, enableAnimations] = useAutoAnimate(autoAnimateOptions);

  watch(() => props.animate, (value) => {
    enableAnimations(!!value);
  }, { immediate: true });

  const userControlled = computed(() => props.modelValue !== undefined);
  const internalIsOpen = ref(props.startOpen);

  const isOpen = computed({
    get() {
      return userControlled.value ? props.modelValue : internalIsOpen.value;
    },
    set(newValue) {
      if (userControlled.value) {
        emit('update:modelValue', newValue);
      } else {
        internalIsOpen.value = newValue;
      }
    }
  });

  const toggleId = ref(newId('ulu-collapsible-toggle'));
  const contentId = ref(newId('ulu-collapsible-content'));

  const containerStateClasses = computed(() => {
    const c = props.classes;
    const stateClasses = {};
    if (c.containerOpen && isOpen.value) {
      stateClasses[c.containerOpen] = true;
    }
    if (c.containerClosed && !isOpen.value) {
      stateClasses[c.containerClosed] = true;
    }
    return stateClasses;
  });

  /**
   * Function used to toggle the collapsible
   */
  function toggle() {
    isOpen.value = !isOpen.value;
  }

  function handleEscape() {
    if (props.closeOnEscape && isOpen.value) {
      isOpen.value = false;
    }
  }
</script>