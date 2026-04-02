/**
 * Ensures the array consists of objects
 * @param {Array} array Array to check 
 * @returns {Boolean} Whether all are objects within
 */
export function isArrayOfObjects(array) {
  return array.every(item => typeof item === "object");
}

/**
 * Logs a deprecation warning for a component prop in non-production environments.
 * @param {String} componentName The name of the component using the deprecated prop.
 * @param {Object} props The component's props object.
 * @param {String} oldProp The name of the deprecated prop.
 * @param {String} newProp The name of the new prop to use instead.
 */
export function warnDeprecatedProp(componentName, props, oldProp, newProp) {
  if (props[oldProp] !== undefined && typeof process !== "undefined" && process.env.NODE_ENV !== "production") {
    console.warn(`[${ componentName }]: Prop '${ oldProp }' is deprecated and will be removed in future, Use '${ newProp }' instead`);
  }
}