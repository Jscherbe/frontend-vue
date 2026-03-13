<!-- 
  Version: 2.0.6

  Updates:
    - 2.0.6 Moved to ulu library and refactored, styles moved to frontend
    - 2.0.5 Updated for SSR in vue 
    - 2.0.4 Add sorting, Removed all component options (in table values/titles)
    - Added ResizeObserver incase cells change width (inner component changes, interactive, etc)
      - Only on table actual header for now (performance)
    - Added slotHeader for templating columns
    - Added deep watchers for columns and rows props, so we can update is they are altered
    - Added the ability to use a custom component inside any table cell column.component and column.componentHeader
    - Added ability to pass classes object for adding classes to certain inner elements (table, controls, controlButton)
    - Add ability to pass "controlsComponent" to use custom component for controls
    - Add resolveClasses so that all classes can be functions (useful for things like rows that don't have configuration like column cells)
  Todo:
    - Should probably use global counters for id creation so they are renewed with new id's every time the table re-renders. Not sure
      how this would behave with a screen reader but either way the id's have changed (they won't line up to preexisting id's, guess that
      could be done but would be complicated), I think using an id that never exists will make sure all the connections works ie attr. headers
    - In the future the API for the data should be clearer (ie. row.data is sometimes row to the user), feels weird
  Warning:
    - This version has the vis
-->
<template>
  <div class="table-sticky" :class="{
    'table-sticky--overflown-x' : overflownX,
    'table-sticky--can-scroll-right' : canScrollRight,
    'table-sticky--can-scroll-left' : canScrollLeft
  }">
    <div class="table-sticky__sticky-wrap table-sticky__sticky-wrap--header">
      <div class="table-sticky__header-wrap">
        <UluTableStickyTable 
          ref="header"
          class="table-sticky__table table-sticky__table--header"
          :classes="classes"
          :caption="caption"
          :resolveClasses="resolveClasses"
          :getColumnTitle="getColumnTitle"
          :idPrefix="idPrefix"
          :headerRows="headerRows" 
          :style="{
            opacity: sizesCalculated ? '1' : '0',
            pointerEvents: sizesCalculated ? 'auto' : 'none',
            width: tableWidth
          }"
          @column-sorted="applySort"
        >
          <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
            <slot :name="name" v-bind="slotData" />
          </template>
        </UluTableStickyTable>
      </div>
    </div>
    <div class="table-sticky__sticky-wrap table-sticky__sticky-wrap--first-column-header">
      <UluTableStickyTable 
        v-if="firstColumnSticky"
        class="table-sticky__table table-sticky__table--first-column-header"
        :classes="classes"
        :caption="caption"
        :resolveClasses="resolveClasses"
        :getColumnTitle="getColumnTitle"
        :idPrefix="idPrefix"
        :headerRows="headerRowsFirst"
        :style="{
          opacity: headerOpacityX,
          pointerEvents: headerVisibleX ? 'auto' : 'none'
        }"
        @column-sorted="applySort"
      >
        <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </UluTableStickyTable>
    </div>
    <div class="table-sticky__sticky-wrap table-sticky__sticky-wrap--controls">
      <div 
        class="table-sticky__controls" 
        :class="resolveClasses(classes.controls)"
        v-show="controlsShown"
      >
        <slot 
          v-if="$slots.controls" 
          name="controls" 
          :scrollLeft="scrollLeft"
          :scrollRight="scrollRight"
          :canScrollLeft="canScrollLeft"
          :canScrollRight="canScrollRight"
        />
        <component 
          v-else-if="controlsComponent" 
          :is="controlsComponent"
          :scrollLeft="scrollLeft"
          :scrollRight="scrollRight"
          :canScrollLeft="canScrollLeft"
          :canScrollRight="canScrollRight"
        />
        <div v-else class="table-sticky__controls-inner">
          <button 
            class="table-sticky__control table-sticky__control--left" 
            aria-label="Scroll Left"
            @click="scrollLeft"
            :class="resolveClasses(classes.controlButton)"
            :disabled="!canScrollLeft"
          >
            <slot name="controlLeft">
              &larr;
            </slot>
          </button>
          <button 
            class="table-sticky__control table-sticky__control--right" 
            aria-label="Scroll Right"
            @click="scrollRight"
            :class="resolveClasses(classes.controlButton)"
            :disabled="!canScrollRight"
          >
            <slot name="controlRight">
              &rarr;
            </slot>
          </button>
        </div>
      </div>
    </div>
    <div ref="display" class="table-sticky__display">
      <UluTableStickyTable 
        ref="table"
        class="table-sticky__table table-sticky__table--actual"
        :classes="classes"
        :resolveClasses="resolveClasses"
        isActual
        :headerRows="headerRows" 
        :rows="currentRows"
        :footerRows="currentFooterRows"
        :rowColumns="rowColumns"
        :caption="caption"
        :idPrefix="idPrefix"
        :getRowValue="getRowValue"
        :getColumnTitle="getColumnTitle"
        @vue:mounted="tableReady"
        @actual-header-removed="headerRemoved"
        @actual-header-added="headerAdded"
        @column-sorted="applySort"
      >
        <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </UluTableStickyTable>
      <!-- Scroll Controls (optionally allow user templating via slot passed methods) -->
    </div>
    <UluTableStickyTable 
      v-if="firstColumnSticky"
      class="table-sticky__table table-sticky__table--first-column"
      :classes="classes"
      :resolveClasses="resolveClasses"
      :caption="caption"
      :headerRows="headerRowsFirst" 
      :columnWidth="firstColumnSize.width"
      :rows="currentRows"
      :footerRows="currentFooterRows"
      :rowColumns="rowColumnsFirst"
      :idPrefix="idPrefix"
      :getRowValue="getRowValue"
      :getColumnTitle="getColumnTitle"
      :style="{
        opacity: headerOpacityX,
        pointerEvents: headerVisibleX ? 'auto' : 'none'
      }"
      @column-sorted="applySort"
    >
      <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </UluTableStickyTable>
  </div>
