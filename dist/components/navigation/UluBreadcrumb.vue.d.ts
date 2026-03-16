declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    classes: Record<string, any>;
    items: unknown[];
    separatorIcon?: string | undefined;
    $props: {
        readonly classes?: Record<string, any> | undefined;
        readonly items?: unknown[] | undefined;
        readonly separatorIcon?: string | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            item: unknown;
        }): any;
        default?(_: {
            item: unknown;
        }): any;
        separator?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
//# sourceMappingURL=UluBreadcrumb.vue.d.ts.map