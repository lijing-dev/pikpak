var ce=Object.defineProperty;var U=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))pe.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))de.call(t,o)&&H(e,o,t[o]);return e};import{d as D,u as me,r as f,a as G,o as g,c as K,w as l,b as n,e as a,N as he,f as fe,g as ve,z as _e,h as ge,i as ke,j as Y,k as ye,l as we,m as Ee,n as Fe,p as Ae,q as Ce,s as y,t as Ne,v as be,x as xe,y as w,A as I,B as De,C as Ie,D as x,E as m,F as q,G as Pe,H as $e,I as P,L as Le,J as Z,K as Be,M as Oe,O as Te,P as Se,Q as Ve,R as Re,S as Me,T as je,U as X,V as ze,W as Je,X as Ue,Y as He,Z as We,_ as Ge,$ as Ke,a0 as Ye,a1 as qe}from"./vendor.2ddacc38.js";const Ze=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}};Ze();const Xe=D({setup(e){return window.$message=me(),(t,o)=>null}}),Qe=D({setup(e){const t=f({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return(o,r)=>{const s=G("router-view");return g(),K(a(ke),{locale:a(_e),"date-locale":a(ge),"theme-overrides":t.value},{default:l(()=>[n(a(ve),null,{default:l(()=>[n(a(he),null,{default:l(()=>[n(a(fe),null,{default:l(()=>[n(Xe),n(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),et="modulepreload",Q={},tt="/pikpak/",v=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${tt}${r}`,r in Q)return;Q[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":et,s||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),s)return new Promise((E,_)=>{c.addEventListener("load",E),c.addEventListener("error",_)})})).then(()=>t())};var ot="/pikpak/assets/logo1.08eb9157.png";const d=Y.create({});d.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");return(!t||!t.access_token)&&C.push("/login"),e.headers={Authorization:t.token_type+" "+t.access_token},((o=e.url)==null?void 0:o.indexOf("https://pikpak.npcc.workers.dev"))===-1&&(e.url="https://pikpak.npcc.workers.dev/"+e.url),e});let A=!1;d.interceptors.response.use(e=>e,e=>{const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:const r=window.localStorage.getItem("pikpakLoginData"),s=r?JSON.parse(r):{};return s.username&&s.password&&!A?(console.log("wait",o.url),A=!0,d.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},s)).then(i=>(i.data&&i.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(i.data)),A=!1,d(o))).catch(()=>(C.push("/login"),!1))):s.username&&s.password&&A?new Promise((i,c)=>{const E=setInterval(()=>{A||(clearInterval(E),i(d(o)))},100)}):(C.push("/login"),!1);case 400:case 403:window.$message.error(t.data.error_description||"\u51FA\u9519\u4E86")}return console.log(o.url,111),Promise.reject(e)});const ee=Y.create({});ee.interceptors.request.use(e=>{var t;return e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"},((t=e.url)==null?void 0:t.indexOf("https://pikpak.npcc.workers.dev"))===-1&&(e.url="https://pikpak.npcc.workers.dev/"+e.url),e});const At=ee,te=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let r=Math.floor(o/10);return e=e/Math.pow(2,10*r),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[r]};const st=m("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[m("img",{src:"https://www.mypikpak.com/logo.png",class:"logo-box__icon",alt:""}),m("div",{class:"logo-box__text"},"PikPak")],-1),at={key:0,class:"content-bottom"},nt=w("\u4F1A\u5458\u7801"),rt={style:{"margin-bottom":"0"}},it=m("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\uFFE5119\u8D2D\u4E70\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361",-1),ut=w(" \u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0\uFF0C\u5B98\u65B9\u4EE3\u7406\u5546\u5206\u9500\uFF0C\u611F\u8C22\u652F\u6301 "),lt={class:"bottom-user-info"},ct={key:0,src:ot,class:"user-info-avatar"},pt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},dt={class:"user-info-name"},mt={key:0},ht={class:"action"},ft=w(" \u9000\u51FA\u767B\u5F55 "),vt=m("p",null,[m("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0\uFF0C\u611F\u8C22\u652F\u6301")],-1),_t=w("\u6DFB\u52A0"),gt=D({setup(e){const t=f(!1),o=u=>()=>X(P,null,{default:()=>X(u)}),r=ye(),s=we(),i=f([{label:"\u6587\u4EF6",key:"list",icon:o(He)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(ze)},{label:"\u8D44\u6E90\u5E93",key:"share",icon:o(Je)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(Ue)}]),c=f(),E=()=>{d.get("https://user.mypikpak.com/v1/user/me").then(u=>{window.localStorage.setItem("pikpakUser",JSON.stringify(u.data)),c.value=u.data}).catch(u=>{console.log(u)})},_=f(),$=()=>{d.get("https://api-drive.mypikpak.com/drive/v1/about").then(u=>{_.value=u.data}).catch(u=>{console.log(u)})},k=f(),oe=()=>{d.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(u=>{var p;k.value=(p=u.data)==null?void 0:p.data})},se=(u,p)=>{console.log(p),r.push("/"+p.key)};Ee(()=>{E(),$(),oe()});const b=f(),F=f(!1),ae=()=>{d.post("https://api-drive.mypikpak.com/vip/v1/order/free",{activation_code:b.value}).then(u=>{window.$message.success("\u5151\u6362\u6210\u529F"),$()}).catch(u=>{console.log(u)}).finally(()=>{F.value=!1})},L=f(!1),ne=u=>{L.value=u<800,t.value||(t.value=u<800)};Fe(s,()=>{L.value&&(t.value=!0)});const re=Ae(),ie=()=>{re.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{d.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(u=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),r.push("/login")}).catch(u=>{console.log(u)})}})};return(u,p)=>{const ue=G("router-view"),le=Ce("resize");return g(),y(je,null,[Ne(n(a(Z),{"has-sider":"",onResize:ne},{default:l(()=>[n(a(be),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:p[1]||(p[1]=h=>t.value=!0),onExpand:p[2]||(p[2]=h=>t.value=!1),bordered:""},{default:l(()=>{var h,B,O,T,S,V,R,M,j,z,J;return[st,n(a(xe),{options:i.value,value:String(a(s).name),"onUpdate:value":se},null,8,["options","value"]),t.value?x("",!0):(g(),y("div",at,[w(I(a(te)((h=_.value)==null?void 0:h.quota.usage))+" / "+I(a(te)((B=_.value)==null?void 0:B.quota.limit))+" ",1),n(a(De),{type:"primary",onClick:p[0]||(p[0]=wt=>F.value=!0)},{default:l(()=>[nt]),_:1}),((O=_.value)==null?void 0:O.quota)?(g(),K(a(Ie),{key:0,type:"line",percentage:Number((((T=_.value)==null?void 0:T.quota.usage)/((S=_.value)==null?void 0:S.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((V=k.value)==null?void 0:V.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):x("",!0),m("p",rt,[n(a(q),{placement:"right"},{trigger:l(()=>[it]),default:l(()=>[ut]),_:1})])])),t.value?x("",!0):(g(),y("div",{key:1,class:Pe(["sider-bottom",{vip:((R=k.value)==null?void 0:R.status)==="ok"}])},[m("div",lt,[((M=k.value)==null?void 0:M.status)==="ok"?(g(),y("img",ct)):(g(),y("img",pt)),m("div",dt,[w(I((j=c.value)==null?void 0:j.name)+" ",1),((z=k.value)==null?void 0:z.status)==="ok"&&((J=k.value)==null?void 0:J.expire)?(g(),y("div",mt,[n(a($e),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):x("",!0)]),m("div",ht,[n(a(q),null,{trigger:l(()=>[n(a(P),{onClick:ie},{default:l(()=>[n(a(Le))]),_:1})]),default:l(()=>[ft]),_:1})])])],2))]}),_:1},8,["collapsed"]),n(a(Z),null,{default:l(()=>[n(a(Be),{style:{height:"100vh"}},{default:l(()=>[n(a(Oe),{style:{"max-height":"100vh"}},{default:l(()=>[n(ue)]),_:1})]),_:1})]),_:1})]),_:1},512),[[le]]),n(a(Me),{show:F.value,"onUpdate:show":p[5]||(p[5]=h=>F.value=h)},{default:l(()=>[n(a(Te),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":l(()=>[n(a(P),{onClick:p[3]||(p[3]=h=>F.value=!1)},{default:l(()=>[n(a(Se))]),_:1})]),action:l(()=>[n(a(Ve),{block:!0,type:"primary",disabled:!b.value,onClick:ae},{default:l(()=>[_t]),_:1},8,["disabled"])]),default:l(()=>[n(a(Re),{placeholder:"\u4F1A\u5458\u7801",value:b.value,"onUpdate:value":p[4]||(p[4]=h=>b.value=h)},null,8,["value"]),vt]),_:1})]),_:1},8,["show"])],64)}}}),kt=[{path:"/",name:"home",component:gt,redirect:"/list",children:[{path:"list/:id?",name:"list",component:()=>v(()=>import("./list.8a13755c.js"),["assets/list.8a13755c.js","assets/list.b938c6ec.css","assets/vendor.2ddacc38.js","assets/StreamSaver.8930e540.js","assets/StreamSaver.594f5e9d.css"])},{path:"trash",name:"trash",component:()=>v(()=>import("./trash.1c341bc7.js"),["assets/trash.1c341bc7.js","assets/trash.99a3677d.css","assets/vendor.2ddacc38.js"])},{path:"setting",name:"setting",component:()=>v(()=>import("./setting.6c95b66b.js"),["assets/setting.6c95b66b.js","assets/setting.f947579c.css","assets/vendor.2ddacc38.js"])},{path:"share",name:"share",component:()=>v(()=>import("./share.74d93535.js"),["assets/share.74d93535.js","assets/share.4f9c11c6.css","assets/vendor.2ddacc38.js"])}]},{path:"/t/:id?",name:"test",component:()=>v(()=>import("./test.6bfbaf88.js"),["assets/test.6bfbaf88.js","assets/vendor.2ddacc38.js"])},{path:"/s/:id",name:"shareInfo",component:()=>v(()=>import("./shareInfo.71c7854a.js"),["assets/shareInfo.71c7854a.js","assets/shareInfo.9e107d57.css","assets/vendor.2ddacc38.js","assets/StreamSaver.8930e540.js","assets/StreamSaver.594f5e9d.css"])},{path:"/login",name:"login",component:()=>v(()=>import("./login.7207bede.js"),["assets/login.7207bede.js","assets/login.5735a7bc.css","assets/vendor.2ddacc38.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/register",name:"register",component:()=>v(()=>import("./register.8c7ab9f9.js"),["assets/register.8c7ab9f9.js","assets/register.5588ce76.css","assets/vendor.2ddacc38.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>v(()=>import("./testtest.e6395cc3.js"),["assets/testtest.e6395cc3.js","assets/vendor.2ddacc38.js"])}],yt=We({history:Ge(),routes:kt});var C=yt;const N=Ke(Qe);N.directive("resize",{mounted(e,t,o){e.$$erd=Ye({strategy:"scroll"}),e.$$erd.listenTo({},e,r=>{let s=r.offsetWidth,i=r.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var c;(c=o.props)==null||c.onResize(s,i)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});N.config.globalProperties.$http=d;N.use(C);N.use(qe,{router:C,siteIdList:[1280510106]});N.mount("#app");export{te as b,d as i,At as n};
