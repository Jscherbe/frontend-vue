declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    text: boolean;
    select: boolean;
    textarea: boolean;
    file: boolean;
    warning: boolean;
    error: boolean;
    alignTop: boolean;
    $props: {
        readonly text?: boolean | undefined;
        readonly select?: boolean | undefined;
        readonly textarea?: boolean | undefined;
        readonly file?: boolean | undefined;
        readonly warning?: boolean | undefined;
        readonly error?: boolean | undefined;
        readonly alignTop?: boolean | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
//# sourceMappingURL=UluFormItem.vue.d.ts.map