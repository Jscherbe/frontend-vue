<template>
  <div class="site-form__item site-form__item--file">
    <label 
      :class="{ 'hidden-visually' : labelHidden }" 
      :for="id"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </label>
    <input 
      type="file" 
      @change="onChangeFile" 
      :multiple="multiple"
      :id="id"
      v-bind="inputAttrs"
    />
  </div>
</template>

<script setup>
  const getNextId = (() => {
    let count = 0;
    return () => `file-input-id-${++count}`;
  })();

  defineProps({
    label: {
      type: String,
      default: "Select File"
    },
    labelHidden: Boolean,
    noClasses: Boolean,
    multiple: Boolean,
    inputAttrs: Object
  });

  const emit = defineEmits(["file-change"]);

  const id = getNextId();

  const onChangeFile = (event) => {
    emit("file-change", event.target.files);
  };
</script>