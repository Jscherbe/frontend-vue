import { createElementBlock as i, openBlock as r, normalizeClass as o, renderSlot as u, Fragment as y, createCommentVNode as C, createElementVNode as R, createTextVNode as g, toDisplayString as $, renderList as f, unref as h, createBlock as w, resolveDynamicComponent as L, withCtx as F } from "vue";
import { isArrayOfObjects as T } from "../../utils/props.js";
import { useTableData as j } from "../../composables/useTableData.js";
const S = ["id", "rowspan", "colspan", "scope", "headers"], B = ["innerHTML"], D = ["id"], N = ["innerHTML"], O = ["id"], E = ["innerHTML"], q = {
  __name: "UluTable",
  props: {
    /**
     * Array of column configurations to convert to list output
     * 
     * @property {Object} column A column config
     * @property {String|Boolean} column.title The title to output for the column if set to a falsey value nothing will print
     * @property {Array} column.columns Array of child columns
     * @property {String} column.key The key that should be usec to grab column's value from rows
     * @property {Function} column.value A function that returns the column's value used instead of key passed (row, column)
     * @property {String} column.slot Register custom slot name to use as a template for this column. Passing a slot with this name will link them. The slot are passed the ({row, column}). Note this will disable output of the column's value
     * @property {String} column.slotHeader Register custom slot name to use in the header
     * @property {String} column.classHeader Custom class(s) to be set to column <th>
     * @property {String} column.class Custom class(s) to be set to column's value <td>       
     * @property {String} column.html Use v-html output for value      
     * @property {String} column.rowHeader When this column is printed in the <tbody> it should be a header for the row. Note supports multiple row headers from left to right only. No rowspan support for rowHeaders. 
     */
    columns: {
      type: Array,
      validator: T
    },
    /**
     * Array of tables rows (tbody)
     * - Each row is an object who's value will be matched to columns
     */
    rows: {
      type: Array,
      validator: T
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: T
    },
    /**
     * Hidden caption for accessibility (or visible depending on styles). Can also be passed via slot.
     */
    caption: String,
    /**
     * Allows user to pass classes object to add custom classes to parts of the component
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Prefix used for id generation
     */
    idPrefix: {
      type: String,
      default: "table"
    },
    /**
     * Optional user overridden value getter (for rows)
     * @param {Object} row The current row
     * @param {Object} column The current column in the row
     */
    getRowValue: {
      type: Function,
      default: ({ row: l, column: k }) => l[k.key]
    },
    /**
     * Optional user overridden title getter (for headers)
     * @param {Object} column The current column
     */
    getColumnTitle: {
      type: Function,
      default: ({ column: l }) => l.title
    }
  },
  setup(l) {
    const k = l, {
      currentRows: M,
      currentFooterRows: b,
      headerRows: V,
      rowColumns: p
    } = j(k), c = (s, n = null) => {
      if (!(typeof s > "u"))
        return typeof s == "function" ? s(n) : s;
    }, A = (s) => {
      const n = s.headers.filter((a) => a !== s.id);
      if (n.length)
        return n.join(" ");
    }, v = (s, n) => {
      const a = s.headers.join(" "), t = s.getRowHeaders(n), e = t.length ? " " : "";
      return `${a}${e}${t}`;
    }, H = ({ row: s, column: n, rowIndex: a }) => {
      const t = n.value;
      return t ? t({ row: s.data, column: n, rowIndex: a }) : k.getRowValue({ row: s.data, column: n, rowIndex: a });
    };
    return (s, n) => (r(), i("table", {
      class: o(l.classes?.table)
    }, [
      l.columns && l.rows ? (r(), i(y, { key: 0 }, [
        l.caption || s.$slots.caption ? (r(), i("caption", {
          key: 0,
          class: o(l.classes?.caption)
        }, [
          u(s.$slots, "caption", {}, () => [
            g($(l.caption), 1)
          ])
        ], 2)) : C("", !0),
        R("thead", {
          class: o(l.classes?.thead)
        }, [
          (r(!0), i(y, null, f(h(V), (a, t) => (r(), i("tr", {
            key: `hr-${t}`,
            class: o(c(l.classes?.rowHeader, { row: a, rowIndex: t }))
          }, [
            (r(!0), i(y, null, f(a.columns, (e, d) => (r(), i("th", {
              key: `hc-${d}`,
              id: e.id,
              rowspan: e.rowspan,
              colspan: e.colspan,
              class: o(c(e.classHeader, { column: e, index: d })),
              scope: e.colspan > 1 ? "colgroup" : "col",
              headers: A(e)
            }, [
              s.$slots[e.slotHeader] ? u(s.$slots, e.slotHeader, {
                key: 0,
                column: e,
                index: d
              }) : e.htmlTitle ? (r(), i("div", {
                key: 1,
                innerHTML: l.getColumnTitle({ column: e, index: d })
              }, null, 8, B)) : (r(), i(y, { key: 2 }, [
                g($(l.getColumnTitle({ column: e, index: d })), 1)
              ], 64))
            ], 10, S))), 128))
          ], 2))), 128))
        ], 2),
        R("tbody", {
          class: o(l.classes?.tbody)
        }, [
          (r(!0), i(y, null, f(h(M), (a, t) => (r(), i("tr", {
            key: `br-${t}`,
            id: a.id,
            class: o(c(l.classes?.row, { row: a.data, rowIndex: t }))
          }, [
            (r(!0), i(y, null, f(h(p), (e, d) => (r(), w(L(e.rowHeader ? "th" : "td"), {
              key: `bc-${d}`,
              id: e.rowHeader ? e.getRowHeaderId(t) : void 0,
              scope: e.rowHeader ? "row" : void 0,
              headers: v(e, t),
              class: o(c(e.class, { column: e, index: d, row: a, rowIndex: t }))
            }, {
              default: F(() => [
                s.$slots[e.slot] ? u(s.$slots, e.slot, {
                  key: 0,
                  row: a.data,
                  column: e,
                  rowIndex: t,
                  index: d
                }) : e.html ? (r(), i("div", {
                  key: 1,
                  innerHTML: H({ row: a, column: e, rowIndex: t })
                }, null, 8, N)) : (r(), i(y, { key: 2 }, [
                  g($(H({ row: a, column: e, rowIndex: t })), 1)
                ], 64))
              ]),
              _: 2
            }, 1032, ["id", "scope", "headers", "class"]))), 128))
          ], 10, D))), 128))
        ], 2),
        h(b).length ? (r(), i("tfoot", {
          key: 1,
          class: o(l.classes?.tfoot)
        }, [
          (r(!0), i(y, null, f(h(b), (a, t) => (r(), i("tr", {
            key: `fr-${t}`,
            id: a.id,
            class: o(c(l.classes?.rowFooter, { row: a.data, rowIndex: t }))
          }, [
            (r(!0), i(y, null, f(h(p), (e, d) => (r(), w(L(e.rowHeader ? "th" : "td"), {
              key: `fc-${d}`,
              id: e.rowHeader ? e.getRowHeaderId(t) : void 0,
              scope: e.rowHeader ? "row" : void 0,
              headers: v(e, t),
              class: o(c(e.class, { column: e, index: d, row: a, rowIndex: t }))
            }, {
              default: F(() => [
                s.$slots[e.slot] ? u(s.$slots, e.slot, {
                  key: 0,
                  row: a.data,
                  column: e,
                  rowIndex: t,
                  index: d
                }) : e.html ? (r(), i("div", {
                  key: 1,
                  innerHTML: H({ row: a, column: e, rowIndex: t })
                }, null, 8, E)) : (r(), i(y, { key: 2 }, [
                  g($(H({ row: a, column: e, rowIndex: t })), 1)
                ], 64))
              ]),
              _: 2
            }, 1032, ["id", "scope", "headers", "class"]))), 128))
          ], 10, O))), 128))
        ], 2)) : C("", !0)
      ], 64)) : u(s.$slots, "default", { key: 1 })
    ], 2));
  }
};
export {
  q as default
};
