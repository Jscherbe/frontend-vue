<template>
  <table 
    :class="resolveClasses(classes.table, { isActual })"
    :aria-hidden="isActual ? 'false' : 'true'"
  >
    <caption v-if="caption" class="table-sticky__caption">
      {{ caption }}
    </caption>
    <thead>
      <tr 
        v-for="(row, rowIndex) in headerRows"
        :key="`hr-${ rowIndex }`"
        :id="optionalAttr(isActual && row.id)"
        :class="resolveClasses(classes.rowHeader, { row, rowIndex, isActual })"
        :style="{
          height: row.height
        }"
      >
        <th 
          v-for="(column, index) in row.columns"
          :key="`hc-${ index }`"
          :id="optionalAttr(isActual && column.id)"
          :rowspan="column.rowspan"
          :colspan="column.colspan"
          :data-child-columns="column.columns && column.columns.length"
          :class="[
            {
              'sort-active' : column.sortApplied,
              'sort-ascending' : column.sortApplied && column.sortAscending,
              'sort-descending' : column.sortApplied && !column.sortAscending,
            }, 
            resolveClasses(column.classHeader, { column, index, isActual })
          ]"
          :style="{
            width: column.width
          }"
          :aria-sort="column.sort ? column.sortAscending ? 'ascending' : 'descending' : null"
          :scope="optionalAttr(isActual && (column.colspan > 1 ? 'colgroup' : 'col'))"
          :headers="optionalAttr(isActual && getHeaderHeaders(column, rowIndex))"
          :ref="(el) => addHeaderRef(column, el)"
        >
          <!-- 
            If sortable print button but div on fake headers (click only)
            Focus will go back to real header (focus and blur will update styling)
          -->
          <component 
            v-if="column.sortable"
            :is="isActual ? 'button' : 'div'"
            class="table-sticky__sort-button"
            :class="{ 
              'table-sticky__sort-button--focused' : column.sortFocused,
            }"
            @click="$emit('columnSorted', column)"
            @focus="handleSortFocus(column, true)"
            @blur="handleSortFocus(column, false)"
            :aria-pressed="column.sortApplied ? 'true' : 'false'"
          >
            <template v-if="$slots[column.slotHeader]">
              <slot 
                :name="column.slotHeader"
                :isActual="isActual"
                :column="column"
                :index="index"
              />
            </template>
            <div v-else-if="column.htmlTitle" v-html="getColumnTitle({ column, index, isActual })"></div>
            <template v-else>
              {{ getColumnTitle({ column, index, isActual }) }}
            </template>
            <span class="table-sticky__sort-icon" aria-hidden="true">
              <span class="table-sticky__sort-icon-inner">
                <slot name="sortIcon">▼</slot>
              </span>
            </span>
          </component>
          <template v-else>
            <template v-if="$slots[column.slotHeader]">
              <slot 
                :name="column.slotHeader"
                :isActual="isActual"
                :column="column"
                :index="index"
              />
            </template>
            <div v-else-if="column.htmlTitle" v-html="getColumnTitle({ column, index, isActual })"></div>
            <template v-else>
              {{ getColumnTitle({ column, index, isActual }) }}
            </template>
          </template>
        </th>
      </tr>
    </thead>
    <template v-if="rows">
      <tbody>
        <UluTableStickyRows
          :rows="rows"
          :rowColumns="rowColumns"
          :optionalAttr="optionalAttr"
          :resolveClasses="resolveClasses"
          :getCellHeaders="getCellHeaders"
          :isActual="isActual"
          :columnWidth="columnWidth"
          :classes="classes"
          :value="value"
        >
          <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
            <slot :name="name" v-bind="slotData" />
          </template>
        </UluTableStickyRows>
      </tbody>
    </template>
    <template v-if="footerRows">
      <tfoot>
        <UluTableStickyRows
          :rows="footerRows"
          :rowColumns="rowColumns"
          :optionalAttr="optionalAttr"
          :resolveClasses="resolveClasses"
          :getCellHeaders="getCellHeaders"
          :isActual="isActual"
          :columnWidth="columnWidth"
          :classes="classes"
          :value="value"
          foot
        >
          <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
            <slot :name="name" v-bind="slotData" />
          </template>
        </UluTableStickyRows>
      </tfoot>
    </template>
  </table>
</template>

<script>
  import UluTableStickyRows from "./UluTableStickyRows.vue";
  export default {
    name: "UluTableStickyTable",
    components: {
      UluTableStickyRows,
    },
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
        required: true
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
        default: ({ row, column }) => row[column.key]
      },
      /**
       * Optional user overridden value getter (for rows)
       * @param {Object} row The current row
       * @param {Object} column The current column in the row
       */
      getColumnTitle: {
        type: Function,
        default: ({ column }) => column.title
      },
    },
    data() {
      return {
        headerRefs: {}
      };
    },
    methods: {
      handleSortFocus(column, isFocused) {
        if (this.isActual) {
          column.sortFocused = isFocused;
        }
      },
      addHeaderRef(column, el) {
        const { headerRefs, isActual } = this;
        if (!isActual || !el) return;
        const { id } = column;
        const old = headerRefs[id];
        if (old) {
          this.$emit("actualHeaderRemoved", old);
        }
        this.$emit("actualHeaderAdded", el);
        headerRefs[id] = el;
      },
      /**
       * False is no longer not printed
       */
      optionalAttr(val) {
        return val ? val : null;
      },
      value({ row, column, rowIndex }) {
        const value = column.value;
        // Column has value function, pass to user
        if (value) {
          return value({ row: row.data, column, rowIndex });
        } else {
          // added .value to work with data. Should refactor depending on what we need
          return this.getRowValue({ row: row.data, column, rowIndex });
        }
      },
      getCellHeaders(column, rowIndex) {
        const headers = column.headers.join(" ");
        const rowHeaders = column.getRowHeaders(rowIndex);
        const s = rowHeaders.length ? " " : "";
        return `${ headers }${ s }${ rowHeaders }`;
      },
      getHeaderHeaders(column) {
        const headersArray = column.headers.filter(id => id !== column.id);
        if (headersArray.length) {
          return headersArray.join(" ");
        }
      }
    }
  };
</script>