</template>

<script setup>
  // Prop specific import (hoisted)
  import { isArrayOfObjects } from "../../../utils/props.js";

  import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from "vue";
  import UluTableStickyTable from "./UluTableStickyTable.vue";
  import { debounce } from "@ulu/utils/performance.js";
  import { runAfterFramePaint } from "@ulu/utils/browser/performance.js";
  import cloneDeep from "lodash-es/cloneDeep.js";

  const SSR = import.meta.env.SSR;
  const getWindowWidth = () => SSR ? 0 : window.innerWidth;
  // Used to make sure resize events on ios (when address bar collapses) 
  // don't trigger recalculations
  let windowWidth = getWindowWidth();

  const props = defineProps({
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
      required: true
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
      validator: isArrayOfObjects,
      required: true
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
      validator: isArrayOfObjects,
    },
    /**
     * Array of rows for footer (tfoot)
     */
    footerRows: {
      type: Array,
      validator: isArrayOfObjects,
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
      default: () => import.meta.env.SSR ? null : window
    },
    /**
     * Amount to scroll when user uses scroll controls (pixels)
     */
    scrollControlAmount: {
      type: Number,
      default: 100
    }
  });

  const emit = defineEmits(["column-sort"]);

  const header = ref(null);
  const display = ref(null);
  const table = ref(null);

  const idCreator = (type) => {
    let id = 0;
    return () => `${ props.idPrefix }-${ type }-${ ++id }`;
  };

  /**
   * Creates column array for internal use
   * - Avoid mutating user's prop 
   * - Current columns being used in the display
   * - This internal copy has internal properties/structural info (like ID)
   * - This is the copy of the users columns to avoid mutating their object
   * - Can be used in the future for adding/removing or enabling/disabling
   */
  const createColumns = () => {
    const newId = idCreator("c");
    const columns = cloneDeep(props.columns);
    const prep = (column, parent) => {
      column.id = newId();
      column.parent = parent;
      column.width = "auto";
      column.boxWidth = null;
      column.sortApplied = false;
      column.sortAscending = false;
      column.sortFocused = false;
      let headers = [];
      // Add the column's headers for output to attribute
      if (parent) {
        if (parent.headers && parent.headers.length) {
          headers = [ ...parent.headers ];
        } else {
          headers.push(parent.id);
        }
      }
      headers.push(column.id);
      column.headers = headers;
      // Call the function on this column's children
      if (column.columns) {
        column.columns.forEach(c => prep(c, column));
      // Make sure column has a required properties
      } else if (!column.key && !column.value && !column.slot) {
        console.warn("UluTableSticky: Missing 'key', 'value' or 'slot' in column configuration for", column);
      }
    };
    columns.forEach(c => prep(c, null));
    return columns;
  };

  /**
   * Recursive function used as a reducer to return the deepest nested columns
   */
  const maxColumnChildren = (d, c) => {
    const m = c.columns ? c.columns.reduce(maxColumnChildren, 1) + 1 : 1;
    return d > m ? d : m;
  };

  /**
   * Conversion of the columns (which are nested hierarchy) to a flat list of columns 
   * sorted by the way they need to be displayed in rows 
   * - Used for nested headers
   * - Transform nested data into row arrays
   */
  const createHeaderRows = (currentColumnsData) => {
    // Create empty row array, each array will hold it's columns
    const newId = idCreator("hr");
    const count = currentColumnsData.reduce(maxColumnChildren, 1);
    const height = "auto";
    const rows = new Array(count).fill(null).map(() => ({ 
      height, 
      boxHeight: null,
      columns: [],
      id: newId()
    }));
    
    /**
     * Function that adds columns to the rows array's based 
     * on their depth, called recursively.
     */
    function setInRows(depth, column) {
      const columns = column.columns;
      // Go to inward to the deepest child
      if (columns) columns.forEach(c => setInRows(1 + depth, c));
      // Now that the deepest children have been calculated and pushed we have
      // all the information we need to determine the parent's colspan by reducing
      // the parents children's colspans and children would include their children
      column.rowspan = columns ? 1 : count - depth;
      column.colspan = columns ? columns.reduce((a, c) => a + c.colspan, 0) : 1;
      rows[depth].columns.push(column);
    }
    currentColumnsData.forEach(c => setInRows(0, c));
    return rows;
  };

  /**
   * Creates row array for internal use
   * - Avoid mutating user's prop
   */
  const createRows = (forFooter) => {
    const newId = idCreator(forFooter ? "fr" : "br");
    const currentRows = forFooter ? props.footerRows : props.rows;
    return currentRows ? currentRows.map(row => ({
      height: null,
      boxHeight: null,
      data: row,
      id: newId()
    })) : [];
  };

  const currentColumns = ref(createColumns());
  const currentRows = ref(createRows());
  const currentFooterRows = ref(createRows(true));
  const headerRows = ref(createHeaderRows(currentColumns.value));
  const sizesCalculated = ref(false);
  const tableWidth = ref("auto");
  const resizing = ref(false);
  const overflownX = ref(false);
  const canScrollLeft = ref(false);
  const canScrollRight = ref(false);
  const sizesPainted = ref(false);
  
  let columnResizeObserver = null;
  if (!SSR) {
    columnResizeObserver = new ResizeObserver(() => onColumnResize());
  }

  const controlsShown = computed(() => props.scrollControls && overflownX.value);
  const headerVisibleX = computed(() => sizesCalculated.value && overflownX.value);
  const headerOpacityX = computed(() => headerVisibleX.value ? "1" : "0");

  /**
   * Used to output the body rows. This is an array of only the deepest child columns
   * parent column information can be accessed by reference
   */
  const rowColumns = computed(() => {
    const columns = currentColumns.value;
    const rc = [];
    const add = c => {
      if (c.columns) c.columns.forEach(add);
      else rc.push(c);
    };
    // Create array of actual 
    columns.forEach(add);
    
    // Iterate over all columns checking for rowHeader
    // - If a column has row header create an id function passed current row's index
    // - Store callbacks in an array to call on each rows cells
    let rowHeaders = [];
    rc.forEach((c, columnIndex) => {
      // Creating copy of array here so it doesn't include it's own ID and also 
      // so there can be headers of headers going from left to right only
      const thisRowsHeader = rowHeaders.slice();
      c.getRowHeaders = rowIndex => thisRowsHeader.map(cb => cb(rowIndex)).join(" ");
      // Now we add this columns row header function
      // Which will be included in all columns after this iteration
      if (c.rowHeader) {
        c.getRowHeaderId = rowIndex => `${ props.idPrefix }-rh-${ rowIndex }-${ columnIndex }`;
        rowHeaders.push(c.getRowHeaderId);
      }
    });
    return rc;
  });

  const headerHeight = computed(() => {
    // Offset height would be the combination of all the rows height's
    return headerRows.value.reduce((a, r) => a + r.boxHeight, 0);
  });

  /**
   * Reduce the array of column header rows to the first row, first column
   */
  const headerRowsFirst = computed(() => {
    const firstRow = headerRows.value[0];
    const firstColumn = Object.assign({}, firstRow.columns[0], { rowspan: 1, colspan: 1 });
    const columns = [ firstColumn ];
    return [{ 
      ...firstRow, 
      columns,
      boxHeight: headerHeight.value,
      height: `${ headerHeight.value }px`
    }];
  });

  /**
   * Reduce the rowColumn array to only the first column
   */
  const rowColumnsFirst = computed(() => {
    return [ rowColumns.value[0] ];
  });

  const firstColumnSize = computed(() => {
    const height = headerRowsFirst.value[0].height;
    const width = headerRows.value[0].columns[0].width;
    return { width, height };
  });

  const resetSorts = (except) => {
    const resetSort = cols => {
      cols.forEach(col => {
        if (except.key !== col.key) {
          col.sortApplied = false;
          col.sortAscending = false;
        }
        if (col.columns) {
          resetSort(col.columns);
        }
      });
    };
    resetSort(currentColumns.value);
  };

  const applySort = (column) => {
    resetSorts(column);
    if (column.sortApplied) {
      column.sortAscending = !column.sortAscending;
    } else {
      column.sortApplied = true;
    }
    emit("column-sort", column);
  };

  const onColumnResize = () => {
    if (sizesPainted.value) {
      refresh();
    }
  };

  const headerAdded = (el) => {
    if (!SSR && columnResizeObserver) {
      columnResizeObserver.observe(el);
    }
  };

  const headerRemoved = (el) => {
    if (!SSR && columnResizeObserver) {
      columnResizeObserver.unobserve(el);
    }
  };

  /**
   * Allow classes options to be strings or functions
   */
  const resolveClasses = (passed, args = null) => {
    if (typeof passed === "undefined") return;
    if (typeof passed === "function") {
      return passed(args);
    }
    return passed;
  };

  /**
   * Handles horizontal scroll
   * - Shifts the first column as the user scrolls
   */
  const syncScrollLeft = () => {
    if (display.value && header.value) {
      const left = display.value.scrollLeft;
      header.value.$el.style.transform = `translateX(-${ left }px)`;
    }
  };

  /**
   * Checks and sets state if the table is overflow horizontally
   */
  const checkOverflowX = () => {
    if (display.value) {
      overflownX.value = display.value.scrollWidth > display.value.clientWidth;
    }
  };

  /**
   * Checks whether if the tables scroll position is at the start or end and updates state
   */
  const checkScrollability = () => {
    if (!overflownX.value || !display.value) return;
    const element = display.value;
    canScrollLeft.value = element.scrollLeft > 0;
    canScrollRight.value = element.clientWidth + element.scrollLeft < element.scrollWidth;
  };

  const onResize = () => {
    if (SSR) return;
    const newWindowWidth = getWindowWidth();
    if (windowWidth === newWindowWidth) return;
    windowWidth = newWindowWidth;

    // Called when the resize event is first fired (before change)
    if (!resizing.value) {
      resizing.value = true;
      removeTableSizes();
    } else {
      resizing.value = false;
      setTableSizes();
      checkOverflowX();
      syncScrollLeft();
    }
  };

  const resizeHandler = debounce(onResize, 500, true);

  /**
   * Method to update the table (sizes, etc) when data has changed
   */
  const refresh = () => {
    if (SSR) return;
    removeTableSizes();
    nextTick(() => {
      setTableSizes();
      checkOverflowX();
      checkScrollability();
      syncScrollLeft();
    });
  };

  const onScrollX = () => {
    checkScrollability();
    syncScrollLeft();
  };

  const handlerScrollX = onScrollX; // Note: Non-reactive property
  const handlerScrollY = () => {}; // Used to match the old event listener mapping if touchmove was registered globally

  /**
   * Method to attach handlers needed after creation
   */
  const attachHandlers = () => {
    // this.handlerScrollX = this.throttleScroll(this.onScrollX); // Note: Non-reactive property
    if (display.value) {
      display.value.addEventListener("scroll", handlerScrollX);
    }
    if (props.scrollContext) {
      props.scrollContext.addEventListener("touchmove", handlerScrollY);
    }
    window.addEventListener("resize", resizeHandler);
  };

  const removeHandlers = () => {
    if (display.value) {
      display.value.removeEventListener("scroll", handlerScrollX);
    }
    if (props.scrollContext) {
      props.scrollContext.removeEventListener("scroll", handlerScrollY);
      props.scrollContext.removeEventListener("touchmove", handlerScrollY);
    }
    window.removeEventListener("resize", resizeHandler);
  };

  const removeTableSizes = () => {
    sizesPainted.value = false;
    sizesCalculated.value = false;
    const setRowHeight = row => {
      row.boxHeight = null;
      row.height = "auto";
    };
    tableWidth.value = "auto";
    headerRows.value.forEach(row => {
      setRowHeight(row);
      row.columns.forEach(column => {
        column.boxWidth = null;
        column.width = "auto";
      });
    });
    if (props.firstColumnSticky) {
      currentRows.value.forEach(row => setRowHeight(row));
      currentFooterRows.value.forEach(row => setRowHeight(row));
    }
  };

  const scrollLeft = () => {
    const element = display.value;
    if (!element) return;
    const sLeft = element.scrollLeft;
    const amount = props.scrollControlAmount;
    const toScroll = sLeft - amount;

    element.scroll({ 
      left: toScroll < 0 ? 0 : toScroll,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    const element = display.value;
    if (!element) return;
    const scrollWidth = element.scrollWidth;
    const sLeft = element.scrollLeft;
    const amount = props.scrollControlAmount;
    const toScroll = sLeft + amount;
    // If amount would be greater than scrollable area
    // scroll to end
    // element.scrollLeft = element.scrollWidth;
    element.scroll({ 
      left: toScroll > scrollWidth ? scrollWidth : toScroll,
      behavior: "smooth"
    });
  };

  /**
   * Cleanup function for when component is not in use
   */
  const setTableSizes = () => {
    if (SSR) return;
    // Set the table and it's cloned header to the exact same width
    const size = (element, key) => Math.ceil(element.getBoundingClientRect()[key]);
    if (table.value && table.value.$el) {
      tableWidth.value = `${ size(table.value.$el, "width") }px`;
    }
    const getElement = object => document.getElementById(object.id);

    const setRowHeight = row => {
      const element = getElement(row);
      // Ensure element still exists, sometimes (only seen in storybook the element 
      // is removed before the unmounted/beforeUnmounted hook), this prevents the error 
      // for missing element. #mounted-no-element
      if (element) {
        row.boxHeight = size(element, "height");
        row.height = `${ row.boxHeight }px`;
      }
    };
    
    // Set the tables header <tr> and <th> to their rendered sizes
    // By measuring each and updating it's column object data
    // reactively updating all the cloned versions
    headerRows.value.forEach(row => {
      setRowHeight(row);
      row.columns.forEach(column => {
        const element = getElement(column);
        // See #mounted-no-element
        if (element) {
          column.boxWidth = size(element, "width");
          column.width = `${ column.boxWidth }px`;
        }
      });
    });
    
    // If first column sticky the plugin needs to set  
    // each row's height so the cloned column matches
    if (props.firstColumnSticky) {
      currentRows.value.forEach(row => setRowHeight(row));
      currentFooterRows.value.forEach(row => setRowHeight(row));
    }
    nextTick(() => {
      sizesCalculated.value = true;
      runAfterFramePaint(() => {
        sizesPainted.value = true;
      });
    });
  };

  const tableReady = () => {
    setTableSizes();
  };

  /**
   * Creates a new throttled scroll handler
   */
  // const throttleScroll = (handler) => {
  //   let id = null;
  //   // Old Fired after frame
  //   return (event) => {
  //     if (id) window.cancelAnimationFrame(id);
  //     id = window.requestAnimationFrame(() => handler(event));
  //   };
  // };

  watch(() => props.columns, () => {
    currentColumns.value = createColumns();
    headerRows.value = createHeaderRows(currentColumns.value);
    refresh();
  }, { deep: true });

  watch(() => props.rows, () => {
    currentRows.value = createRows();
    refresh();
  }, { deep: true });

  watch(() => props.footerRows, () => {
    currentFooterRows.value = createRows(true);
    refresh();
  }, { deep: true });

  onMounted(() => {
    if (!SSR) {
      attachHandlers();
      checkOverflowX();
      checkScrollability();
    }
  });

  onBeforeUnmount(() => {
    if (!SSR) {
      removeHandlers();
      if (columnResizeObserver) {
        // Allow resizer to be Garbage Collected
        columnResizeObserver.disconnect();
        columnResizeObserver = null;
      }
    }
  });
</script>

<!-- 
  Issues to Avoid:
    - If we allow the user to pass components in column config, it will cause errors and performance issues when watching the column config for 'deep' changes
      - Thoughts: 
        - 1. remove component option
          - This would be fine and simplify the component, the user can already use slots to pass their own component. They could always
            set up their own wrapper component for the UluTableSticky with the slot templates routed to the preferred components
        - 2. Allow component option but only strings and have another property that is a lookup of components (shallow, markRaw)
          - I think this is the best approach, as it is an advanced option
        - 3. Remove the deep watch and force the user to have to provide a new array when changing column config (and probably row)
          - Don't like this because, I think the table may redraw completely, but then again we are cloning the columns, so the whole
            table is redrawn anyways
          - We should probably avoid having components in objects anyways 
      - Decided this is not nessassary with slots the user can setup their own components
        - Removed b/c bad practice to have components in reactive data (that's watched)
          - Future this could be prop instead of in column.config 
          - Or this can be refactored to just use the props directly and keep the data for the plugin seperate but related
 -->