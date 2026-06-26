import{c as u,x as c,e as p,D as d,o as f}from"./iframe-DLKis_3v.js";import{_ as F}from"./UluFormItem-CXIne58c.js";import"./preload-helper-BJwshlQW.js";import"./UluFormLabel-CrsAh-lu.js";import"./UluFormRequiredChar-tA_hkuQf.js";const g=["multiple"],n={__name:"UluFormFile",props:{multiple:Boolean},emits:["file-change"],setup(t,{emit:s}){const a=s,l=c("uluFormFieldAttrs",null),m=u(()=>l?{...l.value}:{}),i=o=>{a("file-change",o.target.files)};return(o,U)=>(f(),p("input",d({type:"file"},m.value,{multiple:t.multiple,onChange:i}),null,16,g))}};n.__docgenInfo={exportName:"default",displayName:"UluFormFile",description:"",tags:{},props:[{name:"multiple",description:"If true, allows multiple file selection.",type:{name:"boolean"}}],events:[{name:"file-change"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/forms/UluFormFile.vue"]};const x={component:n,tags:["autodocs"],argTypes:{label:{control:"text"},labelHidden:{control:"boolean"},multiple:{control:"boolean"},inputAttrs:{control:"object"},required:{control:"boolean"}}},e={render:t=>({components:{UluFormItem:F,UluFormFile:n},setup(){return{args:t}},template:`
      <div class="form-theme">
        <UluFormItem layout="file">
          <UluFormFile v-bind="args" />
        </UluFormItem>
      </div>
    `}),args:{label:"Upload a file"}},r={...e,args:{...e.args,required:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    required: true
  }
}`,...r.parameters?.docs?.source}}};const y=["Default","Required"];export{e as Default,r as Required,y as __namedExportsOrder,x as default};
