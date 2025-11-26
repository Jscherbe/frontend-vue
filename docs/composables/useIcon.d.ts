/**
 * A utility composable for handling and formatting icon props for `UluIcon`.
 * It provides helpers to convert various icon definition formats into either
 * a props object for the `FontAwesomeIcon` component or a string of CSS classes.
 *
 * @returns {{
 *   getIconProps: (definition: string | string[] | object) => object | null,
 *   getClassesFromDefinition: (definition: string | string[] | object) => string | null
 * }} An object with utility functions:
 * - `getIconProps`: Takes an icon definition and returns a props object suitable for a component like `FontAwesomeIcon`.
 * - `getClassesFromDefinition`: Takes an icon definition and returns a string of CSS classes for use with the static FontAwesome library.
 */
export function useIcon(): {
    getIconProps: (definition: string | string[] | object) => object | null;
    getClassesFromDefinition: (definition: string | string[] | object) => string | null;
};
//# sourceMappingURL=useIcon.d.ts.map