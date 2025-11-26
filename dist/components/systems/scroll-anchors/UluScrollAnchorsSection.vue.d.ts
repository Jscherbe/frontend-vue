declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    activeClass: string;
    element: string;
    titleElement: string;
    titleClass: string;
    wrapperClass: string;
    title?: string | undefined;
    customTitleId?: string | undefined;
    $props: {
        readonly activeClass?: string | undefined;
        readonly element?: string | undefined;
        readonly titleElement?: string | undefined;
        readonly titleClass?: string | undefined;
        readonly wrapperClass?: string | undefined;
        readonly title?: string | undefined;
        readonly customTitleId?: string | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    sectionRef: unknown;
}, any>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        title?(_: {}): any;
        default?(_: {
            section: any;
        }): any;
    };
    refs: {
        sectionRef: unknown;
    };
    rootEl: any;
};
//# sourceMappingURL=UluScrollAnchorsSection.vue.d.ts.map