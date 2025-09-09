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
    /**
     * The label for the file input.
     */
    label: {
      type: String,
      default: "Select File"
    },
    /**
     * If true, the label will be visually hidden.
     */
    labelHidden: Boolean,
    /**
     * If true, default classes will not be applied.
     */
    noClasses: Boolean,
    /**
     * If true, allows multiple file selection.
     */
    multiple: Boolean,
    /**
     * Additional attributes to bind to the input element.
     */
    inputAttrs: Object
  });

  const emit = defineEmits(["file-change"]);

  const id = getNextId();

  const onChangeFile = (event) => {
    emit("file-change", event.target.files);
  };
</script>