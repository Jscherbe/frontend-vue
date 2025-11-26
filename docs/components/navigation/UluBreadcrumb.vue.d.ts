declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /**
     * Array of breadcrumb items.
     * Each item is an object: { title: String, to: [String, Object], current: Boolean }
     */
    items: {
        type: ArrayConstructor;
        default: () => never[];
    };
    /**
     * Icon to use as a separator.
     */
    separatorIcon: StringConstructor;
    /**
     * Classes object to be applied to elements.
     * Keys: nav, list, item, link, icon
     */
    classes: {
        type: ObjectConstructor;
        default: () => {
            nav: string;
            list: string;
            item: string;
            link: string;
            current: string;
            separator: string;
        };
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /**
     * Array of breadcrumb items.
     * Each item is an object: { title: String, to: [String, Object], current: Boolean }
     */
    items: {
        type: ArrayConstructor;
        default: () => never[];
    };
    /**
     * Icon to use as a separator.
     */
    separatorIcon: StringConstructor;
    /**
     * Classes object to be applied to elements.
     * Keys: nav, list, item, link, icon
     */
    classes: {
        type: ObjectConstructor;
        default: () => {
            nav: string;
            list: string;
            item: string;
            link: string;
            current: string;
            separator: string;
        };
    };
}>> & Readonly<{}>, {
    classes: Record<string, any>;
    items: unknown[];
}, {}, {
    UluIcon: import('vue').DefineComponent<{}, {
        spaced: boolean;
        icon?: string | boolean | Record<string, any> | unknown[] | undefined;
        $props: {
            readonly spaced?: boolean | undefined;
            readonly icon?: string | boolean | Record<string, any> | unknown[] | undefined;
        };
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=UluBreadcrumb.vue.d.ts.map