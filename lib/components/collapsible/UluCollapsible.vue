<template>
  <div
    ref="container"
    @keydown.esc="handleEscape"
    :class="[classes.container, containerStateClasses]"
  >
    <button
      :class="classes.trigger"
      :id="triggerId"
      :aria-controls="contentId"
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <slot name="trigger" :isOpen="isOpen">
        {{ triggerText }}
      </slot>
    </button>
    <div
      v-if="isOpen"
      :class="classes.content"
      tabindex="-1"
      :id="contentId"
      :aria-hidden="!isOpen"
      :aria-labelledby="triggerId"
    >
      <div :class="classes.contentInner">
        <slot :isOpen="isOpen" :toggle="toggle" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, watch, onMounted } from 'vue';
  import { useAutoAnimate } from '@formkit/auto-animate/vue';
  import { newId } from '../../utils/dom.js';

  const props = defineProps({
    /**
     * v-model for controlling open state
     */
    modelValue: {
      type: Boolean,
      default: undefined
    },
    /**
     * Set text for trigger (instead of using slot)
     */
    triggerText: String,
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
     * - `true` to enable animations with default settings (default)
     * - `false` (disable)
     * - An object to provide custom options to auto-animate (e.g., { duration: 100, easing: 'linear' }).
     */
    animate: {
      type: [Boolean, Object],
      default: true
    },
    /**
     * Classes for elements ({ container, trigger, content, contentInner })
     * - Any valid class binding value per element
     */
    classes: {
      type: Object,
      default: () => ({
        container: 'ulu-collapsible',
        trigger: 'ulu-collapsible__trigger',
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

  const [container, enableAnimations] = useAutoAnimate(autoAnimateOptions);

  // Animation needs to be disabled after the component is mounted
  onMounted(() => { enableAnimations(!!props.animate) });
  // Then we can watch for changes
  watch(() => props.animate, v => { enableAnimations(!!v) });

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

  const triggerId = ref(newId('ulu-collapsible-trigger'));
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