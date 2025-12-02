import{createElementBlock as c,openBlock as a,Fragment as p,createElementVNode as i,unref as s,normalizeClass as f,renderSlot as b,createTextVNode as g,createBlock as F,createCommentVNode as U,toDisplayString as h,mergeProps as y}from"vue";import{n as q}from"./iframe-VeyoJg8x.js";import{_ as v}from"./UluFormRequiredChar-BTQ7f0nP.js";import{_ as I}from"./UluFormItem-DW5hXPMH.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";const _=["for"],B=["multiple","id","required"],n={__name:"UluFormFile",props:{label:{type:String,default:"Select File"},labelHidden:Boolean,noClasses:Boolean,multiple:Boolean,inputAttrs:Object,required:Boolean},emits:["file-change"],setup(e,{emit:m}){const u=m,o=q(),d=r=>{u("file-change",r.target.files)};return(r,S)=>(a(),c(p,null,[i("label",{class:f({"hidden-visually":e.labelHidden}),for:s(o)},[b(r.$slots,"label",{},()=>[g(h(e.label),1),e.required?(a(),F(v,{key:0})):U("",!0)])],10,_),i("input",y({type:"file",onChange:d,multiple:e.multiple,id:s(o)},e.inputAttrs,{required:e.required}),null,16,B)],64))}};n.__docgenInfo={exportName:"default",displayName:"UluFormFile",description:"",tags:{},props:[{name:"label",description:"The label for the file input.",type:{name:"string"},defaultValue:{func:!1,value:'"Select File"'}},{name:"labelHidden",description:"If true, the label will be visually hidden.",type:{name:"boolean"}},{name:"noClasses",description:"If true, default classes will not be applied.",type:{name:"boolean"}},{name:"multiple",description:"If true, allows multiple file selection.",type:{name:"boolean"}},{name:"inputAttrs",description:"Additional attributes to bind to the input element.",type:{name:"object"}},{name:"required",description:"If true, the field will be required.",type:{name:"boolean"}}],events:[{name:"file-change"}],slots:[{name:"label"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/forms/UluFormFile.vue"]};const E={component:n,tags:["autodocs"],argTypes:{label:{control:"text"},labelHidden:{control:"boolean"},multiple:{control:"boolean"},inputAttrs:{control:"object"},required:{control:"boolean"}}},t={render:e=>({components:{UluFormItem:I,UluFormFile:n},setup(){return{args:e}},template:`
      <div class="form-theme">
        <UluFormItem file>
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
        <UluFormItem file>
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
}`,...l.parameters?.docs?.source}}};const P=["Default","Required"];export{t as Default,l as Required,P as __namedExportsOrder,E as default};
