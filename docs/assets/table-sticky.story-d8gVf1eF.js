import{I as e}from"./jsx-runtime-FaOy6XdX.js";import{useMDXComponents as t}from"./index-DIzwWG-n.js";import{M as r}from"./blocks-D98_YfqK.js";import{r as s}from"./index-vwjNkSeb.js";import"./iframe-DLKis_3v.js";import"./preload-helper-BJwshlQW.js";function n(l){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...l.components};return e(s.Fragment,{children:[e(r,{title:"API/SCSS/Table-sticky"}),`
`,e("div",{class:"type-large",children:e(i.p,{children:"For use with table-sticky plugin (vue) or other framework implementations, not output by default must be enabled."})}),`
`,e("div",{class:"wysiwyg",children:[e(i.h2,{id:"variables",children:"Variables"}),e("div",{class:"sassdoc-item",children:[e("div",{class:"sassdoc-item-header",children:[e("a",{id:"variable-config"}),e(i.h3,{id:"config",children:"$config"}),e("div",{class:"sassdoc-item-header__labels",children:[e("span",{class:"tag tag--primary",children:e("strong",{children:"Variable"})}),e("span",{class:"tag",children:[e("strong",{children:"Type"}),": Map"]})]})]}),e(i.p,{children:"Module Settings"}),e(i.pre,{children:e(i.code,{className:"language-scss",children:`$config: (
  "box-shadow": true,
  "ui-color-disabled": #6490af,
);
`})}),e("details",{children:[e("summary",{children:"File Information"}),e(i.ul,{children:[`
`,e(i.li,{children:[e(i.strong,{children:"File:"})," systems/table-sticky/_table-sticky.scss"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Group:"})," table-sticky"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Type:"})," variable"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Lines (comments):"})," 23-25"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Lines (code):"})," 27-30"]}),`
`]})]}),e(i.h4,{id:"map-properties",children:"Map Properties"}),e(i.table,{children:[e(i.thead,{children:e(i.tr,{children:[e(i.th,{style:{textAlign:"left"},children:"Name"}),e(i.th,{style:{textAlign:"left"},children:"Type"}),e(i.th,{style:{textAlign:"left"},children:"Default"}),e(i.th,{style:{textAlign:"left"},children:"Description"})]})}),e(i.tbody,{children:e(i.tr,{children:[e(i.td,{style:{textAlign:"left"},children:"box-shadow"}),e(i.td,{style:{textAlign:"left"},children:"CssValue"}),e(i.td,{style:{textAlign:"left"},children:"true"}),e(i.td,{style:{textAlign:"left"},children:"Box shadow for controls, defaults to element box-shadow"})]})})]})]}),e(i.h2,{id:"mixins",children:"Mixins"}),e("div",{class:"sassdoc-item",children:[e("div",{class:"sassdoc-item-header",children:[e("a",{id:"mixin-set"}),e(i.h3,{id:"set",children:"set()"}),e("div",{class:"sassdoc-item-header__labels",children:e("span",{class:"tag tag--primary",children:e("strong",{children:"Mixin"})})})]}),e(i.p,{children:"Change modules $config"}),e("details",{children:[e("summary",{children:"File Information"}),e(i.ul,{children:[`
`,e(i.li,{children:[e(i.strong,{children:"File:"})," systems/table-sticky/_table-sticky.scss"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Group:"})," table-sticky"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Type:"})," mixin"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Lines (comments):"})," 32-35"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Lines (code):"})," 37-39"]}),`
`]})]}),e(i.h4,{id:"examples",children:"Examples"}),e(i.pre,{children:e(i.code,{className:"language-scss",children:`@include ulu.component-table-sticky-set(( "property" : value ));
`})}),e(i.h4,{id:"parameters",children:"Parameters"}),e(i.table,{children:[e(i.thead,{children:e(i.tr,{children:[e(i.th,{style:{textAlign:"left"},children:"Name"}),e(i.th,{style:{textAlign:"left"},children:"Type"}),e(i.th,{style:{textAlign:"left"},children:"Description"})]})}),e(i.tbody,{children:e(i.tr,{children:[e(i.td,{style:{textAlign:"left"},children:"$changes"}),e(i.td,{style:{textAlign:"left"},children:e(i.code,{children:"Map"})}),e(i.td,{style:{textAlign:"left"},children:"Map of changes"})]})})]}),e(i.h4,{id:"require",children:"Require"}),e(i.ul,{children:[`
`,e(i.li,{children:e(i.a,{href:"lib/components/facets-sidebar/#variable-config",children:"$config"})}),`
`]})]}),e("div",{class:"sassdoc-item",children:[e("div",{class:"sassdoc-item-header",children:[e("a",{id:"mixin-styles"}),e(i.h3,{id:"styles",children:"styles()"}),e("div",{class:"sassdoc-item-header__labels",children:e("span",{class:"tag tag--primary",children:e("strong",{children:"Mixin"})})})]}),e(i.p,{children:"Prints component styles"}),e("details",{children:[e("summary",{children:"File Information"}),e(i.ul,{children:[`
`,e(i.li,{children:[e(i.strong,{children:"File:"})," systems/table-sticky/_table-sticky.scss"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Group:"})," table-sticky"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Type:"})," mixin"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Lines (comments):"})," 50-53"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Lines (code):"})," 55-183"]}),`
`]})]}),e(i.h4,{id:"examples-1",children:"Examples"}),e(i.pre,{children:e(i.code,{className:"language-scss",children:`@include ulu.component-table-sticky-styles();
`})}),e(i.h4,{id:"require-1",children:"Require"}),e(i.ul,{children:[`
`,e(i.li,{children:e(i.a,{href:"lib/components/facets-sidebar/#function-get",children:"get()"})}),`
`]})]}),e(i.h2,{id:"functions",children:"Functions"}),e("div",{class:"sassdoc-item",children:[e("div",{class:"sassdoc-item-header",children:[e("a",{id:"function-get"}),e(i.h3,{id:"get",children:"get()"}),e("div",{class:"sassdoc-item-header__labels",children:e("span",{class:"tag tag--primary",children:e("strong",{children:"Function"})})})]}),e(i.p,{children:"Get a config option"}),e("details",{children:[e("summary",{children:"File Information"}),e(i.ul,{children:[`
`,e(i.li,{children:[e(i.strong,{children:"File:"})," systems/table-sticky/_table-sticky.scss"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Group:"})," table-sticky"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Type:"})," function"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Lines (comments):"})," 41-44"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Lines (code):"})," 46-49"]}),`
`]})]}),e(i.h4,{id:"examples-2",children:"Examples"}),e(i.pre,{children:e(i.code,{className:"language-scss",children:`@include ulu.component-table-sticky-get("property");
`})}),e(i.h4,{id:"parameters-1",children:"Parameters"}),e(i.table,{children:[e(i.thead,{children:e(i.tr,{children:[e(i.th,{style:{textAlign:"left"},children:"Name"}),e(i.th,{style:{textAlign:"left"},children:"Type"}),e(i.th,{style:{textAlign:"left"},children:"Description"})]})}),e(i.tbody,{children:e(i.tr,{children:[e(i.td,{style:{textAlign:"left"},children:"$name"}),e(i.td,{style:{textAlign:"left"},children:e(i.code,{children:"Map"})}),e(i.td,{style:{textAlign:"left"},children:"Name of property"})]})})]}),e(i.h4,{id:"require-2",children:"Require"}),e(i.ul,{children:[`
`,e(i.li,{children:e(i.a,{href:"lib/components/facets-sidebar/#variable-config",children:"$config"})}),`
`]})]})]})]})}function g(l={}){const{wrapper:i}={...t(),...l.components};return i?e(i,{...l,children:e(n,{...l})}):n(l)}const p=[];export{p as __namedExportsOrder,g as default};
