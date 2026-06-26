import{I as e}from"./jsx-runtime-2oDPX5Fm.js";import{useMDXComponents as r}from"./index-DIzwWG-n.js";import{M as t}from"./blocks-B9YWWmI-.js";import{r as d}from"./index-vwjNkSeb.js";import"./iframe-BrHxbdoU.js";import"./preload-helper-BJwshlQW.js";function l(n){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...n.components};return e(d.Fragment,{children:[e(t,{title:"API/JS/useTableData"}),`
`,e(a.h1,{id:"usetabledata",children:"useTableData"}),`
`,e("a",{name:"module_useTableData"}),`
`,e(a.h2,{id:"usetabledata-1",children:"useTableData"}),`
`,e(a.ul,{children:[`
`,e(a.li,{children:[e(a.a,{href:"#module_useTableData",children:"useTableData"}),`
`,e(a.ul,{children:[`
`,e(a.li,{children:[e(a.a,{href:"#module_useTableData.useTableData",children:".useTableData(props, [onChange])"}),`
`,e(a.ul,{children:[`
`,e(a.li,{children:e(a.a,{href:"#module_useTableData.useTableData..rowColumns",children:"~rowColumns"})}),`
`,e(a.li,{children:e(a.a,{href:"#module_useTableData.useTableData..createColumns",children:"~createColumns()"})}),`
`,e(a.li,{children:e(a.a,{href:"#module_useTableData.useTableData..maxColumnChildren",children:"~maxColumnChildren()"})}),`
`,e(a.li,{children:[e(a.a,{href:"#module_useTableData.useTableData..createHeaderRows",children:"~createHeaderRows()"}),`
`,e(a.ul,{children:[`
`,e(a.li,{children:e(a.a,{href:"#module_useTableData.useTableData..createHeaderRows..setInRows",children:"~setInRows()"})}),`
`]}),`
`]}),`
`,e(a.li,{children:e(a.a,{href:"#module_useTableData.useTableData..createRows",children:"~createRows()"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e("a",{name:"module_useTableData.useTableData"}),`
`,e(a.h3,{id:"usetabledatausetabledataprops-onchange",children:"useTableData.useTableData(props, [onChange])"}),`
`,e(a.p,{children:`Composable for managing and normalizing table data structures.
Generates rows, columns, and accessibility attributes for complex tables.`}),`
`,e(a.p,{children:[e(a.strong,{children:"Kind"}),": static method of ",e(a.a,{href:"#module_useTableData",children:e(a.code,{children:"useTableData"})})]}),`
`,e(a.table,{children:[e(a.thead,{children:e(a.tr,{children:[e(a.th,{children:"Param"}),e(a.th,{children:"Type"}),e(a.th,{children:"Description"})]})}),e(a.tbody,{children:[e(a.tr,{children:[e(a.td,{children:"props"}),e(a.td,{children:e(a.code,{children:"Object"})}),e(a.td,{children:"The component props containing columns, rows, footerRows, and idPrefix."})]}),e(a.tr,{children:[e(a.td,{children:"[onChange]"}),e(a.td,{children:e(a.code,{children:"function"})}),e(a.td,{children:"Optional callback triggered when rows or columns data change (useful for layout recalculation)."})]})]})]}),`
`,e(a.ul,{children:[`
`,e(a.li,{children:[e(a.a,{href:"#module_useTableData.useTableData",children:".useTableData(props, [onChange])"}),`
`,e(a.ul,{children:[`
`,e(a.li,{children:e(a.a,{href:"#module_useTableData.useTableData..rowColumns",children:"~rowColumns"})}),`
`,e(a.li,{children:e(a.a,{href:"#module_useTableData.useTableData..createColumns",children:"~createColumns()"})}),`
`,e(a.li,{children:e(a.a,{href:"#module_useTableData.useTableData..maxColumnChildren",children:"~maxColumnChildren()"})}),`
`,e(a.li,{children:[e(a.a,{href:"#module_useTableData.useTableData..createHeaderRows",children:"~createHeaderRows()"}),`
`,e(a.ul,{children:[`
`,e(a.li,{children:e(a.a,{href:"#module_useTableData.useTableData..createHeaderRows..setInRows",children:"~setInRows()"})}),`
`]}),`
`]}),`
`,e(a.li,{children:e(a.a,{href:"#module_useTableData.useTableData..createRows",children:"~createRows()"})}),`
`]}),`
`]}),`
`]}),`
`,e("a",{name:"module_useTableData.useTableData..rowColumns"}),`
`,e(a.h4,{id:"usetabledatarowcolumns",children:"useTableData~rowColumns"}),`
`,e(a.p,{children:`Used to output the body rows. This is an array of only the deepest child columns
parent column information can be accessed by reference`}),`
`,e(a.p,{children:[e(a.strong,{children:"Kind"}),": inner constant of ",e(a.a,{href:"#module_useTableData.useTableData",children:e(a.code,{children:"useTableData"})})]}),`
`,e("a",{name:"module_useTableData.useTableData..createColumns"}),`
`,e(a.h4,{id:"usetabledatacreatecolumns",children:"useTableData~createColumns()"}),`
`,e(a.p,{children:"Creates column array for internal use"}),`
`,e(a.ul,{children:[`
`,e(a.li,{children:"Avoid mutating user's prop"}),`
`,e(a.li,{children:"Current columns being used in the display"}),`
`,e(a.li,{children:"This internal copy has internal properties/structural info (like ID)"}),`
`,e(a.li,{children:"This is the copy of the users columns to avoid mutating their object"}),`
`,e(a.li,{children:"Can be used in the future for adding/removing or enabling/disabling"}),`
`]}),`
`,e(a.p,{children:[e(a.strong,{children:"Kind"}),": inner method of ",e(a.a,{href:"#module_useTableData.useTableData",children:e(a.code,{children:"useTableData"})})]}),`
`,e("a",{name:"module_useTableData.useTableData..maxColumnChildren"}),`
`,e(a.h4,{id:"usetabledatamaxcolumnchildren",children:"useTableData~maxColumnChildren()"}),`
`,e(a.p,{children:"Recursive function used as a reducer to return the deepest nested columns"}),`
`,e(a.p,{children:[e(a.strong,{children:"Kind"}),": inner method of ",e(a.a,{href:"#module_useTableData.useTableData",children:e(a.code,{children:"useTableData"})})]}),`
`,e("a",{name:"module_useTableData.useTableData..createHeaderRows"}),`
`,e(a.h4,{id:"usetabledatacreateheaderrows",children:"useTableData~createHeaderRows()"}),`
`,e(a.p,{children:`Conversion of the columns (which are nested hierarchy) to a flat list of columns
sorted by the way they need to be displayed in rows`}),`
`,e(a.ul,{children:[`
`,e(a.li,{children:"Used for nested headers"}),`
`,e(a.li,{children:"Transform nested data into row arrays"}),`
`]}),`
`,e(a.p,{children:[e(a.strong,{children:"Kind"}),": inner method of ",e(a.a,{href:"#module_useTableData.useTableData",children:e(a.code,{children:"useTableData"})})]}),`
`,e("a",{name:"module_useTableData.useTableData..createHeaderRows..setInRows"}),`
`,e(a.h5,{id:"createheaderrowssetinrows",children:"createHeaderRows~setInRows()"}),`
`,e(a.p,{children:`Function that adds columns to the rows array's based
on their depth, called recursively.`}),`
`,e(a.p,{children:[e(a.strong,{children:"Kind"}),": inner method of ",e(a.a,{href:"#module_useTableData.useTableData..createHeaderRows",children:e(a.code,{children:"createHeaderRows"})})]}),`
`,e("a",{name:"module_useTableData.useTableData..createRows"}),`
`,e(a.h4,{id:"usetabledatacreaterows",children:"useTableData~createRows()"}),`
`,e(a.p,{children:"Creates row array for internal use"}),`
`,e(a.ul,{children:[`
`,e(a.li,{children:"Avoid mutating user's prop"}),`
`]}),`
`,e(a.p,{children:[e(a.strong,{children:"Kind"}),": inner method of ",e(a.a,{href:"#module_useTableData.useTableData",children:e(a.code,{children:"useTableData"})})]})]})}function m(n={}){const{wrapper:a}={...r(),...n.components};return a?e(a,{...n,children:e(l,{...n})}):l(n)}const b=[];export{b as __namedExportsOrder,m as default};
