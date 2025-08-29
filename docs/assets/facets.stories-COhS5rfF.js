import{T,P as z,a3 as xe,aB as Me,aC as ce,aD as oe,aE as le,aF as he}from"./iframe-Dw5YOoOk.js";import"./preload-helper-BJwshlQW.js";function C(t){return Array.isArray?Array.isArray(t):fe(t)==="[object Array]"}function be(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function Ie(t){return t==null?"":be(t)}function L(t){return typeof t=="string"}function ue(t){return typeof t=="number"}function _e(t){return t===!0||t===!1||we(t)&&fe(t)=="[object Boolean]"}function de(t){return typeof t=="object"}function we(t){return de(t)&&t!==null}function _(t){return t!=null}function H(t){return!t.trim().length}function fe(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Ee="Incorrect 'index' type",Ae=t=>`Invalid value for key ${t}`,Le=t=>`Pattern length exceeds max of ${t}.`,Re=t=>`Missing ${t} property in key`,Ce=t=>`Property 'weight' in key '${t}' must be a positive integer`,se=Object.prototype.hasOwnProperty;class ke{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let r=pe(n);s+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function pe(t){let e=null,s=null,n=null,r=1,i=null;if(L(t)||C(t))n=t,e=ne(t),s=G(t);else{if(!se.call(t,"name"))throw new Error(Re("name"));const a=t.name;if(n=a,se.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(Ce(a));e=ne(a),s=G(a),i=t.getFn}return{path:e,id:s,weight:r,src:n,getFn:i}}function ne(t){return C(t)?t:t.split(".")}function G(t){return C(t)?t.join("."):t}function Ue(t,e){let s=[],n=!1;const r=(i,a,c)=>{if(_(i))if(!a[c])s.push(i);else{let o=a[c];const l=i[o];if(!_(l))return;if(c===a.length-1&&(L(l)||ue(l)||_e(l)))s.push(Ie(l));else if(C(l)){n=!0;for(let h=0,d=l.length;h<d;h+=1)r(l[h],a,c+1)}else a.length&&r(l,a,c+1)}};return r(t,L(e)?e.split("."):e,0),n?s:s[0]}const Te={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},je={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Oe={location:0,threshold:.6,distance:100},$e={useExtendedSearch:!1,getFn:Ue,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var u={...je,...Te,...Oe,...$e};const Ne=/[^ ]+/g;function Pe(t=1,e=3){const s=new Map,n=Math.pow(10,e);return{get(r){const i=r.match(Ne).length;if(s.has(i))return s.get(i);const a=1/Math.pow(i,.5*t),c=parseFloat(Math.round(a*n)/n);return s.set(i,c),c},clear(){s.clear()}}}class q{constructor({getFn:e=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){this.norm=Pe(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,L(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();L(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!_(e)||H(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((r,i)=>{let a=r.getFn?r.getFn(e):this.getFn(e,r.path);if(_(a)){if(C(a)){let c=[];const o=[{nestedArrIndex:-1,value:a}];for(;o.length;){const{nestedArrIndex:l,value:h}=o.pop();if(_(h))if(L(h)&&!H(h)){let d={v:h,i:l,n:this.norm.get(h)};c.push(d)}else C(h)&&h.forEach((d,f)=>{o.push({nestedArrIndex:f,value:d})})}n.$[i]=c}else if(L(a)&&!H(a)){let c={v:a,n:this.norm.get(a)};n.$[i]=c}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function ge(t,e,{getFn:s=u.getFn,fieldNormWeight:n=u.fieldNormWeight}={}){const r=new q({getFn:s,fieldNormWeight:n});return r.setKeys(t.map(pe)),r.setSources(e),r.create(),r}function De(t,{getFn:e=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){const{keys:n,records:r}=t,i=new q({getFn:e,fieldNormWeight:s});return i.setKeys(n),i.setIndexRecords(r),i}function B(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:r=u.distance,ignoreLocation:i=u.ignoreLocation}={}){const a=e/t.length;if(i)return a;const c=Math.abs(n-s);return r?a+c/r:c?1:a}function Ve(t=[],e=u.minMatchCharLength){let s=[],n=-1,r=-1,i=0;for(let a=t.length;i<a;i+=1){let c=t[i];c&&n===-1?n=i:!c&&n!==-1&&(r=i-1,r-n+1>=e&&s.push([n,r]),n=-1)}return t[i-1]&&i-n>=e&&s.push([n,i-1]),s}const j=32;function Ke(t,e,s,{location:n=u.location,distance:r=u.distance,threshold:i=u.threshold,findAllMatches:a=u.findAllMatches,minMatchCharLength:c=u.minMatchCharLength,includeMatches:o=u.includeMatches,ignoreLocation:l=u.ignoreLocation}={}){if(e.length>j)throw new Error(Le(j));const h=e.length,d=t.length,f=Math.max(0,Math.min(n,d));let m=i,y=f;const x=c>1||o,b=x?Array(d):[];let I;for(;(I=t.indexOf(e,y))>-1;){let M=B(e,{currentLocation:I,expectedLocation:f,distance:r,ignoreLocation:l});if(m=Math.min(M,m),y=I+h,x){let E=0;for(;E<h;)b[I+E]=1,E+=1}}y=-1;let R=[],w=1,O=h+d;const D=1<<h-1;for(let M=0;M<h;M+=1){let E=0,A=O;for(;E<A;)B(e,{errors:M,currentLocation:f+A,expectedLocation:f,distance:r,ignoreLocation:l})<=m?E=A:O=A,A=Math.floor((O-E)/2+E);O=A;let K=Math.max(1,f-A+1),p=a?d:Math.min(f+A,d)+h,g=Array(p+2);g[p+1]=(1<<M)-1;for(let S=p;S>=K;S-=1){let v=S-1,U=s[t.charAt(v)];if(x&&(b[v]=+!!U),g[S]=(g[S+1]<<1|1)&U,M&&(g[S]|=(R[S+1]|R[S])<<1|1|R[S+1]),g[S]&D&&(w=B(e,{errors:M,currentLocation:v,expectedLocation:f,distance:r,ignoreLocation:l}),w<=m)){if(m=w,y=v,y<=f)break;K=Math.max(1,2*f-y)}}if(B(e,{errors:M+1,currentLocation:f,expectedLocation:f,distance:r,ignoreLocation:l})>m)break;R=g}const $={isMatch:y>=0,score:Math.max(.001,w)};if(x){const M=Ve(b,c);M.length?o&&($.indices=M):$.isMatch=!1}return $}function Be(t){let e={};for(let s=0,n=t.length;s<n;s+=1){const r=t.charAt(s);e[r]=(e[r]||0)|1<<n-s-1}return e}class me{constructor(e,{location:s=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:a=u.findAllMatches,minMatchCharLength:c=u.minMatchCharLength,isCaseSensitive:o=u.isCaseSensitive,ignoreLocation:l=u.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:l},this.pattern=o?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(f,m)=>{this.chunks.push({pattern:f,alphabet:Be(f),startIndex:m})},d=this.pattern.length;if(d>j){let f=0;const m=d%j,y=d-m;for(;f<y;)h(this.pattern.substr(f,j),f),f+=j;if(m){const x=d-j;h(this.pattern.substr(x),x)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let y={isMatch:!0,score:0};return n&&(y.indices=[[0,e.length-1]]),y}const{location:r,distance:i,threshold:a,findAllMatches:c,minMatchCharLength:o,ignoreLocation:l}=this.options;let h=[],d=0,f=!1;this.chunks.forEach(({pattern:y,alphabet:x,startIndex:b})=>{const{isMatch:I,score:R,indices:w}=Ke(e,y,x,{location:r+b,distance:i,threshold:a,findAllMatches:c,minMatchCharLength:o,includeMatches:n,ignoreLocation:l});I&&(f=!0),d+=R,I&&w&&(h=[...h,...w])});let m={isMatch:f,score:f?d/this.chunks.length:1};return f&&n&&(m.indices=h),m}}class k{constructor(e){this.pattern=e}static isMultiMatch(e){return re(e,this.multiRegex)}static isSingleMatch(e){return re(e,this.singleRegex)}search(){}}function re(t,e){const s=t.match(e);return s?s[1]:null}class ze extends k{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class We extends k{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class He extends k{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Ge extends k{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class Ye extends k{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Qe extends k{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class ye extends k{constructor(e,{location:s=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:a=u.findAllMatches,minMatchCharLength:c=u.minMatchCharLength,isCaseSensitive:o=u.isCaseSensitive,ignoreLocation:l=u.ignoreLocation}={}){super(e),this._bitapSearch=new me(e,{location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Se extends k{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n;const r=[],i=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+i,r.push([n,s-1]);const a=!!r.length;return{isMatch:a,score:a?0:1,indices:r}}}const Y=[ze,Se,He,Ge,Qe,Ye,We,ye],ie=Y.length,Je=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Xe="|";function Ze(t,e={}){return t.split(Xe).map(s=>{let n=s.trim().split(Je).filter(i=>i&&!!i.trim()),r=[];for(let i=0,a=n.length;i<a;i+=1){const c=n[i];let o=!1,l=-1;for(;!o&&++l<ie;){const h=Y[l];let d=h.isMultiMatch(c);d&&(r.push(new h(d,e)),o=!0)}if(!o)for(l=-1;++l<ie;){const h=Y[l];let d=h.isSingleMatch(c);if(d){r.push(new h(d,e));break}}}return r})}const qe=new Set([ye.type,Se.type]);class et{constructor(e,{isCaseSensitive:s=u.isCaseSensitive,includeMatches:n=u.includeMatches,minMatchCharLength:r=u.minMatchCharLength,ignoreLocation:i=u.ignoreLocation,findAllMatches:a=u.findAllMatches,location:c=u.location,threshold:o=u.threshold,distance:l=u.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:r,findAllMatches:a,ignoreLocation:i,location:c,threshold:o,distance:l},this.pattern=s?e:e.toLowerCase(),this.query=Ze(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,a=[],c=0;for(let o=0,l=s.length;o<l;o+=1){const h=s[o];a.length=0,i=0;for(let d=0,f=h.length;d<f;d+=1){const m=h[d],{isMatch:y,indices:x,score:b}=m.search(e);if(y){if(i+=1,c+=b,n){const I=m.constructor.type;qe.has(I)?a=[...a,...x]:a.push(x)}}else{c=0,i=0,a.length=0;break}}if(i){let d={isMatch:!0,score:c/i};return n&&(d.indices=a),d}}return{isMatch:!1,score:1}}}const Q=[];function tt(...t){Q.push(...t)}function J(t,e){for(let s=0,n=Q.length;s<n;s+=1){let r=Q[s];if(r.condition(t,e))return new r(t,e)}return new me(t,e)}const W={AND:"$and",OR:"$or"},X={PATH:"$path",PATTERN:"$val"},Z=t=>!!(t[W.AND]||t[W.OR]),st=t=>!!t[X.PATH],nt=t=>!C(t)&&de(t)&&!Z(t),ae=t=>({[W.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Fe(t,e,{auto:s=!0}={}){const n=r=>{let i=Object.keys(r);const a=st(r);if(!a&&i.length>1&&!Z(r))return n(ae(r));if(nt(r)){const o=a?r[X.PATH]:i[0],l=a?r[X.PATTERN]:r[o];if(!L(l))throw new Error(Ae(o));const h={keyId:G(o),pattern:l};return s&&(h.searcher=J(l,e)),h}let c={children:[],operator:i[0]};return i.forEach(o=>{const l=r[o];C(l)&&l.forEach(h=>{c.children.push(n(h))})}),c};return Z(t)||(t=ae(t)),n(t)}function rt(t,{ignoreFieldNorm:e=u.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:r,norm:i,score:a})=>{const c=r?r.weight:null;n*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(e?1:i))}),s.score=n})}function it(t,e){const s=t.matches;e.matches=[],_(s)&&s.forEach(n=>{if(!_(n.indices)||!n.indices.length)return;const{indices:r,value:i}=n;let a={indices:r,value:i};n.key&&(a.key=n.key.src),n.idx>-1&&(a.refIndex=n.idx),e.matches.push(a)})}function at(t,e){e.score=t.score}function ct(t,e,{includeMatches:s=u.includeMatches,includeScore:n=u.includeScore}={}){const r=[];return s&&r.push(it),n&&r.push(at),t.map(i=>{const{idx:a}=i,c={item:e[a],refIndex:a};return r.length&&r.forEach(o=>{o(i,c)}),c})}class P{constructor(e,s={},n){this.options={...u,...s},this.options.useExtendedSearch,this._keyStore=new ke(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof q))throw new Error(Ee);this._myIndex=s||ge(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){_(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,r-=1,s.push(i))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:a,ignoreFieldNorm:c}=this.options;let o=L(e)?L(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return rt(o,{ignoreFieldNorm:c}),i&&o.sort(a),ue(s)&&s>-1&&(o=o.slice(0,s)),ct(o,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){const s=J(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:a,n:c})=>{if(!_(i))return;const{isMatch:o,score:l,indices:h}=s.searchIn(i);o&&r.push({item:i,idx:a,matches:[{score:l,value:i,norm:c,indices:h}]})}),r}_searchLogical(e){const s=Fe(e,this.options),n=(c,o,l)=>{if(!c.children){const{keyId:d,searcher:f}=c,m=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(o,d),searcher:f});return m&&m.length?[{idx:l,item:o,matches:m}]:[]}const h=[];for(let d=0,f=c.children.length;d<f;d+=1){const m=c.children[d],y=n(m,o,l);if(y.length)h.push(...y);else if(c.operator===W.AND)return[]}return h},r=this._myIndex.records,i={},a=[];return r.forEach(({$:c,i:o})=>{if(_(c)){let l=n(s,c,o);l.length&&(i[o]||(i[o]={idx:o,item:c,matches:[]},a.push(i[o])),l.forEach(({matches:h})=>{i[o].matches.push(...h)}))}}),a}_searchObjectList(e){const s=J(e,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:a,i:c})=>{if(!_(a))return;let o=[];n.forEach((l,h)=>{o.push(...this._findMatches({key:l,value:a[h],searcher:s}))}),o.length&&i.push({idx:c,item:a,matches:o})}),i}_findMatches({key:e,value:s,searcher:n}){if(!_(s))return[];let r=[];if(C(s))s.forEach(({v:i,i:a,n:c})=>{if(!_(i))return;const{isMatch:o,score:l,indices:h}=n.searchIn(i);o&&r.push({score:l,key:e,value:i,idx:a,norm:c,indices:h})});else{const{v:i,n:a}=s,{isMatch:c,score:o,indices:l}=n.searchIn(i);c&&r.push({score:o,key:e,value:i,norm:a,indices:l})}return r}}P.version="6.6.2";P.createIndex=ge;P.parseIndex=De;P.config=u;P.parseQuery=Fe;tt(et);function ot(t,e){return!e||!Array.isArray(e)?[]:e.map(s=>{const n=new Set,r=s.getValue||(a=>a[s.uid]);t.forEach(a=>{const c=r(a);Array.isArray(c)?c.forEach(o=>o&&n.add(o)):c&&n.add(c)});const i=s.getLabel||(a=>a);return{...s,children:[...n].sort().map(a=>({uid:a,label:i(a),selected:!1}))}})}function lt(t,e={}){const s=(p,g)=>{const F=p[g];return F===null||typeof F>"u"?[]:Array.isArray(F)?F:[F]},{initialFacets:n,facetFields:r,initialSearchValue:i="",initialSortType:a="az",noDefaultSorts:c=!1,extraSortTypes:o={},searchOptions:l={},getItemFacet:h=s,getSortValue:d=p=>p.title||p.label||""}=e,f=p=>p.sort((g,F)=>{const S=d(g),v=d(F);return S&&v?String(S).localeCompare(String(v)):S?-1:v?1:0}),m={az:{text:"A-Z",sort:f},za:{text:"Z-A",sort:p=>f(p).reverse()}};function y(p){return(p||[]).map(g=>({...g,open:g.open||!1,children:g.children.map(F=>({...F,selected:F.selected||!1})),selectedCount:0}))}const x=T(()=>!r||!t.value?.length?null:ot(t.value,r)),b=z(y(n||x.value)),I=z(i),R=z(a);r&&!n&&xe(x,p=>{b.value=y(p)});const w=T(()=>({...c?{}:m,...o})),O=T(()=>({shouldSort:!0,keys:["title","label","description","author"],...l})),D=T(()=>{const p=[];return b.value.forEach(g=>{const{name:F,uid:S,children:v}=g;let U=0,ee=!1;v&&v.forEach(te=>{te.selected&&(++U,ee||(p.push({uid:S,name:F,children:[]}),ee=!0),p[p.length-1].children.push(te))}),g.selectedCount=U}),p}),$=T(()=>D.value.length?t.value.filter(p=>D.value.every(g=>{const F=h(p,g.uid);return F&&F.length?g.children.some(S=>F.includes(S.uid)):!1})):t.value),M=T(()=>I.value?.length?new P($.value,O.value).search(I.value).map(g=>g.item):$.value),E=T(()=>{const p=w.value[R.value]?.sort;return typeof p!="function"?M.value:p([...M.value])});function A(){b.value.forEach(p=>{p.children&&p.children.forEach(g=>g.selected=!1)})}function K({groupUid:p,facetUid:g,selected:F}){const S=b.value.find(v=>v.uid===p);if(S){const v=S.children.find(U=>U.uid===g);v&&(v.selected=F)}}return{facets:b,searchValue:I,selectedSort:R,sortTypes:w,displayItems:E,selectedFacets:D,clearFilters:A,handleFacetChange:K}}const ht=[{id:1,title:"The Art of UI Design",description:"A deep dive into creating beautiful user interfaces.",category:["cat1","cat2"],author:["jane-doe"],date:new Date(2023,5,15)},{id:2,title:"Vue.js for Beginners",description:"Getting started with the popular JavaScript framework.",category:["cat2","cat6"],author:["john-smith"],date:new Date(2023,8,22)},{id:3,title:"Content Marketing Strategies",description:"How to attract and retain customers with great content.",category:["cat3"],author:["peter-jones"],date:new Date(2022,11,10)},{id:4,title:"Startup Funding 101",description:"A guide to raising capital for your new venture.",category:["cat4"],author:["jane-doe"],date:new Date(2024,1,5)},{id:5,title:"Minimalist Living",description:"Declutter your life and find more happiness.",category:["cat5"],author:["john-smith"],date:new Date(2023,3,30)},{id:6,title:"The Future of AI",description:"Exploring the impact of artificial intelligence on society.",category:["cat6"],author:["peter-jones"],date:new Date(2024,0,1)},{id:7,title:"Advanced CSS Techniques",description:"Take your styling skills to the next level.",category:["cat1","cat2"],author:["jane-doe"],date:new Date(2023,10,18)},{id:8,title:"Building a Scalable API",description:"Best practices for designing and implementing APIs.",category:["cat2","cat6"],author:["john-smith"],date:new Date(2023,7,3)},{id:9,title:"Social Media for Business",description:"Leveraging social platforms for growth.",category:["cat3"],author:["peter-jones"],date:new Date(2022,9,14)},{id:10,title:"Negotiation and Deal Making",description:"Master the art of getting what you want.",category:["cat4"],author:["jane-doe"],date:new Date(2023,6,25)},{id:11,title:"Healthy Eating Habits",description:"A guide to a balanced and nutritious diet.",category:["cat5"],author:["john-smith"],date:new Date(2024,2,12)},{id:12,title:"Quantum Computing Explained",description:"A simple introduction to a complex topic.",category:["cat6"],author:["peter-jones"],date:new Date(2023,9,9)}],pt={},ut=[{name:"Category",uid:"category",open:!0},{name:"Author",uid:"author",open:!0}],ve=t=>{const e=z(t.items),{facets:s,searchValue:n,selectedSort:r,sortTypes:i,displayItems:a,selectedFacets:c,clearFilters:o,handleFacetChange:l}=lt(e,{facetFields:t.facetFields,extraSortTypes:t.extraSortTypes,initialSortType:t.initialSortType});return{args:t,facets:s,searchValue:n,selectedSort:r,sortTypes:i,displayItems:a,selectedFacets:c,clearFilters:o,handleFacetChange:l}},N=t=>({components:{UluFacetsFilters:he,UluFacetsResults:le,UluFacetsSearch:oe,UluFacetsSort:ce,UluFacetsSidebarLayout:Me},setup:()=>ve(t),template:`
    <UluFacetsSidebarLayout>
      <template #header>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #eee;">
          <h2>Found {{ displayItems.length }} items</h2>
          <UluFacetsSort v-model="selectedSort" :sort-types="sortTypes" />
        </div>
      </template>
      <template #sidebar>
        <UluFacetsSearch v-model="searchValue" :placeholder="args.searchPlaceholder" />
        <hr/>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h3>Filters</h3>
          <button v-if="selectedFacets.length" @click="clearFilters" style="border: none; background: none; color: blue; cursor: pointer;">Clear</button>
        </div>
        <UluFacetsFilters :facets="facets" @facet-change="handleFacetChange" :max-visible="args.maxVisible" />
      </template>
      <template #main>
        <UluFacetsResults :items="displayItems">
          <template #item="{ item }">
            <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </template>
          <template #empty>
            <div style="padding: 2rem; text-align: center;">
              <p>No matching items found. Try clearing some filters.</p>
            </div>
          </template>
        </UluFacetsResults>
      </template>
    </UluFacetsSidebarLayout>
  `});N.args={facetFields:ut,items:ht,searchPlaceholder:"Search articles...",maxVisible:5};const V=t=>({components:{UluFacetsFilters:he,UluFacetsResults:le,UluFacetsSearch:oe,UluFacetsSort:ce},setup:()=>ve(t),template:`
    <div>
        <h1>My Custom Layout</h1>
        <div style="display: grid; grid-template-columns: 1fr 3fr; gap: 2rem;">
            <div>
                <h3>Filters</h3>
                <UluFacetsSearch v-model="searchValue" :placeholder="args.searchPlaceholder" />
                <hr/>
                <UluFacetsFilters :facets="facets" @facet-change="handleFacetChange" />
            </div>
            <div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h3>Results ({{displayItems.length}})</h3>
                    <UluFacetsSort v-model="selectedSort" :sort-types="sortTypes" />
                </div>
                <hr/>
                <UluFacetsResults :items="displayItems">
                    <template #item="{ item }">
                        <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
                            <h4>{{ item.title }}</h4>
                            <p>{{ item.description }}</p>
                        </div>
                    </template>
                </UluFacetsResults>
            </div>
        </div>
    </div>
    `});V.args={...N.args};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacetsFilters,
    UluFacetsResults,
    UluFacetsSearch,
    UluFacetsSort,
    UluFacetsSidebarLayout
  },
  setup: () => defaultSetup(args),
  template: \`
    <UluFacetsSidebarLayout>
      <template #header>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #eee;">
          <h2>Found {{ displayItems.length }} items</h2>
          <UluFacetsSort v-model="selectedSort" :sort-types="sortTypes" />
        </div>
      </template>
      <template #sidebar>
        <UluFacetsSearch v-model="searchValue" :placeholder="args.searchPlaceholder" />
        <hr/>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h3>Filters</h3>
          <button v-if="selectedFacets.length" @click="clearFilters" style="border: none; background: none; color: blue; cursor: pointer;">Clear</button>
        </div>
        <UluFacetsFilters :facets="facets" @facet-change="handleFacetChange" :max-visible="args.maxVisible" />
      </template>
      <template #main>
        <UluFacetsResults :items="displayItems">
          <template #item="{ item }">
            <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </template>
          <template #empty>
            <div style="padding: 2rem; text-align: center;">
              <p>No matching items found. Try clearing some filters.</p>
            </div>
          </template>
        </UluFacetsResults>
      </template>
    </UluFacetsSidebarLayout>
  \`
})`,...N.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacetsFilters,
    UluFacetsResults,
    UluFacetsSearch,
    UluFacetsSort
  },
  setup: () => defaultSetup(args),
  template: \`
    <div>
        <h1>My Custom Layout</h1>
        <div style="display: grid; grid-template-columns: 1fr 3fr; gap: 2rem;">
            <div>
                <h3>Filters</h3>
                <UluFacetsSearch v-model="searchValue" :placeholder="args.searchPlaceholder" />
                <hr/>
                <UluFacetsFilters :facets="facets" @facet-change="handleFacetChange" />
            </div>
            <div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h3>Results ({{displayItems.length}})</h3>
                    <UluFacetsSort v-model="selectedSort" :sort-types="sortTypes" />
                </div>
                <hr/>
                <UluFacetsResults :items="displayItems">
                    <template #item="{ item }">
                        <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
                            <h4>{{ item.title }}</h4>
                            <p>{{ item.description }}</p>
                        </div>
                    </template>
                </UluFacetsResults>
            </div>
        </div>
    </div>
    \`
})`,...V.parameters?.docs?.source}}};const gt=["SidebarLayout","CustomLayout"];export{V as CustomLayout,N as SidebarLayout,gt as __namedExportsOrder,pt as default};
