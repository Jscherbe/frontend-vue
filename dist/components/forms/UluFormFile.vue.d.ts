declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "file-change", ...args: any[]) => void;
    label: string;
    required: boolean;
    labelHidden: boolean;
    noClasses: boolean;
    multiple: boolean;
    inputAttrs?: Record<string, any> | undefined;
    $props: {
        readonly label?: string | undefined;
        readonly required?: boolean | undefined;
        readonly labelHidden?: boolean | undefined;
        readonly noClasses?: boolean | undefined;
        readonly multiple?: boolean | undefined;
        readonly inputAttrs?: Record<string, any> | undefined;
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
//# sourceMappingURL=UluFormFile.vue.d.ts.map