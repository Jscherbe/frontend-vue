<template>
  <div 
    class="callout"
    :class="[resolvedModifiers, { 'full-height' : fullHeight }]"
  >
    <slot/>
  </div>
</template>

<script>
  import { useModifiers } from "../composables/useModifiers.js";
  export default {
    name: "UluCallout",
    props: {
      /**
       * Add full height utility class
       */
      fullHeight: Boolean,
      /**
       * Class modifiers (ie. 'transparent', 'secondary', etc)
       * - Can be String or Array of Strings
       */
      modifiers: [String, Array]
    },
    setup(props) {
      const { resolvedModifiers } = useModifiers({ props, baseClass: "callout" });
      return { resolvedModifiers };
    }
  };
</script>