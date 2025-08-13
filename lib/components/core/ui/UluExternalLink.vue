<template>
  <a :href="linkUrl" target="_blank">
    <span class="ExternalLink__link-text">{{ linkText }}</span>
    <FaIcon 
      class="ExternalLink__icon"
      icon="fas fa-arrow-up-right-from-square"
      style="display: inline;"
    />
  </a>
</template>

<script>
  export default {
    name: "ExternalLink",
    props: {
      linkText: String,
      linkUrl: String,
    }
  };
</script>