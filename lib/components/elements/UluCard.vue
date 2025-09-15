<template>
  <component
    class="card" 
    :is="resolvedElement" 
    @mousedown="onMousedown"
    @mouseup="onMouseup"
    :class="[
      {
        'card--horizontal' : horizontal || horizontalCenter,
        'card--horizontal-center' : horizontalCenter,
        'card--overlay' : overlay,
      },
      resolvedModifiers
    ]"
    :style="{ cursor: cursorStyle }"
    :target="target"
    :to="to"
    :href="href"
    :data-ulu-proxy-click-init="proxyClickEnabled"
  >
    <div class="card__body">
      <div class="card__main">
        <component 
          :is="titleElement" 
          class="card__title" 
          :class="classes.title"
        >
          <router-link 
            v-if="titleTo" 
            class="card__title-link" 
            :to="titleTo" 
            ref="link"
          >
            <slot name="title">
              {{ title }}
            </slot>
          </router-link>
          <a 
            v-else-if="titleHref" 
            class="card__title-link" 
            :href="titleHref" 
            :target="titleTarget" 
            ref="link"
          >
            <slot name="title">
              {{ title }}
            </slot>
          </a>
          <template v-else>
            <slot name="title">
              {{ title }}
            </slot>
          </template>
        </component>
        <slot name="body"/>
      </div>
      <div class="card__aside" v-if="$slots.aside">
        <slot name="aside"/>
      </div>
    </div>
    <div 
      v-if="$slots.image || imageSrc" 
      class="card__image"
      :class="[
        { 'card__image--icon' : imageIcon },
        classes.image
      ]"
    >
      <slot name="image">
        <img :src="imageSrc" :alt="imageAlt">
      </slot>
    </div>
    <div class="card__footer" v-if="$slots.footer">
      <slot name="footer"/>
    </div>
  </component>
</template>

<script>
  import { RouterLink } from "vue-router";
  import { useModifiers } from "../../composables/useModifiers.js";
  const titleLinkValidator = (_, props) => {
    const valid = !(props.to || props.href);
    if (!valid) {
      console.warn("'titleHref' and 'titleTo' can't be used with to or href (nesting links)");
    } 
    return valid;
  };
  export default {
    name: "UluCard",
    props: {
      /**
       * Specify card element, unless to or href are used which will use 'a' or 'router-link'
       * - Other than changing to more appropriate element (ie 'li' if in list for example), this can 
       *   be used to set the card to a button to attach your own click handlers to
       */
      cardElement: {
        type: String,
        default: "article"
      },
      /**
       * Text for title if not using slot
       */
      title: String,
      /**
       * Element to use for title
       */
      titleElement: {
        type: String,
        default: "h3"
      },
      /**
       * Title will be router link
       */
      titleTo: {
        type: [String, Object],
        validator: titleLinkValidator
      },
      /**
       * Will make title a link to href
       */
      titleHref: {
        type: String,
        validator: titleLinkValidator
      },
      /**
       * When using href this will set title link's target attribute
       */
      titleTarget: String,
      /**
       * If set the entire card will be router link
       * - Do not us in combination with titleTo or titleHref
       */
      to: [String, Object],
      /**
       * If set the entire card will be a link to href
       * - Do not us in combination with titleTo or titleHref
       */
      href: {
        type: String,
        
      },
      /**
       * When using href this will set link's target attribute
       */
      target: String,
      /**
       * Classes with class bindings for different elements including ({ title, image })
       */
      classes: {
        type: Object,
        default: () => ({})
      },
      /**
       * Whether to proxy clicks of non-interactive elements (making whole card clickable).
       * This is for accessibility, allowing a non-link card to have a primary action.
       * The proxy action is determined in the following order:
       * 1. If the title has a link (`titleTo` or `titleHref`), it will proxy the click to the title's link.
       * 2. If not, it will look for an element with the `data-ulu-card-proxy-target` attribute within the card's slots and click it.
       * 3. If no proxy target is found, it will emit a `proxy-click` event.
       * Note: This should not be used with the `to` or `href` props.
       */
      proxyClick: Boolean,
      /**
       * Options to be merged for proxy click settings ({ preventSelector, preventSelectionDuration })
       */
      proxyClickOptions: {
        type: Object,
        default: () => ({})
      },
      /**
       * Source of image
       */
      imageSrc: String,
      /**
       * Alt text for image
       */
      imageAlt: String,
      /**
       * If true image will use icon modifier (displays for image adjusts for icon vs full image)
       */
      imageIcon: Boolean,
      /**
       * Horizontal card layout
       */
      horizontal: Boolean,
      /**
       * Horizontal centered card layout
       */
      horizontalCenter: Boolean,
      /**
       * Overlay card layout
       */
      overlay: Boolean,
      /**
       * Class modifiers (ie. 'transparent', 'secondary', etc)
       * - Can be String or Array of Strings
       */
      modifiers: [Array, String]
    },
    data() {
      const { proxyClickOptions, proxyClick, titleHref, titleTo, to, href } = this;

      if (proxyClick && (to || href)) {
        console.warn("UluCard: 'proxyClick' should not be used with 'to' or 'href' props. The 'proxyClick' prop is for making a non-link card behave like a link for accessibility. The 'to' and 'href' props turn the entire card into a link element, which should be avoided for cards with verbose content.");
      }

      const isClickable = proxyClick;

      return {
        isTitleProxy: isClickable && (titleHref || titleTo),
        isEventProxy: isClickable && !(titleHref || titleTo),
        proxyClickEnabled: isClickable || null,
        resolvedProxyOptions: {
          selectorPrevent: "input, select, textarea, button, a, [tabindex='-1']",
          mousedownDurationPrevent: 250,
          ...proxyClickOptions
        },
        cursorStyle: isClickable ? 'pointer' : null,
        proxyStart: null,
        shouldProxy: false
      }
    },
    setup(props) {
      const { resolvedModifiers } = useModifiers({ props, baseClass: "card" });
      return { resolvedModifiers };
    },
    computed: {
      resolvedElement() {
        const { cardElement, to, href } = this;
        return to ? RouterLink : href ? 'a' : cardElement;
      }
    },
    methods: {
      onMousedown({ target, timeStamp }) {
        if (!this.proxyClickEnabled) return;
        const { resolvedProxyOptions } = this;
        const { selectorPrevent } = resolvedProxyOptions;
        this.shouldProxy = false;
        if (!target.closest(selectorPrevent)) {
          this.shouldProxy = true;
          this.proxyStart = timeStamp;
        }
      },
      onMouseup({ timeStamp }) {
        if (!this.proxyClickEnabled || !this.shouldProxy) return;
        const { resolvedProxyOptions } = this;
        const { mousedownDurationPrevent } = resolvedProxyOptions;
        if (timeStamp - this.proxyStart < mousedownDurationPrevent) {
          if (this.isTitleProxy) {
            this.$refs.link.click();
          } else if (this.isEventProxy) {
            const proxyTarget = this.$el.querySelector('[data-ulu-card-proxy-target]');
            if (proxyTarget) {
              proxyTarget.click();
            } else {
              this.$emit('proxy-click');
            }
          }
        }
        this.shouldProxy = false;
      },
    }
  };
</script>