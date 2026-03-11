import I from "../elements/UluIcon.vue.js";
import O from "../elements/UluTag.vue.js";
import { resolveComponent as i, resolveDirective as A, createElementBlock as u, createCommentVNode as c, openBlock as n, normalizeClass as a, Fragment as S, renderList as h, withDirectives as T, renderSlot as f, createBlock as o, resolveDynamicComponent as b, mergeProps as k, withCtx as m, createElementVNode as x, toDisplayString as D, createSlots as M } from "vue";
import E from "../../_virtual/_plugin-vue_export-helper.js";
const w = {
  name: "UluMenu",
  components: {
    UluIcon: I,
    UluTag: O
  },
  emits: [
    /**
     * Fired anytime a item is clicked
     */
    "item-click"
  ],
  props: {
    /**
     * Items Array of Objects for each link
     * [{
     *   title: String (title of link)
     *   icon: Icon definition passed to UluIcon
     *   tag: Tag appearing after link text (count/etc), pass props you want bound to tag
     *   tooltip: Add tooltip to menu item (pass options for tooltip), unless iconOnly than the title is presented in the tooltip
     *   href: Will result in <a>
     *   click: Will be called on click and result in <button>
     *   to: Will result in <a> and use vue-router router-link component
     * }]
     */
    items: Array,
    /**
     * Classes object to add class bindings to the different elements
     * - { list, item, link, linkActive, linkExactActive, linkIcon, linkText }
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Use icon only version of menu
     */
    iconOnly: Boolean,
    /**
     * Do not print menu items children recursively
     */
    noChildren: Boolean
  },
  methods: {
    handleItemClick(s, t) {
      t.click && t.click(s), this.$emit("item-click", { item: t, event: s });
    }
  }
};
function N(s, t, l, V, j, y) {
  const C = i("UluIcon"), g = i("UluTag"), U = i("UluMenu", !0), v = A("ulu-tooltip");
  return l.items?.length ? (n(), u("ul", {
    key: 0,
    class: a(l.classes.list)
  }, [
    (n(!0), u(S, null, h(l.items, (e, r) => (n(), u("li", {
      key: r,
      class: a([
        l.classes.item,
        e?.classes?.item,
        e.separatorBefore ? l.classes.itemSeparatorBefore : "",
        e.separatorAfter ? l.classes.itemSeparatorAfter : ""
      ])
    }, [
      T((n(), o(b(e.to || e.path ? "router-link" : e.click ? "button" : "a"), k({ ref_for: !0 }, {
        ...e.to || e.path ? {
          to: e.to || e.path,
          activeClass: l.classes.linkActive || null,
          exactActiveClass: l.classes.linkExactActive || null
        } : {},
        ...e.href ? { href: e.href || "#" } : {}
      }, {
        onClick: (_) => {
          y.handleItemClick(_, e);
        },
        class: [l.classes.link, e?.classes?.link],
        "aria-label": l.iconOnly ? e.title : null,
        id: e.id
      }), {
        default: m(() => [
          f(s.$slots, "default", {
            item: e,
            index: r
          }, () => [
            e.icon ? (n(), o(C, {
              key: 0,
              icon: e.icon,
              class: a([l.classes.linkIcon, e?.classes?.linkIcon])
            }, null, 8, ["icon", "class"])) : c("", !0),
            x("span", {
              class: a([l.classes.linkText, e?.classes?.linkText])
            }, D(e.title), 3),
            e.tag ? (n(), o(g, k({
              key: 1,
              ref_for: !0
            }, e.tag), null, 16)) : c("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "aria-label", "id"])), [
        [v, l.iconOnly ? e.title : e.tooltip || null]
      ]),
      f(s.$slots, "item", {
        item: e,
        index: r
      }),
      !l.noChildren && e?.children?.length ? (n(), o(U, {
        key: 0,
        iconOnly: l.iconOnly,
        classes: l.classes,
        items: e.children
      }, M({ _: 2 }, [
        h(s.$slots, (_, d) => ({
          name: d,
          fn: m((B) => [
            f(s.$slots, d, k({ ref_for: !0 }, B))
          ])
        }))
      ]), 1032, ["iconOnly", "classes", "items"])) : c("", !0)
    ], 2))), 128))
  ], 2)) : c("", !0);
}
const p = /* @__PURE__ */ E(w, [["render", N]]);
export {
  p as default
};
