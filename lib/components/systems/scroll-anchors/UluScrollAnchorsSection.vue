<template>
  <div class="scroll-anchors__section" ref="element">
    <component :is="titleElement" :class="titleClass" :id="titleId">
      {{ title }}
    </component>
    <slot/>
  </div>
</template>

<script>
  import { urlize } from "@ulu/utils/string.js";
  import { REGISTER, UNREGISTER } from "./symbols.js";
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
    },
    inject: {
      register: { from: REGISTER }, 
      unregister: { from: UNREGISTER },
    },
    data() {
      const { anchorId, title } = this;
      return {
        titleId: anchorId || `sas-title-${ urlize(title) }`
      };
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