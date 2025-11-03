import { onMounted, onUnmounted, nextTick, watch } from "vue";
import { getScrollParent } from "@ulu/utils/browser/dom.js";

/**
 * The main composable that contains the core "engine" for the Scroll Anchors system.
 * It encapsulates the IntersectionObserver logic to track sections and manage their active state.
 * This is intended for advanced use cases where a developer needs to build a custom provider
 * component instead of using the default `UluScrollAnchors`.
 * @param {{sections: object, props: object, emit: Function, componentElRef: object}} options
 */
export function useScrollAnchors({ sections, props, emit, componentElRef }) {
  let observer = null;

  function getSectionIndex(el) {
    return sections.value.findIndex(({ element }) => el === element);
  }

  function removeActive(except = null, scrollDirection = 'down') {
    sections.value.forEach(s => {
      if (s !== except) {
        if (s.active) {
          s.inactiveFrom = scrollDirection === 'down' ? 'forward' : 'reverse';
          s.activeFrom = null;
        }
        s.active = false;
      }
    });
  }

  function createObserver() {
    let lastScrollY = 0;
    let isInitialObservation = true;

    const onObserve = (entries) => {
      const { root } = observer;
      const currentScrollY = root ? root.scrollTop : document.documentElement.scrollTop || window.scrollY;

      if (props.debug) {
        console.group("useScrollAnchors: onObserve");
        console.log("Observer:", observer);
        console.log("Last/Current Y:", `${ lastScrollY }/${ currentScrollY }`);
        console.log("Entries:", entries.map(e => ({ el: e.target, is: e.isIntersecting })));
      }
      
      if (isInitialObservation && props.firstItemActive) {
        if (props.debug) console.log("Initial observation, respecting `firstItemActive`.");
        isInitialObservation = false;
        lastScrollY = currentScrollY;
        if (props.debug) console.groupEnd();
        return;
      }
      isInitialObservation = false;

      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      lastScrollY = currentScrollY;
      if (props.debug) console.log(`Scroll direction: ${scrollDirection}`);

      const intersectingEntries = entries.filter(entry => entry.isIntersecting);
      if (props.debug) console.log("Intersecting entries:", intersectingEntries.map(e => e.target));

      if (intersectingEntries.length > 0) {
        intersectingEntries.sort((a, b) => getSectionIndex(a.target) - getSectionIndex(b.target));
        
        const targetEntry = scrollDirection === 'down'
          ? intersectingEntries[intersectingEntries.length - 1]
          : intersectingEntries[0];
        if (props.debug) console.log("Chosen target entry:", targetEntry.target);

        const sectionToActivate = sections.value[getSectionIndex(targetEntry.target)];

        if (sectionToActivate && !sectionToActivate.active) {
          if (props.debug) console.log("Activating section:", sectionToActivate.title);
          nextTick(() => {
            removeActive(sectionToActivate, scrollDirection);
            sectionToActivate.active = true;
            sectionToActivate.inactiveFrom = null;
            sectionToActivate.activeFrom = scrollDirection === 'down' ? 'forward' : 'reverse';
            emit("section-change", { section: sectionToActivate, sections: sections.value, active: true });
          });
        }
      } else {
        if (props.debug) console.log("No intersecting entries. Checking edge cases.");
        const activeSection = sections.value.find(s => s.active);
        if (activeSection) {
          const entryForActive = entries.find(e => e.target === activeSection.element);
          if (entryForActive && !entryForActive.isIntersecting) {
            const index = getSectionIndex(entryForActive.target);
            const isFirst = index === 0;
            const isLast = index === sections.value.length - 1;
            if ((isFirst && scrollDirection === 'up' && !props.firstItemActive) || (isLast && scrollDirection === 'down')) {
              if (props.debug) console.log("Deactivating section at edge:", activeSection.title);
              nextTick(() => {
                removeActive(null, scrollDirection);
                emit("section-change", { section: activeSection, sections: sections.value, active: false });
              });
            }
          }
        }
      }
      if (props.debug) console.groupEnd();
    };

    let root = null;
    if (props.observerOptions && props.observerOptions.root) {
      root = props.observerOptions.root;
    } else if (componentElRef.value) {
      root = getScrollParent(componentElRef.value);
      if (root === document.scrollingElement) {
        root = null;
      }
    }

    const finalObserverOptions = {
      ...props.observerOptions,
      root
    };

    observer = new IntersectionObserver(onObserve, finalObserverOptions);
  }

  function observeItems() {
    if (!observer) return;
    observer.disconnect();
    sections.value.forEach(({ element }) => {
      if (element) {
        observer.observe(element);
      }
    });
  }

  function destroyObserver() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }

  onMounted(() => {
    if (props.firstItemActive && sections.value.length > 0) {
      const first = sections.value[0];
      if (first) {
        first.active = true;
      }
    }
    createObserver();
    observeItems();
  });

  onUnmounted(() => {
    destroyObserver();
  });

  watch(() => sections.value.length, () => {
    nextTick(() => {
      observeItems();
    });
  });
}