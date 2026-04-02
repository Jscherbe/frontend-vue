import{_ as o}from"./UluTable-C2sLmlkU.js";import{a}from"./array-CBO3zkTJ.js";import"./iframe-Cct7deJN.js";import"./preload-helper-BJwshlQW.js";import"./props-B2xy11Yb.js";import"./useTableData-DEoV5tXS.js";const r=[{key:"name",title:"Name"},{title:"Favorites",columns:[{key:"favoriteFruit",title:"Fruit"},{key:"favoriteColor",title:"Favorite Color"}]},{key:"size",title:"Size"}],s=a(5,t=>({name:`Example Name ${t}`,favoriteFruit:"Apple",favoriteColor:"red",size:6})),b={component:o,tags:["autodocs"],argTypes:{columns:{control:"object"},rows:{control:"object"},caption:{control:"text"}}},l=t=>({components:{UluTable:o},setup(){return{args:t}},template:'<UluTable v-bind="args"></UluTable>'}),e=l.bind({});e.args={columns:r,rows:s,caption:"Basic Unstyled Table"};const n={render:t=>({components:{UluTable:o},setup(){return{args:t}},template:`
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
}`,...n.parameters?.docs?.source}}};const T=["Default","Compositional"];export{n as Compositional,e as Default,T as __namedExportsOrder,b as default};
