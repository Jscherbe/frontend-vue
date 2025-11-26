import { reactive as c } from "vue";
const o = {
  fontAwesomeStatic: !1,
  iconComponent: null,
  iconPropResolver: (a) => ({ icon: a }),
  iconsByType: {
    danger: "fas fa-triangle-exclamation",
    warning: "fas fa-circle-exclamation",
    info: "fas fa-circle-info",
    success: "fas fa-circle-check",
    externalLink: "fas fa-arrow-up-right-from-square",
    close: "fas fa-xmark",
    remove: "fas fa-xmark",
    expand: "fas fa-plus",
    collapse: "fas fa-minus",
    resizeHorizontal: "fas fa-grip-lines-vertical",
    resizeVertical: "fas fa-grip-lines",
    resizeBoth: "fas fa-grip",
    ellipsis: "fas fa-ellipsis",
    pathSeparator: "fas fa-chevron-right",
    image: "fas fa-image",
    file: "fas fa-file",
    previous: "fas fa-chevron-left",
    next: "fas fa-chevron-right",
    dropdownExpand: "fas fa-caret-down"
  }
};
function p(a, f = {}) {
  const t = c({ ...o }), { iconsByType: i, ...r } = f || {};
  r && Object.assign(t, r);
  const s = {
    // Methods to interact with settings
    getSettings() {
      return t;
    },
    getDefaultSettings() {
      return { ...o };
    },
    updateSettings(e) {
      return Object.assign(t, e);
    },
    getSetting(e) {
      if (!t.hasOwnProperty(e)) {
        console.warn(`Attempted to access non-existent setting: ${e}`);
        return;
      }
      return t[e];
    },
    updateSetting(e, n) {
      if (typeof e != "string")
        throw new Error("Expected key to be string");
      t[e] = n;
    },
    getIcon(e) {
      const n = t.iconsByType;
      if (!n[e])
        throw new Error(`Icon type "${e}" not found!`);
      return n[e];
    },
    setIcon(e, n) {
      t.iconsByType[e] = n;
    }
  };
  if (i)
    for (const [e, n] of Object.entries(i))
      s.setIcon(e, n);
  a.provide("uluCore", s), a.config.globalProperties.$uluCore = s;
}
export {
  p as default
};
