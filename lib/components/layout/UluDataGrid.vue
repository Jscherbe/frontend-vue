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
  <component 
    :is="element" 
    :data-grid-init="initialized"
    ref="rootElement" 
  >
    <slot />
  </component>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount, watch } from "vue";
  import { debounce } from "@ulu/utils/performance.js";
  import { setPositionClasses } from "@ulu/frontend/js/utils/dom.js";

  const props = defineProps({
    /**
     * The element to use on data-grid container
     */
    element: {
      type: String,
      default: "div"
    },
    /**
     * Tell the component when this grid is actually in a hidden container 
     * - When value changes the component will properly update position classes
     */
    hidden: Boolean // New prop from SSR version
  });

  const rootElement = ref(null); // Ref for the template root element
  const initialized = ref(null);
  let setThisPositionClasses = null; // To store the setPositionClasses function
  let resizeHandler = null; // To store the debounced resize handler

  onMounted(async () => {
    setThisPositionClasses = () => {
      if (rootElement.value) {
        setPositionClasses(rootElement.value);
      }
    };
    setThisPositionClasses(); // Initial call
    initialized.value = true;
    resizeHandler = debounce(setThisPositionClasses, 200, false); // `this` context is not needed in setup
    window.addEventListener("resize", resizeHandler);
  });

  onBeforeUnmount(() => {
    if (resizeHandler) {
      resizeHandler.cancel();
      window.removeEventListener("resize", resizeHandler);
      resizeHandler = null;
      setThisPositionClasses = null; // Clear the function reference
    }
  });

  // Watcher for the hidden prop
  watch(() => props.hidden, (newVal, oldVal) => {
    // Only run setClasses if it was hidden and now it's not, and the function exists
    if (oldVal && !newVal && setThisPositionClasses) {
      setThisPositionClasses();
    }
  });
</script>