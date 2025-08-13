<template>
  <div class="spoke-spinner" :class="modifierClass">
    <div class="spoke-spinner__spinner">
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppSpinner",
    props: {
      size: String
    },
    computed: {
      modifierClass() {
        const { size } = this;
        return size ? `spoke-spinner--${ size }` : null;
      }
    }
  };
</script>