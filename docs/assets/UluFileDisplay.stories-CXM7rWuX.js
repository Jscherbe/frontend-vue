import{c as g,e as b,r as z,o as F,l as k,k as N,_ as U,f as w,a as x,d as D,t as h}from"./iframe-dqyhXnFM.js";import{_ as v}from"./UluTag-BxcBe5aw.js";import"./preload-helper-BJwshlQW.js";const _=["href","download"],B={class:"margin-left-small-x"},u={__name:"UluFileDisplay",props:{file:{required:!0,type:Object},icon:{type:String,default:"type:file"},noFileSize:Boolean},setup(e){const p=e,y=g(()=>typeof window>"u"?"":window.URL.createObjectURL(p.file)),f=g(()=>{const{size:a}=p.file,c=a/1e6,d=a/1e3,m=S=>parseFloat(S.toFixed(2));return c>1?`${m(c)}Mb`:d>1?`${m(d)}Kb`:`${m(a)}B`});return(a,c)=>(F(),b("a",{class:"layout-flex-baseline",href:y.value,download:e.file.name},[z(a.$slots,"default",{fileName:e.file.name,fileSize:f.value},()=>[k(U,{class:"ui-icon",icon:e.icon},null,8,["icon"]),N("span",B,[w(h(e.file.name)+" ",1),e.noFileSize?D("",!0):(F(),x(v,{key:0,text:f.value,small:"",outline:""},null,8,["text"]))])])],8,_))}};u.__docgenInfo={exportName:"default",displayName:"UluFileDisplay",description:"",tags:{},props:[{name:"file",description:"The File object to be displayed.",type:{name:"object"},required:!0},{name:"icon",description:"The icon to display next to the file name.",type:{name:"string"},defaultValue:{func:!1,value:'"type:file"'}},{name:"noFileSize",description:"If true, the file size will not be displayed.",type:{name:"boolean"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"fileName",title:"binding"},{name:"fileSize",title:"binding"}]}],sourceFiles:["/Users/joe/Projects/Personal/Github/frontend-vue/lib/components/forms/UluFileDisplay.vue"]};const I={component:u,tags:["autodocs"]},o=new File([new ArrayBuffer(12345)],"example-document.pdf",{type:"application/pdf"}),l={args:{file:o}},j=new File([new ArrayBuffer(500)],"small-file.txt",{type:"text/plain"}),s={args:{file:j}},L=new File([new ArrayBuffer(5e6)],"large-video.mp4",{type:"video/mp4"}),t={args:{file:L}},i={args:{file:o,noFileSize:!0}},n={args:{file:o,icon:"star"}},r={render:e=>({components:{UluFileDisplay:u},setup(){return{args:e}},template:`
      <UluFileDisplay v-bind="args">
        <template #default="{ fileName, fileSize }">
          <em>{{ fileName }} ({{ fileSize }})</em>
        </template>
      </UluFileDisplay>
    `}),args:{file:o}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    file: mockFile
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    file: mockFileSmall
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    file: mockFileLarge
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    file: mockFile,
    noFileSize: true
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    file: mockFile,
    icon: "star"
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const A=["Default","SmallFile","LargeFile","NoFileSize","CustomIcon","CustomSlot"];export{n as CustomIcon,r as CustomSlot,l as Default,t as LargeFile,i as NoFileSize,s as SmallFile,A as __namedExportsOrder,I as default};
