declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    isActual: boolean;
    foot: boolean;
    classes?: Record<string, any> | undefined;
    value?: Function | undefined;
    rows?: unknown[] | undefined;
    rowColumns?: unknown[] | undefined;
    columnWidth?: string | undefined;
    optionalAttr?: Function | undefined;
    resolveClasses?: Function | undefined;
    getCellHeaders?: Function | undefined;
    $props: {
        readonly isActual?: boolean | undefined;
        readonly foot?: boolean | undefined;
        readonly classes?: Record<string, any> | undefined;
        readonly value?: Function | undefined;
        readonly rows?: unknown[] | undefined;
        readonly rowColumns?: unknown[] | undefined;
        readonly columnWidth?: string | undefined;
        readonly optionalAttr?: Function | undefined;
        readonly resolveClasses?: Function | undefined;
        readonly getCellHeaders?: Function | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: Partial<Record<any, (_: {
        row: any;
        column: unknown;
        rowIndex: number;
        index: number;
        foot: boolean;
        isActual: boolean;
    }) => any>>;
    refs: {};
    rootEl: any;
};
//# sourceMappingURL=UluTableStickyRows.vue.d.ts.map