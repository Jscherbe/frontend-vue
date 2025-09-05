import{ah as a,ai as o}from"./iframe-CxylQUOp.js";import"./preload-helper-BJwshlQW.js";const r=[{key:"name",title:"Name"},{title:"Favorites",columns:[{key:"favoriteFruit",title:"Fruit"},{key:"favoriteColor",title:"Favorite Color"},{key:"favoriteFood",title:"Favorite Food"},{key:"favoriteActivity",title:"Favorite Activity"},{key:"favoriteSport",title:"Favorite Sport"},{key:"favoriteSeason",title:"Favorite Season"}]},{key:"size",title:"Size"}],i=o(10,e=>({name:`Example Name ${e}`,favoriteFruit:"Apple",favoriteColor:"red",favoriteFood:"Chocolate",favoriteActivity:"I have many favorite activities, it can't be reduced to just one.",favoriteSport:"Rocket League",favoriteSeason:"Fall",size:6})),c={component:a,tags:["autodocs"]},l=e=>({components:{UluTableSticky:a},setup(){return{args:e}},template:'<UluTableSticky class="data-table" v-bind="args"></UluTableSticky>'}),t=l.bind({});t.args={columns:r,rows:i,caption:"Example Sticky Table",scrollControls:!0};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluTableSticky
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluTableSticky class="data-table" v-bind="args"></UluTableSticky>\`
})`,...t.parameters?.docs?.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,c as default};
