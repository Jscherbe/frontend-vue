import { createElementBlock as o, openBlock as r, normalizeClass as A, createCommentVNode as C, createElementVNode as w, toDisplayString as k, Fragment as c, renderList as y, normalizeStyle as F, createBlock as j, resolveDynamicComponent as z, withCtx as v, renderSlot as u, createTextVNode as $, createVNode as S, createSlots as W, normalizeProps as B, guardReactiveProps as V } from "vue";
import L from "./UluTableStickyRows.vue.js";
const P = ["aria-hidden"], D = {
  key: 0,
  class: "table-sticky__caption"
}, E = ["id"], q = ["id", "rowspan", "colspan", "data-child-columns", "aria-sort", "scope", "headers"], O = ["innerHTML"], U = {
  class: "table-sticky__sort-icon",
  "aria-hidden": "true"
}, G = { class: "table-sticky__sort-icon-inner" }, J = ["innerHTML"], K = { key: 1 }, Q = { key: 2 }, Z = {
  __name: "UluTableStickyTable",
  props: {
    resolveClasses: Function,
    classes: {
      type: Object,
      default: () => ({})
    },
    caption: String,
    idPrefix: String,
    headerRows: {
      type: Array,
      required: !0
    },
    rows: Array,
    footerRows: Array,
    rowColumns: Array,
    /**
     * Is the actual table not a clone for sticky headers
     */
    isActual: {
      type: Boolean
    },
    columnWidth: {
      type: String
    },
    /**
     * Optional user overridden value getter (for rows)
     * @param {Object} row The current row
     * @param {Object} column The current column in the row
     */
    getRowValue: {
      type: Function,
      default: ({ row: e, column: f }) => e[f.key]
    },
    /**
     * Optional user overridden value getter (for rows)
     * @param {Object} row The current row
     * @param {Object} column The current column in the row
     */
    getColumnTitle: {
      type: Function,
      default: ({ column: e }) => e.title
    }
  },
  emits: [
    "column-sorted",
    "actual-header-removed",
    "actual-header-added"
  ],
  setup(e, { emit: f }) {
    const H = f, g = e, b = {}, m = (s, a) => {
      g.isActual && (s.sortFocused = a);
    }, M = (s, a) => {
      if (!g.isActual || !a) return;
      const { id: i } = s, l = b[i];
      l && H("actual-header-removed", l), H("actual-header-added", a), b[i] = a;
    }, d = (s) => s || null, T = ({ row: s, column: a, rowIndex: i }) => {
      const l = a.value;
      return l ? l({ row: s.data, column: a, rowIndex: i }) : g.getRowValue({ row: s.data, column: a, rowIndex: i });
    }, R = (s, a) => {
      const i = s.headers.join(" "), l = s.getRowHeaders(a), t = l.length ? " " : "";
      return `${i}${t}${l}`;
    }, N = (s) => {
      const a = s.headers.filter((i) => i !== s.id);
      if (a.length)
        return a.join(" ");
    };
    return (s, a) => (r(), o("table", {
      class: A(e.resolveClasses(e.classes.table, { isActual: e.isActual })),
      "aria-hidden": e.isActual ? "false" : "true"
    }, [
      e.caption ? (r(), o("caption", D, k(e.caption), 1)) : C("", !0),
      w("thead", null, [
        (r(!0), o(c, null, y(e.headerRows, (i, l) => (r(), o("tr", {
          key: `hr-${l}`,
          id: d(e.isActual && i.id),
          class: A(e.resolveClasses(e.classes.rowHeader, { row: i, rowIndex: l, isActual: e.isActual })),
          style: F({
            height: i.height
          })
        }, [
          (r(!0), o(c, null, y(i.columns, (t, n) => (r(), o("th", {
            key: `hc-${n}`,
            id: d(e.isActual && t.id),
            rowspan: t.rowspan,
            colspan: t.colspan,
            "data-child-columns": t.columns && t.columns.length,
            class: A([
              {
                "sort-active": t.sortApplied,
                "sort-ascending": t.sortApplied && t.sortAscending,
                "sort-descending": t.sortApplied && !t.sortAscending
              },
              e.resolveClasses(t.classHeader, { column: t, index: n, isActual: e.isActual })
            ]),
            style: F({
              width: t.width
            }),
            "aria-sort": t.sort ? t.sortAscending ? "ascending" : "descending" : null,
            scope: d(e.isActual && (t.colspan > 1 ? "colgroup" : "col")),
            headers: d(e.isActual && N(t)),
            ref_for: !0,
            ref: (h) => M(t, h)
          }, [
            t.sortable ? (r(), j(z(e.isActual ? "button" : "div"), {
              key: 0,
              class: A(["table-sticky__sort-button", {
                "table-sticky__sort-button--focused": t.sortFocused
              }]),
              onClick: (h) => s.$emit("column-sorted", t),
              onFocus: (h) => m(t, !0),
              onBlur: (h) => m(t, !1),
              "aria-pressed": t.sortApplied ? "true" : "false"
            }, {
              default: v(() => [
                s.$slots[t.slotHeader] ? u(s.$slots, t.slotHeader, {
                  key: 0,
                  isActual: e.isActual,
                  column: t,
                  index: n
                }) : t.htmlTitle ? (r(), o("div", {
                  key: 1,
                  innerHTML: e.getColumnTitle({ column: t, index: n, isActual: e.isActual })
                }, null, 8, O)) : (r(), o(c, { key: 2 }, [
                  $(k(e.getColumnTitle({ column: t, index: n, isActual: e.isActual })), 1)
                ], 64)),
                w("span", U, [
                  w("span", G, [
                    u(s.$slots, "sortIcon", {}, () => [
                      a[0] || (a[0] = $("▼", -1))
                    ])
                  ])
                ])
              ]),
              _: 2
            }, 1064, ["class", "onClick", "onFocus", "onBlur", "aria-pressed"])) : (r(), o(c, { key: 1 }, [
              s.$slots[t.slotHeader] ? u(s.$slots, t.slotHeader, {
                key: 0,
                isActual: e.isActual,
                column: t,
                index: n
              }) : t.htmlTitle ? (r(), o("div", {
                key: 1,
                innerHTML: e.getColumnTitle({ column: t, index: n, isActual: e.isActual })
              }, null, 8, J)) : (r(), o(c, { key: 2 }, [
                $(k(e.getColumnTitle({ column: t, index: n, isActual: e.isActual })), 1)
              ], 64))
            ], 64))
          ], 14, q))), 128))
        ], 14, E))), 128))
      ]),
      e.rows ? (r(), o("tbody", K, [
        S(L, {
          rows: e.rows,
          rowColumns: e.rowColumns,
          optionalAttr: d,
          resolveClasses: e.resolveClasses,
          getCellHeaders: R,
          isActual: e.isActual,
          columnWidth: e.columnWidth,
          classes: e.classes,
          value: T
        }, W({ _: 2 }, [
          y(s.$slots, (i, l) => ({
            name: l,
            fn: v((t) => [
              u(s.$slots, l, B(V(t)))
            ])
          }))
        ]), 1032, ["rows", "rowColumns", "resolveClasses", "isActual", "columnWidth", "classes"])
      ])) : C("", !0),
      e.footerRows ? (r(), o("tfoot", Q, [
        S(L, {
          rows: e.footerRows,
          rowColumns: e.rowColumns,
          optionalAttr: d,
          resolveClasses: e.resolveClasses,
          getCellHeaders: R,
          isActual: e.isActual,
          columnWidth: e.columnWidth,
          classes: e.classes,
          value: T,
          foot: ""
        }, W({ _: 2 }, [
          y(s.$slots, (i, l) => ({
            name: l,
            fn: v((t) => [
              u(s.$slots, l, B(V(t)))
            ])
          }))
        ]), 1032, ["rows", "rowColumns", "resolveClasses", "isActual", "columnWidth", "classes"])
      ])) : C("", !0)
    ], 10, P));
  }
};
export {
  Z as default
};
