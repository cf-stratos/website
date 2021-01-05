(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(6),a=(n(0),n(354)),i={id:"overview",title:"Stratos Overview",sidebar_label:"Overview"},s={unversionedId:"overview",id:"version-4.4.0/overview",isDocsHomePage:!1,title:"Stratos Overview",description:"Stratos provides a web-based UI to allow developers and administrators to manage their applications and cloud foundry deployment(s).",source:"@site/versioned_docs/version-4.4.0/overview.md",permalink:"/docs/overview",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/versioned_docs/version-4.4.0/overview.md",version:"4.4.0",sidebar_label:"Overview",sidebar:"version-4.4.0/docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"License",permalink:"/docs/license"}},c=[{value:"Authentication",id:"authentication",children:[]}],l={rightToc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Stratos provides a web-based UI to allow developers and administrators to manage their applications and cloud foundry deployment(s)."),Object(a.b)("p",null,'It is designed to manage one or more Cloud Foundry deployments. It does so by managing "endpoints", where each endpoint is a reference to a Cloud Foundry deployment. The notion of an endpoint is not specific to Cloud Foundry, allowing Stratos to connect to other service types in the future.'),Object(a.b)("p",null,"Stratos stores endpoint metadata in a relational database. Administrators of Stratos are able to register (add) new endpoints to the Console. All users are able to then connect to these endpoints using their credentials, ensuring that they get the appropriate level of access when interacting with Cloud Foundry."),Object(a.b)("p",null,"The high-level architecture of Stratos is shown in the diagram below:"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/images/high-level-arch.png",alt:"Stratos High-Level Architecture"}))),Object(a.b)("p",null,"The main components:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Web UI - Single-page AngularJS web application providing the front-end that runs in the user's browser."),Object(a.b)("li",{parentName:"ul"},"API Server - Provides the back-end APIs that support the front-end UI. This API takes care of authentication, endpoint management and proxying API requests from the front-end to the desired back-end API."),Object(a.b)("li",{parentName:"ul"},"Endpoint Datastore - Relational database that stores the registered endpoints and the encrypted user access tokens.")),Object(a.b)("h2",{id:"authentication"},"Authentication"),Object(a.b)("p",null,"Stratos authenticates users using a Cloud Foundry UAA service. It must be configured with the details necessary to communicate with a UAA. When the user logs in to the Console, their login will be validated with the UAA. The Console uses a scope to identify Console administrators from regular users."),Object(a.b)("p",null,"Administrators use the 'Endpoints Dashboard' within the Console to add new endpoints to the Console. All users are then able to connect to these endpoints by providing their credentials. The Console will use these credentials to communicate with the UAA for the given endpoint (typically Cloud Foundry) and obtain a refresh and access token. These tokens are encrypted and stored in the Endpoint Datastore."),Object(a.b)("p",null,"When a user interacts with the Console and API requests need to be made to a given Cloud Foundry endpoint, these are sent to the API Server along with a custom http header which indicated which endpoint(s) the requests should be send to. The API Server will forward the request to the appropriate endpoints, first looking up the access and refresh tokens required to communicate with the endpoint(s). If any access token has expired, it will use the refresh token to obtain a new access token."))}d.isMDXComponent=!0},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,b=u["".concat(i,".").concat(h)]||u[h]||p[h]||a;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);