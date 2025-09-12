declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * Allow user to bypass this functionality
     * - Function should return true if the page should be annouced
     * - Function is passed  (to, from, $route) => {}
     *   - to/from are path strings
     */
    validator: {
        type: FunctionConstructor;
        default: () => boolean;
    };
    /**
     * Array of paths to exclude
     * - Can be exact path "/about"
     * - Or can be path with wildcard "/about/*" (match all paths under about)
     */
    exclude: {
        type: ArrayConstructor;
        default: () => never[];
    };
    /**
     * Function to retrieve routes title
     */
    getTitle: {
        type: FunctionConstructor;
        default: (route: any) => any;
    };
}>, {}, {}, {
    title(): any;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Allow user to bypass this functionality
     * - Function should return true if the page should be annouced
     * - Function is passed  (to, from, $route) => {}
     *   - to/from are path strings
     */
    validator: {
        type: FunctionConstructor;
        default: () => boolean;
    };
    /**
     * Array of paths to exclude
     * - Can be exact path "/about"
     * - Or can be path with wildcard "/about/*" (match all paths under about)
     */
    exclude: {
        type: ArrayConstructor;
        default: () => never[];
    };
    /**
     * Function to retrieve routes title
     */
    getTitle: {
        type: FunctionConstructor;
        default: (route: any) => any;
    };
}>> & Readonly<{}>, {
    validator: Function;
    exclude: unknown[];
    getTitle: Function;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=UluRouteAnnouncer.vue.d.ts.map