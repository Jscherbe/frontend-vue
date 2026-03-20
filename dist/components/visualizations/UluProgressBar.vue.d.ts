declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    classes: Record<string, any>;
    danger: boolean;
    small: boolean;
    labelHidden: boolean;
    warning: boolean;
    amount: number;
    labelElement: string;
    total: number;
    deficit: number;
    success: boolean;
    loader: boolean;
    rounded: boolean;
    indeterminate: boolean;
    noValues: boolean;
    amountInHeader: boolean;
    modifiers?: string | unknown[] | undefined;
    label?: string | undefined;
    formatValue?: Function | undefined;
    $props: {
        readonly classes?: Record<string, any> | undefined;
        readonly danger?: boolean | undefined;
        readonly small?: boolean | undefined;
        readonly labelHidden?: boolean | undefined;
        readonly warning?: boolean | undefined;
        readonly amount?: number | undefined;
        readonly labelElement?: string | undefined;
        readonly total?: number | undefined;
        readonly deficit?: number | undefined;
        readonly success?: boolean | undefined;
        readonly loader?: boolean | undefined;
        readonly rounded?: boolean | undefined;
        readonly indeterminate?: boolean | undefined;
        readonly noValues?: boolean | undefined;
        readonly amountInHeader?: boolean | undefined;
        readonly modifiers?: string | unknown[] | undefined;
        readonly label?: string | undefined;
        readonly formatValue?: Function | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        label?(_: {}): any;
        valueAmount?(_: {
            value: number;
        }): any;
        valueAmount?(_: {
            value: number;
        }): any;
        icon?(_: {}): any;
        valueDeficit?(_: {
            value: number;
        }): any;
        valueTotal?(_: {
            value: number;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
//# sourceMappingURL=UluProgressBar.vue.d.ts.map