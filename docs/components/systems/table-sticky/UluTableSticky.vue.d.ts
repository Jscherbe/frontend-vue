declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /**
     * By default you cannot have interactive items in the cloned sticky header and first column (if set)
     * this disables that feature. It was set up that way for accessibility
     */
    allowClickClones: BooleanConstructor;
    /**
     * Allows user to pass classes object to add custom classes to parts of the component
     */
    classes: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * Allow user to pass components
     * - Passed the same values as if using a slot
     * -
     */
    controlsComponent: ObjectConstructor;
    /**
     * Allows user to pass callback to get the row's value
     */
    getRowValue: FunctionConstructor;
    getColumnTitle: FunctionConstructor;
    /**
     * Hidden caption for accessibility
     */
    caption: {
        type: StringConstructor;
        required: true;
    };
    /**
     * Array of column configurations to convert to list output
     *
     * @property {Object} column A column config
     * @property {String|Boolean} column.title The title to output for the column if set to a falsey value nothing will print
     * @property {Array} column.columns Array of child columns
     * @property {String} column.key The key that should be usec to grab column's value from rows
     * @property {Function} column.value A function that returns the column's value used instead of key passed (row, column)
     * @property {String} column.slot Register custom slot name to use as a template for this column. Passing a slot with this name will link them. The slot are passed the ({row, column}). Note this will disable output of the column's value
     * @property {String} column.component Pass a component to use for this columns values (<td>)
     * @property {String} column.componentHeader Pass a component to use for this columns header (<th>)
     * @property {String} column.slotHeader Register custom slot name to use in the header
     * @property {String} column.classHeader Custom class(s) to be set to column <th>
     * @property {String} column.class Custom class(s) to be set to column's value <td>
     * @property {String} column.html Use v-html output for value
     * @property {String} column.rowHeader When this column is printed in the <tbody> it should be a header for the row. Note supports multiple row headers from left to right only. No rowspan support for rowHeaders.
     */
    columns: {
        type: ArrayConstructor;
        validator: (a: any) => any;
        required: true;
    };
    /**
     * Whether the first column of the table should be sticky
     * - Requires that the table's first column header is nested
     */
    firstColumnSticky: BooleanConstructor;
    /**
     * Prefixed used for id generation
     */
    idPrefix: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Array of tables rows (tbody)
     * - Each row is an object who's value will matched to columns
     */
    rows: {
        type: ArrayConstructor;
        validator: (a: any) => any;
    };
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
        type: ArrayConstructor;
        validator: (a: any) => any;
    };
    /**
     * Enables the visibility of the scroll controls
     * - Scroll controls shift the tables x-axis when the table has overflow-x
     * - Can be templated manually using slot named "controlsButtons", slot needs to create layout and call methods
     *   + scope = { scrollLeft, scrollRight, canScrollLeft, canScrollRight }
     * - Scroll controls are transformed with the header (move down as the user scrolls)
     */
    scrollControls: BooleanConstructor;
    /**
     * Scrollable context DOM Element, if the sticky element is within another
     * scrolling parent use this to change the scroll activation handler to use a custom
     * scrollable parent element
     *
     */
    scrollContext: {
        default: () => (Window & typeof globalThis) | null;
    };
    /**
     * Amount to scroll when user uses scroll controls (pixels)
     */
    scrollControlAmount: {
        type: NumberConstructor;
        default: number;
    };
}>, {}, {
    currentColumns: any;
    currentRows: any;
    currentFooterRows: any;
    headerRows: any;
    sizesCalculated: boolean;
    tableWidth: string;
    resizeHandler: any;
    resizing: boolean;
    overflownX: boolean;
    canScrollLeft: boolean;
    canScrollRight: boolean;
    displayY: null;
    sizesPainted: boolean;
    columnResizeObserver: ResizeObserver | null;
}, {
    controlsShown(): boolean;
    headerVisibleX(): boolean;
    headerOpacityX(): "1" | "0";
    /**
     * Used to output the body rows. This is an array of only the deepest child columns
     * parent column information can be accessed by reference
     */
    rowColumns(): any[];
    headerHeight(): any;
    /**
     * Reduce the array of column header rows to the first row, first column
     */
    headerRowsFirst(): any[];
    /**
     * Reduce the rowColumn array to only the first column
     */
    rowColumnsFirst(): any[];
    firstColumnSize(): {
        width: any;
        height: any;
    };
}, {
    resetSorts(except: any): void;
    applySort(column: any): void;
    onColumnResize(): void;
    headerAdded(el: any): void;
    headerRemoved(el: any): void;
    /**
     * Allow classes options to be strings or functions
     */
    resolveClasses(passed: any, args?: null): any;
    /**
     * Handles horizontal scroll
     * - Shifts the first column as the user scrolls
     */
    syncScrollLeft(): void;
    /**
     * Checks and sets state if the table is overflow horizontally
     */
    checkOverflowX(): void;
    /**
     * Checks whether if the tables scroll position is at the start or end and updates state
     */
    checkScrollability(): void;
    /**
     * Creates column array for internal use
     * - Avoid mutating user's prop
     * - Current columns being used in the display
     * - This internal copy has internal properties/structural info (like ID)
     * - This is the copy of the users columns to avoid mutating their object
     * - Can be used in the future for adding/removing or enabling/disabling
     */
    createColumns(): any;
    /**
     * Conversion of the columns (which are nested hierarchy) to a flat list of columns
     * sorted by the way they need to be displayed in rows
     * - Used for nested headers
     * - Transform nested data into row arrays
     */
    createHeaderRows(currentColumns: any): {
        height: string;
        boxHeight: null;
        columns: never[];
        id: string;
    }[];
    /**
     * Creates row array for internal use
     * - Avoid mutating user's prop
     */
    createRows(forFooter: any): {
        height: null;
        boxHeight: null;
        data: unknown;
        id: string;
    }[];
    onResize(): void;
    /**
     * Method to update the table (sizes, etc) when data has changed
     */
    refresh(): void;
    onScrollX(): void;
    idCreator(type: any): () => string;
    /**
     * Recursive function used as a reducer to return the deepest nested columns
     */
    maxColumnChildren(d: any, c: any): any;
    /**
     * Method to attach handlers needed after creation
     */
    attachHandlers(): void;
    removeHandlers(): void;
    removeTableSizes(): void;
    scrollLeft(): void;
    scrollRight(): void;
    /**
     * Cleanup function for when component is not in use
     */
    setTableSizes(): void;
    tableReady(): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /**
     * By default you cannot have interactive items in the cloned sticky header and first column (if set)
     * this disables that feature. It was set up that way for accessibility
     */
    allowClickClones: BooleanConstructor;
    /**
     * Allows user to pass classes object to add custom classes to parts of the component
     */
    classes: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * Allow user to pass components
     * - Passed the same values as if using a slot
     * -
     */
    controlsComponent: ObjectConstructor;
    /**
     * Allows user to pass callback to get the row's value
     */
    getRowValue: FunctionConstructor;
    getColumnTitle: FunctionConstructor;
    /**
     * Hidden caption for accessibility
     */
    caption: {
        type: StringConstructor;
        required: true;
    };
    /**
     * Array of column configurations to convert to list output
     *
     * @property {Object} column A column config
     * @property {String|Boolean} column.title The title to output for the column if set to a falsey value nothing will print
     * @property {Array} column.columns Array of child columns
     * @property {String} column.key The key that should be usec to grab column's value from rows
     * @property {Function} column.value A function that returns the column's value used instead of key passed (row, column)
     * @property {String} column.slot Register custom slot name to use as a template for this column. Passing a slot with this name will link them. The slot are passed the ({row, column}). Note this will disable output of the column's value
     * @property {String} column.component Pass a component to use for this columns values (<td>)
     * @property {String} column.componentHeader Pass a component to use for this columns header (<th>)
     * @property {String} column.slotHeader Register custom slot name to use in the header
     * @property {String} column.classHeader Custom class(s) to be set to column <th>
     * @property {String} column.class Custom class(s) to be set to column's value <td>
     * @property {String} column.html Use v-html output for value
     * @property {String} column.rowHeader When this column is printed in the <tbody> it should be a header for the row. Note supports multiple row headers from left to right only. No rowspan support for rowHeaders.
     */
    columns: {
        type: ArrayConstructor;
        validator: (a: any) => any;
        required: true;
    };
    /**
     * Whether the first column of the table should be sticky
     * - Requires that the table's first column header is nested
     */
    firstColumnSticky: BooleanConstructor;
    /**
     * Prefixed used for id generation
     */
    idPrefix: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Array of tables rows (tbody)
     * - Each row is an object who's value will matched to columns
     */
    rows: {
        type: ArrayConstructor;
        validator: (a: any) => any;
    };
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
        type: ArrayConstructor;
        validator: (a: any) => any;
    };
    /**
     * Enables the visibility of the scroll controls
     * - Scroll controls shift the tables x-axis when the table has overflow-x
     * - Can be templated manually using slot named "controlsButtons", slot needs to create layout and call methods
     *   + scope = { scrollLeft, scrollRight, canScrollLeft, canScrollRight }
     * - Scroll controls are transformed with the header (move down as the user scrolls)
     */
    scrollControls: BooleanConstructor;
    /**
     * Scrollable context DOM Element, if the sticky element is within another
     * scrolling parent use this to change the scroll activation handler to use a custom
     * scrollable parent element
     *
     */
    scrollContext: {
        default: () => (Window & typeof globalThis) | null;
    };
    /**
     * Amount to scroll when user uses scroll controls (pixels)
     */
    scrollControlAmount: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {
    classes: Record<string, any>;
    idPrefix: string;
    allowClickClones: boolean;
    firstColumnSticky: boolean;
    scrollControls: boolean;
    scrollContext: Window & typeof globalThis;
    scrollControlAmount: number;
}, {}, {
    UluTableStickyTable: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        resolveClasses: FunctionConstructor;
        classes: {
            type: ObjectConstructor;
            default: () => {};
        };
        caption: StringConstructor;
        idPrefix: StringConstructor;
        headerRows: {
            type: ArrayConstructor;
            required: true;
        };
        rows: ArrayConstructor;
        footerRows: ArrayConstructor;
        rowColumns: ArrayConstructor;
        isActual: {
            type: BooleanConstructor;
        };
        columnWidth: {
            type: StringConstructor;
        };
        getRowValue: {
            type: FunctionConstructor;
            default: ({ row, column }: {
                row: any;
                column: any;
            }) => any;
        };
        getColumnTitle: {
            type: FunctionConstructor;
            default: ({ column }: {
                column: any;
            }) => any;
        };
    }>, {}, {
        headerRefs: {};
    }, {}, {
        handleSortFocus(column: any, isFocused: any): void;
        addHeaderRef(column: any, el: any): void;
        optionalAttr(val: any): any;
        value({ row, column, rowIndex }: {
            row: any;
            column: any;
            rowIndex: any;
        }): any;
        getCellHeaders(column: any, rowIndex: any): string;
        getHeaderHeaders(column: any): any;
    }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        resolveClasses: FunctionConstructor;
        classes: {
            type: ObjectConstructor;
            default: () => {};
        };
        caption: StringConstructor;
        idPrefix: StringConstructor;
        headerRows: {
            type: ArrayConstructor;
            required: true;
        };
        rows: ArrayConstructor;
        footerRows: ArrayConstructor;
        rowColumns: ArrayConstructor;
        isActual: {
            type: BooleanConstructor;
        };
        columnWidth: {
            type: StringConstructor;
        };
        getRowValue: {
            type: FunctionConstructor;
            default: ({ row, column }: {
                row: any;
                column: any;
            }) => any;
        };
        getColumnTitle: {
            type: FunctionConstructor;
            default: ({ column }: {
                column: any;
            }) => any;
        };
    }>> & Readonly<{}>, {
        classes: Record<string, any>;
        isActual: boolean;
        getRowValue: Function;
        getColumnTitle: Function;
    }, {}, {
        UluTableStickyRows: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
            rows: ArrayConstructor;
            rowColumns: ArrayConstructor;
            columnWidth: StringConstructor;
            optionalAttr: FunctionConstructor;
            resolveClasses: FunctionConstructor;
            getCellHeaders: FunctionConstructor;
            value: FunctionConstructor;
            isActual: BooleanConstructor;
            classes: ObjectConstructor;
            foot: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            rows: ArrayConstructor;
            rowColumns: ArrayConstructor;
            columnWidth: StringConstructor;
            optionalAttr: FunctionConstructor;
            resolveClasses: FunctionConstructor;
            getCellHeaders: FunctionConstructor;
            value: FunctionConstructor;
            isActual: BooleanConstructor;
            classes: ObjectConstructor;
            foot: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            isActual: boolean;
            foot: boolean;
        }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=UluTableSticky.vue.d.ts.map