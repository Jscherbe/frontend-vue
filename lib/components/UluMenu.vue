<template>
  <ul v-if="items?.length" :class="classes.list">
    <li v-for="(item, index) in items" :key="index" :class="classes.item">
      <!-- 
        Note: The ternary spread method below is conditionally adding certain 
        props/handlers for each of the different element types.  
      -->
      <component
        :is="item.to || item.path ? 'router-link' : item.click ? 'button' : 'a'"
        v-bind="{
          ...(item.to || item.path ? { to: item.to || item.path } : {}),
          ...(item.href ? { 'href' : item.href || '#' } : {}),
        }"
        @click="(event) => { handleItemClick(event, item) }"
        :class="classes.link"
        :activeClass="classes.linkActive"
        :exactActiveClass="classes.linkExactActive"
        :aria-label="iconOnly ? item.title : null"
        :id="item.id"
        v-ulu-tooltip="iconOnly ? item.title : item.tooltip || null" 
      >
        <slot :item="item" :index="index">
          <div v-if="item.icon" :class="classes.linkIconContainer">
            <FaIcon 
            :class="classes.linkIcon"
            :icon="item.icon"
            />
            <span :class="classes.linkIconText" v-if="item.iconText">{{ item.iconText }}</span>
          </div>
          <span :class="classes.linkText">{{ item.title }}</span>
          <AppTag v-if="item.count" :text="item.count" small/>
        </slot>
      </component>
      <!-- Component calls itself recursively for children if allowed (noChildren) -->
      <UluMenu v-if="!noChildren && item?.children?.length"
        :iconOnly="iconOnly"
        :classes="classes"
        :items="item.children"
      />
    </li>
  </ul>
</template>

<script>

  export default {
    name: "UluMenu",
    emits: ["itemClick"],
    props: {
      items: Array,
      classes: {
        type: Object,
        default: () => ({})
      },
      iconOnly: Boolean,
      noChildren: Boolean
    },
    methods: {
      handleItemClick(event, item) {
        if (item.click) {
          item.click(event);
        }
        this.$emit("itemClick", { item, event });
      }
    }
  };
</script>