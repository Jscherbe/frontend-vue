import{d as o,b as i,v as l,e as c,_ as u,o as m,j as p,t as g}from"./iframe-ULHYlDKO.js";import"./preload-helper-BJwshlQW.js";const x=["href","target"],d={class:"external-link__text"},a={__name:"UluExternalLink",props:{text:String,href:String,target:{type:String,default:"_blank"},icon:String},setup(e){return(s,f)=>(m(),o("a",{class:"external-link",href:e.href,target:e.target},[i("span",d,[c(s.$slots,"default",{},()=>[p(g(e.text),1)])]),l(u,{class:"external-link__icon margin-left-small-x display-inline",icon:e.icon||"type:externalLink"},null,8,["icon"])],8,x))}};a.__docgenInfo={exportName:"default",displayName:"UluExternalLink",description:"",tags:{},props:[{name:"text",description:"Text for link or use slot",type:{name:"string"}},{name:"href",description:"Link href",type:{name:"string"}},{name:"target",description:"Link target",type:{name:"string"},defaultValue:{func:!1,value:'"_blank"'}},{name:"icon",description:"Override default icon",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluExternalLink.vue"]};const U={component:a,tags:["autodocs"],args:{href:"https://example.com",text:"Default link text (from prop)"},render:e=>({components:{UluExternalLink:a},setup(){return{args:e}},template:'<UluExternalLink v-bind="args"/>'}),argTypes:{text:{control:"text"},href:{control:"text"},target:{control:"text"},icon:{control:"text"}}},t={name:"Using Text Prop",args:{text:"This is an external link."}},n={args:{},render:e=>({components:{UluExternalLink:a},setup(){return{args:e}},template:'<UluExternalLink v-bind="args">This is <strong>slot</strong> content.</UluExternalLink>'})},r={args:{text:"External link with a custom icon",icon:"fas fa-circle-info"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Using Text Prop',
  args: {
    text: 'This is an external link.'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      UluExternalLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<UluExternalLink v-bind="args">This is <strong>slot</strong> content.</UluExternalLink>\`
  })
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'External link with a custom icon',
    icon: 'fas fa-circle-info'
  }
}`,...r.parameters?.docs?.source}}};const _=["Default","UsingSlot","CustomIcon"];export{r as CustomIcon,t as Default,n as UsingSlot,_ as __namedExportsOrder,U as default};
