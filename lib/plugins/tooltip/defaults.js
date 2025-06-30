export default {
  /**
   * Default Plugin Options
   * @type {Object}
   */  
  plugin: {
    /**
     * The directive name to use (default 'tooltip' = <el v-tooltip="'hello world'">)
     * @type {String}
     */
    directiveName: "tooltip",
    /**
     * The element that the tooltip should be rendered within
     * - Default bottom of the body (on top of everything)
     * - Doesn't need to be inline for accessiblity since tooltips are just an enhancement
     *   content displayed within them should be hidden for assitive devices, 
     *   they are not visible to assistive devices
     * @type {String}
     */    
    teleportTo: "body",
  },
  /**
   * Default Tooltip Options
   * @type {Object}
   */
  tooltip: {
    /**
     * Optional class binding for tooltip element
     * @type {String|Object|Array}
     */
    class: null,
    /**
     * Events to show tooltip on
     * @type {Array.<String>}
     */    
    showEvents: ["pointerenter", "focus"],
    /**
     * Events to hide tooltip on
     * @type {Array.<String>}
     */
    hideEvents: ["pointerleave", "blur"],
    /**
     * Content should be output as plain HTML (ie v-html)
     * - Note don't include interactive elements in tooltips!
     * @type {Boolean}
     */
    isHtml: false,
    /**
     * Element for floating ui to use as reference (can be virtual) or vue ref to element
     * @type {Node|Object}
     */
    reference: null,
    /**
     * The content of the tooltip (String, Reactive ref or HTML [see isHtml option])
     * @type {String|Object}
     */
    content: null,
    /**
     * Include the floating-ui inline middleware (for inline elements that wrap)
     * @type {Boolean}
     */
    inline: true,
    /**
     * Delay when using the directive
     * @type {Number}
     */
    delay: 500,
    /**
     * Pplacement for floating-ui)
     * @type {String}
     */    
    placement: "bottom", 
    /**
     * Strategy for floating-ui (strategy)
     * @type {String}
     */
    strategy: "absolute",
    /**
     * Include the floating-ui offset middleware, 
     * @type {Number}
     */
    offset: 16,
    /**
     * Include the floating-ui arrow middleware
     * @type {Boolean}
     */
    arrow: true,
    /**
     * Callback that is passed { update, isPositioned } for manual things
     */
    onReady: null
  },
};