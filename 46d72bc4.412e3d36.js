(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(192)),c={title:"Frontend Tests",sidebar_label:"Tests"},i={unversionedId:"developer/frontend-tests",id:"version-4.0.1/developer/frontend-tests",isDocsHomePage:!1,title:"Frontend Tests",description:"Test",source:"@site/versioned_docs/version-4.0.1/developer/frontend-tests.md",permalink:"/docs/4.0.1/developer/frontend-tests",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/versioned_docs/version-4.0.1/developer/frontend-tests.md",version:"4.0.1",sidebar_label:"Tests",sidebar:"version-4.0.1/docs",previous:{title:"Frontend Development",permalink:"/docs/4.0.1/developer/frontend"},next:{title:"Backend Development",permalink:"/docs/4.0.1/developer/backend"}},l=[{value:"Test",id:"test",children:[{value:"Lint",id:"lint",children:[]},{value:"Unit tests",id:"unit-tests",children:[]},{value:"End-to-end tests",id:"end-to-end-tests",children:[]},{value:"Code Climate",id:"code-climate",children:[]},{value:"Stratos Continue Integration",id:"stratos-continue-integration",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"test"},"Test"),Object(o.b)("h3",{id:"lint"},"Lint"),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"npm run lint")," to execute tslint lint checking."),Object(o.b)("h3",{id:"unit-tests"},"Unit tests"),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"npm test")," to execute the unit tests via ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://karma-runner.github.io"}),"Karma"),". Coverage information can be found in ",Object(o.b)("inlineCode",{parentName:"p"},"./coverage")),Object(o.b)("p",null,"To execute an individual package run ",Object(o.b)("inlineCode",{parentName:"p"},"ng test <package name>"),". To execute the tests again automatically on code changes add ",Object(o.b)("inlineCode",{parentName:"p"},"--watch=true")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"NOTE")," npm test will search for chrome on your path. If this is not so please set an env var CHROME_BIN pointing to your executable\n(chromium is fine too).")),Object(o.b)("h3",{id:"end-to-end-tests"},"End-to-end tests"),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"npm run e2e")," to execute the end-to-end tests via ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.protractortest.org/"}),"Protractor"),"."),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"npm run e2e-dev")," to execute end-to-end tests against a locally running instance on ",Object(o.b)("inlineCode",{parentName:"p"},"https://localhost:4200")),Object(o.b)("p",null,"More information on the E2E tests and pre-requisites for running them is available here - ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.0.1/developer/developers-guide-e2e-tests"}),"E2E Tests"),"."),Object(o.b)("h3",{id:"code-climate"},"Code Climate"),Object(o.b)("p",null,"We use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://codeclimate.com/github/cloudfoundry-incubator/stratos"}),"Code Climate")," to check for general code quality issues. This executes against Pull\nRequests on creation/push."),Object(o.b)("h4",{id:"running-code-climate-locally"},"Running Code Climate locally"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Generally we would not advise doing this and just rely on the code climate gate to run when pull requests are submitted")),Object(o.b)("p",null,"To run locally see instructions ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/codeclimate/codeclimate"}),"here")," to install Code Climate CLI\nand engine via docker. Once set ensure you're in the root of the project and execute the following (it may take a while)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"codeclimate analyze\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"NOTE")," Unfortunately this highlights all current issues and not those that are the diff between any master and feature branch. Analyze\ncan be ran against a single/sub set of files, again with all current issues, but a little more digestible.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"codeclimate analyze <path to file/s>\n")),Object(o.b)("p",null,"In a feature branch to compare files that have changed to master, for instance, use the following"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"git checkout feature-branch-A\ncodeclimate analyze $(git diff --name-only master)\n")),Object(o.b)("p",null,"You can also run the above command via npm"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"npm run climate\n")),Object(o.b)("h3",{id:"stratos-continue-integration"},"Stratos Continue Integration"),Object(o.b)("p",null,"For each new pull request and any subsequent pushes to it the following actions are executed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Code quality analysis via Code Climate - ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://codeclimate.com/"}),"https://codeclimate.com/")),Object(o.b)("li",{parentName:"ul"},"Jenkins CI run, covering..",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Frontend lint check"),Object(o.b)("li",{parentName:"ul"},"Backend lint check"),Object(o.b)("li",{parentName:"ul"},"Frontend unit tests"),Object(o.b)("li",{parentName:"ul"},"Backend unit tests"),Object(o.b)("li",{parentName:"ul"},"End to end tests"))),Object(o.b)("li",{parentName:"ul"},"Security anaylsis via Snyk - ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://snyk.io/"}),"https://snyk.io/"))))}u.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);