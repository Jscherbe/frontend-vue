import { computed as a, createBlock as r, openBlock as o, unref as i, normalizeClass as s, withCtx as p, createElementBlock as t, Fragment as l, resolveDynamicComponent as m, normalizeProps as u, mergeProps as g, createTextVNode as f, toDisplayString as v } from "vue";
import { TOOLTIP_ID as _ } from "./index.js";
import d from "./UluPopoverBase.vue.js";
const k = ["innerHTML"], O = {
  __name: "UluTooltipPopover",
  props: {
    config: Object,
    trigger: {
      type: Object,
      default: null
    }
  },
  setup(n) {
    const c = n, e = a(() => c.config);
    return (y, T) => (o(), r(d, {
      class: s(["popover--tooltip is-active", e.value.class]),
      id: i(_),
      trigger: n.trigger,
      config: e.value
    }, {
      default: p(() => [
        e.value.isHtml ? (o(), t("span", {
          key: 0,
          innerHTML: e.value.content
        }, null, 8, k)) : (o(), t(l, { key: 1 }, [
          e.value.component ? (o(), r(m(e.value.component), u(g({ key: 0 }, e.value.componentProps)), null, 16)) : (o(), t(l, { key: 1 }, [
            f(v(e.value.content), 1)
          ], 64))
        ], 64))
      ]),
      _: 1
    }, 8, ["id", "trigger", "config", "class"]));
  }
};
export {
  O as default
};
