<template>
  <AppPopover
    :tooltip="tooltip"
    :classes="{
      toggle: toggleClasses
    }"
    noPadding
  >
    <template #toggle>
      <slot/>
    </template>
    <template #content>
      <div class="site-menu site-menu--compact type-small">
        <AppMenu 
          class="site-menu__list" 
          :classes="$site.siteMenuClasses"
          :items="items"
        />
      </div>
    </template>
  </AppPopover>
</template>

<script>
  export default {
    name: "AppDropdown",
    props: {
      items: Array,
      tooltip: String,
      toggleClasses: [String, Object, Array]
    }
  };
</script>