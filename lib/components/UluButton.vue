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
        'button--small-x' : smaller,
        'button--icon' : iconOnly,
        'no-margin' : noMargin,
      },
      classes,
      resolvedModifiers
    ]"
    v-bind="attrs"
    :aria-label="alt"
  >
    <UluIcon 
      v-if="icon && iconBefore" 
      v-bind="getIconProps(icon)" 
      class="button__icon"
    />
    <span v-if="$slots.default || text">
      <slot>
        {{ text }}
      </slot>
    </span>
    <UluIcon 
      v-if="icon && iconBefore" 
      v-bind="getIconProps(icon)" 
      class="button__icon"
    />
  </component>
</template>

<script>
  import { RouterLink } from "vue-router";
  import { useIcon } from "../composables/useIcon.js";
  import { useModifiers } from "../composables/useModifiers.js";
  export default {
    name: "UluButton",
    props: {
      icon: String,
      iconBefore: Boolean,
      iconOnly: Boolean,
      to: [String, Object],
      href: String,
      download: Boolean,
      type: String,
      alt: String,
      text: String,
      size: String,
      primary: Boolean,
      secondary: Boolean,
      small: Boolean,
      smaller: Boolean,
      outline: Boolean,
      noMargin: Boolean,
      transparent: Boolean,
      modifiers: [String, Array]
    },
    setup(props) {
      const { resolvedModifiers } = useModifiers(props, "button");
      const { UluIcon, getIconProps } = useIcon(props.icon);
      return { resolvedModifiers, UluIcon, getIconProps };
    },
    computed: {
      classes() {
        const classes = [];
        const { type, size } = this;
        if (type) {
          classes.push(`button--${ type }`);
        }
        if (size) {
          classes.push(`button--${ size }`);
        }
        return classes;
      },
      element() {
        return  this.to ? RouterLink : this.href ? "a" : "button";
      },
      attrs() {
        const { to, href, download } = this;
        const attrs = to ? { to } : href ? { href } : {};
        if (download) {
          attrs.download = true;
        }
        return attrs;
      }
    }
  };
</script>