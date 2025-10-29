<!-- 
Version: 0.0.2
Changes: 
  - 0.0.2 | Added transition initial state/class so the indicator 
            doesn't transition at first
-->
<template>
  <component 
    v-if="sections.length" 
    :is="element"
    class="scroll-anchors__nav scroll-anchors__nav--animated"
  >
    <ul class="scroll-anchors__rail">
      <li 
        v-for="(item, index) in sections" :key="index"
        :class="{ 'is-active' : item.active }"
      >
        <a 
          :class="{ 'is-active' : item.active }"
          :ref="(el) => addLinkRef(index, el)"
          :href="`#${ item.titleId }`" 
        >
          {{ item.title }}
        </a>
      </li>
    </ul>
    <div 
      class="scroll-anchors__indicator"
      :class="{
        'scroll-anchors__indicator--can-transition' : indicatorAnimReady
      }"
      ref="indicator"
      :style="{ 
        opacity: indicatorStyles ? '1' : '0',
        transform: `translateY(${ indicatorStyles.y }px)`,
        height: `${ indicatorStyles.height }px`,
      }"
    ></div>
  </component>
</template>

<script>
  import { runAfterFramePaint } from "@ulu/utils/browser/performance.js";
  import { SECTIONS } from "./symbols.js";
  export default {
    name: "ScrollAnchorsNavAnimated",
    inject: {
      sections: { from: SECTIONS }
    },
    props: {
      /**
       * Element to use for container
       */
      element: {
        type: String,
        default: "nav"
      },
    },
    data() {
      return {
        linkRefs: {},
        indicatorAnimReady: false
      };
    },
    computed: {
      indicatorStyles() {
        const { sections, linkRefs } = this;
        const linkCount = Object.keys(linkRefs).length;
        // Checking for sections and link refs incase 
        // we were waiting for the components to mount, etc
        if (!sections || !linkCount) {
          return false;
        }
        const activeIndex = sections.findIndex(s => s.active);
        if (activeIndex === -1) {
          return false;
        }
        const link = this.linkRefs[activeIndex];
        const { offsetTop, offsetHeight } = link;
        return {
          y: offsetTop,
          height: offsetHeight,
          initial: this.inidica
        };
      }
    },
    watch: {
      indicatorStyles(val) {
        if (val && !this.indicatorAnimReady) {
          runAfterFramePaint(() => {
            this.indicatorAnimReady = true;
          });
        }
      }
    },
    methods: {
      addLinkRef(index, el) {
        this.linkRefs[index] = el;
      }
    }
  };
</script>

<style lang="scss">
  // User can override these styles
  // - Think this is better than props/etc 
  //   - Refactored from props to just plain css to be overridden
  .scroll-anchors__nav {
    position: relative;
  }
  .scroll-anchors__rail {
    border-left: 3px solid rgb(220, 220, 220);
    padding-left: 1rem;
  }
  .scroll-anchors__indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    background-color: black;
  }
  .scroll-anchors__indicator--can-transition {
    transition-property: height, transform;
    transition-timing-function: ease-in-out;
    transition-duration: 250ms;
  }
</style>