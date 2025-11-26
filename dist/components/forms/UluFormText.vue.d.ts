declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "update:modelValue", ...args: any[]) => void;
    required: boolean;
    labelHidden: boolean;
    modelValue?: string | undefined;
    label?: string | undefined;
    $props: {
        readonly required?: boolean | undefined;
        readonly labelHidden?: boolean | undefined;
        readonly modelValue?: string | undefined;
        readonly label?: string | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        label?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
//# sourceMappingURL=UluFormText.vue.d.ts.map