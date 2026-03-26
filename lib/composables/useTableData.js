import { ref, computed, watch } from 'vue';

/**
 * Composable for managing and normalizing table data structures.
 * Generates rows, columns, and accessibility attributes for complex tables.
 *
 * @param {Object} props - The component props containing columns, rows, footerRows, and idPrefix.
 * @param {Function} [onChange] - Optional callback triggered when rows or columns data change (useful for layout recalculation).
 */
export function useTableData(props, onChange = () => {}) {
  const idCreator = (type) => {
    let id = 0;
    return () => `${props.idPrefix || 'table'}-${type}-${++id}`;
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
    if (!props.columns) return [];
    const newId = idCreator("c");
    
    const prep = (colDef, parent) => {
      // Create a shallow copy of the user's object so we don't mutate the prop
      const column = { ...colDef };
      
      column.id = newId();
      column.parent = parent;
      // Sticky table specific default resets (ignored by simple table)
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
      
      // Call the function on this column's children, reassigning the new array
      if (column.columns) {
        column.columns = column.columns.map(c => prep(c, column));
      // Make sure column has a required properties
      } else if (!column.key && !column.value && !column.slot) {
        console.warn("useTableData: Missing 'key', 'value' or 'slot' in column configuration for", column);
      }
      
      return column;
    };
    
    return props.columns.map(c => prep(c, null));
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
    if (!currentColumnsData || currentColumnsData.length === 0) return [];
    // Create empty row array, each array will hold it's columns
    const newId = idCreator("hr");
    const count = currentColumnsData.reduce(maxColumnChildren, 1);
    const rows = new Array(count).fill(null).map(() => ({ 
      height: "auto", 
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
  const createRows = (sourceRows, isFooter = false) => {
    if (!sourceRows) return [];
    const newId = idCreator(isFooter ? "fr" : "br");
    return sourceRows.map(row => ({
      height: null,
      boxHeight: null,
      data: row,
      id: newId()
    }));
  };

  const currentColumns = ref(createColumns());
  const currentRows = ref(createRows(props.rows));
  const currentFooterRows = ref(createRows(props.footerRows, true));
  const headerRows = ref(createHeaderRows(currentColumns.value));

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
        c.getRowHeaderId = rowIndex => `${props.idPrefix || 'table'}-rh-${rowIndex}-${columnIndex}`;
        rowHeaders.push(c.getRowHeaderId);
      }
    });
    return rc;
  });

  watch(() => props.columns, () => {
    currentColumns.value = createColumns();
    headerRows.value = createHeaderRows(currentColumns.value);
    onChange();
  }, { deep: true });

  watch(() => props.rows, () => {
    currentRows.value = createRows(props.rows);
    onChange();
  }, { deep: true });

  watch(() => props.footerRows, () => {
    currentFooterRows.value = createRows(props.footerRows, true);
    onChange();
  }, { deep: true });

  return {
    currentColumns,
    currentRows,
    currentFooterRows,
    headerRows,
    rowColumns
  };
}
