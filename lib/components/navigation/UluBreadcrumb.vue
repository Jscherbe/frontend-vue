<template>
  <nav 
    :class="classes.nav" 
    aria-label="Breadcrumb"
    v-if="items.length"
  >
    <ol :class="classes.list">
      <li v-for="(item, index) in items" :key="index" :class="classes.item">
        <router-link
          v-if="!item.current"
          :to="item.to"
          :class="classes.link"
          :aria-current="item.current ? 'page' : null"
        >
          <slot :item="item">
            {{ item.title }}
          </slot>
        </router-link>
        <span v-else :class="item.current">
          <slot :item="item">
            {{ item.title }}
          </slot>
        </span>
        <template v-if="index < items.length - 1">
          <slot name="separator">
            <UluIcon
              :class="classes.separator"
              :icon="separatorIcon || 'type:pathSeparator'"
            />
          </slot>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script>
  import UluIcon from '../elements/UluIcon.vue';
  /**
   * Breadcrumb trail component
   * - Is now agnostic of router, pass precomputed breadcrumb trail via items prop
   */
  export default {
    name: 'UluBreadcrumb',
    components: {
      UluIcon
    },
    props: {
      /**
       * Array of breadcrumb items.
       * Each item is an object: { title: String, to: [String, Object], current: Boolean }
       */
      items: {
        type: Array,
        default: () => []
      },
      /**
       * Icon to use as a separator.
       */
      separatorIcon: String,
      /**
       * Classes object to be applied to elements.
       * Keys: nav, list, item, link, icon
       */
      classes: {
        type: Object,
        default: () => ({
          nav: "breadcrumb",
          list: "breadcrumb__list",
          item: "breadcrumb__item",
          link: "breadcrumb__link",
          current: "breadcrumb__current",
          separator: "breadcrumb__separator"
        })
      }
    }
  }
</script>