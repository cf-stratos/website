(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(354)),i={title:"Developing the Stratos Console",sidebar_label:"Getting Started"},c={unversionedId:"developer/introduction",id:"version-4.3.0/developer/introduction",isDocsHomePage:!1,title:"Developing the Stratos Console",description:"Introduction",source:"@site/versioned_docs/version-4.3.0/developer/introduction.md",permalink:"/docs/4.3.0/developer/introduction",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/versioned_docs/version-4.3.0/developer/introduction.md",version:"4.3.0",sidebar_label:"Getting Started",sidebar:"version-4.3.0/docs",previous:{title:"Contributing",permalink:"/docs/4.3.0/developer/contributing"},next:{title:"Frontend Development",permalink:"/docs/4.3.0/developer/frontend"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Build &amp; Run Locally",id:"build--run-locally",children:[]}],d={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"Stratos comprises of two main components:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A front-end UI that runs in your web browser. This is written in ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.typescriptlang.org/"}),"Typescript")," and uses the ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://angular.io/"}),"Angular")," framework."),Object(a.b)("li",{parentName:"ul"},"A back-end that provides a web-based API to the front-end. This is written in ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://golang.org/"}),"Go"),".")),Object(a.b)("p",null,"Depending on what you are contributing, you will need to develop with the front-end, back-end or both."),Object(a.b)("h2",{id:"build--run-locally"},"Build & Run Locally"),Object(a.b)("p",null,"For a quick-start to get Stratos front and back ends built and running locally on a development system, follow the steps below."),Object(a.b)("p",null,"You will need to have ",Object(a.b)("inlineCode",{parentName:"p"},"go")," and ",Object(a.b)("inlineCode",{parentName:"p"},"nodejs")," installed in your development environment."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone https://github.com/cloudfoundry/stratos.git\ncd stratos\nnpm install\nnpm run build\nnpm run build-backend\ncd src/jetstream\n./jetstream\n")),Object(a.b)("p",null,"This will build both the frontend and backend and run the backend in a mode where it will also serve the static resources for the frontend. "),Object(a.b)("p",null,"You can open a web browser and navigate to (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://127.0.0.1:5443"}),"https://127.0.0.1:5443"),") and login with username ",Object(a.b)("inlineCode",{parentName:"p"},"admin")," and password ",Object(a.b)("inlineCode",{parentName:"p"},"admin"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"To develop the frontend we recommend reading through the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./frontend"}),"frontend")," doc. This includes a faster way to run Stratos and see your changes.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Additional back end docs are available ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./backend"}),"here")," before making any changes to the code.")))}u.isMDXComponent=!0},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),u=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,m=b["".concat(i,".").concat(s)]||b[s]||p[s]||a;return n?o.a.createElement(m,c(c({ref:t},d),{},{components:n})):o.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);