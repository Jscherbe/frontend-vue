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

<script>
  let count = 0;
  export default {
    name: "FormFile",
    props: {
      label: {
        type: String,
        default: "Select File"
      },
      labelHidden: Boolean,
      noClasses: Boolean,
      multiple: Boolean,
      inputAttrs: Object
    },
    emits: ["filesChange"],
    data() {
      return {
        id: `file-input-id-${ ++count }`
      };
    },
    methods: {
      onChangeFile(event) {
        this.$emit("filesChange", event.target.files);
      }
    }
  };
</script>