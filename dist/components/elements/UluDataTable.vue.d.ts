declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    classes: Record<string, any>;
    striped: boolean;
    largeFirst: boolean;
    modifiers?: string | unknown[] | undefined;
    columns?: unknown[] | undefined;
    rows?: unknown[] | undefined;
    footerRows?: unknown[] | undefined;
    idPrefix?: string | undefined;
    caption?: string | undefined;
    getRowValue?: Function | undefined;
    getColumnTitle?: Function | undefined;
    $props: {
        readonly classes?: Record<string, any> | undefined;
        readonly striped?: boolean | undefined;
        readonly largeFirst?: boolean | undefined;
        readonly modifiers?: string | unknown[] | undefined;
        readonly columns?: unknown[] | undefined;
        readonly rows?: unknown[] | undefined;
        readonly footerRows?: unknown[] | undefined;
        readonly idPrefix?: string | undefined;
        readonly caption?: string | undefined;
        readonly getRowValue?: Function | undefined;
        readonly getColumnTitle?: Function | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLTableElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: Partial<Record<number, (_: {
        row: any;
        column: any;
        rowIndex: number;
        index: number;
    }) => any>>;
    refs: {};
    rootEl: HTMLTableElement;
};
//# sourceMappingURL=UluDataTable.vue.d.ts.map