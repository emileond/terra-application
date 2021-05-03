(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1048:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(16),i=n.n(a),r=n(22),o=n.n(r),d=(n(0),n(294)),l={};function m(e){var t=e.components,n=o()(e,["components"]);return Object(d.mdx)("wrapper",i()({},l,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("h1",{id:"breakpoints"},"Breakpoints"),Object(d.mdx)("p",null,Object(d.mdx)("inlineCode",{parentName:"p"},"terra-application")," defines named sizes that correspond to ranges of viewport widths. It also provides a number of utilities\nthat can be used to detect and respond to breakpoint changes."),Object(d.mdx)("h2",{id:"usage"},"Usage"),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import breakpoints, { activeBreakpointForSize, isBreakpointActiveForSize } from 'terra-application/lib/breakpoints';\n")),Object(d.mdx)("h3",{id:"breakpoints-1"},Object(d.mdx)("inlineCode",{parentName:"h3"},"breakpoints")),Object(d.mdx)("p",null,"An object containing a mapping of named breakpoint values to their minimum width value."),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",{parentName:"tr",align:null},"Breakpoint Name"),Object(d.mdx)("th",{parentName:"tr",align:null},"Minimum Value"),Object(d.mdx)("th",{parentName:"tr",align:null},"Corresponding Media Query"),Object(d.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"tiny")),Object(d.mdx)("td",{parentName:"tr",align:null},"0px"),Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 0px)")),Object(d.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 0px and up")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"small")),Object(d.mdx)("td",{parentName:"tr",align:null},"544px"),Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 544px)")),Object(d.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 544px and up")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"medium")),Object(d.mdx)("td",{parentName:"tr",align:null},"768px"),Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 768px)")),Object(d.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 768px and up")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"large")),Object(d.mdx)("td",{parentName:"tr",align:null},"992px"),Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 992px)")),Object(d.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 992px and up")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"huge")),Object(d.mdx)("td",{parentName:"tr",align:null},"1216px"),Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 1216px)")),Object(d.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 1216 and up")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"enormous")),Object(d.mdx)("td",{parentName:"tr",align:null},"1440px"),Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 1440px)")),Object(d.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 1440px and up")))),Object(d.mdx)("h3",{id:"activebreakpointforsizewidthvalue"},Object(d.mdx)("inlineCode",{parentName:"h3"},"activeBreakpointForSize(widthValue)")),Object(d.mdx)("p",null,Object(d.mdx)("inlineCode",{parentName:"p"},"activeBreakpointForSize")," will return the closest active breakpoint that matches the given width value."),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-jsx"},"console.log(activeBreakpointForSize(300));  // 'tiny'\nconsole.log(activeBreakpointForSize(544));  // 'small'\nconsole.log(activeBreakpointForSize(800));  // 'medium'\nconsole.log(activeBreakpointForSize(1000)); // 'large'\nconsole.log(activeBreakpointForSize(1300)); // 'huge'\nconsole.log(activeBreakpointForSize(1500)); // 'enormous'\n")),Object(d.mdx)("h3",{id:"isbreakpointactiveforsizebreakpointname-widthvalue"},Object(d.mdx)("inlineCode",{parentName:"h3"},"isBreakpointActiveForSize(breakpointName, widthValue)")),Object(d.mdx)("p",null,Object(d.mdx)("inlineCode",{parentName:"p"},"isBreakpointActiveForSize")," will return a boolean value indicating whether or not the given breakpoint name is active for the width value."),Object(d.mdx)("blockquote",null,Object(d.mdx)("p",{parentName:"blockquote"},"Note that since the breakpoints are defined as minimum values, a breakpoint will be determined to be active\nif the width value is larger than the defined minimum, even if the width value is included in a higher breakpoint range.")),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-jsx"},"console.log(isBreakpointActiveForSize('tiny', 300));      // true\nconsole.log(isBreakpointActiveForSize('tiny', 544));      // true\nconsole.log(isBreakpointActiveForSize('tiny', 800));      // true\nconsole.log(isBreakpointActiveForSize('tiny', 1000));     // true\n\nconsole.log(isBreakpointActiveForSize('medium', 300));    // false\nconsole.log(isBreakpointActiveForSize('medium', 544));    // false\nconsole.log(isBreakpointActiveForSize('medium', 800));    // true\nconsole.log(isBreakpointActiveForSize('medium', 1500));   // true\n\nconsole.log(isBreakpointActiveForSize('enormous', 300));  // false\nconsole.log(isBreakpointActiveForSize('enormous', 544));  // false\nconsole.log(isBreakpointActiveForSize('enormous', 800));  // false\nconsole.log(isBreakpointActiveForSize('enormous', 1500)); // true\n")),Object(d.mdx)("h3",{id:"media-queries"},"Media Queries"),Object(d.mdx)("p",null,Object(d.mdx)("inlineCode",{parentName:"p"},"terra-application")," also provides a set of Sass mix-ins that define media queries for the supported breakpoints."),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-scss"},"@import '~terra-application/lib/breakpoints/media-queries';\n\n.example {\n  color: blue;\n\n  @include terra-mq-small-up {\n    color: red;\n  }\n\n  @include terra-mq-medium-up {\n    color: purple;\n  }\n\n  @include terra-mq-large-up {\n    color: green;\n  }\n\n  @include terra-mq-huge-up {\n    color: yellow;\n  }\n\n  @include terra-mq-enormous-up {\n    color: orange;\n  }\n}\n")))}m.isMDXComponent=!0}}]);