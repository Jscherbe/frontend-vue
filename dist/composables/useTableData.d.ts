/**
 * Composable for managing and normalizing table data structures.
 * Generates rows, columns, and accessibility attributes for complex tables.
 *
 * @param {Object} props - The component props containing columns, rows, footerRows, and idPrefix.
 * @param {Function} [onChange] - Optional callback triggered when rows or columns data change (useful for layout recalculation).
 */
export function useTableData(props: Object, onChange?: Function): {
    currentColumns: any;
    currentRows: import('vue').Ref<any, any>;
    currentFooterRows: import('vue').Ref<any, any>;
    headerRows: import('vue').Ref<{
        height: string;
        boxHeight: null;
        columns: never[];
        id: string;
    }[], {
        height: string;
        boxHeight: null;
        columns: never[];
        id: string;
    }[] | {
        height: string;
        boxHeight: null;
        columns: never[];
        id: string;
    }[]>;
    rowColumns: import('vue').ComputedRef<any[]>;
};
//# sourceMappingURL=useTableData.d.ts.map