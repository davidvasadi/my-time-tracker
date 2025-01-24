(function(){"use strict";var e={8727:function(e,t,r){var s=r(5130),n=r(6768),i=r(4232);const o={class:"max-w-4xl mx-auto p-6"},a={class:"mt-6 mb-4"},l={class:"mb-4"},d={class:"mt-6"},u={key:0,class:"mt-4"},m={key:0},c={key:1},k=["onClick"],p=["onClick"],b={class:"fixed top-0 right-0 p-4"},f=["onClick"];function y(e,t,r,y,h,g){const v=(0,n.g2)("TimeEntryForm"),L=(0,n.g2)("MyStatistics");return(0,n.uX)(),(0,n.CE)("div",o,[t[15]||(t[15]=(0,n.Lk)("h1",{class:"text-2xl font-bold mb-6"},"Időnyilvántartó rendszer",-1)),(0,n.bF)(v,{onSubmit:g.handleFormSubmit,ref:"entryForm",isEdit:h.isEdit,entry:h.currentEntry},null,8,["onSubmit","isEdit","entry"]),(0,n.Lk)("div",a,[t[3]||(t[3]=(0,n.Lk)("label",{for:"viewType",class:"mr-2"},"Nézet:",-1)),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>h.viewType=e),id:"viewType",class:"p-2 border border-gray-300 rounded"},t[2]||(t[2]=[(0,n.Lk)("option",{value:"daily"},"Napi",-1),(0,n.Lk)("option",{value:"weekly"},"Heti",-1),(0,n.Lk)("option",{value:"monthly"},"Havi",-1)]),512),[[s.u1,h.viewType]])]),(0,n.Lk)("div",l,[t[5]||(t[5]=(0,n.Lk)("label",{for:"tagFilter",class:"mr-2"},"Szűrés címkére:",-1)),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>h.tagFilter=e),id:"tagFilter",class:"p-2 border border-gray-300 rounded"},t[4]||(t[4]=[(0,n.Lk)("option",{value:""},"Összes",-1),(0,n.Lk)("option",{value:"projekt"},"Projekt",-1),(0,n.Lk)("option",{value:"ügyfél"},"Ügyfél",-1)]),512),[[s.u1,h.tagFilter]])]),(0,n.Lk)("div",d,[t[14]||(t[14]=(0,n.Lk)("h2",{class:"text-xl font-semibold"},"Bejegyzések",-1)),0===Object.keys(g.filteredEntries).length?((0,n.uX)(),(0,n.CE)("div",u,t[6]||(t[6]=[(0,n.Lk)("p",null,"Nincsenek bejegyzések.",-1)]))):(0,n.Q3)("",!0),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(g.filteredEntries,((e,r)=>((0,n.uX)(),(0,n.CE)("div",{key:r,class:"mb-4"},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e,((e,s)=>((0,n.uX)(),(0,n.CE)("div",{key:s,class:"border p-4 mt-2 rounded"},[(0,n.Lk)("p",null,[t[7]||(t[7]=(0,n.Lk)("strong",null,"Munkavállaló neve:",-1)),(0,n.eW)(" "+(0,i.v_)(e.userName),1)]),(0,n.Lk)("p",null,[t[8]||(t[8]=(0,n.Lk)("strong",null,"Dátum:",-1)),(0,n.eW)(" "+(0,i.v_)(e.date),1)]),(0,n.Lk)("p",null,[t[9]||(t[9]=(0,n.Lk)("strong",null,"Kezdési idő:",-1)),(0,n.eW)(" "+(0,i.v_)(e.startTime),1)]),(0,n.Lk)("p",null,[t[10]||(t[10]=(0,n.Lk)("strong",null,"Befejezési idő:",-1)),(0,n.eW)(" "+(0,i.v_)(e.endTime),1)]),(0,n.Lk)("p",null,[t[11]||(t[11]=(0,n.Lk)("strong",null,"Feladat leírása:",-1)),(0,n.eW)(" "+(0,i.v_)(e.taskDescription),1)]),(0,n.Lk)("p",null,[t[12]||(t[12]=(0,n.Lk)("strong",null,"Címkék:",-1)),t[13]||(t[13]=(0,n.eW)()),e.tags.length?((0,n.uX)(),(0,n.CE)("span",m,(0,i.v_)(e.tags),1)):((0,n.uX)(),(0,n.CE)("span",c,"Nincsenek címkék."))]),(0,n.Lk)("button",{onClick:t=>g.editEntry(e,r,s),class:"mt-2 bg-yellow-500 hover:bg-yellow-700 text-white p-2 rounded"},"Módosítás",8,k),(0,n.Lk)("button",{onClick:e=>g.deleteEntry(r,s),class:"mt-2 mx-2 bg-red-500 hover:bg-red-700 text-white p-2 rounded"},"Törlés",8,p)])))),128))])))),128))]),g.filteredEntries&&Object.keys(g.filteredEntries).length?((0,n.uX)(),(0,n.Wv)(L,{key:0,entries:g.filteredEntries},null,8,["entries"])):(0,n.Q3)("",!0),(0,n.Lk)("div",b,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(h.toasts,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{key:t,class:(0,i.C4)(["toast",e.type])},[(0,n.eW)((0,i.v_)(e.message)+" ",1),(0,n.Lk)("button",{onClick:e=>g.removeToast(t),class:"ml-2 bg-transparent border-0 cursor-pointer"},"X",8,f)],2)))),128))])])}r(4114),r(8992),r(4520);const h={class:"p-6 bg-white rounded shadow"},g={class:"text-lg font-semibold mb-4"},v={class:"mb-4"},L={class:"mb-4"},E={class:"mb-4"},T={class:"mb-4"},w={class:"mb-4"},x={class:"mb-4"},D={type:"submit",class:"mt-2 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"};function j(e,t,r,o,a,l){return(0,n.uX)(),(0,n.CE)("div",h,[(0,n.Lk)("h2",g,(0,i.v_)(r.isEdit?"Módosítsd a bejegyzést":"Új munkaidő bejegyzés"),1),(0,n.Lk)("form",{onSubmit:t[6]||(t[6]=(0,s.D$)(((...e)=>l.handleSubmit&&l.handleSubmit(...e)),["prevent"]))},[(0,n.Lk)("div",v,[t[7]||(t[7]=(0,n.Lk)("label",{for:"userName",class:"block text-sm font-medium text-gray-700"},"Munkavállaló neve",-1)),(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.formData.userName=e),type:"text",id:"userName",required:"",class:"mt-1 block w-full p-2 border border-gray-300 rounded"},null,512),[[s.Jo,a.formData.userName]])]),(0,n.Lk)("div",L,[t[8]||(t[8]=(0,n.Lk)("label",{for:"date",class:"block text-sm font-medium text-gray-700"},"Dátum",-1)),(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>a.formData.date=e),type:"date",id:"date",required:"",class:"mt-1 block w-full p-2 border border-gray-300 rounded"},null,512),[[s.Jo,a.formData.date]])]),(0,n.Lk)("div",E,[t[9]||(t[9]=(0,n.Lk)("label",{for:"startTime",class:"block text-sm font-medium text-gray-700"},"Kezdési idő",-1)),(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>a.formData.startTime=e),type:"time",id:"startTime",required:"",class:"mt-1 block w-full p-2 border border-gray-300 rounded"},null,512),[[s.Jo,a.formData.startTime]])]),(0,n.Lk)("div",T,[t[10]||(t[10]=(0,n.Lk)("label",{for:"endTime",class:"block text-sm font-medium text-gray-700"},"Befejezési idő",-1)),(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>a.formData.endTime=e),type:"time",id:"endTime",required:"",class:"mt-1 block w-full p-2 border border-gray-300 rounded"},null,512),[[s.Jo,a.formData.endTime]])]),(0,n.Lk)("div",w,[t[11]||(t[11]=(0,n.Lk)("label",{for:"taskDescription",class:"block text-sm font-medium text-gray-700"},"Feladat leírása",-1)),(0,n.bo)((0,n.Lk)("textarea",{"onUpdate:modelValue":t[4]||(t[4]=e=>a.formData.taskDescription=e),id:"taskDescription",rows:"3",required:"",class:"mt-1 block w-full p-2 border border-gray-300 rounded"},null,512),[[s.Jo,a.formData.taskDescription]])]),(0,n.Lk)("div",x,[t[13]||(t[13]=(0,n.Lk)("label",{for:"tags",class:"block text-sm font-medium text-gray-700"},"Címkék",-1)),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[5]||(t[5]=e=>a.formData.tags=e),id:"tags",required:"",class:"mt-1 block w-full p-2 border border-gray-300 rounded"},t[12]||(t[12]=[(0,n.Lk)("option",{disabled:"",value:""},"Válassz egy címkét",-1),(0,n.Lk)("option",{value:"projekt"},"Projekt",-1),(0,n.Lk)("option",{value:"ügyfél"},"Ügyfél",-1)]),512),[[s.u1,a.formData.tags]])]),(0,n.Lk)("button",D,(0,i.v_)(r.isEdit?"Módosítás":"Hozzáadás"),1)],32)])}var C={props:{entry:{type:Object,default:()=>({userName:"",date:"",startTime:"",endTime:"",taskDescription:"",tags:""})},isEdit:{type:Boolean,default:!1}},data(){return{formData:{userName:this.entry.userName||"",date:this.entry.date||"",startTime:this.entry.startTime||"",endTime:this.entry.endTime||"",taskDescription:this.entry.taskDescription||"",tags:this.entry.tags||""}}},watch:{entry:{handler(e){this.formData={...e}},deep:!0,immediate:!0},isEdit(e){e||this.resetForm()}},methods:{handleSubmit(){this.$emit("submit",{...this.formData}),this.resetForm(),this.$emit("notify","Sikeresen mentve!")},resetForm(){this.formData={userName:"",date:"",startTime:"",endTime:"",taskDescription:"",tags:""}}}},z=r(1241);const F=(0,z.A)(C,[["render",j]]);var O=F;const S={class:"mt-6"},N={key:0},_={ref:"entriesChart"},X={key:1};function I(e,t,r,s,o,a){return(0,n.uX)(),(0,n.CE)("div",S,[t[1]||(t[1]=(0,n.Lk)("h2",{class:"text-xl font-semibold"},"Statisztikák",-1)),s.totalEntries>0?((0,n.uX)(),(0,n.CE)("div",N,[(0,n.Lk)("p",null,"Összes bejegyzés: "+(0,i.v_)(s.totalEntries),1),(0,n.Lk)("canvas",_,null,512)])):((0,n.uX)(),(0,n.CE)("div",X,t[0]||(t[0]=[(0,n.Lk)("p",null,"Nincsenek bejegyzések a statisztikákhoz.",-1)])))])}r(1454);var M=r(144),U=r(3456),V={props:{entries:{type:Object,required:!0}},setup(e){const t=(0,M.KR)(0),r=(0,M.KR)(null);let s=null;const i=()=>{if(s&&s.destroy(),!r.value)return;const t=r.value.getContext("2d");t&&(s=new U.Ay(t,{type:"bar",data:{labels:Object.keys(e.entries),datasets:[{label:"Bejegyzések száma",data:Object.values(e.entries).map((e=>e.length)),backgroundColor:"rgb(234 179 8)",borderColor:"rgb(234 179 8)",borderWidth:1}]},options:{responsive:!0,scales:{y:{beginAtZero:!0}}}}))};return(0,n.wB)((()=>e.entries),(e=>{t.value=Object.values(e).flat().length,i()}),{immediate:!0}),(0,n.sV)((()=>{i()})),(0,n.xo)((()=>{s&&s.destroy()})),{totalEntries:t,entriesChart:r}}};const B=(0,z.A)(V,[["render",I],["__scopeId","data-v-b5dfe9fe"]]);var W=B,J={components:{TimeEntryForm:O,MyStatistics:W},data(){return{entries:JSON.parse(localStorage.getItem("entries"))||{},viewType:"daily",tagFilter:"",toasts:[],isEdit:!1,currentEntry:{},currentUserName:"",currentEntryIndex:null}},computed:{filteredEntries(){const e={},t=new Date,r=t.toISOString().split("T")[0],s=new Date(t);s.setDate(t.getDate()-t.getDay());const n=new Date(s);n.setDate(s.getDate()+6);for(const i in this.entries){const o=this.entries[i];e[i]=o.filter((e=>{const i=new Date(e.date),o="daily"===this.viewType&&e.date===r||"weekly"===this.viewType&&i>=s&&i<=n||"monthly"===this.viewType&&i.getMonth()===t.getMonth(),a=!this.tagFilter||e.tags===this.tagFilter;return o&&a}))}return e}},methods:{handleFormSubmit(e){const t=e.userName;this.isEdit?(this.entries[t][this.currentEntryIndex]=e,this.isEdit=!1,this.addToast("Bejegyzés sikeresen módosítva!","success")):(this.entries[t]||(this.entries[t]=[]),this.entries[t].push(e),this.addToast("Bejegyzés sikeresen mentve!","success")),localStorage.setItem("entries",JSON.stringify(this.entries)),this.$refs.entryForm.resetForm()},editEntry(e,t,r){this.currentEntry={...e},this.isEdit=!0,this.currentUserName=t,this.currentEntryIndex=r,this.$refs.entryForm.formData={...e},this.scrollToTop()},deleteEntry(e,t){this.entries[e].splice(t,1),0===this.entries[e].length&&delete this.entries[e],localStorage.setItem("entries",JSON.stringify(this.entries)),this.addToast("Bejegyzés törölve!","error")},scrollToTop(){window.scrollTo(0,0)},addToast(e,t){this.toasts.push({message:e,type:t}),setTimeout((()=>{this.removeToast(this.toasts.length-1)}),3e3)},removeToast(e){this.toasts.splice(e,1)}}};const q=(0,z.A)(J,[["render",y]]);var K=q;(0,s.Ef)(K).mount("#app")}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,s,n,i){if(!s){var o=1/0;for(u=0;u<e.length;u++){s=e[u][0],n=e[u][1],i=e[u][2];for(var a=!0,l=0;l<s.length;l++)(!1&i||o>=i)&&Object.keys(r.O).every((function(e){return r.O[e](s[l])}))?s.splice(l--,1):(a=!1,i<o&&(o=i));if(a){e.splice(u--,1);var d=n();void 0!==d&&(t=d)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[s,n,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,i,o=s[0],a=s[1],l=s[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(l)var u=l(r)}for(t&&t(s);d<o.length;d++)i=o[d],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},s=self["webpackChunkmy_time_tracker"]=self["webpackChunkmy_time_tracker"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[504],(function(){return r(8727)}));s=r.O(s)})();
//# sourceMappingURL=app.62c5f8a7.js.map