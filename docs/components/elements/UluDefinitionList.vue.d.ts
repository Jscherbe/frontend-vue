declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    classes: Record<string, any>;
    compact: boolean;
    inline: boolean;
    inlineAll: boolean;
    table: boolean;
    separated: boolean;
    separatedFirst: boolean;
    separatedLast: boolean;
    modifiers?: string | unknown[] | undefined;
    items?: unknown[] | undefined;
    $props: {
        readonly classes?: Record<string, any> | undefined;
        readonly compact?: boolean | undefined;
        readonly inline?: boolean | undefined;
        readonly inlineAll?: boolean | undefined;
        readonly table?: boolean | undefined;
        readonly separated?: boolean | undefined;
        readonly separatedFirst?: boolean | undefined;
        readonly separatedLast?: boolean | undefined;
        readonly modifiers?: string | unknown[] | undefined;
        readonly items?: unknown[] | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDListElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        term?(_: {
            item: unknown;
            index: number;
        }): any;
        description?(_: {
            item: unknown;
            index: number;
        }): any;
    };
    refs: {};
    rootEl: HTMLDListElement;
};
//# sourceMappingURL=UluDefinitionList.vue.d.ts.map