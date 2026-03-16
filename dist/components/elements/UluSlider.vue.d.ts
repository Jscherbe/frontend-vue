declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "change", ...args: any[]) => void;
    duration: number;
    transition: string;
    items: unknown[];
    nav: boolean;
    controls: boolean;
    timingFunction: string;
    loop: boolean;
    autoplay: number;
    reduceMotionFallback: boolean;
    focusOptions: Record<string, any>;
    modifiers?: string | unknown[] | undefined;
    $props: {
        readonly duration?: number | undefined;
        readonly transition?: string | undefined;
        readonly items?: unknown[] | undefined;
        readonly nav?: boolean | undefined;
        readonly controls?: boolean | undefined;
        readonly timingFunction?: string | undefined;
        readonly loop?: boolean | undefined;
        readonly autoplay?: number | undefined;
        readonly reduceMotionFallback?: boolean | undefined;
        readonly focusOptions?: Record<string, any> | undefined;
        readonly modifiers?: string | unknown[] | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    trackRef: HTMLUListElement;
}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        slide?(_: {
            item: unknown;
            index: number;
            active: boolean;
            upcoming: boolean;
        }): any;
        previous?(_: {}): any;
        next?(_: {}): any;
        nav?(_: {
            item: unknown;
            index: number;
            active: boolean;
        }): any;
    };
    refs: {
        trackRef: HTMLUListElement;
    };
    rootEl: HTMLDivElement;
};
//# sourceMappingURL=UluSlider.vue.d.ts.map