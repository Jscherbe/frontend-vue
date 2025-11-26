declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "facet-change", ...args: any[]) => void;
    classes: Record<string, any>;
    compact: boolean;
    maxVisible: number;
    facets: unknown[];
    $props: {
        readonly classes?: Record<string, any> | undefined;
        readonly compact?: boolean | undefined;
        readonly maxVisible?: number | undefined;
        readonly facets?: unknown[] | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        groupTrigger?(_: {
            group: unknown;
            isOpen: boolean | undefined;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
//# sourceMappingURL=UluFacetsFilterLists.vue.d.ts.map