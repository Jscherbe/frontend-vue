declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $emit: typeof emit;
    $props: Partial<typeof props>;
    type: string;
    compact: boolean;
    hideInputs: boolean;
    options?: unknown[] | undefined;
    legend?: string | undefined;
    modelValue?: string | unknown[] | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    default?: ((props: {
        option: unknown;
    }) => any) | undefined;
};
declare const emit: (event: "update:modelValue", ...args: any[]) => void;
declare const props: {
    readonly type: string;
    readonly compact: boolean;
    readonly hideInputs: boolean;
    readonly options?: unknown[] | undefined;
    readonly legend?: string | undefined;
    readonly modelValue?: string | unknown[] | undefined;
};
//# sourceMappingURL=UluSelectableMenu.vue.d.ts.map