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
    name: "AppGrid",
    async mounted() {
      const grid =  await import("@ulu/frontend/js/ui/grid.js");
      const performance = await import("@ulu/utils/performance.js");
      const { debounce } = performance;
      const { setPositionClasses } = grid;
      const setClasses = () => setPositionClasses(this.$el);
      setClasses();
      this.reziseHandler = debounce(setClasses, 200, false, this);
      window.addEventListener("resize", this.reziseHandler);
    },
    beforeUnmount() {
      if (this.reziseHandler) {
        window.removeEventListener("resize", this.reziseHandler);
      }
    }
  };
</script>