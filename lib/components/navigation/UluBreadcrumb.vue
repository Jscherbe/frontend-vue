<!-- 
  Updates to make: 
  - Make breadcrumb agnostic of router and then make composable / utility for getting crumbs from vue-router or user routes etc
-->

<template>
  <nav 
    class="breadcrumbs" 
    aria-label="Breadcrumb"
    v-if="crumbs.length"
  >
    <ul class="type-small">
      <li v-for="(item, index) in crumbs" :key="index">
        <!-- Note we may not need to tag aria current I thihnk the vue router's link component will already do that if the route matches -->
        <router-link 
          :to="item.to" 
          class="link-secondary"
          :aria-current="item.current ? 'page' : null"
        >
          {{ item.title }}
        </router-link>
        <FaIcon class="breadcrumbs__icon" icon="fas fa-chevron-right" />
      </li>
    </ul>
  </nav>
</template>

<script>
  import meta from "@/meta.js";
  export default {
    name: 'AppBreadcrumb',
    data() {
      return {
        activeContext: meta.activeContext
      }
    },
    computed: {
      crumbs() {
        // Note this is kind of a work around becuase the vue-meta plugin is not exposing the $meta property
        const { activeContext } = this;
        const currentTitle = activeContext.title;
        const { matched, path: currentPath } = this.$route;
        let prevPath;
        const crumbs = matched.reduce((arr, item, index) => {
          let pageMeta = item.components.default?.metaInfo || {};
          let title = pageMeta?.title || item.meta?.title || currentTitle;
          const isLast = index === matched.length - 1;
          // Don't add a crumb for a default child route ie. child path = ''
          if (item.path === prevPath) {
            return arr;
          } else {
            arr.push({ 
              to: { 
                // Use either the matches path or the path for the last one
                // so it includes parameters
                path: isLast ? currentPath : item.path
              },
              current: isLast,
              title
            });
            prevPath = item.path;
            return arr;
          }
        }, []);
        // console.log(crumbs);
        return crumbs;
      }
    }
  }
</script>