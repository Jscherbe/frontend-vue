/**
 * Manages the document's <title> tag based on the current route's title.
 * It pulls titles from the `usePageTitle` system, falling back to `meta.title`,
 * and formats it with a template.
 *
 * This should be called once in the root App.vue component.
 *
 * @param {object} options
 * @param {string} [options.titleTemplate='%s | My Awesome Site'] - The template for the title.
 * @param {Function} [options.useRoute=defaultUseRoute] - The `useRoute` function, injectable for testing.
 * @param {Function} [options.useHead=defaultUseHead] - The `useHead` function, injectable for testing.
 */
export function useDocumentTitle(options?: {
    titleTemplate?: string;
    useRoute?: Function;
    useHead?: Function;
}): void;
//# sourceMappingURL=useDocumentTitle.d.ts.map