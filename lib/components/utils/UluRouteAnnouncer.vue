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

<script setup>
  import { ref, computed, watch, nextTick } from "vue";
  import { useRoute, useRouter, START_LOCATION } from "vue-router";
  import { getRouteTitle } from "../../utils/router.js";

  const props = defineProps({
    /**
     * Allow user to bypass this functionality
     * - Function should return true if the page should be announced
     * - Function is passed (to, from) => {}
     *   - to/from are RouteLocationNormalizedLoaded objects
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
      default: (route) => getRouteTitle(route)
    },
    /**
     * Enable debug logging
     */
    debug: Boolean
  });

  const route = useRoute();
  const router = useRouter();
  const el = ref(null);

  const title = computed(() => {
    // Prevent errors if not in router context, or if it's the initial ghost route
    if (!route || route.matched.length === 0) return ""; 
    const t = props.getTitle(route);
    if (!t) {
      console.warn("RouteAnnouncer: No page title!");
    }
    return t;
  });

  if (router) {
    watch(
      router.currentRoute,
      async (to, from) => {
        // Skip the very first route transition from the initial ghost route
        if (from === START_LOCATION || from.matched.length === 0) {
          return;
        }
        if (to.hash) {
          return;
        }
        const isValid = props.validator(to, from);
        const isExcluded = props.exclude.some(ex => {
          // Allow wildcard at end to exclude entire sections, etc
          if (ex.endsWith("*")) {
            return to.path.startsWith(ex.slice(0, ex.length - 1));
          } else {
            return to.path === ex;
          }
        });
        if (title.value && isValid && !isExcluded) {
          if (props.debug) {
            console.log("RouteAnnouncer: Focused title:", title.value);
          }
          await nextTick();
          el.value?.focus();
        }
      }
    );
  } else {
    console.error("RouteAnnouncer: No route found (install vue-router).");
  }
</script>
