declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    element: string;
    railWidth: number;
    indicatorWidth: number;
    indicatorHeight: number;
    indicatorAlignment: string;
    indicatorAlignmentOffset: number;
    $props: {
        readonly element?: string | undefined;
        readonly railWidth?: number | undefined;
        readonly indicatorWidth?: number | undefined;
        readonly indicatorHeight?: number | undefined;
        readonly indicatorAlignment?: string | undefined;
        readonly indicatorAlignmentOffset?: number | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    indicator: HTMLDivElement;
}, any>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            item: never;
            index: never;
        }): any;
    };
    refs: {
        indicator: HTMLDivElement;
    };
    rootEl: any;
};
//# sourceMappingURL=UluScrollAnchorsNavAnimated.vue.d.ts.map