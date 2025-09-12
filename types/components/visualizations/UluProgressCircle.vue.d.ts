declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $props: Partial<typeof props>;
    label: string;
    small: boolean;
    duration: number;
    easing: string;
    formatValue: Function;
    percentage: number;
    noValue: boolean;
    outside: boolean;
    outsideBelow: boolean;
    status: string;
    pieStyle: boolean;
    noMask: boolean;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    value?: ((props: {
        value: number;
    }) => any) | undefined;
} & {
    value?: ((props: {
        value: number;
    }) => any) | undefined;
};
/**
 * A circular progress indicator component.
 * @slot value - The value display. Overrides the `formatValue` prop.
 */
declare const props: {
    readonly label: string;
    readonly small: boolean;
    readonly duration: number;
    readonly easing: string;
    readonly formatValue: Function;
    readonly percentage: number;
    readonly noValue: boolean;
    readonly outside: boolean;
    readonly outsideBelow: boolean;
    readonly status: string;
    readonly pieStyle: boolean;
    readonly noMask: boolean;
};
//# sourceMappingURL=UluProgressCircle.vue.d.ts.map