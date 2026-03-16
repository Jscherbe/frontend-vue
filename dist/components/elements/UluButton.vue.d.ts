declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    iconOnly: boolean;
    iconBefore: boolean;
    primary: boolean;
    secondary: boolean;
    small: boolean;
    large: boolean;
    outline: boolean;
    transparent: boolean;
    noMargin: boolean;
    size?: string | undefined;
    icon?: string | unknown[] | undefined;
    modifiers?: string | unknown[] | undefined;
    to?: string | Record<string, any> | undefined;
    target?: string | undefined;
    href?: string | undefined;
    download?: string | boolean | undefined;
    text?: string | undefined;
    alt?: string | undefined;
    $props: {
        readonly iconOnly?: boolean | undefined;
        readonly iconBefore?: boolean | undefined;
        readonly primary?: boolean | undefined;
        readonly secondary?: boolean | undefined;
        readonly small?: boolean | undefined;
        readonly large?: boolean | undefined;
        readonly outline?: boolean | undefined;
        readonly transparent?: boolean | undefined;
        readonly noMargin?: boolean | undefined;
        readonly size?: string | undefined;
        readonly icon?: string | unknown[] | undefined;
        readonly modifiers?: string | unknown[] | undefined;
        readonly to?: string | Record<string, any> | undefined;
        readonly target?: string | undefined;
        readonly href?: string | undefined;
        readonly download?: string | boolean | undefined;
        readonly text?: string | undefined;
        readonly alt?: string | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        before?(_: {}): any;
        default?(_: {}): any;
        after?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
//# sourceMappingURL=UluButton.vue.d.ts.map