(this["webpackJsonpsymo-expert-dev"]=this["webpackJsonpsymo-expert-dev"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(38),r=a.n(s),l=(a(86),a(87),a(88),a(9)),i=a(15),o=(a(89),a(71)),d=a(21),b=a(17),j=a(127),h=a(36),m=a(129),x=a(4),u=Object(h.a)(m.a)((function(e){var t=e.theme;return Object(l.a)(Object(l.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})}));function p(e){var t=e.symbol,a=e.onClick;return Object(x.jsx)(j.a,{item:!0,onClick:function(){return a(t)},children:Object(x.jsx)(u,{style:{background:"#abeaff",margin:4},children:Object(x.jsxs)("div",{className:"d-flex flex-column align-items-center",style:{width:200,height:200},children:[Object(x.jsx)("div",{style:{height:140,background:"#fafafa",width:180,justifyContent:"center",alignContent:"center",alignItems:"center",overflow:"hidden"},children:Object(x.jsx)("img",{src:t.trad_symbol,style:{width:160,height:"auto",padding:2,marginTop:5}})}),Object(x.jsxs)("div",{className:"d-flex mt-2",children:[Object(x.jsxs)("p",{style:{fontWeight:"bold"},className:"m-0",children:[t.name," "]}),Object(x.jsxs)("p",{className:"m-0",children:["(",t.acronym,")"]})]}),Object(x.jsx)("div",{className:"mt-0",children:Object(x.jsx)("p",{className:"m-0",children:t.description})})]})})})}var f=a(128),g=a(124),O={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:500,bgcolor:"background.paper",border:"2px solid #5e5e5e",boxShadow:5,p:4,borderRadius:3};function v(e){var t=e.symbol,a=e.open,n=e.handleClose;return Object(x.jsx)(g.a,{open:a,onClose:n,children:Object(x.jsx)(f.a,{sx:O,children:Object(x.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(x.jsxs)("div",{className:"d-flex flex-row",children:[Object(x.jsxs)("p",{style:{fontWeight:"bold"},className:"m-0",children:[t.name," "]}),Object(x.jsxs)("p",{className:"m-0",children:["(",t.acronym,")"]})]}),Object(x.jsxs)("div",{className:"d-flex flex-row",children:[Object(x.jsx)("div",{style:{height:140,background:"#fafafa",width:180,overflow:"hidden"},children:Object(x.jsx)("img",{src:t.trad_symbol,style:{width:160,height:"auto",padding:2,marginTop:5}})}),Object(x.jsx)("div",{style:{height:140,background:"#fafafa",width:180,overflow:"hidden"},children:Object(x.jsx)("img",{src:t.enc_symbol,style:{width:160,height:"auto",padding:2,marginTop:5}})})]}),Object(x.jsx)("div",{children:Object(x.jsx)("p",{className:"m-0",children:t.description})}),Object(x.jsx)("div",{className:"d-flex flex-column align-items-start mt-3",style:{width:"100%",background:"#f5faf9",padding:5,height:250,overflowX:"hidden",overflowY:"auto"},children:Object(x.jsx)("table",{children:Object(x.jsx)("tbody",{style:{width:300},children:t.props?t.props.map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{style:{fontWeight:"bold",color:"#5c5c5c"},children:e.name}),Object(x.jsxs)("td",{style:{fontWeight:"bold",paddingLeft:2},children:[" ",":"," "]}),Object(x.jsx)("td",{style:{paddingLeft:4},children:e.value})]})})):null})})})]})})})}var y=a(68);function w(e){var t=e.symbols,a=Object(n.useState)(void 0),s=Object(i.a)(a,2),r=s[0],l=s[1],o=c.a.useState(!1),d=Object(i.a)(o,2),h=d[0],m=d[1],u=function(){return m(!1)},g=function(e){l(e),m(!0)};return Object(x.jsxs)(f.a,{sx:{flexGrow:1},children:[function(){if(r)return Object(x.jsx)(v,{open:h,symbol:r,handleClose:u})}(),Object(x.jsx)(j.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",spacing:1,className:"m-4",children:t.length>0?t.map((function(e){return Object(x.jsx)(p,{symbol:e,onClick:g})})):Object(x.jsx)(x.Fragment,{children:Object(b.a)(Array(10)).map((function(e){return Object(x.jsx)(y.a,{count:1,height:220,width:220,direction:"ltr",style:{margin:10}})}))})})]})}function k(){return Object(x.jsx)("div",{className:"",children:"About Page"})}var N=a(0),C=a.n(N),S=a(5),T=a(69),I=a(41),E=Object(T.a)({apiKey:"AIzaSyA1zwjxoGy8Y17prH7bAsBo9IVvEeD01Z8",authDomain:"symo-expert.firebaseapp.com",projectId:"symo-expert",storageBucket:"symo-expert.appspot.com",messagingSenderId:"653997544539",appId:"1:653997544539:web:faa66386272b2031fc5b7e",measurementId:"G-HEQXW2X5E6"}),A=Object(I.c)(E);function R(e){return W.apply(this,arguments)}function W(){return(W=Object(S.a)(C.a.mark((function e(t){var a,n,c,s,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("------STARTING------"),a=Object(I.a)(A,"symbols"),n=Object(I.f)(a,Object(I.e)("name","asc"),Object(I.d)(t?300:50)),e.next=6,Object(I.b)(n);case 6:if(c=e.sent,s=c.docs.map((function(e){return e.data()})),console.log("------RESPONSE------",s.length),!t){e.next=12;break}return r=s.filter((function(e){if(e.name&&e.name.toLowerCase().trim().startsWith(t.toLowerCase()))return e})),e.abrupt("return",r);case 12:return e.abrupt("return",s);case 15:e.prev=15,e.t0=e.catch(0),console.log("**********ERROR*********",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}var L=a(125),F=a(70),G=a.p+"static/media/symo-logo.ed191bf0.png";var P=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];return 0==a.length&&R().then((function(e){c(e)})),Object(x.jsxs)("div",{className:"App",style:{background:"#f7fdff"},children:[Object(x.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light",style:{background:"#34b0d9"},children:[Object(x.jsx)("img",{src:G,style:{width:50,height:"auto",margin:1,marginRight:5}}),Object(x.jsx)("a",{class:"navbar-brand",children:"SYMO EXPERT"}),Object(x.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(x.jsx)("span",{class:"navbar-toggler-icon"})}),Object(x.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarText",children:[Object(x.jsxs)("ul",{class:"navbar-nav mr-auto",children:[Object(x.jsx)("li",{class:"nav-item active",children:Object(x.jsxs)("a",{class:"nav-link",href:"/symo-expert-dev/",children:["Symbol Guide ",Object(x.jsx)("span",{class:"sr-only",children:"(current)"})]})}),Object(x.jsx)("li",{class:"nav-item",children:Object(x.jsx)("a",{class:"nav-link",href:"/symo-expert-dev/about",children:"Caris S-57 Composer"})})]}),Object(x.jsx)(L.a,{className:"d-flex",children:Object(x.jsx)(F.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search",onChange:function(e){R(e.target.value).then((function(e){c(e)}))}})}),Object(x.jsx)("span",{class:"nav-item",children:Object(x.jsx)("a",{class:"nav-link",href:"https://www.teledynecaris.com/s-57/frames/S57catalog.htm",target:"_blank",style:{color:"black",fontWeight:"bold"},children:"S-57 ENC Object Catalogue"})})]})]}),Object(x.jsx)(o.a,{children:Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{path:"/symo-expert-dev/",exact:!0,render:function(e){return Object(x.jsx)(w,Object(l.a)(Object(l.a)({},e),{},{symbols:a}))}}),Object(x.jsx)(d.a,{path:"/symo-expert-dev/about",exact:!0,component:k})]})})]})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,130)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(P,{})}),document.getElementById("root")),B()},88:function(e,t,a){},89:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.75bf7ff8.chunk.js.map