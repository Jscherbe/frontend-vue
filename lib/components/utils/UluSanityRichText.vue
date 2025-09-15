<template>
  <UluConditionalWrapper 
    v-if="content?.length" 
    class="wysiwyg" 
    :unwrapped="noWrapper"
  >
    <PortableText :value="content" :components="portableComponents"/>
  </UluConditionalWrapper>
</template>
<script setup>
  import { h } from "vue";
  import { PortableText } from '@portabletext/vue';
  import UluConditionalWrapper from './UluConditionalWrapper.vue';

  /**
   * A component to render Sanity's Portable Text format.
   * It requires the '@portabletext/vue' package to be installed by the consumer.
   */
  defineProps({
    /**
     * The array of Portable Text blocks to render.
     */
    content: Array,
    /**
     * If true, the output will not be wrapped in a div with the 'wysiwyg' class.
     */
    noWrapper: {
      type: Boolean,
      default: false
    }
  });

  const portableComponents = {
    types: {
      image: ({ value }) => h('img', { 
        src: `${ value.imageUrl }?max-w=1100&fit=crop`,
        alt: value.imageAlt
      }),
    },
  };
</script>