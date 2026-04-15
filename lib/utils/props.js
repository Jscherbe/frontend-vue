/**
 * Ensures the array consists of objects
 * @param {Array} array Array to check 
 * @returns {Boolean} Whether all are objects within
 */
export function isArrayOfObjects(array) {
  return array.every(item => typeof item === "object");
}

/**
 * Checks for deprecated props and calls a callback for each match
 * @param {object} props - The current props object
 * @param {string[]} deprecatedNames - Array of prop names to check
 * @param {function} callback - Function called for each match, receiving the prop name
 */
export function checkDeprecatedProps(props, deprecatedNames, callback) {
  deprecatedNames.forEach(name => {
    if (props[name] !== undefined) {
      callback(name);
    }
  });
}