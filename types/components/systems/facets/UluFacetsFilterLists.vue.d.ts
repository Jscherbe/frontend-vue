declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $emit: typeof emit;
    $props: Partial<typeof __VLS_props>;
    classes: Record<string, any>;
    maxVisible: number;
    facets: unknown[];
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    groupToggle?: ((props: {
        group: unknown;
        isOpen: boolean | undefined;
    }) => any) | undefined;
};
declare const emit: (event: "facet-change", ...args: any[]) => void;
declare const __VLS_props: {
    readonly classes: Record<string, any>;
    readonly maxVisible: number;
    readonly facets: unknown[];
};
//# sourceMappingURL=UluFacetsFilterLists.vue.d.ts.map