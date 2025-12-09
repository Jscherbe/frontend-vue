import{g as t,d as r,o as s}from"./iframe-CSRVEcn3.js";import{U as o}from"./UluMain-Bn3L9ZTh.js";import"./preload-helper-BJwshlQW.js";const a={},p={class:"skip-link hidden-visually-focusable",href:"#main-content"};function l(n,c){return s(),r("a",p," Skip to main content ")}const i=t(a,[["render",l]]);a.__docgenInfo={displayName:"UluSkipLink",description:"",tags:{},sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/navigation/UluSkipLink.vue"]};const f={component:i},d=n=>({components:{UluSkipLink:i,UluMain:o},setup(){return{args:n}},template:`
    <div>
      <UluSkipLink v-bind="args" />
      <header style="padding: 1rem; background: #f0f0f0;">
        <p>This is a simulated header area with navigation.</p>
        <nav>
          <a href="#" style="margin-right: 1rem;">Home</a>
          <a href="#" style="margin-right: 1rem;">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <UluMain style="padding: 1rem;">
        <h2>Example Main Content</h2>
        <p>When you click the skip link, focus should jump here.</p>
        <p>The skip link is visually hidden until it is focused. Try tabbing from the browser's address bar to see it appear.</p>
        <p>example main content</p>
      </UluMain>
    </div>
  `}),e=d.bind({});e.args={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluSkipLink,
    UluMain
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div>
      <UluSkipLink v-bind="args" />
      <header style="padding: 1rem; background: #f0f0f0;">
        <p>This is a simulated header area with navigation.</p>
        <nav>
          <a href="#" style="margin-right: 1rem;">Home</a>
          <a href="#" style="margin-right: 1rem;">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <UluMain style="padding: 1rem;">
        <h2>Example Main Content</h2>
        <p>When you click the skip link, focus should jump here.</p>
        <p>The skip link is visually hidden until it is focused. Try tabbing from the browser's address bar to see it appear.</p>
        <p>example main content</p>
      </UluMain>
    </div>
  \`
})`,...e.parameters?.docs?.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,f as default};
