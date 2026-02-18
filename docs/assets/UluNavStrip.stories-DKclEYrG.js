import{U as s}from"./UluMenu-BxEr4yt-.js";import{g as i,d as l,f as p,v as c,h as m,n as u,o as d}from"./iframe-Ctybf7he.js";import"./UluTag-BuBQa6hK.js";import"./preload-helper-BJwshlQW.js";const r={name:"UluNavStrip",components:{UluMenu:s},props:{items:Array,center:Boolean,right:Boolean,rule:Boolean}};function v(n,_,e,f,U,h){const o=m("UluMenu");return e.items?.length?(d(),l("nav",{key:0,class:u(["nav-strip",{"nav-strip--rule":e.rule,"nav-strip--center":e.center,"nav-strip--right":e.right}])},[c(o,{items:e.items,classes:{list:"nav-strip__list",item:"nav-strip__item",link:"nav-strip__link",linkExactActive:"is-active"}},null,8,["items"])],2)):p("",!0)}const a=i(r,[["render",v]]);r.__docgenInfo={displayName:"UluNavStrip",exportName:"default",description:"",tags:{},props:[{name:"items",description:"Array of items for list (uses UluMenu, see structure there)",type:{name:"array"}},{name:"center",description:"Center aligned",type:{name:"boolean"}},{name:"right",description:"Right aligned",type:{name:"boolean"}},{name:"rule",description:"Rule nav strip style",type:{name:"boolean"}}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/navigation/UluNavStrip.vue"]};const b={component:a,tags:["autodocs"]},g=n=>({components:{UluNavStrip:a},setup(){return{args:n}},template:'<UluNavStrip v-bind="args"/>'}),t=g.bind({});t.args={items:[{title:"Example Link (tag)",href:"http://www.google.com",tag:{text:"3"}},{title:"Router (icon)",to:"/",icon:"fas fa-plus"},{title:"Example Link (tooltip)",href:"http://www.google.com",tooltip:"Hello World!"}]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluNavStrip
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluNavStrip v-bind="args"/>\`
})`,...t.parameters?.docs?.source}}};const k=["Default"];export{t as Default,k as __namedExportsOrder,b as default};
