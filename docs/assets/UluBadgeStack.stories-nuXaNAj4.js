import{d as t,f as m,F as l,g as c,o as a,x as d,m as f}from"./iframe-B13WdpPx.js";import{_ as p}from"./UluBadge-YsEAhs2r.js";import"./preload-helper-BJwshlQW.js";const u={key:0,class:"badge-stack"},n={__name:"UluBadgeStack",props:{items:Array},setup(r){return(g,x)=>r.items?.length?(a(),t("ul",u,[(a(!0),t(l,null,c(r.items,(i,o)=>(a(),t("li",{class:"badge-stack__item",key:o},[d(p,f({ref_for:!0},i),null,16)]))),128))])):m("",!0)}};n.__docgenInfo={exportName:"default",displayName:"UluBadgeStack",description:"",tags:{},props:[{name:"items",description:"Array of props for each badge",type:{name:"array"}}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluBadgeStack.vue"]};const k={component:n,args:{items:[{text:"AL",size:"small"},{text:"BET",modifier:"secondary",size:"small"},{text:"GM",modifier:"tertiary",size:"small"}]},argTypes:{items:{control:"object",description:"An array of objects, where each object is the set of props for a UluBadge component."}}},e={},s={args:{items:[{text:"PI",size:"small"},{text:"SE",modifier:"secondary",size:"small"},{text:"TX",modifier:"success",size:"small"},{text:"DO",modifier:"danger",size:"small"},{text:"WO",modifier:"warning",size:"small"},{text:"IF",modifier:"info",size:"small"},{text:"LG",modifier:"light",size:"small"},{text:"DK",modifier:"dark",size:"small"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'PI',
      size: 'small'
    }, {
      text: 'SE',
      modifier: 'secondary',
      size: 'small'
    }, {
      text: 'TX',
      modifier: 'success',
      size: 'small'
    }, {
      text: 'DO',
      modifier: 'danger',
      size: 'small'
    }, {
      text: 'WO',
      modifier: 'warning',
      size: 'small'
    }, {
      text: 'IF',
      modifier: 'info',
      size: 'small'
    }, {
      text: 'LG',
      modifier: 'light',
      size: 'small'
    }, {
      text: 'DK',
      modifier: 'dark',
      size: 'small'
    }]
  }
}`,...s.parameters?.docs?.source}}};const h=["Default","ManyBadges"];export{e as Default,s as ManyBadges,h as __namedExportsOrder,k as default};
