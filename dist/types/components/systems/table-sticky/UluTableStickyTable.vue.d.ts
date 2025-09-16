declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    /**
     * Is the actual table not a clone for sticky headers
     */
    isActual: {
        type: BooleanConstructor;
    };
    columnWidth: {
        type: StringConstructor;
    };
    /**
     * Optional user overridden value getter (for rows)
     * @param {Object} row The current row
     * @param {Object} column The current column in the row
     */
    getRowValue: {
        type: FunctionConstructor;
        default: ({ row, column }: {
            row: any;
            column: any;
        }) => any;
    };
    /**
     * Optional user overridden value getter (for rows)
     * @param {Object} row The current row
     * @param {Object} column The current column in the row
     */
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
    /**
     * False is no longer not printed
     */
    optionalAttr(val: any): any;
    value({ row, column, rowIndex }: {
        row: any;
        column: any;
        rowIndex: any;
    }): any;
    getCellHeaders(column: any, rowIndex: any): string;
    getHeaderHeaders(column: any): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    /**
     * Is the actual table not a clone for sticky headers
     */
    isActual: {
        type: BooleanConstructor;
    };
    columnWidth: {
        type: StringConstructor;
    };
    /**
     * Optional user overridden value getter (for rows)
     * @param {Object} row The current row
     * @param {Object} column The current column in the row
     */
    getRowValue: {
        type: FunctionConstructor;
        default: ({ row, column }: {
            row: any;
            column: any;
        }) => any;
    };
    /**
     * Optional user overridden value getter (for rows)
     * @param {Object} row The current row
     * @param {Object} column The current column in the row
     */
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
    UluTableStickyRows: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=UluTableStickyTable.vue.d.ts.map