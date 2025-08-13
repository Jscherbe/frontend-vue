<!-- 
  Route Announcer:
  - Used to provide accessible title after route (page) change
  - Will ignore any routes that have hashes
  - Props 
    - exclude {Array} You can exclude specific routes () by exact path or path with wildcard at end, alternatively use the 'confirm' prop for complete control
    - validator {Function} Pass a function to determine if current route should be announced
    - getTitle {Function} Provide method for extracting title from route return string

  Should include <UluRouteAnnouncer /> as first component in app
 -->
<template>
  <p 
    v-if="title"
    tabindex="-1" 
    class="hidden-visually" 
    ref="el"
  >
    {{ title }}
  </p>
</template>

<script>
  export default {
    name: "RouteAnnouncer",
    props: {
      /**
       * Allow user to bypass this functionality
       * - Function should return true if the page should be annouced
       * - Function is passed  (to, from, $route) => {}
       *   - to/from are path strings
       */
      validator: {
        type: Function,
        default: () => true
      },
      /**
       * Array of paths to exclude
       * - Can be exact path "/about" 
       * - Or can be path with wildcard "/about/*" (match all paths under about)
       */
      exclude: {
        type: Array,
        default: () => []
      },
      /**
       * Function to retrieve routes title
       */
      getTitle: {
        type: Function,
        default: (route) => route.meta?.title 
      }
    },
    watch: {
      "$route.path"(to, from) {
        if (this.$route.hash) {
          return;
        }
        const isValid = this.validator(to, from, this.$route);
        const isExcluded = this.exclude.some(ex => {
          // Allow wildcard at end to exclude entire sections, etc
          if (ex.endsWith("*")) {
            return to.startsWith(ex.slice(0, ex.length - 1));
          } else {
            return to === ex;
          }
        });
        if (isValid && !isExcluded) {
          this.$refs.el.focus();
        }
      }
    },
    computed: {
      title() {
        const title = this.getTitle(this.$route);
        if (!title) {
          console.warn("RouteAnnouncer: No page title!");
        }
        return title;
      }
    }
  };
</script>