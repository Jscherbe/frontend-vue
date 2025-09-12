import{am as o,U as l,z as s}from"./iframe-CI7Pek9W.js";import"./preload-helper-BJwshlQW.js";const U={component:o,tags:["autodocs"],argTypes:{value:{control:{type:"number",min:0,max:1e3,step:1},description:"The target number to animate to."}},args:{value:0}},t={render:u=>({components:{UluAnimateNumber:o,UluButton:l},setup(){const e=s(u.value);return{animatedValue:e,increment:()=>{e.value+=100},decrement:()=>{e.value-=50},reset:()=>{e.value=0}}},template:`
      <div>
        <p>Current Animated Value: <strong style="font-size: 2em;"><UluAnimateNumber :value="animatedValue" /></strong></p>
        <UluButton @click="increment">Increment (+100)</UluButton>
        <UluButton @click="decrement">Decrement (-50)</UluButton>
        <UluButton @click="reset">Reset (0)</UluButton>
        <p style="margin-top: 1rem;">Adjust the 'value' control or use the buttons to see the animation.</p>
      </div>
    `}),args:{value:123}},n={render:t.render,args:{value:98765}},r={render:t.render,args:{value:-500}},a={render:u=>({components:{UluAnimateNumber:o,UluButton:l},setup(){const e=s(u.value),m=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return{animatedValue:e,formatter:m}},template:`
      <div>
        <p>Currency Formatted with Slot: <strong style="font-size: 2em;">
          <UluAnimateNumber :value="animatedValue">
            <template #default="{ currentValue }">
              {{ formatter.format(currentValue) }}
            </template>
          </UluAnimateNumber>
        </strong></p>
        <UluButton @click="animatedValue += 100">Increment (+100)</UluButton>
        <UluButton @click="animatedValue -= 50">Decrement (-50)</UluButton>
      </div>
    `}),args:{value:1234.56}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluAnimateNumber,
      UluButton
    },
    setup() {
      const animatedValue = ref(args.value);
      const increment = () => {
        animatedValue.value += 100;
      };
      const decrement = () => {
        animatedValue.value -= 50;
      };
      const reset = () => {
        animatedValue.value = 0;
      };
      return {
        animatedValue,
        increment,
        decrement,
        reset
      };
    },
    template: \`
      <div>
        <p>Current Animated Value: <strong style="font-size: 2em;"><UluAnimateNumber :value="animatedValue" /></strong></p>
        <UluButton @click="increment">Increment (+100)</UluButton>
        <UluButton @click="decrement">Decrement (-50)</UluButton>
        <UluButton @click="reset">Reset (0)</UluButton>
        <p style="margin-top: 1rem;">Adjust the 'value' control or use the buttons to see the animation.</p>
      </div>
    \`
  }),
  args: {
    value: 123
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  // Reuse the render function
  args: {
    value: 98765
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  // Reuse the render function
  args: {
    value: -500
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluAnimateNumber,
      UluButton
    },
    setup() {
      const animatedValue = ref(args.value);
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      return {
        animatedValue,
        formatter
      };
    },
    template: \`
      <div>
        <p>Currency Formatted with Slot: <strong style="font-size: 2em;">
          <UluAnimateNumber :value="animatedValue">
            <template #default="{ currentValue }">
              {{ formatter.format(currentValue) }}
            </template>
          </UluAnimateNumber>
        </strong></p>
        <UluButton @click="animatedValue += 100">Increment (+100)</UluButton>
        <UluButton @click="animatedValue -= 50">Decrement (-50)</UluButton>
      </div>
    \`
  }),
  args: {
    value: 1234.56
  }
}`,...a.parameters?.docs?.source}}};const v=["Default","LargeNumber","NegativeNumber","SlotWithCustomFormat"];export{t as Default,n as LargeNumber,r as NegativeNumber,a as SlotWithCustomFormat,v as __namedExportsOrder,U as default};
