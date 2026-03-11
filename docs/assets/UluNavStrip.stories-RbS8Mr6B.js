import{U as l}from"./UluMenu-D_aSwria.js";import{g as p,d as c,f as m,v as u,x as d,y as g,h as v,n as _,o as f,w as U,e as h,z as N,A as y}from"./iframe-BuaZgQzp.js";import"./UluTag-Dej-ys9y.js";import"./preload-helper-BJwshlQW.js";const s={name:"UluNavStrip",components:{UluMenu:l},props:{items:Array,center:Boolean,right:Boolean,rule:Boolean}};function S(n,x,e,k,w,B){const o=v("UluMenu");return e.items?.length?(f(),c("nav",{key:0,class:_(["nav-strip",{"nav-strip--rule":e.rule,"nav-strip--center":e.center,"nav-strip--right":e.right}])},[u(o,{items:e.items,classes:{list:"nav-strip__list",item:"nav-strip__item",link:"nav-strip__link",linkExactActive:"is-active"}},d({_:2},[g(n.$slots,(C,a)=>({name:a,fn:U(i=>[h(n.$slots,a,N(y(i)))])}))]),1032,["items"])],2)):m("",!0)}const r=p(s,[["render",S]]);s.__docgenInfo={displayName:"UluNavStrip",exportName:"default",description:"",tags:{},props:[{name:"items",description:"Array of items for list (uses UluMenu, see structure there)",type:{name:"array"}},{name:"center",description:"Center aligned",type:{name:"boolean"}},{name:"right",description:"Right aligned",type:{name:"boolean"}},{name:"rule",description:"Rule nav strip style",type:{name:"boolean"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/navigation/UluNavStrip.vue"]};const P={component:r,tags:["autodocs"]},b=n=>({components:{UluNavStrip:r},setup(){return{args:n}},template:'<UluNavStrip v-bind="args"/>'}),t=b.bind({});t.args={items:[{title:"Example Link (tag)",href:"http://www.google.com",tag:{text:"3"}},{title:"Router (icon)",to:"/",icon:"fas fa-plus"},{title:"Example Link (tooltip)",href:"http://www.google.com",tooltip:"Hello World!"}]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluNavStrip
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluNavStrip v-bind="args"/>\`
})`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,P as default};
