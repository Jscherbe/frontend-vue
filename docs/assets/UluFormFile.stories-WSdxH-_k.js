import{B as c,d as p,b as o,e as f,q as s,n as b,m as F,F as g,o as i,j as U,a as h,f as y,t as q}from"./iframe-fc0isZdR.js";import{_ as v}from"./UluFormRequiredChar-Cj88cE9g.js";import{_ as I}from"./UluFormItem-CJSLxMsG.js";import"./preload-helper-BJwshlQW.js";const _=["for"],B=["multiple","id","required"],a={__name:"UluFormFile",props:{label:{type:String,default:"Select File"},labelHidden:Boolean,noClasses:Boolean,multiple:Boolean,inputAttrs:Object,required:Boolean},emits:["file-change"],setup(e,{emit:m}){const u=m,r=c(),d=n=>{u("file-change",n.target.files)};return(n,S)=>(i(),p(g,null,[o("label",{class:b({"hidden-visually":e.labelHidden}),for:s(r)},[f(n.$slots,"label",{},()=>[U(q(e.label),1),e.required?(i(),h(v,{key:0})):y("",!0)])],10,_),o("input",F({type:"file",onChange:d,multiple:e.multiple,id:s(r)},e.inputAttrs,{required:e.required}),null,16,B)],64))}};a.__docgenInfo={exportName:"default",displayName:"UluFormFile",description:"",tags:{},props:[{name:"label",description:"The label for the file input.",type:{name:"string"},defaultValue:{func:!1,value:'"Select File"'}},{name:"labelHidden",description:"If true, the label will be visually hidden.",type:{name:"boolean"}},{name:"noClasses",description:"If true, default classes will not be applied.",type:{name:"boolean"}},{name:"multiple",description:"If true, allows multiple file selection.",type:{name:"boolean"}},{name:"inputAttrs",description:"Additional attributes to bind to the input element.",type:{name:"object"}},{name:"required",description:"If true, the field will be required.",type:{name:"boolean"}}],events:[{name:"file-change"}],slots:[{name:"label"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/forms/UluFormFile.vue"]};const A={component:a,tags:["autodocs"],argTypes:{label:{control:"text"},labelHidden:{control:"boolean"},multiple:{control:"boolean"},inputAttrs:{control:"object"},required:{control:"boolean"}}},l={render:e=>({components:{UluFormItem:I,UluFormFile:a},setup(){return{args:e}},template:`
      <div class="form-theme">
        <UluFormItem file>
          <UluFormFile v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{label:"Upload a file"}},t={...l,args:{...l.args,required:!0}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluFormItem,
      UluFormFile
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="form-theme">
        <UluFormItem file>
          <UluFormFile v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    label: 'Upload a file'
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    required: true
  }
}`,...t.parameters?.docs?.source}}};const D=["Default","Required"];export{l as Default,t as Required,D as __namedExportsOrder,A as default};
