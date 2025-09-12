declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * Specify card element, unless to or href are used which will use 'a' or 'router-link'
     * - Other than changing to more appropriate element (ie 'li' if in list for example), this can
     *   be used to set the card to a button to attach your own click handlers to
     */
    cardElement: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Text for title if not using slot
     */
    title: StringConstructor;
    /**
     * Element to use for title
     */
    titleElement: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Title will be router link
     */
    titleTo: {
        type: (ObjectConstructor | StringConstructor)[];
        validator: (_: any, props: any) => boolean;
    };
    /**
     * Will make title a link to href
     */
    titleHref: {
        type: StringConstructor;
        validator: (_: any, props: any) => boolean;
    };
    /**
     * When using href this will set title link's target attribute
     */
    titleTarget: StringConstructor;
    /**
     * If set the entire card will be router link
     * - Do not us in combination with titleTo or titleHref
     */
    to: (ObjectConstructor | StringConstructor)[];
    /**
     * If set the entire card will be a link to href
     * - Do not us in combination with titleTo or titleHref
     */
    href: {
        type: StringConstructor;
    };
    /**
     * When using href this will set link's target attribute
     */
    target: StringConstructor;
    /**
     * Classes with class bindings for different elements including ({ title, image })
     */
    classes: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * Whether to proxy clicks of non-interactive elements (making whole card clickable)
     */
    proxyClick: BooleanConstructor;
    /**
     * Options to be merged for proxy click settings ({ preventSelector, preventSelectionDuration })
     */
    proxyClickOptions: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * Source of image
     */
    imageSrc: StringConstructor;
    /**
     * Alt text for image
     */
    imageAlt: StringConstructor;
    /**
     * If true image will use icon modifier (displays for image adjusts for icon vs full image)
     */
    imageIcon: BooleanConstructor;
    /**
     * Horizontal card layout
     */
    horizontal: BooleanConstructor;
    /**
     * Horizontal centered card layout
     */
    horizontalCenter: BooleanConstructor;
    /**
     * Overlay card layout
     */
    overlay: BooleanConstructor;
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     * - Can be String or Array of Strings
     */
    modifiers: (StringConstructor | ArrayConstructor)[];
}>, {
    resolvedModifiers: any;
}, {
    proxyClickEnabled: string | Record<string, any> | null;
    resolvedProxyOptions: {
        selectorPrevent: string;
        mousedownDurationPrevent: number;
    };
    cursorStyle: null;
    proxyStart: null;
    shouldProxy: boolean;
}, {
    resolvedElement(): string | import("vue-router")._RouterLinkI;
}, {
    onMousedown({ target, timeStamp }: {
        target: any;
        timeStamp: any;
    }): void;
    onMouseup({ timeStamp }: {
        timeStamp: any;
    }): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Specify card element, unless to or href are used which will use 'a' or 'router-link'
     * - Other than changing to more appropriate element (ie 'li' if in list for example), this can
     *   be used to set the card to a button to attach your own click handlers to
     */
    cardElement: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Text for title if not using slot
     */
    title: StringConstructor;
    /**
     * Element to use for title
     */
    titleElement: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Title will be router link
     */
    titleTo: {
        type: (ObjectConstructor | StringConstructor)[];
        validator: (_: any, props: any) => boolean;
    };
    /**
     * Will make title a link to href
     */
    titleHref: {
        type: StringConstructor;
        validator: (_: any, props: any) => boolean;
    };
    /**
     * When using href this will set title link's target attribute
     */
    titleTarget: StringConstructor;
    /**
     * If set the entire card will be router link
     * - Do not us in combination with titleTo or titleHref
     */
    to: (ObjectConstructor | StringConstructor)[];
    /**
     * If set the entire card will be a link to href
     * - Do not us in combination with titleTo or titleHref
     */
    href: {
        type: StringConstructor;
    };
    /**
     * When using href this will set link's target attribute
     */
    target: StringConstructor;
    /**
     * Classes with class bindings for different elements including ({ title, image })
     */
    classes: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * Whether to proxy clicks of non-interactive elements (making whole card clickable)
     */
    proxyClick: BooleanConstructor;
    /**
     * Options to be merged for proxy click settings ({ preventSelector, preventSelectionDuration })
     */
    proxyClickOptions: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * Source of image
     */
    imageSrc: StringConstructor;
    /**
     * Alt text for image
     */
    imageAlt: StringConstructor;
    /**
     * If true image will use icon modifier (displays for image adjusts for icon vs full image)
     */
    imageIcon: BooleanConstructor;
    /**
     * Horizontal card layout
     */
    horizontal: BooleanConstructor;
    /**
     * Horizontal centered card layout
     */
    horizontalCenter: BooleanConstructor;
    /**
     * Overlay card layout
     */
    overlay: BooleanConstructor;
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     * - Can be String or Array of Strings
     */
    modifiers: (StringConstructor | ArrayConstructor)[];
}>> & Readonly<{}>, {
    classes: Record<string, any>;
    overlay: boolean;
    horizontal: boolean;
    titleElement: string;
    proxyClick: boolean;
    imageIcon: boolean;
    horizontalCenter: boolean;
    cardElement: string;
    proxyClickOptions: Record<string, any>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=UluCard.vue.d.ts.map