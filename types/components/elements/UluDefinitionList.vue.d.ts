declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $props: Partial<typeof __VLS_props>;
    classes: Record<string, any>;
    items?: unknown[] | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    term?: ((props: {
        item: unknown;
        index: number;
    }) => any) | undefined;
} & {
    description?: ((props: {
        item: unknown;
        index: number;
    }) => any) | undefined;
};
declare const __VLS_props: {
    readonly classes: Record<string, any>;
    readonly items?: unknown[] | undefined;
};
//# sourceMappingURL=UluDefinitionList.vue.d.ts.map