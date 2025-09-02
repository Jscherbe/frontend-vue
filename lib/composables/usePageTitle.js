import { reactive, watchEffect, onUnmounted, unref } from "vue";
import { useRoute as defaultUseRoute } from "vue-router";

// A reactive map to store component-defined titles for the current route.
// Key: route.path, Value: title string
export const pageTitles = reactive({});

/**
 * A composable to set the title for the current page/route from within its component.
 * This provides a single source of truth for a page's title, which can be
 * consumed by various parts of the application (e.g., breadcrumbs, document title).
 * @param {import('vue').Ref<string> | string} title The title to set for the current page. Can be a ref, computed, or a plain string.
 * @param {{ useRoute: Function }} options For dependency injection in tests/stories.
 */
export function usePageTitle(title, { useRoute = defaultUseRoute } = {}) {
  const route = useRoute();
  const path = route.path;

  watchEffect(() => {
    pageTitles[path] = unref(title);
  });

  // Clean up when the component is unmounted to prevent memory leaks
  onUnmounted(() => {
    delete pageTitles[path];
  });
}

/**
 * Gets the dynamically set page title for a given path.
 * For internal use by consumers like breadcrumb or document title utilities.
 * @param {string} path The route path to look up.
 * @returns {string | undefined}
 */
export function getPageTitle(path) {
  return pageTitles[path];
}