(this["webpackJsonpmy-profile"]=this["webpackJsonpmy-profile"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),i=c(6),r=c.n(i),l=c(2),o=(c(13),[{title:"Home",url:"#",cName:"nav-links"},{title:"About me",url:"#",cName:"nav-links"},{title:"Education",url:"#",cName:"nav-links"},{title:"Experiences",url:"#",cName:"nav-links"},{title:"Hobbies",url:"#",cName:"nav-links"},{title:"Recommendations",url:"#recommendations",cName:"nav-links"}]),d=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(!1),r=Object(l.a)(i,2),d=r[0],j=r[1],u=function(){var e=document.scrollingElement.scrollTop;s(!(e>100))},m=function(){document.scrollingElement.scrollTop>0&&j(!1)},b=function(e){"A"===e.target.tagName&&j(!1)},O=function(){j(!1)};return Object(a.useEffect)((function(){return document.addEventListener("click",O),document.addEventListener("scroll",u),document.addEventListener("scroll",m),document.querySelector(".navbar-items").addEventListener("click",b),function(){document.removeEventListener("click",O),document.removeEventListener("scroll",u),document.removeEventListener("scroll",m),document.querySelector(".navbar-items").removeEventListener("click",b)}}),[]),Object(a.useEffect)((function(){!0===d?document.querySelector("nav").classList.add("active-menu"):document.querySelector("nav").classList.remove("active-menu")}),[d]),Object(n.jsxs)("nav",{className:c?"scrolled-top navbar-items":"navbar-items",onClick:function(e){return e.stopPropagation()},children:[Object(n.jsx)("h1",{className:"navbar-logo",children:Object(n.jsx)("a",{href:"#home",children:"Bruce Apos"})}),Object(n.jsx)("div",{className:"menu-icon",onClick:function(){return j(!d)},children:Object(n.jsx)("i",{className:d?"fas fa-times":"fas fa-bars"})}),Object(n.jsx)("ul",{className:d?"nav-menu active":"nav-menu",children:o.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:e.url,className:e.cName,children:e.title})},t)}))})]})},j=function(){return Object(n.jsx)("div",{id:"home",className:"hero-section",children:Object(n.jsxs)("div",{className:"animated-title",children:[Object(n.jsx)("div",{className:"text-top",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:"Hi!"}),Object(n.jsx)("span",{className:"my-name",children:"I'm Bruce."})]})}),Object(n.jsx)("div",{className:"text-bottom",children:Object(n.jsx)("div",{})})]})})},u=function(e){var t=e.setDarkMode;return Object(n.jsxs)("div",{className:"theme-switch-wrapper",children:[Object(n.jsx)("em",{id:"dm",children:"Dark Mode!"}),Object(n.jsxs)("label",{className:"theme-switch",htmlFor:"checkbox",children:[Object(n.jsx)("input",{onChange:function(e){e.target.checked?t(!0):t(!1)},type:"checkbox",id:"checkbox"}),Object(n.jsx)("div",{className:"slider round"})]})]})},m=c(7),b=function(e){var t=e.alert;return Object(n.jsx)("div",{className:"alert-container",children:Object(n.jsx)("div",{className:"alert",children:Object(n.jsx)("p",{children:t.message})})})},O=function(e){var t=e.dispatch,c=e.name$,s=e.setName$,i=e.pos$,r=e.setPos$,o=e.text$,d=e.setText$,j=e.enableEdit,u=e.setEnableEdit,m=e.id,b=e.alertDispatch,O=Object(a.useState)(!0),h=Object(l.a)(O,2),x=h[0],f=h[1],p=function(e){"Escape"===e.key&&(u(!1),f(!0))};return Object(a.useEffect)((function(){return!0===j&&document.addEventListener("keydown",p),function(){document.removeEventListener("keydown",p)}}),[j]),Object(n.jsx)("div",{className:j?"edit-form disp":"edit-form",children:Object(n.jsx)("div",{className:"form-main",children:Object(n.jsx)("div",{className:"form-div",children:Object(n.jsxs)("form",{className:"form",onSubmit:function(e){if(e.preventDefault(),""===c||""===i||""===o)f(!1);else{var n="(Edited) "+(new Date).toLocaleTimeString([],{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"});t({type:"delete-entry",payload:{id:m}}),t({type:"add-entry",payload:{name:c,pos:i,text:o,date:n}}),b({type:"save-edit"}),u(!1),f(!0)}},children:[Object(n.jsx)("p",{className:x?"hide-alert":"show-alert",children:"Please fill-in all fields."}),Object(n.jsx)("i",{className:"close fas fa-times",onClick:function(){u(!1),f(!0)}}),Object(n.jsx)("div",{className:"name",children:Object(n.jsx)("input",{id:"edit-name",type:"text",className:"feedback-input",placeholder:"Name",value:c,onChange:function(e){return s(e.target.value)}})}),Object(n.jsx)("div",{className:"position",children:Object(n.jsx)("input",{type:"text",className:"feedback-input",placeholder:"Position",value:i,onChange:function(e){return r(e.target.value)}})}),Object(n.jsx)("div",{className:"text",children:Object(n.jsx)("textarea",{className:"feedback-input",placeholder:"Add a recommendation",value:o,onChange:function(e){return d(e.target.value)}})}),Object(n.jsx)("div",{className:"submit",children:Object(n.jsx)("input",{type:"submit",value:"Save",className:"post-btn"})})]})})})})},h=function(e){var t=e.dispatch,c=e.name,a=e.setName,s=e.pos,i=e.setPos,r=e.text,l=e.setText,o=e.enableEdit,d=e.alertDispatch;return Object(n.jsx)("div",{className:"form-main",children:Object(n.jsx)("div",{className:"form-div",children:Object(n.jsxs)("form",{className:"form",onSubmit:function(e){if(e.preventDefault(),""===c||""===s||""===r)d({type:"invalid-input"});else{var n=(new Date).toLocaleTimeString([],{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"});t({type:"add-entry",payload:{name:c,pos:s,text:r,date:n}}),d({type:"new-entry"}),a(""),i(""),l("")}},children:[Object(n.jsx)("div",{className:"name",children:Object(n.jsx)("input",{type:"text",className:"feedback-input",placeholder:"Name",value:o?"":c,onChange:function(e){return a(e.target.value)}})}),Object(n.jsx)("div",{className:"position",children:Object(n.jsx)("input",{type:"text",className:"feedback-input",placeholder:"Position",value:o?"":s,onChange:function(e){return i(e.target.value)}})}),Object(n.jsx)("div",{className:"text",children:Object(n.jsx)("textarea",{className:"feedback-input",placeholder:"Add a recommendation",value:o?"":r,onChange:function(e){return l(e.target.value)}})}),Object(n.jsx)("div",{className:"submit",children:Object(n.jsx)("input",{type:"submit",value:"Post",className:"post-btn"})})]})})})},x=function(e){var t=e.id,c=e.name,a=e.pos,s=e.text,i=e.date,r=e.dispatch,l=e.darkMode,o=e.alertDispatch,d=function(e){e.target.parentElement.parentElement.style="background-color: ".concat(l?"#222":"#eee")},j=function(e){e.target.parentElement.parentElement.style="background-color: inherit"};return Object(n.jsxs)("div",{className:"entry",children:[Object(n.jsx)("h4",{id:"name",children:c}),Object(n.jsx)("p",{id:"pos",children:a}),Object(n.jsx)("p",{id:"text",children:s}),Object(n.jsxs)("section",{className:"mod",children:[Object(n.jsx)("i",{className:"fas fa-edit",title:"Edit",onClick:function(){return r({type:"edit-entry",payload:{id:t}})},onMouseOver:d,onMouseLeave:j}),Object(n.jsx)("i",{className:"fas fa-times",title:"Delete",onClick:function(){r({type:"delete-entry",payload:{id:t}}),o({type:"delete-entry"})},onMouseOver:d,onMouseLeave:j})]}),Object(n.jsx)("p",{id:"date",children:i})]})},f=function(e){var t=e.entries,c=e.dispatch,a=e.darkMode,s=e.alertDispatch;return Object(n.jsx)("div",{className:"reco-list",children:Object(n.jsx)("ul",{children:t.map((function(e){return Object(n.jsx)(x,{id:e.id,name:e.name,pos:e.pos,text:e.text,date:e.date,dispatch:c,darkMode:a,alertDispatch:s},e.id)}))})})},p=function(e){var t=e.darkMode,c=Object(a.useState)(""),s=Object(l.a)(c,2),i=s[0],r=s[1],o=Object(a.useState)(""),d=Object(l.a)(o,2),j=d[0],u=d[1],x=Object(a.useState)(""),p=Object(l.a)(x,2),v=p[0],y=p[1],N=Object(a.useState)(""),g=Object(l.a)(N,2),k=g[0],E=g[1],S=Object(a.useState)(""),D=Object(l.a)(S,2),L=D[0],w=D[1],C=Object(a.useState)(""),M=Object(l.a)(C,2),P=M[0],T=M[1],$=Object(a.useState)(!1),q=Object(l.a)($,2),A=q[0],I=q[1],F=Object(a.useState)(null),R=Object(l.a)(F,2),B=R[0],J=R[1],H=Object(a.useState)([]),z=Object(l.a)(H,2),G=z[0],K=z[1],Q=function(e,t,c,n){return{id:Date.now(),name:e,pos:t,text:c,date:n}},U=Object(a.useReducer)((function(e,t){switch(t.type){case"add-entry":return[].concat(Object(m.a)(e),[Q(t.payload.name,t.payload.pos,t.payload.text,t.payload.date)]);case"delete-entry":return e.filter((function(e){return e.id!==t.payload.id}));case"edit-entry":var c=e.filter((function(e){return e.id===t.payload.id}))[0];return J(c.id),E(c.name),w(c.pos),T(c.text),I(!0),e;case"retrieve-localStorage":return G;default:return e}}),[]),V=Object(l.a)(U,2),W=V[0],X=V[1],Y=Object(a.useReducer)((function(e,t){switch(t.type){case"new-entry":return{type:"new",message:"Recommendation posted."};case"delete-entry":return{type:"del",message:"Recommendation deleted."};case"save-edit":return{type:"save",message:"Changes saved."};case"invalid-input":return{type:"invalid",message:"Please fill-in all fields."};default:return e}}),{type:"",message:""}),Z=Object(l.a)(Y,2),_=Z[0],ee=Z[1];return Object(a.useEffect)((function(){!0===A&&document.querySelector("#edit-name").focus()}),[A]),Object(a.useEffect)((function(){var e;return""===_.type?document.querySelector(".alert-container").style="visibility: hidden":(document.querySelector(".alert-container").style="visibility: visible",e=setTimeout((function(){return document.querySelector(".alert-container").style="visibility: hidden; transition: visibility 0s linear 300ms, opacity 0.2s; opacity: 0"}),2500)),function(){return clearTimeout(e)}}),[_]),Object(a.useEffect)((function(){null===localStorage.getItem("entries")?(console.log("true"),localStorage.setItem("entries",JSON.stringify([]))):(K(JSON.parse(localStorage.getItem("entries"))),X({type:"retrieve-localStorage"}))}),[]),Object(a.useEffect)((function(){localStorage.setItem("entries",JSON.stringify(W))}),[W]),Object(n.jsxs)("div",{className:"container",id:"recommendations",children:[Object(n.jsx)("h3",{children:"Recommendations"}),Object(n.jsx)(b,{alert:_}),Object(n.jsx)(h,{dispatch:X,name:i,setName:r,pos:j,setPos:u,text:v,setText:y,enableEdit:A,alertDispatch:ee}),Object(n.jsx)(f,{entries:W,dispatch:X,darkMode:t,alertDispatch:ee}),Object(n.jsx)(O,{dispatch:X,name$:k,setName$:E,pos$:L,setPos$:w,text$:P,setText$:T,enableEdit:A,setEnableEdit:I,id:B,alertDispatch:ee})]})},v=function(){return Object(n.jsxs)("footer",{id:"footer",className:"footer container",children:[Object(n.jsx)("p",{children:"Find me on:"}),Object(n.jsxs)("ul",{className:"socmed",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:Object(n.jsx)("i",{className:"fab fa-facebook-square"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:Object(n.jsx)("i",{className:"fab fa-twitter"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:Object(n.jsx)("i",{className:"fab fa-instagram"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:Object(n.jsx)("i",{className:"fab fa-linkedin"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:Object(n.jsx)("i",{className:"fab fa-github"})})})]}),Object(n.jsxs)("p",{children:["\xa9"," 2020 Bruce Apos"]})]})},y=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("h3",{children:"About Me"})})},N=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("h3",{children:"Education"})})},g=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("h3",{children:"Experiences"})})},k=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("h3",{children:"Hobbies"})})};var E=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(n.jsxs)("div",{className:c?"dark-mode":"",children:[Object(n.jsx)(d,{}),Object(n.jsx)(u,{setDarkMode:s}),Object(n.jsx)(j,{}),Object(n.jsx)(y,{}),Object(n.jsx)("hr",{}),Object(n.jsx)(N,{}),Object(n.jsx)("hr",{}),Object(n.jsx)(g,{}),Object(n.jsx)("hr",{}),Object(n.jsx)(k,{}),Object(n.jsx)("hr",{}),Object(n.jsx)(p,{darkMode:c}),Object(n.jsx)(v,{})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root")),S()}},[[14,1,2]]]);
//# sourceMappingURL=main.f0fefa92.chunk.js.map