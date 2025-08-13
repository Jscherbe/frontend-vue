<template>
  <p class="site-form__description" :class="{
    'site-form__error' : error,
    'site-form__warning' : warning
  }">
    <FaIcon v-if="error" :icon="$site.getIcon('error')"/>
    <FaIcon v-if="warning" :icon="$site.getIcon('warning')"/>
    <slot/>
  </p>
</template>

<script>
  export default {
    name: "FormMessage",
    props: {
      warning: Boolean,
      error: Boolean,
    }
  };
</script>