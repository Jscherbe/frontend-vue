<template>
  <!-- 
    Use span so it can be used in any element type
    - May be able to remove the wrapping element (since vue allows multiple now and we popper seems to work without a relative context [ie. could be the page I think doesn't matter])
   -->
  <!-- <span class="site-popover"> -->
    <button 
      type="button" 
      ref="toggle"
      @click="toggle"
      :disabled="disabled"
      :class="[ 
        { 'is-active' : isOpen }, 
        classes.toggle 
      ]"
      :aria-expanded="isOpen ? 'true' : 'false'" 
      :aria-controls="id" 
      :aria-label="toggleAlt"
      v-tooltip="tooltip ? tooltip : null"
    >
      <slot name="toggle" :isOpen="isOpen"/>
    </button>
    <span 
      class="site-popover"
      ref="content"
      :class="[ 
        size ? `site-popover--${ size }` : '',
        { 
          'site-popover--no-padding' : noPadding,
          'site-popover--w-footer' : $slots.footer,
          'is-active' : isOpen
        }, 
        classes.content,
      ]"
      :aria-hidden="isOpen ? 'false' : 'true'" 
      :id="id" 
      @keydown.esc="changeTo(false)"
      tabindex="-1"
    >
      <span class="site-popover__inner">
        <slot name="content"/>
      </span>
      <span v-if="$slots.footer" class="site-popover__footer">
        <slot name="footer"/>
      </span>
      <span class="site-popover__arrow" data-popper-arrow="true"></span>
    </span>
  <!-- </span> -->
</template>

<script>
  import { createPopper } from "../../utils/popper.js";
  let idCount = 0;
  export default {
    name: "AppPopover",
    props: {
      toggleAlt: String,
      disabled: Boolean,
      tooltip: String,
      size: String,
      noPadding: Boolean,
      idPrefix: {
        type: String,
        default: "apo-"
      },
      classes: {
        type: Object,
        default: () => ({})
      },
      startOpen: {
        type: Boolean,
        default: false
      },
      placement: {
        type: String,
        default: "bottom"
      },
      strategy: {
        type: String,
        default: "absolute"
      },
      flipOptions: {
        type: Object,
        default: () => ({ fallbackPlacements: ["left", "top"] })
      },
      offsetOptions: {
        type: Object,
        default: () => ({ offset: [0, 16] })
      },
      preventOverflowOptions: {
        type: Object,
        default: () => ({ mainAxis: true })
      },
      noClickOtsideClose: Boolean,
      noEscapeClose: Boolean,
      directFocus: {
        type: Function,
        default: ({ isOpen, content }) => {
          if (isOpen) {
            content.focus({ preventScroll: true });
          }
        }
      }
    },
    data() {
      return {
        id: `${ this.idPrefix }${ ++idCount }`,
        isOpen: this.startOpen,
        popper: null,
        outsideClickHandler: null
      };
    },
    methods: {
      toggle() {
        this.changeTo(!this.isOpen);
      },
      changeTo(isOpen) {
        this.isOpen = isOpen;
        const { content, toggle } = this.$refs;
        const focusArgs = { content, toggle, isOpen };
        this.$nextTick(() => {
          this.popper.setOptions(this.getOptions(isOpen));
          if (isOpen) {
            this.popper.update();
            // Push to next event outside of this one
            // without this this will get triggered by the original click event
            window.setTimeout(() => {
              this.setupOutsideClick();
              this.directFocus(focusArgs);
            }, 0);
          } else {
            this.destroyOutsideClick();
            this.directFocus(focusArgs);
          }
        });
      },
      /**
       * Creates the popper js options which are different depending on
       * if the popover is open or closed
       * @see https://popper.js.org/docs/v2/tutorial/ (performance section)
       */
      getOptions(enabled) {
        const { placement, strategy } = this;
        return { 
          placement, 
          strategy,
          modifiers: [ 
            { 
              name: "offset",
              options: this.offsetOptions,
            },
            {
              name: "preventOverflow",
              options: this.preventOverflowOptions
            },
            {
              name: "flip",
              options: this.flipOptions,
            },
            { name: "eventListeners", enabled } 
          ]
        };
      },
      setupOutsideClick() {
        const { content } = this.$refs;
        if (!this.noClickOtsideClose) {
          this.outsideClickHandler = event => {
            if (!content.contains(event.target)) {
              this.changeTo(false);
            }
          };
          document.addEventListener("click", this.outsideClickHandler);
        }
      },
      destroyOutsideClick() {
        if (this.outsideClickHandler) {
          document.removeEventListener("click", this.outsideClickHandler);
          this.outsideClickHandler = null;
        }
      }
    },
    mounted() {
      const { toggle, content } = this.$refs;
      this.popper = createPopper(toggle, content, this.getOptions(false));
    },
    beforeUnmount() {
      this.popper?.destroy();
      this.destroyOutsideClick();
    },
  };
</script>