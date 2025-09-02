import{a9 as e,a8 as n,a6 as i}from"./iframe-DSsytvcb.js";import"./preload-helper-BJwshlQW.js";const p={component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Standard navigation for the Scroll Anchors system."}}}},r="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",s=[{title:"Section One"},{title:"Section Two"},{title:"Section Three"},{title:"Section Four"},{title:"Section Five"}],l={display:"grid",gridTemplateColumns:"200px 1fr",gap:"2rem",alignItems:"start"},c={position:"sticky",top:"1rem"},t={args:{firstItemActive:!0},render:o=>({components:{UluScrollAnchors:i,UluScrollAnchorsSection:n,UluScrollAnchorsNav:e},setup(){return{args:o,sections:s,lipsum:r,storyLayout:l,navStyle:c}},template:`
      <UluScrollAnchors :firstItemActive="args.firstItemActive">
        <div :style="storyLayout">
          <div :style="navStyle">
            <UluScrollAnchorsNav />
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
      UluScrollAnchorsNav
    },
    setup() {
      return {
        args,
        sections,
        lipsum,
        storyLayout,
        navStyle
      };
    },
    template: \`
      <UluScrollAnchors :firstItemActive="args.firstItemActive">
        <div :style="storyLayout">
          <div :style="navStyle">
            <UluScrollAnchorsNav />
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
}`,...t.parameters?.docs?.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,p as default};
