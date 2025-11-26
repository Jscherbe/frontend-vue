declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "facet-change" | "clear-filters", ...args: any[]) => void;
    classes: Record<string, any>;
    labelElement: string;
    selectedFacets: unknown[];
    removeIcon: string;
    $props: {
        readonly classes?: Record<string, any> | undefined;
        readonly labelElement?: string | undefined;
        readonly selectedFacets?: unknown[] | undefined;
        readonly removeIcon?: string | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        label?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
//# sourceMappingURL=UluFacetsActiveFilters.vue.d.ts.map