<template>
  <div class="truncated-link-list">
    <span v-for="(item, index) in items.slice(0, 3)" :key="index">
      <router-link :to="item.to || '/'">
        {{ item.text }}
      </router-link>{{ index !== items.length ? ', ' : null }}
    </span>
    <span v-if="items.length > 3">
      {{ "…" }}
      <AppButton 
        class="type-small-x" 
        :text="`+${ items.length }`" 
        :alt="`View All ${ items.length } items`"
        smaller 
        outline 
        noMargin
      />
    </span>
  </div>
</template>

<script>
  export default {
    name: "TruncatedLinkList",
    props: {
      items: Array
    }
  };
</script>