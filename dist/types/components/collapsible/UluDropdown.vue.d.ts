declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $props: Partial<typeof __VLS_props>;
    popoverClasses: Record<string, any>;
    triggerText?: string | undefined;
    items?: unknown[] | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    trigger?: ((props: {
        isOpen: boolean;
    }) => any) | undefined;
};
declare const __VLS_props: {
    readonly popoverClasses: Record<string, any>;
    readonly triggerText?: string | undefined;
    readonly items?: unknown[] | undefined;
};
//# sourceMappingURL=UluDropdown.vue.d.ts.map