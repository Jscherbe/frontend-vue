declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    classes: Record<string, any>;
    small: boolean;
    labelHidden: boolean;
    amount: number;
    labelElement: string;
    total: number;
    deficit: number;
    positive: boolean;
    negative: boolean;
    loader: boolean;
    indeterminate: boolean;
    noValues: boolean;
    amountInHeader: boolean;
    label?: string | undefined;
    formatValue?: Function | undefined;
    $props: {
        readonly classes?: Record<string, any> | undefined;
        readonly small?: boolean | undefined;
        readonly labelHidden?: boolean | undefined;
        readonly amount?: number | undefined;
        readonly labelElement?: string | undefined;
        readonly total?: number | undefined;
        readonly deficit?: number | undefined;
        readonly positive?: boolean | undefined;
        readonly negative?: boolean | undefined;
        readonly loader?: boolean | undefined;
        readonly indeterminate?: boolean | undefined;
        readonly noValues?: boolean | undefined;
        readonly amountInHeader?: boolean | undefined;
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