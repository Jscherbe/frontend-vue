import { computed as p, createBlock as n, openBlock as r, resolveDynamicComponent as c, normalizeClass as o, unref as t, withCtx as u, renderSlot as f, createTextVNode as g, toDisplayString as y } from "vue";
import { useScrollAnchorSection as h } from "./useScrollAnchorSection.js";
const x = {
  __name: "UluScrollAnchorsSection",
  props: {
    /**
     * The title of the section, used for navigation and generating a default ID
     */
    title: String,
    /**
     * The HTML element to use for the title
     */
    titleElement: {
      type: String,
      default: "h2"
    },
    /**
     * The class to apply to the title element
     */
    titleClass: {
      type: String,
      default: "h2"
    },
    /**
     * A custom ID to use for the section anchor, overriding the auto-generated one
     */
    customTitleId: String,
    /**
     * The class to apply to the section's wrapper div
     */
    wrapperClass: {
      type: String,
      default: "scroll-anchors__section"
    },
    /**
     * The class to apply to the wrapper div when the section is active
     */
    activeClass: {
      type: String,
      default: "is-active"
    },
    /**
     * The HTML element to use for the section root
     */
    element: {
      type: String,
      default: "section"
    }
  },
  setup(e) {
    const d = e, { sectionRef: m, titleId: v, isActive: l, inactiveFrom: a, activeFrom: i, section: S } = h(d), C = p(() => {
      if (l.value) {
        if (i.value) return `enter-${i.value}`;
      } else if (a.value) return `exit-${a.value}`;
      return null;
    });
    return (s, $) => (r(), n(c(e.element), {
      class: o([e.wrapperClass, { [e.activeClass]: e.activeClass && t(l) }]),
      "data-scrollpoint-state": C.value,
      ref_key: "sectionRef",
      ref: m
    }, {
      default: u(() => [
        (r(), n(c(e.titleElement), {
          class: o(e.titleClass),
          id: t(v)
        }, {
          default: u(() => [
            f(s.$slots, "title", {}, () => [
              g(y(e.title), 1)
            ])
          ]),
          _: 3
        }, 8, ["class", "id"])),
        f(s.$slots, "default", { section: t(S) })
      ]),
      _: 3
    }, 8, ["class", "data-scrollpoint-state"]));
  }
};
export {
  x as default
};
