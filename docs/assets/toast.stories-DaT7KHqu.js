import{y as a,al as i,_ as r}from"./iframe-sJoV250H.js";import"./preload-helper-BJwshlQW.js";const c=()=>{const t=a("uluToast");if(!t)throw new Error("Toast plugin not installed");return t},n=[{label:"Retry",click:()=>{}}],l=[{title:"Title",date:"10m ago",description:"This is the description"},{description:"This is the description",actions:n},{description:"Database error",class:"is-danger background-context",icon:"triangle-exclamation",actions:n},{title:"Brief Title",description:"This is a warning, lorem ipsum et depsi",class:"is-warning background-context",icon:"triangle-exclamation",actions:[...n,{label:"Cancel",click:()=>{}}]},{class:"is-info background-context",description:"Lorem ipsum et depsi anu",icon:"circle-info"},{class:"is-success background-context",description:"File Saved!",icon:"check"}];function d(){l.forEach((t,s)=>{setTimeout(()=>i.add(t),1500*s)})}const h={},u=t=>({components:{UluButton:r},setup(){const s=c();return{delayToasts:d,showPersistentToast:()=>{console.log("fired"),console.log(s),s.add({description:"Database error",class:"is-danger background-context",icon:"triangle-exclamation",duration:!1,actions:[{label:"Retry",click:(g,e)=>{s.remove(e.uid)}}]})},...t}},template:`
    <div>
      <UluButton @click="delayToasts" text="Show Toasts"/>
      <UluButton @click="showPersistentToast" text="Show Persistent Toast"/>
    </div>
  `}),o=u.bind({});o.args={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
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
})`,...o.parameters?.docs?.source}}};const f=["Default"];export{o as Default,f as __namedExportsOrder,h as default};
