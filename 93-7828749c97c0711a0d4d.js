(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1077:function(e,t,a){"use strict";var r=a(4),l=a(10);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(54)),u=r(a(0)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=b(t);if(a&&a.has(e))return a.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var f=n?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(r,u,f):r[u]=e[u]}r.default=e,a&&a.set(e,r);return r}(a(903)),i=r(a(922)),d=r(a(936)),c=r(a(940)),o=r(a(941)),s=r(a(942)),m=r(a(943)),p=r(a(944));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(b=function(e){return e?a:t})(e)}var y={small:"320px",medium:"500px",large:"1000px"},v=function(){var e=u.default.useState("tab-1"),t=(0,n.default)(e,2),a=t[0],r=t[1],l=u.default.useState("large"),b=(0,n.default)(l,2),v=b[0],g=b[1],E=u.default.useRef({pageKey:"page-1",pageLabel:"Test Page",pageMetaData:{data:"data here"}});return u.default.createElement(i.default.Provider,{value:E.current},u.default.createElement("div",{style:{height:"100%",width:y[v]}},u.default.createElement(f.default,{id:"overlay-test-id",dismissButtonIsVisible:!0,isPresentedAsOverlay:!0,activeItemKey:a,onRequestActivate:function(e){return r(e)},activeSize:v,sizeOptions:[{key:"small",text:"Small"},{key:"medium",text:"Medium"},{key:"large",text:"Large"}],onRequestSizeChange:function(e){g(e)},onRequestDismiss:function(){console.log("onRequestClose")}},u.default.createElement(f.WorkspaceItem,{itemKey:"tab-1",label:"Tab 1",render:function(){return u.default.createElement(d.default,null)}}),u.default.createElement(f.WorkspaceItem,{itemKey:"tab-2",label:"Tab 2",render:function(){return u.default.createElement(c.default,null)}}),u.default.createElement(f.WorkspaceItem,{itemKey:"tab-3",label:"Tab 3",render:function(){return u.default.createElement(o.default,null)}}),u.default.createElement(f.WorkspaceItem,{itemKey:"tab-4",label:"Tab 4",render:function(){return u.default.createElement(s.default,null)}}),u.default.createElement(f.WorkspaceItem,{itemKey:"tab-5",label:"Tab 5",render:function(){return u.default.createElement(m.default,null)}}),u.default.createElement(f.WorkspaceItem,{itemKey:"tab-6",label:"Tab 6",render:function(){return u.default.createElement(p.default,null)}}))))};t.default=v}}]);