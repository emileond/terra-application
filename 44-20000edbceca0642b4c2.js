(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1061:function(e,t,n){"use strict";var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(961)).default;t.default=a},907:function(e,t,n){"use strict";var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var a=r(n(296))},920:function(e,t,n){"use strict";var r=n(4),a=n(10);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(54)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=u?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(r,l,o):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(0)),o=r(n(1)),i=r(n(3)),c=n(201),f=r(n(90)),s=n(198),d=n(88),p=r(n(967)),m=r(n(924)),v=r(n(925)),h=r(n(968)),y=r(n(969)),b=r(n(973));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}var _=i.default.bind(b.default),E=function(e){var t=e.pageName,n=(0,l.useState)(!1),r=(0,u.default)(n,2),a=r[0],o=r[1],i=(0,l.useContext)(c.ActiveBreakpointContext),b=(0,l.useContext)(s.ApplicationIntlContext),g=l.default.useContext(d.ThemeContext),E=(0,l.useState)(!1),w=(0,u.default)(E,2),O=w[0],P=w[1];if((0,l.useEffect)((function(){if(!a){var e=setTimeout((function(){o(!0)}),window.TEST_APP_TIMEOUT);return function(){clearTimeout(e)}}}),[a]),!a)return l.default.createElement(f.default,{isOpen:!0,backgroundStyle:"clear"});if(O)throw new Error("".concat(t," threw an error to test the application's error handling"));return l.default.createElement("div",{className:_("page-content",g.className)},l.default.createElement("h1",null,t),l.default.createElement("h3",null,"Configuration Properties"),l.default.createElement("p",null,"Active Breakpoint:"," ",l.default.createElement("span",null,i)),l.default.createElement("p",null,"Intl Locale:"," ",l.default.createElement("span",null,b.locale)),l.default.createElement("h3",null,"Error Handling"),l.default.createElement("p",null,"Press the button below to throw an exception that will be caught and handled by the framework"),l.default.createElement("button",{type:"button",onClick:function(){P(!0)}},"Throw Error"),l.default.createElement(p.default,null),l.default.createElement(h.default,null),l.default.createElement(m.default,null),l.default.createElement(v.default,null),l.default.createElement("h3",null,"Theming"),l.default.createElement("p",null,"The div below uses the theme context to apply styling for theme: ".concat(g.name,".")),l.default.createElement("div",{className:_("themed-block")}),l.default.createElement(y.default,null))};E.propTypes={pageName:o.default.string};var w=E;t.default=w},924:function(e,t,n){"use strict";var r=n(4),a=n(10);Object.defineProperty(t,"__esModule",{value:!0}),t.ModalContent=t.default=void 0;var u=r(n(54)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=y(t);if(n&&n.has(e))return n.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=u?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(r,l,o):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(0)),o=r(n(1)),i=r(n(3)),c=r(n(150)),f=n(201),s=r(n(90)),d=r(n(149)),p=n(198),m=n(91),v=r(n(925)),h=r(n(965));function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(y=function(e){return e?n:t})(e)}var b=i.default.bind(h.default),g=function(e){var t=e.name,n=e.onSubmit,r=(0,l.useContext)(f.ActiveBreakpointContext),a=(0,l.useContext)(p.ApplicationIntlContext),o=(0,l.useContext)(m.DisclosureManagerContext),i=(0,l.useState)(!1),h=(0,u.default)(i,2),y=h[0],g=h[1],_=(0,l.useState)(!1),E=(0,u.default)(_,2),w=E[0],O=E[1],P=(0,l.useState)(!1),j=(0,u.default)(P,2),M=j[0],k=j[1],x=(0,l.useRef)();if((0,l.useEffect)((function(){if(!w){var e=setTimeout((function(){O(!0)}),2e3);return clearTimeout(x.current),function(){clearTimeout(e)}}}),[w]),!w)return l.default.createElement(l.default.Fragment,null,l.default.createElement(m.DisclosureManagerHeaderAdapter,{title:t}),l.default.createElement(s.default,{isOpen:!0,backgroundStyle:"clear"}));if(y)throw new Error("Modal Page failed to render");return l.default.createElement(l.default.Fragment,null,l.default.createElement(m.DisclosureManagerHeaderAdapter,{title:t}),l.default.createElement(c.default,null,l.default.createElement("div",{className:b("modal-content")},l.default.createElement("h2",null,t),l.default.createElement("h3",null,"Modal Dismissal"),l.default.createElement("p",null,"This modal will close when the Esc key is pressed, the Close button is pressed, or if the disclosee dismisses it when the Done button is pressed."),l.default.createElement("button",{type:"button",onClick:function(){o.registerDismissCheck((function(){return Promise.resolve()})),n()}},"Done"),l.default.createElement("h3",null,"Configuration Properties"),l.default.createElement("p",null,"Active Breakpoint:"," ",l.default.createElement("span",null,r)),l.default.createElement("p",null,"Intl Locale:"," ",l.default.createElement("span",null,a.locale)),l.default.createElement("h3",null,"Error Handling"),l.default.createElement("p",null,"Press the button below to throw an exception that will be caught and handled by the framework."),l.default.createElement("button",{type:"button",onClick:function(){g(!0)}},"Throw Error"),l.default.createElement("h3",null,"Status View"),l.default.createElement("p",null,"This component uses the ApplicationStatusOverlay to present a status view over itself and within the modal. The status view in this demo is shown for 2 seconds."),l.default.createElement("p",null,l.default.createElement("button",{disabled:M,type:"button",onClick:function(){k(!0),x.current=setTimeout((function(){k(!1)}),2e3)}},"Show Status View")),M&&l.default.createElement(d.default,{message:"This is a demo status view",variant:"no-data"}),l.default.createElement(v.default,null))))};t.ModalContent=g,g.propTypes={name:o.default.string,onSubmit:o.default.func};var _=function(){var e=(0,l.useContext)(m.DisclosureManagerContext),t=(0,l.useRef)();return l.default.createElement("div",null,l.default.createElement("h3",null,"Modal Presenter"),l.default.createElement("p",null,"This component uses the DisclosureManagerContext to present a modal."),l.default.createElement("button",{type:"button",onClick:function(){e.disclose({preferredType:"modal",size:"large",content:{key:"modal_component_demo",component:l.default.createElement(g,{name:"Modal Component Demo",onSubmit:function(){t.current&&(t.current(),t.current=void 0)}})}}).then((function(e){var n=e.dismissDisclosure;t.current=n}))}},"Show Modal"))};t.default=_},925:function(e,t,n){"use strict";var r=n(4),a=n(10);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(54)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=u?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(r,l,o):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(0)),o=r(n(3)),i=r(n(89)),c=r(n(964));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var s=o.default.bind(c.default),d=function(){var e=(0,l.useState)(!1),t=(0,u.default)(e,2),n=t[0],r=t[1],a=(0,l.useState)(!1),o=(0,u.default)(a,2),c=o[0],f=o[1];return l.default.createElement("div",null,l.default.createElement("h3",null,"Unsaved Changes"),l.default.createElement("p",null,"This component uses a NavigationPrompt to register unsaved state with framework. Multiple NavigationPrompts can be rendered at the same time."),l.default.createElement("p",{className:n?s("red-text"):null},"Pending Action 1:"," ",l.default.createElement("button",{type:"button",onClick:function(){r(!n)}},n?"Disable":"Activate")),l.default.createElement("p",{className:c?s("red-text"):null},"Pending Action 2:"," ",l.default.createElement("button",{type:"button",onClick:function(){f(!c)}},c?"Disable":"Activate")),n?l.default.createElement(i.default,{description:"Pending Action 1"}):void 0,c?l.default.createElement(i.default,{description:"Pending Action 2"}):void 0)};t.default=d},961:function(e,t,n){"use strict";var r=n(4),a=n(10);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=u?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(r,l,o):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(0)),l=r(n(907)),o=n(198),i=r(n(301)),c=n(88),f=r(n(962));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}window.TEST_APP_TIMEOUT=1e3;var d=function(){var e=(0,u.useContext)(o.ApplicationIntlContext),t=u.default.useContext(c.ThemeContext);return u.default.createElement(l.default,{locale:e.locale,themeName:t.className},u.default.createElement(i.default,null,u.default.createElement(f.default,null)))};t.default=d},962:function(e,t,n){"use strict";var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(10)),u=r(n(54)),l=d(n(0)),o=r(n(963)),i=r(n(297)),c=n(91),f=n(924);function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function d(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==(0,a.default)(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=u?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(r,l,o):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}var p=l.default.lazy((function(){return Promise.resolve().then((function(){return d(n(966))}))})),m=l.default.lazy((function(){return Promise.resolve().then((function(){return d(n(974))}))})),v=l.default.lazy((function(){return Promise.resolve().then((function(){return d(n(975))}))})),h={name:"Demo User",initials:"DU"},y=function(){var e,t=(0,l.useContext)(c.DisclosureManagerContext),n=(0,l.useState)("page_1"),r=(0,u.default)(n,2),a=r[0],s=r[1],d=(0,l.useState)(!1),y=(0,u.default)(d,2),b=y[0],g=y[1],_=(0,l.useRef)(),E=(0,l.useRef)([{key:"page_1",text:"Page 1"},{key:"page_2",text:"Page 2"},{key:"page_3",text:"Page 3"}]);if(b)return l.default.createElement("div",null,l.default.createElement("p",null,"Logged Out"),l.default.createElement("button",{type:"button",onClick:function(){g(!1)}},"Reset"));switch(a){case"page_1":e=l.default.createElement(p,null);break;case"page_2":e=l.default.createElement(m,null);break;case"page_3":e=l.default.createElement(v,null);break;default:e=null}return l.default.createElement(i.default,{titleConfig:{title:"Terra Application Demo"},userConfig:h,navigationItems:E.current,activeNavigationItemKey:a,onSelectNavigationItem:function(e){s(e)},extensionItems:[{key:"extension_1",icon:l.default.createElement(o.default,null),text:"Extension 1"}],onSelectExtensionItem:function(e){"extension_1"===e&&t.disclose({preferredType:"modal",size:"large",content:{key:"extension_1_modal",component:l.default.createElement(f.ModalContent,{name:"Extension Modal",onSubmit:function(){_.current&&(_.current(),_.current=void 0)}})}}).then((function(e){var t=e.dismissDisclosure;_.current=t}))},utilityItems:[{key:"utility_1",text:"Utility Item 1"}],onSelectUtilityItem:function(e){"utility_1"===e&&t.disclose({preferredType:"modal",size:"large",content:{key:"utility_1_modal",component:l.default.createElement(f.ModalContent,{name:"Utility Modal",onSubmit:function(){_.current&&(_.current(),_.current=void 0)}})}}).then((function(e){var t=e.dismissDisclosure;_.current=t}))},onSelectLogout:function(){g(!0)}},e)};t.default=y},963:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(18));function u(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=function(e){var t=l({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M24 0A14.94 14.94 0 009.1 14.9a15.52 15.52 0 001.5 6.5 14.69 14.69 0 004.1 5.1 12.06 12.06 0 014.3 6.7 2.19 2.19 0 00-1.1 1.8v7.8a2.11 2.11 0 002.1 2.1h1a3 3 0 106 0h.9a2.11 2.11 0 002.1-2.1V35a2.06 2.06 0 00-1.1-1.8 12.4 12.4 0 014.1-6.6 16.23 16.23 0 004.4-5.3 14.43 14.43 0 001.5-6.5A14.92 14.92 0 0024 0zm7 24.4a15.76 15.76 0 00-3.9 5 11.75 11.75 0 00-1.2 3.6h-.2V20h2a1.54 1.54 0 001.5-1.5 1.56 1.56 0 00-1.6-1.5h-7a1.5 1.5 0 000 3h2v13h-.5a13.86 13.86 0 00-1.2-3.6 14.67 14.67 0 00-4.5-5.4h.1a12 12 0 01-4.3-9.1A11.78 11.78 0 0124 3a11.93 11.93 0 0111.9 11.9 12 12 0 01-4.9 9.5z"}))};o.displayName="IconLightbulb",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=o;t.default=i},964:function(e,t,n){"use strict";n.r(t),t.default={"red-text":"PendingActionToggle-module__red-text___1IY67"}},965:function(e,t,n){"use strict";n.r(t),t.default={"modal-content":"ModalPresenter-module__modal-content___PVeDa"}},966:function(e,t,n){"use strict";var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),u=r(n(920)),l=function(){return a.default.createElement(u.default,{pageName:"Page 1",pageKey:"page_1"})};t.default=l},967:function(e,t,n){"use strict";var r=n(4),a=n(10);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(54)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=u?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(r,l,o):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(0)),o=r(n(90));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}var c=function(){var e=(0,l.useState)(!1),t=(0,u.default)(e,2),n=t[0],r=t[1],a=(0,l.useRef)();return(0,l.useEffect)((function(){return function(){window.clearTimeout(a.current)}}),[]),l.default.createElement("div",null,l.default.createElement("h3",null,"Loading Overlay Presenter"),l.default.createElement("p",null,"This component uses the ApplicationLoadingOverlay to present a loading overlay over itself. The overlay in this demo is shown for 2 seconds."),l.default.createElement("p",null,l.default.createElement("button",{disabled:n,type:"button",onClick:function(){r(!0),a.current=setTimeout((function(){r(!1)}),2e3)}},"Show Loading Overlay")),l.default.createElement(o.default,{isOpen:n,backgroundStyle:"light"}))};t.default=c},968:function(e,t,n){"use strict";var r=n(4),a=n(10);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(54)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=u?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(r,l,o):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(0)),o=r(n(149));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}var c=function(){var e=(0,l.useState)(!1),t=(0,u.default)(e,2),n=t[0],r=t[1],a=(0,l.useRef)();return(0,l.useEffect)((function(){window.clearTimeout(a.current)}),[]),l.default.createElement("div",null,l.default.createElement("h3",null,"Status View Presenter"),l.default.createElement("p",null,"This component uses the ApplicationStatusOverlay to present a status view over itself. The status view in this demo is shown for 2 seconds."),l.default.createElement("p",null,l.default.createElement("button",{disabled:n,type:"button",onClick:function(){r(!0),a.current=setTimeout((function(){r(!1)}),2e3)}},"Show Status View")),n&&l.default.createElement(o.default,{message:"This is a demo status view",variant:"no-data"}))};t.default=c},969:function(e,t,n){"use strict";var r=n(4),a=n(10);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(54)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=u?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(r,l,o):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(0)),o=r(n(970));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}var c=function(){var e=(0,l.useState)(0),t=(0,u.default)(e,2),n=t[0],r=t[1];return(0,l.useEffect)((function(){var e=function(){r((function(e){return e+1}))};return o.default.on("increment-counter",e),function(){o.default.off("increment-counter",e)}}),[]),l.default.createElement("div",null,l.default.createElement("h3",null,"Event Emitter"),l.default.createElement("p",null,"The EventEmitter is used to facilitate communications within the application. Clicking the emitter button emits an event to the Listener to increment the value by 1."),l.default.createElement("p",null,"Emitter:"," ",l.default.createElement("button",{type:"button",onClick:function(){o.default.emit("increment-counter")}},"Emit event to increment")),l.default.createElement("p",null,"Listener:"," ",n))};t.default=c},970:function(e,t,n){"use strict";var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var a=r(n(971))},971:function(e,t,n){"use strict";var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=new(r(n(972)).default);t.default=a},972:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,a="~";function u(){}function l(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,t,n,r,u){if("function"!=typeof n)throw new TypeError("The listener must be a function");var o=new l(n,r||e,u),i=a?a+t:t;return e._events[i]?e._events[i].fn?e._events[i]=[e._events[i],o]:e._events[i].push(o):(e._events[i]=o,e._eventsCount++),e}function i(e,t){0==--e._eventsCount?e._events=new u:delete e._events[t]}function c(){this._events=new u,this._eventsCount=0}Object.create&&(u.prototype=Object.create(null),(new u).__proto__||(a=!1)),c.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)r.call(e,t)&&n.push(a?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},c.prototype.listeners=function(e){var t=a?a+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,u=n.length,l=new Array(u);r<u;r++)l[r]=n[r].fn;return l},c.prototype.listenerCount=function(e){var t=a?a+e:e,n=this._events[t];return n?n.fn?1:n.length:0},c.prototype.emit=function(e,t,n,r,u,l){var o=a?a+e:e;if(!this._events[o])return!1;var i,c,f=this._events[o],s=arguments.length;if(f.fn){switch(f.once&&this.removeListener(e,f.fn,void 0,!0),s){case 1:return f.fn.call(f.context),!0;case 2:return f.fn.call(f.context,t),!0;case 3:return f.fn.call(f.context,t,n),!0;case 4:return f.fn.call(f.context,t,n,r),!0;case 5:return f.fn.call(f.context,t,n,r,u),!0;case 6:return f.fn.call(f.context,t,n,r,u,l),!0}for(c=1,i=new Array(s-1);c<s;c++)i[c-1]=arguments[c];f.fn.apply(f.context,i)}else{var d,p=f.length;for(c=0;c<p;c++)switch(f[c].once&&this.removeListener(e,f[c].fn,void 0,!0),s){case 1:f[c].fn.call(f[c].context);break;case 2:f[c].fn.call(f[c].context,t);break;case 3:f[c].fn.call(f[c].context,t,n);break;case 4:f[c].fn.call(f[c].context,t,n,r);break;default:if(!i)for(d=1,i=new Array(s-1);d<s;d++)i[d-1]=arguments[d];f[c].fn.apply(f[c].context,i)}}return!0},c.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},c.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},c.prototype.removeListener=function(e,t,n,r){var u=a?a+e:e;if(!this._events[u])return this;if(!t)return i(this,u),this;var l=this._events[u];if(l.fn)l.fn!==t||r&&!l.once||n&&l.context!==n||i(this,u);else{for(var o=0,c=[],f=l.length;o<f;o++)(l[o].fn!==t||r&&!l[o].once||n&&l[o].context!==n)&&c.push(l[o]);c.length?this._events[u]=1===c.length?c[0]:c:i(this,u)}return this},c.prototype.removeAllListeners=function(e){var t;return e?(t=a?a+e:e,this._events[t]&&i(this,t)):(this._events=new u,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=a,c.EventEmitter=c,e.exports=c},973:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"AppPage-module__clinical-lowlight-theme___1ZSMk","orion-fusion-theme":"AppPage-module__orion-fusion-theme___1-1tl","page-content":"AppPage-module__page-content___OFjrk","themed-block":"AppPage-module__themed-block___3_pj4"}},974:function(e,t,n){"use strict";var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),u=r(n(920)),l=function(){return a.default.createElement(u.default,{pageName:"Page 2",pageKey:"page_2"})};t.default=l},975:function(e,t,n){"use strict";var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),u=r(n(920)),l=function(){return a.default.createElement(u.default,{pageName:"Page 3",pageKey:"page_3"})};t.default=l}}]);