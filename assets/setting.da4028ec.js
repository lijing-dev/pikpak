import{d as C,r as F,p as y,m as N,o as v,s as f,b as a,e,at as S,w as t,au as c,R as m,Q as _,al as r,av as B,c as T,ak as x,D as g,an as h,T as I,ad as O,aw as U,F as n,y as E}from"./vendor.60359f7c.js";import{i as j}from"./index.f68f5984.js";var $="/pikpak/assets/aria2-tip-1.e9ebfae4.png",J="/pikpak/assets/aria2-tip-2.f3636f8d.png";const L={class:"list-page"},P=n("p",null,null,-1),V=E("Telegram\u7ED1\u5B9A"),G=n("a",{href:"https://t.me/PikPak_Bot",target:"_blank"},"Telegram\u673A\u5668\u4EBA\u5730\u5740",-1),R=E("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4FDD\u5B58\u6587\u4EF6\u5939\u7ED3\u6784"),H=E("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4EC5\u4FDD\u5B58\u6587\u4EF6"),M=n("img",{src:$,alt:""},null,-1),Q=n("br",null,null,-1),q=n("br",null,null,-1),z=n("img",{src:J,alt:""},null,-1),K=E("\u6D4B\u8BD5\u5E76\u4FDD\u5B58"),W=E("\u4FDD\u5B58"),X=n("a",{href:"https://mypikpak.com/",target:"_blank",class:"n-button"},"\u5B98\u65B9\u7F51\u7AD9",-1),Y=n("a",{href:"https://t.me/pikpak_userservice",target:"_blank",class:"n-button"},"\u5B98\u65B9\u4EA4\u6D41\u7FA4",-1),Z=n("a",{href:"https://github.com/mumuchenchen/pikpak",target:"_blank",class:"n-button"},"\u5F00\u6E90\u4ED3\u5E93",-1),uu=n("a",{href:"https://www.tjsky.net/?p=201",target:"_blank",class:"n-button"},"\u90E8\u7F72\u6559\u7A0B",-1),eu=n("a",{href:"https://t.me/mumuchenchen",target:"_blank"},"\u95EE\u9898\u53CD\u9988",-1),au=n("br",null,null,-1),ou=C({setup(tu){const k=F(["\u6DFB\u52A0\u63A8\u5E7F\u4E0B\u8F7D","\u7ED1\u5B9ATelegram","\u76F4\u63A5\u5206\u4EAB\u529F\u80FD","\u4FEE\u6539\u4F20\u8F93\u81EA\u52A8\u8BF7\u6C42\u65B9\u5F0F","\u4F20\u8F93\u53EA\u663E\u793A\u4FDD\u5B58\u4E2D","\u81EA\u5B9A\u4E49\u83DC\u5355","\u8D44\u6E90\u5E93\u5206\u9875\uFF0C\u5206\u4EAB\u79D2\u4F20\u652F\u6301\u6587\u4EF6\u53CA","...."]),l=F({host:"",token:"",dir:!0}),D=()=>{let o={id:"",jsonrpc:"2.0",method:"aria2.getGlobalStat",params:[]};l.value.token&&o.params.splice(0,0,"token:"+l.value.token),fetch(l.value.host,{method:"POST",body:JSON.stringify(o),headers:new Headers({"Content-Type":"application/json"})}).then(u=>u.json()).then(u=>{u.error&&u.error.message?window.$message.error(u.error.message):u.result&&(window.localStorage.setItem("pikpakAria2",JSON.stringify(l.value)),window.$message.success("\u4FDD\u5B58\u6210\u529F"))}).catch(u=>console.error("Error:",u))},p=F(!1),i=F({username:"",password:""}),w=y(),A=()=>{p.value?w.warning({title:"\u8B66\u544A",content:"\u8BB0\u4F4F\u767B\u9646\u662F\u6307\u6D4F\u89C8\u5668\u672C\u5730\u660E\u6587\u4FDD\u5B58\u7528\u6237\u540D\u5BC6\u7801\u7528\u4E8E\u4E0B\u6B21\u81EA\u52A8\u767B\u9646\uFF0C\u8BF7\u52FF\u5728\u975E\u4FE1\u4EFB\u8BBE\u5907\u9009\u62E9",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{},onNegativeClick:()=>{window.localStorage.setItem("pikpakLoginData",JSON.stringify(i.value))}}):window.localStorage.removeItem("pikpakLoginData")};N(()=>{let o=JSON.parse(window.localStorage.getItem("pikpakAria2")||"{}");o.dir===void 0&&(o.dir=!0),o.host&&(l.value=o);let u=JSON.parse(window.localStorage.getItem("pikpakLoginData")||"{}");u.username&&u.password&&(i.value=u,p.value=!0)});const d=F(),b=()=>{let o=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(!o&&!o.access_token)return window.$message.error("\u8BF7\u5148\u767B\u9646"),!1;let u=d.value&&decodeURIComponent(d.value).match(/(^|&)token=([^&]*)(&|$)/);if(console.log(u),!u||!u.length||u.length!=4)return window.$message.error("\u8BF7\u8F93\u5165\u6B63\u786E\u94FE\u63A5"),!1;j.post("https://api-drive.mypikpak.com/user/v1/bind",{accessToken:o.access_token,thirdType:"TG",thirdToken:u[2]}).then(s=>{d.value="",s.data.bound?window.$message.success("\u7ED1\u5B9A\u6210\u529F"):window.$message.error("\u7ED1\u5B9A\u5931\u8D25")})};return(o,u)=>(v(),f("div",L,[a(e(S),{"default-expanded-names":["-1","0","2"]},{default:t(()=>[a(e(c),{name:"-1",title:"\u7ED1\u5B9Atelegram"},{default:t(()=>[a(e(m),{value:d.value,"onUpdate:value":u[0]||(u[0]=s=>d.value=s),placeholder:"\u590D\u5236telegram\u7ED1\u5B9A\u94FE\u63A5\u5230\u8FD9"},null,8,["value"]),P,a(e(_),{disabled:!d.value,type:"primary",onClick:b},{default:t(()=>[V]),_:1},8,["disabled"]),G]),_:1}),a(e(c),{name:"0",title:"aria2\u8BBE\u7F6E"},{default:t(()=>[a(e(h),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:t(()=>[a(e(r),{label:"aria2\u94FE\u63A5\uFF1A"},{default:t(()=>[a(e(m),{value:l.value.host,"onUpdate:value":u[1]||(u[1]=s=>l.value.host=s),placeholder:"\u4F8B\u5982http://localhost:6800/jsonrpc"},null,8,["value"])]),_:1}),a(e(r),{label:"aria2Token\uFF1A"},{default:t(()=>[a(e(m),{value:l.value.token,"onUpdate:value":u[2]||(u[2]=s=>l.value.token=s),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1}),a(e(r),{label:"\u6587\u4EF6\u5939\u8BBE\u7F6E\uFF1A"},{default:t(()=>[a(e(B),{value:l.value.dir,"onUpdate:value":u[3]||(u[3]=s=>l.value.dir=s)},{checked:t(()=>[R]),unchecked:t(()=>[H]),_:1},8,["value"])]),_:1}),l.value.host&&l.value.host.indexOf("https://")===-1&&l.value.host.indexOf("http://localhost")==-1&&l.value.host.indexOf("http://127.0.0.1")===-1?(v(),T(e(x),{key:0,title:"\u7531\u4E8E\u6D4F\u89C8\u5668\u9650\u5236\uFF0C\u8BF7\u6309\u4E0B\u56FE\u8BBE\u7F6E\u5F00\u59CB\u6DF7\u5408\u6A21\u5F0F",type:"info"},{default:t(()=>[M,Q,q,z]),_:1})):g("",!0),a(e(r),null,{default:t(()=>[a(e(_),{type:"primary",onClick:D},{default:t(()=>[K]),_:1})]),_:1})]),_:1})]),_:1}),a(e(c),{name:"1",title:"\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E"},{default:t(()=>[a(e(h),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:t(()=>[a(e(r),{label:"\u662F\u5426\u5F00\u542F"},{default:t(()=>[a(e(B),{value:p.value,"onUpdate:value":u[4]||(u[4]=s=>p.value=s)},null,8,["value"])]),_:1}),p.value?(v(),f(I,{key:0},[a(e(r),{label:"\u7528\u6237\u540D"},{default:t(()=>[a(e(m),{value:i.value.username,"onUpdate:value":u[5]||(u[5]=s=>i.value.username=s),placeholder:"\u7528\u6237\u540D"},null,8,["value"])]),_:1}),a(e(r),{label:"\u5BC6\u7801"},{default:t(()=>[a(e(m),{value:i.value.password,"onUpdate:value":u[6]||(u[6]=s=>i.value.password=s),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1})],64)):g("",!0),a(e(r),null,{default:t(()=>[a(e(_),{type:"primary",onClick:A},{default:t(()=>[W]),_:1})]),_:1})]),_:1})]),_:1}),a(e(c),{title:"\u5173\u4E8E",name:"2"},{default:t(()=>[a(e(O),null,{default:t(()=>[X,Y,Z,uu,eu]),_:1}),au]),_:1}),a(e(c),{title:"\u529F\u80FD\u5217\u8868",name:"3"},{default:t(()=>[a(e(U),{lines:k.value},null,8,["lines"])]),_:1})]),_:1})]))}});export{ou as default};
