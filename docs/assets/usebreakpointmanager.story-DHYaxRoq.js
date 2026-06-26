import{I as e}from"./jsx-runtime-DIjDyuc2.js";import{useMDXComponents as i}from"./index-DIzwWG-n.js";import{M as o}from"./blocks-Bw-NIlPO.js";import{r as a}from"./index-vwjNkSeb.js";import"./iframe-hUBpraf2.js";import"./preload-helper-BJwshlQW.js";function t(r){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...r.components};return e(a.Fragment,{children:[e(o,{title:"API/JS/useBreakpointManager"}),`
`,e(n.h1,{id:"usebreakpointmanager",children:"useBreakpointManager"}),`
`,e("a",{name:"module_useBreakpointManager"}),`
`,e(n.h2,{id:"usebreakpointmanager-1",children:"useBreakpointManager"}),`
`,e("a",{name:"module_useBreakpointManager.useBreakpointManager"}),`
`,e(n.h3,{id:"usebreakpointmanagerusebreakpointmanageroptions--object",children:["useBreakpointManager.useBreakpointManager(options) ⇒ ",e(n.code,{children:"Object"})]}),`
`,e(n.p,{children:["A composable that provides a reactive interface to the ",e(n.code,{children:"@ulu/frontend/js/ui/breakpoints.js"}),` library.
It manages breakpoint state and provides reactive variables for the active breakpoint and resize direction.
This is intended for standalone use; for app-wide integration, use the `,e(n.code,{children:"breakpointsPlugin"}),"."]}),`
`,e(n.p,{children:[e(n.strong,{children:"Kind"}),": static method of ",e(n.a,{href:"#module_useBreakpointManager",children:e(n.code,{children:"useBreakpointManager"})}),e(n.br,{}),`
`,e(n.strong,{children:"Returns"}),": ",e(n.code,{children:"Object"})," - An object containing reactive refs for:"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"breakpointManager"}),": The ",e(n.code,{children:"BreakpointManager"})," instance."]}),`
`,e(n.li,{children:[e(n.code,{children:"breakpointActive"}),": The name of the currently active breakpoint."]}),`
`,e(n.li,{children:[e(n.code,{children:"breakpointDirection"}),": The direction of the last resize (",e(n.code,{children:"'up'"})," or ",e(n.code,{children:"'down'"}),")."]}),`
`]}),`
`,e(n.table,{children:[e(n.thead,{children:e(n.tr,{children:[e(n.th,{children:"Param"}),e(n.th,{children:"Type"}),e(n.th,{children:"Default"}),e(n.th,{children:"Description"})]})}),e(n.tbody,{children:[e(n.tr,{children:[e(n.td,{children:"options"}),e(n.td,{children:e(n.code,{children:"object"})}),e(n.td,{}),e(n.td,{children:"Configuration options."})]}),e(n.tr,{children:[e(n.td,{children:"[options.initialValue]"}),e(n.td,{children:e(n.code,{children:"string"})}),e(n.td,{children:e(n.code,{children:"null"})}),e(n.td,{children:"Initial value for the active breakpoint, useful for SSR."})]}),e(n.tr,{children:[e(n.td,{children:"[options.onReady]"}),e(n.td,{children:e(n.code,{children:"function"})}),e(n.td,{}),e(n.td,{children:["A callback function that receives the ",e(n.code,{children:"BreakpointManager"})," instance once it's initialized."]})]}),e(n.tr,{children:[e(n.td,{children:"[options.plugin]"}),e(n.td,{children:e(n.code,{children:"object"})}),e(n.td,{}),e(n.td,{children:["Options to pass directly to the underlying ",e(n.code,{children:"BreakpointManager"})," library."]})]})]})]})]})}function u(r={}){const{wrapper:n}={...i(),...r.components};return n?e(n,{...r,children:e(t,{...r})}):t(r)}const b=[];export{b as __namedExportsOrder,u as default};
