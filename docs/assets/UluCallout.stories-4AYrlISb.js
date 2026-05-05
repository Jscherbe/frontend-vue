import{d as i,e as c,n as p,u as d,o as m}from"./fontawesome-DyrJdE5N.js";import{u as g}from"./iframe-DFeB4tIX.js";import"./preload-helper-BJwshlQW.js";const o={__name:"UluCallout",props:{fullHeight:Boolean,modifiers:[String,Array]},setup(a){const n=a,{resolvedModifiers:r}=g({props:n,baseClass:"callout"});return(u,f)=>(m(),i("div",{class:p(["callout",[d(r),{"full-height":a.fullHeight}]])},[c(u.$slots,"default")],2))}};o.__docgenInfo={exportName:"default",displayName:"UluCallout",description:"",tags:{},props:[{name:"fullHeight",description:"Add full height utility class",type:{name:"boolean"}},{name:"modifiers",description:`Class modifiers (ie. 'transparent', 'secondary', etc)
- Can be String or Array of Strings`,type:{name:"string|array"}}],slots:[{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluCallout.vue"]};const l=a=>({components:{UluCallout:o},setup(){return{args:a}},template:'<UluCallout v-bind="args">This is the content in the callout</UluCallout>'}),b={component:o,tags:["autodocs"],argTypes:{fullHeight:{control:{type:"boolean"},defaultValue:!1},modifiers:{control:{type:"text"},defaultValue:""}}},e=l.bind({});e.args={};const t=l.bind({});t.args={fullHeight:!0};const s=l.bind({});s.args={modifiers:"danger"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
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
})`,...s.parameters?.docs?.source}}};const y=["Default","FullHeight","WithModifier"];export{e as Default,t as FullHeight,s as WithModifier,y as __namedExportsOrder,b as default};
