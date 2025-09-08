<template>
  <div v-if="content" class="wysiwyg">
    <PortableText :value="content" :components="portableComponents"/>
  </div>
</template>
<script setup>
  import { h } from "vue";
  import { PortableText } from '@portabletext/vue';
  defineProps({
    content: Array
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