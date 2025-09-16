declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $props: Partial<typeof props>;
    classes: Record<string, any>;
    compact: boolean;
    ordered: boolean;
    unordered: boolean;
    lines: boolean;
    forceOrdered: boolean;
    reversed: boolean;
    start?: string | undefined;
    listStyleType?: string | undefined;
    items?: unknown[] | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    default?: ((props: {
        item: unknown;
        index: number;
    }) => any) | undefined;
};
declare const props: {
    readonly classes: Record<string, any>;
    readonly compact: boolean;
    readonly ordered: boolean;
    readonly unordered: boolean;
    readonly lines: boolean;
    readonly forceOrdered: boolean;
    readonly reversed: boolean;
    readonly start?: string | undefined;
    readonly listStyleType?: string | undefined;
    readonly items?: unknown[] | undefined;
};
//# sourceMappingURL=UluList.vue.d.ts.map