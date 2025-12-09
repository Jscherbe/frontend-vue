import{g as u,a as l,f as d,w as m,r as p,o as g,j as x,t as f}from"./iframe-ClpBgbxC.js";import"./preload-helper-BJwshlQW.js";const i={name:"UluConditionalText",props:{text:[String,Number,Array,Object],element:{type:String,default:"p"}}};function S(c,o,n,T,b,V){return n.text!=null?(g(),l(p(n.element),{key:0},{default:m(()=>[x(f(n.text),1)]),_:1})):d("",!0)}const h=u(i,[["render",S]]);i.__docgenInfo={displayName:"UluConditionalText",description:"Print out text if set (has value)",tags:{},exportName:"default",props:[{name:"text",description:"Text to print in element",type:{name:"string|number|array|object"}},{name:"element",description:"Element type to render (ie. h1, h2, p, etc)",type:{name:"string"},defaultValue:{func:!1,value:'"p"'}}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/utils/UluConditionalText.vue"]};const j={component:h,tags:["autodocs"]},e={args:{text:"This text is set"}},t={args:{text:0}},r={args:{text:null}},s={args:{text:void 0}};class _{constructor(o){this.text=o}toString(){return this.text}}const a={args:{text:new _("This is a class with toString")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: new toStringObject("This is a class with toString")
  }
}`,...a.parameters?.docs?.source}}};const N=["StringValue","NumberValue","NullValue","UndefinedValue","ObjectWithToString"];export{r as NullValue,t as NumberValue,a as ObjectWithToString,e as StringValue,s as UndefinedValue,N as __namedExportsOrder,j as default};
