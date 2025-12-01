import p from"gsap";import{createElementBlock as v,openBlock as g,renderSlot as U,createTextVNode as f,toDisplayString as b,ref as m}from"vue";import{a as V}from"./iframe-DYOmpgae.js";import{U as c}from"./UluButton-CVFX2koK.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";const i={name:"AnimateNumber",props:{value:Number},watch:{value(){p.to(this,{tweenValue:this.value,onUpdate:()=>{this.currentValue=Math.ceil(this.tweenValue)}})}},data(){return{currentValue:this.value,tweenValue:this.value}}};function h(n,e,o,d,l,B){return g(),v("span",null,[U(n.$slots,"default",{currentValue:l.currentValue},()=>[f(b(l.currentValue),1)])])}const s=V(i,[["render",h]]);i.__docgenInfo={displayName:"AnimateNumber",description:"Animates a number from a previous value to a new value.",tags:{slot:[{description:"default - The default slot for customizing the display of the number.",title:"slot"}],binding:[{title:"binding",type:{name:"number"},name:"currentValue",description:"The current animated value."}]},exportName:"default",props:[{name:"value",description:"The target number to animate to.",type:{name:"number"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"currentValue",title:"binding"}]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/visualizations/UluAnimateNumber.vue"]};const x={component:s,tags:["autodocs"],argTypes:{value:{control:{type:"number",min:0,max:1e3,step:1},description:"The target number to animate to."}},args:{value:0}},t={render:n=>({components:{UluAnimateNumber:s,UluButton:c},setup(){const e=m(n.value);return{animatedValue:e,increment:()=>{e.value+=100},decrement:()=>{e.value-=50},reset:()=>{e.value=0}}},template:`
      <div>
        <p>Current Animated Value: <strong style="font-size: 2em;"><UluAnimateNumber :value="animatedValue" /></strong></p>
        <UluButton @click="increment">Increment (+100)</UluButton>
        <UluButton @click="decrement">Decrement (-50)</UluButton>
        <UluButton @click="reset">Reset (0)</UluButton>
        <p style="margin-top: 1rem;">Adjust the 'value' control or use the buttons to see the animation.</p>
      </div>
    `}),args:{value:123}},r={render:t.render,args:{value:98765}},a={render:t.render,args:{value:-500}},u={render:n=>({components:{UluAnimateNumber:s,UluButton:c},setup(){const e=m(n.value),o=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return{animatedValue:e,formatter:o}},template:`
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  // Reuse the render function
  args: {
    value: 98765
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  // Reuse the render function
  args: {
    value: -500
  }
}`,...a.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const z=["Default","LargeNumber","NegativeNumber","SlotWithCustomFormat"];export{t as Default,r as LargeNumber,a as NegativeNumber,u as SlotWithCustomFormat,z as __namedExportsOrder,x as default};
