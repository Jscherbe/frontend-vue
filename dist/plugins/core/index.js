import { reactive as c } from "vue";
const o = {
  fontAwesomeStatic: !1,
  iconComponent: null,
  iconPropResolver: (n) => ({ icon: n }),
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
    dropdownExpand: "fas fa-caret-down",
    search: "fas fa-search"
  }
};
function p(n, f = {}) {
  const t = c({ ...o }), { iconsByType: r, ...i } = f || {};
  i && Object.assign(t, i);
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
    updateSetting(e, a) {
      if (typeof e != "string")
        throw new Error("Expected key to be string");
      t[e] = a;
    },
    getIcon(e) {
      const a = t.iconsByType;
      if (!a[e])
        throw new Error(`Icon type "${e}" not found!`);
      return a[e];
    },
    setIcon(e, a) {
      t.iconsByType[e] = a;
    }
  };
  if (r)
    for (const [e, a] of Object.entries(r))
      s.setIcon(e, a);
  n.provide("uluCore", s), n.config.globalProperties.$uluCore = s;
}
export {
  p as default
};
