declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "update:modelValue", ...args: any[]) => void;
    startOpen: boolean;
    classes: Record<string, any>;
    animate: boolean | Record<string, any>;
    triggerTextElement: string;
    triggerText?: string | undefined;
    modelValue?: boolean | undefined;
    modifiers?: string | unknown[] | undefined;
    $props: {
        readonly startOpen?: boolean | undefined;
        readonly classes?: Record<string, any> | undefined;
        readonly animate?: boolean | Record<string, any> | undefined;
        readonly triggerTextElement?: string | undefined;
        readonly triggerText?: string | undefined;
        readonly modelValue?: boolean | undefined;
        readonly modifiers?: string | unknown[] | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {
            isOpen: boolean | undefined;
        }): any;
        icon?(_: {
            isOpen: boolean | undefined;
        }): any;
        default?(_: {
            isOpen: true;
            toggle: typeof toggle;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
//# sourceMappingURL=UluAccordion.vue.d.ts.map