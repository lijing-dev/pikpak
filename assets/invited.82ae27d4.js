import{C as I}from"./clipboard.fde9133c.js";import{i as p}from"./index.7ffe80cb.js";import{d as S,r,a5 as H,o as T,b as h,s as F,e,f as t,aD as $,w as u,O as j,aE as v,J as _,aF as L,y as c,A as g,aG as f,aH as M,aI as z,ae as V,S as G,R as B,aq as J,aJ as q,ah as R,a8 as K,D as O,at as U,V as C,aK as P,H as Q}from"./vendor.6d03c7d3.js";const W={class:"list-page"},X=c("\u590D\u5236"),Y=c("\u7ACB\u5373\u4E0B\u8F7D"),Z={key:0,class:"loading"},ee=c("\u52A0\u8F7D\u4E2D "),se=S({setup(te){const w=a=>{U(()=>{const s=document.createElement("button"),i=new I(s,{text:()=>a,action:()=>"copy"});i.on("success",n=>{window.$message.success("\u590D\u5236\u6210\u529F"),i.destroy()}),i.on("error",n=>{window.$message.error("\u590D\u5236\u5931\u8D25\uFF0C\u60A8\u53EF\u4EE5F12\u6253\u5F00\u63A7\u5236\u53F0\u624B\u52A8\u590D\u5236\uFF0C\u6216\u624B\u52A8\u590D\u5236\u5F39\u7A97\u8F93\u5165\u6846")}),s.click()})},m=r(),x=async()=>{p.get("https://api-drive.mypikpak.com/vip/v1/activity/inviteCode").then(a=>{var s;m.value=(s=a.data)==null?void 0:s.code})},l=r();H(()=>l.value.invited_nums<=0);const D=r({vip_rebate:"\u4F1A\u5458\u5206\u6210",invite_reward:"\u9080\u8BF7\u5956\u52B1",relation:"\u9080\u8BF7\u5173\u7CFB"}),A=async()=>{p.get("https://api-drive.mypikpak.com/vip/v1/activity/inviteInfo").then(a=>{l.value=a.data}).catch(()=>{l.value={}})},N=r([{title:"\u9080\u8BF7\u7528\u6237",key:"invited_user"},{title:"\u5956\u52B1\u7C7B\u578B",key:"reward_source",render:a=>C(P,{type:a.reward_source=="vip_rebate"?"info":"success"},{default:()=>D.value[a.reward_source]})},{title:"\u5929\u6570",key:"reward_days"},{title:"\u65F6\u95F4",key:"time",align:"right",render:a=>C(Q,{time:new Date(String(a.time)||""),format:"yyyy-MM-dd HH:MM:ss"})}]),o=r([]),d=r(!1),y=async(a,s=30)=>{let i="https://api-drive.mypikpak.com/vip/v1/activity/inviteList";a&&(i+=`?begin=${a}&limit=${s}`),d.value=!0,p.get(i).then(n=>{var k;a||(o.value=[]),o.value=o.value.concat(((k=n.data)==null?void 0:k.data)||[])}).finally(()=>{d.value=!1})},b=()=>{p.get(`https://api-drive.mypikpak.com/package/v1/apk/url/${m.value}`).then(a=>{window.open(a.data.apk_url)})},E=a=>{a.target.offsetHeight+a.target.scrollTop>=a.target.scrollHeight-30&&o.value.length<l.value.invited_nums&&!d.value&&y(o.value[o.value.length-1].time)};return T(()=>{x(),A(),y()}),(a,s)=>(h(),F("div",W,[e(t($),null,{default:u(()=>[e(t(v),{span:12},{default:u(()=>{var i;return[e(t(f),{label:"\u4F1A\u5458\u5206\u6210(\u5929/\u6B21)",value:(i=l.value)==null?void 0:i.invited_join_days},{prefix:u(()=>[e(t(_),null,{default:u(()=>[e(t(L))]),_:1})]),suffix:u(()=>{var n;return[c("/ "+g((n=l.value)==null?void 0:n.join_vip_nums),1)]}),_:1},8,["value"])]}),_:1}),e(t(v),{span:12},{default:u(()=>{var i;return[e(t(f),{label:"\u9080\u8BF7\u5956\u52B1(\u5929/\u4EBA)",value:(i=l.value)==null?void 0:i.add_days},{prefix:u(()=>[e(t(_),null,{default:u(()=>[e(t(M))]),_:1})]),suffix:u(()=>{var n;return[c("/ "+g((n=l.value)==null?void 0:n.invited_nums),1)]}),_:1},8,["value"])]}),_:1}),e(t(v),{span:12},{default:u(()=>[e(t(f),{label:"\u9080\u8BF7\u94FE\u63A5"},{prefix:u(()=>[e(t(_),null,{default:u(()=>[e(t(z))]),_:1})]),default:u(()=>[e(t(V),{inline:""},{default:u(()=>[e(t(G),{type:"text",size:"small",value:"https://toapp.mypikpak.com/activity/invited?code="+188371},null,8,["value"]),e(t(B),{size:"small",type:"primary",onClick:s[0]||(s[0]=i=>w("https://toapp.mypikpak.com/activity/invited?code="+188371))},{default:u(()=>[X]),_:1})]),_:1}),e(t(J))]),_:1})]),_:1}),e(t(v),{span:12},{default:u(()=>[e(t(f),{label:"\u4E0B\u8F7D\u63A8\u5E7F"},{prefix:u(()=>[e(t(_),null,{default:u(()=>[e(t(q))]),_:1})]),default:u(()=>[e(t(B),{size:"small",type:"primary",onClick:b},{default:u(()=>[Y]),_:1})]),_:1})]),_:1})]),_:1}),e(t(j),{style:{"max-height":"calc(100vh - 250px)"},onScroll:E},{default:u(()=>[e(t(R),{data:o.value,columns:N.value},null,8,["data","columns"]),d.value?(h(),F("div",Z,[e(t(K),{size:"small"}),ee])):O("",!0)]),_:1})]))}});export{se as default};