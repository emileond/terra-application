(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1066:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(17),o=n.n(a),i=n(22),p=n.n(i),r=(n(0),n(294)),c=["components"],s={};function d(e){var t=e.components,n=p()(e,c);return Object(r.mdx)("wrapper",o()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"how-to-use-active-breakpoint"},"How To Use Active Breakpoint"),Object(r.mdx)("p",null,"The active breakpoint value can be determined by using the ",Object(r.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/contexts/active-breakpoint-context"},"ActiveBreakpointContext"),". Components that use the ActiveBreakpointContext will be updated whenever the active breakpoint value changes."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useContext } from 'react';\nimport { ActiveBreakpointContext } from 'terra-application/lib/breakpoints';\n\nconst ExampleComponent = () => {\n  const activeBreakpoint = useContext(ActiveBreakpointContext);\n\n  return (\n    <div>\n      <p>This component retrieves and renders the active breakpoint</p>\n      <p>{activeBreakpoint}</p>\n    </div>\n  );\n};\n\nexport default ExampleComponent;\n")),Object(r.mdx)("blockquote",null,Object(r.mdx)("p",{parentName:"blockquote"},"Note: An ActiveBreakpointContext value is provided by ",Object(r.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/application-base"},"ApplicationBase"),". The rendering of additional ActiveBreakpointContext providers should be unnecessary is most cases.")))}d.isMDXComponent=!0}}]);