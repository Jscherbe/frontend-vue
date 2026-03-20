import { resolveComponent as O, resolveDirective as $, createElementBlock as i, createCommentVNode as c, openBlock as t, normalizeClass as a, Fragment as w, renderList as k, withDirectives as S, renderSlot as u, createBlock as o, withCtx as h, createElementVNode as x, toDisplayString as b, mergeProps as m, createSlots as D } from "vue";
import E from "../utils/UluAction.vue.js";
import I from "../elements/UluIcon.vue.js";
import M from "../elements/UluTag.vue.js";
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
  setup(l, { emit: y }) {
    const C = y, g = (s, n) => {
      n.click && n.click(s), C("item-click", { item: n, event: s });
    };
    return (s, n) => {
      const v = O("UluMenu", !0), A = $("ulu-tooltip");
      return l.items?.length ? (t(), i("ul", {
        key: 0,
        class: a(l.classes.list)
      }, [
        (t(!0), i(w, null, k(l.items, (e, r) => (t(), i("li", {
          key: r,
          class: a([
            l.classes.item,
            e?.classes?.item,
            e.separatorBefore ? l.classes.itemSeparatorBefore : "",
            e.separatorAfter ? l.classes.itemSeparatorAfter : ""
          ])
        }, [
          S((t(), o(E, {
            to: e.to,
            path: e.path,
            href: e.href,
            target: e.target,
            download: e.download,
            element: e.element,
            activeClass: l.classes.linkActive,
            exactActiveClass: l.classes.linkExactActive,
            onClick: (f) => {
              g(f, e);
            },
            class: a([l.classes.link, e?.classes?.link]),
            "aria-label": l.iconOnly ? e.title : null,
            id: e.id
          }, {
            default: h(() => [
              u(s.$slots, "default", {
                item: e,
                index: r
              }, () => [
                e.icon ? (t(), o(I, {
                  key: 0,
                  icon: e.icon,
                  class: a([l.classes.linkIcon, e?.classes?.linkIcon])
                }, null, 8, ["icon", "class"])) : c("", !0),
                x("span", {
                  class: a([l.classes.linkText, e?.classes?.linkText])
                }, b(e.title), 3),
                e.tag ? (t(), o(M, m({
                  key: 1,
                  ref_for: !0
                }, e.tag), null, 16)) : c("", !0)
              ])
            ]),
            _: 2
          }, 1032, ["to", "path", "href", "target", "download", "element", "activeClass", "exactActiveClass", "onClick", "class", "aria-label", "id"])), [
            [A, l.iconOnly ? e.title : e.tooltip || null]
          ]),
          u(s.$slots, "item", {
            item: e,
            index: r
          }),
          !l.noChildren && e?.children?.length ? (t(), o(v, {
            key: 0,
            iconOnly: l.iconOnly,
            classes: l.classes,
            items: e.children
          }, D({ _: 2 }, [
            k(s.$slots, (f, d) => ({
              name: d,
              fn: h((B) => [
                u(s.$slots, d, m({ ref_for: !0 }, B))
              ])
            }))
          ]), 1032, ["iconOnly", "classes", "items"])) : c("", !0)
        ], 2))), 128))
      ], 2)) : c("", !0);
    };
  }
};
export {
  j as default
};
