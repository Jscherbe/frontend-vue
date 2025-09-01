<template>
  <a class="layout-flex-baseline" :href="fileUrl" :download="file.name">
    <slot :fileName="file.name" :fileSize="fileSize">
      <UluIcon class="ui-icon" :icon="icon"/>
      <span class="margin-left-small-x">
        {{ file.name }}
        <UluTag v-if="!noFileSize" :text="fileSize" small outline />
      </span>
    </slot>
  </a>
</template>

<script setup>
  import { computed } from "vue";
  import UluIcon from "../elements/UluIcon.vue";
  import UluTag from "../elements/UluTag.vue";

  const props = defineProps({
    file: {
      required: true,
      type: Object,
    },
    icon: {
      type: String,
      default: "type:file"
    },
    noFileSize: Boolean
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