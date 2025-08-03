<template>
  <span 
    class="tag"
    :class="[
      {
        'tag--small' : small,
        'type-small' : small
      }, 
      resolvedModifiers
    ]"
  >
    <UluIcon v-if="icon" :definition="icon" />
    <slot>
      {{ text }}
    </slot>
  </span>
</template>

<script>
  import UluIcon from "./UluIcon.vue";
  import { useModifiers } from "../composables/useModifiers.js";
  export default {
    name: "UluTag",
    components: {
      UluIcon
    },
    props: {
      type: [String],
      /**
       * Preset to set small modifier and small type size
       */
      small: Boolean,
      /**
       * Text for tag, or use slot
       */
      text: [String, Number],
      /**
       * Icon prop, if used will set the icon for the button, will use UluIcon (which uses font-awesome icons conditionally)
       * - If using custom icons use slot instead
       */
      icon: [String, Array],
      /**
       * Modifiers for tag class
       */
      modifiers: [String, Array]
    },
    setup(props) {
      const { resolvedModifiers } = useModifiers({ props, baseClass: "tag" });
      return { resolvedModifiers };
    }
  };
</script>