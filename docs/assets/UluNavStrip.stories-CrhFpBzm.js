import{U as s}from"./UluMenu-Cd5EVNpy.js";import{resolveComponent as i,createElementBlock as l,openBlock as p,normalizeClass as m,createVNode as c}from"vue";import{a as u}from"./iframe-DYOmpgae.js";import"./UluTag-BouMMBBI.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";const r={name:"UluNavStrip",components:{UluMenu:s},props:{items:Array,center:Boolean,right:Boolean,rule:Boolean}};function d(n,g,t,_,f,U){const a=i("UluMenu");return p(),l("nav",{class:m(["nav-strip",{"nav-strip--rule":t.rule,"nav-strip--center":t.center,"nav-strip--right":t.right}])},[c(a,{items:t.items,classes:{list:"nav-strip__list",item:"nav-strip__item",link:"nav-strip__link",linkExactActive:"is-active"}},null,8,["items"])],2)}const o=u(r,[["render",d]]);r.__docgenInfo={displayName:"UluNavStrip",exportName:"default",description:"",tags:{},props:[{name:"items",description:"Array of items for list (uses UluMenu, see structure there)",type:{name:"array"}},{name:"center",description:"Center aligned",type:{name:"boolean"}},{name:"right",description:"Right aligned",type:{name:"boolean"}},{name:"rule",description:"Rule nav strip style",type:{name:"boolean"}}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/navigation/UluNavStrip.vue"]};const M={component:o,tags:["autodocs"]},v=n=>({components:{UluNavStrip:o},setup(){return{args:n}},template:'<UluNavStrip v-bind="args"/>'}),e=v.bind({});e.args={items:[{title:"Example Link (tag)",href:"http://www.google.com",tag:{text:"3"}},{title:"Router (icon)",to:"/",icon:"fas fa-plus"},{title:"Example Link (tooltip)",href:"http://www.google.com",tooltip:"Hello World!"}]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluNavStrip
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluNavStrip v-bind="args"/>\`
})`,...e.parameters?.docs?.source}}};const A=["Default"];export{e as Default,A as __namedExportsOrder,M as default};
