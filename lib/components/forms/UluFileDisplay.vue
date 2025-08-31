<template>
  <a class="layout-flex-baseline" :href="fileUrl" :download="file.name">
    <FaIcon class="ui-icon" :icon="['far', $site.getIcon('file')]"/>
    <span class="margin-left-small-x">
      {{ file.name }}
      <span class="tag tag--small tag--outline type-small-x">{{ fileSize }}</span>
    </span>
  </a>
</template>

<script setup>
  import { computed } from "vue";

  const props = defineProps({
    file: {
      required: true,
      type: Object
    }
  });

  const fileUrl = computed(() => {
    if (typeof window === 'undefined') return '';
    return window.URL.createObjectURL(props.file);
  });

  const fileSize = computed(() => {
    const { size } = props.file;
    const Mbs = size / 1000000;
    const Kbs = size / 1000;
    const format = n => parseFloat(n.toFixed(2));
    // Either display Mbs or Kbs if less than 1 Mb
    /* eslint-disable */
    return Mbs > 1 ? 
      `${ format(Mbs) }Mb` : Kbs > 1 ?
      `${ format(Kbs) }Kb` : 
      `${ format(size) }B`;
    /* eslint-enable */
  });
</script>