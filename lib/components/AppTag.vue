<template>
  <span 
    class="tag"
    :class="{
      [`tag--${ type }`] : type,
      'tag--small' : small,
      'type-small' : small
    }"
  >
    <FaIcon v-if="icon" :icon="icon" />
    <slot>
      {{ text }}
    </slot>
  </span>
</template>

<script>
  export default {
    name: "AppTag",
    props: {
      type: [String],
      small: Boolean,
      text: [String, Number],
      icon: String
    }
  };
</script>