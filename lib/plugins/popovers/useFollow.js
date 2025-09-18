import { ref, computed } from "vue";
import { useRequiredInject } from '../../composables/useRequiredInject.js';
import { TooltipStateKey, PopoverOptionsKey } from './index.js';
import defaults from './defaults.js';

const noOp = () => {};

export default function useFollowPoint(userOptions) {
  const tooltip = useRequiredInject(TooltipStateKey);
  const allOptions = useRequiredInject(PopoverOptionsKey);

  if (!userOptions.content) {
    console.warn("Missing content for 'useFollowPoint' tooltip", userOptions);
  }

  let _update;

  const x = ref(0);
  const y = ref(0);

  const virtualTrigger = computed(() => ({
    getBoundingClientRect() {
      return {
        width: 0,
        height: 0,
        x: x.value,
        y: y.value,
        top: y.value,
        left: x.value,
        right: x.value,
        bottom: y.value,
      };
    },
  }));

  const popoverDefaults = allOptions ? allOptions.popover : defaults.popover;
  const tooltipDefaults = allOptions ? allOptions.tooltip : defaults.tooltip;
  const mergedDefaults = { ...popoverDefaults, ...tooltipDefaults };

  const config = {
    ...mergedDefaults,
    content: userOptions.content,
    inline: false, // Following cursor is never inline
    onReady({ update }) {
      _update = update;
    }
  };

  return {
    x,
    y,
    show() {
      tooltip.show(virtualTrigger.value, config);
    },
    hide() {
      if (tooltip.state.trigger === virtualTrigger.value) {
        tooltip.hide();
      }
    },
    update(changes) {
      x.value = changes.x;
      y.value = changes.y;
      if (_update) {
        _update();
      }
    },
  };
}