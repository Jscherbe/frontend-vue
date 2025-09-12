declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $props: Partial<typeof props>;
    counter: boolean;
    size?: string | undefined;
    type?: string | undefined;
    text?: string | number | undefined;
    icon?: string | unknown[] | undefined;
    modifiers?: string | unknown[] | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    default?: ((props: {}) => any) | undefined;
};
declare const props: {
    readonly counter: boolean;
    readonly size?: string | undefined;
    readonly type?: string | undefined;
    readonly text?: string | number | undefined;
    readonly icon?: string | unknown[] | undefined;
    readonly modifiers?: string | unknown[] | undefined;
};
//# sourceMappingURL=UluTag.vue.d.ts.map