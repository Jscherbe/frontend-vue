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
export function usePagination(items: import("vue").Ref<Array<any>>, itemsPerPage: number): {
    currentPage: import("vue").ComputedRef<number>;
    totalPages: import("vue").ComputedRef<number>;
    paginatedItems: import("vue").ComputedRef<Array<any>>;
    pagerItems: import("vue").ComputedRef<object | null>;
    pagerEllipses: import("vue").ComputedRef<{
        previous: boolean;
        next: boolean;
    }>;
};
//# sourceMappingURL=usePagination.d.ts.map