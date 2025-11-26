import{createElementBlock as s,openBlock as o,normalizeClass as a,createElementVNode as t,Fragment as i,renderList as c}from"vue";const l={class:"spoke-spinner__spinner"},n={__name:"UluSpokeSpinner",props:{type:String},setup(r){return(m,d)=>(o(),s("div",{class:a(["spoke-spinner",{[`spoke-spinner--${r.type}`]:r.type}])},[t("div",l,[(o(),s(i,null,c(12,p=>t("div",{key:p})),64))])],2))}};n.__docgenInfo={exportName:"default",displayName:"UluSpokeSpinner",description:"",tags:{},props:[{name:"type",description:"Type modifier for spinner (ie match scss style name)",type:{name:"string"}}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluSpokeSpinner.vue"]};const S={component:n,tags:["autodocs"],argTypes:{size:{control:"select",options:["small"]}}},e={render:()=>({components:{UluSpokeSpinner:n},template:`
      <UluSpokeSpinner v-bind="args" />
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UluSpokeSpinner
    },
    template: \`
      <UluSpokeSpinner v-bind="args" />
    \`
  })
}`,...e.parameters?.docs?.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,S as default};
