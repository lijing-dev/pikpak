import{d as D,r as v,p as b,m as A,o as F,s as f,b as a,e as u,an as C,w as t,ao as _,ap as i,R as p,aq as m,c as y,aj as N,D as h,Q as E,ar as B,T as S,ab as x,y as c,F as o}from"./vendor.f5c376e8.js";var O="/pikpak/assets/aria2-tip-1.e9ebfae4.png",I="/pikpak/assets/aria2-tip-2.f3636f8d.png";const j={class:"list-page"},T=c("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4FDD\u5B58\u6587\u4EF6\u5939\u7ED3\u6784"),U=c("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4EC5\u4FDD\u5B58\u6587\u4EF6"),J=o("img",{src:O,alt:""},null,-1),V=o("br",null,null,-1),L=o("br",null,null,-1),P=o("img",{src:I,alt:""},null,-1),$=c("\u6D4B\u8BD5\u5E76\u4FDD\u5B58"),q=c("\u4FDD\u5B58"),G=o("a",{href:"https://mypikpak.com/",target:"_blank",class:"n-button"},"\u5B98\u65B9\u7F51\u7AD9",-1),H=o("a",{href:"https://t.me/pikpak_userservice",target:"_blank",class:"n-button"},"\u5B98\u65B9\u4EA4\u6D41\u7FA4",-1),M=o("a",{href:"https://github.com/mumuchenchen/pikpak",target:"_blank",class:"n-button"},"\u5F00\u6E90\u4ED3\u5E93",-1),Q=o("a",{href:"https://www.tjsky.net/?p=201",target:"_blank",class:"n-button"},"\u90E8\u7F72\u6559\u7A0B",-1),R=o("a",{href:"https://t.me/mumuchenchen",target:"_blank"},"\u95EE\u9898\u53CD\u9988",-1),W=D({setup(z){const l=v({host:"",token:"",dir:!0}),k=()=>{let n={id:"",jsonrpc:"2.0",method:"aria2.getGlobalStat",params:[]};l.value.token&&n.params.splice(0,0,"token:"+l.value.token),fetch(l.value.host,{method:"POST",body:JSON.stringify(n),headers:new Headers({"Content-Type":"application/json"})}).then(e=>e.json()).then(e=>{e.error&&e.error.message?window.$message.error(e.error.message):e.result&&(window.localStorage.setItem("pikpakAria2",JSON.stringify(l.value)),window.$message.success("\u4FDD\u5B58\u6210\u529F"))}).catch(e=>console.error("Error:",e))},d=v(!1),r=v({username:"",password:""}),g=b(),w=()=>{d.value?g.warning({title:"\u8B66\u544A",content:"\u8BB0\u4F4F\u767B\u9646\u662F\u6307\u6D4F\u89C8\u5668\u672C\u5730\u660E\u6587\u4FDD\u5B58\u7528\u6237\u540D\u5BC6\u7801\u7528\u4E8E\u4E0B\u6B21\u81EA\u52A8\u767B\u9646\uFF0C\u8BF7\u52FF\u5728\u975E\u4FE1\u4EFB\u8BBE\u5907\u9009\u62E9",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{},onNegativeClick:()=>{window.localStorage.setItem("pikpakLoginData",JSON.stringify(r.value))}}):window.localStorage.removeItem("pikpakLoginData")};return A(()=>{let n=JSON.parse(window.localStorage.getItem("pikpakAria2")||"{}");n.dir===void 0&&(n.dir=!0),n.host&&(l.value=n);let e=JSON.parse(window.localStorage.getItem("pikpakLoginData")||"{}");e.username&&e.password&&(r.value=e,d.value=!0)}),(n,e)=>(F(),f("div",j,[a(u(C),{"default-expanded-names":["0","2"]},{default:t(()=>[a(u(_),{name:"0",title:"aria2\u8BBE\u7F6E"},{default:t(()=>[a(u(B),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:t(()=>[a(u(i),{label:"aria2\u94FE\u63A5\uFF1A"},{default:t(()=>[a(u(p),{value:l.value.host,"onUpdate:value":e[0]||(e[0]=s=>l.value.host=s),placeholder:"\u4F8B\u5982http://localhost:6800/jsonrpc"},null,8,["value"])]),_:1}),a(u(i),{label:"aria2Token\uFF1A"},{default:t(()=>[a(u(p),{value:l.value.token,"onUpdate:value":e[1]||(e[1]=s=>l.value.token=s),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1}),a(u(i),{label:"\u6587\u4EF6\u5939\u8BBE\u7F6E\uFF1A"},{default:t(()=>[a(u(m),{value:l.value.dir,"onUpdate:value":e[2]||(e[2]=s=>l.value.dir=s)},{checked:t(()=>[T]),unchecked:t(()=>[U]),_:1},8,["value"])]),_:1}),l.value.host&&l.value.host.indexOf("https://")===-1&&l.value.host.indexOf("http://localhost")==-1&&l.value.host.indexOf("http://127.0.0.1")===-1?(F(),y(u(N),{key:0,title:"\u7531\u4E8E\u6D4F\u89C8\u5668\u9650\u5236\uFF0C\u8BF7\u6309\u4E0B\u56FE\u8BBE\u7F6E\u5F00\u59CB\u6DF7\u5408\u6A21\u5F0F",type:"info"},{default:t(()=>[J,V,L,P]),_:1})):h("",!0),a(u(i),null,{default:t(()=>[a(u(E),{type:"primary",onClick:k},{default:t(()=>[$]),_:1})]),_:1})]),_:1})]),_:1}),a(u(_),{name:"1",title:"\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E"},{default:t(()=>[a(u(B),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:t(()=>[a(u(i),{label:"\u662F\u5426\u5F00\u542F"},{default:t(()=>[a(u(m),{value:d.value,"onUpdate:value":e[3]||(e[3]=s=>d.value=s)},null,8,["value"])]),_:1}),d.value?(F(),f(S,{key:0},[a(u(i),{label:"\u7528\u6237\u540D"},{default:t(()=>[a(u(p),{value:r.value.username,"onUpdate:value":e[4]||(e[4]=s=>r.value.username=s),placeholder:"\u7528\u6237\u540D"},null,8,["value"])]),_:1}),a(u(i),{label:"\u5BC6\u7801"},{default:t(()=>[a(u(p),{value:r.value.password,"onUpdate:value":e[5]||(e[5]=s=>r.value.password=s),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1})],64)):h("",!0),a(u(i),null,{default:t(()=>[a(u(E),{type:"primary",onClick:w},{default:t(()=>[q]),_:1})]),_:1})]),_:1})]),_:1}),a(u(_),{title:"\u5173\u4E8E",name:"2"},{default:t(()=>[a(u(x),null,{default:t(()=>[G,H,M,Q,R]),_:1})]),_:1})]),_:1})]))}});export{W as default};
