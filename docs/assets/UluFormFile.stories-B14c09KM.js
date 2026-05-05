import{c as u,k as c,d as p,G as F,o as f}from"./iframe-ssSLPBZB.js";import{c as U}from"./props-DEaRQ31f.js";import{_ as g}from"./UluFormItem-BULwJFkN.js";import"./preload-helper-BJwshlQW.js";import"./UluFormLabel-Bg4A2W7O.js";import"./UluFormRequiredChar-W2tR-32s.js";const b=["multiple"],o={__name:"UluFormFile",props:{multiple:Boolean,label:{type:String,default:"Select File"},labelHidden:Boolean,required:Boolean},emits:["file-change"],setup(r,{emit:s}){const n=r,i=s;U(n,["label","labelHidden","required"],e=>{console.warn(`[@ulu/frontend-vue] UluFormFile: The "${e}" prop is deprecated. Please move it to the parent <UluFormItem>.`)});const a=c("uluFormFieldAttrs",null),m=u(()=>{const e=a?{...a.value}:{};return n.required&&(e.required=!0),e}),d=e=>{i("file-change",e.target.files)};return(e,I)=>(f(),p("input",F({type:"file"},m.value,{multiple:r.multiple,onChange:d}),null,16,b))}};o.__docgenInfo={exportName:"default",displayName:"UluFormFile",description:"",tags:{},props:[{name:"multiple",description:"If true, allows multiple file selection.",type:{name:"boolean"}},{name:"label",description:'Deprecated: Use `<UluFormItem label="...">` instead.',tags:{deprecated:[{description:'Use <UluFormItem label="..."> instead.',title:"deprecated"}]},type:{name:"string"},defaultValue:{func:!1,value:'"Select File"'}},{name:"labelHidden",description:"Deprecated: Use `<UluFormItem labelHidden>` instead.",tags:{deprecated:[{description:"Use <UluFormItem labelHidden> instead.",title:"deprecated"}]},type:{name:"boolean"}},{name:"required",description:"Deprecated: Use <UluFormItem required> instead.",tags:{deprecated:[{description:"Use <UluFormItem required> instead.",title:"deprecated"}]},type:{name:"boolean"}}],events:[{name:"file-change"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/forms/UluFormFile.vue"]};const H={component:o,tags:["autodocs"],argTypes:{label:{control:"text"},labelHidden:{control:"boolean"},multiple:{control:"boolean"},inputAttrs:{control:"object"},required:{control:"boolean"}}},t={render:r=>({components:{UluFormItem:g,UluFormFile:o},setup(){return{args:r}},template:`
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
}`,...l.parameters?.docs?.source}}};const j=["Default","Required"];export{t as Default,l as Required,j as __namedExportsOrder,H as default};
