declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    classes: Record<string, any>;
    mobileButtonText: string;
    $props: {
        readonly classes?: Record<string, any> | undefined;
        readonly mobileButtonText?: string | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    desktopTarget: HTMLDivElement;
    mobileTarget: HTMLDivElement;
}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        header?(_: {}): any;
        main?(_: {}): any;
        sidebar?(_: {}): any;
    };
    refs: {
        desktopTarget: HTMLDivElement;
        mobileTarget: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
//# sourceMappingURL=UluFacetsSidebarLayout.vue.d.ts.map