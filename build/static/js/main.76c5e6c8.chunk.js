(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(n,t,e){},79:function(n,t,e){"use strict";e.r(t);var c=e(6),i=e(0),r=e.n(i),o=e(37),s=e.n(o),a=(e(47),e(12)),u=e(38),j=e.n(u),b=e(10),f=e(11);function g(){var n=Object(b.a)(["\n  width: 100%;\n  height: 100vh;\n  background-color: black;\n  color: yellowgreen;\n"]);return g=function(){return n},n}var l=f.a.div(g());function d(){var n=Object(b.a)(["\n  width: 25%;\n  height: 25%;\n  border: 1px solid yellowgreen;\n"]);return d=function(){return n},n}function h(){var n=Object(b.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n"]);return h=function(){return n},n}var O,v=f.a.div(h()),w=f.a.form(d()),S=function(n){n.signin,n.setSigninPassword,n.setSigninUsername;return Object(c.jsx)(v,{children:Object(c.jsx)(w,{})})},p=function(){var n=Object(i.useState)(""),t=Object(a.a)(n,2),e=t[0],r=t[1],o=Object(i.useState)(""),s=Object(a.a)(o,2),u=s[0],b=s[1],f=Object(i.useState)(!1),g=Object(a.a)(f,2),d=(g[0],g[1]),h=Object(i.useState)(!1),v=Object(a.a)(h,2),w=v[0],p=v[1];Object(i.useEffect)((function(){(O=j()()).on("connect",(function(){console.log("User connected to io")}))}));return Object(c.jsx)(l,{children:!w&&Object(c.jsx)(S,{signin:function(n){n.preventDefault();var t={signinUsername:e,signinPassword:u};O.emit("signin",t,(function(n){200===n.status?p(!0):d(!0)}))},setSigninPassword:b,setSigninUsername:r})})},x=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,80)).then((function(t){var e=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;e(n),c(n),i(n),r(n),o(n)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),x()}},[[79,1,2]]]);
//# sourceMappingURL=main.76c5e6c8.chunk.js.map