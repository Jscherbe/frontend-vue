/**
 * A composable to manage the document title.
 *
 * When called with a `title` option, it sets a dynamic title for the current page.
 * This is for use within specific components.
 *
 * When called without a `title` option (typically in App.vue), it manages the
 * document title for the whole app, using titles from components or route meta.
 *
 * @param {object} options
 * @param {import('vue').Ref<string> | string} [options.title] - The dynamic title to set for the current page.
 * @param {string} [options.titleTemplate='%s'] - The template for the document title, e.g., '%s | My Site'.
 * @param {Function} [options.useRoute=defaultUseRoute] - Injectable `useRoute` for testing.
 * @param {Function} [options.useHead=defaultUseHead] - Injectable `useHead` for testing.
 */
export function useDocumentTitle(options?: {
    title?: string | import('vue').Ref<string, string> | undefined;
    titleTemplate?: string | undefined;
    useRoute?: Function | undefined;
    useHead?: Function | undefined;
}): void;
//# sourceMappingURL=useDocumentTitle.d.ts.map