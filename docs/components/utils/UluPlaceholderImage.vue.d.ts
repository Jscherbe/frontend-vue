declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    imageId: StringConstructor;
    /**
     * Width of the image
     */
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /**
     * Height of the image
     */
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /**
     * Alt text for placeholder image
     */
    alt: StringConstructor;
    /**
     * Random size
     */
    random: BooleanConstructor;
}>, {}, {}, {
    src(): string;
    size(): {
        width: any;
        height: any;
    };
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    imageId: StringConstructor;
    /**
     * Width of the image
     */
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /**
     * Height of the image
     */
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /**
     * Alt text for placeholder image
     */
    alt: StringConstructor;
    /**
     * Random size
     */
    random: BooleanConstructor;
}>> & Readonly<{}>, {
    random: boolean;
    width: string | number;
    height: string | number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=UluPlaceholderImage.vue.d.ts.map