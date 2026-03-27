declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "column-sorted" | "actual-header-removed" | "actual-header-added", ...args: any[]) => void;
    classes: Record<string, any>;
    headerRows: unknown[];
    isActual: boolean;
    rows?: unknown[] | undefined;
    footerRows?: unknown[] | undefined;
    idPrefix?: string | undefined;
    caption?: string | undefined;
    getRowValue?: Function | undefined;
    getColumnTitle?: Function | undefined;
    rowColumns?: unknown[] | undefined;
    resolveClasses?: Function | undefined;
    columnWidth?: string | undefined;
    $props: {
        readonly classes?: Record<string, any> | undefined;
        readonly headerRows?: unknown[] | undefined;
        readonly isActual?: boolean | undefined;
        readonly rows?: unknown[] | undefined;
        readonly footerRows?: unknown[] | undefined;
        readonly idPrefix?: string | undefined;
        readonly caption?: string | undefined;
        readonly getRowValue?: Function | undefined;
        readonly getColumnTitle?: Function | undefined;
        readonly rowColumns?: unknown[] | undefined;
        readonly resolveClasses?: Function | undefined;
        readonly columnWidth?: string | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLTableElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: Partial<Record<any, (_: {
        isActual: boolean;
        column: any;
        index: number;
    }) => any>> & Partial<Record<any, (_: {
        isActual: boolean;
        column: any;
        index: number;
    }) => any>> & Partial<Record<number, (_: {
        row: any;
        column: unknown;
        rowIndex: number;
        index: number;
        foot: boolean;
        isActual: boolean;
    }) => any>> & Partial<Record<number, (_: {
        row: any;
        column: unknown;
        rowIndex: number;
        index: number;
        foot: boolean;
        isActual: boolean;
    }) => any>> & {
        sortIcon?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLTableElement;
};
//# sourceMappingURL=UluTableStickyTable.vue.d.ts.map