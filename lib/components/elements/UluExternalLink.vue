<template>
  <a :href="href" :target="target">
    <span>
      <slot>{{ text }}</slot>
    </span>
    <UluIcon 
      :definition="iconDefinition"
      style="display: inline;"
    />
  </a>
</template>

<script>
  import { getIconByType } from "../../settings.js";

  /**
   * Component for external links (adds icon after link text)
   */
  export default {
    name: "UluExternalLink",
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