(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return s}));var r=n(2),i=n(6),a=(n(0),n(314)),o={title:"Backend Plugins",sidebar_label:"Backend Plugins"},l={unversionedId:"extensions/backend",id:"version-4.2.1/extensions/backend",isDocsHomePage:!1,title:"Backend Plugins",description:"This document provides a brief outline for extending the Stratos backend (Jetstream).",source:"@site/versioned_docs/version-4.2.1/extensions/backend.md",permalink:"/docs/4.2.1/extensions/backend",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/versioned_docs/version-4.2.1/extensions/backend.md",version:"4.2.1",sidebar_label:"Backend Plugins",sidebar:"version-4.2.1/docs",previous:{title:"Frontend Extensions",permalink:"/docs/4.2.1/extensions/frontend"}},d=[{value:"Middleware",id:"middleware",children:[]},{value:"Endpoint",id:"endpoint",children:[]},{value:"Routes",id:"routes",children:[]}],c={rightToc:d};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This document provides a brief outline for extending the Stratos backend (Jetstream)."),Object(a.b)("p",null,"Currently, to create an extension to the backend:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create a folder for your plugin, in the folder ",Object(a.b)("inlineCode",{parentName:"p"},"src/jetstream/plugins"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Edit ",Object(a.b)("inlineCode",{parentName:"p"},"src/jetstream/load_plugins.go")," and:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Add your plugin's package to the ",Object(a.b)("inlineCode",{parentName:"li"},"import")," block at the top of the file"),Object(a.b)("li",{parentName:"ul"},"Add your plugin to the list of plugins to be initialized in the ",Object(a.b)("inlineCode",{parentName:"li"},"loadPlugins")," function, e.g.")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),' {"myplugin", myplugin.Init},\n'))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Build Jetstream"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"There are a few plugins in the ",Object(a.b)("inlineCode",{parentName:"p"},"src/jetstream/plugins")," folder that should help serve as examples of how to write a plugin.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Jetstream uses the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://echo.labstack.com/"}),"Echo web server")," from Labstack - some familiarity with this is required when developing backend plugins."),Object(a.b)("h2",Object(r.a)({parentName:"blockquote"},{id:"plugin-interface"}),"Plugin Interface")),Object(a.b)("p",null,"All plugins must implement the interface ",Object(a.b)("inlineCode",{parentName:"p"},"interfaces.StratosPlugin")," - this is defined in ",Object(a.b)("inlineCode",{parentName:"p"},"src/jetstream/repository/interfaces/plugin.go"),"."),Object(a.b)("p",null,"A plugin can implement one or all of the following plugin interfaces - Middleware, Endpoint and Route."),Object(a.b)("p",null,"This interface defines 4 functions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"Init() error")," - This is called to initialize the plugin. If an error is returned then the plugin will not be added to the backend.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"GetMiddlewarePlugin() (MiddlewarePlugin, error)")," - Provides the middleware that this plugin wishes to add to Stratos, if any. Return an error if your plugin does not need to add middleware.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"GetEndpointPlugin() (EndpointPlugin, error)")," - Provides the endpoint that this plugin wishes to add to Stratos, if any. Return an error if your plugin does not need to add middleware.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"GetRoutePlugin() (RoutePlugin, error)")," - Provides the route that this plugin wishes to add to Stratos, if any. Return an error if your plugin does not need to add middleware."))),Object(a.b)("p",null,"Each of the three plugin interfaces are described below."),Object(a.b)("h3",{id:"middleware"},"Middleware"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"MiddlewarePlugin")," interface provides a plugin with a mechanism to add custom middleware to the Jetstream web server (Echo). This allows it to add upfront processing/filtering/handling of all API requests to the backend. There are two handlers that are required to be provided:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"EchoMiddleware")," - This is added as middleware to the echo web server for all requests that are not guarded by the session gate - i.e. requests that a non-logged-in user can access")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"SessionEchoMiddleware "),"- This is added as middleware to the echo web server for all requests that are  guarded by the session gate - i.e. requests that only a logged-in user can access"))),Object(a.b)("p",null,"This interface is defined in the file ",Object(a.b)("inlineCode",{parentName:"p"},"src/jetstream/repository/interfaces/general.go"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-golang"}),"type MiddlewarePlugin interface {\n    EchoMiddleware(middleware echo.HandlerFunc) echo.HandlerFunc\n    SessionEchoMiddleware(middleware echo.HandlerFunc) echo.HandlerFunc\n}\n")),Object(a.b)("h3",{id:"endpoint"},"Endpoint"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"EndpointPlugin")," should be used when a plugin wishes to add a new type of Endpoint. An example of this is the Metrics plugin in the folder ",Object(a.b)("inlineCode",{parentName:"p"},"src/jetstream/plugins/metrics"),"."),Object(a.b)("p",null,"This interface is defined in the file ",Object(a.b)("inlineCode",{parentName:"p"},"src/jetstream/repository/interfaces/endpoints.go"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-golang"}),"type EndpointPlugin interface {\n    Info(apiEndpoint string, skipSSLValidation bool) (CNSIRecord, interface{}, error)\n    GetType() string\n    Register(echoContext echo.Context) error\n    Connect(echoContext echo.Context, cnsiRecord CNSIRecord, userId string) (*TokenRecord, bool, error)\n    UpdateMetadata(info *Info, userGUID string, echoContext echo.Context)\n}\n")),Object(a.b)("p",null,"Adding a new Endpoint type is more involved than other plugin types and will be documented in more detail later."),Object(a.b)("p",null,"For now, briefly:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GetType"),' is used to return the endpoint type - a unique ID for the endpoint type - e.g. "metrics"'),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Info")," is used to obtain information for the given endpoint URL"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Register")," is called when the user wants to register a new Endpoint of this type"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Connect")," is called when the user wants to connect a new Endpoint of this type"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"UpdateMetadata")," is called when the ",Object(a.b)("inlineCode",{parentName:"li"},"info")," request is made to the backend and gives each endpoint plugin the opportunity to update the metadata returned. For example, in the case of metrics, the plugin will update endpoints to indicate which have metrics metadata available.")),Object(a.b)("h3",{id:"routes"},"Routes"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"RoutePlugin")," interface provides a plugin with a mechanism to add custom handlers to the Jetstream web server (Echo). This allows it to add any custom API processing. There are two handlers that are required to be provided:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"AddSessionGroupRoutes")," - This is added as a handler to the echo web server and is guarded so that only logged-in users can access.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"AddAdminGroupRoutes "),"- This is added as a handler to the echo web server and is guarded so that only logged-in users who are Stratos Administrators can access."))),Object(a.b)("p",null,"This interface is defined in the file ",Object(a.b)("inlineCode",{parentName:"p"},"src/jetstream/repository/interfaces/endpoints.go"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-golang"}),"type RoutePlugin interface {\n    AddSessionGroupRoutes(echoContext *echo.Group)\n    AddAdminGroupRoutes(echoContext *echo.Group)\n}\n")),Object(a.b)("p",null,"The primary purpose of the RoutePlugin is to add new APIs to Jetstream."),Object(a.b)("p",null,"All handlers are added under the ",Object(a.b)("inlineCode",{parentName:"p"},"/v1")," URL prefix."))}s.isMDXComponent=!0},314:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,m=p["".concat(o,".").concat(u)]||p[u]||b[u]||a;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);