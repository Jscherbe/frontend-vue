import{i as a,_ as s}from"./iframe-VeyoJg8x.js";import"./preload-helper-BJwshlQW.js";import"vue";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";const f={component:s,tags:["autodocs"],argTypes:{icon:{control:"select",options:a}}},r=t=>({components:{UluIcon:s},setup(){return{args:t}},template:'<UluIcon v-bind="args" />'}),e=r.bind({});e.args={icon:"type:info"};const n=r.bind({});n.args={icon:"fas fa-star"};n.storyName='Using "definition" prop';const o=r.bind({});o.args={icon:["fas","house"]};o.storyName='Using "definition" prop (object)';e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluIcon
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluIcon v-bind="args" />'
})`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluIcon
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluIcon v-bind="args" />'
})`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluIcon
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluIcon v-bind="args" />'
})`,...o.parameters?.docs?.source}}};const U=["Default","ByDefinition","ByDefinitionObject"];export{n as ByDefinition,o as ByDefinitionObject,e as Default,U as __namedExportsOrder,f as default};
