import { computed as b, createElementBlock as i, createCommentVNode as y, openBlock as c, normalizeClass as t, createBlock as g, createElementVNode as n, resolveDynamicComponent as B, withCtx as h, renderSlot as x, createTextVNode as u, Fragment as F, renderList as k, toDisplayString as C, createVNode as p } from "vue";
import E from "../../elements/UluIcon.vue.js";
const U = ["onClick"], I = {
  __name: "UluFacetsActiveFilters",
  props: {
    /**
     * The selectedFacets array from the useFacets composable.
     */
    selectedFacets: {
      type: Array,
      default: () => []
    },
    /**
     * Element to use for label
     */
    labelElement: {
      type: String,
      default: "strong"
    },
    /**
     * Icon to use for remove (in button)
     */
    removeIcon: {
      type: String,
      default: "type:close"
    },
    /**
     * Classes for different element { label, list, item, filterButton, filterButtonText, filterButtonIcon, clearButton }
     */
    classes: {
      type: Object,
      default: () => ({
        container: "layout-flex flex-wrap",
        label: "hidden-visually",
        list: "layout-flex flex-wrap",
        item: "margin-right-small-x",
        filterButton: "button button--small button--outline no-min-width",
        filterButtonText: null,
        filterButtonIcon: "button__icon",
        clearButton: "button button--small"
      })
    }
  },
  emits: ["facet-change", "clear-filters"],
  setup(e, { emit: m }) {
    const d = e, o = m, r = b(() => {
      const l = [];
      return d.selectedFacets.forEach((s) => {
        s.children.forEach((a) => {
          l.push({
            ...a,
            groupUid: s.uid
          });
        });
      }), l;
    });
    function f(l) {
      o("facet-change", {
        groupUid: l.groupUid,
        facetUid: l.uid,
        selected: !1
      });
    }
    function v() {
      o("clear-filters");
    }
    return (l, s) => r.value.length ? (c(), i("div", {
      key: 0,
      class: t(["facets-active", e.classes.container])
    }, [
      (c(), g(B(e.labelElement), {
        class: t(["facets-active__label", e.classes.label])
      }, {
        default: h(() => [
          x(l.$slots, "label", {}, () => [
            s[0] || (s[0] = u(" Active Filters: ", -1))
          ])
        ]),
        _: 3
      }, 8, ["class"])),
      n("ul", {
        class: t(["facets-active__list", e.classes.list])
      }, [
        (c(!0), i(F, null, k(r.value, (a) => (c(), i("li", {
          class: t(["facets-active__item", e.classes.item]),
          key: `${a.groupUid}-${a.uid}`
        }, [
          n("button", {
            class: t(e.classes.filterButton),
            icon: "type:remove",
            onClick: (A) => f(a)
          }, [
            n("span", {
              class: t(e.classes.filterButtonText)
            }, [
              s[1] || (s[1] = n("span", { class: "hidden-visually" }, "Remove Active Filter:", -1)),
              u(" " + C(a.label), 1)
            ], 2),
            n("span", {
              class: t(e.classes.filterButtonIcon)
            }, [
              p(E, { icon: e.removeIcon }, null, 8, ["icon"])
            ], 2)
          ], 10, U)
        ], 2))), 128))
      ], 2),
      n("button", {
        onClick: v,
        class: t(e.classes.clearButton)
      }, "Clear All", 2)
    ], 2)) : y("", !0);
  }
};
export {
  I as default
};
