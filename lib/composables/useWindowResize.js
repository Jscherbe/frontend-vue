/**
 * Reusable window resize
 * - Future could have request animation frame throttled onResize
 *   - Just start and end for now, until thats needed
 */
import { ref } from "vue";
import { debounce } from "@ulu/utils/performance.js";
const resizing = ref(false);
const callbacks = {
  start: [],
  end: []
};
// Method is to add a resize handler just for the first call (start)
// which removes itself, the end (debounced) will be called after resizing
// stops at which point it will add the start handler to repeat the process
// Debounced end handler never needs to be removed.
function onStart() {
  window.removeEventListener("resize", onStart);
  resizing.value = true;
  callbacks.start.forEach(cb => cb());
}
function onEnd() {
  resizing.value = false;
  callbacks.end.forEach(cb => cb());
  window.addEventListener("resize", onStart);
}

// Only allow in browser contexts
if (!import.meta.env.SSR) {
  window.addEventListener("resize", onStart);
  window.addEventListener("resize", debounce(onEnd, 300));
}

/**
 * 
 * @param {Array} array Internal callback array to put callback in
 * @param {*} callback Users callback
 * @returns {Function} Remove Function
 */
function register(array, callback) {
  array.push(callback);
  return () => {
    const index = array.findIndex(cb => cb === callback);
    if (index > -1) {
      array.splice(index);
    }
  };
}

/**
 * A composable for subscribing to debounced window resize events.
 * It provides a reactive state to track if resizing is active and methods
 * to register callbacks for the start and end of the resize event.
 *
 * @returns {{
 *   resizing: import('vue').Ref<boolean>,
 *   onResizeStart: (callback: Function) => Function,
 *   onResizeEnd: (callback: Function) => Function
 * }} An object containing:
 * - `resizing`: A reactive boolean that is `true` while the window is being resized.
 * - `onResizeStart`: A function to register a callback that fires when resizing starts. Returns a function to unregister the callback.
 * - `onResizeEnd`: A function to register a callback that fires after resizing has stopped (debounced). Returns a function to unregister the callback.
 */
export function useWindowResize() {
  return {
    resizing,
    onResizeStart(callback) {
      return register(callbacks.start, callback);
    },
    onResizeEnd(callback) {
      return register(callbacks.end, callback);
    }
  };
}