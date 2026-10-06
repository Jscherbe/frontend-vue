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

  <UluPopoverBase 
    ref="popoverBase"
    :trigger="trigger"
    :config="resolvedConfig"
    :isOpen="isOpen"
    :clickOutsideCloses="clickOutsideCloses"
    :directFocus="directFocus"
    :class="[ 
      size ? `popover--${ size }` : '',
      { 
        'popover--no-padding' : noPadding
      }, 
      classes.content,
    ]"
    :aria-labelledby="triggerId" 
    :id="id" 
    @close="changeTo(false)"
  >
    <slot :isOpen="isOpen" :toggle="toggle" :close="close"/>
    <template #footer v-if="$slots.footer">
      <slot name="footer" :close="close"/>
    </template>
  </UluPopoverBase>
</template>
<script setup>
  import { ref, computed } from "vue";
  import { useRequiredInject } from "../../composables/useRequiredInject.js";
  import { POPOVER_OPTIONS_KEY } from "./index.js";
  import defaults from "./defaults.js";
  import { newId } from "../../utils/dom.js";
  import UluPopoverBase from "./UluPopoverBase.vue";

  const emit = defineEmits(["toggle", "update:modelValue"]);
  const props = defineProps({
    /**
     * V-model state to control the popover externally
     */
    modelValue: {
      type: Boolean,
      default: undefined
    },
    triggerText: String,
    triggerAlt: String,
    disabled: Boolean,
    tooltip: String,
    size: String,
    noPadding: Boolean,
    config: {
      type: Object,
      default: () => ({})
    },
    startOpen: Boolean,
    activeClass: {
      type: String,
      default: "is-active"
    },
    classes: {
      type: Object,
      default: () => ({})
    },
    clickOutsideCloses: {
      type: Boolean,
      default: true
    },
    /**
     * Direct focus when open/closing popover.
     * Overrides UluPopoverBase's default focus management.
     */
    directFocus: Function
  });

  const id = newId();
  const triggerId = newId();

  const injectedOptions = useRequiredInject(POPOVER_OPTIONS_KEY);
  const baseConfig = injectedOptions ? injectedOptions.popover : defaults.popover;
  const resolvedConfig = computed(() => ({ ...baseConfig, ...props.config }));
  
  const internalIsOpen = ref(props.startOpen || false);
  const trigger = ref(null);
  const popoverBase = ref(null);

  const isOpen = computed({
    get() {
      return props.modelValue !== undefined ? props.modelValue : internalIsOpen.value;
    },
    set(val) {
      if (props.modelValue !== undefined) {
        emit("update:modelValue", val);
      } else {
        internalIsOpen.value = val;
      }
    }
  });

  const toggle = () => {
    changeTo(!isOpen.value);
  };

  const changeTo = (toOpen) => {
    isOpen.value = toOpen;
    emit("toggle", { isOpen: toOpen });
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
