declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $props: Partial<typeof props>;
    title: string;
    element: string;
    customTitleId?: string | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    default?: ((props: {
        isActive: any;
        titleId: any;
        section: any;
    }) => any) | undefined;
};
declare const props: {
    readonly title: string;
    readonly element: string;
    readonly customTitleId?: string | undefined;
};
//# sourceMappingURL=UluScrollAnchorsHeadlessSection.vue.d.ts.map