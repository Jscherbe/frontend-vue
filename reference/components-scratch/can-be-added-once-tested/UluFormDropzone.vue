<!-- Based on https://react-dropzone.js.org/#section-basic-example -->
<template>
  <div 
    class="site-dropzone site-form__item site-form__item--file"
    :class="{ 'is-danger' : fileErrors.length }"
  >
    <div 
      class="site-dropzone__target" 
      :class="{
        'site-dropzone__target--dropping' : isDragActive
      }"
      v-bind="getRootProps()"
    >
      <input v-bind="getInputProps()" />
      <div class="site-dropzone__instructions">
        <strong class="type-normal">
          Drag 'n' drop files here, or click to select
        </strong>
      </div>
    </div>
    <p class="site-form__description">
      <em>Only images allowed (.jpg, .png)</em>
    </p>
    <div v-if="fileErrors.length" class="site-dropzone__errors site-form__description site-form__error">
      <ul class="list-unordered">
        <li v-for="(fileErr, index) in fileErrors" :key="index">
          <strong>{{ fileErr.file.name }}</strong>:
          <span>{{ fileErr.errors.map(e => e.message).join() }}</span>
        </li>
      </ul>
    </div>
    <div class="site-dropzone__display margin-top" v-if="files.length">
      <strong>Files</strong>
      <FilesDisplay class="site-dropzone__list" :files="files"/>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useDropzone } from "vue3-dropzone";

  const files = ref([]);
  const fileErrors = ref([]);

  const $emit = defineEmits(["filesChange"]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop: (acceptFiles, rejectReasons) => {
      if (rejectReasons) {
        fileErrors.value = rejectReasons.map(err => err);
      } else {
        fileErrors.value = [];
      }
      if (acceptFiles.length) {
        files.value = acceptFiles.map(file => file);
        $emit("filesChange", files.value);
      }
    },
    accept: [".png", ".jpg", ".jpeg"]
  });
</script>
