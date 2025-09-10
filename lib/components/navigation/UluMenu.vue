<template>
  <ul v-if="items?.length" :class="classes.list">
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
          ...(item.to || item.path ? { to: item.to || item.path } : {}),
          ...(item.href ? { 'href' : item.href || '#' } : {}),
        }"
        @click="(event) => { handleItemClick(event, item) }"
        :class="[classes.link, item?.classes?.link]"
        :activeClass="classes.linkActive"
        :exactActiveClass="classes.linkExactActive"
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
  import UluIcon from "../elements/UluIcon.vue";
  import UluTag from "../elements/UluTag.vue";
  /**
   * Reusable menu component (ul > li > [a/button/router-link])
   * - Requires ulu tooltip plugin (as items themselves can have tooltips)
   */
  export default {
    name: "UluMenu",
    components: {
      UluIcon,
      UluTag
    },
    emits: [
      /**
       * Fired anytime a item is clicked
       */
      "item-click"
    ],
    props: {
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
    },
    methods: {
      handleItemClick(event, item) {
        if (item.click) {
          item.click(event);
        }
        this.$emit("item-click", { item, event });
      }
    }
  };
</script>