import{i as a,_ as r}from"./iframe-DFeB4tIX.js";import"./preload-helper-BJwshlQW.js";import"./fontawesome-DyrJdE5N.js";const u={component:r,tags:["autodocs"],argTypes:{icon:{control:"select",options:a}}},s=t=>({components:{UluIcon:r},setup(){return{args:t}},template:'<UluIcon v-bind="args" />'}),o=s.bind({});o.args={icon:"type:info"};const n=s.bind({});n.args={icon:"fas fa-star"};n.storyName='Using "definition" prop';const e=s.bind({});e.args={icon:["fas","house"]};e.storyName='Using "definition" prop (object)';o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluIcon
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluIcon v-bind="args" />'
})`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluIcon
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluIcon v-bind="args" />'
})`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluIcon
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluIcon v-bind="args" />'
})`,...e.parameters?.docs?.source}}};const m=["Default","ByDefinition","ByDefinitionObject"];export{n as ByDefinition,e as ByDefinitionObject,o as Default,m as __namedExportsOrder,u as default};
