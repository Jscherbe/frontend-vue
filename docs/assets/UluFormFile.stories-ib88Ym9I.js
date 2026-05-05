import{c as d,k as c,d as p,G as f,o as F}from"./iframe-kPZklDD1.js";import{c as g}from"./props-DEaRQ31f.js";import{_ as U}from"./UluFormItem-DdCBjxD0.js";import"./preload-helper-BJwshlQW.js";import"./UluFormLabel-LIulJAsg.js";import"./UluFormRequiredChar--PWDqaZ9.js";const b=["multiple"],o={__name:"UluFormFile",props:{multiple:Boolean,label:{type:String,default:"Select File"},labelHidden:Boolean,noClasses:Boolean,required:Boolean},emits:["file-change"],setup(r,{emit:s}){const n=r,i=s;g(n,["label","labelHidden","required"],e=>{console.warn(`[@ulu/frontend-vue] UluFormFile: The "${e}" prop is deprecated. Please move it to the parent <UluFormItem>.`)});const a=c("uluFormFieldAttrs",null),m=d(()=>{const e=a?{...a.value}:{};return n.required&&(e.required=!0),e}),u=e=>{i("file-change",e.target.files)};return(e,v)=>(F(),p("input",f({type:"file"},m.value,{multiple:r.multiple,onChange:u}),null,16,b))}};o.__docgenInfo={exportName:"default",displayName:"UluFormFile",description:"",tags:{},props:[{name:"multiple",description:"If true, allows multiple file selection.",type:{name:"boolean"}},{name:"label",tags:{deprecated:[{description:'Use <UluFormItem label="..."> instead.',title:"deprecated"}]},type:{name:"string"},defaultValue:{func:!1,value:'"Select File"'}},{name:"labelHidden",tags:{deprecated:[{description:"Use <UluFormItem labelHidden> instead.",title:"deprecated"}]},type:{name:"boolean"}},{name:"noClasses",description:"If true, default classes will not be applied.",type:{name:"boolean"}},{name:"required",tags:{deprecated:[{description:"Use <UluFormItem required> instead.",title:"deprecated"}]},type:{name:"boolean"}}],events:[{name:"file-change"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/forms/UluFormFile.vue"]};const j={component:o,tags:["autodocs"],argTypes:{label:{control:"text"},labelHidden:{control:"boolean"},multiple:{control:"boolean"},inputAttrs:{control:"object"},required:{control:"boolean"}}},t={render:r=>({components:{UluFormItem:U,UluFormFile:o},setup(){return{args:r}},template:`
      <div class="form-theme">
        <UluFormItem layout="file">
          <UluFormFile v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{label:"Upload a file"}},l={...t,args:{...t.args,required:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
        <UluFormItem layout="file">
          <UluFormFile v-bind="args" />
        </UluFormItem>
      </div>
    \`
  }),
  args: {
    label: 'Upload a file'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    required: true
  }
}`,...l.parameters?.docs?.source}}};const x=["Default","Required"];export{t as Default,l as Required,x as __namedExportsOrder,j as default};
