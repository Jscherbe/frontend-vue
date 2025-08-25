<template>
  <div :class="[wrapperClass, { [activeClass] : activeClass && section?.active }]" ref="element">
    <component :is="titleElement" :class="titleClass" :id="titleId">
      {{ title }}
    </component>
    <slot :section="section"></slot>
  </div>
</template>

<script>
  import { computed } from "vue";
  import { urlize } from "@ulu/utils/string.js";
  import { REGISTER, UNREGISTER, SECTIONS } from "./symbols.js";
  export default {
    name: "ScrollAnchorsSection",
    props: {
      title: String,
      titleElement: {
        type: String,
        default: "h2"
      },
      titleClass: {
        type: String,
        default: "h2"
      },
      anchorId: String,
      wrapperClass: {
        type: String,
        default: "scroll-anchors__section"
      },
      activeClass: {
        type: String,
        default: 'is-active'
      }
    },
    inject: {
      register: { from: REGISTER }, 
      unregister: { from: UNREGISTER },
      sections: { from: SECTIONS, default: () => computed(() => []) }
    },
    data() {
      const { anchorId, title } = this;
      return {
        titleId: anchorId || `sas-title-${ urlize(title) }`
      };
    },
    computed: {
      section() {
        return this.sections.find(s => s.instance === this);
      }
    },
    mounted() {
      if (this.register) {
        this.register(this);
      }
    },
    unmounted() {
      if (this.unregister) {
        this.unregister(this);
      }
    }
  };
</script>