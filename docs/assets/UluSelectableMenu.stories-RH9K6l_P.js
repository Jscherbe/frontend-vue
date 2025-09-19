import{y as s,z as l}from"./iframe-DLFBxyUR.js";import"./preload-helper-BJwshlQW.js";const r={component:s,argTypes:{legend:{control:"text"},type:{control:"radio",options:["checkbox","radio"]}}},e={render:o=>({components:{UluSelectableMenu:s},setup(){const t=l(["option-2"]);return{args:o,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}],selections:t}},template:`
      <UluSelectableMenu
        v-model="selections"
        :options="options"
        :legend="args.legend || 'Checkbox Legend'"
        :type="args.type || 'checkbox'"
      />
    `})},n={render:o=>({components:{UluSelectableMenu:s},setup(){const t=l("option-2");return{args:o,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}],selections:t}},template:`
      <UluSelectableMenu
        v-model="selections"
        :options="options"
        :legend="args.legend || 'Radio Legend'"
        type="radio"
      />
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluSelectableMenu
    },
    setup() {
      const selections = ref(["option-2"]);
      const options = [{
        label: "Option 1",
        value: "option-1"
      }, {
        label: "Option 2",
        value: "option-2"
      }, {
        label: "Option 3",
        value: "option-3"
      }];
      return {
        args,
        options,
        selections
      };
    },
    template: \`
      <UluSelectableMenu
        v-model="selections"
        :options="options"
        :legend="args.legend || 'Checkbox Legend'"
        :type="args.type || 'checkbox'"
      />
    \`
  })
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluSelectableMenu
    },
    setup() {
      const selections = ref("option-2");
      const options = [{
        label: "Option 1",
        value: "option-1"
      }, {
        label: "Option 2",
        value: "option-2"
      }, {
        label: "Option 3",
        value: "option-3"
      }];
      return {
        args,
        options,
        selections
      };
    },
    template: \`
      <UluSelectableMenu
        v-model="selections"
        :options="options"
        :legend="args.legend || 'Radio Legend'"
        type="radio"
      />
    \`
  })
}`,...n.parameters?.docs?.source}}};const c=["Checkboxes","Radios"];export{e as Checkboxes,n as Radios,c as __namedExportsOrder,r as default};
