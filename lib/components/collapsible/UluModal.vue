
<template>
  <Teleport 
    :to="teleport === false ? null : teleport"  
    :disabled="teleport === false"
  >
    <dialog
      class="modal" 
      :class="[resolvedModifiers, classes.container]" 
      :aria-labelledby="resolvedLabelledby" 
      :aria-describedby="describedby"
      ref="container" 
      :style="{ width: containerWidth }"
      @cancel.prevent="close"  
      @close="handleDialogCloseEvent"
      @click="handleClick"
    >
      <header 
        v-if="hasHeader" 
        class="modal__header" 
        :class="classes.header"
      >
        <h2 class="modal__title" :class="classes.title" :id="titleId">
          <slot name="title" :close="close">
            <UluIcon 
              v-if="titleIcon" 
              class="modal__title-icon" 
              :icon="titleIcon" 
            />
            <span class="modal__title-text">{{ title }}</span>
          </slot>
        </h2>
        <button 
          class="modal__close" 
          :class="classes.close"
          aria-label="Close modal" 
          @click="close" 
          autofocus
        >
          <slot name="closeIcon">
            <UluIcon 
              class="modal__close-icon" 
              :icon="closeIcon || 'type:close'" 
            />
          </slot>
        </button>
      </header>
      <div 
        class="modal__body" 
        :class="classes.body" 
      >
        <slot :close="close"/>
      </div>
      <div 
        v-if="$slots.footer" 
        class="site-modal__footer" 
        :class="classes.footer" 
      >
        <slot name="footer" :close="close"/>
      </div>
      <button v-if="resizerEnabled" class="modal__resizer" ref="resizer" type="button">
        <slot name="resizerIcon">
          <UluIcon class="modal__resizer-icon" :icon="resizerIcon || resizerIconType" />
        </slot>
      </button>
    </dialog>
  </Teleport>
</template>

