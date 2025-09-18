declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $props: Partial<typeof props>;
    skeleton: boolean;
    size?: string | undefined;
    type?: string | undefined;
    text?: string | undefined;
    to?: string | Record<string, any> | undefined;
    click?: Function | undefined;
    href?: string | undefined;
    alt?: string | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    default?: ((props: {}) => any) | undefined;
};
declare const props: {
    readonly skeleton: boolean;
    readonly size?: string | undefined;
    readonly type?: string | undefined;
    readonly text?: string | undefined;
    readonly to?: string | Record<string, any> | undefined;
    readonly click?: Function | undefined;
    readonly href?: string | undefined;
    readonly alt?: string | undefined;
};
//# sourceMappingURL=UluBadge.vue.d.ts.map