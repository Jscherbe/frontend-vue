import{computed as g,createElementBlock as b,openBlock as F,renderSlot as z,createVNode as U,createElementVNode as N,createTextVNode as k,createBlock as w,createCommentVNode as x,toDisplayString as D}from"vue";import{_ as h}from"./iframe-DYOmpgae.js";import{_ as v}from"./UluTag-BouMMBBI.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";const _=["href","download"],B={class:"margin-left-small-x"},p={__name:"UluFileDisplay",props:{file:{required:!0,type:Object},icon:{type:String,default:"type:file"},noFileSize:Boolean},setup(e){const u=e,y=g(()=>typeof window>"u"?"":window.URL.createObjectURL(u.file)),f=g(()=>{const{size:a}=u.file,c=a/1e6,d=a/1e3,m=S=>parseFloat(S.toFixed(2));return c>1?`${m(c)}Mb`:d>1?`${m(d)}Kb`:`${m(a)}B`});return(a,c)=>(F(),b("a",{class:"layout-flex-baseline",href:y.value,download:e.file.name},[z(a.$slots,"default",{fileName:e.file.name,fileSize:f.value},()=>[U(h,{class:"ui-icon",icon:e.icon},null,8,["icon"]),N("span",B,[k(D(e.file.name)+" ",1),e.noFileSize?x("",!0):(F(),w(v,{key:0,text:f.value,small:"",outline:""},null,8,["text"]))])])],8,_))}};p.__docgenInfo={exportName:"default",displayName:"UluFileDisplay",description:"",tags:{},props:[{name:"file",description:"The File object to be displayed.",type:{name:"object"},required:!0},{name:"icon",description:"The icon to display next to the file name.",type:{name:"string"},defaultValue:{func:!1,value:'"type:file"'}},{name:"noFileSize",description:"If true, the file size will not be displayed.",type:{name:"boolean"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"fileName",title:"binding"},{name:"fileSize",title:"binding"}]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/forms/UluFileDisplay.vue"]};const K={component:p,tags:["autodocs"]},s=new File([new ArrayBuffer(12345)],"example-document.pdf",{type:"application/pdf"}),t={args:{file:s}},L=new File([new ArrayBuffer(500)],"small-file.txt",{type:"text/plain"}),i={args:{file:L}},j=new File([new ArrayBuffer(5e6)],"large-video.mp4",{type:"video/mp4"}),l={args:{file:j}},r={args:{file:s,noFileSize:!0}},o={args:{file:s,icon:"star"}},n={render:e=>({components:{UluFileDisplay:p},setup(){return{args:e}},template:`
      <UluFileDisplay v-bind="args">
        <template #default="{ fileName, fileSize }">
          <em>{{ fileName }} ({{ fileSize }})</em>
        </template>
      </UluFileDisplay>
    `}),args:{file:s}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    file: mockFile
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    file: mockFileSmall
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    file: mockFileLarge
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    file: mockFile,
    noFileSize: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    file: mockFile,
    icon: "star"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluFileDisplay
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluFileDisplay v-bind="args">
        <template #default="{ fileName, fileSize }">
          <em>{{ fileName }} ({{ fileSize }})</em>
        </template>
      </UluFileDisplay>
    \`
  }),
  args: {
    file: mockFile
  }
}`,...n.parameters?.docs?.source}}};const M=["Default","SmallFile","LargeFile","NoFileSize","CustomIcon","CustomSlot"];export{o as CustomIcon,n as CustomSlot,t as Default,l as LargeFile,r as NoFileSize,i as SmallFile,M as __namedExportsOrder,K as default};
