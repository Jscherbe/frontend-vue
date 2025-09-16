declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * The title of the button. Can also be passed via slot.
     */
    title: StringConstructor;
    /**
     * Optional element to use for title
     */
    titleElement: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The body text of the button. Can also be passed via slot.
     */
    body: StringConstructor;
    /**
     * Icon prop, if used will set the icon for the button, will use UluIcon (which uses font-awesome icons conditionally)
     */
    icon: (StringConstructor | ArrayConstructor)[];
    /**
     * If set will use router-link for button component and pass to prop
     */
    to: (ObjectConstructor | StringConstructor)[];
    /**
     * Sets the button to a link with this href
     */
    href: StringConstructor;
    /**
     * Set a value for target attribute when button is a link
     */
    target: StringConstructor;
    /**
     * Sets the download attribute on the link (passing string [filename] will populate the download attribute, true will just include it as boolean attribute)
     */
    download: (StringConstructor | BooleanConstructor)[];
    /**
     * Preset to set inline style
     */
    inline: BooleanConstructor;
    /**
     * Preset to set full-width style
     */
    fullWidth: BooleanConstructor;
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: (StringConstructor | ArrayConstructor)[];
}>, {
    resolvedModifiers: any;
}, {}, {
    element(): "button" | "a" | import("vue-router")._RouterLinkI;
    attrs(): {
        to: string | Record<string, any>;
        href?: undefined;
    } | {
        href: string;
        to?: undefined;
    } | {
        to?: undefined;
        href?: undefined;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The title of the button. Can also be passed via slot.
     */
    title: StringConstructor;
    /**
     * Optional element to use for title
     */
    titleElement: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The body text of the button. Can also be passed via slot.
     */
    body: StringConstructor;
    /**
     * Icon prop, if used will set the icon for the button, will use UluIcon (which uses font-awesome icons conditionally)
     */
    icon: (StringConstructor | ArrayConstructor)[];
    /**
     * If set will use router-link for button component and pass to prop
     */
    to: (ObjectConstructor | StringConstructor)[];
    /**
     * Sets the button to a link with this href
     */
    href: StringConstructor;
    /**
     * Set a value for target attribute when button is a link
     */
    target: StringConstructor;
    /**
     * Sets the download attribute on the link (passing string [filename] will populate the download attribute, true will just include it as boolean attribute)
     */
    download: (StringConstructor | BooleanConstructor)[];
    /**
     * Preset to set inline style
     */
    inline: BooleanConstructor;
    /**
     * Preset to set full-width style
     */
    fullWidth: BooleanConstructor;
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: (StringConstructor | ArrayConstructor)[];
}>> & Readonly<{}>, {
    inline: boolean;
    fullWidth: boolean;
    titleElement: string;
}, {}, {
    UluIcon: import("vue").DefineComponent<{}, {
        $props: Partial<{
            readonly spaced: boolean;
            readonly icon?: string | boolean | unknown[] | Record<string, any> | undefined;
        }>;
        spaced: boolean;
        icon?: string | boolean | unknown[] | Record<string, any> | undefined;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=UluButtonVerbose.vue.d.ts.map