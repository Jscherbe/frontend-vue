declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * Icon to display next to the title.
     */
    icon: StringConstructor;
    /**
     * The alignment of the icon with the title.
     */
    iconAlign: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Classes for the different elements in the component.
     */
    classes: {
        type: ObjectConstructor;
        default: () => {
            title: string;
            icon: string;
        };
    };
    /**
     * The title to display.
     */
    title: StringConstructor;
    /**
     * The HTML element to use for the title.
     */
    titleElement: {
        type: StringConstructor;
        default: string;
    };
    /**
     * If true, a rule will be displayed under the title.
     */
    rule: BooleanConstructor;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Icon to display next to the title.
     */
    icon: StringConstructor;
    /**
     * The alignment of the icon with the title.
     */
    iconAlign: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Classes for the different elements in the component.
     */
    classes: {
        type: ObjectConstructor;
        default: () => {
            title: string;
            icon: string;
        };
    };
    /**
     * The title to display.
     */
    title: StringConstructor;
    /**
     * The HTML element to use for the title.
     */
    titleElement: {
        type: StringConstructor;
        default: string;
    };
    /**
     * If true, a rule will be displayed under the title.
     */
    rule: BooleanConstructor;
}>> & Readonly<{}>, {
    classes: Record<string, any>;
    titleElement: string;
    rule: boolean;
    iconAlign: string;
}, {}, {
    UluIcon: import("vue").DefineComponent<{}, {
        $props: Partial<{
            readonly spaced: boolean;
            readonly icon?: string | boolean | Record<string, any> | unknown[] | undefined;
        }>;
        spaced: boolean;
        icon?: string | boolean | Record<string, any> | unknown[] | undefined;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=UluTitleRail.vue.d.ts.map