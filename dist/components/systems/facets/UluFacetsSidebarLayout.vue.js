import { ref as r, inject as h, computed as y, createElementBlock as g, openBlock as i, normalizeClass as m, unref as l, createElementVNode as e, withDirectives as _, createBlock as v, createCommentVNode as p, renderSlot as n, toDisplayString as T, vShow as k, withCtx as B, Teleport as S } from "vue";
import w from "../../collapsible/UluModal.vue.js";
const V = { class: "facets-sidebar__header" }, C = { class: "facets-sidebar__mobile-controls" }, F = { class: "facets-sidebar__body" }, M = { class: "facets-sidebar__main" }, j = {
  __name: "UluFacetsSidebarLayout",
  props: {
    mobileButtonText: {
      type: String,
      default: "Filters & Sort"
    },
    /**
     * Classes for elements. See UluCollapsible for all available class keys (trigger, content, etc).
     * The 'icon' key is also available for the icon span.
     * - Any valid class binding value per element
     */
    classes: {
      type: Object,
      default: () => ({
        mobileButton: "button"
      })
    }
  },
  setup(d) {
    const o = r(!1), t = h("uluIsMobile"), u = r(null), c = r(null), b = y(() => t.value ? c.value : u.value);
    return (a, s) => (i(), g("div", {
      class: m(["facets-sidebar", { "facets-sidebar--filters-hidden": l(t) }])
    }, [
      e("div", V, [
        n(a.$slots, "header")
      ]),
      _(e("div", C, [
        e("button", {
          class: m(d.classes.mobileButton),
          onClick: s[0] || (s[0] = (f) => o.value = !0)
        }, T(d.mobileButtonText), 3)
      ], 512), [
        [k, l(t)]
      ]),
      e("div", F, [
        _(e("div", {
          class: "facets-sidebar__sidebar",
          ref_key: "desktopTarget",
          ref: u
        }, null, 512), [
          [k, !l(t)]
        ]),
        e("div", M, [
          n(a.$slots, "main")
        ])
      ]),
      l(t) ? (i(), v(w, {
        key: 0,
        modelValue: o.value,
        "onUpdate:modelValue": s[1] || (s[1] = (f) => o.value = f),
        position: "right",
        title: "Filters & Sort",
        allowResize: ""
      }, {
        default: B(() => [
          e("div", {
            class: "facets-sidebar__sidebar",
            ref_key: "mobileTarget",
            ref: c
          }, null, 512)
        ]),
        _: 1
      }, 8, ["modelValue"])) : p("", !0),
      b.value ? (i(), v(S, {
        key: 1,
        to: b.value
      }, [
        n(a.$slots, "sidebar")
      ], 8, ["to"])) : p("", !0)
    ], 2));
  }
};
export {
  j as default
};
