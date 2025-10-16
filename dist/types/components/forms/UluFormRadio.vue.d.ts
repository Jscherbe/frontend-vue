declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $emit: typeof __VLS_emit;
    $props: Partial<typeof __VLS_props>;
    required: boolean;
    value?: string | number | undefined;
    name?: string | undefined;
    label?: string | undefined;
    modelValue?: string | number | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    default?: ((props: {}) => any) | undefined;
};
declare const __VLS_emit: (event: "update:modelValue", ...args: any[]) => void;
declare const __VLS_props: {
    readonly required: boolean;
    readonly value?: string | number | undefined;
    readonly name?: string | undefined;
    readonly label?: string | undefined;
    readonly modelValue?: string | number | undefined;
};
//# sourceMappingURL=UluFormRadio.vue.d.ts.map