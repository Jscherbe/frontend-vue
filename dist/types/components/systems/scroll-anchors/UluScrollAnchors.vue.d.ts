declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $emit: typeof emit;
    $props: Partial<typeof props>;
    observerOptions: Record<string, any>;
    debug: boolean;
    firstItemActive: boolean;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    default?: ((props: {}) => any) | undefined;
};
declare const emit: (event: "section-change", ...args: any[]) => void;
declare const props: {
    readonly observerOptions: Record<string, any>;
    readonly debug: boolean;
    readonly firstItemActive: boolean;
};
//# sourceMappingURL=UluScrollAnchors.vue.d.ts.map