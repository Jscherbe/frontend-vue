<template>
  <div class="type-secondary">
    <ul class="list-compact" v-if="files">
      <li
        v-for="(file, index) in files"
        :key="index"
      >
        <FileDisplay :file="file"/>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "FilesDisplay",
    props: {
      files: [Array, Object]
    },
  };
</script>