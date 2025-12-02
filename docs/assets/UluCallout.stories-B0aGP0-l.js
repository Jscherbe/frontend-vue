import{g as c,d,e as p,n as m,u as g,o as f}from"./iframe-D8Qk9KI1.js";import"./preload-helper-BJwshlQW.js";const n={name:"UluCallout",props:{fullHeight:Boolean,modifiers:[String,Array]},setup(e){const{resolvedModifiers:l}=g({props:e,baseClass:"callout"});return{resolvedModifiers:l}}};function h(e,l,u,i,C,U){return f(),d("div",{class:m(["callout",[i.resolvedModifiers,{"full-height":u.fullHeight}]])},[p(e.$slots,"default")],2)}const r=c(n,[["render",h]]);n.__docgenInfo={displayName:"UluCallout",exportName:"default",description:"",tags:{},props:[{name:"fullHeight",description:"Add full height utility class",type:{name:"boolean"}},{name:"modifiers",description:`Class modifiers (ie. 'transparent', 'secondary', etc)
- Can be String or Array of Strings`,type:{name:"string|array"}}],slots:[{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluCallout.vue"]};const a=e=>({components:{UluCallout:r},setup(){return{args:e}},template:'<UluCallout v-bind="args">This is the content in the callout</UluCallout>'}),y={component:r,tags:["autodocs"],argTypes:{fullHeight:{control:{type:"boolean"},defaultValue:!1},modifiers:{control:{type:"text"},defaultValue:""}}},t=a.bind({});t.args={};const s=a.bind({});s.args={fullHeight:!0};const o=a.bind({});o.args={modifiers:"danger"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
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
})`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluCallout
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluCallout v-bind="args">This is the content in the callout</UluCallout>\`
})`,...o.parameters?.docs?.source}}};const v=["Default","FullHeight","WithModifier"];export{t as Default,s as FullHeight,o as WithModifier,v as __namedExportsOrder,y as default};
