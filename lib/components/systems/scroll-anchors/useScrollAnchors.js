import { onMounted, onUnmounted, nextTick, watch } from "vue";
import { getScrollParent } from "@ulu/utils/browser/dom.js";
import { debounce } from "@ulu/utils/performance.js";

/**
 * The main composable that contains the core "engine" for the Scroll Anchors system.
 * It encapsulates the IntersectionObserver logic to track sections and manage their active state.
 * This is intended for advanced use cases where a developer needs to build a custom provider
 * component instead of using the default `UluScrollAnchors`.
 * @param {{sections: object, props: object, emit: Function, componentElRef: object}} options
 */
export function useScrollAnchors({ sections, props, emit, componentElRef }) {
  let observer = null;
  let lastScrollY = 0;
  let lastScrollDirection = 'down';
  let scrollRoot = null;
  let isObserverRefresh = true;

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

  function setSectionActive(section, scrollDirection) {
    if (section && !section.active) {
      if (props.debug) console.log("Activating section:", section.title);
      nextTick(() => {
        removeActive(section, scrollDirection);
        section.active = true;
        section.inactiveFrom = null;
        section.activeFrom = scrollDirection === 'down' ? 'forward' : 'reverse';
        emit("section-change", { section, sections: sections.value, active: true });
      });
    }
  }

  function deactivateAll(scrollDirection, debugMsg) {
    const activeSection = sections.value.find(s => s.active);
    if (activeSection) {
      if (props.debug && debugMsg) console.log(debugMsg, activeSection.title);
      nextTick(() => {
        removeActive(null, scrollDirection);
        emit("section-change", { section: activeSection, sections: sections.value, active: false });
      });
    }
  }

  function getScrollRoot() {
    let root = null;
    if (props.observerOptions && props.observerOptions.root !== undefined) {
      root = props.observerOptions.root;
    } else if (componentElRef.value) {
      root = getScrollParent(componentElRef.value);
      if (root === document.scrollingElement) {
        root = null;
      }
    }
    return root || window;
  }

  const refreshObserver = debounce(() => {
    if (props.debug) console.log("Debounced scroll ended, refreshing IntersectionObserver.");
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    createObserver();
    observeItems();
  }, 100);

  function setupScrollListener() {
    removeScrollListener();
    scrollRoot = getScrollRoot();
    if (scrollRoot) {
      scrollRoot.addEventListener('scroll', refreshObserver, { passive: true });
    }
  }

  function removeScrollListener() {
    if (scrollRoot) {
      scrollRoot.removeEventListener('scroll', refreshObserver);
      scrollRoot = null;
    }
  }

  function createObserver() {
    isObserverRefresh = true;

    const onObserve = (entries) => {
      const { root } = observer;
      const currentScrollY = root ? root.scrollTop : document.documentElement.scrollTop || window.scrollY;

      if (props.debug) {
        console.group("useScrollAnchors: onObserve");
        console.log("Observer:", observer);
        console.log("Last/Current Y:", `${ lastScrollY }/${ currentScrollY }`);
        console.log("Entries:", entries.map(e => ({ el: e.target, is: e.isIntersecting })));
      }

      let scrollDirection = lastScrollDirection;
      if (currentScrollY > lastScrollY) {
        scrollDirection = 'down';
      } else if (currentScrollY < lastScrollY) {
        scrollDirection = 'up';
      }
      
      lastScrollY = currentScrollY;
      lastScrollDirection = scrollDirection;

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
        setSectionActive(sectionToActivate, scrollDirection);
      } else {
        if (isObserverRefresh) {
          if (props.debug) console.log("No intersecting entries during refresh. Using entry bounds fallback.");
          
          let highestAboveIndex = -1;
          entries.forEach(entry => {
            const rootTop = entry.rootBounds ? entry.rootBounds.top : 0;
            // +1 buffer for fractional pixels
            if (entry.boundingClientRect.top <= rootTop + 1) {
              const idx = getSectionIndex(entry.target);
              if (idx > highestAboveIndex) {
                highestAboveIndex = idx;
              }
            }
          });

          if (highestAboveIndex > -1) {
            const isLast = highestAboveIndex === sections.value.length - 1;
            const targetSection = sections.value[highestAboveIndex];

            if (isLast && props.deactivateLastItem) {
               const lastEntry = entries.find(e => e.target === targetSection.element);
               const rootBottom = lastEntry.rootBounds ? lastEntry.rootBounds.bottom : window.innerHeight;
               if (lastEntry && lastEntry.boundingClientRect.bottom < rootBottom) {
                  deactivateAll(scrollDirection, "Deactivating last item from fallback.");
               } else {
                  setSectionActive(targetSection, scrollDirection);
               }
            } else {
               setSectionActive(targetSection, scrollDirection);
            }
          } else {
            if (props.debug) console.log("Fallback: We are at the very top.");
            if (!props.firstItemActive) {
              deactivateAll(scrollDirection, "Deactivating section at top edge.");
            } else {
              const firstSection = sections.value[0];
              setSectionActive(firstSection, scrollDirection);
            }
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
              if ((isFirst && scrollDirection === 'up' && !props.firstItemActive) || (isLast && scrollDirection === 'down' && props.deactivateLastItem)) {
                deactivateAll(scrollDirection, "Deactivating section at edge.");
              }
            }
          }
        }
      }
      
      isObserverRefresh = false;
      if (props.debug) console.groupEnd();
    };

    let root = null;
    if (props.observerOptions && props.observerOptions.root !== undefined) {
      root = props.observerOptions.root;
    } else if (componentElRef.value) {
      root = getScrollParent(componentElRef.value);
      if (root === document.scrollingElement) {
        root = null;
      }
    }

    let defaultOptions = {
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0
    };

    if (props.snapOffset !== false && props.snapOffset !== undefined) {
      const offset = props.snapOffset === true ? 20 : Number(props.snapOffset);
      defaultOptions.rootMargin = `-${offset}% 0px -${99 - offset}% 0px`;
    }

    const finalObserverOptions = {
      ...defaultOptions,
      ...(props.observerOptions || {}),
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
    createObserver();
    observeItems();
    setupScrollListener();
  });

  onUnmounted(() => {
    destroyObserver();
    removeScrollListener();
    refreshObserver.cancel();
  });

  watch(() => sections.value.length, () => {
    nextTick(() => {
      observeItems();
    });
  });

  watch(
    () => [props.snapOffset, props.observerOptions],
    () => {
      destroyObserver();
      createObserver();
      observeItems();
      setupScrollListener();
    },
    { deep: true }
  );
}