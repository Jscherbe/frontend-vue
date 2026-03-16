declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    classes: Record<string, any>;
    titleElement: string;
    iconAlign: string;
    rule: boolean;
    icon?: string | undefined;
    title?: string | undefined;
    modifiers?: string | unknown[] | undefined;
    $props: {
        readonly classes?: Record<string, any> | undefined;
        readonly titleElement?: string | undefined;
        readonly iconAlign?: string | undefined;
        readonly rule?: boolean | undefined;
        readonly icon?: string | undefined;
        readonly title?: string | undefined;
        readonly modifiers?: string | unknown[] | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        end?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
//# sourceMappingURL=UluTitleRail.vue.d.ts.map