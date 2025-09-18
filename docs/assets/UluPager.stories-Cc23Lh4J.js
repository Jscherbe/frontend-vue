import{H as n}from"./iframe-Bn69oEbi.js";import"./preload-helper-BJwshlQW.js";const u={component:n,argTypes:{headingId:{control:"text"},current:{control:"number"},items:{control:"object"},ellipses:{control:"object"}}},t=p=>({components:{UluPager:n},setup(){return{args:p}},template:'<UluPager v-bind="args" />'}),s={headingId:"pager-heading",items:{first:{href:"/?page=1"},previous:{href:"/?page=4"},next:{href:"/?page=6"},last:{href:"/?page=10"},pages:{1:{href:"/?page=1"},2:{href:"/?page=2"},3:{href:"/?page=3"},4:{href:"/?page=4"},5:{href:"/?page=5"},6:{href:"/?page=6"},7:{href:"/?page=7"}}}},e=t.bind({});e.args={...s,current:5,ellipses:{previous:!0,next:!0}};const r=t.bind({});r.args={...s,current:1,items:{...s.items,first:null,previous:null},ellipses:{previous:!1,next:!0}};const a=t.bind({});a.args={...s,current:10,items:{...s.items,next:null,last:null,pages:{4:{href:"/?page=4"},5:{href:"/?page=5"},6:{href:"/?page=6"},7:{href:"/?page=7"},8:{href:"/?page=8"},9:{href:"/?page=9"},10:{href:"/?page=10"}}},ellipses:{previous:!0,next:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluPager
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluPager v-bind="args" />'
})`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluPager
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluPager v-bind="args" />'
})`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluPager
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluPager v-bind="args" />'
})`,...a.parameters?.docs?.source}}};const l=["Default","FirstPage","LastPage"];export{e as Default,r as FirstPage,a as LastPage,l as __namedExportsOrder,u as default};
