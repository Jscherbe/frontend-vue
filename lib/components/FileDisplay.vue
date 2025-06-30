<template>
  <a class="layout-flex-baseline" :href="fileUrl" :download="file.name">
    <FaIcon class="ui-icon" :icon="['far', $site.getIcon('file')]"/>
    <span class="margin-left-small-x">
      {{ file.name }}
      <span class="tag tag--small tag--outline type-small-x">{{ fileSize }}</span>
    </span>
  </a>
</template>

<script>
  export default {
    name: "FileDisplay",
    props: {
      file: {
        required: true,
        type: Object
      }
    },
    computed: {
      fileUrl() {
        return window.URL.createObjectURL(this.file);
      },
      fileSize() {
        const { size } = this.file;
        const Mbs = size / 1000000;
        const Kbs = size / 1000;
        const format = n => parseFloat(n.toFixed(2));
        console.log(size);
        // Either display Mbs or Kbs if less than 1 Mb
        /* eslint-disable */
        return Mbs > 1 ? 
          `${ format(Mbs) }Mb` : Kbs > 1 ?
          `${ format(Kbs) }Kb` : 
          `${ format(size) }B`;
        /* eslint-enable */
      }
    },
  };
</script>