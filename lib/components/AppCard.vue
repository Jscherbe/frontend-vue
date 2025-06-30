<template>
  <article class="card">
    <div class="card__body">
      <div class="card__header">
        <component :is="titleElement" class="card__title" :class="classes.title">
          <router-link v-if="to" class="card__title-link" :to="to">
            <slot name="title">
              {{ title }}
            </slot>
          </router-link>
          <template v-else>
            <slot name="title">
              {{ title }}
            </slot>
          </template>
        </component>
      </div>
      <div class="card__content" v-if="$slots.body">
        <slot name="body"/>
      </div>
    </div>
    <!-- Image is below body (title, headline) for accessiblity -->
    <div 
      v-if="$slots.image || imageSrc" 
      class="card__image"
      :class="classes.image"
    >
      <slot name="image">
        <img :src="imageSrc" :alt="imageAlt">
      </slot>
    </div>
    <div class="card__footer" v-if="$slots.footer">
      <slot name="footer"/>
    </div>
  </article>
</template>

<script>
  export default {
    name: "AppCard",
    props: {
      titleElement: {
        type: String,
        default: "h3"
      },
      to: [String, Object],
      title: String,
      classes: {
        type: Object,
        default: () => ({})
      },
      proxyClick: Boolean,
      imageSrc: String,
      imageAlt: String
    }
  };
</script>