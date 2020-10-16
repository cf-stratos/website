(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(194)),i={title:"Extending Stratos",sidebar_label:"Introduction"},c={unversionedId:"extensions/introduction",id:"extensions/introduction",isDocsHomePage:!1,title:"Extending Stratos",description:"Stratos can be customized in a number of ways. Colors and fonts can be updated to add unique branding, additional menu items can be added in a number of places, custom EULAs can be used, new Stratos Jetstream (backend) endpoints, and much more.",source:"@site/docs/extensions/introduction.md",permalink:"/docs/next/extensions/introduction",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/docs/extensions/introduction.md",version:"next",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Developer Links + Environment",permalink:"/docs/next/developer/developers-guide-env-tech"},next:{title:"Remove Stratos Packages",permalink:"/docs/next/extensions/disable-packages"}},s=[{value:"Approach",id:"approach",children:[{value:"Frontend",id:"frontend",children:[]},{value:"Backend (Jetstream)",id:"backend-jetstream",children:[]}]},{value:"Examples",id:"examples",children:[{value:"ACME",id:"acme",children:[]},{value:"SUSE",id:"suse",children:[]}]},{value:"Further Reading",id:"further-reading",children:[]}],u={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Stratos can be customized in a number of ways. Colors and fonts can be updated to add unique branding, additional menu items can be added in a number of places, custom EULAs can be used, new Stratos Jetstream (backend) endpoints, and much more."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"For those with existing customization migrating to 4.0 please see our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./v4-migration"}),"upgrade guide"),".")),Object(o.b)("h2",{id:"approach"},"Approach"),Object(o.b)("p",null,"In order to customize Stratos, you will need to fork the Stratos GitHub repository and apply customizations in your fork. Our aim is to minimize any merge conflicts that might occur when re-basing your fork with the upstream Stratos repository."),Object(o.b)("h3",{id:"frontend"},"Frontend"),Object(o.b)("p",null,"Frontend customizations are placed in angular packages in the folder named ",Object(o.b)("inlineCode",{parentName:"p"},"src/frontend/packages"),". In the future you will be able to host these packages in npm and bring them into Stratos in the usual npm dependency way. There are no additional processes or build steps required for Stratos to then integrate these packages. All steps will be automatically applied under the hood during ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," and when ",Object(o.b)("inlineCode",{parentName:"p"},"ng build"),"/",Object(o.b)("inlineCode",{parentName:"p"},"ng serve")," runs."),Object(o.b)("p",null,"Information on custom theming can be found in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./theming"}),"theming page"),"."),Object(o.b)("p",null,"Information on additional functionality can be found in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./frontend"}),"extensions page"),"."),Object(o.b)("h3",{id:"backend-jetstream"},"Backend (Jetstream)"),Object(o.b)("p",null,"Jetstream customizations are written in go and can be added in ",Object(o.b)("inlineCode",{parentName:"p"},"src/jetstream/plugins"),". In the future we hope to combine this work with the frontend changes, such that all functionality for\na feature can be applied to Stratos in a similar way."),Object(o.b)("p",null,"More information can be found in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./backend"}),"custom plugins page"),"."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"acme"},"ACME"),Object(o.b)("p",null,"The ACME example contains a number of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/cloudfoundry/stratos/tree/master/src/frontend/packages/example-theme"}),"theming")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/cloudfoundry/stratos/tree/master/src/frontend/packages/example-extensions"}),"functionality")," customization."),Object(o.b)("p",null,"To run Stratos with these customizations"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Include the example packages (by default these are excluded). Do this by...",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Creating the file ",Object(o.b)("inlineCode",{parentName:"li"},"stratos.yaml")," in the root of the repo"),Object(o.b)("li",{parentName:"ol"},"Adding the following content to ",Object(o.b)("inlineCode",{parentName:"li"},"stratos.yaml"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"packages:\n  include:\n    - '@stratosui/core'\n    - '@stratosui/shared'\n    - '@stratosui/store'\n    - '@stratosui/cloud-foundry'\n    - '@stratosui/cf-autoscaler'\n    - '@stratosui/theme'\n    - '@example/extensions'\n    - '@example/theme'\n"))))),Object(o.b)("li",{parentName:"ol"},"Run Stratos the usual way, for more information see the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"../developer/introduction"}),"Developer Guide"),".")),Object(o.b)("h3",{id:"suse"},"SUSE"),Object(o.b)("p",null,"More advanced, real world examples can be found the in SUSE Stratos repository, again containing ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/SUSE/stratos/tree/master/src/frontend/packages/suse-theme"}),"theming")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/SUSE/stratos/tree/master/src/frontend/packages/suse-extensions"}),"functionality")," customizations."),Object(o.b)("p",null,"To run Stratos with these customizations simply start the console the usual way from that repo, for more information see the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../developer/introduction"}),"Developer Guide"),"."),Object(o.b)("h2",{id:"further-reading"},"Further Reading"),Object(o.b)("p",null,"Detailed instructions on how to customize the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./theming"}),"theme"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./frontend"}),"frontend functionality")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./backend"}),"backend")," can be found in this section."))}l.isMDXComponent=!0},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=a,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return n?r.a.createElement(m,c(c({ref:t},u),{},{components:n})):r.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);