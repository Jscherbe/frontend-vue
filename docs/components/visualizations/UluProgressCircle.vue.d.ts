declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    small: boolean;
    duration: number;
    easing: string;
    label: string;
    formatValue: Function;
    percentage: number;
    noValue: boolean;
    outside: boolean;
    outsideBelow: boolean;
    status: string;
    pieStyle: boolean;
    noMask: boolean;
    $props: {
        readonly small?: boolean | undefined;
        readonly duration?: number | undefined;
        readonly easing?: string | undefined;
        readonly label?: string | undefined;
        readonly formatValue?: Function | undefined;
        readonly percentage?: number | undefined;
        readonly noValue?: boolean | undefined;
        readonly outside?: boolean | undefined;
        readonly outsideBelow?: boolean | undefined;
        readonly status?: string | undefined;
        readonly pieStyle?: boolean | undefined;
        readonly noMask?: boolean | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    pie: SVGCircleElement;
}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        value?(_: {
            value: number;
        }): any;
        value?(_: {
            value: number;
        }): any;
    };
    refs: {
        pie: SVGCircleElement;
    };
    rootEl: HTMLDivElement;
};
//# sourceMappingURL=UluProgressCircle.vue.d.ts.map