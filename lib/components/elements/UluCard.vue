<template>
  <component
    :is="resolvedElement"
    ref="cardRoot"
    class="card"
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

<script setup>
  import { ref, computed, useSlots } from 'vue';
  import { RouterLink } from "vue-router";
  import { useModifiers } from "../../composables/useModifiers.js";

  const props = defineProps({
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
    titleTo: [String, Object],
    /**
     * Will make title a link to href
     */
    titleHref: String,
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
    href: String,
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
  });

  const emit = defineEmits(['proxy-click']);
  const $slots = useSlots();

  // --- Validation warnings
  if (props.proxyClick && (props.to || props.href)) {
    console.warn("UluCard: 'proxyClick' is ignored when 'to' or 'href' are present.");
  }
  if ((props.titleTo || props.titleHref) && (props.to || props.href)) {
    console.warn("UluCard: 'titleTo'/'titleHref' should not be used with 'to'/'href'.");
  }

  // --- Template refs
  const cardRoot = ref(null);
  const link = ref(null);

  // --- Composables
  const { resolvedModifiers } = useModifiers({ props, baseClass: "card" });

  // --- State
  const proxyStart = ref(null);
  const shouldProxy = ref(false);

  // --- Computed properties
  const isClickable = computed(() => props.proxyClick && !props.to && !props.href);
  const isTitleProxy = computed(() => isClickable.value && (props.titleTo || props.titleHref));
  const isEventProxy = computed(() => isClickable.value && !isTitleProxy.value);
  const proxyClickEnabled = computed(() => isClickable.value || null);

  const resolvedProxyOptions = computed(() => ({
    selectorPrevent: "input, select, textarea, button, a, [tabindex='-1']",
    mousedownDurationPrevent: 250,
    ...props.proxyClickOptions
  }));

  const cursorStyle = computed(() => isClickable.value ? 'pointer' : null);

  const resolvedElement = computed(() => {
    return props.to ? RouterLink : props.href ? 'a' : props.cardElement;
  });

  // --- Methods
  function onMousedown({ target, timeStamp }) {
    if (!proxyClickEnabled.value) return;
    const { selectorPrevent } = resolvedProxyOptions.value;
    shouldProxy.value = false;
    if (!target.closest(selectorPrevent)) {
      shouldProxy.value = true;
      proxyStart.value = timeStamp;
    }
  }

  function onMouseup({ timeStamp }) {
    if (!proxyClickEnabled.value || !shouldProxy.value) return;
    const { mousedownDurationPrevent } = resolvedProxyOptions.value;
    if (timeStamp - proxyStart.value < mousedownDurationPrevent) {
      if (isTitleProxy.value) {
        link.value?.click();
      } else if (isEventProxy.value) {
        const proxyTarget = cardRoot.value?.querySelector('[data-ulu-card-proxy-target]');
        if (proxyTarget) {
          proxyTarget.click();
        } else {
          emit('proxy-click');
        }
      }
    }
    shouldProxy.value = false;
  }
</script>
