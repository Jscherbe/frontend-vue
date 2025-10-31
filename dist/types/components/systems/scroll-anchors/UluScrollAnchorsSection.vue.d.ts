declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $props: Partial<typeof props>;
    activeClass: string;
    element: string;
    titleElement: string;
    titleClass: string;
    wrapperClass: string;
    title?: string | undefined;
    customTitleId?: string | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    title?: ((props: {}) => any) | undefined;
} & {
    default?: ((props: {
        section: any;
    }) => any) | undefined;
};
declare const props: {
    readonly activeClass: string;
    readonly element: string;
    readonly titleElement: string;
    readonly titleClass: string;
    readonly wrapperClass: string;
    readonly title?: string | undefined;
    readonly customTitleId?: string | undefined;
};
//# sourceMappingURL=UluScrollAnchorsSection.vue.d.ts.map