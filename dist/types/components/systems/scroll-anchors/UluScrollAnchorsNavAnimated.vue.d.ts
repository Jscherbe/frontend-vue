declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $props: Partial<typeof props>;
    element: string;
    railWidth: number;
    indicatorWidth: number;
    indicatorHeight: number;
    indicatorAlignment: string;
    indicatorAlignmentOffset: number;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    default?: ((props: {
        item: never;
        index: never;
    }) => any) | undefined;
};
declare const props: {
    readonly element: string;
    readonly railWidth: number;
    readonly indicatorWidth: number;
    readonly indicatorHeight: number;
    readonly indicatorAlignment: string;
    readonly indicatorAlignmentOffset: number;
};
//# sourceMappingURL=UluScrollAnchorsNavAnimated.vue.d.ts.map