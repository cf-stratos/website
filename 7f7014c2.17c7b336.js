(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),i=(n(0),n(234)),a={id:"troubleshooting",title:"General Troubleshooting",sidebar_label:"Troubleshooting"},c={unversionedId:"deploy/troubleshooting",id:"version-4.1.0/deploy/troubleshooting",isDocsHomePage:!1,title:"General Troubleshooting",description:"Deploying as a Cloud Foundry Application",source:"@site/versioned_docs/version-4.1.0/deploy/troubleshooting.md",permalink:"/docs/4.1.0/deploy/troubleshooting",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/versioned_docs/version-4.1.0/deploy/troubleshooting.md",version:"4.1.0",sidebar_label:"Troubleshooting",sidebar:"version-4.1.0/docs",previous:{title:"Accessing Stratos",permalink:"/docs/4.1.0/deploy/access"},next:{title:"Configuring Invite User Support",permalink:"/docs/4.1.0/advanced/invite-user-guide"}},l=[{value:"Deploying as a Cloud Foundry Application",id:"deploying-as-a-cloud-foundry-application",children:[]},{value:"Usernames appear as long random characters when connected to IBM Cloud",id:"usernames-appear-as-long-random-characters-when-connected-to-ibm-cloud",children:[{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"deploying-as-a-cloud-foundry-application"},"Deploying as a Cloud Foundry Application"),Object(i.b)("p",null,"See the custom troubleshooting guide ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"cloud-foundry/cf-troubleshooting"}),"here"),"."),Object(i.b)("h2",{id:"usernames-appear-as-long-random-characters-when-connected-to-ibm-cloud"},"Usernames appear as long random characters when connected to IBM Cloud"),Object(i.b)("h3",{id:"problem"},"Problem"),Object(i.b)("p",null,"Connecting to an IBM Cloud with the address ",Object(i.b)("inlineCode",{parentName:"p"},"https://api.<custom region>.bluemix.net")," avoids a proxy, ",Object(i.b)("inlineCode",{parentName:"p"},"https://mccp.<custom region>.bluemix.net"),",\nthat IBM tools use to flesh out users with their username. This results in a missing ",Object(i.b)("inlineCode",{parentName:"p"},"username")," field, which we fill with the user's ",Object(i.b)("inlineCode",{parentName:"p"},"guid"),"\ninstead. "),Object(i.b)("h3",{id:"solution"},"Solution"),Object(i.b)("p",null,"Unregister the IBM Cloud endpoint that contains the address ",Object(i.b)("inlineCode",{parentName:"p"},"https://api.<custom region>.bluemix.net")," and register again with the address\n",Object(i.b)("inlineCode",{parentName:"p"},"https://mccp.<custom region>.bluemix.net")))}u.isMDXComponent=!0},234:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);