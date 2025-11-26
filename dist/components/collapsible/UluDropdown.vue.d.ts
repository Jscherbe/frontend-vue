declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    popoverClasses: Record<string, any>;
    triggerText?: string | undefined;
    items?: unknown[] | undefined;
    $props: {
        readonly popoverClasses?: Record<string, any> | undefined;
        readonly triggerText?: string | undefined;
        readonly items?: unknown[] | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {
            isOpen: boolean;
        }): any;
    };
    refs: {};
    rootEl: any;
};
//# sourceMappingURL=UluDropdown.vue.d.ts.map