
<template>
  <Teleport 
    :to="teleport === false ? null : teleport" 
    :disabled="teleport === false"
  >
    <dialog
      class="modal" 
      :class="[resolvedClasses, resolvedModifiers, classes.container]" 
      :aria-labelledby="resolvedLabelledby" 
      :aria-describedby="describedby"
      ref="container" 
      :style="{ width: containerWidth }"
      @cancel.prevent="close"  
      @close="handleDialogCloseEvent"
      @click="handleClick"
    >
      <header 
        v-if="title || $slots.title" 
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
        :close="close"
      >
        <slot/>
      </div>
      <div 
        v-if="$slots.footer" 
        class="site-modal__footer" 
        :class="classes.footer" 
        :close="close"
      >
        <slot name="footer"></slot>
      </div>
      <div 
        v-if="resizerEnabled" 
        class="modal__resizer" 
        @pointerdown="handleResizer"
      >
        <slot name="resizerIcon">
          <UluIcon class="modal__resizer-icon" :definition="resizerIcon" />
        </slot>
      </div>
    </dialog>
  </Teleport>
</template>

<script>
  import UluIcon from "./UluIcon.vue";
  import { useModifiers } from "../composables/useModifiers.js";
  import { throttle } from "@ulu/utils/performance.js";
  import { wasClickOutside } from "@ulu/utils/browser/dom.js";
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
      position: String,
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
        default: "fas fa-grip-lines-vertical"
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
        titleId: `ulu-modal-${ modalCount }-title`
      }
    },
    setup(props) {
      const { resolvedModifiers } = useModifiers(props, "button");
      return { resolvedModifiers };
    },
    computed: {
      resolvedLabelledby() {
        const { labelledby, titleId } = this;
        return labelledby ? labelledby : titleId;
      },
      resolvedClasses() {
        const { position, allowResize } = this;
        const mods = [];
        if (position) {
          mods.push(position);
        }
        if (allowResize) {
          mods.push("resize");
        }
        return mods.map(modifier => `modal--${ modifier }`);
      },
      /**
       * Flag for if resizer script should be enabled
       * - Resizer only available for left and right
       */
      resizerEnabled() {
        const { allowResize, position } = this;
        return allowResize && position && ["left", "right"].includes(position);
      },
    },
    watch: {
      modelValue(newValue) {
        const { container } = this.$refs;
        if (newValue) {
          // Use nextTick to ensure the dialog element is in the DOM before calling showModal
          this.$nextTick(() => {
            container.showModal();
             this.$emit("open");
          });
        } else {
          container.close();
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
        const { clickOutsideCloses } = this;
        
        if (clickOutsideCloses) {
          const { target } = event;
          const { container } = this.$refs;
          if (target === container && wasClickOutside(container, event)) {
            this.close();
          }
        }
      },
      handleResizer(resizeEvent) {
        const { container } = this.$refs;
        const fromLeft = this.position === "right";
        const doc = document.documentElement;
        const x = resizeEvent.clientX;
        const width = parseInt(window.getComputedStyle(container).width, 10);
        const onFrame = throttle(window.requestAnimationFrame);
        // Reactive property disabled so that we can directly write styles below
        this.containerWidth = null;
        let lastWidth = null;

        // if (overrideMaxWidth) {
        //   container.style.maxWidth = 'none';
        // }

        const mousemove = event => {
          onFrame(() => {
            const polarity = fromLeft ? -1 : 1;
            lastWidth = `${ width + ((event.clientX - x) * polarity) }px`;
            container.style.width = lastWidth;
          });
        };
        const cleanup = () => {
          doc.removeEventListener("pointermove", mousemove, false);    
          this.containerWidth = lastWidth;
        };
        doc.addEventListener("pointermove", mousemove, false);
        doc.addEventListener("pointerup", cleanup, { capture: true, once: true });
      }
    },
    mounted() {
      ++modalCount;
      // If the modal is initially visible, open it correctly
      if (this.modelValue) {
        this.modelValue = true; // Trigger watch to open the dialog correctly
      }
    },
    beforeUnmount() {
      const { container } = this.$refs;
      if (container && container.open) {
        container.close();
      }
    }
  };
</script>