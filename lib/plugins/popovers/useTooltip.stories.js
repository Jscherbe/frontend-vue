import { ref } from 'vue';
import { useTooltip } from './useTooltip.js';

export default {
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `The 
      useTooltip
       composable provides a directive-free, programmatic way to control the global tooltip.`
      }
    }
  }
};

export const ProgrammaticControl = (args) => ({
  setup() {
    const { showTooltip, hideTooltip, tooltipState } = useTooltip();
    const buttonEl = ref(null);

    const show = () => {
      if (!buttonEl.value) return;
      showTooltip(buttonEl.value, {
        content: 'This tooltip is controlled by a composable!\nClick the hide button to close it.',
        placement: 'bottom'
      });
    };

    return { args, buttonEl, show, hide: hideTooltip, tooltipState };
  },
  template: `
    <div style="padding: 5rem; text-align: center;">
      <button ref="buttonEl" @click="show" class="button">
        Click to Show Tooltip
      </button>
      <button v-if="tooltipState.visible" @click="hide" class="button is-text">
        (Hide)
      </button>
    </div>
  `,
});
