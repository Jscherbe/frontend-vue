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