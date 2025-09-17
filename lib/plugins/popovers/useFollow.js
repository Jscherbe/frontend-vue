import { ref, inject, computed } from "vue";
import { TooltipStateKey, PopoverOptionsKey } from './index.js';
import defaults from './defaults.js';

const noOp = () => {};

export default function useFollowPoint(userOptions) {
  const tooltip = inject('uluTooltipState');
  const allOptions = inject('uluPopoverOptions');

  if (!tooltip) {
    console.warn('[useFollow] requires <UluTooltipDisplay> to be installed at the root.');
    return { x: ref(0), y: ref(0), show: noOp, hide: noOp, update: noOp };
  }

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