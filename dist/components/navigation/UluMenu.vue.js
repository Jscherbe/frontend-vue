import { resolveComponent as O, resolveDirective as $, createElementBlock as r, createCommentVNode as n, openBlock as t, normalizeClass as a, Fragment as S, renderList as d, withDirectives as x, renderSlot as u, createBlock as i, mergeProps as f, withCtx as y, createElementVNode as b, toDisplayString as D, createSlots as E } from "vue";
import I from "../utils/UluAction.vue.js";
import M from "../elements/UluIcon.vue.js";
import U from "../elements/UluTag.vue.js";
const j = {
  __name: "UluMenu",
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
  emits: [
    /**
     * Fired anytime a item is clicked
     */
    "item-click"
  ],
  setup(l, { emit: C }) {
    const h = C, v = (s, c) => {
      c.click && c.click(s), h("item-click", { item: c, event: s });
    };
    return (s, c) => {
      const g = O("UluMenu", !0), A = $("ulu-tooltip");
      return l.items?.length ? (t(), r("ul", {
        key: 0,
        class: a(l.classes.list)
      }, [
        (t(!0), r(S, null, d(l.items, (e, o) => (t(), r("li", {
          key: o,
          class: a([
            l.classes.item,
            e?.classes?.item,
            e.separatorBefore ? l.classes.itemSeparatorBefore : "",
            e.separatorAfter ? l.classes.itemSeparatorAfter : ""
          ])
        }, [
          x((t(), i(I, f({ ref_for: !0 }, e, {
            activeClass: l.classes.linkActive,
            exactActiveClass: l.classes.linkExactActive,
            onClick: (k) => {
              v(k, e);
            },
            class: [l.classes.link, e?.classes?.link],
            "aria-label": l.iconOnly ? e.title : null,
            id: e.id
          }), {
            default: y(() => [
              u(s.$slots, "default", {
                item: e,
                index: o
              }, () => [
                e.icon ? (t(), i(M, {
                  key: 0,
                  icon: e.icon,
                  class: a([l.classes.linkIcon, e?.classes?.linkIcon])
                }, null, 8, ["icon", "class"])) : n("", !0),
                b("span", {
                  class: a([l.classes.linkText, e?.classes?.linkText])
                }, D(e.title), 3),
                e.tag ? (t(), i(U, f({
                  key: 1,
                  ref_for: !0
                }, e.tag), null, 16)) : n("", !0)
              ])
            ]),
            _: 2
          }, 1040, ["activeClass", "exactActiveClass", "onClick", "class", "aria-label", "id"])), [
            [A, l.iconOnly ? e.title : e.tooltip || null]
          ]),
          u(s.$slots, "item", {
            item: e,
            index: o
          }),
          !l.noChildren && e?.children?.length ? (t(), i(g, {
            key: 0,
            iconOnly: l.iconOnly,
            classes: l.classes,
            items: e.children
          }, E({ _: 2 }, [
            d(s.$slots, (k, m) => ({
              name: m,
              fn: y((B) => [
                u(s.$slots, m, f({ ref_for: !0 }, B))
              ])
            }))
          ]), 1032, ["iconOnly", "classes", "items"])) : n("", !0)
        ], 2))), 128))
      ], 2)) : n("", !0);
    };
  }
};
export {
  j as default
};
