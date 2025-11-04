import{av as a,b as m,U as d,I as v}from"./iframe-Cutbdn0G.js";import"./preload-helper-BJwshlQW.js";const S={component:a,tags:["autodocs"],argTypes:{percentage:{control:{type:"range",min:0,max:100,step:1},description:"The progress percentage (0-100)."},status:{control:"select",options:["","low","incomplete","complete"],description:"Sets the status color of the progress circle."},small:{control:"boolean"},outside:{control:"boolean"},outsideBelow:{control:"boolean"},pieStyle:{control:"boolean"},noMask:{control:"boolean"},noValue:{control:"boolean"},formatValue:{table:{disable:!0}}}},e={args:{label:"Progress",percentage:75}},n={args:{...e.args,label:"No Value",percentage:60,noValue:!0}},s={args:{...e.args,label:"Formatted Value",percentage:80,formatValue:r=>`${r}/100`}},l={render:r=>({components:{UluProgressCircle:a,UluIcon:m},setup(){return{args:r}},template:`
      <UluProgressCircle v-bind="args">
        <template #value="{ value }">
          <div style="text-align: center; line-height: 1;">
            <UluIcon icon="type:success" style="font-size: 1.2em;" />
            <div style="font-size: 0.7em; margin-top: 2px;">{{ value }}%</div>
          </div>
        </template>
      </UluProgressCircle>
    `}),args:{...e.args,label:"Custom Value via Slot",percentage:90}},o={args:{...e.args,outside:!0}},c={args:{...e.args,percentage:45,small:!0}},i={render:()=>({components:{UluProgressCircle:a},template:`
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
    `})},p={args:{...e.args,percentage:60,pieStyle:!0}},u={render:()=>({components:{UluProgressCircle:a},template:`
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
    `})},g={render:r=>({components:{UluProgressCircle:a,UluButton:d},setup(){const t=v(10);return{args:r,percentage:t,increase:()=>{t.value=Math.min(100,t.value+10)},decrease:()=>{t.value=Math.max(0,t.value-10)}}},template:`
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
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'No Value',
    percentage: 60,
    noValue: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Formatted Value',
    percentage: 80,
    formatValue: value => \`\${value}/100\`
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluProgressCircle,
      UluIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluProgressCircle v-bind="args">
        <template #value="{ value }">
          <div style="text-align: center; line-height: 1;">
            <UluIcon icon="type:success" style="font-size: 1.2em;" />
            <div style="font-size: 0.7em; margin-top: 2px;">{{ value }}%</div>
          </div>
        </template>
      </UluProgressCircle>
    \`
  }),
  args: {
    ...Default.args,
    label: 'Custom Value via Slot',
    percentage: 90
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    outside: true
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    percentage: 45,
    small: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    percentage: 60,
    pieStyle: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const b=["Default","NoValue","FormattedValue","CustomValueSlot","WithValueOutside","Small","Statuses","PieStyle","Customizations","Animated"];export{g as Animated,l as CustomValueSlot,u as Customizations,e as Default,s as FormattedValue,n as NoValue,p as PieStyle,c as Small,i as Statuses,o as WithValueOutside,b as __namedExportsOrder,S as default};
