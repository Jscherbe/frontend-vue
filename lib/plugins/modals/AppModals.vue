<!-- 
  Version: 1.0.3

  Changes:
    - 1.0.1 | CSS Tweaks
    - 1.0.3 | Optional Click Outside Close
 -->
<template>
  <Teleport :to="$modals.options.teleportTo" v-if="$modals.data.active">
    <div class="site-modal" :class="classes">
      <div class="site-modal__overlay" @click.self.prevent="outsideClick" ref="backdrop">
        <component 
          v-if="currentModal" 
          :is="currentModal.component"
          v-bind="$modals.data.activeProps"
          :resizer="resizer"
          :position="currentModal.position"
          id="site-modal-dialog"
          role="dialog" 
          ref="trap"
          :aria-labelledby="labeledBy"
          @vue:mounted="modalMounted"
          @vue:unmounted="modalDestroy"
        />
      </div>
    </div>
  </Teleport>
</template>

<script>
  
  import { createFocusTrap } from "focus-trap";
  export default {
    name: "AppModals",
    data() {
      return {
        pageScrollY: 0
      };
    },
    computed: {
      labeledBy() {
        return this.$modals.data.active && this.$modals.data.active.labeledBy;
      },
      currentModal() {
        const { active } = this.$modals.data;
        if (active) {
          return active;
        } else {
          return null;
        }
      },
      resizer() {
        const { currentModal } = this;
        if (!currentModal) return null;
        const { resize, position } = currentModal;
        return resize && position && ["left", "right"].includes(position);
      },
      classes() {
        const { currentModal } = this;
        if (!currentModal) return null;
        const { modifiers, position, resize } = currentModal;
        const classMods = modifiers || [];
        if (position) {
          classMods.push(position);
        }
        if (resize) {
          classMods.push("resize");
        }
        const classes = classMods.map(modifier => `site-modal--${ modifier }`);
        if (currentModal.class) {
          classes.push(currentModal.class);
        }
        return classes;
      }
    },
    methods: {
      modalMounted() {
        this.pageScrollY = window.pageYOffset || document.documentElement.scrollTop;
        window.addEventListener("scroll", this.disableScroll);
        this.$nextTick(() => {
          this.$emit("modal-mount");
          // Need to allow click outside for our backdrop close, and we don't want unexpected click throughs
          this.$nextTick(() => { 
            this.focusTrap = createFocusTrap(this.$refs.trap.$el, {
              onDeactivate: () => {
                this.$modals.close();
              },
              allowOutsideClick: true
            });
            this.focusTrap.activate();
          });
        });
      },
      modalDestroy() {
        window.removeEventListener("scroll", this.disableScroll);
        this.$nextTick(() => {
          this.$emit("modal-unmount");
          if (this.focusTrap) {
            this.focusTrap.deactivate();
            this.focusTrap = null; // GC the trap
          }
        });
      },
      outsideClick() {
        // const isBackdrop = event.target === this.$refs.backdrop;
        if (this.currentModal.clickOutsideCloses) {
          this.$modals.close();
        }
      },
      disableScroll() { 
        window.scrollTo(0, this.scrollTop); 
      }
    }
  };
</script>