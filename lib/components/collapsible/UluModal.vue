
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
      @toggle="handleToggle"
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
              :definition="titleIcon" 
            />
            <span class="modal__title-text">{{ title }}</span>
          </slot>
        </h2>
        <button class="modal__close" aria-label="Close modal" @click="close" autofocus>
          <slot name="closeIcon">
            <UluIcon 
              v-if="closeIcon" 
              class="modal__close-icon" 
              :definition="closeIcon" 
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
          <UluIcon class="modal__resizer-icon" :definition="resizerIcon" />
        </slot>
      </button>
    </dialog>
  </Teleport>
</template>

<script>
  import { useSlots, computed } from "vue";
  import UluIcon from "../elements/UluIcon.vue";
  import { useModifiers } from "../../composables/useModifiers.js";
  import { wasClickOutside, preventScroll as setupPreventScroll } from "@ulu/utils/browser/dom.js";
  import { Resizer } from "@ulu/frontend/js/ui/resizer.js";

  let modalCount = 0;
  
  export default {
    name: "UluModal",
    components: {
      UluIcon
    },
    emits: ['update:modelValue', 'close', 'open'],
    props: {
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
        default: 'body'
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
      resizerIcon: {
        type: String,
        default: "fas fa-grip"
      },
      /**
       * Default icon for close button (uses UluIcon interface)
       */
      closeIcon: {
        type: String,
        default: "fas fa-xmark"
      },
      /**
       * Classes for elements ({ container, header, title, body, footer })
       * - Any valid class binding value per element
       */
      classes: {
        type: Object,
        default: () => ({})
      },
      /**
       * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
       */
      modifiers: [String, Array]
    },
    data() {
      ++modalCount;
      return {
        containerWidth: null,
        titleId: `ulu-modal-${ modalCount }-title`,
        bodyOverflowValue: null,
        bodyPaddingRightValue: null,
        isResizing: false,
      }
    },
    setup(props) {
      const slots = useSlots(); // Access slots via useSlots() helper

      // Note: These two computed need to be defined in setup since their used in internalModifiers
      const hasHeader = computed(() => props.title || slots.title);
      /**
       * Flag for if resizer script should be enabled
       * - Resizer only available for left and right
       */
      const resizerEnabled = computed(() => {
        const { allowResize, position } = props;
        if (!allowResize || !position) return;

        const resizablePositions = ["left", "right", "center"];
        if (resizablePositions.includes(position)) {
          return true;
        } else {
          console.warn(`Passed invalid position for resize (${ position }), use ${ resizablePositions.join(", ") }`);
          return false;
        }
      });

      // Define the internal modifiers object as a computed property (so it can react to changes)
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
      }));

      const { resolvedModifiers } = useModifiers({ 
        props: props, 
        baseClass: "modal", 
        internal: internalModifiers 
      });

      return { 
        resolvedModifiers,
        hasHeader,
        resizerEnabled, 
      };
    },
    computed: {
      resolvedLabelledby() {
        const { labelledby, titleId } = this;
        return labelledby ? labelledby : titleId;
      }
    },
    watch: {
      modelValue: {
        // So that it runs on mount (if modelValue is initially true)
        immediate: true, 
        handler(newValue) {
          // Use nextTick to ensure the dialog element is in the DOM before calling showModal
          this.$nextTick(() => {
            const { container } = this.$refs;
            if (newValue) {
              container[this.nonModal ? "show" : "showModal"]();
              this.$emit("open");
            } else {
              container.close();
            }
          });
        }
      },
      resizerEnabled: {
        immediate: false, // Don't run on initial mount, as setupResizer is called in mounted
        handler(newValue) {
          if (newValue) {
            this.$nextTick(() => { 
              this.setupResizer();
            });
          } else {
            this.destroyResizer();
          }
        }
      },
      position(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.destroyResizer(); 
          this.$nextTick(() => { 
            this.setupResizer();
          });
        }
      }
    },
    methods: {
      close() {
        // Emit 'update:modelValue' to inform parent to set modelValue to false
        // This will trigger the watch handler above to call this.$refs.container.close()
        this.$emit("update:modelValue", false);
        this.$emit("close"); // Also emit a generic 'close' event for convenience
      },
      handleDialogCloseEvent() {
        // Ensure modelValue is false, primarily for scenarios where dialog is closed
        // by user agent (e.g., form submission within dialog) or direct native API call
        // that bypasses `this.close()` or Escape key.
        if (this.modelValue) { // Only emit if it was open based on modelValue
          this.$emit("update:modelValue", false);
          this.$emit("close");
        }
      },
      handleClick(event) {
        if (this.clickOutsideCloses && !this.isResizing) {
          const { target } = event;
          const { container } = this.$refs;
          if (target === container && wasClickOutside(container, event)) {
            this.close();
          }
        }
      },
      setupPreventScroll() {
        const { body } = document;
        this.bodyOverflowValue = body.style.overflow;
        this.bodyPaddingRightValue = body.style.paddingRight;
      },
      destroyPreventScroll() {
        if (this.restoreScroll) {
          this.restoreScroll();
        }
      },
      handleToggle(event) {
        if (!this.nonModal && this.preventScroll) {
          const { preventScrollShift: preventShift } = this;
          const isOpen = event.newState === "open";
          if (isOpen) {
            this.restoreScroll = setupPreventScroll({ preventShift });
          } else {
            this.destroyPreventScroll();
          }
        }
      },
      setupResizer() {
        const { position, resizerEnabled } = this;
        if (resizerEnabled) {
          const { container, resizer } = this.$refs;
          const options = position === "center" ? 
            { fromX: "right", fromY: "bottom", multiplier: 2 } : 
            { fromX: position === "right" ? "left" : "right" };
          this.resizerInstance = new Resizer(container, resizer, options);
          this.handleResizerStart = () => {
            this.isResizing = true;
          };
          this.handleResizerEnd = () => {
            // After click has ended (next in event loop)
            setTimeout(() => { this.isResizing = false; }, 0)
          };
          container.addEventListener("ulu:resizer:start", this.handleResizerStart);
          container.addEventListener("ulu:resizer:end", this.handleResizerEnd);
        } 
      },
      destroyResizer() {
        const { container } = this.$refs;
        if (this.resizerInstance) {
          this.resizerInstance.destroy();
          this.resizerInstance = null;
        }
        if (this.handleResizerStart) {
          container.removeEventListener("ulu:resizer:start", this.handleResizerStart);
        }
        if (this.handleResizerEnd) {
          container.removeEventListener("ulu:resizer:end", this.handleResizerEnd);
        }
      }
    },
    mounted() {
      ++modalCount;
      if (this.preventScroll) {
        this.setupPreventScroll();
      }
      this.setupResizer();
    },
    beforeUnmount() {
      const { container } = this.$refs;
      if (container && container.open) {
        container.close();
      }
      this.destroyPreventScroll();
      this.destroyResizer();
    }
  };
</script>