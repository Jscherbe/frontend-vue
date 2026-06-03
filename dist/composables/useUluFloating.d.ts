/**
 * @typedef {import('@floating-ui/vue').Placement} Placement
 */
/**
 * @typedef {object} UluFloatingConfig
 * @property {Placement} placement - The placement of the floating element.
 * @property {Boolean|Object} inline - Whether the floating element is inline. If object is passed will be passed as configuration for the floating ui "inline" plugin.
 * @property {Number|Object} offset - The offset of the floating element. If object is passed will be passed as configuration for the floating ui "offset" plugin.
 * @property {Object} flip - This plugin is always added, if object is passed will be passed as configuration for the floating ui "flip" plugin.
 * @property {Object} shift - This plugin is always added, if object is passed will be passed as configuration for the floating ui "shift" plugin.
 * @property {Boolean} arrow - Whether the floating element has an arrow.
 * @property {Function} onReady - Callback function when the floating element is ready.
 */
/**
 * Composable for using floating-ui
 * @param {import('vue').Ref<HTMLElement>} trigger - The trigger element.
 * @param {import('vue').Ref<HTMLElement>} content - The content element.
 * @param {import('vue').Ref<UluFloatingConfig>} config - The configuration for the floating element.
 * @returns {{floatingStyles: import('vue').Ref<object>, placement: import('vue').Ref<Placement>, middlewareData: import('vue').Ref<object>, update: function, isPositioned: import('vue').Ref<boolean>, arrowStyles: import('vue').Ref<object>, contentArrow: import('vue').Ref<HTMLElement>}}
 */
export function useUluFloating(trigger: import('vue').Ref<HTMLElement>, content: import('vue').Ref<HTMLElement>, config: import('vue').Ref<UluFloatingConfig>): {
    floatingStyles: import('vue').Ref<object>;
    placement: import('vue').Ref<Placement>;
    middlewareData: import('vue').Ref<object>;
    update: Function;
    isPositioned: import('vue').Ref<boolean>;
    arrowStyles: import('vue').Ref<object>;
    contentArrow: import('vue').Ref<HTMLElement>;
};
export type Placement = import('@floating-ui/vue').Placement;
export type UluFloatingConfig = {
    /**
     * - The placement of the floating element.
     */
    placement: Placement;
    /**
     * - Whether the floating element is inline. If object is passed will be passed as configuration for the floating ui "inline" plugin.
     */
    inline: boolean | Object;
    /**
     * - The offset of the floating element. If object is passed will be passed as configuration for the floating ui "offset" plugin.
     */
    offset: number | Object;
    /**
     * - This plugin is always added, if object is passed will be passed as configuration for the floating ui "flip" plugin.
     */
    flip: Object;
    /**
     * - This plugin is always added, if object is passed will be passed as configuration for the floating ui "shift" plugin.
     */
    shift: Object;
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