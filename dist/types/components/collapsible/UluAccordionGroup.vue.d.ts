declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $props: Partial<typeof props>;
    items: unknown[];
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    trigger?: ((props: {
        item: never;
        index: number;
        isOpen: boolean | undefined;
    }) => any) | undefined;
} & {
    icon?: ((props: {
        item: never;
        index: number;
        isOpen: boolean | undefined;
    }) => any) | undefined;
} & {
    item?: ((props: {
        item: never;
        index: number;
        isOpen: true;
        toggle: typeof toggle;
    }) => any) | undefined;
};
declare const props: {
    readonly items: unknown[];
};
//# sourceMappingURL=UluAccordionGroup.vue.d.ts.map