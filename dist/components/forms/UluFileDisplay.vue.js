import { computed as c, createElementBlock as m, openBlock as r, renderSlot as u, createVNode as d, createElementVNode as p, createTextVNode as y, createBlock as b, createCommentVNode as x, toDisplayString as S } from "vue";
import w from "../elements/UluIcon.vue.js";
import $ from "../elements/UluTag.vue.js";
const h = ["href", "download"], z = { class: "margin-left-small-x" }, k = {
  __name: "UluFileDisplay",
  props: {
    /**
     * The File object to be displayed.
     */
    file: {
      required: !0,
      type: Object
    },
    /**
     * The icon to display next to the file name.
     */
    icon: {
      type: String,
      default: "type:file"
    },
    /**
     * If true, the file size will not be displayed.
     */
    noFileSize: Boolean
  },
  setup(e) {
    const n = e, s = c(() => typeof window > "u" ? "" : window.URL.createObjectURL(n.file)), i = c(() => {
      const { size: t } = n.file, l = t / 1e6, a = t / 1e3, o = (f) => parseFloat(f.toFixed(2));
      return l > 1 ? `${o(l)}Mb` : a > 1 ? `${o(a)}Kb` : `${o(t)}B`;
    });
    return (t, l) => (r(), m("a", {
      class: "layout-flex-baseline",
      href: s.value,
      download: e.file.name
    }, [
      u(t.$slots, "default", {
        fileName: e.file.name,
        fileSize: i.value
      }, () => [
        d(w, {
          class: "ui-icon",
          icon: e.icon
        }, null, 8, ["icon"]),
        p("span", z, [
          y(S(e.file.name) + " ", 1),
          e.noFileSize ? x("", !0) : (r(), b($, {
            key: 0,
            text: i.value,
            small: "",
            outline: ""
          }, null, 8, ["text"]))
        ])
      ])
    ], 8, h));
  }
};
export {
  k as default
};
