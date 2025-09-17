import { inject } from 'vue';
import { TooltipStateKey } from './index.js';

const noOp = () => {};

/**
 * Composable to programmatically control the global tooltip.
 * @returns {{showTooltip: Function, hideTooltip: Function, tooltipState: object}}
 */
export function useTooltip() {
  const tooltip = inject(TooltipStateKey);

  if (!tooltip) {
    console.warn('[useTooltip] requires the popoversPlugin to be installed.');
    // Return a no-op API if the provider is not found
    return {
      showTooltip: noOp,
      hideTooltip: noOp,
      tooltipState: { visible: false }
    };
  }

  return {
    showTooltip: tooltip.show,
    hideTooltip: tooltip.hide,
    tooltipState: tooltip.state
  };
}
