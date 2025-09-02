/**
 * A composable to set the title for the current page/route from within its component.
 * This provides a single source of truth for a page's title, which can be
 * consumed by various parts of the application (e.g., breadcrumbs, document title).
 * @param {import('vue').Ref<string> | string} title The title to set for the current page. Can be a ref, computed, or a plain string.
 * @param {{ useRoute: Function }} options For dependency injection in tests/stories.
 */
export function usePageTitle(title: import("vue").Ref<string> | string, { useRoute }?: {
    useRoute: Function;
}): void;
/**
 * Gets the dynamically set page title for a given path.
 * For internal use by consumers like breadcrumb or document title utilities.
 * @param {string} path The route path to look up.
 * @returns {string | undefined}
 */
export function getPageTitle(path: string): string | undefined;
export const pageTitles: {};
//# sourceMappingURL=usePageTitle.d.ts.map