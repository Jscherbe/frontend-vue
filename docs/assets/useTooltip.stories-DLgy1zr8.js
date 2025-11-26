import{ref as c}from"vue";import{d as a,T as p,P as u,g as d}from"./iframe-B-E22KK1.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";function m(){const t=a(p),e=a(u),i={...e.popover,...e.tooltip};return{showTooltip:(o,l)=>{const r=d(l,i);r&&t.show(o,r)},hideTooltip:t.hide,tooltipState:t.state}}const S={tags:["autodocs"],parameters:{docs:{description:{component:`The 
      useTooltip
       composable provides a directive-free, programmatic way to control the global tooltip.`}}}},n=t=>({setup(){const{showTooltip:e,hideTooltip:i,tooltipState:s}=m(),o=c(null);return{args:t,buttonEl:o,show:()=>{o.value&&e(o.value,{content:`This tooltip is controlled by a composable!
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
})`,...n.parameters?.docs?.source}}};const k=["ProgrammaticControl"];export{n as ProgrammaticControl,k as __namedExportsOrder,S as default};
