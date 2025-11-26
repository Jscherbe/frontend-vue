declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /**
     * Icon prop, if used will set the icon for the button, will use UluIcon (which uses font-awesome icons conditionally)
     * - If using custom icons don't use this prop, use before or after slots with correct classes (ie .button__icon)
     */
    icon: (StringConstructor | ArrayConstructor)[];
    /**
     * If passing an icon (and not using iconOnly) this determines if the icon is before or after (default) the text
     */
    iconBefore: BooleanConstructor;
    /**
     * Button style for only icon
     */
    iconOnly: BooleanConstructor;
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
    download: (BooleanConstructor | StringConstructor)[];
    /**
     * For icon only buttons or buttons that need an explicit label
     */
    alt: StringConstructor;
    /**
     * If not using slot this sets the buttons text via prop
     */
    text: StringConstructor;
    /**
     * Pass any sizes setup for button (ie. small, large, etc)
     */
    size: StringConstructor;
    /**
     * Preset to set primary style (needs to be a button style in ulu scss)
     */
    primary: BooleanConstructor;
    /**
     * Preset to set secondary style (needs to be a button style in ulu scss)
     */
    secondary: BooleanConstructor;
    /**
     * Preset to set small size (use "size" for any sizes)
     */
    small: BooleanConstructor;
    /**
     * Preset to set large size (use "size" for any sizes)
     */
    large: BooleanConstructor;
    /**
     * Preset to set outline style button (needs to be a button style in ulu scss)
     */
    outline: BooleanConstructor;
    /**
     * Preset to set transparent style button (needs to be a button style in ulu scss)
     */
    transparent: BooleanConstructor;
    /**
     * Add no-margin utility
     */
    noMargin: BooleanConstructor;
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: (StringConstructor | ArrayConstructor)[];
}>, {
    resolvedModifiers: any;
}, {}, {
    resolvedAriaLabel(): string | null;
    classes(): string[];
    element(): "button" | import('vue-router')._RouterLinkI | "a";
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
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /**
     * Icon prop, if used will set the icon for the button, will use UluIcon (which uses font-awesome icons conditionally)
     * - If using custom icons don't use this prop, use before or after slots with correct classes (ie .button__icon)
     */
    icon: (StringConstructor | ArrayConstructor)[];
    /**
     * If passing an icon (and not using iconOnly) this determines if the icon is before or after (default) the text
     */
    iconBefore: BooleanConstructor;
    /**
     * Button style for only icon
     */
    iconOnly: BooleanConstructor;
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
    download: (BooleanConstructor | StringConstructor)[];
    /**
     * For icon only buttons or buttons that need an explicit label
     */
    alt: StringConstructor;
    /**
     * If not using slot this sets the buttons text via prop
     */
    text: StringConstructor;
    /**
     * Pass any sizes setup for button (ie. small, large, etc)
     */
    size: StringConstructor;
    /**
     * Preset to set primary style (needs to be a button style in ulu scss)
     */
    primary: BooleanConstructor;
    /**
     * Preset to set secondary style (needs to be a button style in ulu scss)
     */
    secondary: BooleanConstructor;
    /**
     * Preset to set small size (use "size" for any sizes)
     */
    small: BooleanConstructor;
    /**
     * Preset to set large size (use "size" for any sizes)
     */
    large: BooleanConstructor;
    /**
     * Preset to set outline style button (needs to be a button style in ulu scss)
     */
    outline: BooleanConstructor;
    /**
     * Preset to set transparent style button (needs to be a button style in ulu scss)
     */
    transparent: BooleanConstructor;
    /**
     * Add no-margin utility
     */
    noMargin: BooleanConstructor;
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: (StringConstructor | ArrayConstructor)[];
}>> & Readonly<{}>, {
    small: boolean;
    iconOnly: boolean;
    iconBefore: boolean;
    primary: boolean;
    secondary: boolean;
    large: boolean;
    outline: boolean;
    transparent: boolean;
    noMargin: boolean;
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
//# sourceMappingURL=UluButton.vue.d.ts.map