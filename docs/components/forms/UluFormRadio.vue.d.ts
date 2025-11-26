declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "update:modelValue", ...args: any[]) => void;
    required: boolean;
    name?: string | undefined;
    value?: string | number | undefined;
    modelValue?: string | number | undefined;
    label?: string | undefined;
    $props: {
        readonly required?: boolean | undefined;
        readonly name?: string | undefined;
        readonly value?: string | number | undefined;
        readonly modelValue?: string | number | undefined;
        readonly label?: string | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
//# sourceMappingURL=UluFormRadio.vue.d.ts.map