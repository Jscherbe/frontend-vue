import { ref as l, markRaw as r } from "vue";
const n = [], c = l({
  /**
   * Holds active component options (including component, and options)
   */
  active: null,
  /**
   * Populated with any props passed to open method, bound to modal component
   */
  activeProps: null
}), a = c.value, d = {
  data: a,
  modals: n
}, m = (s) => ({
  open(t, e = null) {
    const o = this.get(t);
    a.active = r(o), a.activeProps = Object.assign({}, o.props, e);
  },
  /**
   * Close the active modal
   * @param {String|Node} focusTo The element or selector for an element to programmatically focus after modal close
   * @see https://www.deque.com/blog/accessible-routing-in-javascript-frameworks/
   */
  close() {
    a.active = null, a.activeProps = null;
  },
  /**
   * Get a modal's config object by name
   * @return {Object} Modal config object
   */
  get(t) {
    const e = n.find((o) => o.name === t);
    if (e)
      return e;
    throw new Error(`Unable to find modal named: ${t}`);
  },
  /**
   * Add a modal config
   */
  add(t) {
    const e = s(t);
    n.push(e);
  },
  /**
   * Removes a modal config by name
   * @return {Object} Modal that was removed
   */
  remove(t) {
    const e = n.findIndex((o) => o.name === t);
    if (e > -1)
      return n.splice(e, 1);
    warn("unable to find modal to remove");
  }
});
export {
  m as createApi,
  d as modalsState
};
