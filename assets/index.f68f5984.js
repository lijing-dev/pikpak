var ue=Object.defineProperty;var H=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var J=(e,t,o)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))ce.call(t,o)&&J(e,o,t[o]);if(H)for(var o of H(t))pe.call(t,o)&&J(e,o,t[o]);return e};import{d as I,u as de,r as v,a as K,o as h,c as Y,w as u,b as l,e as a,N as me,f as ve,g as fe,z as he,h as ge,i as _e,j as q,k as ke,l as we,m as ye,n as Ne,p as Ee,q as xe,s as k,t as $e,v as be,x as Ce,y as E,A as L,B as Fe,C as Ie,D as F,E as Le,F as w,G as Ae,H as De,I as A,L as Pe,J as G,K as Oe,M as Te,O as Be,P as Se,Q as Re,R as Me,S as Ve,T as ze,U as Z,V as je,W as Ue,X as He,Y as Je,Z as We,_ as Ke,$ as Ye,a0 as qe,a1 as Ge}from"./vendor.60359f7c.js";const Ze=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};Ze();const Xe=I({setup(e){return window.$message=de(),(t,o)=>null}}),Qe=I({setup(e){const t=v({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return(o,n)=>{const s=K("router-view");return h(),Y(a(_e),{locale:a(he),"date-locale":a(ge),"theme-overrides":t.value},{default:u(()=>[l(a(fe),null,{default:u(()=>[l(a(me),null,{default:u(()=>[l(a(ve),null,{default:u(()=>[l(Xe),l(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),et="modulepreload",X={},tt="/pikpak/",g=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${tt}${n}`,n in X)return;X[n]=!0;const s=n.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":et,s||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),s)return new Promise((y,f)=>{c.addEventListener("load",y),c.addEventListener("error",f)})})).then(()=>t())};var ot="/pikpak/assets/logo1.08eb9157.png";const d=q.create({});d.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");return(!t||!t.access_token)&&$.push("/login"),e.headers={Authorization:t.token_type+" "+t.access_token},((o=e.url)==null?void 0:o.indexOf("https://pikpak.npcc.workers.dev"))===-1&&(e.url="https://pikpak.npcc.workers.dev/"+e.url),e});let x=!1;d.interceptors.response.use(e=>e,e=>{const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:const n=window.localStorage.getItem("pikpakLoginData"),s=n?JSON.parse(n):{};return s.username&&s.password&&!x?(console.log("wait",o.url),x=!0,d.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},s)).then(r=>(r.data&&r.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(r.data)),x=!1,d(o))).catch(()=>($.push("/login"),!1))):s.username&&s.password&&x?new Promise((r,c)=>{const y=setInterval(()=>{x||(clearInterval(y),r(d(o)))},100)}):($.push("/login"),!1);case 400:case 403:window.$message.error(t.data.error_description||"\u51FA\u9519\u4E86")}return console.log(o.url,111),Promise.reject(e)});const Q=q.create({});Q.interceptors.request.use(e=>{var t;return e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"},((t=e.url)==null?void 0:t.indexOf("https://pikpak.npcc.workers.dev"))===-1&&(e.url="https://pikpak.npcc.workers.dev/"+e.url),e});const wt=Q,ee=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let n=Math.floor(o/10);return e=e/Math.pow(2,10*n),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[n]};const st=w("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[w("img",{src:"https://www.mypikpak.com/logo.png",class:"logo-box__icon",alt:""}),w("div",{class:"logo-box__text"},"PikPak")],-1),at={key:0,class:"content-bottom"},nt=E("\u4F1A\u5458\u7801"),rt={class:"bottom-user-info"},it={key:0,src:ot,class:"user-info-avatar"},lt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},ut={class:"user-info-name"},ct={key:0},pt={class:"action"},dt=E(" \u9000\u51FA\u767B\u5F55 "),mt=E("\u6DFB\u52A0"),vt=I({setup(e){const t=v(!1),o=i=>()=>Z(A,null,{default:()=>Z(i)}),n=ke(),s=we(),r=v([{label:"\u6587\u4EF6",key:"list",icon:o(Je)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(je)},{label:"\u8D44\u6E90\u5E93",key:"share",icon:o(Ue)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(He)}]),c=v(),y=()=>{d.get("https://user.mypikpak.com/v1/user/me").then(i=>{window.localStorage.setItem("pikpakUser",JSON.stringify(i.data)),c.value=i.data}).catch(i=>{console.log(i)})},f=v(),D=()=>{d.get("https://api-drive.mypikpak.com/drive/v1/about").then(i=>{f.value=i.data}).catch(i=>{console.log(i)})},_=v(),te=()=>{d.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(i=>{var p;_.value=(p=i.data)==null?void 0:p.data})},oe=(i,p)=>{console.log(p),n.push("/"+p.key)};ye(()=>{y(),D(),te()});const C=v(),N=v(!1),se=()=>{d.post("https://api-drive.mypikpak.com/vip/v1/order/free",{activation_code:C.value}).then(i=>{window.$message.success("\u5151\u6362\u6210\u529F"),D()}).catch(i=>{console.log(i)}).finally(()=>{N.value=!1})},P=v(!1),ae=i=>{P.value=i<800,t.value||(t.value=i<800)};Ne(s,()=>{P.value&&(t.value=!0)});const ne=Ee(),re=()=>{ne.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{d.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(i=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),n.push("/login")}).catch(i=>{console.log(i)})}})};return(i,p)=>{const ie=K("router-view"),le=xe("resize");return h(),k(ze,null,[$e(l(a(G),{"has-sider":"",onResize:ae},{default:u(()=>[l(a(be),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:p[1]||(p[1]=m=>t.value=!0),onExpand:p[2]||(p[2]=m=>t.value=!1),bordered:""},{default:u(()=>{var m,O,T,B,S,R,M,V,z,j,U;return[st,l(a(Ce),{options:r.value,value:String(a(s).name),"onUpdate:value":oe},null,8,["options","value"]),t.value?F("",!0):(h(),k("div",at,[E(L(a(ee)((m=f.value)==null?void 0:m.quota.usage))+" / "+L(a(ee)((O=f.value)==null?void 0:O.quota.limit))+" ",1),l(a(Fe),{type:"primary",onClick:p[0]||(p[0]=gt=>N.value=!0)},{default:u(()=>[nt]),_:1}),((T=f.value)==null?void 0:T.quota)?(h(),Y(a(Ie),{key:0,type:"line",percentage:Number((((B=f.value)==null?void 0:B.quota.usage)/((S=f.value)==null?void 0:S.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((R=_.value)==null?void 0:R.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):F("",!0)])),t.value?F("",!0):(h(),k("div",{key:1,class:Le(["sider-bottom",{vip:((M=_.value)==null?void 0:M.status)==="ok"}])},[w("div",rt,[((V=_.value)==null?void 0:V.status)==="ok"?(h(),k("img",it)):(h(),k("img",lt)),w("div",ut,[E(L((z=c.value)==null?void 0:z.name)+" ",1),((j=_.value)==null?void 0:j.status)==="ok"&&((U=_.value)==null?void 0:U.expire)?(h(),k("div",ct,[l(a(Ae),{time:new Date(_.value.expire),type:"datetime"},null,8,["time"])])):F("",!0)]),w("div",pt,[l(a(De),null,{trigger:u(()=>[l(a(A),{onClick:re},{default:u(()=>[l(a(Pe))]),_:1})]),default:u(()=>[dt]),_:1})])])],2))]}),_:1},8,["collapsed"]),l(a(G),null,{default:u(()=>[l(a(Oe),{style:{height:"100vh"}},{default:u(()=>[l(a(Te),{style:{"max-height":"100vh"}},{default:u(()=>[l(ie)]),_:1})]),_:1})]),_:1})]),_:1},512),[[le]]),l(a(Ve),{show:N.value,"onUpdate:show":p[5]||(p[5]=m=>N.value=m)},{default:u(()=>[l(a(Be),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":u(()=>[l(a(A),{onClick:p[3]||(p[3]=m=>N.value=!1)},{default:u(()=>[l(a(Se))]),_:1})]),action:u(()=>[l(a(Re),{block:!0,type:"primary",disabled:!C.value,onClick:se},{default:u(()=>[mt]),_:1},8,["disabled"])]),default:u(()=>[l(a(Me),{placeholder:"\u4F1A\u5458\u7801",value:C.value,"onUpdate:value":p[4]||(p[4]=m=>C.value=m)},null,8,["value"])]),_:1})]),_:1},8,["show"])],64)}}}),ft=[{path:"/",name:"home",component:vt,redirect:"/list",children:[{path:"list/:id?",name:"list",component:()=>g(()=>import("./list.a7e7a93f.js"),["assets/list.a7e7a93f.js","assets/list.b938c6ec.css","assets/vendor.60359f7c.js","assets/StreamSaver.55f74170.js","assets/StreamSaver.594f5e9d.css"])},{path:"trash",name:"trash",component:()=>g(()=>import("./trash.e759afe8.js"),["assets/trash.e759afe8.js","assets/trash.99a3677d.css","assets/vendor.60359f7c.js"])},{path:"setting",name:"setting",component:()=>g(()=>import("./setting.da4028ec.js"),["assets/setting.da4028ec.js","assets/setting.f947579c.css","assets/vendor.60359f7c.js"])},{path:"share",name:"share",component:()=>g(()=>import("./share.ca23299e.js"),["assets/share.ca23299e.js","assets/share.4f9c11c6.css","assets/vendor.60359f7c.js"])}]},{path:"/t/:id?",name:"test",component:()=>g(()=>import("./test.6839a990.js"),["assets/test.6839a990.js","assets/vendor.60359f7c.js"])},{path:"/s/:id",name:"shareInfo",component:()=>g(()=>import("./shareInfo.527bc0b5.js"),["assets/shareInfo.527bc0b5.js","assets/shareInfo.9e107d57.css","assets/vendor.60359f7c.js","assets/StreamSaver.55f74170.js","assets/StreamSaver.594f5e9d.css"])},{path:"/login",name:"login",component:()=>g(()=>import("./login.adfe3e3c.js"),["assets/login.adfe3e3c.js","assets/login.5735a7bc.css","assets/vendor.60359f7c.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/register",name:"register",component:()=>g(()=>import("./register.31eb8b4d.js"),["assets/register.31eb8b4d.js","assets/register.5588ce76.css","assets/vendor.60359f7c.js","assets/phone-pc2.dbf6d71e.js"])}],ht=We({history:Ke(),routes:ft});var $=ht;const b=Ye(Qe);b.directive("resize",{mounted(e,t,o){e.$$erd=qe({strategy:"scroll"}),e.$$erd.listenTo({},e,n=>{let s=n.offsetWidth,r=n.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var c;(c=o.props)==null||c.onResize(s,r)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});b.config.globalProperties.$http=d;b.use($);b.use(Ge,{router:$,siteIdList:[1280510106]});b.mount("#app");export{ee as b,d as i,wt as n};
