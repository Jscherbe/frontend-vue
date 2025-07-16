/**
 * Reusable window resize
 * - Future could have request animation frame throttled onResize
 *   - Just start and end for now, until thats needed
 */
import { ref } from "vue";
import { debounce } from "@utils/performance.js";
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
 * Composable function
 * @return {Object} Contains reactive 'resizing' and two methods for calling callbacks (onResizeStart, onResizeEnd)
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