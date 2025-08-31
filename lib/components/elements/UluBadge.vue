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

<script setup>
  import { computed } from "vue";
  import { RouterLink } from "vue-router";

  const props = defineProps({
    skeleton: Boolean,
    size: String,
    text: String,
    alt: String,
    type: String,
    click: Function,
    to: [Object, String],
    href: String,
  });

  const isInteractive = computed(() => {
    return Boolean(props.to || props.click);
  });

  const element = computed(() => {
    const { click, to, href } = props;
    /* eslint-disable */
    return  click ? "button" : 
            to ? RouterLink : 
            href ? "a" : 
            "span";
    /* eslint-enable */
  });
</script>