<template>
  <button class="icon-switch">
    <span class="icon-switch__icon" :class="{ 'is-active' : !isGrid }">
      <FaIcon icon="fas fa-list"/>
    </span>
    <span class="icon-switch__icon" :class="{ 'is-active' : isGrid }">
      <IconGrid/>
    </span>
  </button>
</template>

<script>
  import IconGrid from "@/components/icons/IconGrid.vue";
  export default {
    name: 'ListGridSwitch',
    components: {
      IconGrid
    },
    props: {
      isGrid: Boolean
    }
  }
</script>