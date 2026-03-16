declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    element: string;
    controls: boolean;
    trackId: string;
    scrollAmount: string | number;
    scrollBehavior: string;
    namespace: string;
    controlsClass: string;
    buttonClasses: unknown[];
    iconClassPrevious: string;
    iconClassNext: string;
    offsetStart: number;
    offsetEnd: number;
    $props: {
        readonly element?: string | undefined;
        readonly controls?: boolean | undefined;
        readonly trackId?: string | undefined;
        readonly scrollAmount?: string | number | undefined;
        readonly scrollBehavior?: string | undefined;
        readonly namespace?: string | undefined;
        readonly controlsClass?: string | undefined;
        readonly buttonClasses?: unknown[] | undefined;
        readonly iconClassPrevious?: string | undefined;
        readonly iconClassNext?: string | undefined;
        readonly offsetStart?: number | undefined;
        readonly offsetEnd?: number | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            setTrackRef: (el: any) => void;
            onScroll: () => void;
            canScrollLeft: boolean;
            canScrollRight: boolean;
        }): any;
        previous?(_: {}): any;
        next?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
//# sourceMappingURL=UluOverflowScroller.vue.d.ts.map