import{l as s,r as d,e,b as t,g as l,m as p,o as v,i as m,w as S,n as B}from"./index-gVg0D9WM.js";function _(u){return typeof u=="function"||Object.prototype.toString.call(u)==="[object Object]"&&!p(u)}const h=s({setup(){let u=d(0);const c=()=>{u.value+=1},r=[0,50],n=[{path:"/",name:"home",title:"首页"},{path:"/jsx/index",name:"jsx",title:"jsx模版"},{path:"/multilevel/level2",name:"level2",title:"路由嵌套"}];let a=d(!0);const f=()=>{a.value=!a.value};return()=>{let o;return e("div",null,[e(t("Typography"),null,{default:()=>[e(t("Space"),{wrap:!0,direction:"vertical",size:r},{default:()=>[e(t("Space"),{direction:"vertical"},{default:()=>[e(t("Title"),{level:4},{default:()=>[l("组件渲染")]}),e(t("Space"),null,{default:()=>[e(t("Button"),{type:"info"},{default:()=>[l("Info")]}),e(t("Button"),{type:"success"},{default:()=>[l("Success")]}),e(t("Button"),{type:"warning"},{default:()=>[l("Warning")]}),e(t("Button"),{type:"error"},{default:()=>[l("Error")]})]})]}),e(t("Space"),null,{default:()=>[e(t("Space"),{direction:"vertical"},{default:()=>[e(t("Title"),{level:4},{default:()=>[l("click事件绑定/值渲染")]}),e(t("Button"),{onclick:c,type:"info"},{default:()=>[l("修改的值:"),u.value]})]})]}),e(t("Space"),null,{default:()=>[e(t("Space"),{direction:"vertical"},{default:()=>[e(t("Title"),{level:4},{default:()=>[l("for循环")]}),e(t("Space"),null,{default:()=>[e(t("Breadcrumb"),null,_(o=n.map(i=>e(t("BreadcrumbItem"),{to:{name:i.name}},{default:()=>[i.title]})))?o:{default:()=>[o]})]})]})]}),e(t("Space"),null,{default:()=>[e(t("Space"),{direction:"vertical"},{default:()=>[e(t("Title"),{level:4},{default:()=>[l("if判断"),a.value]}),e(t("Space"),{direction:"vertical"},{default:()=>[a.value?e(t("Alert"),{type:"success"},{default:()=>[l("show == true 出现")]}):e(t("Alert"),{type:"error"},{default:()=>[l("show == false 出现")]}),e(t("Button"),{onclick:f,type:"info"},{default:()=>[l("show:"),a.value.toString()]})]})]})]}),e(t("Space"),{direction:"vertical"},{default:()=>[e(t("Title"),{level:4},{default:()=>[l("插槽使用")]}),e(t("Card"),null,{default:()=>[e("div",null,[l("卡片内容")])],title:()=>e(t("Title"),{level:4},{default:()=>[l("卡片标题")]})})]})]})]})])}}}),F={__name:"index",setup(u){return(c,r)=>{const n=t("Card");return v(),m(n,null,{default:S(()=>[e(B(h))]),_:1})}}};export{F as default};