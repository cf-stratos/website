(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{271:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(354)),o={title:"Configuring Single Sign On",sidebar_label:"Configuring Single Sign On"},c={unversionedId:"advanced/sso",id:"version-4.3.0/advanced/sso",isDocsHomePage:!1,title:"Configuring Single Sign On",description:"By default, Stratos will authenticate against a UAA using username and password, for both logging into Stratos and when connecting Cloud Foundry endpoints.",source:"@site/versioned_docs/version-4.3.0/advanced/sso.md",permalink:"/docs/4.3.0/advanced/sso",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/versioned_docs/version-4.3.0/advanced/sso.md",version:"4.3.0",sidebar_label:"Configuring Single Sign On",sidebar:"version-4.3.0/docs",previous:{title:"Helm Endpoints",permalink:"/docs/4.3.0/endpoints/helm"},next:{title:"Contributing",permalink:"/docs/4.3.0/developer/contributing"}},l=[{value:"Adding the Stratos SSO Callback URI",id:"adding-the-stratos-sso-callback-uri",children:[]},{value:"Adding a Stratos SSO State Whitelist",id:"adding-a-stratos-sso-state-whitelist",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"By default, Stratos will authenticate against a UAA using username and password, for both logging into Stratos and when connecting Cloud Foundry endpoints."),Object(i.b)("p",null,"UAA can support richer login mechanisms than username and password. To accommodate this, you can configure Stratos to use the UAA's Single Sign On UI for login."),Object(i.b)("p",null,"This can be enabled by setting the config setting SSO_LOGIN to true."),Object(i.b)("p",null,"Most importantly, you will need to ensure that the Client used when communicating with your UAA is configured to allow Stratos to use Single Sign On - i.e. that the Stratos SSO Login callback URI is registered with the UAA."),Object(i.b)("h2",{id:"adding-the-stratos-sso-callback-uri"},"Adding the Stratos SSO Callback URI"),Object(i.b)("p",null,"You'll need the ",Object(i.b)("inlineCode",{parentName:"p"},"uaac")," CLI to configure your Client to accept the Stratos SSO Callback URI - see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/cloudfoundry/cf-uaac"}),"here"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"NOTE: The Stratos SSO Redirect URI that you'll need is:\n",Object(i.b)("inlineCode",{parentName:"p"},"https://HOST.DOMAIN/pp/v1/auth/sso_login_callback"),"\nwhere ",Object(i.b)("inlineCode",{parentName:"p"},"HOST")," and ",Object(i.b)("inlineCode",{parentName:"p"},"DOMAIN")," depend on your Stratos installation.")),Object(i.b)("p",null,"Target your UAA"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"uaac target <UAA URL>\n")),Object(i.b)("p",null,"Login to your UAA with the ",Object(i.b)("inlineCode",{parentName:"p"},"admin")," client:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"uaac token client get admin -s <ADMIN_CLIENT_SECRET>\n")),Object(i.b)("p",null,"Next, check the configuration of your Client - for example, for the ",Object(i.b)("inlineCode",{parentName:"p"},"cf")," client:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"uaac client get cf\n")),Object(i.b)("p",null,"You'll get the current configuration - there are two properties of interest ",Object(i.b)("inlineCode",{parentName:"p"},"redirect_uri")," and ",Object(i.b)("inlineCode",{parentName:"p"},"authorized_grant_types"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: The following commands will overwrite existing values for the settings specified. To keep the existing values along with the new value include them in the new value as a comma-separated list.")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"redirect_uri")," value should contain the Stratos redirect URI. If not update the Client with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"uaac client update cf --redirect_uri https://HOST.DOMAIN/pp/v1/auth/sso_login_callback\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"authorized_grant_types")," value should contain ",Object(i.b)("inlineCode",{parentName:"p"},"authorization_code"),". If not update the Client with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"uaac client update cf --authorized_grant_types authorization_code\n")),Object(i.b)("h2",{id:"adding-a-stratos-sso-state-whitelist"},"Adding a Stratos SSO State Whitelist"),Object(i.b)("p",null,"When SSO has been configured Stratos's log in request will contain a URL that tells SSO where to return to. When using a browser this is automatically populated. To avoid situations where this can be hijacked or called separately an SSO ",Object(i.b)("inlineCode",{parentName:"p"},"state")," whitelist can be provided via the environment variable ",Object(i.b)("inlineCode",{parentName:"p"},"SSO_WHITELIST"),". This is a comma separated list. For example..."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"SSO_WHITELIST=https://your.domain/*\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"SSO_WHITELIST=https://your.domain/*,https://your.other.domain/*\n")),Object(i.b)("p",null,"When set, any requests to log in with a different ",Object(i.b)("inlineCode",{parentName:"p"},"state")," will be denied."),Object(i.b)("p",null,"In order for the SSO ",Object(i.b)("inlineCode",{parentName:"p"},"state")," to match an entry from the whitelist the schema, hostname, port and path must match exactly. A wildcard ",Object(i.b)("inlineCode",{parentName:"p"},"*")," can be provided for the path to match anything."),Object(i.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"User has selected the incorrect application authorities when logging in to Stratos via SSO for the first time."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The user can update their permissions and other account settings via ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://login."}),"https://login."),"< uaa address >/profile"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Administrator wants to remove the application authorities selection users see when logging in to Stratos via SSO for the first time"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"This is carried out at the Admins discretion")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Using the ",Object(i.b)("inlineCode",{parentName:"p"},"uaac")," cli update the 'autoapprove' property of the client used by Stratos to either ",Object(i.b)("inlineCode",{parentName:"p"},"true")," for all authorities or a comma separated list for the authorities to be removed."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"uaac client update <console client> --autoapprove true\n"))))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"User sees the error message ",Object(i.b)("inlineCode",{parentName:"p"},"No scopes were granted")," when trying to log in to Stratos via SSO"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"User may not have selected any of the application authorities when logging in to Stratos via SSO for the first time"),Object(i.b)("li",{parentName:"ul"},"Either of the resolutions to 1 and 2 can be made")))))}p.isMDXComponent=!0},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,h=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(h,c(c({ref:t},s),{},{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);