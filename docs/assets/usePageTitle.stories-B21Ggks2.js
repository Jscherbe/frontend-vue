import{ap as u,a1 as t,aq as d,ar as a,a4 as p,as as m,at as v}from"./iframe-D6k7poV4.js";import"./preload-helper-BJwshlQW.js";const c=()=>({path:"/our-story-route"}),C={title:"Composables/usePageTitle",component:{template:"<div>See individual stories for demonstrations.</div>"}},i={name:"1. Setting a static title",render:()=>({setup(){u("A Static Title",{useRoute:c});const e=t("");return d(()=>{e.value=a("/our-story-route")}),{observedTitle:e}},template:`
      <div>
        <p>This component's setup calls <code>usePageTitle("A Static Title")</code>.</p>
        <p><strong>Observed Title:</strong></p>
        <pre>{{ observedTitle }}</pre>
      </div>
    `})},r={name:"2. Setting a reactive title",render:()=>({setup(){const e=t(0),n=p(()=>`Counter Value: ${e.value}`);u(n,{useRoute:c});const o=t(a("/our-story-route")),s=setInterval(()=>{e.value++,o.value=a("/our-story-route")},1e3);return m(()=>clearInterval(s)),{observedTitle:o}},template:`
      <div>
        <p>This component's setup calls <code>usePageTitle()</code> with a computed ref.</p>
        <p>A counter is automatically incrementing every second, updating the title.</p>
        <p><strong>Observed Title:</strong></p>
        <pre>{{ observedTitle }}</pre>
      </div>
    `})},l={name:"3. Unmounting cleans up the title",render:()=>({setup(){const e=t(!0),n=t(""),o={name:"ChildComponent",setup:()=>u("Child Component's Title",{useRoute:c}),template:"<div>I am the child component setting the title.</div>"},s=()=>{n.value=a("/our-story-route")};return d(s),{showChild:e,toggleChild:async()=>{e.value=!e.value,await v(),s()},observedTitle:n,ChildComponent:o}},template:`
      <div>
        <p>This story mounts a child component that sets a title. Unmounting it should clear the title.</p>
        <button @click="toggleChild">Toggle Child Component</button>
        <hr style="margin: 10px 0;" />
        <ChildComponent v-if="showChild" />
        <p v-else>Child component is unmounted.</p>
        <hr style="margin: 10px 0;" />
        <p><strong>Observed Title:</strong></p>
        <pre>{{ observedTitle === undefined ? 'undefined (Correct!)' : observedTitle }}</pre>
      </div>
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "1. Setting a static title",
  render: () => ({
    setup() {
      usePageTitle("A Static Title", {
        useRoute: mockUseRoute
      });
      const observedTitle = ref('');
      onMounted(() => {
        observedTitle.value = getPageTitle('/our-story-route');
      });
      return {
        observedTitle
      };
    },
    template: \`
      <div>
        <p>This component's setup calls <code>usePageTitle("A Static Title")</code>.</p>
        <p><strong>Observed Title:</strong></p>
        <pre>{{ observedTitle }}</pre>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "2. Setting a reactive title",
  render: () => ({
    setup() {
      const count = ref(0);
      const reactiveTitle = computed(() => \`Counter Value: \${count.value}\`);
      usePageTitle(reactiveTitle, {
        useRoute: mockUseRoute
      });
      const observedTitle = ref(getPageTitle('/our-story-route'));
      const interval = setInterval(() => {
        count.value++;
        observedTitle.value = getPageTitle('/our-story-route');
      }, 1000);
      onUnmounted(() => clearInterval(interval));
      return {
        observedTitle
      };
    },
    template: \`
      <div>
        <p>This component's setup calls <code>usePageTitle()</code> with a computed ref.</p>
        <p>A counter is automatically incrementing every second, updating the title.</p>
        <p><strong>Observed Title:</strong></p>
        <pre>{{ observedTitle }}</pre>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "3. Unmounting cleans up the title",
  render: () => ({
    setup() {
      const showChild = ref(true);
      const observedTitle = ref('');
      const ChildComponent = {
        name: 'ChildComponent',
        setup: () => usePageTitle("Child Component's Title", {
          useRoute: mockUseRoute
        }),
        template: '<div>I am the child component setting the title.</div>'
      };
      const checkTitle = () => {
        observedTitle.value = getPageTitle('/our-story-route');
      };
      onMounted(checkTitle);
      const toggleChild = async () => {
        showChild.value = !showChild.value;
        await nextTick();
        checkTitle();
      };
      return {
        showChild,
        toggleChild,
        observedTitle,
        ChildComponent
      };
    },
    template: \`
      <div>
        <p>This story mounts a child component that sets a title. Unmounting it should clear the title.</p>
        <button @click="toggleChild">Toggle Child Component</button>
        <hr style="margin: 10px 0;" />
        <ChildComponent v-if="showChild" />
        <p v-else>Child component is unmounted.</p>
        <hr style="margin: 10px 0;" />
        <p><strong>Observed Title:</strong></p>
        <pre>{{ observedTitle === undefined ? 'undefined (Correct!)' : observedTitle }}</pre>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};const b=["StaticTitle","ReactiveTitle","UnmountBehavior"];export{r as ReactiveTitle,i as StaticTitle,l as UnmountBehavior,b as __namedExportsOrder,C as default};
