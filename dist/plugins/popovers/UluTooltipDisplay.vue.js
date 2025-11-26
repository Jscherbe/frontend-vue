import { createBlock as o, createCommentVNode as r, unref as e, openBlock as i, Teleport as c, createVNode as n } from "vue";
import { useRequiredInject as a } from "../../composables/useRequiredInject.js";
import { TOOLTIP_STATE_KEY as p } from "./index.js";
import s from "./UluTooltipPopover.vue.js";
const d = {
  __name: "UluTooltipDisplay",
  setup(m) {
    const t = a(p);
    return (f, l) => e(t)?.state.visible ? (i(), o(c, {
      key: 0,
      to: e(t).state.config.teleportTo || "body"
    }, [
      n(s, {
        trigger: e(t).state.trigger,
        config: e(t).state.config
      }, null, 8, ["trigger", "config"])
    ], 8, ["to"])) : r("", !0);
  }
};
export {
  d as default
};
