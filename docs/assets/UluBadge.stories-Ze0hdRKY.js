import{j as u,k as d}from"./iframe-CN1oRFkw.js";import"./preload-helper-BJwshlQW.js";const i={component:u,tags:["autodocs"],argTypes:{skeleton:{control:{type:"boolean"},defaultValue:!1},size:{control:{type:"select",options:["small","medium","large"]},defaultValue:"medium"},text:{control:{type:"text"},defaultValue:""},alt:{control:{type:"text"},defaultValue:""},type:{control:{type:"select",options:["primary","secondary"]},defaultValue:"primary"},click:{action:"clicked"},to:{control:{type:"object"},defaultValue:null},href:{control:{type:"text"},defaultValue:""}}},e=c=>({components:{UluBadge:u},setup(){return{args:c}},template:'<UluBadge v-bind="args" />'}),g=c=>({components:{UluBadge:u,UluPlaceholderImage:d},setup(){return{args:c}},template:`
    <UluBadge v-bind="args">
      <UluPlaceholderImage imageId="64" width="300" height="300"/>
    </UluBadge>
  `}),a=g.bind({});a.args={};const r=e.bind({});r.args={size:"small",text:"ULU"};const n=e.bind({});n.args={size:"large",text:"ULU"};const s=e.bind({});s.args={click:()=>console.log("clicked"),text:"ULU"};const t=e.bind({});t.args={to:"/some-link",text:"ULU"};const o=e.bind({});o.args={href:"https://www.example.com",text:"ULU"};const l=e.bind({});l.args={text:"JD",alt:"Jane Doe"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluBadge,
    UluPlaceholderImage
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <UluBadge v-bind="args">
      <UluPlaceholderImage imageId="64" width="300" height="300"/>
    </UluBadge>
  \`
})`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluBadge
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluBadge v-bind="args" />\` // Always use v-bind="args"
})`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluBadge
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluBadge v-bind="args" />\` // Always use v-bind="args"
})`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluBadge
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluBadge v-bind="args" />\` // Always use v-bind="args"
})`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluBadge
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluBadge v-bind="args" />\` // Always use v-bind="args"
})`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluBadge
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluBadge v-bind="args" />\` // Always use v-bind="args"
})`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluBadge
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluBadge v-bind="args" />\` // Always use v-bind="args"
})`,...l.parameters?.docs?.source}}};const U=["UsingImage","Small","Large","Clickable","Link","Href","WithAltText"];export{s as Clickable,o as Href,n as Large,t as Link,r as Small,a as UsingImage,l as WithAltText,U as __namedExportsOrder,i as default};
