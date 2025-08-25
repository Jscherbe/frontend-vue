const s={argTypes:{tooltipText:{control:"text",description:"The text to display in the tooltip.",defaultValue:"This is a tooltip!"}}},o=e=>({setup(){return{args:e}},template:`
    <div style="padding: 50px; text-align: center;">
      <span v-ulu-tooltip="args.tooltipText">
        Hover over me
      </span>
    </div>
  `}),t=o.bind({});t.args={tooltipText:"This is a basic tooltip!"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  setup() {
    return {
      args
    };
  },
  "template": \`
    <div style="padding: 50px; text-align: center;">
      <span v-ulu-tooltip="args.tooltipText">
        Hover over me
      </span>
    </div>
  \`
})`,...t.parameters?.docs?.source}}};const a=["Basic"];export{t as Basic,a as __namedExportsOrder,s as default};
