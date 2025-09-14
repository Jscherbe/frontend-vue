declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $emit: typeof emit;
    $props: Partial<typeof props>;
    classes: Record<string, any>;
    labelElement: string;
    selectedFacets: unknown[];
    removeIcon: string;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    label?: ((props: {}) => any) | undefined;
};
declare const emit: (event: "facet-change" | "clear-filters", ...args: any[]) => void;
declare const props: {
    readonly classes: Record<string, any>;
    readonly labelElement: string;
    readonly selectedFacets: unknown[];
    readonly removeIcon: string;
};
//# sourceMappingURL=UluFacetsActiveFilters.vue.d.ts.map