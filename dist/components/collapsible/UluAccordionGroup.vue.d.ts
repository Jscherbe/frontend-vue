declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    animate: boolean | Record<string, any>;
    triggerTextElement: string;
    items: unknown[];
    modifiers?: string | unknown[] | undefined;
    $props: {
        readonly animate?: boolean | Record<string, any> | undefined;
        readonly triggerTextElement?: string | undefined;
        readonly items?: unknown[] | undefined;
        readonly modifiers?: string | unknown[] | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {
            item: never;
            index: number;
            isOpen: boolean | undefined;
        }): any;
        icon?(_: {
            item: never;
            index: number;
            isOpen: boolean | undefined;
        }): any;
        item?(_: {
            item: never;
            index: number;
            isOpen: true;
            toggle: typeof toggle;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
//# sourceMappingURL=UluAccordionGroup.vue.d.ts.map