import { computed as r, createBlock as i, openBlock as s, resolveDynamicComponent as l, normalizeProps as c, guardReactiveProps as f, withCtx as u, renderSlot as p } from "vue";
import { RouterLink as d } from "vue-router";
const h = {
  __name: "UluAction",
  props: {
    /**
     * Router link target.
     */
    to: [String, Object],
    /**
     * Alternative to 'to' (used in some legacy or specific data structures like UluMenu items).
     */
    path: String,
    /**
     * Standard URL for native anchor tags.
     */
    href: String,
    /**
     * Target attribute for anchor tags (e.g. '_blank').
     */
    target: String,
    /**
     * Download attribute for anchor tags.
     */
    download: [Boolean, String],
    /**
     * Optional explicit element to use (e.g., if you need 'div' or 'span' instead of a button).
     */
    element: String,
    /**
     * Vue Router active class override.
     */
    activeClass: String,
    /**
     * Vue Router exact active class override.
     */
    exactActiveClass: String,
    /**
     * Allows passing 'click' as a prop to signify this is an action (used in UluMenu data objects).
     * Note: The actual @click listener should be attached via fallthrough attrs, this is just for logic routing.
     */
    click: Function
  },
  setup(o) {
    const t = o, n = r(() => t.element ? t.element : t.to || t.path ? d : t.href ? "a" : "button"), a = r(() => {
      const e = {};
      return t.to || t.path ? (e.to = t.to || t.path, t.activeClass && (e.activeClass = t.activeClass), t.exactActiveClass && (e.exactActiveClass = t.exactActiveClass)) : t.href ? (e.href = t.href, t.target && (e.target = t.target), t.download && (e.download = typeof t.download == "string" ? t.download : !0)) : (!t.element || t.element === "button") && (e.type = "button"), e;
    });
    return (e, m) => (s(), i(l(n.value), c(f(a.value)), {
      default: u(() => [
        p(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
};
export {
  h as default
};
