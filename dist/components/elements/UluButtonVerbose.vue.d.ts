declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    titleElement: string;
    inline: boolean;
    fullWidth: boolean;
    icon?: string | unknown[] | undefined;
    body?: string | undefined;
    title?: string | undefined;
    modifiers?: string | unknown[] | undefined;
    to?: string | Record<string, any> | undefined;
    target?: string | undefined;
    href?: string | undefined;
    download?: string | boolean | undefined;
    $props: {
        readonly titleElement?: string | undefined;
        readonly inline?: boolean | undefined;
        readonly fullWidth?: boolean | undefined;
        readonly icon?: string | unknown[] | undefined;
        readonly body?: string | undefined;
        readonly title?: string | undefined;
        readonly modifiers?: string | unknown[] | undefined;
        readonly to?: string | Record<string, any> | undefined;
        readonly target?: string | undefined;
        readonly href?: string | undefined;
        readonly download?: string | boolean | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        title?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
//# sourceMappingURL=UluButtonVerbose.vue.d.ts.map