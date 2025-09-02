import { computed } from 'vue';
import { useHead } from '@unhead/vue';
import { useRoute } from 'vue-router';
import { pageTitles } from './usePageTitle.js';

/**
 * Manages the document's <title> tag based on the current route's title.
 * It pulls titles from the `usePageTitle` system, falling back to `meta.title`,
 * and formats it with a template.
 *
 * This should be called once in the root App.vue component.
 *
 * @param {{ titleTemplate: string }} options
 */
export function useDocumentTitle(options = {}) {
  const { titleTemplate = '%s | My Awesome Site' } = options;
  const route = useRoute();

  const documentTitle = computed(() => {
    // Get the title from our reactive state, or fall back to the route's meta.
    const titleFromState = pageTitles[route.path];
    const titleFromMeta = route.meta.title;

    let title = titleFromState || titleFromMeta;

    // If the title from meta is a function, resolve it.
    if (typeof title === 'function') {
      title = title(route);
    }

    // Format the title with the template, or provide a default.
    return title ? titleTemplate.replace('%s', title) : 'My Awesome Site';
  });

  // useHead is reactive, so it will automatically update when documentTitle changes.
  useHead({
    title: documentTitle,
  });
}
