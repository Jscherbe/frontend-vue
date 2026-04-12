import{_ as o}from"./UluTable-BOA0UXxn.js";import{a}from"./array-CBO3zkTJ.js";import"./iframe-C4h-IfcP.js";import"./preload-helper-BJwshlQW.js";import"./props-Bhpf58xs.js";const r=[{key:"name",title:"Name"},{title:"Favorites",columns:[{key:"favoriteFruit",title:"Fruit"},{key:"favoriteColor",title:"Favorite Color"}]},{key:"size",title:"Size"}],s=a(5,t=>({name:`Example Name ${t}`,favoriteFruit:"Apple",favoriteColor:"red",size:6})),m={component:o,tags:["autodocs"],argTypes:{columns:{control:"object"},rows:{control:"object"},caption:{control:"text"}}},l=t=>({components:{UluTable:o},setup(){return{args:t}},template:'<UluTable v-bind="args"></UluTable>'}),e=l.bind({});e.args={columns:r,rows:s,caption:"Basic Unstyled Table"};const n={render:t=>({components:{UluTable:o},setup(){return{args:t}},template:`
      <UluTable v-bind="args">
        <caption>Manually Composed Table</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>28</td>
          </tr>
        </tbody>
      </UluTable>
    `}),args:{columns:void 0,rows:void 0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluTable
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluTable v-bind="args"></UluTable>\`
})`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluTable
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluTable v-bind="args">
        <caption>Manually Composed Table</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>28</td>
          </tr>
        </tbody>
      </UluTable>
    \`
  }),
  args: {
    columns: undefined,
    rows: undefined
  }
}`,...n.parameters?.docs?.source}}};const b=["Default","Compositional"];export{n as Compositional,e as Default,b as __namedExportsOrder,m as default};
