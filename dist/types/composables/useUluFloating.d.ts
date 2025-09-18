/**
 * @typedef {import('@floating-ui/vue').Placement} Placement
 */
/**
 * @typedef {object} UluFloatingConfig
 * @property {Placement} placement - The placement of the floating element.
 * @property {boolean} inline - Whether the floating element is inline.
 * @property {number} offset - The offset of the floating element.
 * @property {boolean} arrow - Whether the floating element has an arrow.
 * @property {function} onReady - Callback function when the floating element is ready.
 */
/**
 * Composable for using floating-ui
 * @param {import('vue').Ref<HTMLElement>} trigger - The trigger element.
 * @param {import('vue').Ref<HTMLElement>} content - The content element.
 * @param {import('vue').Ref<UluFloatingConfig>} config - The configuration for the floating element.
 * @returns {{floatingStyles: import('vue').Ref<object>, placement: import('vue').Ref<Placement>, middlewareData: import('vue').Ref<object>, update: function, isPositioned: import('vue').Ref<boolean>, arrowStyles: import('vue').Ref<object>, contentArrow: import('vue').Ref<HTMLElement>}}
 */
export function useUluFloating(trigger: import("vue").Ref<HTMLElement>, content: import("vue").Ref<HTMLElement>, config: import("vue").Ref<UluFloatingConfig>): {
    floatingStyles: import("vue").Ref<object>;
    placement: import("vue").Ref<Placement>;
    middlewareData: import("vue").Ref<object>;
    update: Function;
    isPositioned: import("vue").Ref<boolean>;
    arrowStyles: import("vue").Ref<object>;
    contentArrow: import("vue").Ref<HTMLElement>;
};
export type Placement = import("@floating-ui/vue").Placement;
export type UluFloatingConfig = {
    /**
     * - The placement of the floating element.
     */
    placement: Placement;
    /**
     * - Whether the floating element is inline.
     */
    inline: boolean;
    /**
     * - The offset of the floating element.
     */
    offset: number;
    /**
     * - Whether the floating element has an arrow.
     */
    arrow: boolean;
    /**
     * - Callback function when the floating element is ready.
     */
    onReady: Function;
};
//# sourceMappingURL=useUluFloating.d.ts.map