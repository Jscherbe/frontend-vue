let uidCount = 0;

/**
 * Generates a new unique ID, typically for popover-related elements.
 * @returns {string} A unique ID string.
 */
export function newUid() {
  return `ulu-popovers-uid-${ ++uidCount }`;
}