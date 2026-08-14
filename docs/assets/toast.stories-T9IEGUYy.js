import{x as a,ad as i}from"./iframe-DN-QsxRd.js";import{_ as r}from"./UluButton-CrC-I_nI.js";import"./preload-helper-BJwshlQW.js";import"./UluAction-8a3B8uAU.js";import"./props-DEaRQ31f.js";const c=()=>{const t=a("uluToast");if(!t)throw new Error("Toast plugin not installed");return t},n=[{label:"Retry",click:()=>{}}],l=[{title:"Title",date:"10m ago",description:"This is the description"},{description:"This is the description",actions:n},{description:"Database error",class:"is-danger background-context",icon:"triangle-exclamation",actions:n},{title:"Brief Title",description:"This is a warning, lorem ipsum et depsi",class:"is-warning background-context",icon:"triangle-exclamation",actions:[...n,{label:"Cancel",click:()=>{}}]},{class:"is-info background-context",description:"Lorem ipsum et depsi anu",icon:"circle-info"},{class:"is-success background-context",description:"File Saved!",icon:"check"}];function d(){l.forEach((t,o)=>{setTimeout(()=>i.add(t),1500*o)})}const k={},u=t=>({components:{UluButton:r},setup(){const o=c();return{delayToasts:d,showPersistentToast:()=>{console.log("fired"),console.log(o),o.add({description:"Database error",class:"is-danger background-context",icon:"triangle-exclamation",duration:!1,actions:[{label:"Retry",click:(m,e)=>{o.remove(e.uid)}}]})},...t}},template:`
    <div>
      <UluButton @click="delayToasts" text="Show Toasts"/>
      <UluButton @click="showPersistentToast" text="Show Persistent Toast"/>
    </div>
  `}),s=u.bind({});s.args={};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
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
})`,...s.parameters?.docs?.source}}};const b=["Default"];export{s as Default,b as __namedExportsOrder,k as default};
