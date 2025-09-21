<template>
  <div 
    class="form-theme__item"
    :class="[{
      'is-danger': error,
      'is-warning': warning,
      'form-theme__item--align-top': alignTop,
      'form-theme__item--text': text,
      'form-theme__item--file': file,
      'form-theme__item--select': select,
      'form-theme__item--textarea': textarea
    }]"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  /**
   * If true, applies the error state styles.
   */
  error: Boolean,
  /**
   * If true, applies the warning state styles.
   */
  warning: Boolean,
  /**
   * If true, aligns the item to the top.
   */
  alignTop: Boolean,
  /**
   * If true, applies the text item styles.
   */
  text: Boolean,
  /**
   * If true, applies the file item styles.
   */
  file: Boolean,
  /**
   * If true, applies the select item styles.
   */
  select: Boolean,
  /**
   * If true, applies the textarea item styles.
   */
  textarea: Boolean
});
</script>