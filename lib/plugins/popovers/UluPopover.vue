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
  <span 
    class="popover"
    ref="content"
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
    :style="floatingStyles"
    :data-placement="placement"
    @keydown.esc="changeTo(false)"
    tabindex="-1"
  >
    <span class="popover__inner">
      <slot :isOpen="isOpen" :toggle="toggle" :close="close"/>
    </span>
    <span v-if="$slots.footer" class="popover__footer">
      <slot name="footer" :close="close"/>
    </span>
    <span 
      v-if="config.arrow"
      class="popover__arrow" 
      ref="contentArrow"
      :style="arrowStyles"
      data-ulu-popover-arrow
    ></span>
  </span>
</template>
<script setup>
  import { computed, ref, unref, nextTick } from "vue";
  import { options as defaults } from "./manager.js";
  import { newUid } from "./utils.js";
  import { 
    useFloating,
    autoUpdate,
    offset,
    inline,
    flip,
    shift,
    arrow,
  } from "@floating-ui/vue";

  const emit = defineEmits(["toggle"]);
  const props = defineProps({
    triggerText: String,
    triggerAlt: String,
    disabled: Boolean,
    tooltip: String,
    size: String,
    noPadding: Boolean,
    config: Object,
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
    directFocus: {
      type: Function,
      default: ({ isOpen, content }) => {
        if (isOpen) {
          content.focus({ preventScroll: true });
        }
      }
    }
  });

  const id = newUid();
  const triggerId = newUid();
  const config = Object.assign({}, defaults.popover, props.config);
  const isOpen = ref(props.startOpen || false);
  const trigger = ref(null);
  const content = ref(null);
  const contentArrow = ref(null);

  const middleware = [
    ...(config.inline ? [ inline() ] : []),
    ...(config.offset ? [ offset(config.offset) ] : []),
    flip(), 
    shift(),
    ...(config.arrow ? [ arrow({ element: contentArrow }) ] : []),
  ];
  const options = {
    placement: config.placement,
    whileElementsMounted: autoUpdate,
    middleware
  }; 
  
  const { 
    floatingStyles, 
    placement, 
    middlewareData,
    update,
    isPositioned,
  } = useFloating(trigger, content, options);

  const arrowStyles = computed(() => {
    const pos = middlewareData.value?.arrow;
    if (!pos) return null;
    return {
      position: "absolute",
      left: pos?.x != null ? `${ pos.x }px` : "",
      top: pos?.y != null ? `${ pos.y }px` : "",
    };
  });

  if (config.onReady) {
    config.onReady({ update, isPositioned });
  }

  const toggle = () => {
    changeTo(!isOpen.value);
  };

  const changeTo = (toOpen) => {
    isOpen.value = toOpen;
    const focusArgs = { 
      trigger: unref(trigger), 
      content: unref(content), 
      isOpen: unref(isOpen) 
    };
    const eventArgs = { isOpen: focusArgs.isOpen };
    nextTick(() => {
      if (isOpen.value) {
        update();
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
        if (!content.value.contains(event.target)) {
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
</script>