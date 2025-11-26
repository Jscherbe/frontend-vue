import C from "../elements/UluIcon.vue.js";
import g from "../elements/UluTag.vue.js";
import { resolveComponent as r, resolveDirective as U, createElementBlock as i, createCommentVNode as t, openBlock as n, normalizeClass as a, Fragment as v, renderList as x, withDirectives as B, createBlock as o, resolveDynamicComponent as I, mergeProps as f, withCtx as O, renderSlot as A, createElementVNode as T, toDisplayString as b } from "vue";
import D from "../../_virtual/_plugin-vue_export-helper.js";
const M = {
  name: "UluMenu",
  components: {
    UluIcon: C,
    UluTag: g
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
    handleItemClick(s, c) {
      c.click && c.click(s), this.$emit("item-click", { item: c, event: s });
    }
  }
};
function S(s, c, e, E, w, k) {
  const _ = r("UluIcon"), d = r("UluTag"), h = r("UluMenu", !0), y = U("ulu-tooltip");
  return e.items?.length ? (n(), i("ul", {
    key: 0,
    class: a(e.classes.list)
  }, [
    (n(!0), i(v, null, x(e.items, (l, u) => (n(), i("li", {
      key: u,
      class: a([
        e.classes.item,
        l?.classes?.item,
        l.separatorBefore ? e.classes.itemSeparatorBefore : "",
        l.separatorAfter ? e.classes.itemSeparatorAfter : ""
      ])
    }, [
      B((n(), o(I(l.to || l.path ? "router-link" : l.click ? "button" : "a"), f({ ref_for: !0 }, {
        ...l.to || l.path ? {
          to: l.to || l.path,
          activeClass: e.classes.linkActive || null,
          exactActiveClass: e.classes.linkExactActive || null
        } : {},
        ...l.href ? { href: l.href || "#" } : {}
      }, {
        onClick: (m) => {
          k.handleItemClick(m, l);
        },
        class: [e.classes.link, l?.classes?.link],
        "aria-label": e.iconOnly ? l.title : null,
        id: l.id
      }), {
        default: O(() => [
          A(s.$slots, "default", {
            item: l,
            index: u
          }, () => [
            l.icon ? (n(), o(_, {
              key: 0,
              icon: l.icon,
              class: a([e.classes.linkIcon, l?.classes?.linkIcon])
            }, null, 8, ["icon", "class"])) : t("", !0),
            T("span", {
              class: a([e.classes.linkText, l?.classes?.linkText])
            }, b(l.title), 3),
            l.tag ? (n(), o(d, f({
              key: 1,
              ref_for: !0
            }, l.tag), null, 16)) : t("", !0)
          ])
        ]),
        _: 2
      }, 1040, ["onClick", "class", "aria-label", "id"])), [
        [y, e.iconOnly ? l.title : l.tooltip || null]
      ]),
      !e.noChildren && l?.children?.length ? (n(), o(h, {
        key: 0,
        iconOnly: e.iconOnly,
        classes: e.classes,
        items: l.children
      }, null, 8, ["iconOnly", "classes", "items"])) : t("", !0)
    ], 2))), 128))
  ], 2)) : t("", !0);
}
const F = /* @__PURE__ */ D(M, [["render", S]]);
export {
  F as default
};
