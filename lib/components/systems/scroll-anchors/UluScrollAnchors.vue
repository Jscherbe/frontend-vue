<!-- Version: 0.0.2? (NEED to diff, unsure of changes) -->
<template>
  <div class="scroll-anchors">
    <slot/>
  </div>
</template>

<script>
  import { computed } from "vue";
  import { SECTIONS, REGISTER, UNREGISTER } from "./symbols.js";
  export default {
    name: "ScrollAnchors",
    props: {
      firstItemActive: Boolean,
      /**
       * Observe 
       */
      observerOptions: {
        type: Object,
        default: () => ({
          root: null,
          threshhold: [0,1],
          rootMargin: "-25% 0px -55% 0px"
          // root: null,
          // threshhold: [0,1],
          // rootMargin: "25% 0px 75% 0px"
        })
      }
    },
    data() {
      return {
        isMounted: false,
        sections: [], // Child components will section themselves
      };
    },
    /**
     * Interface for chil components to register themselves
     * - Uses symbols
     */
    provide() {
      return {
        [SECTIONS]: computed(() => this.sections),
        [REGISTER]: (instance) => {
          const { titleId, title } = instance;
          const { element } = instance.$refs;
          this.sections.push({ 
            instance, 
            titleId, 
            title,
            element,
            active: false 
          });
          this.update();
        },
        [UNREGISTER]: (instance) => {
          const sections = this.sections;
          const index = sections.findIndex(r => r.instance === instance);
          if (index > -1) {
            sections.splice(index, 1);
          }
          this.update();
        },
      };
    },
    methods: {
      update() {
        if (this.isMounted) {
          this.observeItems();
        }
      },
      getSectionIndex(el) {
        return this.sections.findIndex(({ element }) => el === element);
      },
      /**
       * Sets up a new observer to watch the section visibility
       */
      createObserver() {
        const { observerOptions, sections, removeActive, firstItemActive } = this;
        let lastY = 0;
        // Observer callback, basically just sets active state for a given slide
        // - isIntersecting will change when the element enters and leaves
        const onObserve = (entries) => {
          entries.forEach(({ target, isIntersecting }) => {
            const index = this.getSectionIndex(target);
            const y = target.offsetTop;
            const section = sections[index];
            const firstExiting = index === 0 && lastY > y;
            const lastExiting = index === sections.length - 1 && lastY < y;
            if (section) {
              this.$nextTick(() => {
                if (isIntersecting) {
                  removeActive(section);
                  section.active = true;
                // Only allow first and last to 
                } else if (firstExiting && !firstItemActive) {
                  removeActive();
                } else if (lastExiting && section.active) {
                  removeActive();
                }
                this.$emit("sectionChange", { 
                  section, 
                  sections, 
                  active: isIntersecting 
                });
              });
            }
          });
        };
        // Add non-reactive prop for removal and changes to targets
        this.observer = new IntersectionObserver(onObserve, observerOptions);
      },
      /**
       * Add all slide elements as targets in observer
       */
      observeItems() {
        const { observer, sections } = this;
        observer.disconnect();
        sections.forEach(({ element }) => {
          if (element) {
            observer.observe(element);
          }
        });
      },
      removeActive(except = null) {
        this.sections.forEach(s => {
          if (s !== except) {
            s.active = false;
          }
        });
      },
      /**
       * Remove observer and it's internal DOM references (GC)
       */
      destroyObserver() {
        this.observer.disconnect();
        this.observer = null;
      },
    },
    mounted() {
      const first = this.sections[0];
      if (this.firstItemActive && first) {
        first.active = true;
      }
      this.createObserver();
      this.observeItems();
      this.isMounted = true;
    },
    unmounted() {
      this.destroyObserver();
    },
  };
</script>