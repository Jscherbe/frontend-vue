import{bf as a,V as i,U as r}from"./iframe-3_VkHyxI.js";import"./preload-helper-BJwshlQW.js";const c={};c.__docgenInfo={displayName:"CustomToast",exportName:"default",description:"",tags:{},sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/plugins/toast/tests/CustomToast.vue"]};const e=[{label:"Retry",click:()=>{}}],l=[{title:"Title",date:"10m ago",description:"This is the description"},{description:"This is the description",actions:e},{description:"Database error",class:"is-danger background-context",icon:"triangle-exclamation",actions:e},{title:"Brief Title",description:"This is a warning, lorem ipsum et depsi",class:"is-warning background-context",icon:"triangle-exclamation",actions:[...e,{label:"Cancel",click:()=>{}}]},{class:"is-info background-context",description:"Lorem ipsum et depsi anu",icon:"circle-info"},{class:"is-success background-context",description:"File Saved!",icon:"check"}];function d(){l.forEach((t,s)=>{setTimeout(()=>a.add(t),1500*s)})}const u=()=>{const t=i("uluToast");if(!t)throw new Error("Toast plugin not installed");return t},h={},p=t=>({components:{UluButton:r},setup(){const s=u();return{delayToasts:d,showPersistentToast:()=>{console.log("fired"),console.log(s),s.add({description:"Database error",class:"is-danger background-context",icon:"triangle-exclamation",duration:!1,actions:[{label:"Retry",click:(g,n)=>{s.remove(n.uid)}}]})},...t}},template:`
    <div>
      <UluButton @click="delayToasts" text="Show Toasts"/>
      <UluButton @click="showPersistentToast" text="Show Persistent Toast"/>
    </div>
  `}),o=p.bind({});o.args={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluButton
  },
  setup() {
    const toastController = useToast();
    const showPersistentToast = () => {
      console.log("fired");
      console.log(toastController);
      toastController.add({
        description: "Database error",
        class: "is-danger background-context",
        icon: "triangle-exclamation",
        duration: false,
        actions: [{
          label: "Retry",
          click: (_, toast) => {
            toastController.remove(toast.uid);
          }
        }]
      });
    };
    return {
      delayToasts,
      showPersistentToast,
      ...args
    };
  },
  template: \`
    <div>
      <UluButton @click="delayToasts" text="Show Toasts"/>
      <UluButton @click="showPersistentToast" text="Show Persistent Toast"/>
    </div>
  \`
})`,...o.parameters?.docs?.source}}};const b=["Default"];export{o as Default,b as __namedExportsOrder,h as default};
