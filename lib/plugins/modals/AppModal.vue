
<template>
  <div 
    class="site-modal__container" 
    ref="container" 
    :style="{ width: containerWidth }"
  >
    <div class="site-modal__header" :class="classes.header">
      <h2 class="site-modal__title h3" id="site-modal__label" tabindex="0">
        <slot name="title">
          {{ title }}
        </slot>
      </h2>
      <button 
        class="site-modal__close" 
        @click="close" 
        aria-label="close dialog"
      >
        <FaIcon icon="fas fa-xmark"/>
      </button>
    </div>
    <div 
      class="site-modal__body" 
      :class="[
        { 'site-modal__body--full': bodyFull },
        classes.body
      ]"
    >
      <slot></slot>
    </div>
    <div 
      v-if="$slots.footer" 
      class="site-modal__footer" 
      :class="classes.footer" 
    >
      <slot name="footer"></slot>
    </div>
    <div 
      v-if="resizer" 
      class="site-modal__resizer"
      @pointerdown="onResizer"
    >
      <FaIcon class="site-modal__resizer-icon" icon="fas fa-grip-lines-vertical"/>
    </div>
  </div>
</template>

<script>
  import { throttle } from "@/utils/time.js";
  export default {
    name: "AppModal",
    props: {
      title: String,
      position: String,
      bodyFull: Boolean,
      classes: {
        type: Object,
        default: () => ({})
      },
      resizer: Boolean
    },
    data() {
      return {
        containerWidth: null
      };
    },
    methods: {
      close() {
        this.$modals.close();
      },
      onResizer(event) {
        const { container } = this.$refs;
        const fromLeft = this.position === "right";
        const doc = document.documentElement;
        const win = document.defaultView;
        const x = event.clientX;
        const width = parseInt(win.getComputedStyle(container).width, 10);
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
    }
  };
</script>

<style lang="scss">
  // .AppModal__header {
  //   display: flex;
  // }
  // .AppModal__header-close {
  //   margin-left: auto;
  //   &:after {
  //     display: inline-block;
  //     content: "\00d7"; // Times
  //     content: "\00d7" / ""; 
  //   }
  // }

  // $modal-pad: 1.5rem;
  // $space: 1rem;
  // $space-large: 2rem;
  // $gray-background-color: rgb(223, 223, 223);
  // $line-height-dense: 1.2;
  // $shadow: 0 1px 5px rgba(0,0,0,0.2);
  // $divider: 1px solid #ccc;

  // .AppModal {
  //   position: relative;
  //   width: 50em;
  //   max-width: 90vw;
  //   min-height: 30em;
  //   max-height: 90vh;
  //   overflow: auto;
  //   display: flex;
  //   flex-direction: column;
  // }
  // .AppModal--small {
  //   width: 36em;
  //   min-height: 15em;
  // }
  // .AppModal--medium {
  //   width: 60em;
  //   height: 70vh;
  // }
  // .AppModal--large {
  //   width: 70em;
  //   height: 80vh;
  // }
  
  // .AppModal__header {
  //   display: flex;
  //   margin: $modal-pad $modal-pad 0 $modal-pad;
  //   border-bottom: $divider;
  //   padding: 0 0 $space 0;

  // }
  // .AppModal__header-title {
  //   margin-right: 1.5rem;
  // }
  // .AppModal__header-close {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   margin-left: auto;
  //   width: 2em;
  //   height: 2em;
  //   top: 0.5em;
  //   right: 0.5em;
  //   z-index: 2;
  //   background-color: rgba(white, 0.80);
  //   box-shadow: $shadow;
  //   border-radius: 50%;
  //   color: lighten(black, 30%);
  //   transition: color 200ms, background-color 500ms;
  //   &:hover,
  //   &:focus {
  //     color: black;
  //     background-color: shade(white, 10%);
  //   }
  // }
  // .AppModal__content {
  //   width: 100%;
  //   overflow: auto;
  //   padding: $modal-pad;
  // }
  
  // .AppModal__footer {
  //   margin-top: auto;
  //   background-color: $gray-background-color;
  //   padding: $space $modal-pad;
  //   line-height: $line-height-dense;
  //   text-align: right;
  // }
</style>

<!-- 
  Old Notes on Performance: 
  - Explored using style binding (using Vue) ie  :style="{ width: containerWidth }"
    - But this means the animation will be at the mercy of vue's update cycle and we
      want this to run as close to 60fps as possible to look smooth. Depending on users
      computer the lag in update from Vue (also out of time with browser painting) could
      be noticable. 
      - The ref method is safe as it won't change in the span of the drag with is the only 
        time the event handlers are bound to anything
    - Thinking about maybe doing two things, reactive binding that is set (incase for any 
      reason the component is re-mounted?) it could be set to null during the actual drag 
      and then be set to the last width set in the drag before the drag handlers are destroyed
    - I think the first approach (relying on component $el) is find. The Vue lifecycle won't 
      change the element unless it's remounted (which would be a new modal), so for data/slot 
      updates the component will just run the update cycle and the element would still be the 
      same, refs on inner elements could change but since this is the outer component element 
      it should be safe
      - Vue docs recommend using template ref, and other users mention that the $el could change 
        in future versions of Vue, reverting to second idea
-->