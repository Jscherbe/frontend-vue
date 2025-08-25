import{q as p,r as o}from"./iframe-2q_AV0vf.js";import"./preload-helper-BJwshlQW.js";const l={component:o,tags:["autodocs"],argTypes:{type:{control:"select",options:p},definition:{control:"text"}}},a=r=>({components:{UluIcon:o},setup(){return{args:r}},template:'<UluIcon v-bind="args" />'}),t=a.bind({});t.args={type:"info"};const s=r=>({components:{UluIcon:o},setup(){return{args:r,types:p}},template:`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
      <div v-for="type in types" :key="type" style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <UluIcon :type="type" style="font-size: 2rem;" />
        <code>{{ type }}</code>
      </div>
    </div>
  `});s.storyName='Using "type" prop';const e=a.bind({});e.args={definition:"fas fa-star"};e.storyName='Using "definition" prop';const n=a.bind({});n.args={definition:["fas","house"]};n.storyName='Using "definition" prop (object)';t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluIcon
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluIcon v-bind="args" />'
})`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluIcon
  },
  setup() {
    return {
      args,
      types: iconKeys
    };
  },
  template: \`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
      <div v-for="type in types" :key="type" style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <UluIcon :type="type" style="font-size: 2rem;" />
        <code>{{ type }}</code>
      </div>
    </div>
  \`
})`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
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
})`,...n.parameters?.docs?.source}}};const m=["Default","ByType","ByDefinition","ByDefinitionObject"];export{e as ByDefinition,n as ByDefinitionObject,s as ByType,t as Default,m as __namedExportsOrder,l as default};
