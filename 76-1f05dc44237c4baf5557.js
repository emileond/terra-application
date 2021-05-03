(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1056:function(t,a,e){"use strict";e.r(a),e.d(a,"default",(function(){return c}));var n=e(16),o=e.n(n),p=e(22),r=e.n(p),i=(e(0),e(294)),l={};function c(t){var a=t.components,e=r()(t,["components"]);return Object(i.mdx)("wrapper",o()({},l,e,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"how-to-show-status-overlays"},"How to Show Status Overlays"),Object(i.mdx)("p",null,"Status View can be rendered within the framework by rendering an ",Object(i.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/application-status-overlay"},"ApplicationStatusOverlay")," component. Status Views will be rendered by the closest ancestor ",Object(i.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/application-status-overlay-provider"},"ApplicationStatusOverlayProvider"),". All content rendered within the responding ApplicationStatusOverlayProvider will be overlaid."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\nimport ApplicationStatusOverlay from \'terra-application/lib/application-status-overlay\';\n\nconst ExampleComponent = () => {\n  const [showStatusOverlay, setShowStatusOverlay] = useState(false);\n\n  return (\n    <div>\n      <p>This component toggles a status view that lasts for 3 seconds.</p>\n      <p>\n        <button\n          type="button"\n          onClick={() => {\n            setShowStatusOverlay(true);\n\n            setTimeout(() => {\n              setShowStatusOverlay(false);\n            }, 3000);\n          }}\n        >\n          Show Status View\n        </button>\n      </p>\n      {showStatusOverlay && <ApplicationStatusOverlay message="Demo for showing status overlay view" variant="no-data" />}\n    </div>\n  );\n};\n\nexport default ExampleComponent;\n')),Object(i.mdx)("p",null,"Any component that wants to create an status view container for its children can render its own ",Object(i.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/application-status-overlay-provider"},"ApplicationStatusOverlayProvider")," to scope status view presentation to that container."),Object(i.mdx)("blockquote",null,Object(i.mdx)("p",{parentName:"blockquote"},"Note: ApplicationStatusOverlayProviders are provided by ",Object(i.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/application-base"},"ApplicationBase"),", ",Object(i.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/application-navigation"},"ApplicationNavigation")," , ",Object(i.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/modal-manager"},"ModalManager"),", and the ",Object(i.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/slide-panel-manager"},"SlidePanelManager"),".")))}c.isMDXComponent=!0}}]);