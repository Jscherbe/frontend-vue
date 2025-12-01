import{createBlock as u,createCommentVNode as l,openBlock as m,resolveDynamicComponent as p,withCtx as d,createTextVNode as g,toDisplayString as x}from"vue";import{a as f}from"./iframe-DYOmpgae.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";const i={name:"UluConditionalText",props:{text:[String,Number,Array,Object],element:{type:String,default:"p"}}};function S(c,o,a,T,b,V){return a.text!=null?(m(),u(p(a.element),{key:0},{default:d(()=>[g(x(a.text),1)]),_:1})):l("",!0)}const h=f(i,[["render",S]]);i.__docgenInfo={displayName:"UluConditionalText",description:"Print out text if set (has value)",tags:{},exportName:"default",props:[{name:"text",description:"Text to print in element",type:{name:"string|number|array|object"}},{name:"element",description:"Element type to render (ie. h1, h2, p, etc)",type:{name:"string"},defaultValue:{func:!1,value:'"p"'}}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/utils/UluConditionalText.vue"]};const k={component:h,tags:["autodocs"]},e={args:{text:"This text is set"}},t={args:{text:0}},r={args:{text:null}},s={args:{text:void 0}};class _{constructor(o){this.text=o}toString(){return this.text}}const n={args:{text:new _("This is a class with toString")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    text: "This text is set"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: 0
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: null
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: undefined
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: new toStringObject("This is a class with toString")
  }
}`,...n.parameters?.docs?.source}}};const P=["StringValue","NumberValue","NullValue","UndefinedValue","ObjectWithToString"];export{r as NullValue,t as NumberValue,n as ObjectWithToString,e as StringValue,s as UndefinedValue,P as __namedExportsOrder,k as default};
