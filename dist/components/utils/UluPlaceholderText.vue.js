import { createElementBlock as n, openBlock as u, Fragment as s, renderList as a, createBlock as r, resolveDynamicComponent as l, withCtx as c, createTextVNode as m } from "vue";
const p = {
  __name: "UluPlaceholderText",
  props: {
    amount: {
      type: Number,
      default: 1
    },
    element: {
      type: String,
      default: "p"
    }
  },
  setup(e) {
    return (o, t) => (u(!0), n(s, null, a(parseInt(e.amount), (i) => (u(), r(l(e.element), { key: i }, {
      default: c(() => [...t[0] || (t[0] = [
        m(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat tincidunt tellus vestibulum dictum. Fusce vel augue commodo, egestas diam sed, accumsan leo. Maecenas congue nec nisl et ullamcorper. Maecenas tincidunt, tortor et viverra eleifend, enim leo vestibulum ipsum, quis placerat mi nisi nec ex. Vivamus a justo volutpat, scelerisque elit eget, lacinia ex. Phasellus dapibus sollicitudin tortor, vitae suscipit nunc condimentum ut. Cras suscipit feugiat nibh nec consectetur. Phasellus vitae quam blandit, cursus metus ut, placerat mi. Sed tempor lacus non est interdum imperdiet nec quis metus. Praesent vel eleifend diam. Donec tincidunt eget purus sed posuere. ", -1)
      ])]),
      _: 2
    }, 1024))), 128));
  }
};
export {
  p as default
};
