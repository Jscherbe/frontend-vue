import { computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

/**
 * A Vue composable for handling pagination logic.
 * It interacts with vue-router to keep the current page in the URL query string.
 *
 * @param {import('vue').Ref<Array<any>>} items - A ref containing the full list of items to be paginated.
 * @param {number} itemsPerPage - The number of items to display per page.
 * @returns {{
 *   currentPage: import('vue').ComputedRef<number>,
 *   totalPages: import('vue').ComputedRef<number>,
 *   paginatedItems: import('vue').ComputedRef<Array<any>>,
 *   pagerItems: import('vue').ComputedRef<object|null>,
 *   pagerEllipses: import('vue').ComputedRef<{previous: boolean, next: boolean}>
 * }} - An object containing reactive properties for pagination.
 */
export function usePagination(items, itemsPerPage) {
  const route = useRoute();
  const router = useRouter();

  const currentPage = computed(() => {
    const page = parseInt(route.query.page || '1', 10);
    return isNaN(page) || page < 1 ? 1 : page;
  });

  const totalPages = computed(() => {
    if (!items.value || items.value.length === 0) return 1;
    return Math.ceil(items.value.length / itemsPerPage);
  });

  watch(totalPages, (newTotalPages) => {
    if (currentPage.value > newTotalPages) {
      router.push({ query: { ...route.query, page: newTotalPages } });
    }
  });

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return items.value.slice(start, end);
  });

  const pagerItems = computed(() => {
    if (totalPages.value <= 1) {
      return null;
    }

    const items = {
      pages: {}
    };
    const page = currentPage.value;
    const total = totalPages.value;
    const maxPagesToShow = 5;

    const createRoute = (p) => {
      return { query: { ...route.query, page: p } };
    };

    if (page > 1) {
      items.first = { href: createRoute(1) };
      items.previous = { href: createRoute(page - 1) };
    }

    if (page < total) {
      items.next = { href: createRoute(page + 1) };
      items.last = { href: createRoute(total) };
    }

    let startPage, endPage;
    if (total <= maxPagesToShow) {
      startPage = 1;
      endPage = total;
    } else {
      const maxPagesBeforeCurrent = Math.floor(maxPagesToShow / 2);
      const maxPagesAfterCurrent = Math.ceil(maxPagesToShow / 2) - 1;
      if (page <= maxPagesBeforeCurrent) {
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (page + maxPagesAfterCurrent >= total) {
        startPage = total - maxPagesToShow + 1;
        endPage = total;
      } else {
        startPage = page - maxPagesBeforeCurrent;
        endPage = page + maxPagesAfterCurrent;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      items.pages[i] = { href: createRoute(i) };
    }

    return items;
  });

  const pagerEllipses = computed(() => {
    const ellipses = { previous: false, next: false };
    if (!pagerItems.value || !pagerItems.value.pages) return ellipses;

    const pageKeys = Object.keys(pagerItems.value.pages).map(Number);
    if (pageKeys.length === 0) return ellipses;

    const firstPageInPager = Math.min(...pageKeys);
    const lastPageInPager = Math.max(...pageKeys);

    if (firstPageInPager > 1) {
      ellipses.previous = true;
    }
    if (lastPageInPager < totalPages.value) {
      ellipses.next = true;
    }
    return ellipses;
  });

  return {
    currentPage,
    totalPages,
    paginatedItems,
    pagerItems,
    pagerEllipses
  };
}
