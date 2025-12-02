import{g as V,_,a as p,w as h,m as k,r as y,R as C,u as x,h as E,o as m,f as b,d as T,e as B,j as S,t as v}from"./iframe-D8Qk9KI1.js";import"./preload-helper-BJwshlQW.js";const w={name:"UluButtonVerbose",components:{UluIcon:_},props:{title:String,titleElement:{type:String,default:"strong"},body:String,icon:[String,Array],to:[String,Object],href:String,target:String,download:[Boolean,String],inline:Boolean,fullWidth:Boolean,modifiers:[String,Array]},setup(e){const{resolvedModifiers:o}=x({props:e,baseClass:"button-verbose"});return{resolvedModifiers:o}},computed:{element(){return this.to?C:this.href?"a":"button"},attrs(){const{to:e,href:o,download:t,target:c}=this,d=e?{to:e}:o?{href:o}:{};return o&&(c&&(d.target=c),t&&(d.download=typeof t=="string"?t:!0)),d}}},W={key:1,class:"button-verbose__body"};function I(e,o,t,c,d,f){const U=E("UluIcon");return m(),p(y(f.element),k({class:["button-verbose",[{"button-verbose--inline":t.inline,"button-verbose--full-width":t.fullWidth},c.resolvedModifiers]]},f.attrs),{default:h(()=>[e.$slots.title||t.title?(m(),p(y(t.titleElement),{key:0,class:"button-verbose__title"},{default:h(()=>[B(e.$slots,"title",{},()=>[S(v(t.title),1)])]),_:3})):b("",!0),e.$slots.default||t.body?(m(),T("span",W,[B(e.$slots,"default",{},()=>[S(v(t.body),1)])])):b("",!0),t.icon?(m(),p(U,{key:2,icon:t.icon,class:"button-verbose__icon","aria-hidden":"true"},null,8,["icon"])):b("",!0)]),_:3},16,["class"])}const g=V(w,[["render",I]]);w.__docgenInfo={displayName:"UluButtonVerbose",exportName:"default",description:"",tags:{},props:[{name:"title",description:"The title of the button. Can also be passed via slot.",type:{name:"string"}},{name:"titleElement",description:"Optional element to use for title",type:{name:"string"},defaultValue:{func:!1,value:'"strong"'}},{name:"body",description:"The body text of the button. Can also be passed via slot.",type:{name:"string"}},{name:"icon",description:"Icon prop, if used will set the icon for the button, will use UluIcon (which uses font-awesome icons conditionally)",type:{name:"string|array"}},{name:"to",description:"If set will use router-link for button component and pass to prop",type:{name:"string|object"}},{name:"href",description:"Sets the button to a link with this href",type:{name:"string"}},{name:"target",description:"Set a value for target attribute when button is a link",type:{name:"string"}},{name:"download",description:"Sets the download attribute on the link (passing string [filename] will populate the download attribute, true will just include it as boolean attribute)",type:{name:"boolean|string"}},{name:"inline",description:"Preset to set inline style",type:{name:"boolean"}},{name:"fullWidth",description:"Preset to set full-width style",type:{name:"boolean"}},{name:"modifiers",description:"Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])",type:{name:"string|array"}}],slots:[{name:"title"},{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluButtonVerbose.vue"]};const L={component:g,argTypes:{title:{control:"text",description:"The title of the button."},titleElement:{control:"select",options:["strong","h1","h2","h3","h4","h5","h6","p","span","div"],description:"Optional element to use for title"},body:{control:"text",description:"The body text of the button."},icon:{control:"text",description:'Font Awesome icon class (e.g., "fas fa-arrow-right").'},href:{control:"text",description:"Sets the button to a link with this href."},to:{control:"object",description:"If set will use router-link for button component and pass to prop."},target:{control:"text",description:"Set a value for target attribute when button is a link."},download:{control:"boolean",description:"Sets the download attribute on the link."},inline:{control:"boolean",description:"Preset to set inline style."},fullWidth:{control:"boolean",description:"Preset to set full-width style."},modifiers:{control:"array",description:"Modifiers (to add any modifier classes based on base class)."}}},u=e=>({components:{UluButtonVerbose:g},setup(){return{args:e}},template:'<UluButtonVerbose v-bind="args" />'}),n=u.bind({});n.args={title:"Example Link",body:"This is the body",icon:"fas fa-arrow-right",href:"#"};const s=u.bind({});s.args={...n.args,inline:!0};const r=u.bind({});r.args={...n.args,fullWidth:!0};const a=u.bind({});a.args={title:"Router Link",body:"Navigates using Vue Router",icon:"fas fa-link",to:"/some-path"};const i=u.bind({});i.args={...n.args,titleElement:"h2",title:"Custom Title Element (H2)"};const l=e=>({components:{UluButtonVerbose:g},setup(){return{args:e}},template:`
    <UluButtonVerbose v-bind="args">
      <template #title>
        <em>Custom Title Slot</em>
      </template>
      <p>Custom <strong>Body</strong> Slot</p>
    </UluButtonVerbose>
  `});l.args={icon:"fas fa-star",href:"#"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluButtonVerbose
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluButtonVerbose v-bind="args" />'
})`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
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
  template: '<UluButtonVerbose v-bind="args" />'
})`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluButtonVerbose
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluButtonVerbose v-bind="args" />'
})`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => ({
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
})`,...l.parameters?.docs?.source}}};const R=["Default","Inline","FullWidth","RouterLinkExample","WithCustomTitleElement","WithSlots"];export{n as Default,r as FullWidth,s as Inline,a as RouterLinkExample,i as WithCustomTitleElement,l as WithSlots,R as __namedExportsOrder,L as default};
