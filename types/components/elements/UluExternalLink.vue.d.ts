declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $props: Partial<typeof __VLS_props>;
    target: string;
    text?: string | undefined;
    icon?: string | undefined;
    href?: string | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    default?: ((props: {}) => any) | undefined;
};
/**
 * Component for external links (adds icon after link text)
 */
declare const __VLS_props: {
    readonly target: string;
    readonly text?: string | undefined;
    readonly icon?: string | undefined;
    readonly href?: string | undefined;
};
//# sourceMappingURL=UluExternalLink.vue.d.ts.map