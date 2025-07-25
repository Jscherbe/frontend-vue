<template>
  <component 
    :is="element" 
    class="button" 
    :class="[
      {
        'button--transparent' : transparent,
        'button--primary' : primary,
        'button--secondary' : secondary,
        'button--outline' : outline,
        'button--small' : small,
        'button--large' : large,
        'button--icon' : iconOnly,
        'no-margin' : noMargin,
      },
      classes,
      resolvedModifiers
    ]"
    v-bind="attrs"
    :aria-label="alt || iconOnly && text"
  >
    <slot name="before"/>
    <UluIcon 
      v-if="icon && (iconBefore || iconOnly)"
      :definition="icon"
      class="button__icon"
    />
    <span v-if="($slots.default || text) && !iconOnly">
      <slot>
        {{ text }}
      </slot>
    </span>
    <UluIcon 
      v-if="icon && (!iconBefore && !iconOnly)"
      :definition="icon"
      class="button__icon"
    />
    <slot name="after"/>
  </component>
</template>

<script>
  import { RouterLink } from "vue-router";
  import UluIcon from "./UluIcon.vue";
  import { useModifiers } from "../composables/useModifiers.js";
  export default {
    name: "UluButton",
    components: {
      UluIcon
    },
    props: {
      /**
       * Icon prop, if used will set the icon for the button, will use UluIcon (which uses font-awesome icons conditionally)
       * - If using custom icons don't use this prop, use before or after slots with correct classes (ie .button__icon)
       */
      icon: [String, Array],
      /**
       * If passing an icon (and not using iconOnly) this determines if the icon is before or after (default) the text
       */
      iconBefore: Boolean,
      /**
       * Button style for only icon
       */
      iconOnly: Boolean,
      /**
       * If set will use router-link for button component and pass to prop
       */
      to: [String, Object],
      /**
       * Sets the button to a link with this href
       */
      href: String,
      /**
       * Set a value for target attribute when button is a link
       */
      target: String,
      /**
       * Sets the download attribute on the link (passing string [filename] will populate the download attribute, true will just include it as boolean attribute)
       */
      download: [Boolean, String],
      /**
       * For icon only buttons or buttons that need an explicit label
       */
      alt: String,
      /**
       * If not using slot this sets the buttons text via prop
       */
      text: String,
      /**
       * Pass any sizes setup for button (ie. small, large, etc)
       */
      size: String,
      /**
       * Preset to set primary style (needs to be a button style in ulu scss)
       */
      primary: Boolean,
      /**
       * Preset to set secondary style (needs to be a button style in ulu scss)
       */
      secondary: Boolean,
      /**
       * Preset to set small size (use "size" for any sizes)
       */
      small: Boolean,
      /**
       * Preset to set large size (use "size" for any sizes)
       */
      large: Boolean,
      /**
       * Preset to set outline style button (needs to be a button style in ulu scss)
       */
      outline: Boolean,
      /**
       * Preset to set transparent style button (needs to be a button style in ulu scss)
       */
      transparent: Boolean,
      /**
       * Add no-margin utility
       */
      noMargin: Boolean,
      /**
       * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
       */
      modifiers: [String, Array]
    },
    setup(props) {
      const { resolvedModifiers } = useModifiers({ props, baseClass: "button" });
      return { resolvedModifiers };
    },
    computed: {
      classes() {
        const classes = [];
        const { size } = this;
        if (size) {
          classes.push(`button--${ size }`);
        }
        return classes;
      },
      element() {
        return  this.to ? RouterLink : this.href ? "a" : "button";
      },
      attrs() {
        const { to, href, download, target } = this;
        const attrs = to ? { to } : href ? { href } : {};
        if (href) {
          if (target) {
            attrs.target = target;
          }
          if (download) {
            attrs.download = typeof download === "string" ? download : true;
          }
        }
        return attrs;
      }
    }
  };
</script>