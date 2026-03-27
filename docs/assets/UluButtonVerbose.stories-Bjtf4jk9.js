import{u as B,c as w,a as m,w as b,n as S,l as U,o as u,f as p,d as V,r as v,e as g,j as f,t as h,_ as k}from"./iframe-Dn9nvJ2t.js";import{_ as C}from"./UluAction-RtlJKDrv.js";import"./preload-helper-BJwshlQW.js";const E={key:1,class:"button-verbose__body"},c={__name:"UluButtonVerbose",props:{title:String,titleElement:{type:String,default:"strong"},body:String,icon:[String,Array],to:[String,Object],href:String,target:String,download:[Boolean,String],inline:Boolean,fullWidth:Boolean,modifiers:[String,Array]},setup(e){const d=e,{resolvedModifiers:y}=B({props:d,baseClass:"button-verbose",internal:w(()=>({inline:d.inline,"full-width":d.fullWidth}))});return(l,T)=>(u(),m(C,{to:e.to,href:e.href,target:e.target,download:e.download,class:S(["button-verbose",U(y)])},{default:b(()=>[l.$slots.title||e.title?(u(),m(v(e.titleElement),{key:0,class:"button-verbose__title"},{default:b(()=>[g(l.$slots,"title",{},()=>[f(h(e.title),1)])]),_:3})):p("",!0),l.$slots.default||e.body?(u(),V("span",E,[g(l.$slots,"default",{},()=>[f(h(e.body),1)])])):p("",!0),e.icon?(u(),m(k,{key:2,icon:e.icon,class:"button-verbose__icon","aria-hidden":"true"},null,8,["icon"])):p("",!0)]),_:3},8,["to","href","target","download","class"]))}};c.__docgenInfo={exportName:"default",displayName:"UluButtonVerbose",description:"",tags:{},props:[{name:"title",description:"The title of the button. Can also be passed via slot.",type:{name:"string"}},{name:"titleElement",description:"Optional element to use for title",type:{name:"string"},defaultValue:{func:!1,value:'"strong"'}},{name:"body",description:"The body text of the button. Can also be passed via slot.",type:{name:"string"}},{name:"icon",description:"Icon prop, if used will set the icon for the button, will use UluIcon (which uses font-awesome icons conditionally)",type:{name:"string|array"}},{name:"to",description:"If set will use router-link for button component and pass to prop",type:{name:"string|object"}},{name:"href",description:"Sets the button to a link with this href",type:{name:"string"}},{name:"target",description:"Set a value for target attribute when button is a link",type:{name:"string"}},{name:"download",description:"Sets the download attribute on the link (passing string [filename] will populate the download attribute, true will just include it as boolean attribute)",type:{name:"boolean|string"}},{name:"inline",description:"Preset to set inline style",type:{name:"boolean"}},{name:"fullWidth",description:"Preset to set full-width style",type:{name:"boolean"}},{name:"modifiers",description:"Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])",type:{name:"string|array"}}],slots:[{name:"title"},{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluButtonVerbose.vue"]};const I={component:c,argTypes:{title:{control:"text",description:"The title of the button."},titleElement:{control:"select",options:["strong","h1","h2","h3","h4","h5","h6","p","span","div"],description:"Optional element to use for title"},body:{control:"text",description:"The body text of the button."},icon:{control:"text",description:'Font Awesome icon class (e.g., "fas fa-arrow-right").'},href:{control:"text",description:"Sets the button to a link with this href."},to:{control:"object",description:"If set will use router-link for button component and pass to prop."},target:{control:"text",description:"Set a value for target attribute when button is a link."},download:{control:"boolean",description:"Sets the download attribute on the link."},inline:{control:"boolean",description:"Preset to set inline style."},fullWidth:{control:"boolean",description:"Preset to set full-width style."},modifiers:{control:"array",description:"Modifiers (to add any modifier classes based on base class)."}}},i=e=>({components:{UluButtonVerbose:c},setup(){return{args:e}},template:'<UluButtonVerbose v-bind="args" />'}),t=i.bind({});t.args={title:"Example Link",body:"This is the body",icon:"fas fa-arrow-right",href:"#"};const n=i.bind({});n.args={...t.args,inline:!0};const o=i.bind({});o.args={...t.args,fullWidth:!0};const s=i.bind({});s.args={title:"Router Link",body:"Navigates using Vue Router",icon:"fas fa-link",to:"/some-path"};const r=i.bind({});r.args={...t.args,titleElement:"h2",title:"Custom Title Element (H2)"};const a=e=>({components:{UluButtonVerbose:c},setup(){return{args:e}},template:`
    <UluButtonVerbose v-bind="args">
      <template #title>
        <em>Custom Title Slot</em>
      </template>
      <p>Custom <strong>Body</strong> Slot</p>
    </UluButtonVerbose>
  `});a.args={icon:"fas fa-star",href:"#"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluButtonVerbose
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluButtonVerbose v-bind="args" />'
})`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluButtonVerbose
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluButtonVerbose v-bind="args" />'
})`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluButtonVerbose
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluButtonVerbose v-bind="args" />'
})`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluButtonVerbose
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluButtonVerbose v-bind="args" />'
})`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluButtonVerbose
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluButtonVerbose v-bind="args" />'
})`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluButtonVerbose
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <UluButtonVerbose v-bind="args">
      <template #title>
        <em>Custom Title Slot</em>
      </template>
      <p>Custom <strong>Body</strong> Slot</p>
    </UluButtonVerbose>
  \`
})`,...a.parameters?.docs?.source}}};const P=["Default","Inline","FullWidth","RouterLinkExample","WithCustomTitleElement","WithSlots"];export{t as Default,o as FullWidth,n as Inline,s as RouterLinkExample,r as WithCustomTitleElement,a as WithSlots,P as __namedExportsOrder,I as default};
