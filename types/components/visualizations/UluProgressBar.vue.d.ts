declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $props: Partial<typeof props>;
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
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    label?: ((props: {}) => any) | undefined;
} & {
    valueAmount?: ((props: {
        value: number;
    }) => any) | undefined;
} & {
    icon?: ((props: {}) => any) | undefined;
} & {
    valueAmount?: ((props: {
        value: number;
    }) => any) | undefined;
} & {
    valueDeficit?: ((props: {
        value: number;
    }) => any) | undefined;
} & {
    valueTotal?: ((props: {
        value: number;
    }) => any) | undefined;
};
/**
 * A linear progress bar to display progress, with support for various styles and a deficit indicator.
 * @slot icon - A slot for placing an icon in the header, typically to indicate status.
 */
declare const props: {
    readonly classes: Record<string, any>;
    readonly small: boolean;
    readonly labelHidden: boolean;
    readonly amount: number;
    readonly labelElement: string;
    readonly total: number;
    readonly deficit: number;
    readonly positive: boolean;
    readonly negative: boolean;
    readonly loader: boolean;
    readonly indeterminate: boolean;
    readonly noValues: boolean;
    readonly amountInHeader: boolean;
    readonly label?: string | undefined;
    readonly formatValue?: Function | undefined;
};
//# sourceMappingURL=UluProgressBar.vue.d.ts.map