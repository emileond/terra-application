(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1317:function(e,t,a){"use strict";a.r(t),t.default={"clinical-lowlight-theme":"Toolbar-module__clinical-lowlight-theme___228_R","orion-fusion-theme":"Toolbar-module__orion-fusion-theme___3G3Io",toolbar:"Toolbar-module__toolbar___3HKSj",item:"Toolbar-module__item___79I5c","start-align":"Toolbar-module__start-align___2kTnS","end-align":"Toolbar-module__end-align___1qrZo","center-align":"Toolbar-module__center-align___2ht66"}},1318:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),u=r(a(19));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l=function(e){var t=i({},e);return n.default.createElement(u.default,t,n.default.createElement("path",{d:"M32 8v29a8 8 0 01-16 0V8a5 5 0 0110 0v29a2 2 0 01-4 0V15h-3v22a5 5 0 0010 0V8a8 8 0 00-16 0v29a11 11 0 0022 0V8z"}))};l.displayName="IconAttachment",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var o=l;t.default=o},1319:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useActiveMainPage",{enumerable:!0,get:function(){return u.default}});var u=n(a(1320))},1320:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a(0)),r=n(a(907)),i=function(){return u.default.useContext(r.default)};t.default=i},1321:function(e,t,a){"use strict";a.r(t),t.default={"content-container":"TestStyles-module__content-container___20AAY"}},909:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a(0)),r=n(a(1)),i=n(a(149)),l=n(a(302)),o={bannerAction:r.default.shape({text:r.default.string,onClick:r.default.func}),description:r.default.node,onRequestClose:r.default.func,variant:r.default.oneOf(["hazard-high","hazard-medium","hazard-low","error","unsatisfied","unverified","custom"]).isRequired,custom:r.default.shape({signalWord:r.default.string,iconClassName:r.default.string})},s=function(e){var t=e.bannerAction,a=e.custom,n=e.description,r=e.onRequestClose,o=e.variant,s=u.default.useContext(l.default),c=u.default.useRef((0,i.default)());return u.default.useEffect((function(){if(!s)throw new Error("A NotificationBanner was not rendered within the context of a NotificationBannerProvider. If this is unexpected, validate that the expected version of the terra-application package is installed.");s.registerNotificationBanner(c.current,{bannerAction:t,custom:a,description:n,key:c.current,onRequestClose:r,variant:o})}),[s,n,a,t,r,o]),u.default.useEffect((function(){return function(){s.unregisterNotificationBanner(c.current,o)}}),[s,o]),null};s.propTypes=o;var c=s;t.default=c},944:function(e,t,a){"use strict";var n=a(4),u=a(10);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(54)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!=typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=r?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a(0)),l=n(a(1)),o=n(a(3)),s=a(1319),c=n(a(909)),d=n(a(1321));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}var v=o.default.bind(d.default),m={initialCount:l.default.number,title:l.default.string,onShowActivityOverlay:l.default.func,onShowStatusOverlay:l.default.func},p=function(e){var t=e.initialCount,a=void 0===t?0:t,n=e.title,u=void 0===n?"":n,l=e.onShowActivityOverlay,o=e.onShowStatusOverlay,d=(0,s.useActiveMainPage)(),f=(0,i.useState)(a),m=(0,r.default)(f,2),p=m[0],y=m[1],b=(0,i.useState)(!1),g=(0,r.default)(b,2),h=g[0],O=g[1],_=(0,i.useState)(!1),E=(0,r.default)(_,2),w=E[0],S=E[1],C=(0,i.useState)(!1),k=(0,r.default)(C,2),q=k[0],P=k[1];return i.default.createElement("div",{className:v("content-container")},i.default.createElement("button",{type:"button",onClick:function(){return y(p+1)}},"Increment Counter"),i.default.createElement("button",{type:"button","data-testid":"test-workspace-banner-button",onClick:function(){return O(!0)}},"Show Alert Banner"),i.default.createElement("button",{type:"button","data-testid":"test-workspace-banner-warning-button",onClick:function(){return S(!0)}},"Show Warning Banner"),i.default.createElement("button",{type:"button","data-testid":"test-workspace-banner-error-button",onClick:function(){return P(!0)}},"Show Error Banner"),i.default.createElement("button",{type:"button",onClick:function(){l(!0),setTimeout((function(){l(!1)}),5e3)}},"Show Activity Overlay"),i.default.createElement("button",{type:"button",onClick:function(){o(!0),setTimeout((function(){o(!1)}),5e3)}},"Show Status Overlay"),h&&i.default.createElement(c.default,{variant:"hazard-high",id:"workspace-test-alert-banner",description:"There is something very wrong",onRequestClose:function(){return O(!1)}}),w&&i.default.createElement(c.default,{variant:"hazard-medium",id:"workspace-test-warning-banner",description:"There is something kind of wrong",onRequestClose:function(){return S(!1)}}),q&&i.default.createElement(c.default,{variant:"error",id:"workspace-test-error-banner",description:"Something broke",onRequestClose:function(){return P(!1)},bannerAction:{text:"Help",onClick:function(){}}}),i.default.createElement("div",{"aria-live":"polite"},i.default.createElement("p",null,"".concat(u,"'s Click Counter: ").concat(p))),i.default.createElement("p",null,"Active Main Page Key:"," ",null==d?void 0:d.pageKey),i.default.createElement("p",null,"Active Main Page Label:"," ",null==d?void 0:d.pageLabel),i.default.createElement("p",null,"Active Main Page MetaData:"," ","".concat(JSON.stringify(null==d?void 0:d.pageMetaData))),i.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacus cursus massa ullamcorper scelerisque. Aenean vitae posuere neque, consequat dapibus diam. Proin convallis venenatis magna, sit amet volutpat erat. Nulla sodales eu est sit amet sagittis. Suspendisse lacinia diam ut justo venenatis, a sollicitudin ante venenatis. Vivamus a leo ullamcorper, tristique diam id, vestibulum felis. Nullam mattis eget eros vestibulum porttitor. Duis eget massa nec urna ultrices laoreet. Aenean rhoncus mauris in luctus blandit. Morbi tempor enim a libero placerat, at bibendum elit luctus. In in tempor neque, laoreet facilisis quam. Fusce faucibus dui eget erat gravida egestas. Nullam laoreet purus eget urna placerat, sit amet ultrices mi tristique. Sed vulputate gravida risus, vehicula rhoncus ipsum tempus id. Phasellus aliquet nec mi non pretium. Maecenas turpis nulla, mollis et rhoncus vel, porttitor id nisl."),i.default.createElement("p",null,"In vitae tortor elementum, venenatis sem id, condimentum mauris. Mauris eget eros auctor, ultrices lacus imperdiet, aliquet lorem. Nulla facilisi. Sed libero odio, tincidunt eget congue sed, ornare at nulla. In feugiat, felis a mattis viverra, quam massa rhoncus tortor, sit amet luctus augue dolor bibendum metus. Aliquam eget malesuada est. Aenean at mi ut augue placerat vulputate. Quisque vulputate iaculis semper. Ut vestibulum interdum quam, a facilisis purus dapibus sit amet. Curabitur tempus neque at tortor ultricies mollis. Aliquam commodo pulvinar lectus, sollicitudin tincidunt nulla finibus non."),i.default.createElement("p",null,"Donec ornare nisi ut lectus luctus, vitae venenatis tellus molestie. Quisque augue ante, pulvinar eget ullamcorper eget, pharetra in est. Aenean urna turpis, lobortis in egestas eu, blandit eget sapien. Suspendisse vitae iaculis justo. Sed ex turpis, ultrices ut lobortis a, vestibulum a tortor. Nullam ut risus ex. Duis condimentum dui sem, interdum porttitor lectus scelerisque nec. Curabitur suscipit felis in porta molestie."),i.default.createElement("p",null,"Etiam non malesuada urna. Vivamus posuere orci augue, nec egestas mauris cursus blandit. Maecenas eu nisl sed nulla venenatis tincidunt. Donec at cursus sapien, nec scelerisque nibh. Vivamus suscipit consequat ex, id feugiat nisl iaculis id. Pellentesque tristique sodales turpis. Cras rutrum nibh laoreet libero dictum, quis condimentum arcu porttitor. Donec ac aliquam orci. Vestibulum luctus sed mi tincidunt volutpat. Mauris ut neque pellentesque, volutpat ex vel, efficitur massa. Phasellus hendrerit mattis semper. Morbi mi nulla, tincidunt at auctor euismod, viverra at libero."),i.default.createElement("p",null,"Maecenas aliquam congue augue sed tristique. Vivamus eu consectetur sapien, in eleifend magna. Etiam laoreet ligula eu fermentum tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed magna nunc, tempor vitae sagittis eu, vulputate ac lorem. Etiam massa ante, aliquam ac consequat et, efficitur dictum turpis. Integer malesuada purus in lobortis ornare. In hac habitasse platea dictumst. Aliquam finibus ipsum quis nibh volutpat, a posuere mi vestibulum. Cras tincidunt odio et aliquet mollis. Ut ac felis neque. Integer nulla elit, mattis eleifend dui pretium, euismod tristique nulla. Curabitur vulputate viverra odio, vitae blandit est dapibus eu."))};p.propTypes=m;var y=p;t.default=y},985:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a(54)),r=n(a(0)),i=n(a(986)),l=n(a(47)),o=n(a(987)),s=n(a(988)),c=n(a(1318)),d=a(904),f=n(a(944)),v=function(){var e=r.default.useState(),t=(0,u.default)(e,2),a=t[0],n=t[1],v=r.default.useState(),m=(0,u.default)(v,2),p=m[0],y=m[1];return r.default.createElement(d.WorkspaceContent,{toolbar:r.default.createElement(i.default,null,r.default.createElement(l.default,{text:"Edit",variant:"utility",icon:r.default.createElement(o.default,null)}),r.default.createElement(l.default,{text:"Add",variant:"utility",icon:r.default.createElement(s.default,null)}),r.default.createElement(l.default,{text:"Attachment",variant:"utility",icon:r.default.createElement(c.default,null)})),activityOverlay:a?r.default.createElement(d.WorkspaceContentActivityOverlay,{variant:"loading"}):void 0,statusOverlay:p?r.default.createElement(d.WorkspaceContentStatusOverlay,{variant:"not-authorized"}):void 0},r.default.createElement(f.default,{title:"Tab 1",onShowActivityOverlay:n,onShowStatusOverlay:y}))};v.titleKey="derp";var m=v;t.default=m},986:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(0)),u=c(a(1)),r=c(a(8)),i=c(a(3)),l=c(a(5)),o=c(a(1317)),s=["align","children"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,u=function(e,t){if(null==e)return{};var a,n,u={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(u[a]=e[a]);return u}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(u[a]=e[a])}return u}var v=i.default.bind(o.default),m={align:u.default.oneOf(["start","end","center"]),children:u.default.node},p=function(e){var t=e.align,a=e.children,u=f(e,s),i=n.default.useContext(l.default),o=(0,r.default)(v("toolbar","".concat(t,"-align"),i.className),u.className),c=n.default.Children.map(a,(function(e){return e?n.default.createElement("div",{className:v("item")},e):e}));return n.default.createElement("div",d({},u,{className:o}),c)};p.propTypes=m,p.defaultProps={align:"start"};var y=p;t.default=y},987:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),u=r(a(19));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l=function(e){var t=i({},e);return n.default.createElement(u.default,t,n.default.createElement("path",{d:"M.1 48l5.7-12.8 7.1 7.1zm44.8-37.6l2.5-2.5a2.05 2.05 0 000-2.9L43 .6a2.05 2.05 0 00-2.9 0l-2.5 2.5zm-9.4-5.2L7.6 33.1l7.3 7.3 27.9-27.9z"}))};l.displayName="IconEdit",l.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var o=l;t.default=o},988:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),u=r(a(19));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l=function(e){var t=i({},e);return n.default.createElement(u.default,t,n.default.createElement("path",{d:"M48 21H27V0h-6v21H0v6h21v21h6V27h21z"}))};l.displayName="IconAdd",l.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var o=l;t.default=o},989:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a(54)),r=n(a(0)),i=a(904),l=n(a(944)),o=function(){var e=r.default.useState(),t=(0,u.default)(e,2),a=t[0],n=t[1],o=r.default.useState(),s=(0,u.default)(o,2),c=s[0],d=s[1];return r.default.createElement(i.WorkspaceContent,{activityOverlay:a?r.default.createElement(i.WorkspaceContentActivityOverlay,{variant:"loading"}):void 0,statusOverlay:c?r.default.createElement(i.WorkspaceContentStatusOverlay,{variant:"not-authorized"}):void 0},r.default.createElement(l.default,{title:"Tab 2",onShowActivityOverlay:n,onShowStatusOverlay:d}))};o.titleKey="derp";var s=o;t.default=s},990:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a(54)),r=n(a(0)),i=n(a(986)),l=n(a(47)),o=n(a(987)),s=n(a(988)),c=a(904),d=n(a(944)),f=function(){var e=r.default.useState(),t=(0,u.default)(e,2),a=t[0],n=t[1],f=r.default.useState(),v=(0,u.default)(f,2),m=v[0],p=v[1];return r.default.createElement(c.WorkspaceContent,{toolbar:r.default.createElement(i.default,null,r.default.createElement(l.default,{text:"Edit",variant:"utility",icon:r.default.createElement(o.default,null)}),r.default.createElement(l.default,{text:"Add",variant:"utility",icon:r.default.createElement(s.default,null)})),activityOverlay:a?r.default.createElement(c.WorkspaceContentActivityOverlay,{variant:"loading"}):void 0,statusOverlay:m?r.default.createElement(c.WorkspaceContentStatusOverlay,{variant:"not-authorized"}):void 0},r.default.createElement(d.default,{title:"Tab 3",onShowActivityOverlay:n,onShowStatusOverlay:p}))};f.titleKey="derp";var v=f;t.default=v},991:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a(0)),r=a(904),i=function(){return u.default.createElement(r.WorkspaceContent,{statusOverlay:u.default.createElement(r.WorkspaceContentStatusOverlay,{variant:"no-data",message:"This is a message."},u.default.createElement(r.WorkspaceContentStatusOverlayButton,{text:"Action 1"}),u.default.createElement(r.WorkspaceContentStatusOverlayButton,{text:"Action 2"}))})};i.titleKey="derp";var l=i;t.default=l},992:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a(54)),r=n(a(0)),i=a(904),l=function(){var e=r.default.useState(),t=(0,u.default)(e,2),a=t[0],n=t[1];return r.default.createElement(i.WorkspaceContent,{activityOverlay:a?r.default.createElement(i.WorkspaceContentActivityOverlay,{variant:"loading"}):void 0,statusOverlay:r.default.createElement(i.WorkspaceContentStatusOverlay,{variant:"error",message:"This is an error message."},r.default.createElement(i.WorkspaceContentStatusOverlayButton,{text:"Retry",onClick:function(){n(!0),setTimeout((function(){n(!1)}),5e3)}}))})};l.titleKey="derp";var o=l;t.default=o},993:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a(0)),r=a(904),i=function(){return u.default.createElement(r.WorkspaceContent,{activityOverlay:u.default.createElement(r.WorkspaceContentActivityOverlay,{variant:"loading"}),label:"Tab 6 with Jam and Bread"})};i.titleKey="derp";var l=i;t.default=l}}]);