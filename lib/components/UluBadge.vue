<template>
  <component 
    class="badge" 
    :class="[
      size ? `badge--${ size }` : null,
      type ? `badge--${ type }` : null,
      { 'badge--clickable' : isInteractive }
    ]"
    :is="element"
    :to="to"
    :href="href"
    @click="click"
    v-ulu-tooltip="tooltip"
  >
    <span class="badge__inner" :class="{ 'skeleton__background-color' : skeleton }">
      <!-- If just text user should use prop -->
      <span v-if="text" :aria-hidden="alt ? 'true' : null">
        {{ text }}
      </span>
      
      <!-- Else display as is, slot should contain an HTML element / component
      cannot be just a text node, if text node use text prop or wrap text in html element -->
      <slot v-else />
      <!-- When using text (abbreviations, etc) --> 
      <span v-if="alt" class="hidden-visually">{{ alt }}</span>
    </span>
  </component>
</template>

<script>
  import { RouterLink } from "vue-router";
  export default {
    name: "AppBadge",
    props: {
      skeleton: Boolean,
      size: String,
      text: String,
      alt: String,
      type: String,
      click: Function,
      to: [Object, String],
      href: String,
      tooltip: {
        type: [String, Number, Object, Boolean],
        default: false
      },
    },
    computed: {
      isInteractive() {
        return Boolean(this.to || this.click);
      },
      element() {
        const { click, to, href } = this;
        /* eslint-disable */
        return  click ? 'button' : 
                to ? RouterLink : 
                href ? 'a' : 
                'span';
        /* eslint-enable */
      }
    }
  };
</script>