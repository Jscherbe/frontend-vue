import { createElementBlock as i, openBlock as s, Fragment as c, renderList as u, normalizeStyle as r, normalizeClass as d, createBlock as A, resolveDynamicComponent as f, withCtx as h, renderSlot as y, createTextVNode as C, toDisplayString as k } from "vue";
const g = ["id"], v = ["innerHTML"], F = {
  __name: "UluTableStickyRows",
  props: {
    rows: Array,
    rowColumns: Array,
    columnWidth: String,
    optionalAttr: Function,
    resolveClasses: Function,
    getCellHeaders: Function,
    value: Function,
    isActual: Boolean,
    classes: Object,
    foot: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    return (n, H) => (s(!0), i(c, null, u(t.rows, (l, a) => (s(), i("tr", {
      key: `br-${a}`,
      id: t.optionalAttr(t.isActual && l.id),
      class: d(t.resolveClasses(t.classes.row, { row: l.data, rowIndex: a, isActual: t.isActual, foot: t.foot })),
      style: r({
        height: l.height
      })
    }, [
      (s(!0), i(c, null, u(t.rowColumns, (e, o) => (s(), A(f(e.rowHeader ? "th" : "td"), {
        id: t.optionalAttr(t.isActual && e.rowHeader && e.getRowHeaderId(a)),
        scope: t.optionalAttr(t.isActual && e.rowHeader && "row"),
        key: `bc-${o}`,
        headers: t.optionalAttr(t.isActual && t.getCellHeaders(e, a)),
        class: d(t.resolveClasses(e.class, { column: e, index: o, isActual: t.isActual, row: l, rowIndex: a, foot: t.foot })),
        style: r({
          width: t.columnWidth
        })
      }, {
        default: h(() => [
          n.$slots[e.slot] ? y(n.$slots, e.slot, {
            key: 0,
            row: l.data,
            column: e,
            rowIndex: a,
            index: o,
            foot: t.foot,
            isActual: t.isActual
          }) : e.html ? (s(), i("div", {
            key: 1,
            innerHTML: t.value({ row: l, column: e, rowIndex: a, isActual: t.isActual, foot: t.foot })
          }, null, 8, v)) : (s(), i(c, { key: 2 }, [
            C(k(t.value({ row: l, column: e, rowIndex: a, isActual: t.isActual, foot: t.foot })), 1)
          ], 64))
        ]),
        _: 2
      }, 1032, ["id", "scope", "headers", "class", "style"]))), 128))
    ], 14, g))), 128));
  }
};
export {
  F as default
};
