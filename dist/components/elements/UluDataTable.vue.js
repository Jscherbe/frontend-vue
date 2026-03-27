import { computed as l, createBlock as n, openBlock as c, mergeProps as u, unref as f, createSlots as m, renderList as d, withCtx as g, renderSlot as w, normalizeProps as y, guardReactiveProps as R } from "vue";
import { useModifiers as b } from "../../composables/useModifiers.js";
import p from "./UluTable.vue.js";
import { isArrayOfObjects as o } from "../../utils/props.js";
const x = {
  __name: "UluDataTable",
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
      validator: o
    },
    /**
     * Array of tables rows (tbody)
     * - Each row is an object who's value will be matched to columns
     */
    rows: {
      type: Array,
      validator: o
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: o
    },
    /**
     * Hidden caption for accessibility (or visible depending on styles). Can also be passed via slot.
     */
    caption: String,
    /**
     * Prefix used for id generation
     */
    idPrefix: String,
    /**
     * Optional user overridden value getter (for rows)
     * @param {Object} row The current row
     * @param {Object} column The current column in the row
     */
    getRowValue: Function,
    /**
     * Optional user overridden title getter (for headers)
     * @param {Object} column The current column
     */
    getColumnTitle: Function,
    /**
     * Applies striped row styling
     */
    striped: Boolean,
    /**
     * Enhances the first column's visual prominence
     */
    largeFirst: Boolean,
    /**
     * Additional style modifiers
     */
    modifiers: [String, Array],
    /**
     * Allows user to pass classes object to add custom classes to parts of the component
     */
    classes: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, { resolvedModifiers: s } = b({
      props: t,
      baseClass: "data-table",
      internal: l(() => ({
        striped: t.striped,
        "large-first": t.largeFirst
      }))
    });
    return (r, P) => (c(), n(p, u({ class: "data-table" }, r.$attrs, {
      columns: e.columns,
      rows: e.rows,
      footerRows: e.footerRows,
      caption: e.caption,
      idPrefix: e.idPrefix,
      getRowValue: e.getRowValue,
      getColumnTitle: e.getColumnTitle,
      classes: {
        ...e.classes,
        table: [f(s), e.classes?.table]
      }
    }), m({ _: 2 }, [
      d(r.$slots, (C, a) => ({
        name: a,
        fn: g((i) => [
          w(r.$slots, a, y(R(i)))
        ])
      }))
    ]), 1040, ["columns", "rows", "footerRows", "caption", "idPrefix", "getRowValue", "getColumnTitle", "classes"]));
  }
};
export {
  x as default
};
