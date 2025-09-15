<template>
  <!-- Intentional Coercion to null (undefined and null, else print) -->
  <component v-if="text != null" :is="element">
    {{ text }}
  </component>
</template>

<script>
  /**
   * Print out text if set (has value)
   */
  export default {
    name: "UluConditionalText",
    props: {
      /**
       * Text to print in element
       */
      text: [String, Number, Array, Object],
      /**
       * Element type to render (ie. h1, h2, p, etc)
       */
      element: {
        type: String,
        default: "p"
      }
    }
  }
</script>