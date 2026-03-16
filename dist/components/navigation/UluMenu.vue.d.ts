declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "item-click", ...args: any[]) => void;
    classes: Record<string, any>;
    iconOnly: boolean;
    noChildren: boolean;
    items?: unknown[] | undefined;
    $props: {
        readonly classes?: Record<string, any> | undefined;
        readonly iconOnly?: boolean | undefined;
        readonly noChildren?: boolean | undefined;
        readonly items?: unknown[] | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: Partial<Record<number, (_: any) => any>> & {
        default?(_: {
            item: unknown;
            index: number;
        }): any;
        item?(_: {
            item: unknown;
            index: number;
        }): any;
    };
    refs: {};
    rootEl: any;
};
//# sourceMappingURL=UluMenu.vue.d.ts.map