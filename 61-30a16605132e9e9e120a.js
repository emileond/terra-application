(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1086:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return h}));var a,o=t(16),r=t.n(o),l=t(22),i=t.n(l),s=(t(0),t(294)),d=t(899),p=t.n(d),c=function(){return Object(s.mdx)(p.a,{rows:[{name:"children",type:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(s.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(s.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"The components to be rendered in the body of the SlidePanelManager. These components will receive the\ndisclosure capabilities through the DisclosureManger's context API."))}return n.isMDXComponent=!0,n({})}},{name:"panelBehavior",type:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(s.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"enum"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-json"},'[\n "overlay",\n "squish"\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(s.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"The desired panel behavior. Either 'squish' or 'overlay'."))}return n.isMDXComponent=!0,n({})}},{name:"disclosureAccessory",type:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(s.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"element"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(s.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"The component to render within the panel above the disclosed content."))}return n.isMDXComponent=!0,n({})}},{name:"navigationPromptResolutionOptions",type:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(s.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"custom"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,a=i()(n,["components"]);return Object(s.mdx)("wrapper",r()({},e,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"The Object (or function that returns an Object) that specifies the messages\nused to prompt the user when disclosure dismissal occurs when pending state\nis present. If not provided, the default messaging will be used."))}return n.isMDXComponent=!0,n({})}}]})},m=(a="Badge",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.mdx)("div",e)}),u={};function h(e){var n=e.components,t=i()(e,["components"]);return Object(s.mdx)("wrapper",r()({},u,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)(m,{mdxType:"Badge"}),Object(s.mdx)("h1",{id:"slidepanelmanager"},"SlidePanelManager"),Object(s.mdx)("p",null,"The SlidePanelManager exposes its children to panel presentation APIs through the\n",Object(s.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/contexts/disclosure-manager-context"},"DisclosureManagerContext"),"."),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import SlidePanelManager from 'terra-application/lib/slide-panel-manager';\n")),Object(s.mdx)("h2",{id:"props"},"Props"),Object(s.mdx)(c,{mdxType:"PropsTable"}),Object(s.mdx)("h2",{id:"features"},"Features"),Object(s.mdx)("h3",{id:"exception-handling"},"Exception Handling"),Object(s.mdx)("p",null,"SlidePanelManager renders an ",Object(s.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/application-error-boundary"},"ApplicationErrorBoundary"),"\naround its disclosed components. If the disclosed components throw exceptions during React lifecycle functions, SlidePanelManager will\ncatch the exceptions and render a styled error component in place of the children."),Object(s.mdx)("blockquote",null,Object(s.mdx)("p",{parentName:"blockquote"},"If the disclosed panel contents do not utilize the DisclosureManagerHeaderAdapter and render their own panel header instead,\nit is recommended that those components render an additional ApplicationErrorBoundary below their panel header to keep the\nheader controls for panel dismissal exposed.")),Object(s.mdx)("h3",{id:"loading-overlays"},"Loading Overlays"),Object(s.mdx)("p",null,"SlidePanelManager renders an ",Object(s.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/application-loading-overlay-provider"},"ApplicationLoadingOverlayProvider"),"\naround its disclosed components. Any ",Object(s.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/application-loading-overlay"},"ApplicationLoadingOverlay"),"\ncomponents rendered by children will cause a loading overlay to be rendered over the panel's contents."),Object(s.mdx)("blockquote",null,Object(s.mdx)("p",{parentName:"blockquote"},"If the disclosed panel contents do not utilize the DisclosureManagerHeaderAdapter and render their own panel header instead,\nit is recommended that those components render an additional ApplicationLoadingOverlayProvider below their panel header to keep\nthe header controls for panel dismissal exposed while the overlay is active.")),Object(s.mdx)("h3",{id:"status-views"},"Status Views"),Object(s.mdx)("p",null,"SlidePanelManager renders an ",Object(s.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/application-status-overlay-provider"},"ApplicationStatusOverlayProvider"),"\naround its disclosed components. Any ",Object(s.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/application-status-overlay"},"ApplicationStatusOverlay"),"\ncomponents rendered by children will cause a status view to be rendered over the panel's contents."),Object(s.mdx)("blockquote",null,Object(s.mdx)("p",{parentName:"blockquote"},"If the disclosed panel contents do not utilize the DisclosureManagerHeaderAdapter and render their own panel header instead,\nit is recommended that those components render an additional ApplicationStatusOverlayProvider below their panel header to keep\nthe header controls for panel dismissal exposed while the status view is active.")),Object(s.mdx)("h3",{id:"unsaved-changes"},"Unsaved Changes"),Object(s.mdx)("p",null,"SlidePanelManager monitors its disclosed content for the presence of rendered ",Object(s.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/navigation-prompt"},"NavigationPrompts"),"\nwithin its disclosed content. SlidePanelManager will ensure that the user is prompted prior to dismissing the presented panel if any\n",Object(s.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/navigation-prompt"},"NavigationPrompts")," are rendered at the time of the dismissal request."),Object(s.mdx)("h2",{id:"details"},"Details"),Object(s.mdx)("h3",{id:"implementation-requirements"},"Implementation Requirements"),Object(s.mdx)("p",null,"The SlidePanelManager utilizes the ",Object(s.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/contexts/disclosure-manager-context"},"DisclosureManagerContext")," to manage disclosure requests."),Object(s.mdx)("p",null,"The SlidePanelManager responds to ",Object(s.mdx)("inlineCode",{parentName:"p"},'"panel"')," disclosure type requests. Components that wish to disclose content using the SlidePanelManager\nshould provide a preferred type of ",Object(s.mdx)("inlineCode",{parentName:"p"},'"panel"'),"."),Object(s.mdx)("h3",{id:"disclosuremanagerheaderadapter-support"},"DisclosureManagerHeaderAdapter Support"),Object(s.mdx)("p",null,"If a component disclosed by the SlidePanelManager renders a ",Object(s.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),", the SlidePanelManager will render an ActionHeader\nand provide the standard disclosure navigation controls (close, go back, maximize/minimize, etc.) within it. The disclosed component\ncan use the ",Object(s.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter")," to inject its own title and CollapsibleButtonView into the ActionHeader."),Object(s.mdx)("p",null,"If the disclosed component does ",Object(s.mdx)("strong",{parentName:"p"},"not")," render a ",Object(s.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),", the SlidePanelManager will ",Object(s.mdx)("strong",{parentName:"p"},"not")," render an ActionHeader itself.\nIn this case, it is assumed that the disclosed component is rendering its own header. The disclosed component is responsible for rendering\nthe appropriate controls to navigate the disclosure stack."),Object(s.mdx)("blockquote",null,Object(s.mdx)("p",{parentName:"blockquote"},"Note: The DisclosureManagerHeaderAdapter is the preferred way to present a header within the SlidePanelManager.\nIn a future major release, the SlidePanelManager will ",Object(s.mdx)("strong",{parentName:"p"},"always")," render the header and navigation controls, regardless of the presence of a DisclosureManagerHeaderAdapter.")),Object(s.mdx)("h3",{id:"disclosure-accessory"},"Disclosure Accessory"),Object(s.mdx)("p",null,"The ",Object(s.mdx)("inlineCode",{parentName:"p"},"disclosureAccessory")," prop allows consumers of the SlidePanelManager to render a static component above the disclosed panel content.\nThe provided component will be rendered below the standard ActionHeader and above the disclosed content. This can be used to easily\nprovide additional context to every disclosed component. This component is provided once to the SlidePanelManager instance, not on a per-disclosure basis,\nand each component in the disclosure stack will be decorated with the same accessory component."),Object(s.mdx)("h3",{id:"example"},"Example"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button';\nimport SlidePanelManager, { disclosureType } from 'terra-application/lib/slide-panel-manager';\nimport { withDisclosureManager, DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';\nimport CollapsibleMenuView from 'terra-collapsible-menu-view';\n\nconst PanelComponentB = () => (\n  <React.Fragment>\n    <DisclosureManagerHeaderAdapter\n      title=\"Panel Component B\"\n    />\n    <p>I am PanelComponentB!</p>\n  </React.Fragment>\n);\n\nconst PanelComponentA = () => {\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n\n  return (\n    <div>\n      <DisclosureManagerHeaderAdapter\n        title=\"Panel Component A\"\n        collapsibleMenuView={<CollapsibleMenuView />}\n      />\n      <p>I am PanelComponentA!</p>\n      <Button\n        text=\"Disclose PanelComponentB\"\n        onClick={() => {\n          disclosureManager.disclose({\n            preferredType: 'panel',\n            size: 'large',\n            content: {\n              key: 'panel-component-b-instance',\n              component: <PanelComponentB />\n            }\n          });\n        }}\n      />\n    </div>\n  );\n}\n\nconst MyContentComponent = withDisclosureManager(({ disclosureManager }) => (\n  <div>\n    <p>I am MyContentComponent!</p>\n    <Button\n      text=\"Disclose PanelComponentA\"\n      onClick={() => {\n        disclosureManager.disclose({\n          preferredType: 'panel',\n          size: 'large',\n          content: {\n            key: 'panel-component-a-instance',\n            component: <PanelComponentA />\n          }\n        });\n      }}\n    />\n  </div>\n));\n\nMyContentComponent.propTypes = {\n  disclosureManager: disclosureManagerShape,\n}\n\nconst MySlidePanelManagerComponent = () => (\n  <SlidePanelManager\n    disclosureAccessory={<div>Disclosure Accessory</div>}\n  >\n    <MyContentComponent />\n  </SlidePanelManager>\n);\n")))}h.isMDXComponent=!0},899:function(e,n,t){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=p();if(n&&n.has(e))return n.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=o?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(t,r,l):t[r]=e[r]}t.default=e,n&&n.set(e,t);return t}(t(0)),r=d(t(1)),l=d(t(3)),i=t(87),s=d(t(900));function d(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}var c=l.default.bind(s.default),m={rows:r.default.arrayOf(r.default.shape({name:r.default.string,type:r.default.func,required:r.default.bool,defaultValue:r.default.string,description:r.default.func}))},u=function(e){var n=e.rows,t=(0,o.useContext)(i.ThemeContext);return o.default.createElement("table",{className:c("table",t.className)},o.default.createElement("thead",null,o.default.createElement("tr",{className:c("tr")},o.default.createElement("th",{className:c("th")},"Prop Name"),o.default.createElement("th",{className:c("th")},"Type"),o.default.createElement("th",{className:c("th")},"Is Required"),o.default.createElement("th",{className:c("th")},"Default Value"),o.default.createElement("th",{className:c("th")},"Description"))),o.default.createElement("tbody",null,n.map((function(e){return o.default.createElement("tr",{className:c("tr","props-tr"),key:e.name},o.default.createElement("td",{className:c(["td","strong","props-td"])},e.name),o.default.createElement("td",{className:c(["td","props-td"])},e.type()),o.default.createElement("td",{className:c(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),o.default.createElement("td",{className:c(["td","props-td"])},e.defaultValue),o.default.createElement("td",{className:c(["td","props-td"])},e.description()))}))))};u.propTypes=m;var h=u;n.default=h},900:function(e,n,t){"use strict";t.r(n),n.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___2OiA6","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___3AJGO",a:"PropsTable-module__a___Nl2I_",blockquote:"PropsTable-module__blockquote___1UooW",code:"PropsTable-module__code___2CrUu",dd:"PropsTable-module__dd___-FF1D",dl:"PropsTable-module__dl___xAY9f",dt:"PropsTable-module__dt___3ZdLl",h1:"PropsTable-module__h1___2344J",h2:"PropsTable-module__h2___39ybm",h3:"PropsTable-module__h3___2fnGf",h4:"PropsTable-module__h4___3EKMz",h5:"PropsTable-module__h5___2O9Fr",h6:"PropsTable-module__h6___3yqd6","icon-link":"PropsTable-module__icon-link___3-2wE",anchor:"PropsTable-module__anchor___3FaVY",hr:"PropsTable-module__hr___284T6",img:"PropsTable-module__img___228gq",input:"PropsTable-module__input___37YH2",kbd:"PropsTable-module__kbd___9Qwkj",li:"PropsTable-module__li___2DP3k",p:"PropsTable-module__p___il_ri",ol:"PropsTable-module__ol___31QwV",ul:"PropsTable-module__ul___2emTr",td:"PropsTable-module__td___2UqeU",pre:"PropsTable-module__pre___2B0eh",strong:"PropsTable-module__strong___2t-kf",table:"PropsTable-module__table___1UgXO",th:"PropsTable-module__th___3-CqB",tr:"PropsTable-module__tr___1oPul",icon:"PropsTable-module__icon___2R10q",required:"PropsTable-module__required___r_fIG","props-tr":"PropsTable-module__props-tr___3a95z","props-td":"PropsTable-module__props-td___1xIuD"}}}]);