/**
 * @module utils.props
 */
/**
 * Ensures the array consists of objects
 * @param {Array} array Array to check
 * @returns {Boolean} Whether all are objects within
 */
export function isArrayOfObjects(array: any[]): boolean;
/**
 * Checks for deprecated props and calls a callback for each match
 * @param {object} props - The current props object
 * @param {string[]} deprecatedNames - Array of prop names to check
 * @param {function} callback - Function called for each match, receiving the prop name
 */
export function checkDeprecatedProps(props: object, deprecatedNames: string[], callback: Function): void;
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
export function mergeClassLookups(defaults: Object, ...sources: (Object | boolean | Function)[]): Object;
/**
 * Merges a base class (string, array, or object) with a user-supplied class override.
 * Supports string, array, object, function, or boolean (false to clear) overrides.
 *
 * @param {String|Array|Object} base The base classes
 * @param {String|Array|Object|Function|Boolean} override The class override
 * @returns {String|Array|Object} The resolved classes suitable for Vue class binding
 */
export function resolveClassOverride(base: string | any[] | Object, override: string | any[] | Object | Function | boolean): string | any[] | Object;
//# sourceMappingURL=props.d.ts.map