import{ad as a,ae as o}from"./iframe-DuX-PKOB.js";import"./preload-helper-BJwshlQW.js";const r=[{key:"name",title:"Name"},{title:"Favorites",columns:[{key:"favoriteFruit",title:"Fruit"},{key:"favoriteColor",title:"Favorite Color"},{key:"favoriteFood",title:"Favorite Food"},{key:"favoriteActivity",title:"Favorite Activity"},{key:"favoriteSport",title:"Favorite Sport"},{key:"favoriteSeason",title:"Favorite Season"}]},{key:"size",title:"Size"}],i=o(10,t=>({name:`Example Name ${t}`,favoriteFruit:"Apple",favoriteColor:"red",favoriteFood:"Chocolate",favoriteActivity:"I have many favorite activities, it can't be reduced to just one.",favoriteSport:"Rocket League",favoriteSeason:"Fall",size:6})),c={component:a,tags:["autodocs"]},l=t=>({components:{UluTableSticky:a},setup(){return{args:t}},template:'<UluTableSticky class="data-table" v-bind="args"></UluTableSticky>'}),e=l.bind({});e.args={columns:r,rows:i,caption:"Example Sticky Table",scrollControls:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluTableSticky
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluTableSticky class="data-table" v-bind="args"></UluTableSticky>\`
})`,...e.parameters?.docs?.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,c as default};
