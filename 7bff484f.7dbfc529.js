(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(274)),i={id:"disable-packages",title:"Remove Stratos Packages",sidebar_label:"Remove Packages"},c={unversionedId:"extensions/disable-packages",id:"version-4.2.0/extensions/disable-packages",isDocsHomePage:!1,title:"Remove Stratos Packages",description:"Frontend packages and their associated backend plugins can be removed at build time via configuration.",source:"@site/versioned_docs/version-4.2.0/extensions/disable-packages.md",permalink:"/docs/4.2.0/extensions/disable-packages",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/versioned_docs/version-4.2.0/extensions/disable-packages.md",version:"4.2.0",sidebar_label:"Remove Packages",sidebar:"version-4.2.0/docs",previous:{title:"Extending Stratos",permalink:"/docs/4.2.0/extensions/introduction"},next:{title:"Migrating to V4",permalink:"/docs/4.2.0/extensions/v4-migration"}},s=[{value:"Frontend Package to Backend Plugin Dependencies",id:"frontend-package-to-backend-plugin-dependencies",children:[]},{value:"Remove via stratos.yaml",id:"remove-via-stratosyaml",children:[]},{value:"Remove via environment variable",id:"remove-via-environment-variable",children:[]},{value:"Remove by deletion",id:"remove-by-deletion",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Frontend packages and their associated backend plugins can be removed at build time via configuration."),Object(o.b)("h2",{id:"frontend-package-to-backend-plugin-dependencies"},"Frontend Package to Backend Plugin Dependencies"),Object(o.b)("p",null,"Stratos NPM packages define a list of backend plugins that they require in order to function. These are found in the package's ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," in\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"stratos")," section ",Object(o.b)("inlineCode",{parentName:"p"},"backend")," property. For instance the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/cloudfoundry/stratos/blob/master/src/frontend/packages/cloud-foundry/package.json"}),"Stratos Cloud Foundry"),"\npackage depends on multiple backend plugins."),Object(o.b)("p",null,"If a backend package is not referenced by a package that is built and is not in the 'default' plugins ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/cloudfoundry/stratos/blob/master/src/jetstream/default_plugins.go"}),"list"),"\nthen it will not be included in the backend build. Therefore omitting a frontend package will also most likely remove it's dependent plugins."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"To ensure backend plugins are excluded correctly the npm target ",Object(o.b)("inlineCode",{parentName:"p"},"prepare-backend")," should run before building the backend the usual way with\n",Object(o.b)("inlineCode",{parentName:"p"},"build-backend"),". If pushing Stratos to Cloud Foundry this step will be completed automatically after ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," runs within the buildpack."))),Object(o.b)("h2",{id:"remove-via-stratosyaml"},"Remove via stratos.yaml"),Object(o.b)("p",null,"Frontend packages can be removed from the build by adding them to the ",Object(o.b)("inlineCode",{parentName:"p"},"excludes")," section of ",Object(o.b)("inlineCode",{parentName:"p"},"./stratos.yaml"),". For example, to exclude\nkubernetes and associated features add the kubernetes package to the excludes section before Stratos builds."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"packages:\n  exclude:\n    - '@stratosui/kubernetes'\n")),Object(o.b)("h2",{id:"remove-via-environment-variable"},"Remove via environment variable"),Object(o.b)("p",null,"Similarly to adding to the exclude section in stratos.yaml, added a frontend package to the ",Object(o.b)("inlineCode",{parentName:"p"},"STRATOS_BUILD_REMOVE")," environment variable will\nachieve the same outcome but easier to use when pushing Stratos to Cloud Foundry. For instance updating the env section of your ",Object(o.b)("inlineCode",{parentName:"p"},"manifest.yml"),"\nfile as follows will exclude kubernetes and associated features from the build."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'applications:\n  - name: console\n    <snip>\n    env:\n      STRATOS_BUILD_REMOVE: "@stratosui/kubernetes"\n')),Object(o.b)("h2",{id:"remove-by-deletion"},"Remove by deletion"),Object(o.b)("p",null,"Functionality can be removed by simply deleting the package from the folder structure. This should have the same effect as both methods above,\nincluding automatically excluding any unreferences backend plugins."))}d.isMDXComponent=!0},274:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||p[u]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);