declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "update:modelValue" | "submit", ...args: any[]) => void;
    modelValue: string;
    placeholder: string;
    label: string;
    submitButtonProps: Record<string, any>;
    id?: string | undefined;
    $props: {
        readonly modelValue?: string | undefined;
        readonly placeholder?: string | undefined;
        readonly label?: string | undefined;
        readonly submitButtonProps?: Record<string, any> | undefined;
        readonly id?: string | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLFormElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        submit?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLFormElement;
};
//# sourceMappingURL=UluSearchForm.vue.d.ts.map