(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1069:function(t,e,n){"use strict";var a=n(4),u=n(32);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n(55)),o=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==u(t)&&"function"!=typeof t)return{default:t};var n=i(e);if(n&&n.has(t))return n.get(t);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var l=r?Object.getOwnPropertyDescriptor(t,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=t[o]}a.default=t,n&&n.set(t,a);return a}(n(0)),l=a(n(299)),f=a(n(300));function i(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(i=function(t){return t?n:e})(t)}var c=function(){var t=(0,o.useState)("error"),e=(0,r.default)(t,2),n=e[0],a=e[1],u=(0,o.useState)("no-data"),i=(0,r.default)(u,2),c=i[0],d=i[1],s=(0,o.useState)("not-authorized"),p=(0,r.default)(s,2),b=p[0],w=p[1],v=(0,o.useState)(!1),y=(0,r.default)(v,2),m=y[0],h=y[1];return o.default.createElement(o.default.Fragment,null,o.default.createElement("button",{id:"show-status",type:"button",onClick:function(){h(!0)}},"Show Status Views"),o.default.createElement("button",{id:"button1",type:"button",onClick:function(){a("no-data")}},"Change Status View 1"),o.default.createElement("button",{id:"button2",type:"button",onClick:function(){d("no-matching-results")}},"Change Status View 1"),o.default.createElement("button",{id:"button3",type:"button",onClick:function(){w("error")}},"Change Status View 1"),o.default.createElement(f.default,null,m&&o.default.createElement(l.default,{variant:n}),m&&o.default.createElement(l.default,{variant:c}),m&&o.default.createElement(l.default,{variant:b})))};e.default=c}}]);