/**
 * @module utils.props
 */
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

/**
 * Merges multiple sources of class configuration objects (class lookups).
 * Sources are evaluated left-to-right (later sources override earlier ones).
 * 
 * Behavior:
 * - Object: Merges with the currently resolved classes.
 * - Boolean (false): Clears the currently resolved classes to an empty object.
 * - Function: Called with (resolved, defaults). Its return value replaces the resolved classes.
 * 
 * @param {Object} defaults The base default classes
 * @param  {...(Object|Boolean|Function)} sources The sources to merge
 * @returns {Object} The final resolved classes object
 */
export function mergeClassLookups(defaults, ...sources) {
  let resolved = { ...defaults };
  for (const src of sources) {
    if (src === false) {
      resolved = {};
    } else if (typeof src === "function") {
      resolved = src(resolved, defaults);
    } else if (typeof src === "object" && src !== null) {
      resolved = { ...resolved, ...src };
    }
  }
  return resolved;
}

/**
 * Merges a base class (string, array, or object) with a user-supplied class override.
 * Supports string, array, object, function, or boolean (false to clear) overrides.
 * 
 * @param {String|Array|Object} base The base classes
 * @param {String|Array|Object|Function|Boolean} override The class override
 * @returns {String|Array|Object} The resolved classes suitable for Vue class binding
 */
export function resolveClassOverride(base, override) {
  if (!override) return base;
  if (override === false) return "";
  if (typeof override === "function") {
    return override(base);
  }
  return [base, override];
}