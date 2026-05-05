import{l as c}from"./fontawesome-DyrJdE5N.js";import{h as r,T as p,P as u,l as d}from"./iframe-DFeB4tIX.js";import"./preload-helper-BJwshlQW.js";function h(){const t=r(p),e=r(u),i={...e.popover,...e.tooltip};return{showTooltip:(o,l)=>{const a=d(l,i);a&&t.show(o,a)},hideTooltip:t.hide,tooltipState:t.state}}const f={tags:["autodocs"],parameters:{docs:{description:{component:`The 
      useTooltip
       composable provides a directive-free, programmatic way to control the global tooltip.`}}}},n=t=>({setup(){const{showTooltip:e,hideTooltip:i,tooltipState:s}=h(),o=c(null);return{args:t,buttonEl:o,show:()=>{o.value&&e(o.value,{content:`This tooltip is controlled by a composable!
Click the hide button to close it.`,placement:"bottom"})},hide:i,tooltipState:s}},template:`
    <div style="padding: 5rem; text-align: center;">
      <button ref="buttonEl" @click="show" class="button">
        Click to Show Tooltip
      </button>
      <button v-if="tooltipState.visible" @click="hide" class="button is-text">
        (Hide)
      </button>
    </div>
  `});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
  setup() {
    const {
      showTooltip,
      hideTooltip,
      tooltipState
    } = useTooltip();
    const buttonEl = ref(null);
    const show = () => {
      if (!buttonEl.value) return;
      showTooltip(buttonEl.value, {
        content: 'This tooltip is controlled by a composable!\\nClick the hide button to close it.',
        placement: 'bottom'
      });
    };
    return {
      args,
      buttonEl,
      show,
      hide: hideTooltip,
      tooltipState
    };
  },
  template: \`
    <div style="padding: 5rem; text-align: center;">
      <button ref="buttonEl" @click="show" class="button">
        Click to Show Tooltip
      </button>
      <button v-if="tooltipState.visible" @click="hide" class="button is-text">
        (Hide)
      </button>
    </div>
  \`
})`,...n.parameters?.docs?.source}}};const v=["ProgrammaticControl"];export{n as ProgrammaticControl,v as __namedExportsOrder,f as default};
