<!-- 
  SSR Version 

  Wrapper for simple CSS data-grid for support in Vue. Works normally 
  with jQuery plugin for row wrapping information to toggle rule classes. 
  This code uses a utility script for classes needed

  Purpose:
  - Print grid container
  - Initialize a grid on a page
    * Run the position detection in javascript and add positional classes
    * Attach handler for resize
  - Remove handlers on unmount
    * Resize handler
  
-->

<template>
  <div>
    <slot />
  </div>
</template>

<script>
  export default {
    name: "UluDataGrid",
    async mounted() {
      const domUtils =  await import("@ulu/frontend/js/utils/dom.js");
      const performance = await import("@ulu/utils/performance.js");
      const { debounce } = performance;
      const { setPositionClasses } = domUtils;
      const setClasses = () => setPositionClasses(this.$el);
      setClasses();
      this.resizeHandler = debounce(setClasses, 200, false, this);
      window.addEventListener("resize", this.resizeHandler);
    },
    beforeUnmount() {
      if (this.resizeHandler) {
        window.removeEventListener("resize", this.resizeHandler);
      }
    }
  };
</script>