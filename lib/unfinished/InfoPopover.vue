<template>
  <AppPopover :classes="{ toggle: 'ui-icon' }">
    <template #toggle>
      <FaIcon :icon="$site.getIcon('info')"/>
    </template>
    <template #content>
      <slot/>
    </template>
  </AppPopover>
</template>

<script>
  export default {
    name: "InfoPopover",
  };
</script>