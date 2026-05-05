declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    required: boolean;
    labelHidden: boolean;
    warning: boolean;
    error: boolean;
    alignTop: boolean;
    modifiers?: string | unknown[] | undefined;
    description?: string | undefined;
    label?: string | undefined;
    layout?: string | undefined;
    fieldId?: string | undefined;
    errorMessage?: string | undefined;
    warningMessage?: string | undefined;
    $props: {
        readonly required?: boolean | undefined;
        readonly labelHidden?: boolean | undefined;
        readonly warning?: boolean | undefined;
        readonly error?: boolean | undefined;
        readonly alignTop?: boolean | undefined;
        readonly modifiers?: string | unknown[] | undefined;
        readonly description?: string | undefined;
        readonly label?: string | undefined;
        readonly layout?: string | undefined;
        readonly fieldId?: string | undefined;
        readonly errorMessage?: string | undefined;
        readonly warningMessage?: string | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        label?(_: {}): any;
        label?(_: {}): any;
        default?(_: {}): any;
        description?(_: {}): any;
        errorMessage?(_: {}): any;
        warningMessage?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
//# sourceMappingURL=UluFormItem.vue.d.ts.map