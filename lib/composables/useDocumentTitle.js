import { reactive, watchEffect, onUnmounted, unref, computed } from "vue";
import { useHead as defaultUseHead } from "@unhead/vue";
import { useRoute as defaultUseRoute } from "vue-router";
import { getRouteTitle } from "../utils/router.js";

// A reactive map to store component-defined titles.
const componentTitles = reactive({});

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
export function useDocumentTitle(options = {}) {
  const {
    title,
    titleTemplate = "%s",
    useRoute = defaultUseRoute,
    useHead = defaultUseHead,
  } = options;

  const route = useRoute();
  const path = route.path;

  // --- Setter Mode ---
  // If a title is provided, we're in "setter" mode, used within a component.
  if (title !== undefined) {
    watchEffect(() => {
      componentTitles[path] = unref(title);
    });

    onUnmounted(() => {
      delete componentTitles[path];
    });
    return; // End execution for setter mode.
  }

  // --- Manager Mode ---
  // If no title is provided, we're in "manager" mode, used in App.vue.
  const documentTitle = computed(() => {
    const titleFromComponent = componentTitles[route.path];
    const titleFromMeta = getRouteTitle(route, route);
    const resolvedTitle = titleFromComponent || titleFromMeta;

    return resolvedTitle ? titleTemplate.replace("%s", resolvedTitle) : "App";
  });

  useHead({
    title: documentTitle,
  });
}
