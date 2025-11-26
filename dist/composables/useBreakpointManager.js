import { ref as t, markRaw as c } from "vue";
import { isBrowser as p } from "@ulu/utils/browser/dom.js";
const m = {
  /**
   * Set an initial value (value in mounted, SSR)
   */
  initialValue: null,
  /**
   * Function called after init (passed manager)
   */
  onReady: null,
  /**
   * Options sent to CssBreakpoints library
   */
  plugin: {
    customProperty: "--breakpoint"
  }
};
function w(l) {
  const e = Object.assign({}, m, l), a = t(null), i = t(e.initialValue), o = t(null);
  return (async () => {
    if (!p()) return;
    await new Promise((s) => {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => s()) : s();
    });
    const u = await import("@ulu/frontend"), { BreakpointManager: d } = u, n = c(new d(e.plugin));
    a.value = c(n);
    const r = () => {
      i.value = n.active, o.value = n.resizeDirection;
    };
    r(), e.onReady && e.onReady(n), n.onChange(r);
  })(), { breakpointManager: a, breakpointActive: i, breakpointDirection: o };
}
export {
  w as useBreakpointManager
};
