declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    firstItemActive: BooleanConstructor;
    /**
     * Observe
     */
    observerOptions: {
        type: ObjectConstructor;
        default: () => {
            root: null;
            threshhold: number[];
            rootMargin: string;
        };
    };
}>, {}, {
    isMounted: boolean;
    sections: never[];
}, {}, {
    update(): void;
    getSectionIndex(el: any): number;
    /**
     * Sets up a new observer to watch the section visibility
     */
    createObserver(): void;
    /**
     * Add all slide elements as targets in observer
     */
    observeItems(): void;
    removeActive(except?: null): void;
    /**
     * Remove observer and it's internal DOM references (GC)
     */
    destroyObserver(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "section-change"[], "section-change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    firstItemActive: BooleanConstructor;
    /**
     * Observe
     */
    observerOptions: {
        type: ObjectConstructor;
        default: () => {
            root: null;
            threshhold: number[];
            rootMargin: string;
        };
    };
}>> & Readonly<{
    "onSection-change"?: ((...args: any[]) => any) | undefined;
}>, {
    firstItemActive: boolean;
    observerOptions: Record<string, any>;
}, {}, {}, {}, string, () => {
    [SECTIONS]: import("vue").ComputedRef<never[]>;
    [REGISTER]: (instance: any) => void;
    [UNREGISTER]: (instance: any) => void;
}, true, {}, any>;
export default _default;
import { SECTIONS } from "./symbols.js";
import { REGISTER } from "./symbols.js";
import { UNREGISTER } from "./symbols.js";
//# sourceMappingURL=UluScrollAnchors.vue.d.ts.map