declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    icon: string;
    file: Record<string, any>;
    noFileSize: boolean;
    $props: {
        readonly icon?: string | undefined;
        readonly file?: Record<string, any> | undefined;
        readonly noFileSize?: boolean | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLAnchorElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            fileName: any;
            fileSize: string;
        }): any;
    };
    refs: {};
    rootEl: HTMLAnchorElement;
};
//# sourceMappingURL=UluFileDisplay.vue.d.ts.map