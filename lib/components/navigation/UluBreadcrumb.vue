<template>
  <nav 
    :class="classes.nav" 
    aria-label="Breadcrumb"
    v-if="items.length"
  >
    <ul :class="classes.list">
      <li v-for="(item, index) in items" :key="index" :class="classes.item">
        <router-link
          :to="item.to"
          :class="classes.link"
          :aria-current="item.current ? 'page' : null"
        >
          <slot :item="item">
            {{ item.title }}
          </slot>
        </router-link>
        <template v-if="index < items.length - 1">
          <slot name="separator">
            <UluIcon
              :class="classes.separator"
              :definition="separatorIcon"
            />
          </slot>
        </template>
      </li>
    </ul>
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
      separatorIcon: {
        type: String,
        default: "fas fa-chevron-right"
      },
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
          separator: "breadcrumb__separator"
        })
      }
    }
  }
</script>