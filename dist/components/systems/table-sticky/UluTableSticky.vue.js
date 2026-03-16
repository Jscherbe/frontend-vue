import { ref as i, computed as v, nextTick as ve, watch as Z, onMounted as Pe, onBeforeUnmount as We, createElementBlock as me, openBlock as E, normalizeClass as T, createElementVNode as m, createBlock as ee, createCommentVNode as we, createVNode as ye, normalizeStyle as te, createSlots as P, renderList as W, withCtx as z, renderSlot as b, normalizeProps as V, guardReactiveProps as B, withDirectives as ze, resolveDynamicComponent as Ve, createTextVNode as be, vShow as Be } from "vue";
import { isArrayOfObjects as oe } from "../../../utils/props.js";
import _ from "./UluTableStickyTable.vue.js";
import { debounce as _e } from "@ulu/utils/performance.js";
import { runAfterFramePaint as Oe } from "@ulu/utils/browser/performance.js";
import Xe from "lodash-es/cloneDeep.js";
const Ie = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, Fe = { class: "table-sticky__header-wrap" }, je = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, Ne = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, Me = {
  key: 2,
  class: "table-sticky__controls-inner"
}, De = ["disabled"], Ue = ["disabled"], tt = {
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
      validator: oe,
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
      validator: oe
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: oe
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
  setup(n, { emit: ge }) {
    const le = () => window.innerWidth;
    let se = le();
    const r = n, Ce = ge, O = i(null), a = i(null), $ = i(null), X = (e) => {
      let o = 0;
      return () => `${r.idPrefix}-${e}-${++o}`;
    }, ne = () => {
      const e = X("c"), o = Xe(r.columns), s = (t, l) => {
        t.id = e(), t.parent = l, t.width = "auto", t.boxWidth = null, t.sortApplied = !1, t.sortAscending = !1, t.sortFocused = !1;
        let c = [];
        l && (l.headers && l.headers.length ? c = [...l.headers] : c.push(l.id)), c.push(t.id), t.headers = c, t.columns ? t.columns.forEach((u) => s(u, t)) : !t.key && !t.value && !t.slot && console.warn("UluTableSticky: Missing 'key', 'value' or 'slot' in column configuration for", t);
      };
      return o.forEach((t) => s(t, null)), o;
    }, re = (e, o) => {
      const s = o.columns ? o.columns.reduce(re, 1) + 1 : 1;
      return e > s ? e : s;
    }, ae = (e) => {
      const o = X("hr"), s = e.reduce(re, 1), t = "auto", l = new Array(s).fill(null).map(() => ({
        height: t,
        boxHeight: null,
        columns: [],
        id: o()
      }));
      function c(u, h) {
        const y = h.columns;
        y && y.forEach((Q) => c(1 + u, Q)), h.rowspan = y ? 1 : s - u, h.colspan = y ? y.reduce((Q, Te) => Q + Te.colspan, 0) : 1, l[u].columns.push(h);
      }
      return e.forEach((u) => c(0, u)), l;
    }, L = (e) => {
      const o = X(e ? "fr" : "br"), s = e ? r.footerRows : r.rows;
      return s ? s.map((t) => ({
        height: null,
        boxHeight: null,
        data: t,
        id: o()
      })) : [];
    }, g = i(ne()), C = i(L()), k = i(L(!0)), d = i(ae(g.value)), R = i(!1), I = i("auto"), F = i(!1), S = i(!1), p = i(!1), x = i(!1), j = i(!1);
    let f = null;
    f = new ResizeObserver(() => xe());
    const ke = v(() => r.scrollControls && S.value), N = v(() => R.value && S.value), ie = v(() => N.value ? "1" : "0"), ce = v(() => {
      const e = g.value, o = [], s = (l) => {
        l.columns ? l.columns.forEach(s) : o.push(l);
      };
      e.forEach(s);
      let t = [];
      return o.forEach((l, c) => {
        const u = t.slice();
        l.getRowHeaders = (h) => u.map((y) => y(h)).join(" "), l.rowHeader && (l.getRowHeaderId = (h) => `${r.idPrefix}-rh-${h}-${c}`, t.push(l.getRowHeaderId));
      }), o;
    }), ue = v(() => d.value.reduce((e, o) => e + o.boxHeight, 0)), M = v(() => {
      const e = d.value[0], s = [Object.assign({}, e.columns[0], { rowspan: 1, colspan: 1 })];
      return [{
        ...e,
        columns: s,
        boxHeight: ue.value,
        height: `${ue.value}px`
      }];
    }), Re = v(() => [ce.value[0]]), Se = v(() => {
      const e = M.value[0].height;
      return { width: d.value[0].columns[0].width, height: e };
    }), pe = (e) => {
      const o = (s) => {
        s.forEach((t) => {
          e.key !== t.key && (t.sortApplied = !1, t.sortAscending = !1), t.columns && o(t.columns);
        });
      };
      o(g.value);
    }, A = (e) => {
      pe(e), e.sortApplied ? e.sortAscending = !e.sortAscending : e.sortApplied = !0, Ce("column-sort", e);
    }, xe = () => {
      j.value && H();
    }, Ee = (e) => {
      f && f.observe(e);
    }, $e = (e) => {
      f && f.unobserve(e);
    }, w = (e, o = null) => {
      if (!(typeof e > "u"))
        return typeof e == "function" ? e(o) : e;
    }, D = () => {
      if (a.value && O.value) {
        const e = a.value.scrollLeft;
        O.value.$el.style.transform = `translateX(-${e}px)`;
      }
    }, U = () => {
      a.value && (S.value = a.value.scrollWidth > a.value.clientWidth);
    }, q = () => {
      if (!S.value || !a.value) return;
      const e = a.value;
      p.value = e.scrollLeft > 0, x.value = e.clientWidth + e.scrollLeft < e.scrollWidth;
    }, de = _e(() => {
      const e = le();
      se !== e && (se = e, F.value ? (F.value = !1, K(), U(), D()) : (F.value = !0, he()));
    }, 500, !0), H = () => {
      he(), ve(() => {
        K(), U(), q(), D();
      });
    }, fe = () => {
      q(), D();
    }, Y = () => {
    }, Le = () => {
      a.value && a.value.addEventListener("scroll", fe), r.scrollContext && r.scrollContext.addEventListener("touchmove", Y), window.addEventListener("resize", de);
    }, Ae = () => {
      a.value && a.value.removeEventListener("scroll", fe), r.scrollContext && (r.scrollContext.removeEventListener("scroll", Y), r.scrollContext.removeEventListener("touchmove", Y)), window.removeEventListener("resize", de);
    }, he = () => {
      j.value = !1, R.value = !1;
      const e = (o) => {
        o.boxHeight = null, o.height = "auto";
      };
      I.value = "auto", d.value.forEach((o) => {
        e(o), o.columns.forEach((s) => {
          s.boxWidth = null, s.width = "auto";
        });
      }), r.firstColumnSticky && (C.value.forEach((o) => e(o)), k.value.forEach((o) => e(o)));
    }, G = () => {
      const e = a.value;
      if (!e) return;
      const o = e.scrollLeft, s = r.scrollControlAmount, t = o - s;
      e.scroll({
        left: t < 0 ? 0 : t,
        behavior: "smooth"
      });
    }, J = () => {
      const e = a.value;
      if (!e) return;
      const o = e.scrollWidth, s = e.scrollLeft, t = r.scrollControlAmount, l = s + t;
      e.scroll({
        left: l > o ? o : l,
        behavior: "smooth"
      });
    }, K = () => {
      const e = (t, l) => Math.ceil(t.getBoundingClientRect()[l]);
      $.value && $.value.$el && (I.value = `${e($.value.$el, "width")}px`);
      const o = (t) => document.getElementById(t.id), s = (t) => {
        const l = o(t);
        l && (t.boxHeight = e(l, "height"), t.height = `${t.boxHeight}px`);
      };
      d.value.forEach((t) => {
        s(t), t.columns.forEach((l) => {
          const c = o(l);
          c && (l.boxWidth = e(c, "width"), l.width = `${l.boxWidth}px`);
        });
      }), r.firstColumnSticky && (C.value.forEach((t) => s(t)), k.value.forEach((t) => s(t))), ve(() => {
        R.value = !0, Oe(() => {
          j.value = !0;
        });
      });
    }, He = () => {
      K();
    };
    return Z(() => r.columns, () => {
      g.value = ne(), d.value = ae(g.value), H();
    }, { deep: !0 }), Z(() => r.rows, () => {
      C.value = L(), H();
    }, { deep: !0 }), Z(() => r.footerRows, () => {
      k.value = L(!0), H();
    }, { deep: !0 }), Pe(() => {
      Le(), U(), q();
    }), We(() => {
      Ae(), f && (f.disconnect(), f = null);
    }), (e, o) => (E(), me("div", {
      class: T(["table-sticky", {
        "table-sticky--overflown-x": S.value,
        "table-sticky--can-scroll-right": x.value,
        "table-sticky--can-scroll-left": p.value
      }])
    }, [
      m("div", Ie, [
        m("div", Fe, [
          ye(_, {
            ref_key: "header",
            ref: O,
            class: "table-sticky__table table-sticky__table--header",
            classes: n.classes,
            caption: n.caption,
            resolveClasses: w,
            getColumnTitle: n.getColumnTitle,
            idPrefix: n.idPrefix,
            headerRows: d.value,
            style: te({
              opacity: R.value ? "1" : "0",
              pointerEvents: R.value ? "auto" : "none",
              width: I.value
            }),
            onColumnSorted: A
          }, P({ _: 2 }, [
            W(e.$slots, (s, t) => ({
              name: t,
              fn: z((l) => [
                b(e.$slots, t, V(B(l)))
              ])
            }))
          ]), 1032, ["classes", "caption", "getColumnTitle", "idPrefix", "headerRows", "style"])
        ])
      ]),
      m("div", je, [
        n.firstColumnSticky ? (E(), ee(_, {
          key: 0,
          class: "table-sticky__table table-sticky__table--first-column-header",
          classes: n.classes,
          caption: n.caption,
          resolveClasses: w,
          getColumnTitle: n.getColumnTitle,
          idPrefix: n.idPrefix,
          headerRows: M.value,
          style: te({
            opacity: ie.value,
            pointerEvents: N.value ? "auto" : "none"
          }),
          onColumnSorted: A
        }, P({ _: 2 }, [
          W(e.$slots, (s, t) => ({
            name: t,
            fn: z((l) => [
              b(e.$slots, t, V(B(l)))
            ])
          }))
        ]), 1032, ["classes", "caption", "getColumnTitle", "idPrefix", "headerRows", "style"])) : we("", !0)
      ]),
      m("div", Ne, [
        ze(m("div", {
          class: T(["table-sticky__controls", w(n.classes.controls)])
        }, [
          e.$slots.controls ? b(e.$slots, "controls", {
            key: 0,
            scrollLeft: G,
            scrollRight: J,
            canScrollLeft: p.value,
            canScrollRight: x.value
          }) : n.controlsComponent ? (E(), ee(Ve(n.controlsComponent), {
            key: 1,
            scrollLeft: G,
            scrollRight: J,
            canScrollLeft: p.value,
            canScrollRight: x.value
          }, null, 8, ["canScrollLeft", "canScrollRight"])) : (E(), me("div", Me, [
            m("button", {
              class: T(["table-sticky__control table-sticky__control--left", w(n.classes.controlButton)]),
              "aria-label": "Scroll Left",
              onClick: G,
              disabled: !p.value
            }, [
              b(e.$slots, "controlLeft", {}, () => [
                o[0] || (o[0] = be(" ← ", -1))
              ])
            ], 10, De),
            m("button", {
              class: T(["table-sticky__control table-sticky__control--right", w(n.classes.controlButton)]),
              "aria-label": "Scroll Right",
              onClick: J,
              disabled: !x.value
            }, [
              b(e.$slots, "controlRight", {}, () => [
                o[1] || (o[1] = be(" → ", -1))
              ])
            ], 10, Ue)
          ]))
        ], 2), [
          [Be, ke.value]
        ])
      ]),
      m("div", {
        ref_key: "display",
        ref: a,
        class: "table-sticky__display"
      }, [
        ye(_, {
          ref_key: "table",
          ref: $,
          class: "table-sticky__table table-sticky__table--actual",
          classes: n.classes,
          resolveClasses: w,
          isActual: "",
          headerRows: d.value,
          rows: C.value,
          footerRows: k.value,
          rowColumns: ce.value,
          caption: n.caption,
          idPrefix: n.idPrefix,
          getRowValue: n.getRowValue,
          getColumnTitle: n.getColumnTitle,
          onVnodeMounted: He,
          onActualHeaderRemoved: $e,
          onActualHeaderAdded: Ee,
          onColumnSorted: A
        }, P({ _: 2 }, [
          W(e.$slots, (s, t) => ({
            name: t,
            fn: z((l) => [
              b(e.$slots, t, V(B(l)))
            ])
          }))
        ]), 1032, ["classes", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle"])
      ], 512),
      n.firstColumnSticky ? (E(), ee(_, {
        key: 0,
        class: "table-sticky__table table-sticky__table--first-column",
        classes: n.classes,
        resolveClasses: w,
        caption: n.caption,
        headerRows: M.value,
        columnWidth: Se.value.width,
        rows: C.value,
        footerRows: k.value,
        rowColumns: Re.value,
        idPrefix: n.idPrefix,
        getRowValue: n.getRowValue,
        getColumnTitle: n.getColumnTitle,
        style: te({
          opacity: ie.value,
          pointerEvents: N.value ? "auto" : "none"
        }),
        onColumnSorted: A
      }, P({ _: 2 }, [
        W(e.$slots, (s, t) => ({
          name: t,
          fn: z((l) => [
            b(e.$slots, t, V(B(l)))
          ])
        }))
      ]), 1032, ["classes", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style"])) : we("", !0)
    ], 2));
  }
};
export {
  tt as default
};
