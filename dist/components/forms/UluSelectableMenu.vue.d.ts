declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "update:modelValue", ...args: any[]) => void;
    type: string;
    compact: boolean;
    hideInputs: boolean;
    modelValue?: string | unknown[] | undefined;
    legend?: string | undefined;
    options?: unknown[] | undefined;
    $props: {
        readonly type?: string | undefined;
        readonly compact?: boolean | undefined;
        readonly hideInputs?: boolean | undefined;
        readonly modelValue?: string | unknown[] | undefined;
        readonly legend?: string | undefined;
        readonly options?: unknown[] | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            option: unknown;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
//# sourceMappingURL=UluSelectableMenu.vue.d.ts.map