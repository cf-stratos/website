(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(146)),i={id:"troubleshooting",title:"General Troubleshooting",sidebar_label:"Troubleshooting"},c={id:"deploy/troubleshooting",isDocsHomePage:!1,title:"General Troubleshooting",description:"Deploying as a Cloud Foundry Application",source:"@site/docs/deploy/troubleshooting.md",permalink:"/docs/deploy/troubleshooting",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/docs/deploy/troubleshooting.md",sidebar_label:"Troubleshooting",sidebar:"docs",previous:{title:"Accessing Stratos",permalink:"/docs/deploy/access"},next:{title:"Configuring Invite User Support",permalink:"/docs/advanced/invite-user-guide"}},l=[{value:"Deploying as a Cloud Foundry Application",id:"deploying-as-a-cloud-foundry-application",children:[]},{value:"Usernames appear as long random characters when connected to IBM Cloud",id:"usernames-appear-as-long-random-characters-when-connected-to-ibm-cloud",children:[{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[]}]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"deploying-as-a-cloud-foundry-application"},"Deploying as a Cloud Foundry Application"),Object(a.b)("p",null,"See the custom troubleshooting guide ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../../deploy/cloud-foundry#troubleshooting"}),"here"),"."),Object(a.b)("h2",{id:"usernames-appear-as-long-random-characters-when-connected-to-ibm-cloud"},"Usernames appear as long random characters when connected to IBM Cloud"),Object(a.b)("h3",{id:"problem"},"Problem"),Object(a.b)("p",null,"Connecting to an IBM Cloud with the address ",Object(a.b)("inlineCode",{parentName:"p"},"https://api.<custom region>.bluemix.net")," avoids a proxy, ",Object(a.b)("inlineCode",{parentName:"p"},"https://mccp.<custom region>.bluemix.net"),",\nthat IBM tools use to flesh out users with their username. This results in a missing ",Object(a.b)("inlineCode",{parentName:"p"},"username")," field, which we fill with the user's ",Object(a.b)("inlineCode",{parentName:"p"},"guid"),"\ninstead. "),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("p",null,"Unregister the IBM Cloud endpoint that contains the address ",Object(a.b)("inlineCode",{parentName:"p"},"https://api.<custom region>.bluemix.net")," and register again with the address\n",Object(a.b)("inlineCode",{parentName:"p"},"https://mccp.<custom region>.bluemix.net")))}s.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);