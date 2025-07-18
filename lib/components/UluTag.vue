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
    <FaIcon v-if="icon" :icon="icon" />
    <slot>
      {{ text }}
    </slot>
  </span>
</template>

<script>
  import { useModifiers } from "../composables/useModifiers.js";
  export default {
    name: "UluTag",
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
       * Font Awesome icon (before text)
       */
      icon: String,
      /**
       * Modifiers for tag class
       */
      modifiers: [String, Array]
    },
    setup(props) {
      const { resolvedModifiers } = useModifiers(props, "tag");
      return { resolvedModifiers };
    }
  };
</script>