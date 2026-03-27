import { ref as c, computed as v, onMounted as Re, onBeforeUnmount as Se, createElementBlock as se, openBlock as C, normalizeClass as p, createElementVNode as d, createBlock as U, createCommentVNode as ne, createVNode as ae, normalizeStyle as I, unref as h, createSlots as $, renderList as T, withCtx as A, renderSlot as m, normalizeProps as z, guardReactiveProps as W, withDirectives as xe, resolveDynamicComponent as Ee, createTextVNode as re, vShow as Le, nextTick as ie } from "vue";
import { isArrayOfObjects as Y } from "../../../utils/props.js";
import P from "./UluTableStickyTable.vue.js";
import { debounce as pe } from "@ulu/utils/performance.js";
import { runAfterFramePaint as $e } from "@ulu/utils/browser/performance.js";
import { useTableData as Te } from "../../../composables/useTableData.js";
const Ae = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, ze = { class: "table-sticky__header-wrap" }, We = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, Pe = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, He = {
  key: 2,
  class: "table-sticky__controls-inner"
}, Ve = ["disabled"], Be = ["disabled"], qe = {
  __name: "UluTableSticky",
  props: {
    /**
     * By default you cannot have interactive items in the cloned sticky header and first column (if set)
     * this disables that feature. It was set up that way for accessibility
     */
    allowClickClones: Boolean,
    /**
     * Allows user to pass classes object to add custom classes to parts of the component
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Allow user to pass components
     * - Passed the same values as if using a slot
     * - 
     */
    controlsComponent: Object,
    /**
     * Allows user to pass callback to get the row's value
     */
    getRowValue: Function,
    getColumnTitle: Function,
    /**
     * Hidden caption for accessibility
     */
    caption: {
      type: String,
      required: !0
    },
    /**
     * Array of column configurations to convert to list output
     * 
     * @property {Object} column A column config
     * @property {String|Boolean} column.title The title to output for the column if set to a falsey value nothing will print
     * @property {Array} column.columns Array of child columns
     * @property {String} column.key The key that should be usec to grab column's value from rows
     * @property {Function} column.value A function that returns the column's value used instead of key passed (row, column)
     * @property {String} column.slot Register custom slot name to use as a template for this column. Passing a slot with this name will link them. The slot are passed the ({row, column}). Note this will disable output of the column's value
     * @property {String} column.component Pass a component to use for this columns values (<td>)
     * @property {String} column.componentHeader Pass a component to use for this columns header (<th>)
     * @property {String} column.slotHeader Register custom slot name to use in the header
     * @property {String} column.classHeader Custom class(s) to be set to column <th>
     * @property {String} column.class Custom class(s) to be set to column's value <td>       
     * @property {String} column.html Use v-html output for value      
     * @property {String} column.rowHeader When this column is printed in the <tbody> it should be a header for the row. Note supports multiple row headers from left to right only. No rowspan support for rowHeaders. 
     */
    columns: {
      type: Array,
      validator: Y,
      required: !0
    },
    /**
     * Whether the first column of the table should be sticky
     * - Requires that the table's first column header is nested
     */
    firstColumnSticky: Boolean,
    /**
     * Prefixed used for id generation
     */
    idPrefix: {
      type: String,
      default: "DT"
    },
    /**
     * Array of tables rows (tbody)
     * - Each row is an object who's value will matched to columns
     */
    rows: {
      type: Array,
      validator: Y
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: Y
    },
    /**
     * Enables the visibility of the scroll controls
     * - Scroll controls shift the tables x-axis when the table has overflow-x
     * - Can be templated manually using slot named "controlsButtons", slot needs to create layout and call methods 
     *   + scope = { scrollLeft, scrollRight, canScrollLeft, canScrollRight }
     * - Scroll controls are transformed with the header (move down as the user scrolls)
     */
    scrollControls: Boolean,
    /**
     * Scrollable context DOM Element, if the sticky element is within another
     * scrolling parent use this to change the scroll activation handler to use a custom
     * scrollable parent element
     */
    scrollContext: {
      default: () => window
    },
    /**
     * Amount to scroll when user uses scroll controls (pixels)
     */
    scrollControlAmount: {
      type: Number,
      default: 100
    }
  },
  emits: ["column-sort"],
  setup(o, { emit: ce }) {
    const G = () => window.innerWidth;
    let J = G();
    const r = o, ue = ce, H = c(null), a = c(null), k = c(null), K = () => {
      le(), ie(() => {
        q(), F(), N(), X();
      });
    }, {
      currentColumns: de,
      currentRows: R,
      currentFooterRows: S,
      headerRows: i,
      rowColumns: x
    } = Te(r, K), y = c(!1), V = c("auto"), B = c(!1), b = c(!1), w = c(!1), g = c(!1), _ = c(!1);
    let u = null;
    u = new ResizeObserver(() => ye());
    const fe = v(() => r.scrollControls && b.value), O = v(() => y.value && b.value), Q = v(() => O.value ? "1" : "0"), Z = v(() => i.value ? i.value.reduce((e, l) => e + l.boxHeight, 0) : 0), E = v(() => {
      if (!i.value?.length) return [];
      const e = i.value[0];
      if (!e?.columns?.length) return [];
      const n = [Object.assign({}, e.columns[0], { rowspan: 1, colspan: 1 })];
      return [{
        ...e,
        columns: n,
        boxHeight: Z.value,
        height: `${Z.value}px`
      }];
    }), ve = v(() => !x.value || !x.value.length ? [] : [x.value[0]]), he = v(() => {
      if (!E.value?.length || !i.value?.[0]?.columns?.length)
        return { width: "auto", height: "auto" };
      const e = E.value[0].height;
      return { width: i.value[0].columns[0].width, height: e };
    }), me = (e) => {
      const l = (n) => {
        n.forEach((t) => {
          e.key !== t.key && (t.sortApplied = !1, t.sortAscending = !1), t.columns && l(t.columns);
        });
      };
      l(de.value);
    }, L = (e) => {
      me(e), e.sortApplied ? e.sortAscending = !e.sortAscending : e.sortApplied = !0, ue("column-sort", e);
    }, ye = () => {
      _.value && K();
    }, be = (e) => {
      u && u.observe(e);
    }, we = (e) => {
      u && u.unobserve(e);
    }, f = (e, l = null) => {
      if (!(typeof e > "u"))
        return typeof e == "function" ? e(l) : e;
    }, X = () => {
      if (a.value && H.value) {
        const e = a.value.scrollLeft;
        H.value.$el.style.transform = `translateX(-${e}px)`;
      }
    }, F = () => {
      a.value && (b.value = a.value.scrollWidth > a.value.clientWidth);
    }, N = () => {
      if (!b.value || !a.value) return;
      const e = a.value;
      w.value = e.scrollLeft > 0, g.value = e.clientWidth + e.scrollLeft < e.scrollWidth;
    }, ee = pe(() => {
      const e = G();
      J !== e && (J = e, B.value ? (B.value = !1, q(), F(), X()) : (B.value = !0, le()));
    }, 500, !0), te = () => {
      N(), X();
    }, j = () => {
    }, ge = () => {
      a.value && a.value.addEventListener("scroll", te), r.scrollContext && r.scrollContext.addEventListener("touchmove", j), window.addEventListener("resize", ee);
    }, Ce = () => {
      a.value && a.value.removeEventListener("scroll", te), r.scrollContext && (r.scrollContext.removeEventListener("scroll", j), r.scrollContext.removeEventListener("touchmove", j)), window.removeEventListener("resize", ee);
    }, le = () => {
      _.value = !1, y.value = !1;
      const e = (l) => {
        l.boxHeight = null, l.height = "auto";
      };
      V.value = "auto", i.value.forEach((l) => {
        e(l), l.columns.forEach((n) => {
          n.boxWidth = null, n.width = "auto";
        });
      }), r.firstColumnSticky && (R.value.forEach((l) => e(l)), S.value.forEach((l) => e(l)));
    }, D = () => {
      const e = a.value;
      if (!e) return;
      const l = e.scrollLeft, n = r.scrollControlAmount, t = l - n;
      e.scroll({
        left: t < 0 ? 0 : t,
        behavior: "smooth"
      });
    }, M = () => {
      const e = a.value;
      if (!e) return;
      const l = e.scrollWidth, n = e.scrollLeft, t = r.scrollControlAmount, s = n + t;
      e.scroll({
        left: s > l ? l : s,
        behavior: "smooth"
      });
    }, q = () => {
      const e = (t, s) => Math.ceil(t.getBoundingClientRect()[s]);
      k.value && k.value.$el && (V.value = `${e(k.value.$el, "width")}px`);
      const l = (t) => document.getElementById(t.id), n = (t) => {
        const s = l(t);
        s && (t.boxHeight = e(s, "height"), t.height = `${t.boxHeight}px`);
      };
      i.value.forEach((t) => {
        n(t), t.columns.forEach((s) => {
          const oe = l(s);
          oe && (s.boxWidth = e(oe, "width"), s.width = `${s.boxWidth}px`);
        });
      }), r.firstColumnSticky && (R.value.forEach((t) => n(t)), S.value.forEach((t) => n(t))), ie(() => {
        y.value = !0, $e(() => {
          _.value = !0;
        });
      });
    }, ke = () => {
      q();
    };
    return Re(() => {
      ge(), F(), N();
    }), Se(() => {
      Ce(), u && (u.disconnect(), u = null);
    }), (e, l) => (C(), se("div", {
      class: p(["table-sticky", {
        "table-sticky--overflown-x": b.value,
        "table-sticky--can-scroll-right": g.value,
        "table-sticky--can-scroll-left": w.value
      }])
    }, [
      d("div", Ae, [
        d("div", ze, [
          ae(P, {
            ref_key: "header",
            ref: H,
            class: "table-sticky__table table-sticky__table--header",
            classes: o.classes,
            caption: o.caption,
            resolveClasses: f,
            getColumnTitle: o.getColumnTitle,
            idPrefix: o.idPrefix,
            headerRows: h(i),
            style: I({
              opacity: y.value ? "1" : "0",
              pointerEvents: y.value ? "auto" : "none",
              width: V.value
            }),
            onColumnSorted: L
          }, $({ _: 2 }, [
            T(e.$slots, (n, t) => ({
              name: t,
              fn: A((s) => [
                m(e.$slots, t, z(W(s)))
              ])
            }))
          ]), 1032, ["classes", "caption", "getColumnTitle", "idPrefix", "headerRows", "style"])
        ])
      ]),
      d("div", We, [
        o.firstColumnSticky ? (C(), U(P, {
          key: 0,
          class: "table-sticky__table table-sticky__table--first-column-header",
          classes: o.classes,
          caption: o.caption,
          resolveClasses: f,
          getColumnTitle: o.getColumnTitle,
          idPrefix: o.idPrefix,
          headerRows: E.value,
          style: I({
            opacity: Q.value,
            pointerEvents: O.value ? "auto" : "none"
          }),
          onColumnSorted: L
        }, $({ _: 2 }, [
          T(e.$slots, (n, t) => ({
            name: t,
            fn: A((s) => [
              m(e.$slots, t, z(W(s)))
            ])
          }))
        ]), 1032, ["classes", "caption", "getColumnTitle", "idPrefix", "headerRows", "style"])) : ne("", !0)
      ]),
      d("div", Pe, [
        xe(d("div", {
          class: p(["table-sticky__controls", f(o.classes.controls)])
        }, [
          e.$slots.controls ? m(e.$slots, "controls", {
            key: 0,
            scrollLeft: D,
            scrollRight: M,
            canScrollLeft: w.value,
            canScrollRight: g.value
          }) : o.controlsComponent ? (C(), U(Ee(o.controlsComponent), {
            key: 1,
            scrollLeft: D,
            scrollRight: M,
            canScrollLeft: w.value,
            canScrollRight: g.value
          }, null, 8, ["canScrollLeft", "canScrollRight"])) : (C(), se("div", He, [
            d("button", {
              class: p(["table-sticky__control table-sticky__control--left", f(o.classes.controlButton)]),
              "aria-label": "Scroll Left",
              onClick: D,
              disabled: !w.value
            }, [
              m(e.$slots, "controlLeft", {}, () => [
                l[0] || (l[0] = re(" ← ", -1))
              ])
            ], 10, Ve),
            d("button", {
              class: p(["table-sticky__control table-sticky__control--right", f(o.classes.controlButton)]),
              "aria-label": "Scroll Right",
              onClick: M,
              disabled: !g.value
            }, [
              m(e.$slots, "controlRight", {}, () => [
                l[1] || (l[1] = re(" → ", -1))
              ])
            ], 10, Be)
          ]))
        ], 2), [
          [Le, fe.value]
        ])
      ]),
      d("div", {
        ref_key: "display",
        ref: a,
        class: "table-sticky__display"
      }, [
        ae(P, {
          ref_key: "table",
          ref: k,
          class: "table-sticky__table table-sticky__table--actual",
          classes: o.classes,
          resolveClasses: f,
          isActual: "",
          headerRows: h(i),
          rows: h(R),
          footerRows: h(S),
          rowColumns: h(x),
          caption: o.caption,
          idPrefix: o.idPrefix,
          getRowValue: o.getRowValue,
          getColumnTitle: o.getColumnTitle,
          onVnodeMounted: ke,
          onActualHeaderRemoved: we,
          onActualHeaderAdded: be,
          onColumnSorted: L
        }, $({ _: 2 }, [
          T(e.$slots, (n, t) => ({
            name: t,
            fn: A((s) => [
              m(e.$slots, t, z(W(s)))
            ])
          }))
        ]), 1032, ["classes", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle"])
      ], 512),
      o.firstColumnSticky ? (C(), U(P, {
        key: 0,
        class: "table-sticky__table table-sticky__table--first-column",
        classes: o.classes,
        resolveClasses: f,
        caption: o.caption,
        headerRows: E.value,
        columnWidth: he.value.width,
        rows: h(R),
        footerRows: h(S),
        rowColumns: ve.value,
        idPrefix: o.idPrefix,
        getRowValue: o.getRowValue,
        getColumnTitle: o.getColumnTitle,
        style: I({
          opacity: Q.value,
          pointerEvents: O.value ? "auto" : "none"
        }),
        onColumnSorted: L
      }, $({ _: 2 }, [
        T(e.$slots, (n, t) => ({
          name: t,
          fn: A((s) => [
            m(e.$slots, t, z(W(s)))
          ])
        }))
      ]), 1032, ["classes", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style"])) : ne("", !0)
    ], 2));
  }
};
export {
  qe as default
};
