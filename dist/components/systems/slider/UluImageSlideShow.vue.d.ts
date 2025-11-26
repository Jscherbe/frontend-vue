declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    images: ArrayConstructor;
    selectButton: BooleanConstructor;
}>, {}, {}, {}, {
    /**
     * Test to see if the active slide's nav button (thumbnail) is in view
     * if not, scroll the nav to ensure it is visible. This function will take
     * into account which side of the overflow nav the item is hidden in and will
     * scroll either to fit it to the flush end (if overflow to the right) or flush start
     */
    slideChange({ slide, nav }: {
        slide: any;
        nav: any;
    }): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    images: ArrayConstructor;
    selectButton: BooleanConstructor;
}>> & Readonly<{}>, {
    selectButton: boolean;
}, {}, {
    UluSlideShow: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        slideFocusable: BooleanConstructor;
        focusOptions: {
            type: ObjectConstructor;
            default: () => {
                preventScroll: boolean;
                focusVisible: boolean;
            };
        };
        items: ArrayConstructor;
        noNav: BooleanConstructor;
        scrollBehaviorNav: {
            type: StringConstructor;
            default: string;
        };
        scrollBehaviorControl: {
            type: StringConstructor;
            default: string;
        };
        observerOptions: {
            type: ObjectConstructor;
            default: () => {
                threshhold: number;
                rootMargin: string;
            };
        };
        initialActive: {
            type: NumberConstructor;
            default: number;
        };
        scrollAmount: (FunctionConstructor | NumberConstructor)[];
    }>, {}, {
        slides: any;
    }, {
        canScrollRight(): boolean;
        canScrollLeft(): boolean;
    }, {
        createSlides(): {
            element: null;
            active: boolean;
            item: unknown;
        }[];
        getSlideByElement(el: any): any;
        getScrollData(): {
            scrollLeft: any;
            offsetWidth: any;
            scrollWidth: any;
        };
        resolveAmount(dir: any): any;
        scrollTo(left: any, behavior: any): void;
        to(index: number): void;
        next(): void;
        previous(): void;
        createObserver(): void;
        observeSlides(): void;
        destroyObserver(): void;
    }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "slide-change"[], "slide-change", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        slideFocusable: BooleanConstructor;
        focusOptions: {
            type: ObjectConstructor;
            default: () => {
                preventScroll: boolean;
                focusVisible: boolean;
            };
        };
        items: ArrayConstructor;
        noNav: BooleanConstructor;
        scrollBehaviorNav: {
            type: StringConstructor;
            default: string;
        };
        scrollBehaviorControl: {
            type: StringConstructor;
            default: string;
        };
        observerOptions: {
            type: ObjectConstructor;
            default: () => {
                threshhold: number;
                rootMargin: string;
            };
        };
        initialActive: {
            type: NumberConstructor;
            default: number;
        };
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
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=UluImageSlideShow.vue.d.ts.map