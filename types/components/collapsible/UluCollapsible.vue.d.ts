declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $emit: typeof emit;
    $props: Partial<typeof props>;
    startOpen: boolean;
    classes: Record<string, any>;
    animate: boolean | Record<string, any>;
    closeOnEscape: boolean;
    triggerText?: string | undefined;
    modelValue?: boolean | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    trigger?: ((props: {
        isOpen: boolean | undefined;
        toggle: typeof toggle;
    }) => any) | undefined;
} & {
    default?: ((props: {
        isOpen: true;
        toggle: typeof toggle;
    }) => any) | undefined;
};
declare const emit: (event: "update:modelValue", ...args: any[]) => void;
declare const props: {
    readonly startOpen: boolean;
    readonly classes: Record<string, any>;
    readonly animate: boolean | Record<string, any>;
    readonly closeOnEscape: boolean;
    readonly triggerText?: string | undefined;
    readonly modelValue?: boolean | undefined;
};
/**
 * Function used to toggle the collapsible
 */
declare function toggle(): void;
//# sourceMappingURL=UluCollapsible.vue.d.ts.map