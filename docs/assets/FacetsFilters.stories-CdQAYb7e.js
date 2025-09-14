import{a2 as p,a3 as m,a4 as u,z as F}from"./iframe-_onLKdbl.js";import{u as f}from"./useFacets-DoLB3vGK.js";import{m as c}from"./_mock-data-euri91_s.js";import"./preload-helper-BJwshlQW.js";const U={},r=[{name:"Category",uid:"category",open:!0,multiple:!0},{name:"Author",uid:"author",open:!0}],o=e=>{const n=F(e.items),{facets:l,handleFacetChange:i}=f(n,{facetFields:e.facetFields});return{args:e,facets:l,handleFacetChange:i}},t=e=>({components:{UluFacetsFilterLists:p},setup:()=>o(e),template:'<UluFacetsFilterLists :facets="facets" @facet-change="handleFacetChange" />'});t.args={items:c,facetFields:r};const s=e=>({components:{UluFacetsFilterSelects:m},setup:()=>o(e),template:'<UluFacetsFilterSelects :facets="facets" @facet-change="handleFacetChange" />'});s.args={items:c,facetFields:r};const a=e=>({components:{UluFacetsFilterPopovers:u},setup:()=>o(e),template:'<UluFacetsFilterPopovers :facets="facets" @facet-change="handleFacetChange" />'});a.args={items:c,facetFields:r};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacetsFilterLists
  },
  setup: () => defaultSetup(args),
  template: \`<UluFacetsFilterLists :facets="facets" @facet-change="handleFacetChange" />\`
})`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacetsFilterSelects
  },
  setup: () => defaultSetup(args),
  template: \`<UluFacetsFilterSelects :facets="facets" @facet-change="handleFacetChange" />\`
})`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacetsFilterPopovers
  },
  setup: () => defaultSetup(args),
  template: \`<UluFacetsFilterPopovers :facets="facets" @facet-change="handleFacetChange" />\`
})`,...a.parameters?.docs?.source}}};const _=["FilterLists","FilterSelects","FilterPopovers"];export{t as FilterLists,a as FilterPopovers,s as FilterSelects,_ as __namedExportsOrder,U as default};
