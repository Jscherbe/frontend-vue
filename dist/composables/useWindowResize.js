import { ref as f } from "vue";
import { debounce as u } from "@ulu/utils/performance.js";
import { isBrowser as c } from "@ulu/utils/browser/dom.js";
const t = f(!1), n = {
  start: [],
  end: []
};
function r() {
  window.removeEventListener("resize", r), t.value = !0, n.start.forEach((e) => e());
}
function a() {
  t.value = !1, n.end.forEach((e) => e()), window.addEventListener("resize", r);
}
c() && (window.addEventListener("resize", r), window.addEventListener("resize", u(a, 300)));
function s(e, i) {
  return e.push(i), () => {
    const o = e.findIndex((d) => d === i);
    o > -1 && e.splice(o);
  };
}
function m() {
  return {
    resizing: t,
    onResizeStart(e) {
      return s(n.start, e);
    },
    onResizeEnd(e) {
      return s(n.end, e);
    }
  };
}
export {
  m as useWindowResize
};
