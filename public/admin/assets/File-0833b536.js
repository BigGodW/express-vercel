import{r as a,o as c,c as u,a as l,w as k,v as w,e as _,F as b}from"./index-b6dd3ef9.js";import{A as n}from"./av-83dba66f.js";n.init({appId:"msSlJB9iYabqoLXphS4uXZhb-gzGzoHsz",appKey:"rpJi7d91xiL0AkcSoeRz8Dv7",serverURL:"https://mssljb9i.lc-cn-n1-shared.com"});const F=l("h1",null,"文件上传",-1),y=["src"],U={__name:"File",setup(C){const r=a(null),o=a(null);a({});const s=a(""),i=a("");function p(e){const t=e.target.files[0];o.value=new n.File(t.name,t),console.log(o)}function m(){o.value.save().then(e=>{console.log(e.toJSON()),e.value=e})}async function v(){o.value=await new n.Query("_File").get(s.value),i.value=o.value.get("url")}function f(){const e=new n.File.withURL("test",i.value);console.log(e.toJSON()),i.value=e.thumbnailURL(100,200)}function g(){const e=n.File.createWithoutData(s.value);console.log(e.toJSON()),e.destroy()}function d(){new n.File.withURL("kuaishou.png","https://w2.eckwai.com/udata/pkg/ks-merchant/kwaishop-seller-login/banner.png").save().then(t=>{console.log(t)})}return(e,t)=>(c(),u(b,null,[F,l("div",null,[l("input",{type:"file",name:"",id:"",onChange:p,ref_key:"fileEl",ref:r},null,544),l("button",{onClick:m},"上传"),k(l("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=h=>s.value=h)},null,512),[[w,s.value]]),l("button",{onClick:v},"获取图片"),l("button",{onClick:f},"获取缩略图"),l("button",{onClick:g},"删除"),l("div",null,[i.value?(c(),u("img",{key:0,src:i.value,alt:""},null,8,y)):_("",!0)]),l("div",null,[l("button",{onClick:d},"click")])])],64))}};export{U as default};
