import { useRequiredInject as e } from "../../composables/useRequiredInject.js";
import { POPOVER_OPTIONS_KEY as n, TOOLTIP_STATE_KEY as r, resolveTooltipConfig as T } from "./index.js";
function h() {
  const o = e(r), t = e(n), s = { ...t.popover, ...t.tooltip };
  return {
    showTooltip: (p, l) => {
      const i = T(l, s);
      i && o.show(p, i);
    },
    hideTooltip: o.hide,
    tooltipState: o.state
  };
}
export {
  h as useTooltip
};
