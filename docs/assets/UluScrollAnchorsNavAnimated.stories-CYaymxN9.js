import{ah as e,af as i,ae as o}from"./iframe-CX9S7sQv.js";import"./preload-helper-BJwshlQW.js";const m={component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Animated navigation for the Scroll Anchors system."}}}},r="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",l=[{title:"Section One"},{title:"Section Two"},{title:"Section Three"},{title:"Section Four"},{title:"Section Five"}],s={height:"700px",overflow:"auto",backgroundColor:"teal",padding:"1rem"},c={display:"grid",gridTemplateColumns:"200px 1fr",gap:"2rem",alignItems:"start",backgroundColor:"white"},a={position:"sticky",top:"20px"},t={args:{firstItemActive:!0},render:n=>({components:{UluScrollAnchors:o,UluScrollAnchorsSection:i,UluScrollAnchorsNavAnimated:e},setup(){return{args:n,sections:l,lipsum:r,gridStyles:c,navStyle:a,containerStyles:s}},template:`
      <UluScrollAnchors 
        :firstItemActive="args.firstItemActive" 
        :style="containerStyles"
      >
        <div :style="gridStyles">
          <div :style="navStyle">
            <UluScrollAnchorsNavAnimated />
          </div>
          <div>
            <UluScrollAnchorsSection v-for="section in sections" :key="section.title" :title="section.title">
              <p>{{ lipsum }}</p>
              <p>{{ lipsum }}</p>
              <p>{{ lipsum }}</p>
            </UluScrollAnchorsSection>
          </div>
        </div>
      </UluScrollAnchors>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    firstItemActive: true
  },
  render: args => ({
    components: {
      UluScrollAnchors,
      UluScrollAnchorsSection,
      UluScrollAnchorsNavAnimated
    },
    setup() {
      return {
        args,
        sections,
        lipsum,
        gridStyles,
        navStyle,
        containerStyles
      };
    },
    template: \`
      <UluScrollAnchors 
        :firstItemActive="args.firstItemActive" 
        :style="containerStyles"
      >
        <div :style="gridStyles">
          <div :style="navStyle">
            <UluScrollAnchorsNavAnimated />
          </div>
          <div>
            <UluScrollAnchorsSection v-for="section in sections" :key="section.title" :title="section.title">
              <p>{{ lipsum }}</p>
              <p>{{ lipsum }}</p>
              <p>{{ lipsum }}</p>
            </UluScrollAnchorsSection>
          </div>
        </div>
      </UluScrollAnchors>
    \`
  })
}`,...t.parameters?.docs?.source}}};const p=["Default"];export{t as Default,p as __namedExportsOrder,m as default};
