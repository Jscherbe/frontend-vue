<template>
  <div class="spoke-spinner" :class="modifierClass">
    <div class="spoke-spinner__spinner">
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UluSpokeSpinner",
    props: {
      /**
       * Type modifier for spinner (ie match scss style name)
       */
      type: String
    },
    computed: {
      modifierClass() {
        const { type } = this;
        return type ? `spoke-spinner--${ type }` : null;
      }
    }
  };
</script>