import{I as n}from"./jsx-runtime-BE94leSr.js";import{useMDXComponents as t}from"./index-DIzwWG-n.js";import{r as l}from"./index-vwjNkSeb.js";import"./iframe-Cd2AvOWl.js";import"./preload-helper-BJwshlQW.js";function o(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return n(l.Fragment,{children:[n(e.h1,{id:"usetabledata",children:"useTableData"}),`
`,n(e.p,{children:["A composable for managing and normalizing table data structures. It is used internally by ",n(e.code,{children:"UluTable"})," and ",n(e.code,{children:"UluTableSticky"})," to handle complex nested column logic, identifier creation, and accessibility attributes."]}),`
`,n(e.p,{children:["While primarily an internal utility, you can use it to build highly custom table implementations that adhere to the standard ",n(e.code,{children:"columns"})," and ",n(e.code,{children:"rows"})," data API used by the ULU library."]}),`
`,n(e.h2,{id:"usage",children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-html",children:`  <script setup>
  import { useTableData } from '@ulu/frontend-vue';

  const props = defineProps({
    columns: Array,
    rows: Array,
    footerRows: Array,
    idPrefix: { type: String, default: 'my-custom-table' }
  });

  const handleDataChange = () => {
    console.log('Table data has been updated!');
  };

  const { 
    currentColumns, 
    currentRows, 
    currentFooterRows, 
    headerRows, 
    rowColumns 
  } = useTableData(props, handleDataChange);
<\/script>

<template>
  <table>
    <thead>
      <tr v-for="(row, rowIndex) in headerRows" :key="rowIndex">
        <th 
          v-for="(column, colIndex) in row.columns" 
          :key="colIndex"
          :id="column.id"
          :rowspan="column.rowspan"
          :colspan="column.colspan"
        >
          {{ column.title }}
        </th>
      </tr>
    </thead>
    <!-- Custom body rendering using rowColumns and currentRows -->
  </table>
</template>
`})}),`
`,n(e.h2,{id:"parameters",children:"Parameters"}),`
`,n(e.p,{children:"The composable accepts two parameters:"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[n(e.strong,{children:[n(e.code,{children:"props"})," (Object)"]}),": An object (usually your component's props) containing the following optional properties:",`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"columns"})," (Array): The raw column configuration array. Supports nested columns for complex headers."]}),`
`,n(e.li,{children:[n(e.code,{children:"rows"})," (Array): The raw data rows."]}),`
`,n(e.li,{children:[n(e.code,{children:"footerRows"})," (Array): Raw data rows intended for the table footer."]}),`
`,n(e.li,{children:[n(e.code,{children:"idPrefix"})," (String): A prefix used when generating unique IDs for table headers and cells."]}),`
`]}),`
`]}),`
`,n(e.li,{children:[n(e.strong,{children:[n(e.code,{children:"onChange"})," (Function)"]}),": An optional callback function that is triggered whenever the ",n(e.code,{children:"columns"}),", ",n(e.code,{children:"rows"}),", or ",n(e.code,{children:"footerRows"})," deeply change. Useful for triggering layout recalculations (like in ",n(e.code,{children:"UluTableSticky"}),")."]}),`
`]}),`
`,n(e.h2,{id:"returns",children:"Returns"}),`
`,n(e.p,{children:"The composable returns an object containing reactive references:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:[n(e.code,{children:"currentColumns"})," (Ref Array)"]}),": A deeply cloned and normalized version of the ",n(e.code,{children:"columns"})," prop. Each column has unique IDs and parent references attached."]}),`
`,n(e.li,{children:[n(e.strong,{children:[n(e.code,{children:"headerRows"})," (Ref Array)"]}),": An array of row arrays, calculated based on the maximum depth of nested columns. Used to render the ",n(e.code,{children:"<thead>"})," with correct ",n(e.code,{children:"colspan"})," and ",n(e.code,{children:"rowspan"})," values."]}),`
`,n(e.li,{children:[n(e.strong,{children:[n(e.code,{children:"rowColumns"})," (ComputedRef Array)"]}),': A flat array representing only the deepest "leaf" columns. Used to iterate over data cells in the ',n(e.code,{children:"<tbody>"}),". Includes utility methods for generating ",n(e.code,{children:"headers"})," attributes."]}),`
`,n(e.li,{children:[n(e.strong,{children:[n(e.code,{children:"currentRows"})," (Ref Array)"]}),": Normalized rows containing unique IDs and wrapped ",n(e.code,{children:"data"}),"."]}),`
`,n(e.li,{children:[n(e.strong,{children:[n(e.code,{children:"currentFooterRows"})," (Ref Array)"]}),": Normalized footer rows containing unique IDs and wrapped ",n(e.code,{children:"data"}),"."]}),`
`]})]})}function h(r={}){const{wrapper:e}={...t(),...r.components};return e?n(e,{...r,children:n(o,{...r})}):o(r)}const u=[];export{u as __namedExportsOrder,h as default};
