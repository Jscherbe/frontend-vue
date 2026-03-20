declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    duration: number;
    easing: string;
    danger: boolean;
    small: boolean;
    label: string;
    warning: boolean;
    success: boolean;
    formatValue: Function;
    percentage: number;
    noValue: boolean;
    outside: boolean;
    outsideBelow: boolean;
    pieStyle: boolean;
    noMask: boolean;
    modifiers?: string | unknown[] | undefined;
    $props: {
        readonly duration?: number | undefined;
        readonly easing?: string | undefined;
        readonly danger?: boolean | undefined;
        readonly small?: boolean | undefined;
        readonly label?: string | undefined;
        readonly warning?: boolean | undefined;
        readonly success?: boolean | undefined;
        readonly formatValue?: Function | undefined;
        readonly percentage?: number | undefined;
        readonly noValue?: boolean | undefined;
        readonly outside?: boolean | undefined;
        readonly outsideBelow?: boolean | undefined;
        readonly pieStyle?: boolean | undefined;
        readonly noMask?: boolean | undefined;
        readonly modifiers?: string | unknown[] | undefined;
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