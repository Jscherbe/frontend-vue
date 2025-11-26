declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "section-change", ...args: any[]) => void;
    firstItemActive: boolean;
    observerOptions: Record<string, any>;
    debug: boolean;
    $props: {
        readonly firstItemActive?: boolean | undefined;
        readonly observerOptions?: Record<string, any> | undefined;
        readonly debug?: boolean | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    componentEl: HTMLDivElement;
}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        componentEl: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
//# sourceMappingURL=UluScrollAnchors.vue.d.ts.map