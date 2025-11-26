import { watchEffect as a, unref as d, reactive as f, onUnmounted as T, computed as h } from "vue";
import { useHead as R } from "@unhead/vue";
import { useRoute as H } from "vue-router";
import { getRouteTitle as v } from "../utils/router.js";
const e = f({});
function x(r = {}) {
  const {
    title: o,
    titleTemplate: s = "%s",
    useRoute: i = H,
    useHead: c = R
  } = r, t = i(), n = t.path;
  if (o !== void 0) {
    a(() => {
      e[n] = d(o);
    }), T(() => {
      delete e[n];
    });
    return;
  }
  const m = h(() => {
    const p = e[t.path], l = v(t, t), u = p || l;
    return u ? s.replace("%s", u) : "App";
  });
  c({
    title: m
  });
}
export {
  x as useDocumentTitle
};
