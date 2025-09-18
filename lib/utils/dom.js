/**
 * Resolves a Vue template ref's unwrapped value to its underlying DOM element
 *
 * @param {HTMLElement|Object} value - The unwrapped value from a template ref (e.g., `this.$refs.myElement` or `this.$refs.myComponent`)
 * @returns {HTMLElement} The HTMLElement or undefined if not found/resolved.
 */
export function refToElement(value) {
  if (!value) return;
  if (value instanceof HTMLElement) {
    return value;
  } else if (typeof value === 'object' && '$el' in value) {
    return value.$el;
  }
}


let idCounter = 0;

/**
 * Generates a new unique ID with an optional prefix.
 * It ensures the ID is not already present in the document.
 *
 * @param {string} [prefix="ulu-id"] - The prefix for the new ID.
 * @returns {string} The unique ID.
 */
export function newId(prefix = "ulu-id") {
  const id = `${ prefix }-${ ++idCounter }`;
  if (typeof document !== 'undefined' && document.getElementById(id)) {
    // In the unlikely event of a collision (e.g., SSR), recurse.
    return newId(prefix);
  }
  return id;
}