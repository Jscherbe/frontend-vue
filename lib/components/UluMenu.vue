<template>
  <ul v-if="items?.length">
    <li v-for="(item, index) in items" :key="index" :class="classes.item">
      <!-- 
        Note: The ternary spread method below is conditionally adding certian 
        props/handlers for each of the different element types.  
      -->
      <component
        :is="item.to || item.path ? 'router-link' : item.click ? 'button' : 'a'"
        v-bind="{
          ...(item.to || item.path ? { to: item.to || item.path } : {}),
          ...(item.href ? { 'href' : item.href || '#' } : {}),
        }"
        v-on="{
          ...(item.click ? { 'click': item.click } : {}),
        }"
        :class="classes.link"
        :active-class="classes.linkActive"
        :exact-active-class="classes.linkExactActive"
        :aria-label="iconOnly ? item.title : null"
        v-tooltip="iconOnly ? item.title : item.tooltip || null" 
      >
        <slot :item="item" :index="index">
          <FaIcon 
            v-if="item.icon"
            :class="classes.linkIcon"
            :icon="item.icon"
          />
          <span :class="classes.linkText">{{ item.title }}</span>
          <AppTag v-if="item.count" :text="item.count" small/>
        </slot>
      </component>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "UluMenu",
    props: {
      items: Array,
      classes: {
        type: Object,
        default: () => ({})
      },
      iconOnly: Boolean
    },
  };
</script>