import{ao as c,U as p,z as g}from"./iframe-DnXSiSwu.js";import"./preload-helper-BJwshlQW.js";const y={component:c,tags:["autodocs"],argTypes:{percentage:{control:{type:"range",min:0,max:100,step:1},description:"The progress percentage (0-100)."},status:{control:"select",options:["","low","incomplete","complete"],description:"Sets the status color of the progress circle."},small:{control:"boolean"},outside:{control:"boolean"},outsideBelow:{control:"boolean"},pieStyle:{control:"boolean"},noMask:{control:"boolean"}}},e={args:{label:"Progress",percentage:75}},t={args:{...e.args,outside:!0}},n={args:{...e.args,percentage:45,small:!0}},a={render:()=>({components:{UluProgressCircle:c},template:`
      <div style="display: flex; gap: 2rem; align-items: center; padding: 1rem;">
        <div>
          <UluProgressCircle label="Low Status" :percentage="25" status="low" />
          <p style="text-align: center; margin-top: 0.5rem;">Low</p>
        </div>
        <div>
          <UluProgressCircle label="Incomplete Status" :percentage="75" status="incomplete" />
          <p style="text-align: center; margin-top: 0.5rem;">Incomplete</p>
        </div>
        <div>
          <UluProgressCircle label="Complete Status" :percentage="100" status="complete" />
          <p style="text-align: center; margin-top: 0.5rem;">Complete</p>
        </div>
      </div>
    `})},s={args:{...e.args,percentage:60,pieStyle:!0}},l={render:()=>({components:{UluProgressCircle:c},template:`
      <div style="display: flex; gap: 2rem; align-items: center; padding: 1rem;">
        <div>
          <UluProgressCircle label="Small, Outside Below" :percentage="50" :small="true" :outsideBelow="true" />
          <p style="text-align: center; margin-top: 0.5rem;">Small, Outside Below</p>
        </div>
        <div>
          <UluProgressCircle label="No Mask" :percentage="80" :noMask="true" />
          <p style="text-align: center; margin-top: 0.5rem;">No Mask</p>
        </div>
        <div>
          <UluProgressCircle label="Pie, No Mask" :percentage="30" :pieStyle="true" :noMask="true" />
          <p style="text-align: center; margin-top: 0.5rem;">Pie, No Mask</p>
        </div>
      </div>
    `})},o={render:i=>({components:{UluProgressCircle:c,UluButton:p},setup(){const r=g(10);return{args:i,percentage:r,increase:()=>{r.value=Math.min(100,r.value+10)},decrease:()=>{r.value=Math.max(0,r.value-10)}}},template:`
      <div style="padding: 1rem;">
        <UluProgressCircle v-bind="args" :percentage="percentage" />
        <div style="margin-top: 1rem;">
          <UluButton @click="increase" text="Increase" />
          <UluButton @click="decrease" text="Decrease" />
        </div>
      </div>
    `}),args:{label:"Animated Progress"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Progress',
    percentage: 75
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    outside: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    percentage: 45,
    small: true
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UluProgressCircle
    },
    template: \`
      <div style="display: flex; gap: 2rem; align-items: center; padding: 1rem;">
        <div>
          <UluProgressCircle label="Low Status" :percentage="25" status="low" />
          <p style="text-align: center; margin-top: 0.5rem;">Low</p>
        </div>
        <div>
          <UluProgressCircle label="Incomplete Status" :percentage="75" status="incomplete" />
          <p style="text-align: center; margin-top: 0.5rem;">Incomplete</p>
        </div>
        <div>
          <UluProgressCircle label="Complete Status" :percentage="100" status="complete" />
          <p style="text-align: center; margin-top: 0.5rem;">Complete</p>
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    percentage: 60,
    pieStyle: true
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UluProgressCircle
    },
    template: \`
      <div style="display: flex; gap: 2rem; align-items: center; padding: 1rem;">
        <div>
          <UluProgressCircle label="Small, Outside Below" :percentage="50" :small="true" :outsideBelow="true" />
          <p style="text-align: center; margin-top: 0.5rem;">Small, Outside Below</p>
        </div>
        <div>
          <UluProgressCircle label="No Mask" :percentage="80" :noMask="true" />
          <p style="text-align: center; margin-top: 0.5rem;">No Mask</p>
        </div>
        <div>
          <UluProgressCircle label="Pie, No Mask" :percentage="30" :pieStyle="true" :noMask="true" />
          <p style="text-align: center; margin-top: 0.5rem;">Pie, No Mask</p>
        </div>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluProgressCircle,
      UluButton
    },
    setup() {
      const percentage = ref(10);
      const increase = () => {
        percentage.value = Math.min(100, percentage.value + 10);
      };
      const decrease = () => {
        percentage.value = Math.max(0, percentage.value - 10);
      };
      return {
        args,
        percentage,
        increase,
        decrease
      };
    },
    template: \`
      <div style="padding: 1rem;">
        <UluProgressCircle v-bind="args" :percentage="percentage" />
        <div style="margin-top: 1rem;">
          <UluButton @click="increase" text="Increase" />
          <UluButton @click="decrease" text="Decrease" />
        </div>
      </div>
    \`
  }),
  args: {
    label: 'Animated Progress'
  }
}`,...o.parameters?.docs?.source}}};const P=["Default","WithValueOutside","Small","Statuses","PieStyle","Customizations","Animated"];export{o as Animated,l as Customizations,e as Default,s as PieStyle,n as Small,a as Statuses,t as WithValueOutside,P as __namedExportsOrder,y as default};
