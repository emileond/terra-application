(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1025:function(e,t,n){"use strict";var a=n(4),r=n(10);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(54)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=i?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(0)),u=a(n(1)),d=a(n(911));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}var f=function(e){var t=e.id,n=(0,o.useState)(!1),a=(0,i.default)(n,2),r=a[0],u=a[1],l=(0,o.useState)(!1),f=(0,i.default)(l,2),c=f[0],s=f[1],p=(0,o.useState)(!0),h=(0,i.default)(p,2),v=h[0],b=h[1],m=(0,o.useState)(!1),w=(0,i.default)(m,2),g=w[0],E=w[1],y=(0,o.useState)(!1),k=(0,i.default)(y,2),C=k[0],O=k[1];return(0,o.useEffect)((function(){setTimeout((function(){u(!0)}),1e4)}),[]),(0,o.useEffect)((function(){setTimeout((function(){s(!0)}),3e4)}),[]),(0,o.useEffect)((function(){setTimeout((function(){E(!0)}),6e4)}),[]),o.default.createElement(o.default.Fragment,null,r&&o.default.createElement(d.default,{variant:"error",id:"error-banner-".concat(t),description:"Something happened..."}),v&&o.default.createElement(d.default,{variant:"unsatisfied",id:"unsatisfied-banner-".concat(t)}),c&&o.default.createElement(d.default,{variant:"hazard-medium",id:"hazard-medium-banner-".concat(t),onRequestClose:function(){return s(!1)}}),g&&o.default.createElement(d.default,{variant:"unverified",id:"unverified-banner-".concat(t),description:o.default.createElement("div",null,"There are records that have been included that need to be verified before they are officially added. Please review and ensure they should be included."),bannerAction:{text:"Verify Records",onClick:function(){alert("records verified."),E(!1)}}}),C&&o.default.createElement(d.default,{variant:"hazard-low",id:"hazard-low-banner-".concat(t)}),o.default.createElement("p",null,"The error banner will appear after 10 seconds."),o.default.createElement("button",{onClick:function(){return u(!r)},type:"button",id:"toggle-error-banner-".concat(t)},"Show/Hide Error Banner"),o.default.createElement("p",null,"The hazard-medium banner will appear after 30 seconds."),o.default.createElement("button",{onClick:function(){return s(!c)},type:"button",id:"toggle-hazard-medium-banner-".concat(t)},"Show/Hide Hazard Medium Banner"),o.default.createElement("p",null,"Click to toggle Unsatisfied Banner."),o.default.createElement("button",{onClick:function(){return b(!v)},type:"button",id:"toggle-unsatisfied-banner-".concat(t)},"Show/Hide Unsatisfied Banner"),o.default.createElement("p",null,"The Unverified banner will appear after 60 seconds."),o.default.createElement("button",{onClick:function(){return E(!g)},type:"button",id:"toggle-unverified-banner-".concat(t)},"Show/Hide Unverified Banner"),o.default.createElement("p",null,"Click to toggle Hazard-Low Banner."),o.default.createElement("button",{onClick:function(){return O(!C)},type:"button",id:"toggle-hazard-low-banner-".concat(t)},"Show/Hide Hazard-Low Banner"),o.default.createElement("p",null,"This is a bunch of random page content to make the screen reader talk a lot longer. This is to help keep the reader going while we wait for the 60 second timeout to show the unverified banner. This contents does not add value to this example except to add a bunch of words for the voice over screen reader to read out loud. This could be cut-off when an banner is rendered unless the banner is polite and waits for the screen reader to finish so the user can understand what is happening on the page."))};f.propTypes={id:u.default.string},f.defaultProps={id:"1"};var c=f;t.default=c},1274:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),i=a(n(1025)),o=a(n(295)),u=function(){var e=(0,o.default)(),t=e.NotificationBannerProvider,n=e.NotificationBanners;return r.default.createElement(t,null,r.default.createElement(n,null),r.default.createElement(i.default,{id:"1"}))};t.default=u},904:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),i=a(n(1)),o=a(n(148)),u=a(n(299)),d={bannerAction:i.default.shape({text:i.default.string,onClick:i.default.func}),description:i.default.node,onRequestClose:i.default.func,variant:i.default.oneOf(["hazard-high","hazard-medium","hazard-low","error","unsatisfied","unverified","custom"]).isRequired,custom:i.default.shape({signalWord:i.default.string,iconClassName:i.default.string})},l=function(e){var t=e.bannerAction,n=e.custom,a=e.description,i=e.onRequestClose,d=e.variant,l=r.default.useContext(u.default),f=r.default.useRef((0,o.default)());return r.default.useEffect((function(){if(!l)throw new Error("A NotificationBanner was not rendered within the context of a NotificationBannerProvider. If this is unexpected, validate that the expected version of the terra-application package is installed.");l.registerNotificationBanner(f.current,{bannerAction:t,custom:n,description:a,key:f.current,onRequestClose:i,variant:d})}),[l,a,n,t,i,d]),r.default.useEffect((function(){return function(){l.unregisterNotificationBanner(f.current,d)}}),[l,d]),null};l.propTypes=d;var f=l;t.default=f},911:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(904))}}]);