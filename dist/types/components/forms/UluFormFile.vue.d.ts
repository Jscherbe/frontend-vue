declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $emit: typeof emit;
    $props: Partial<typeof __VLS_props>;
    label: string;
    required: boolean;
    labelHidden: boolean;
    noClasses: boolean;
    multiple: boolean;
    inputAttrs?: Record<string, any> | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    label?: ((props: {}) => any) | undefined;
};
declare const emit: (event: "file-change", ...args: any[]) => void;
declare const __VLS_props: {
    readonly label: string;
    readonly required: boolean;
    readonly labelHidden: boolean;
    readonly noClasses: boolean;
    readonly multiple: boolean;
    readonly inputAttrs?: Record<string, any> | undefined;
};
//# sourceMappingURL=UluFormFile.vue.d.ts.map