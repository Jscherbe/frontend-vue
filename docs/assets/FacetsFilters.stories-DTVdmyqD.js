import{a1 as p,a2 as u,a3 as F,z as m}from"./iframe-DnXSiSwu.js";import{u as f,m as c}from"./_mock-data--q0qPw85.js";import"./preload-helper-BJwshlQW.js";const S={},r=[{name:"Category",uid:"category",open:!0,multiple:!0},{name:"Author",uid:"author",open:!0}],n=e=>{const o=m(e.items),{facets:l,handleFacetChange:i}=f(o,{facetFields:e.facetFields});return{args:e,facets:l,handleFacetChange:i}},t=e=>({components:{UluFacetsFilterLists:p},setup:()=>n(e),template:'<UluFacetsFilterLists :facets="facets" @facet-change="handleFacetChange" />'});t.args={items:c,facetFields:r};const s=e=>({components:{UluFacetsFilterSelects:u},setup:()=>n(e),template:'<UluFacetsFilterSelects :facets="facets" @facet-change="handleFacetChange" />'});s.args={items:c,facetFields:r};const a=e=>({components:{UluFacetsFilterPopovers:F},setup:()=>n(e),template:'<UluFacetsFilterPopovers :facets="facets" @facet-change="handleFacetChange" />'});a.args={items:c,facetFields:r};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
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
})`,...a.parameters?.docs?.source}}};const U=["FilterLists","FilterSelects","FilterPopovers"];export{t as FilterLists,a as FilterPopovers,s as FilterSelects,U as __namedExportsOrder,S as default};
