/**
 * Ensures the array consists of objects
 * @param {Array} array Array to check 
 * @returns {Boolean} Whether all are objects within
 */
export function isArrayOfObjects(array) {
  return array.every(item => typeof item === "object");
}