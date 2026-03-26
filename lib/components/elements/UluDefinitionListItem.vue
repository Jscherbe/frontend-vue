<template>
  <div :class="[listClasses.item, classes?.item]">
    <dt :class="[listClasses.term, classes?.term]">
      <slot name="term">{{ term }}</slot>
    </dt>
    <dd 
      v-for="(desc, index) in descriptions"
      :key="index"
      :class="[listClasses.description, classes?.description]"
    >
      <slot name="description" :description="desc" :index="index">
        {{ desc }}
      </slot>
    </dd>
  </div>
</template>

<script setup>
  import { computed, inject } from "vue";

  const props = defineProps({
    /**
     * The term text (renders inside dt)
     */
    term: String,
    /**
     * The description text or array of strings (renders inside dd)
     */
    description: [String, Array],
    /**
     * Optional classes object to override/append to injected parent classes { item, term, description }
     */
    classes: Object
  });

  const injectedClasses = inject("uluDefinitionListClasses", { value: {} });
  const listClasses = computed(() => injectedClasses.value || {});

  const descriptions = computed(() => {
    if (!props.description) return [];
    return Array.isArray(props.description) ? props.description : [props.description];
  });
</script>