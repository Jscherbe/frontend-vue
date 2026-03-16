declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    items: unknown[];
    controls: boolean;
    scrollAmount: string | number;
    scrollBehavior: string;
    emptySlides: boolean;
    observerOptions: Record<string, any>;
    modifiers?: string | unknown[] | undefined;
    $props: {
        readonly items?: unknown[] | undefined;
        readonly controls?: boolean | undefined;
        readonly scrollAmount?: string | number | undefined;
        readonly scrollBehavior?: string | undefined;
        readonly emptySlides?: boolean | undefined;
        readonly observerOptions?: Record<string, any> | undefined;
        readonly modifiers?: string | unknown[] | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        slide?(_: {
            item: unknown;
            index: number;
            isIntersecting: boolean;
        }): any;
        previous?(_: {}): any;
        next?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
//# sourceMappingURL=UluScrollSlider.vue.d.ts.map