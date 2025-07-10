<template>
  <span class="headline-label">
    <FaIcon v-if="icon" :icon="icon"/>
    {{ titleCased }}<span class="hidden-visually">:</span>
  </span>
</template>

<script>
  export default {
    name: "HeadlineLabel",
    props: {
      icon: String,
      text: String
    },
    computed: {
      titleCased() {
        const toTitle = t=> t.charAt(0).toUpperCase() + t.slice(1);
        return this.text.split(/\s/g).map(toTitle).join(" ");
      }
    }
  };
</script>