declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    caption: string;
    position?: string | undefined;
    modifiers?: string | unknown[] | undefined;
    $props: {
        readonly caption?: string | undefined;
        readonly position?: string | undefined;
        readonly modifiers?: string | unknown[] | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        caption?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLElement;
};
//# sourceMappingURL=UluCaptionedFigure.vue.d.ts.map