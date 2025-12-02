import{U as s}from"./UluMenu-D5gKyli7.js";import{g as i,d as l,v as p,h as c,n as m,o as u}from"./iframe-ULHYlDKO.js";import"./UluTag-FVt1Gekq.js";import"./preload-helper-BJwshlQW.js";const r={name:"UluNavStrip",components:{UluMenu:s},props:{items:Array,center:Boolean,right:Boolean,rule:Boolean}};function d(n,g,t,_,f,U){const o=c("UluMenu");return u(),l("nav",{class:m(["nav-strip",{"nav-strip--rule":t.rule,"nav-strip--center":t.center,"nav-strip--right":t.right}])},[p(o,{items:t.items,classes:{list:"nav-strip__list",item:"nav-strip__item",link:"nav-strip__link",linkExactActive:"is-active"}},null,8,["items"])],2)}const a=i(r,[["render",d]]);r.__docgenInfo={displayName:"UluNavStrip",exportName:"default",description:"",tags:{},props:[{name:"items",description:"Array of items for list (uses UluMenu, see structure there)",type:{name:"array"}},{name:"center",description:"Center aligned",type:{name:"boolean"}},{name:"right",description:"Right aligned",type:{name:"boolean"}},{name:"rule",description:"Rule nav strip style",type:{name:"boolean"}}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/navigation/UluNavStrip.vue"]};const S={component:a,tags:["autodocs"]},v=n=>({components:{UluNavStrip:a},setup(){return{args:n}},template:'<UluNavStrip v-bind="args"/>'}),e=v.bind({});e.args={items:[{title:"Example Link (tag)",href:"http://www.google.com",tag:{text:"3"}},{title:"Router (icon)",to:"/",icon:"fas fa-plus"},{title:"Example Link (tooltip)",href:"http://www.google.com",tooltip:"Hello World!"}]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluNavStrip
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluNavStrip v-bind="args"/>\`
})`,...e.parameters?.docs?.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,S as default};
