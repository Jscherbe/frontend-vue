<template>
  <ul 
    v-if="items?.length" 
    :class="classes.list"
  >
    <li 
      v-for="(item, index) in items" 
      :key="index" 
      :class="[
        classes.item,
        item?.classes?.item,
        item.separatorBefore ? classes.itemSeparatorBefore : '',
        item.separatorAfter ? classes.itemSeparatorAfter : ''
      ]"
    >
      <!-- 
        Note: The ternary spread method below is conditionally adding certain 
        props/handlers for each of the different element types.  
      -->
      <component
        :is="item.to || item.path ? 'router-link' : item.click ? 'button' : 'a'"
        v-bind="{
          ...(item.to || item.path ? {
            to: item.to || item.path,
            activeClass: classes.linkActive || null,
            exactActiveClass: classes.linkExactActive || null
          } : {}),
          ...(item.href ? { 'href' : item.href || '#' } : {}),
        }"
        @click="(event) => { handleItemClick(event, item) }"
        :class="[classes.link, item?.classes?.link]"
        :aria-label="iconOnly ? item.title : null"
        :id="item.id"
        v-ulu-tooltip="iconOnly ? item.title : item.tooltip || null" 
      >
        <slot :item="item" :index="index">
          <UluIcon 
            v-if="item.icon" 
            :icon="item.icon" 
            :class="[classes.linkIcon, item?.classes?.linkIcon]"
          />
          <span :class="[classes.linkText, item?.classes?.linkText]">{{ item.title }}</span>
          <UluTag v-if="item.tag" v-bind="item.tag"/>
        </slot>
      </component>
      <slot name="item" :item="item" :index="index" />
      <!-- Component calls itself recursively for children if allowed (noChildren) -->
      <UluMenu v-if="!noChildren && item?.children?.length"
        :iconOnly="iconOnly"
        :classes="classes"
        :items="item.children"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </UluMenu>
    </li>
  </ul>
</template>

<script setup>
  import UluIcon from "../elements/UluIcon.vue";
  import UluTag from "../elements/UluTag.vue";

  const props = defineProps({
    /**
     * Items Array of Objects for each link
     * [{
     *   title: String (title of link)
     *   icon: Icon definition passed to UluIcon
     *   tag: Tag appearing after link text (count/etc), pass props you want bound to tag
     *   tooltip: Add tooltip to menu item (pass options for tooltip), unless iconOnly than the title is presented in the tooltip
     *   href: Will result in <a>
     *   click: Will be called on click and result in <button>
     *   to: Will result in <a> and use vue-router router-link component
     * }]
     */
    items: Array,
    /**
     * Classes object to add class bindings to the different elements
     * - { list, item, link, linkActive, linkExactActive, linkIcon, linkText }
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Use icon only version of menu
     */
    iconOnly: Boolean,
    /**
     * Do not print menu items children recursively
     */
    noChildren: Boolean
  });

  const emit = defineEmits([
    /**
     * Fired anytime a item is clicked
     */
    "item-click"
  ]);

  const handleItemClick = (event, item) => {
    if (item.click) {
      item.click(event);
    }
    emit("item-click", { item, event });
  };
</script>