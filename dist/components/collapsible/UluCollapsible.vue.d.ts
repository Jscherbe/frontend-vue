declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "update:modelValue", ...args: any[]) => void;
    startOpen: boolean;
    classes: Record<string, any>;
    closeOnEscape: boolean;
    animate: boolean | Record<string, any>;
    triggerText?: string | undefined;
    modelValue?: boolean | undefined;
    $props: {
        readonly startOpen?: boolean | undefined;
        readonly classes?: Record<string, any> | undefined;
        readonly closeOnEscape?: boolean | undefined;
        readonly animate?: boolean | Record<string, any> | undefined;
        readonly triggerText?: string | undefined;
        readonly modelValue?: boolean | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    container: HTMLDivElement;
}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {
            isOpen: boolean | undefined;
        }): any;
        default?(_: {
            isOpen: true;
            toggle: typeof toggle;
        }): any;
    };
    refs: {
        container: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
/**
 * Function used to toggle the collapsible
 */
declare function toggle(): void;
//# sourceMappingURL=UluCollapsible.vue.d.ts.map