declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    type: string;
    compact: boolean;
    icon?: string | undefined;
    title?: string | undefined;
    modifiers?: string | unknown[] | undefined;
    description?: string | undefined;
    $props: {
        readonly type?: string | undefined;
        readonly compact?: boolean | undefined;
        readonly icon?: string | undefined;
        readonly title?: string | undefined;
        readonly modifiers?: string | unknown[] | undefined;
        readonly description?: string | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        title?(_: {}): any;
        description?(_: {}): any;
        action?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
//# sourceMappingURL=UluAlert.vue.d.ts.map