import { ref } from "vue";
import { show, hide, createConfig } from "./manager.js";

const defaults = {
  content: null
};

export default function useFollowPoint(userOptions) {
  if (!userOptions.content) {
    console.warn("Missing content for 'useFollowPoint' tooltip", userOptions);
  }
  const options = Object.assign({}, defaults, userOptions);

  let _update;

  const x = ref(0);
  const y = ref(0);

  const config = createConfig({
    reference: ref({
      getBoundingClientRect() {
        const currentX = x.value;
        const currentY = y.value;
        return {
          width: 0,
          height: 0,
          x: currentX,
          left: currentX,
          right: currentX,
          y: currentY,
          top: currentY,
          bottom: currentY,
        };
      }
    }),
    content: options.content,
    inline: false,
    onReady({ update }) {
      _update = update;
    }
  });

  return {
    /**
     * Reactive X value
     * @type {Object}
     */
    x,
    /**
     * Reactive Y value
     * @type {Object}
     */
    y,
    /**
     * Show follow tooltip
     */
    show() {
      show(config);
    },
    /**
     * Hide follow tooltip
     */
    hide() {
      hide(config);
    },
    /**
     * 
     * @param {Object} changes Updates for virtual element
     * @param {Object} changes.x New 'x' value
     * @param {Object} changes.y New 'y' value
     */
    update(changes) {
      x.value = changes.x;
      y.value = changes.y;
      if (_update) {
        _update();
      }
    },
  };
}