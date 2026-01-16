import{c as h,u as f,d as u,n as m,q as p,o as d}from"./iframe-BAOMv0fj.js";import"./preload-helper-BJwshlQW.js";const c={__name:"UluRule",props:{semantic:Boolean,short:Boolean,margin:String,light:Boolean,large:Boolean,modifiers:[String,Array]},setup(r){const e=r,g=h(()=>({short:e.short,light:e.light,large:e.large,[`margin-${e.margin}`]:e.margin})),{resolvedModifiers:l}=f({props:e,baseClass:"rule",internal:g});return(v,y)=>r.semantic?(d(),u("hr",{key:0,class:m(["rule",p(l)])},null,2)):(d(),u("div",{key:1,class:m(["rule",p(l)])},null,2))}};c.__docgenInfo={exportName:"default",displayName:"UluRule",description:"",tags:{},props:[{name:"semantic",description:"Whether to use the actual <hr> vs superficial <div></div> for rule element",type:{name:"boolean"}},{name:"short",description:"Use short modifier",type:{name:"boolean"}},{name:"margin",description:"Optional margin (keyword from your rule margins config in frontend)",type:{name:"string"}},{name:"light",description:"Add light modifier (if set, usually exists, this is for convenience, use modifiers prop if you have custom naming)",type:{name:"boolean"}},{name:"large",description:"Add large modifier (if set, usually exists, this is for convenience, use modifiers prop if you have custom naming)",type:{name:"boolean"}},{name:"modifiers",description:"Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])",type:{name:"string|array"}}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluRule.vue"]};const U={component:c,tags:["autodocs"]},s={args:{}},a={args:{short:!0}},n={args:{large:!0}},o={args:{light:!0}},t={args:{margin:"large"},render:r=>({components:{UluRule:c},setup(){return{args:r}},template:`
      <div>
        <p>This is content above the rule</p>
        <UluRule v-bind="args" />
        <p>This is content below the rule</p>
      </div>
    `})},i={args:{semantic:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    short: true
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    large: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    light: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    margin: 'large'
  },
  render: args => ({
    components: {
      UluRule
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <p>This is content above the rule</p>
        <UluRule v-bind="args" />
        <p>This is content below the rule</p>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    semantic: true
  }
}`,...i.parameters?.docs?.source}}};const _=["Default","Short","Large","Light","Margin","Semantic"];export{s as Default,n as Large,o as Light,t as Margin,i as Semantic,a as Short,_ as __namedExportsOrder,U as default};
