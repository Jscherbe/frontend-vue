<template>
  <dl class="definition-list" :class="[resolvedModifiers, classes.list]">
    <div 
      v-for="(item, index) in items" 
      :key="index"
      :class="classes.item"
    >
      <dt :class="classes.term">
        <slot name="term" :item="item" :index="index">
          {{ item.term }}
        </slot>
      </dt>
      
      <dd :class="classes.description">
        <slot name="description" :item="item" :index="index">
          {{ item.description }}
        </slot>
      </dd>
    </div>
  </dl>
</template>

<script setup>
  import { computed } from 'vue';
  import { useModifiers } from "../../composables/useModifiers.js";

  const props = defineProps({
    /**
     * Array of term, and description (props in object)
     * - Can use slots also
     */
    items: Array,
    /**
     * Classes object for different elements { list, item, term, description }
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     */
    modifiers: [String, Array],
    /**
     * Displays only the definition descriptions on the same line.
     */
    inline: Boolean,
    /**
     * Displays both the definition term and its descriptions on the same line.
     */
    inlineAll: Boolean,
    /**
     * Displays the list in a two-column grid on larger screens.
     */
    table: Boolean,
    /**
     * Adds a rule between each item.
     */
    separated: Boolean,
    /**
     * Adds a rule to the top of the first item.
     */
    separatedFirst: Boolean,
    /**
     * Adds a rule to the bottom of the last item.
     */
    separatedLast: Boolean,
    /**
     * Reduces the margin between items.
     */
    compact: Boolean,
  });

  const internalModifiers = computed(() => ({
    "inline" : props.inline,
    "inline-all" : props.inlineAll,
    "table" : props.table,
    "separated" : props.separated,
    "separated-first" : props.separatedFirst,
    "separated-last" : props.separatedLast,
    "compact" : props.compact,
  }));

  const { resolvedModifiers } = useModifiers({ 
    props, 
    internal: internalModifiers,
    baseClass: "definition-list"
  });
</script>