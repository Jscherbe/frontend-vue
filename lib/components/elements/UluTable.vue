<template>
  <table :class="classes?.table">
    <template v-if="columns && rows">
      <caption v-if="caption || $slots.caption" :class="classes?.caption">
        <slot name="caption">{{ caption }}</slot>
      </caption>
      <thead :class="classes?.thead">
        <tr 
          v-for="(row, rowIndex) in headerRows" 
          :key="`hr-${rowIndex}`"
          :class="resolveClasses(classes?.rowHeader, { row, rowIndex })"
        >
          <th 
            v-for="(column, colIndex) in row.columns" 
            :key="`hc-${colIndex}`"
            :id="column.id"
            :rowspan="column.rowspan"
            :colspan="column.colspan"
            :class="resolveClasses(column.classHeader, { column, index: colIndex })"
            :scope="column.colspan > 1 ? 'colgroup' : 'col'"
            :headers="getHeaderHeaders(column)"
          >
            <template v-if="$slots[column.slotHeader]">
              <slot :name="column.slotHeader" :column="column" :index="colIndex"></slot>
            </template>
            <div v-else-if="column.htmlTitle" v-html="getColumnTitle({ column, index: colIndex })"></div>
            <template v-else>{{ getColumnTitle({ column, index: colIndex }) }}</template>
          </th>
        </tr>
      </thead>
      <tbody :class="classes?.tbody">
        <tr
          v-for="(row, rowIndex) in currentRows"
          :key="`br-${rowIndex}`"
          :id="row.id"
          :class="resolveClasses(classes?.row, { row: row.data, rowIndex })"
        >
          <component
            v-for="(column, colIndex) in rowColumns"
            :key="`bc-${colIndex}`"
            :is="column.rowHeader ? 'th' : 'td'"
            :id="column.rowHeader ? column.getRowHeaderId(rowIndex) : undefined"
            :scope="column.rowHeader ? 'row' : undefined"
            :headers="getCellHeaders(column, rowIndex)"
            :class="resolveClasses(column.class, { column, index: colIndex, row, rowIndex })"
          >
            <template v-if="$slots[column.slot]">
              <slot 
                :name="column.slot" 
                :row="row.data" 
                :column="column"
                :rowIndex="rowIndex"
                :index="colIndex"
              />
            </template>
            <div 
              v-else-if="column.html" 
              v-html="getValue({ row, column, rowIndex })"
            ></div>
            <template v-else>
              {{ getValue({ row, column, rowIndex }) }}
            </template>
          </component>
        </tr>
      </tbody>
      <tfoot v-if="currentFooterRows.length" :class="classes?.tfoot">
        <tr
          v-for="(row, rowIndex) in currentFooterRows"
          :key="`fr-${rowIndex}`"
          :id="row.id"
          :class="resolveClasses(classes?.rowFooter, { row: row.data, rowIndex })"
        >
          <component
            v-for="(column, colIndex) in rowColumns"
            :key="`fc-${colIndex}`"
            :is="column.rowHeader ? 'th' : 'td'"
            :id="column.rowHeader ? column.getRowHeaderId(rowIndex) : undefined"
            :scope="column.rowHeader ? 'row' : undefined"
            :headers="getCellHeaders(column, rowIndex)"
            :class="resolveClasses(column.class, { column, index: colIndex, row, rowIndex })"
          >
            <template v-if="$slots[column.slot]">
              <slot 
                :name="column.slot" 
                :row="row.data" 
                :column="column"
                :rowIndex="rowIndex"
                :index="colIndex"
              />
            </template>
            <div 
              v-else-if="column.html" 
              v-html="getValue({ row, column, rowIndex })"
            ></div>
            <template v-else>
              {{ getValue({ row, column, rowIndex }) }}
            </template>
          </component>
        </tr>
      </tfoot>
    </template>
    <slot v-else />
  </table>
</template>

<script setup>
  import { isArrayOfObjects } from "../../utils/props.js";
  import { useTableData } from "../../composables/useTableData.js";

  const props = defineProps({
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
      validator: isArrayOfObjects
    },
    /**
     * Array of tables rows (tbody)
     * - Each row is an object who's value will be matched to columns
     */
    rows: {
      type: Array,
      validator: isArrayOfObjects
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: isArrayOfObjects
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
      default: ({ row, column }) => row[column.key]
    },
    /**
     * Optional user overridden title getter (for headers)
     * @param {Object} column The current column
     */
    getColumnTitle: {
      type: Function,
      default: ({ column }) => column.title
    }
  });

  const { 
    currentRows, 
    currentFooterRows, 
    headerRows, 
    rowColumns 
  } = useTableData(props);

  const resolveClasses = (passed, args = null) => {
    if (typeof passed === "undefined") return;
    if (typeof passed === "function") return passed(args);
    return passed;
  };

  const getHeaderHeaders = (column) => {
    const headersArray = column.headers.filter(id => id !== column.id);
    if (headersArray.length) {
      return headersArray.join(" ");
    }
  };

  const getCellHeaders = (column, rowIndex) => {
    const headers = column.headers.join(" ");
    const rowHeaders = column.getRowHeaders(rowIndex);
    const s = rowHeaders.length ? " " : "";
    return `${ headers }${ s }${ rowHeaders }`;
  };

  const getValue = ({ row, column, rowIndex }) => {
    const valueFn = column.value;
    if (valueFn) {
      return valueFn({ row: row.data, column, rowIndex });
    } else {
      return props.getRowValue({ row: row.data, column, rowIndex });
    }
  };
</script>
