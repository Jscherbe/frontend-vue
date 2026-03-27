import{a as i,f as u,w as l,r as m,o as d,j as p,t as g}from"./iframe-DG8EdXDm.js";import"./preload-helper-BJwshlQW.js";const c={__name:"UluConditionalText",props:{text:[String,Number,Array,Object],element:{type:String,default:"p"}},setup(e){return(o,S)=>e.text!=null?(d(),i(m(e.element),{key:0},{default:l(()=>[p(g(e.text),1)]),_:1})):u("",!0)}};c.__docgenInfo={exportName:"default",displayName:"UluConditionalText",description:"",tags:{},props:[{name:"text",description:"Text to print in element",type:{name:"string|number|array|object"}},{name:"element",description:"Element type to render (ie. h1, h2, p, etc)",type:{name:"string"},defaultValue:{func:!1,value:'"p"'}}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/utils/UluConditionalText.vue"]};const b={component:c,tags:["autodocs"]},t={args:{text:"This text is set"}},r={args:{text:0}},s={args:{text:null}},a={args:{text:void 0}};class x{constructor(o){this.text=o}toString(){return this.text}}const n={args:{text:new x("This is a class with toString")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: "This text is set"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: 0
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: null
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: undefined
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: new toStringObject("This is a class with toString")
  }
}`,...n.parameters?.docs?.source}}};const T=["StringValue","NumberValue","NullValue","UndefinedValue","ObjectWithToString"];export{s as NullValue,r as NumberValue,n as ObjectWithToString,t as StringValue,a as UndefinedValue,T as __namedExportsOrder,b as default};
