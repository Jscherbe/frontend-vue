import { ref as b, computed as o } from "vue";
import { useBreakpointManager as f } from "../../composables/useBreakpointManager.js";
const d = {
  /**
   * Breakpoint for mobile down/max
   */
  breakpointMobile: "small",
  /**
   * Options to pass to useBreakpointManager()
   */
  managerOptions: {}
};
function k(e, r) {
  const n = b(!1), a = Object.assign({}, d, r), { breakpointMobile: s } = a, { onReady: t } = a.managerOptions, l = {
    onReady(i) {
      i.at(s).max({
        on() {
          n.value = !0;
        },
        off() {
          n.value = !1;
        }
      }), t && t(i);
    }
  }, u = Object.assign({}, a.managerOptions, l), {
    breakpointManager: p,
    breakpointActive: c,
    breakpointDirection: v
  } = f(u);
  e.provide("uluBreakpointActive", o(() => c.value)), e.provide("uluBreakpointDirection", o(() => v.value)), e.provide("uluBreakpointManager", o(() => p.value)), e.provide("uluIsMobile", o(() => n.value));
}
export {
  k as default
};