<script setup>
  import { useSlots, computed, ref, onMounted, onBeforeUnmount, watch, nextTick } from "vue";
  import UluIcon from "../elements/UluIcon.vue";
  import { useModifiers } from "../../composables/useModifiers.js";
  import { wasClickOutside, preventScroll as setupPreventScroll } from "@ulu/utils/browser/dom.js";
  import { Resizer, observeDialogToggle } from "@ulu/frontend";
  import { newId } from "../../utils/dom.js";

  const emit = defineEmits(["update:modelValue", "close", "open"]);

  const props = defineProps({
    /**
     * Controls the visibility of the modal (for v-model).
     */
    modelValue: Boolean, 
    /**
     * Target for Vue's Teleport. Defaults to 'body'.
     * Set to `false` to disable teleporting (modal renders inline).
     * Set to `null` or `undefined` for `body` fallback with disabled as false.
     */
    teleport: {
      type: [String, Boolean, Object], // Allow string for target selector, or false to disable, or object (Dome node)
      default: "body"
    },
    /**
     * When open and not non-modal, the body is prevented from scrolling (defaults to true).
     */
    preventScroll: {
      type: Boolean,
      default: true
    },
    /**
     * Compensate for layout shift when preventing scroll. Which adds padding equal to scrollbars 
     * width while dialog is open
     */
    preventScrollShift: {
      type: Boolean,
      default: true
    },
    /**
     * Use non-modal interface for dialog
     */
    nonModal: Boolean,
    /**
     * Close modal on click outside
     */
    clickOutsideCloses: {
      type: Boolean,
      default: true
    },
    /**
     * Enable resizer
     */
    allowResize: Boolean,
    /**
     * Position (any position that modal.scss supports)
     */
    position: {
      type: String,
      default: "center"
    },
    /**
     * Use fullscreen layout
     */
    fullscreen: Boolean,
    /**
     * If true, modal is forced to fullscreen on mobile viewports
     */
    fullscreenMobile: Boolean,
    /**
     * If `true`, the modal body will fill the available space. 
     */
    bodyFills: Boolean,
    /**
     * If `true`, no backdrop will be displayed behind the modal
     */
    noBackdrop: Boolean,
    /**
     * If `true`, the modal will not have a minimum height
     */
    noMinHeight: Boolean,
    /**
     * Set aria-labelledby by element id (to add accessible label)
     * - Use this if you are not using the default modal title (custom titles)
     */
    labelledby: String,
    /**
     * Set aria-describedby by element id (to add accessible description)
     * - This is usually content you passed into the modal body (paragraph/etc)
     */
    describedby: String,
    /**
     * Text for modal title in header (can use title slot as well for complex markup), if not passed the header will be omitted
     */
    title: String,
    /**
     * Optional icon for before title (uses UluIcon interface)
     */
    titleIcon: String,
    /**
     * Default icon for resizer
     */
    resizerIcon: String,
    /**
     * Default icon for close button (uses UluIcon interface)
     */
    closeIcon: String,
    /**
     * Classes for elements ({ container, header, title, body, footer })
     * - Any valid class binding value per element
     */
    classes: {
      type: Object,
      default: () => ({
        close: "button button--icon"
      })
    },
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: [String, Array],
  });

  const slots = useSlots();

  const containerWidth = ref(null);
  const titleId = newId("ulu-modal-title");
  const isResizing = ref(false);

  const container = ref(null);
  const resizer = ref(null);

  const hasHeader = computed(() => props.title || slots.title);

  const resizerEnabled = computed(() => {
    const { allowResize, position } = props;
    if (!allowResize || !position) return false;

    const resizablePositions = ["left", "right", "center"];
    if (resizablePositions.includes(position)) {
      return true;
    } else {
      console.warn(`Passed invalid position for resize (${ position }), use ${ resizablePositions.join(", ") }`);
      return false;
    }
  });

  const resizerIconType = computed(() => {
    return props.position === "center" ? "type:resizeBoth" : "type:resizeHorizontal";
  });

  const internalModifiers = computed(() => ({
    [props.position]: props.position, 
    "resize": props.allowResize,
    "no-resize": !props.allowResize,
    "no-header": !hasHeader.value,
    "body-fills": props.bodyFills,
    "no-backdrop": props.noBackdrop,
    "no-min-height": props.noMinHeight,
    "non-modal": props.nonModal,
    "resizer-active": resizerEnabled.value,
    "fullscreen": props.fullscreen,
    "fullscreen-mobile": props.fullscreenMobile,
  }));

  const { resolvedModifiers } = useModifiers({ 
    props: props, 
    baseClass: "modal", 
    internal: internalModifiers 
  });

  const resolvedLabelledby = computed(() => {
    return props.labelledby ? props.labelledby : titleId;
  });

  const close = () => {
    emit("update:modelValue", false);
    emit("close");
  };

  const handleDialogCloseEvent = () => {
    if (props.modelValue) {
      emit("update:modelValue", false);
      emit("close");
    }
  };

  const handleClick = (event) => {
    if (props.clickOutsideCloses && !isResizing.value) {
      const { target } = event;
      if (target === container.value && wasClickOutside(container.value, event)) {
        close();
      }
    }
  };

  let toggleObserver = null;
  let restoreScroll = null;
  let resizerInstance = null;
  let handleResizerStart = null;
  let handleResizerEnd = null;

  const setupToggleObserver = () => {
    if (!props.nonModal && props.preventScroll) {
      toggleObserver = observeDialogToggle(container.value, (isOpen) => {
        if (isOpen) {
          restoreScroll = setupPreventScroll({ preventShift: props.preventScrollShift });
        } else {
          destroyPreventScroll();
        }
      });
    }
  };

  const destroyToggleObserver = () => {
    if (toggleObserver) {
      toggleObserver.destroy();
      toggleObserver = null;
    }
  };

  const destroyPreventScroll = () => {
    if (restoreScroll) {
      restoreScroll();
      restoreScroll = null;
    }
  };

  const setupResizer = () => {
    if (resizerEnabled.value) {
      const options = props.position === "center" ? 
        { fromX: "right", fromY: "bottom", multiplier: 2 } : 
        { fromX: props.position === "right" ? "left" : "right" };
      resizerInstance = new Resizer(container.value, resizer.value, options);
      handleResizerStart = () => {
        isResizing.value = true;
      };
      handleResizerEnd = () => {
        setTimeout(() => { isResizing.value = false; }, 0);
      };
      container.value.addEventListener("ulu:resizer:start", handleResizerStart);
      container.value.addEventListener("ulu:resizer:end", handleResizerEnd);
    } 
  };

  const destroyResizer = () => {
    if (resizerInstance) {
      resizerInstance.destroy();
      resizerInstance = null;
    }
    if (handleResizerStart && container.value) {
      container.value.removeEventListener("ulu:resizer:start", handleResizerStart);
    }
    if (handleResizerEnd && container.value) {
      container.value.removeEventListener("ulu:resizer:end", handleResizerEnd);
    }
  };

  watch(() => props.modelValue, (newValue) => {
    nextTick(() => {
      if (container.value) {
        if (newValue) {
          container.value[props.nonModal ? "show" : "showModal"]();
          emit("open");
        } else {
          container.value.close();
        }
      }
    });
  }, { immediate: true });

  watch(resizerEnabled, (newValue) => {
    if (newValue) {
      nextTick(() => { 
        setupResizer();
      });
    } else {
      destroyResizer();
    }
  }, { immediate: false });

  watch(() => props.position, (newValue, oldValue) => {
    if (newValue !== oldValue) {
      destroyResizer(); 
      nextTick(() => { 
        setupResizer();
      });
    }
  });

  onMounted(() => {
    setupToggleObserver();
    setupResizer();
  });

  onBeforeUnmount(() => {
    if (container.value && container.value.open) {
      container.value.close();
    }
    destroyToggleObserver();
    destroyPreventScroll();
    destroyResizer();
  });
</script>