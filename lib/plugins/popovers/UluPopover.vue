<!-- NOTE: Need to rename classes when moving this into the library -->
<template>
  <button 
    type="button" 
    ref="trigger"
    @click="toggle"
    :id="triggerId"
    :disabled="disabled"
    :class="[ 
      { [activeClass] : isOpen }, 
      classes.trigger 
    ]"
    :aria-expanded="isOpen ? 'true' : 'false'" 
    :aria-controls="id" 
    :aria-label="triggerAlt"
    v-ulu-tooltip="tooltip ? tooltip : null"
  >
    <slot name="trigger" :isOpen="isOpen" :close="close">
      {{ triggerText }}
    </slot>
  </button>

  <UluPopoverContent 
    ref="popoverBase"
    :trigger="trigger"
    :config="resolvedConfig"
    :class="[ 
      size ? `popover--${ size }` : '',
      { 
        'popover--no-padding' : noPadding,
        'is-active' : isOpen
      }, 
      classes.content,
    ]"
    :aria-labelledby="triggerId" 
    :id="id" 
    @keydown.esc="changeTo(false)"
    tabindex="-1"
  >
    <slot :isOpen="isOpen" :toggle="toggle" :close="close"/>
    <template #footer v-if="$slots.footer">
      <slot name="footer" :close="close"/>
    </template>
  </UluPopoverContent>
</template>
<script setup>
  import { ref, computed, unref, nextTick } from "vue";
  import { useRequiredInject } from "../../composables/useRequiredInject.js";
  import { POPOVER_OPTIONS_KEY } from "./index.js";
  import defaults from "./defaults.js";
  import { newId } from "../../utils/dom.js";
  import UluPopoverContent from "./UluPopoverContent.vue";

  const emit = defineEmits(["toggle"]);
  const props = defineProps({
    /**
     * Text for popover button
     */
    triggerText: String,
    /**
     * Add optional aria-label to button for icons/etc
     */
    triggerAlt: String,
    /**
     * Disable trigger button
     */
    disabled: Boolean,
    /**
     * Tooltip text for trigger button
     */
    tooltip: String,
    /**
     * Popover size (ie large, etc)
     */
    size: String,
    /**
     * No padding on popover content
     */
    noPadding: Boolean,
    /**
     * Floating UI config (merged with defaults for popover)
     * - See useUluFloating() composable for config API
     */
    config: {
      type: Object,
      default: () => ({})
    },
    /**
     * Mount this component already open state
     */
    startOpen: Boolean,
    /**
     * Active class for trigger button
     */
    activeClass: {
      type: String,
      default: "is-active"
    },
    /**
     * Add custom classes to specific elements
     * { trigger, content }
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Close popover when click is outside
     */
    clickOutsideCloses: {
      type: Boolean,
      default: true
    },
    /**
     * Direct focus when open/closing popover
     */
    directFocus: {
      type: Function,
      default: ({ isOpen, content }) => {
        if (isOpen && content) {
          content.focus({ preventScroll: true });
        }
      }
    }
  });

  const id = newId();
  const triggerId = newId();

  // Inject global options, falling back to the static defaults file.
  const injectedOptions = useRequiredInject(POPOVER_OPTIONS_KEY);
  const baseConfig = injectedOptions ? injectedOptions.popover : defaults.popover;

  // Create a plain config object, same as pre-refactor.
  const resolvedConfig = computed(() => ({ ...baseConfig, ...props.config }));
  
  const isOpen = ref(props.startOpen || false);
  const trigger = ref(null);
  const popoverBase = ref(null);

  const toggle = () => {
    changeTo(!isOpen.value);
  };

  const changeTo = (toOpen) => {
    isOpen.value = toOpen;
    
    const contentRef = popoverBase.value?.content;
    const focusArgs = { 
      trigger: unref(trigger), 
      content: unref(contentRef), 
      isOpen: unref(isOpen) 
    };
    const eventArgs = { isOpen: focusArgs.isOpen };
    
    nextTick(() => {
      if (isOpen.value) {
        popoverBase.value?.update();
        // Push to next event, without this will get triggered by the original click event
        window.setTimeout(() => {
          addOutsideClick();
          props.directFocus(focusArgs);
          emit("toggle", eventArgs);
        }, 0);
      } else {
        destroyOutsideClick();
        props.directFocus(focusArgs);
        emit("toggle", eventArgs);
      }
    });
  };
  
  let outsideHandler;
  const addOutsideClick = () => {
    if (props.clickOutsideCloses) {
      if (outsideHandler) {
        destroyOutsideClick();
      }
      outsideHandler = event => {
        const contentRef = popoverBase.value?.content;
        if (contentRef && !contentRef.contains(event.target)) {
          changeTo(false);
        }
      };
      document.addEventListener("click", outsideHandler);
    }
  };
  const destroyOutsideClick = () => {
    if (outsideHandler) {
      document.removeEventListener("click", outsideHandler);
      outsideHandler = null;
    }
  };
  const close = () => changeTo(false);

  defineExpose({
    /**
     * The reactive internal open/closed state of the popover
     */
    isOpen,
    /**
     * Method to toggle the popover open/closed
     */
    toggle,
    /**
     * Method to force the popover closed
     */
    close,
    /**
     * Method to explicitly set the open state
     * @param {Boolean} toOpen - The desired state
     */
    changeTo
  });
</script>