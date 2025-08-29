import{a8 as N,ag as s,af as n,aa as a,a9 as C,ah as i,ab as l,ac as y,ai as V,aj as r,s as f,ak as g,al as T,am as E,an as G,ao as x}from"./iframe-Dw5YOoOk.js";import"./preload-helper-BJwshlQW.js";const L={class:"pager__items js-pager__items"},F={key:0,class:"pager__item pager__item--first"},S={key:1,class:"pager__item pager__item--previous"},B={key:2,class:"pager__item pager__item--ellipsis",role:"presentation"},D={class:"hidden-visually"},I={key:3,class:"pager__item pager__item--ellipsis",role:"presentation"},O={key:4,class:"pager__item pager__item--next"},$={key:5,class:"pager__item pager__item--last"},v={__name:"UluPager",props:{titleElement:{type:String,default:"h4"},items:{type:Object,default:()=>({})},current:{type:Number,default:1},ellipses:{type:Object,default:()=>({})}},setup(e){let U=0;const j=e,b=`ulu-pager-${U++}`;function k(h){return j.current==h?"Current page":`Go to page ${h}`}return(h,t)=>{const o=N("router-link");return e.items?(a(),s("nav",{key:0,class:"pager",role:"navigation","aria-labelledby":b},[(a(),C(V(e.titleElement),{id:b,class:"hidden-visually"},{default:l(()=>t[0]||(t[0]=[y("Pagination")])),_:1,__:[0]})),i("ul",L,[e.items.first?(a(),s("li",F,[r(o,g({to:e.items.first.href,title:"Go to first page"},e.items.first.attributes),{default:l(()=>[t[1]||(t[1]=i("span",{class:"hidden-visually"},"First page",-1)),r(f,{icon:"fas fa-angle-double-left","aria-hidden":"true"})]),_:1,__:[1]},16,["to"])])):n("",!0),e.items.previous?(a(),s("li",S,[r(o,g({to:e.items.previous.href,title:"Go to previous page",rel:"prev"},e.items.previous.attributes),{default:l(()=>[t[2]||(t[2]=i("span",{class:"hidden-visually"},"Previous page",-1)),r(f,{icon:"fas fa-angle-left","aria-hidden":"true"})]),_:1,__:[2]},16,["to"])])):n("",!0),e.ellipses.previous?(a(),s("li",B,"…")):n("",!0),(a(!0),s(T,null,E(e.items.pages,(P,u)=>(a(),s("li",{key:u,class:G(["pager__item",{"is-active":e.current==u}])},[r(o,g({to:P.href,title:k(u)},{ref_for:!0},P.attributes),{default:l(()=>[i("span",D,x(e.current==u?"Current page":"Page"),1),y(" "+x(u),1)]),_:2},1040,["to","title"])],2))),128)),e.ellipses.next?(a(),s("li",I,"…")):n("",!0),e.items.next?(a(),s("li",O,[r(o,g({to:e.items.next.href,title:"Go to next page",rel:"next"},e.items.next.attributes),{default:l(()=>[t[3]||(t[3]=i("span",{class:"hidden-visually"},"Next page",-1)),r(f,{icon:"fas fa-angle-right","aria-hidden":"true"})]),_:1,__:[3]},16,["to"])])):n("",!0),e.items.last?(a(),s("li",$,[r(o,g({to:e.items.last.href,title:"Go to last page"},e.items.last.attributes),{default:l(()=>[t[4]||(t[4]=i("span",{class:"hidden-visually"},"Last page",-1)),r(f,{icon:"fas fa-angle-double-right","aria-hidden":"true"})]),_:1,__:[4]},16,["to"])])):n("",!0)])])):n("",!0)}}};v.__docgenInfo={exportName:"default",displayName:"UluPager",description:"",tags:{},props:[{name:"titleElement",description:"The HTML element to use for the visually hidden title.",type:{name:"string"},defaultValue:{func:!1,value:"'h4'"}},{name:"items",description:"List of pager items.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"current",description:"The page number of the current page.",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"ellipses",description:"Ellipses configuration.",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/Users/joe/Projects/Personal/Github/frontend-vue/lib/components/navigation/UluPager.vue"]};const A={title:"Navigation/UluPager",component:v,argTypes:{headingId:{control:"text"},current:{control:"number"},items:{control:"object"},ellipses:{control:"object"}}},_=e=>({components:{UluPager:v},setup(){return{args:e}},template:'<UluPager v-bind="args" />'}),d={headingId:"pager-heading",items:{first:{href:"/?page=1"},previous:{href:"/?page=4"},next:{href:"/?page=6"},last:{href:"/?page=10"},pages:{1:{href:"/?page=1"},2:{href:"/?page=2"},3:{href:"/?page=3"},4:{href:"/?page=4"},5:{href:"/?page=5"},6:{href:"/?page=6"},7:{href:"/?page=7"}}}},p=_.bind({});p.args={...d,current:5,ellipses:{previous:!0,next:!0}};const m=_.bind({});m.args={...d,current:1,items:{...d.items,first:null,previous:null},ellipses:{previous:!1,next:!0}};const c=_.bind({});c.args={...d,current:10,items:{...d.items,next:null,last:null,pages:{4:{href:"/?page=4"},5:{href:"/?page=5"},6:{href:"/?page=6"},7:{href:"/?page=7"},8:{href:"/?page=8"},9:{href:"/?page=9"},10:{href:"/?page=10"}}},ellipses:{previous:!0,next:!1}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluPager
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluPager v-bind="args" />'
})`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluPager
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluPager v-bind="args" />'
})`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluPager
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluPager v-bind="args" />'
})`,...c.parameters?.docs?.source}}};const H=["Default","FirstPage","LastPage"];export{p as Default,m as FirstPage,c as LastPage,H as __namedExportsOrder,A as default};
