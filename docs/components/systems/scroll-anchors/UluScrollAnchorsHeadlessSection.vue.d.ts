declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    title: string;
    element: string;
    customTitleId?: string | undefined;
    $props: {
        readonly title?: string | undefined;
        readonly element?: string | undefined;
        readonly customTitleId?: string | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    sectionRef: unknown;
}, any>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            isActive: any;
            titleId: any;
            section: any;
            inactiveFrom: any;
            activeFrom: any;
            sectionState: string | null;
        }): any;
    };
    refs: {
        sectionRef: unknown;
    };
    rootEl: any;
};
//# sourceMappingURL=UluScrollAnchorsHeadlessSection.vue.d.ts.map