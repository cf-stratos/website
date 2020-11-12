(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{106:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(6),i=(t(0),t(314)),a={title:"Cloud Foundry Endpoints",sidebar_label:"Introduction"},c={unversionedId:"endpoints/cf/cf",id:"version-4.3.0/endpoints/cf/cf",isDocsHomePage:!1,title:"Cloud Foundry Endpoints",description:"Cloud Foundry is the industry-standard open source cloud application platform for developing and deploying",source:"@site/versioned_docs/version-4.3.0/endpoints/cf/cf.md",permalink:"/docs/endpoints/cf/cf",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/versioned_docs/version-4.3.0/endpoints/cf/cf.md",version:"4.3.0",sidebar_label:"Introduction",sidebar:"version-4.3.0/docs",previous:{title:"Stratos Endpoints",permalink:"/docs/endpoints/introduction"},next:{title:"Configuring Invite User Support",permalink:"/docs/endpoints/cf/invite-user-guide"}},d=[{value:"Registering a Cloud Foundry Endpoint",id:"registering-a-cloud-foundry-endpoint",children:[]},{value:"Connecting to a Cloud Foundry Endpoint",id:"connecting-to-a-cloud-foundry-endpoint",children:[]}],l={rightToc:d};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.cloudfoundry.org/"}),"Cloud Foundry")," is the industry-standard open source cloud application platform for developing and deploying\nenterprise cloud applications. "),Object(i.b)("p",null,"Stratos provides easy access to many of Cloud Foundry's features such as"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Browsing, deploying and managing applications"),Object(i.b)("li",{parentName:"ol"},"Browsing services, and creating and managing service instances"),Object(i.b)("li",{parentName:"ol"},"Managing Organisations and Spaces"),Object(i.b)("li",{parentName:"ol"},"User role management"),Object(i.b)("li",{parentName:"ol"},"... and much more")),Object(i.b)("h2",{id:"registering-a-cloud-foundry-endpoint"},"Registering a Cloud Foundry Endpoint"),Object(i.b)("p",null,"Stratos Administrator's can register endpoints via the Endpoints page."),Object(i.b)("p",null,"The CF API address must be supplied."),Object(i.b)("p",null,"The Client ID and Client Secret can usually be left blank (by default stratos will use ",Object(i.b)("inlineCode",{parentName:"p"},"cf")," as the client id). If you would like Stratos\nto communicate with the cf using a specific client enter them here."),Object(i.b)("p",null,"To allow the user to connect to the endpoint via SSO check the box. Some of the information in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../../advanced/sso"}),"Stratos SSO Guide"),"\nmay be helpful."),Object(i.b)("h2",{id:"connecting-to-a-cloud-foundry-endpoint"},"Connecting to a Cloud Foundry Endpoint"),Object(i.b)("p",null,"Simply navigate to the Endpoints page, find the Cloud Foundry endpoint, click connect and enter your Cloud Foundry username and password."))}u.isMDXComponent=!0},314:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=u(t),f=r,b=s["".concat(a,".").concat(f)]||s[f]||p[f]||i;return t?o.a.createElement(b,c(c({ref:n},l),{},{components:t})):o.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);