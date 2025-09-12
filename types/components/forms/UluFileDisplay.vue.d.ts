declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $props: Partial<typeof props>;
    file: Record<string, any>;
    icon: string;
    noFileSize: boolean;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    default?: ((props: {
        fileName: any;
        fileSize: string;
    }) => any) | undefined;
};
declare const props: {
    readonly file: Record<string, any>;
    readonly icon: string;
    readonly noFileSize: boolean;
};
//# sourceMappingURL=UluFileDisplay.vue.d.ts.map