declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    classes: Record<string, any>;
    toast?: Record<string, any> | undefined;
    $props: {
        readonly classes?: Record<string, any> | undefined;
        readonly toast?: Record<string, any> | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        icon?(_: {
            toast: Record<string, any> | undefined;
        }): any;
        content?(_: {
            toast: Record<string, any> | undefined;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
//# sourceMappingURL=UluToast.vue.d.ts.map