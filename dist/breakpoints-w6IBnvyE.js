import { l as o, r as h, a as p, g as v } from "./index-C_oFlupk.js";
const k = {
  iconClassClose: "css-icon css-icon--close",
  iconClassDragX: "css-icon css-icon--drag-x",
  iconClassDragBoth: "css-icon css-icon--drag-both",
  iconClassPrevious: "css-icon  css-icon--angle-left",
  iconClassNext: "css-icon  css-icon--angle-right",
  cssvarPrefix: ""
};
let f = { ...k };
function x(s) {
  if (!f.hasOwnProperty(s)) {
    console.warn(`Attempted to access non-existent setting: ${s}`);
    return;
  }
  return f[s];
}
function b(s, t) {
  return {
    toString() {
      const e = x(s);
      return t ? t(e) : e;
    }
  };
}
function y(s, t) {
  return `--${s}-${t}`;
}
const C = (s) => y(s, "breakpoint");
window.addEventListener(v("pageResized"), () => {
  a.instances.forEach((s) => s.update());
});
class a {
  static instances = [];
  static defaults = {
    element: document?.documentElement,
    valueFromPseudo: !1,
    customProperty: "--breakpoint",
    customProperty: b("cssvarPrefix", C),
    pseudoSelector: ":before",
    order: ["none", "small", "medium", "large"],
    debug: !1
  };
  /**
   * @param {Object} config Configuration object
   * @param {Array} config.order Array of strings that correspond to the breakpoints setup in the styles, Breakpoints from smallest to largest, defaults to [small, medium, large]
   * @param {Array} config.customProperty Property to grab breakpoint from (default is --breakpoint)
   * @param {Array} config.valueFromPseudo Use the legacy method of grabbing breakpoint from pseudo element, default uses custom property
   * @param {Node} config.element The element to retrieve active breakpoint from stylesheet. (default is html) For using the old pseudo method, adjust this to document.body
   * @param {String} config.pseudoSelector Change pseudo selector used to get the breakpoint from the pseudo's content property
   */
  constructor(t) {
    Object.assign(this, a.defaults, t), this.active = null, this.previous = null, this.activeIndex = null, this.resizeDirection = null, this.previousIndex = null, this.breakpoints = {}, this.onChangeCallbacks = [], this.order.forEach((e) => this.breakpoints[e] = new P(e, this)), o(this, this), this.update(), a.instances.push(this);
  }
  /**
   * Add a callback for every time a breakpoint changes
   * - Not recommended, possibly use to watch for changes, etc
   * - For more control use instance.at(name) with breakpoint methods
   * @param {Function} callback Function to call, passed one argument current instance which can be used to get information about breakpoints
   */
  onChange(t) {
    this.onChangeCallbacks.push(t);
  }
  /**
   * Remove change callback
   * @param {Function} callback Function to remove
   */
  removeOnChange(t) {
    h(this.onChangeCallbacks, t);
  }
  /**
   * Get breakpoint from a pseudo element
   */
  getBreakpointInPseudo() {
    return window.getComputedStyle(this.element, this.pseudoSelector).content.replace(/^"|"$/g, "");
  }
  /**
   * Get breakpoint from a custom property
   */
  getBreakpointInProperty() {
    return getComputedStyle(this.element).getPropertyValue(this.customProperty).trim();
  }
  /**
   * Get breakpoint from element (design note: user could override prototype)
   */
  getBreakpoint() {
    return this.valueFromPseudo ? this.getBreakpointInPseudo() : this.getBreakpointInProperty();
  }
  /**
   * Updates the active breakpoint by checking the element and executes handlers on change
   */
  update() {
    const t = this.getBreakpoint();
    if (!t) {
      p(this, "Unable to get current breakpoint, maybe order is incorrect? Breakpoint check skipped!");
      return;
    }
    if (t === this.active) return;
    this.previous = this.active, this.previousIndex = this.activeIndex;
    const e = this.order.indexOf(t);
    this.active = t, this.activeIndex = e;
    const r = this.at(this.active), n = (i) => this.at(i), l = this.order.slice(e).map(n), m = this.order.slice(0, e).map(n), d = this.order.slice(0, e + 1).map(n), g = this.order.slice(e + 1).map(n), u = this.order.slice().map(n);
    u.splice(e, 1), o(this, "max:", l.map((i) => i.name).join()), o(this, "min:", d.map((i) => i.name).join()), l.forEach((i) => i._setDirection("max", !0)), d.forEach((i) => i._setDirection("min", !0)), r._setDirection("only", !0), m.forEach((i) => i._setDirection("max", !1)), g.forEach((i) => i._setDirection("min", !1)), u.forEach((i) => i._setDirection("only", !1)), this.previousIndex !== null && (this.resizeDirection = this.previousIndex < e ? "up" : "down"), this.onChangeCallbacks.forEach((i) => i(this));
  }
  /**
   * Get a breakpoint by key
   * @param {String} name The name of the breakpoint to get
   * @return {Breakpoint} Breakpoint to act on (see Breakpoint class)
   */
  at(t) {
    const e = this.breakpoints[t];
    return t || p(this, "Unable to find breakpoint for:", e), e;
  }
}
class c {
  constructor(t, e) {
    this.direction = t, this.active = !1, this.on = [], this.off = [], this.breakpoint = e;
  }
  /**
   * Change the state of the direction
   */
  change(t) {
    this.active !== t && (t ? this._call(!0) : this.active && this._call(!1), this.active = t);
  }
  /**
   * Calls all functions in handlers or
   */
  _call(t) {
    (t ? this.on : this.off).forEach((r) => r()), o(this.breakpoint._manager, `Handlers called (${t ? "on" : "off"}): ${this.direction}`);
  }
  /**
   * Returns handlers in normalized object format on/off
   */
  getHandlers(t) {
    return typeof t != "object" ? { on: t } : t;
  }
  /**
   * Adds a handler for the direction, optionally use object to add off state handler
   * @param {Function|Object} handler Function to be executed when direction is active, read object description for on/off
   * @param {Function|Object} handler.on Function to be executed when direction is active
   * @param {Function|Object} handler.off Function to be executed when direction was active and is now changed to inactive
   */
  add(t) {
    const e = this.getHandlers(t);
    e.on && this.on.push(e.on), e.off && this.off.push(e.off), this.active && e.on && (e.on(), o(this.breakpoint._manager, `Handler called immediately: ${this.direction}`, e.on));
  }
  /**
   * Removes a handler
   */
  remove(t) {
    const e = this.getHandlers(t);
    e.on && h(this.on, e.on), e.off && h(this.off, e.off);
  }
}
class P {
  constructor(t, e) {
    this.directions = {
      max: new c("max", this),
      min: new c("min", this),
      only: new c("only", this)
    }, this._manager = e, this.name = t;
  }
  /**
   * Private method used inrternally for managing direction activation
   * - Each direction manages it's own state and handlers
   * @param {String} direction The directional key
   * @param {Boolean} active State of that direction to set
   */
  _setDirection(t, e) {
    this.directions[t].change(e);
  }
  /**
   * Attach handler to be executed from the breakpoint and to all breakpoints below.
   * - If the browser resizes from a breakpoint below this breakpoint, 
   *   and above the breakpoint name specified, this handler will fire
   * @param {Function} handler Handler to be executed
   */
  max(t) {
    this.directions.max.add(t);
  }
  /**
   * Attach handler to be executed from the breakpoint and to all breakpoints below.
   * - If the browser resizes from a breakpoint above this breakpoint, 
   *   and below the breakpoint name specified, this handler will fire
   * @param {Function} handler Handler to be executed
   */
  min(t) {
    this.directions.min.add(t);
  }
  /**
   * Attach a handler to fire when the breakpoint is within the key
   * @param {Function} handler Handler to be executed
   */
  only(t) {
    this.directions.only.add(t);
  }
  /**
   * Remove handler
   * @param {Function} handler Handler to be removed, extended on/off object style can be used
   * @param {String} direction Remove handler only from specified direction, else search all directions
   */
  remove(t, e) {
    (e ? [e] : ["max", "min", "only"]).forEach((n) => n.remove(t));
  }
  log(...t) {
    t.unshift(`Breakpoint (${this.name}):`), this._manager.log.apply(this._manager, t);
  }
}
export {
  a as BreakpointManager
};
