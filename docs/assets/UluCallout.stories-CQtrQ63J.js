import{u as i,d as c,e as d,n as p,l as m,o as g}from"./iframe-CQDi--w5.js";import"./preload-helper-BJwshlQW.js";const l={__name:"UluCallout",props:{fullHeight:Boolean,modifiers:[String,Array]},setup(a){const n=a,{resolvedModifiers:r}=i({props:n,baseClass:"callout"});return(u,f)=>(g(),c("div",{class:p(["callout",[m(r),{"full-height":a.fullHeight}]])},[d(u.$slots,"default")],2))}};l.__docgenInfo={exportName:"default",displayName:"UluCallout",description:"",tags:{},props:[{name:"fullHeight",description:"Add full height utility class",type:{name:"boolean"}},{name:"modifiers",description:`Class modifiers (ie. 'transparent', 'secondary', etc)
- Can be String or Array of Strings`,type:{name:"string|array"}}],slots:[{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluCallout.vue"]};const o=a=>({components:{UluCallout:l},setup(){return{args:a}},template:'<UluCallout v-bind="args">This is the content in the callout</UluCallout>'}),U={component:l,tags:["autodocs"],argTypes:{fullHeight:{control:{type:"boolean"},defaultValue:!1},modifiers:{control:{type:"text"},defaultValue:""}}},e=o.bind({});e.args={};const t=o.bind({});t.args={fullHeight:!0};const s=o.bind({});s.args={modifiers:"danger"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluCallout
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluCallout v-bind="args">This is the content in the callout</UluCallout>\`
})`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluCallout
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluCallout v-bind="args">This is the content in the callout</UluCallout>\`
})`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluCallout
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluCallout v-bind="args">This is the content in the callout</UluCallout>\`
})`,...s.parameters?.docs?.source}}};const b=["Default","FullHeight","WithModifier"];export{e as Default,t as FullHeight,s as WithModifier,b as __namedExportsOrder,U as default};
