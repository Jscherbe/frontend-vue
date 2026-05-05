import{d as t,f as m,F as l,h as c,o as r,m as d,B as f}from"./fontawesome-DyrJdE5N.js";import{_ as p}from"./UluBadge-OLZgUFuv.js";import"./iframe-DFeB4tIX.js";import"./preload-helper-BJwshlQW.js";const u={key:0,class:"badge-stack"},i={__name:"UluBadgeStack",props:{items:Array},setup(a){return(g,x)=>a.items?.length?(r(),t("ul",u,[(r(!0),t(l,null,c(a.items,(n,o)=>(r(),t("li",{class:"badge-stack__item",key:o},[d(p,f({ref_for:!0},n),null,16)]))),128))])):m("",!0)}};i.__docgenInfo={exportName:"default",displayName:"UluBadgeStack",description:"",tags:{},props:[{name:"items",description:"Array of props for each badge",type:{name:"array"}}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluBadgeStack.vue"]};const h={component:i,args:{items:[{text:"AL",size:"small"},{text:"BET",modifier:"secondary",size:"small"},{text:"GM",modifier:"tertiary",size:"small"}]},argTypes:{items:{control:"object",description:"An array of objects, where each object is the set of props for a UluBadge component."}}},e={},s={args:{items:[{text:"PI",size:"small"},{text:"SE",modifier:"secondary",size:"small"},{text:"TX",modifier:"success",size:"small"},{text:"DO",modifier:"danger",size:"small"},{text:"WO",modifier:"warning",size:"small"},{text:"IF",modifier:"info",size:"small"},{text:"LG",modifier:"light",size:"small"},{text:"DK",modifier:"dark",size:"small"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const B=["Default","ManyBadges"];export{e as Default,s as ManyBadges,B as __namedExportsOrder,h as default};
