import { ref as a, computed as d } from "vue";
import { useRequiredInject as p } from "../../composables/useRequiredInject.js";
import { POPOVER_OPTIONS_KEY as m, TOOLTIP_STATE_KEY as g } from "./index.js";
import s from "./defaults.js";
function x(i) {
  const n = p(g), e = p(m);
  i.content || console.warn("Missing content for 'useTooltipFollow' tooltip", i);
  let r;
  const t = a(0), o = a(0), u = d(() => ({
    getBoundingClientRect() {
      return {
        width: 0,
        height: 0,
        x: t.value,
        y: o.value,
        top: o.value,
        left: t.value,
        right: t.value,
        bottom: o.value
      };
    }
  })), f = e ? e.popover : s.popover, c = e ? e.tooltip : s.tooltip, v = {
    ...{ ...f, ...c },
    content: i.content,
    inline: !1,
    // Following cursor is never inline
    onReady({ update: l }) {
      r = l;
    }
  };
  return {
    x: t,
    y: o,
    show() {
      n.show(u.value, v);
    },
    hide() {
      n.state.trigger === u.value && n.hide();
    },
    update(l) {
      t.value = l.x, o.value = l.y, r && r();
    }
  };
}
export {
  x as default
};
