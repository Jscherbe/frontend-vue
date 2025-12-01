import{a as c,u as p}from"./iframe-DYOmpgae.js";import{createElementBlock as d,openBlock as m,normalizeClass as f,renderSlot as g}from"vue";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";const a={name:"UluCallout",props:{fullHeight:Boolean,modifiers:[String,Array]},setup(e){const{resolvedModifiers:l}=p({props:e,baseClass:"callout"});return{resolvedModifiers:l}}};function h(e,l,i,u,C,U){return m(),d("div",{class:f(["callout",[u.resolvedModifiers,{"full-height":i.fullHeight}]])},[g(e.$slots,"default")],2)}const n=c(a,[["render",h]]);a.__docgenInfo={displayName:"UluCallout",exportName:"default",description:"",tags:{},props:[{name:"fullHeight",description:"Add full height utility class",type:{name:"boolean"}},{name:"modifiers",description:`Class modifiers (ie. 'transparent', 'secondary', etc)
- Can be String or Array of Strings`,type:{name:"string|array"}}],slots:[{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluCallout.vue"]};const s=e=>({components:{UluCallout:n},setup(){return{args:e}},template:'<UluCallout v-bind="args">This is the content in the callout</UluCallout>'}),M={component:n,tags:["autodocs"],argTypes:{fullHeight:{control:{type:"boolean"},defaultValue:!1},modifiers:{control:{type:"text"},defaultValue:""}}},t=s.bind({});t.args={};const o=s.bind({});o.args={fullHeight:!0};const r=s.bind({});r.args={modifiers:"danger"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluCallout
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluCallout v-bind="args">This is the content in the callout</UluCallout>\`
})`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluCallout
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluCallout v-bind="args">This is the content in the callout</UluCallout>\`
})`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluCallout
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluCallout v-bind="args">This is the content in the callout</UluCallout>\`
})`,...r.parameters?.docs?.source}}};const A=["Default","FullHeight","WithModifier"];export{t as Default,o as FullHeight,r as WithModifier,A as __namedExportsOrder,M as default};
