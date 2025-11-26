declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /**
     * Should slides be focusable by tab key
     */
    slideFocusable: BooleanConstructor;
    /**
     * Setting for element.focus() when navigating to() a specific slide
     */
    focusOptions: {
        type: ObjectConstructor;
        default: () => {
            preventScroll: boolean;
            focusVisible: boolean;
        };
    };
    /**
     * Array of slide items (data)
     * - Use slot (#slide) to template
     */
    items: ArrayConstructor;
    /**
     * Slideshow without a nav
     */
    noNav: BooleanConstructor;
    /**
     * Allow user to change the scroll behavior when a slide is navigated to()
     */
    scrollBehaviorNav: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Allow user to change the scroll behavior when a slide is navigated via next/prev
     */
    scrollBehaviorControl: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Observe
     */
    observerOptions: {
        type: ObjectConstructor;
        default: () => {
            threshhold: number;
            rootMargin: string;
        };
    };
    /**
     * The intial slide index to use for active slide (zero based)
     */
    initialActive: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Allow user to control scroll amount (element.scrollTo) for prev/next controls
     * - For future scroll implementations (like ulu scroll-slider for cards, etc)
     * - Function is passed (direction, DomRefs)
     * - Number is passed directly
     */
    scrollAmount: (FunctionConstructor | NumberConstructor)[];
}>, {}, {
    slides: any;
}, {
    canScrollRight(): boolean;
    canScrollLeft(): boolean;
}, {
    /**
     * Creates the internal array of slides based on user's passed items
     */
    createSlides(): {
        element: null;
        active: boolean;
        item: unknown;
    }[];
    /**
     * Find the corresponding slide data by slide element
     */
    getSlideByElement(el: any): any;
    /**
     * Provides scroll measurements
     */
    getScrollData(): {
        scrollLeft: any;
        offsetWidth: any;
        scrollWidth: any;
    };
    /**
     * Determines the amount to scroll the track
     */
    resolveAmount(dir: any): any;
    /**
     * Scroll the track to a specified point
     */
    scrollTo(left: any, behavior: any): void;
    /**
     * Scroll to specific index
     * @param {Number} index Slide index
     */
    to(index: number): void;
    /**
     * Goto to next slide
     */
    next(): void;
    /**
     * Goto to previous slide
     */
    previous(): void;
    /**
     * Sets up a new observer to watch the slides visibility (within track)
     */
    createObserver(): void;
    /**
     * Add all slide elements as targets in observer
     */
    observeSlides(): void;
    /**
     * Remove observer and it's internal DOM references (GC)
     */
    destroyObserver(): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "slide-change"[], "slide-change", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /**
     * Should slides be focusable by tab key
     */
    slideFocusable: BooleanConstructor;
    /**
     * Setting for element.focus() when navigating to() a specific slide
     */
    focusOptions: {
        type: ObjectConstructor;
        default: () => {
            preventScroll: boolean;
            focusVisible: boolean;
        };
    };
    /**
     * Array of slide items (data)
     * - Use slot (#slide) to template
     */
    items: ArrayConstructor;
    /**
     * Slideshow without a nav
     */
    noNav: BooleanConstructor;
    /**
     * Allow user to change the scroll behavior when a slide is navigated to()
     */
    scrollBehaviorNav: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Allow user to change the scroll behavior when a slide is navigated via next/prev
     */
    scrollBehaviorControl: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Observe
     */
    observerOptions: {
        type: ObjectConstructor;
        default: () => {
            threshhold: number;
            rootMargin: string;
        };
    };
    /**
     * The intial slide index to use for active slide (zero based)
     */
    initialActive: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Allow user to control scroll amount (element.scrollTo) for prev/next controls
     * - For future scroll implementations (like ulu scroll-slider for cards, etc)
     * - Function is passed (direction, DomRefs)
     * - Number is passed directly
     */
    scrollAmount: (FunctionConstructor | NumberConstructor)[];
}>> & Readonly<{
    "onSlide-change"?: ((...args: any[]) => any) | undefined;
}>, {
    observerOptions: Record<string, any>;
    slideFocusable: boolean;
    noNav: boolean;
    focusOptions: Record<string, any>;
    scrollBehaviorNav: string;
    scrollBehaviorControl: string;
    initialActive: number;
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
//# sourceMappingURL=UluSlideShow.vue.d.ts.map