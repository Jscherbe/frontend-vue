import{I as e}from"./jsx-runtime-Bkv-i4bo.js";import{useMDXComponents as t}from"./index-DIzwWG-n.js";import{M as r}from"./blocks-CEFr6qqt.js";import{r as s}from"./index-vwjNkSeb.js";import"./iframe-DRLAWc5E.js";import"./preload-helper-BJwshlQW.js";function l(n){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...n.components};return e(s.Fragment,{children:[e(r,{title:"API/SCSS/Facets-sidebar"}),`
`,e("div",{class:"type-large",children:e(i.p,{children:"Basic styles for the UluFacetsSidebarLayout component"})}),`
`,e("div",{class:"wysiwyg",children:[e(i.h2,{id:"variables",children:"Variables"}),e("div",{class:"sassdoc-item",children:[e("div",{class:"sassdoc-item-header",children:[e("a",{id:"variable-config"}),e(i.h3,{id:"config",children:"$config"}),e("div",{class:"sassdoc-item-header__labels",children:[e("span",{class:"tag tag--primary",children:e("strong",{children:"Variable"})}),e("span",{class:"tag",children:[e("strong",{children:"Type"}),": Map"]})]})]}),e(i.p,{children:"Module Settings"}),e(i.pre,{children:e(i.code,{className:"language-scss",children:`$config: (
  "template-columns" : (max(25%, 300px) 1fr),
  "gap" : 2rem
);
`})}),e("details",{children:[e("summary",{children:"File Information"}),e(i.ul,{children:[`
`,e(i.li,{children:[e(i.strong,{children:"File:"})," systems/facets/_facets-sidebar.scss"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Group:"})," facets-sidebar"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Type:"})," variable"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Lines (comments):"})," 12-15"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Lines (code):"})," 17-20"]}),`
`]})]}),e(i.h4,{id:"map-properties",children:"Map Properties"}),e(i.table,{children:[e(i.thead,{children:e(i.tr,{children:[e(i.th,{style:{textAlign:"left"},children:"Name"}),e(i.th,{style:{textAlign:"left"},children:"Type"}),e(i.th,{style:{textAlign:"left"},children:"Default"}),e(i.th,{style:{textAlign:"left"},children:"Description"})]})}),e(i.tbody,{children:[e(i.tr,{children:[e(i.td,{style:{textAlign:"left"},children:"template-columns"}),e(i.td,{style:{textAlign:"left"},children:"List"}),e(i.td,{style:{textAlign:"left"},children:"(250px 1fr)"}),e(i.td,{style:{textAlign:"left"},children:"template columns for sidebar/body widths"})]}),e(i.tr,{children:[e(i.td,{style:{textAlign:"left"},children:"gap"}),e(i.td,{style:{textAlign:"left"},children:"CssUnit"}),e(i.td,{style:{textAlign:"left"},children:"2rem"}),e(i.td,{style:{textAlign:"left"},children:"Gap for grid"})]})]})]})]}),e(i.h2,{id:"mixins",children:"Mixins"}),e("div",{class:"sassdoc-item",children:[e("div",{class:"sassdoc-item-header",children:[e("a",{id:"mixin-set"}),e(i.h3,{id:"set",children:"set()"}),e("div",{class:"sassdoc-item-header__labels",children:e("span",{class:"tag tag--primary",children:e("strong",{children:"Mixin"})})})]}),e(i.p,{children:"Change modules $config"}),e("details",{children:[e("summary",{children:"File Information"}),e(i.ul,{children:[`
`,e(i.li,{children:[e(i.strong,{children:"File:"})," systems/facets/_facets-sidebar.scss"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Group:"})," facets-sidebar"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Type:"})," mixin"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Lines (comments):"})," 22-25"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Lines (code):"})," 27-29"]}),`
`]})]}),e(i.h4,{id:"examples",children:"Examples"}),e(i.pre,{children:e(i.code,{className:"language-scss",children:`@include ulu.component-facets-sidebar-set(( "property" : value ));
`})}),e(i.h4,{id:"parameters",children:"Parameters"}),e(i.table,{children:[e(i.thead,{children:e(i.tr,{children:[e(i.th,{style:{textAlign:"left"},children:"Name"}),e(i.th,{style:{textAlign:"left"},children:"Type"}),e(i.th,{style:{textAlign:"left"},children:"Description"})]})}),e(i.tbody,{children:e(i.tr,{children:[e(i.td,{style:{textAlign:"left"},children:"$changes"}),e(i.td,{style:{textAlign:"left"},children:e(i.code,{children:"Map"})}),e(i.td,{style:{textAlign:"left"},children:"Map of changes"})]})})]}),e(i.h4,{id:"require",children:"Require"}),e(i.ul,{children:[`
`,e(i.li,{children:e(i.a,{href:"lib/components/facets-sidebar/#variable-config",children:"$config"})}),`
`]})]}),e("div",{class:"sassdoc-item",children:[e("div",{class:"sassdoc-item-header",children:[e("a",{id:"mixin-styles"}),e(i.h3,{id:"styles",children:"styles()"}),e("div",{class:"sassdoc-item-header__labels",children:e("span",{class:"tag tag--primary",children:e("strong",{children:"Mixin"})})})]}),e(i.p,{children:"Prints component styles"}),e("details",{children:[e("summary",{children:"File Information"}),e(i.ul,{children:[`
`,e(i.li,{children:[e(i.strong,{children:"File:"})," systems/facets/_facets-sidebar.scss"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Group:"})," facets-sidebar"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Type:"})," mixin"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Lines (comments):"})," 40-43"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Lines (code):"})," 45-58"]}),`
`]})]}),e(i.h4,{id:"examples-1",children:"Examples"}),e(i.pre,{children:e(i.code,{className:"language-scss",children:`@include ulu.component-facets-sidebar-styles();
`})}),e(i.h4,{id:"require-1",children:"Require"}),e(i.ul,{children:[`
`,e(i.li,{children:e(i.a,{href:"lib/components/facets-sidebar/#function-get",children:"get()"})}),`
`]})]}),e(i.h2,{id:"functions",children:"Functions"}),e("div",{class:"sassdoc-item",children:[e("div",{class:"sassdoc-item-header",children:[e("a",{id:"function-get"}),e(i.h3,{id:"get",children:"get()"}),e("div",{class:"sassdoc-item-header__labels",children:e("span",{class:"tag tag--primary",children:e("strong",{children:"Function"})})})]}),e(i.p,{children:"Get a config option"}),e("details",{children:[e("summary",{children:"File Information"}),e(i.ul,{children:[`
`,e(i.li,{children:[e(i.strong,{children:"File:"})," systems/facets/_facets-sidebar.scss"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Group:"})," facets-sidebar"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Type:"})," function"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Lines (comments):"})," 31-34"]}),`
`,e(i.li,{children:[e(i.strong,{children:"Lines (code):"})," 36-38"]}),`
`]})]}),e(i.h4,{id:"examples-2",children:"Examples"}),e(i.pre,{children:e(i.code,{className:"language-scss",children:`@include ulu.component-facets-sidebar-get("property");
`})}),e(i.h4,{id:"parameters-1",children:"Parameters"}),e(i.table,{children:[e(i.thead,{children:e(i.tr,{children:[e(i.th,{style:{textAlign:"left"},children:"Name"}),e(i.th,{style:{textAlign:"left"},children:"Type"}),e(i.th,{style:{textAlign:"left"},children:"Description"})]})}),e(i.tbody,{children:e(i.tr,{children:[e(i.td,{style:{textAlign:"left"},children:"$name"}),e(i.td,{style:{textAlign:"left"},children:e(i.code,{children:"Map"})}),e(i.td,{style:{textAlign:"left"},children:"Name of property"})]})})]}),e(i.h4,{id:"require-2",children:"Require"}),e(i.ul,{children:[`
`,e(i.li,{children:e(i.a,{href:"lib/components/facets-sidebar/#variable-config",children:"$config"})}),`
`]})]})]})]})}function g(n={}){const{wrapper:i}={...t(),...n.components};return i?e(i,{...n,children:e(l,{...n})}):l(n)}const p=[];export{p as __namedExportsOrder,g as default};
