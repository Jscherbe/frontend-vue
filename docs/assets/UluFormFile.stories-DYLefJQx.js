import{c as u,x as c,e as p,D as d,o as f}from"./iframe-dqyhXnFM.js";import{_ as F}from"./UluFormItem-fdOIZjG_.js";import"./preload-helper-BJwshlQW.js";import"./UluFormLabel-1_5y90tg.js";import"./UluFormRequiredChar-CvX5aISe.js";const g=["multiple"],l={__name:"UluFormFile",props:{multiple:Boolean},emits:["file-change"],setup(r,{emit:s}){const a=s,n=c("uluFormFieldAttrs",null),i=u(()=>n?{...n.value}:{}),m=o=>{a("file-change",o.target.files)};return(o,U)=>(f(),p("input",d({type:"file"},i.value,{multiple:r.multiple,onChange:m}),null,16,g))}};l.__docgenInfo={exportName:"default",displayName:"UluFormFile",description:"",tags:{},props:[{name:"multiple",description:"If true, allows multiple file selection.",type:{name:"boolean"}}],events:[{name:"file-change"}],sourceFiles:["/Users/joe/Projects/Personal/Github/frontend-vue/lib/components/forms/UluFormFile.vue"]};const x={component:l,tags:["autodocs"],argTypes:{label:{control:"text"},labelHidden:{control:"boolean"},multiple:{control:"boolean"},inputAttrs:{control:"object"},required:{control:"boolean"}}},e={render:r=>({components:{UluFormItem:F,UluFormFile:l},setup(){return{args:r}},template:`
      <div class="form-theme">
        <UluFormItem layout="file">
          <UluFormFile v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{label:"Upload a file"}},t={...e,args:{...e.args,required:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    required: true
  }
}`,...t.parameters?.docs?.source}}};const y=["Default","Required"];export{e as Default,t as Required,y as __namedExportsOrder,x as default};
