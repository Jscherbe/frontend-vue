<template>
  <a class="external-link" :href="href" :target="target">
    <span class="external-link__text">
      <slot>{{ text }}</slot>
    </span>
    <UluIcon 
      class="external-link__icon margin-left-small-x display-inline"
      :definition="iconDefinition"
    />
  </a>
</template>

<script>
  import UluIcon from "./UluIcon.vue";
  import { getIconByType } from "../../settings.js";

  /**
   * Component for external links (adds icon after link text)
   */
  export default {
    name: "UluExternalLink",
    components: {
      UluIcon
    },
    props: {
      /**
       * Text for link or use slot
       */
      text: String,
      /**
       * Link href
       */
      href: String,
      /**
       * Link target
       */
      target: {
        type: String,
        default: "_blank"
      },
      /**
       * Override default icon
       */
      icon: String
    },
    computed: {
      iconDefinition() {
        const { icon } = this;
        return icon || getIconByType("externalLink");
      }
    }
  };
</script>