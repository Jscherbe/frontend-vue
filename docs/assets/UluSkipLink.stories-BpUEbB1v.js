import{a0 as n,u as i}from"./iframe---2PRveq.js";import"./preload-helper-BJwshlQW.js";const p={component:n},r=a=>({components:{UluSkipLink:n,UluMain:i},setup(){return{args:a}},template:`
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
  `}),e=r.bind({});e.args={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
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
})`,...e.parameters?.docs?.source}}};const o=["Default"];export{e as Default,o as __namedExportsOrder,p as default};
