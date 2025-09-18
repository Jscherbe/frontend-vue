import { ref, computed, watch } from "vue";
import { 
  useFloating,
  autoUpdate,
  offset,
  inline,
  flip,
  shift,
  arrow,
} from "@floating-ui/vue";

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
export function useUluFloating(trigger, content, config) {
  const contentArrow = ref(null);
  const middleware = ref([]);
  const placementConfig = computed(() => config.value?.placement);

  const { 
    floatingStyles, 
    placement,
    middlewareData,
    update,
    isPositioned
  } = useFloating(trigger, content, {
    placement: placementConfig,
    whileElementsMounted: autoUpdate,
    middleware: middleware,
  });

  watch(
    [config, contentArrow],
    ([configValue, arrowEl]) => {
      const mw = [];
      if (!configValue) return;
      if (configValue.inline) mw.push(inline());
      if (configValue.offset) mw.push(offset(configValue.offset));
      mw.push(flip());
      mw.push(shift());
      if (configValue.arrow && arrowEl) {
        mw.push(arrow({ element: arrowEl }));
      }
      middleware.value = mw;
    },
    { immediate: true, deep: true }
  );

  const arrowStyles = computed(() => {
    const pos = middlewareData.value?.arrow;
    if (!pos) return null;
    return {
      position: "absolute",
      left: pos?.x != null ? `${ pos.x }px` : "",
      top: pos?.y != null ? `${ pos.y }px` : "",
    };
  });

  watch(config, (configValue) => {
    if (configValue && configValue.onReady) {
      configValue.onReady({ update, isPositioned });
    }
  });

  return {
    floatingStyles,
    placement,
    middlewareData,
    update,
    isPositioned,
    arrowStyles,
    contentArrow
  };
}