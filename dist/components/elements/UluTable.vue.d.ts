declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    classes: Record<string, any>;
    idPrefix: string;
    columns?: unknown[] | undefined;
    rows?: unknown[] | undefined;
    footerRows?: unknown[] | undefined;
    caption?: string | undefined;
    getRowValue?: Function | undefined;
    getColumnTitle?: Function | undefined;
    $props: {
        readonly classes?: Record<string, any> | undefined;
        readonly idPrefix?: string | undefined;
        readonly columns?: unknown[] | undefined;
        readonly rows?: unknown[] | undefined;
        readonly footerRows?: unknown[] | undefined;
        readonly caption?: string | undefined;
        readonly getRowValue?: Function | undefined;
        readonly getColumnTitle?: Function | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLTableElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: Partial<Record<any, (_: {
        column: never;
        index: number;
    }) => any>> & Partial<Record<any, (_: {
        row: any;
        column: any;
        rowIndex: number;
        index: number;
    }) => any>> & Partial<Record<any, (_: {
        row: any;
        column: any;
        rowIndex: number;
        index: number;
    }) => any>> & {
        caption?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLTableElement;
};
//# sourceMappingURL=UluTable.vue.d.ts.map