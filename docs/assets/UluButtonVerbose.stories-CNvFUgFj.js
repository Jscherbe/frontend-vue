import{m as l}from"./iframe-Czp4Tgiv.js";import"./preload-helper-BJwshlQW.js";const p={component:l,argTypes:{title:{control:"text",description:"The title of the button."},titleElement:{control:"select",options:["strong","h1","h2","h3","h4","h5","h6","p","span","div"],description:"Optional element to use for title"},body:{control:"text",description:"The body text of the button."},icon:{control:"text",description:'Font Awesome icon class (e.g., "fas fa-arrow-right").'},href:{control:"text",description:"Sets the button to a link with this href."},to:{control:"object",description:"If set will use router-link for button component and pass to prop."},target:{control:"text",description:"Set a value for target attribute when button is a link."},download:{control:"boolean",description:"Sets the download attribute on the link."},inline:{control:"boolean",description:"Preset to set inline style."},fullWidth:{control:"boolean",description:"Preset to set full-width style."},modifiers:{control:"array",description:"Modifiers (to add any modifier classes based on base class)."}}},a=i=>({components:{UluButtonVerbose:l},setup(){return{args:i}},template:'<UluButtonVerbose v-bind="args" />'}),t=a.bind({});t.args={title:"Example Link",body:"This is the body",icon:"fas fa-arrow-right",href:"#"};const e=a.bind({});e.args={...t.args,inline:!0};const o=a.bind({});o.args={...t.args,fullWidth:!0};const n=a.bind({});n.args={title:"Router Link",body:"Navigates using Vue Router",icon:"fas fa-link",to:"/some-path"};const r=a.bind({});r.args={...t.args,titleElement:"h2",title:"Custom Title Element (H2)"};const s=i=>({components:{UluButtonVerbose:l},setup(){return{args:i}},template:`
    <UluButtonVerbose v-bind="args">
      <template #title>
        <em>Custom Title Slot</em>
      </template>
      <p>Custom <strong>Body</strong> Slot</p>
    </UluButtonVerbose>
  `});s.args={icon:"fas fa-star",href:"#"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluButtonVerbose
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluButtonVerbose v-bind="args" />'
})`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluButtonVerbose
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluButtonVerbose v-bind="args" />'
})`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluButtonVerbose
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluButtonVerbose v-bind="args" />'
})`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluButtonVerbose
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluButtonVerbose v-bind="args" />'
})`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluButtonVerbose
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluButtonVerbose v-bind="args" />'
})`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
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
})`,...s.parameters?.docs?.source}}};const m=["Default","Inline","FullWidth","RouterLinkExample","WithCustomTitleElement","WithSlots"];export{t as Default,o as FullWidth,e as Inline,n as RouterLinkExample,r as WithCustomTitleElement,s as WithSlots,m as __namedExportsOrder,p as default};
