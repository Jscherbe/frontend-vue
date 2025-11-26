declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    classes: Record<string, any>;
    compact: boolean;
    ordered: boolean;
    unordered: boolean;
    lines: boolean;
    forceOrdered: boolean;
    reversed: boolean;
    start?: string | undefined;
    items?: unknown[] | undefined;
    listStyleType?: string | undefined;
    $props: {
        readonly classes?: Record<string, any> | undefined;
        readonly compact?: boolean | undefined;
        readonly ordered?: boolean | undefined;
        readonly unordered?: boolean | undefined;
        readonly lines?: boolean | undefined;
        readonly forceOrdered?: boolean | undefined;
        readonly reversed?: boolean | undefined;
        readonly start?: string | undefined;
        readonly items?: unknown[] | undefined;
        readonly listStyleType?: string | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            item: unknown;
            index: number;
        }): any;
    };
    refs: {};
    rootEl: any;
};
//# sourceMappingURL=UluList.vue.d.ts.map