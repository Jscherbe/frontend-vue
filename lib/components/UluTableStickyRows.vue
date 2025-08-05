<template>
  <tr
    v-for="(row, rowIndex) in rows"
    :key="`br-${ rowIndex }`"
    :id="optionalAttr(isActual && row.id)"
    :class="resolveClasses(classes.row, { row: row.data, rowIndex, isActual, foot })"
    :style="{
      height: row.height
    }"
  > 
    <component
      v-for="(column, index) in rowColumns"
      :is="column.rowHeader ? 'th' : 'td'"
      :id="optionalAttr(isActual && column.rowHeader && column.getRowHeaderId(rowIndex))"
      :scope="optionalAttr(isActual && column.rowHeader && 'row')"
      :key="`bc-${ index }`"
      :headers="optionalAttr(isActual && getCellHeaders(column, rowIndex))"
      :class="resolveClasses(column.class, { column, index, isActual, row, rowIndex, foot })"
      :style="{
        width: columnWidth
      }"
    >
      <template v-if="$slots[column.slot]">
        <slot 
          :name="column.slot" 
          :row="row.data" 
          :column="column"
          :rowIndex="rowIndex"
          :index="index"
          :foot="foot"
          :isActual="isActual"
        />
      </template>
      <!--  
      <component 
        v-else-if="column.component" 
        :is="column.component"
        :row="row.data" 
        :column="column"
        :rowIndex="rowIndex"
        :index="index"
      /> -->
      <div 
        v-else-if="column.html" 
        v-html="value({ row, column, rowIndex, isActual, foot })"
      ></div>
      <template v-else>
        {{ value({ row, column, rowIndex, isActual, foot }) }}
      </template>
    </component>
  </tr>
</template>

<script>
  export default {
    name: "UluTableStickyRows",
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
        default: false
      }
    }
  };
</script>