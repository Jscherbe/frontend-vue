import E from "./UluTableStickyTable.vue.js";
import { debounce as p } from "@ulu/utils/performance.js";
import { runAfterFramePaint as A } from "@ulu/utils/browser/performance.js";
import W from "lodash-es/cloneDeep.js";
import { resolveComponent as X, createElementBlock as v, openBlock as u, normalizeClass as f, createElementVNode as h, createBlock as R, createCommentVNode as k, createVNode as _, normalizeStyle as g, createSlots as w, renderList as m, withCtx as y, renderSlot as d, normalizeProps as b, guardReactiveProps as C, withDirectives as P, resolveDynamicComponent as O, createTextVNode as z, vShow as V } from "vue";
import F from "../../../_virtual/_plugin-vue_export-helper.js";
const S = (e) => e.every((l) => typeof l == "object"), L = !0, H = () => window.innerWidth;
let x = H();
const B = {
  name: "UluTableSticky",
  components: {
    UluTableStickyTable: E
  },
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
      required: L
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
      validator: S,
      required: L
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
      validator: S
      // required
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: S
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
     * 
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
  data() {
    const e = this.createColumns();
    return {
      currentColumns: e,
      currentRows: this.createRows(),
      currentFooterRows: this.createRows(!0),
      headerRows: this.createHeaderRows(e),
      sizesCalculated: !1,
      tableWidth: "auto",
      resizeHandler: p(this.onResize.bind(this), 500, !0),
      resizing: !1,
      overflownX: !1,
      canScrollLeft: !1,
      canScrollRight: !1,
      displayY: null,
      sizesPainted: !1,
      columnResizeObserver: new ResizeObserver(() => this.onColumnResize())
    };
  },
  watch: {
    columns: {
      handler() {
        this.currentColumns = this.createColumns(), this.headerRows = this.createHeaderRows(this.currentColumns), this.refresh();
      },
      deep: !0
    },
    rows: {
      handler() {
        this.currentRows = this.createRows(), this.refresh();
      },
      deep: !0
    },
    footerRows: {
      handler() {
        this.currentFooterRows = this.createRows(!0), this.refresh();
      },
      deep: !0
    }
  },
  computed: {
    controlsShown() {
      return this.scrollControls && this.overflownX;
    },
    headerVisibleX() {
      return this.sizesCalculated && this.overflownX;
    },
    headerOpacityX() {
      return this.headerVisibleX ? "1" : "0";
    },
    /**
     * Used to output the body rows. This is an array of only the deepest child columns
     * parent column information can be accessed by reference
     */
    rowColumns() {
      const e = this.currentColumns, l = [], t = (o) => {
        o.columns ? o.columns.forEach(t) : l.push(o);
      };
      e.forEach(t);
      let s = [];
      return l.forEach((o, r) => {
        const c = s.slice();
        o.getRowHeaders = (n) => c.map((i) => i(n)).join(" "), o.rowHeader && (o.getRowHeaderId = (n) => `${this.idPrefix}-rh-${n}-${r}`, s.push(o.getRowHeaderId));
      }), l;
    },
    headerHeight() {
      return this.headerRows.reduce((e, l) => e + l.boxHeight, 0);
    },
    /**
     * Reduce the array of column header rows to the first row, first column
     */
    headerRowsFirst() {
      const e = this.headerRows[0], t = [Object.assign({}, e.columns[0], { rowspan: 1, colspan: 1 })];
      return [{
        ...e,
        columns: t,
        boxHeight: this.headerHeight,
        height: `${this.headerHeight}px`
      }];
    },
    /**
     * Reduce the rowColumn array to only the first column
     */
    rowColumnsFirst() {
      return [this.rowColumns[0]];
    },
    firstColumnSize() {
      const e = this.headerRowsFirst[0].height;
      return { width: this.headerRows[0].columns[0].width, height: e };
    }
  },
  methods: {
    resetSorts(e) {
      const l = (t) => {
        t.forEach((s) => {
          e.key !== s.key && (s.sortApplied = !1, s.sortAscending = !1), s.columns && l(s.columns);
        });
      };
      l(this.currentColumns);
    },
    applySort(e) {
      this.resetSorts(e), e.sortApplied ? e.sortAscending = !e.sortAscending : e.sortApplied = !0, this.$emit("column-sort", e);
    },
    onColumnResize() {
      this.sizesPainted && this.refresh();
    },
    headerAdded(e) {
      this.columnResizeObserver.observe(e);
    },
    headerRemoved(e) {
      this.columnResizeObserver.unobserve(e);
    },
    /**
     * Allow classes options to be strings or functions
     */
    resolveClasses(e, l = null) {
      if (!(typeof e > "u"))
        return typeof e == "function" ? e(l) : e;
    },
    /**
     * Handles horizontal scroll
     * - Shifts the first column as the user scrolls
     */
    syncScrollLeft() {
      const e = this.$refs.display.scrollLeft;
      this.$refs.header.$el.style.transform = `translateX(-${e}px)`;
    },
    /**
     * Checks and sets state if the table is overflow horizontally
     */
    checkOverflowX() {
      this.overflownX = this.$refs.display.scrollWidth > this.$refs.display.clientWidth;
    },
    /**
     * Checks whether if the tables scroll position is at the start or end and updates state
     */
    checkScrollability() {
      if (!this.overflownX) return;
      const e = this.$refs.display;
      this.canScrollLeft = e.scrollLeft > 0, this.canScrollRight = e.clientWidth + e.scrollLeft < e.scrollWidth;
    },
    /**
     * Creates column array for internal use
     * - Avoid mutating user's prop 
     * - Current columns being used in the display
     * - This internal copy has internal properties/structural info (like ID)
     * - This is the copy of the users columns to avoid mutating their object
     * - Can be used in the future for adding/removing or enabling/disabling
     */
    createColumns() {
      const e = this.idCreator("c"), l = W(this.columns), t = (s, o) => {
        s.id = e(), s.parent = o, s.width = "auto", s.boxWidth = null, s.sortApplied = !1, s.sortAscending = !1, s.sortFocused = !1;
        let r = [];
        o && (o.headers && o.headers.length ? r = [...o.headers] : r.push(o.id)), r.push(s.id), s.headers = r, s.columns ? s.columns.forEach((c) => t(c, s)) : !s.key && !s.value && !s.slot && console.warn("UluTableSticky: Missing 'key', 'value' or 'slot' in column configuration for", s);
      };
      return l.forEach((s) => t(s, null)), l;
    },
    /**
     * Conversion of the columns (which are nested hierarchy) to a flat list of columns 
     * sorted by the way they need to be displayed in rows 
     * - Used for nested headers
     * - Transform nested data into row arrays
     */
    createHeaderRows(e) {
      const l = this.idCreator("hr"), t = e.reduce(this.maxColumnChildren, 1), s = "auto", o = new Array(t).fill(null).map(() => ({
        height: s,
        boxHeight: null,
        columns: [],
        id: l()
      }));
      function r(c, n) {
        const i = n.columns;
        i && i.forEach((a) => r(1 + c, a)), n.rowspan = i ? 1 : t - c, n.colspan = i ? i.reduce((a, T) => a + T.colspan, 0) : 1, o[c].columns.push(n);
      }
      return e.forEach((c) => r(0, c)), o;
    },
    /**
     * Creates row array for internal use
     * - Avoid mutating user's prop
     */
    createRows(e) {
      const l = this.idCreator(e ? "fr" : "br"), t = e ? this.footerRows : this.rows;
      return t ? t.map((s) => ({
        height: null,
        boxHeight: null,
        data: s,
        id: l()
      })) : [];
    },
    onResize() {
      const e = H();
      x !== e && (x = e, this.resizing ? (this.resizing = !1, this.setTableSizes(), this.checkOverflowX(), this.syncScrollLeft()) : (this.resizing = !0, this.removeTableSizes()));
    },
    /**
     * Method to update the table (sizes, etc) when data has changed
     */
    refresh() {
      this.removeTableSizes(), this.$nextTick(() => {
        this.setTableSizes(), this.checkOverflowX(), this.checkScrollability(), this.syncScrollLeft();
      });
    },
    onScrollX() {
      this.checkScrollability(), this.syncScrollLeft();
    },
    idCreator(e) {
      let l = 0;
      return () => `${this.idPrefix}-${e}-${++l}`;
    },
    /**
     * Recursive function used as a reducer to return the deepest nested columns
     */
    maxColumnChildren(e, l) {
      const t = l.columns ? l.columns.reduce(this.maxColumnChildren) + 1 : 1;
      return e > t ? e : t;
    },
    /**
     * Method to attach handlers needed after creation
     */
    attachHandlers() {
      this.handlerScrollX = this.onScrollX, this.$refs.display.addEventListener("scroll", this.handlerScrollX), this.scrollContext.addEventListener("touchmove", this.handlerScrollY), window.addEventListener("resize", this.resizeHandler);
    },
    removeHandlers() {
      this.$refs.display.removeEventListener("scroll", this.handlerScrollX), this.scrollContext.removeEventListener("scroll", this.handlerScrollY), this.scrollContext.addEventListener("touchmove", this.handlerScrollY), window.removeEventListener("resize", this.resizeHandler);
    },
    removeTableSizes() {
      this.sizesPainted = !1, this.sizesCalculated = !1;
      const e = (l) => {
        l.boxHeight = null, l.height = "auto";
      };
      this.tableWidth = "auto", this.headerRows.forEach((l) => {
        e(l), l.columns.forEach((t) => {
          t.boxWidth = null, t.width = "auto";
        });
      }), this.firstColumnSticky && (this.currentRows.forEach((l) => e(l)), this.currentFooterRows.forEach((l) => e(l)));
    },
    scrollLeft() {
      const e = this.$refs.display, l = e.scrollLeft, t = this.scrollControlAmount, s = l - t;
      e.scroll({
        left: s < 0 ? 0 : s,
        behavior: "smooth"
      });
    },
    scrollRight() {
      const e = this.$refs.display, l = e.scrollWidth, t = e.scrollLeft, s = this.scrollControlAmount, o = t + s;
      e.scroll({
        left: o > l ? e.scrollWidth : o,
        behavior: "smooth"
      });
    },
    /**
     * Cleanup function for when component is not in use
     */
    setTableSizes() {
      const e = (s, o) => Math.ceil(s.getBoundingClientRect()[o]);
      this.tableWidth = `${e(this.$refs.table.$el, "width")}px`;
      const l = (s) => document.getElementById(s.id), t = (s) => {
        const o = l(s);
        o && (s.boxHeight = e(o, "height"), s.height = `${s.boxHeight}px`);
      };
      this.headerRows.forEach((s) => {
        t(s), s.columns.forEach((o) => {
          const r = l(o);
          r && (o.boxWidth = e(r, "width"), o.width = `${o.boxWidth}px`);
        });
      }), this.firstColumnSticky && (this.currentRows.forEach((s) => t(s)), this.currentFooterRows.forEach((s) => t(s))), this.$nextTick(() => {
        this.sizesCalculated = !0, A(() => {
          this.sizesPainted = !0;
        });
      });
    },
    tableReady() {
      this.setTableSizes();
    }
    /**
     * Creates a new throttled scroll handler
     */
    // throttleScroll(handler) {
    //   let id = null;
    //   // Old Fired after frame
    //   return (event) => {
    //     if (id) window.cancelAnimationFrame(id);
    //     id = window.requestAnimationFrame(() => handler(event));
    //   };
    // },
  },
  mounted() {
    this.attachHandlers(), this.checkOverflowX(), this.checkScrollability();
  },
  beforeUnmount() {
    this.removeHandlers();
  },
  unmounted() {
    this.columnResizeObserver.disconnect(), this.columnResizeObserver = null;
  }
}, I = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--header" }, U = { class: "table-sticky__header-wrap" }, j = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header" }, N = { class: "table-sticky__sticky-wrap table-sticky__sticky-wrap--controls" }, D = {
  key: 2,
  class: "table-sticky__controls-inner"
}, M = ["disabled"], Y = ["disabled"], q = {
  ref: "display",
  class: "table-sticky__display"
};
function G(e, l, t, s, o, r) {
  const c = X("UluTableStickyTable");
  return u(), v("div", {
    class: f(["table-sticky", {
      "table-sticky--overflown-x": o.overflownX,
      "table-sticky--can-scroll-right": o.canScrollRight,
      "table-sticky--can-scroll-left": o.canScrollLeft
    }])
  }, [
    h("div", I, [
      h("div", U, [
        _(c, {
          ref: "header",
          class: "table-sticky__table table-sticky__table--header",
          classes: t.classes,
          caption: t.caption,
          resolveClasses: r.resolveClasses,
          getColumnTitle: t.getColumnTitle,
          idPrefix: t.idPrefix,
          headerRows: o.headerRows,
          style: g({
            opacity: o.sizesCalculated ? "1" : "0",
            pointerEvents: o.sizesCalculated ? "auto" : "none",
            width: o.tableWidth
          }),
          onColumnSorted: r.applySort
        }, w({ _: 2 }, [
          m(e.$slots, (n, i) => ({
            name: i,
            fn: y((a) => [
              d(e.$slots, i, b(C(a)))
            ])
          }))
        ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])
      ])
    ]),
    h("div", j, [
      t.firstColumnSticky ? (u(), R(c, {
        key: 0,
        ref: "firstColumnHeader",
        class: "table-sticky__table table-sticky__table--first-column-header",
        classes: t.classes,
        caption: t.caption,
        resolveClasses: r.resolveClasses,
        getColumnTitle: t.getColumnTitle,
        idPrefix: t.idPrefix,
        headerRows: r.headerRowsFirst,
        style: g({
          opacity: r.headerOpacityX,
          pointerEvents: r.headerVisibleX ? "auto" : "none"
        }),
        onColumnSorted: r.applySort
      }, w({ _: 2 }, [
        m(e.$slots, (n, i) => ({
          name: i,
          fn: y((a) => [
            d(e.$slots, i, b(C(a)))
          ])
        }))
      ]), 1032, ["classes", "caption", "resolveClasses", "getColumnTitle", "idPrefix", "headerRows", "style", "onColumnSorted"])) : k("", !0)
    ]),
    h("div", N, [
      P(h("div", {
        class: f(["table-sticky__controls", r.resolveClasses(t.classes.controls)]),
        ref: "controls"
      }, [
        e.$slots.controls ? d(e.$slots, "controls", {
          key: 0,
          scrollLeft: r.scrollLeft,
          scrollRight: r.scrollRight,
          canScrollLeft: o.canScrollLeft,
          canScrollRight: o.canScrollRight
        }) : t.controlsComponent ? (u(), R(O(t.controlsComponent), {
          key: 1,
          scrollLeft: r.scrollLeft,
          scrollRight: r.scrollRight,
          canScrollLeft: o.canScrollLeft,
          canScrollRight: o.canScrollRight
        }, null, 8, ["scrollLeft", "scrollRight", "canScrollLeft", "canScrollRight"])) : (u(), v("div", D, [
          h("button", {
            class: f(["table-sticky__control table-sticky__control--left", r.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Left",
            onClick: l[0] || (l[0] = (...n) => r.scrollLeft && r.scrollLeft(...n)),
            disabled: !o.canScrollLeft
          }, [
            d(e.$slots, "controlLeft", {}, () => [
              l[2] || (l[2] = z(" ← ", -1))
            ])
          ], 10, M),
          h("button", {
            class: f(["table-sticky__control table-sticky__control--right", r.resolveClasses(t.classes.controlButton)]),
            "aria-label": "Scroll Right",
            onClick: l[1] || (l[1] = (...n) => r.scrollRight && r.scrollRight(...n)),
            disabled: !o.canScrollRight
          }, [
            d(e.$slots, "controlRight", {}, () => [
              l[3] || (l[3] = z(" → ", -1))
            ])
          ], 10, Y)
        ]))
      ], 2), [
        [V, r.controlsShown]
      ])
    ]),
    h("div", q, [
      _(c, {
        ref: "table",
        class: "table-sticky__table table-sticky__table--actual",
        classes: t.classes,
        resolveClasses: r.resolveClasses,
        isActual: "",
        headerRows: o.headerRows,
        rows: o.currentRows,
        footerRows: o.currentFooterRows,
        rowColumns: r.rowColumns,
        caption: t.caption,
        idPrefix: t.idPrefix,
        getRowValue: t.getRowValue,
        getColumnTitle: t.getColumnTitle,
        onVnodeMounted: r.tableReady,
        onActualHeaderRemoved: r.headerRemoved,
        onActualHeaderAdded: r.headerAdded,
        onColumnSorted: r.applySort
      }, w({ _: 2 }, [
        m(e.$slots, (n, i) => ({
          name: i,
          fn: y((a) => [
            d(e.$slots, i, b(C(a)))
          ])
        }))
      ]), 1032, ["classes", "resolveClasses", "headerRows", "rows", "footerRows", "rowColumns", "caption", "idPrefix", "getRowValue", "getColumnTitle", "onVnodeMounted", "onActualHeaderRemoved", "onActualHeaderAdded", "onColumnSorted"])
    ], 512),
    t.firstColumnSticky ? (u(), R(c, {
      key: 0,
      ref: "firstColumn",
      class: "table-sticky__table table-sticky__table--first-column",
      classes: t.classes,
      resolveClasses: r.resolveClasses,
      caption: t.caption,
      headerRows: r.headerRowsFirst,
      columnWidth: r.firstColumnSize.width,
      rows: o.currentRows,
      footerRows: o.currentFooterRows,
      rowColumns: r.rowColumnsFirst,
      idPrefix: t.idPrefix,
      getRowValue: t.getRowValue,
      getColumnTitle: t.getColumnTitle,
      style: g({
        opacity: r.headerOpacityX,
        pointerEvents: r.headerVisibleX ? "auto" : "none"
      }),
      onColumnSorted: r.applySort
    }, w({ _: 2 }, [
      m(e.$slots, (n, i) => ({
        name: i,
        fn: y((a) => [
          d(e.$slots, i, b(C(a)))
        ])
      }))
    ]), 1032, ["classes", "resolveClasses", "caption", "headerRows", "columnWidth", "rows", "footerRows", "rowColumns", "idPrefix", "getRowValue", "getColumnTitle", "style", "onColumnSorted"])) : k("", !0)
  ], 2);
}
const te = /* @__PURE__ */ F(B, [["render", G]]);
export {
  te as default
};
