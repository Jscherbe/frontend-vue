import { useRequiredInject } from '../../composables/useRequiredInject.js';
import { TooltipStateKey, PopoverOptionsKey, resolveTooltipConfig } from './index.js';

/**
 * Composable to programmatically control the global tooltip.
 * It provides `showTooltip` and `hideTooltip` methods that are consistent
 * with the `v-ulu-tooltip` directive.
 * @returns {{showTooltip: Function, hideTooltip: Function, tooltipState: object}}
 */
export function useTooltip() {
  const tooltip = useRequiredInject(TooltipStateKey);
  const allOptions = useRequiredInject(PopoverOptionsKey);
  const tooltipDefaults = { ...allOptions.popover, ...allOptions.tooltip };

  const show = (triggerEl, rawConfig) => {
    const config = resolveTooltipConfig(rawConfig, tooltipDefaults);
    if (config) {
      tooltip.show(triggerEl, config);
    }
  };

  return {
    showTooltip: show,
    hideTooltip: tooltip.hide,
    tooltipState: tooltip.state
  };
}