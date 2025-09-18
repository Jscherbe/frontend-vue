declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $props: Partial<typeof props>;
    table: boolean;
    classes: Record<string, any>;
    compact: boolean;
    inline: boolean;
    inlineAll: boolean;
    separated: boolean;
    separatedFirst: boolean;
    separatedLast: boolean;
    modifiers?: string | unknown[] | undefined;
    items?: unknown[] | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    term?: ((props: {
        item: unknown;
        index: number;
    }) => any) | undefined;
} & {
    description?: ((props: {
        item: unknown;
        index: number;
    }) => any) | undefined;
};
declare const props: {
    readonly table: boolean;
    readonly classes: Record<string, any>;
    readonly compact: boolean;
    readonly inline: boolean;
    readonly inlineAll: boolean;
    readonly separated: boolean;
    readonly separatedFirst: boolean;
    readonly separatedLast: boolean;
    readonly modifiers?: string | unknown[] | undefined;
    readonly items?: unknown[] | undefined;
};
//# sourceMappingURL=UluDefinitionList.vue.d.ts.map