(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(314)),i={title:"Configuring Single Sign On",sidebar_label:"Configuring Single Sign On"},l={unversionedId:"advanced/sso",id:"advanced/sso",isDocsHomePage:!1,title:"Configuring Single Sign On",description:"By default, Stratos will authenticate against a UAA using username and password, for both logging into Stratos and when connecting Cloud Foundry endpoints.",source:"@site/docs/advanced/sso.md",permalink:"/docs/next/advanced/sso",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/docs/advanced/sso.md",version:"next",sidebar_label:"Configuring Single Sign On",sidebar:"docs",previous:{title:"Helm Endpoints",permalink:"/docs/next/endpoints/helm"},next:{title:"Contributing",permalink:"/docs/next/developer/contributing"}},c=[{value:"Adding the Stratos SSO Callback URI",id:"adding-the-stratos-sso-callback-uri",children:[]},{value:"Adding a Stratos SSO State Allow-list",id:"adding-a-stratos-sso-state-allow-list",children:[]},{value:"Advanced Configuration",id:"advanced-configuration",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"By default, Stratos will authenticate against a UAA using username and password, for both logging into Stratos and when connecting Cloud Foundry endpoints."),Object(o.b)("p",null,"UAA can support richer login mechanisms than username and password. To accommodate this, you can configure Stratos to use the UAA's Single Sign On UI for login."),Object(o.b)("p",null,"This can be enabled by setting the config setting SSO_LOGIN to true."),Object(o.b)("p",null,"Most importantly, you will need to ensure that the Client used when communicating with your UAA is configured to allow Stratos to use Single Sign On - i.e. that the Stratos SSO Login callback URI is registered with the UAA."),Object(o.b)("h2",{id:"adding-the-stratos-sso-callback-uri"},"Adding the Stratos SSO Callback URI"),Object(o.b)("p",null,"You'll need the ",Object(o.b)("inlineCode",{parentName:"p"},"uaac")," CLI to configure your Client to accept the Stratos SSO Callback URI - see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/cloudfoundry/cf-uaac"}),"here"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"NOTE: The Stratos SSO Redirect URI that you'll need is:\n",Object(o.b)("inlineCode",{parentName:"p"},"https://HOST.DOMAIN/pp/v1/auth/sso_login_callback"),"\nwhere ",Object(o.b)("inlineCode",{parentName:"p"},"HOST")," and ",Object(o.b)("inlineCode",{parentName:"p"},"DOMAIN")," depend on your Stratos installation.")),Object(o.b)("p",null,"Target your UAA"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"uaac target <UAA URL>\n")),Object(o.b)("p",null,"Login to your UAA with the ",Object(o.b)("inlineCode",{parentName:"p"},"admin")," client:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"uaac token client get admin -s <ADMIN_CLIENT_SECRET>\n")),Object(o.b)("p",null,"Next, check the configuration of your Client - for example, for the ",Object(o.b)("inlineCode",{parentName:"p"},"cf")," client:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"uaac client get cf\n")),Object(o.b)("p",null,"You'll get the current configuration - there are two properties of interest ",Object(o.b)("inlineCode",{parentName:"p"},"redirect_uri")," and ",Object(o.b)("inlineCode",{parentName:"p"},"authorized_grant_types"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: The following commands will overwrite existing values for the settings specified. To keep the existing values along with the new value include them in the new value as a comma-separated list.")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"redirect_uri")," value should contain the Stratos redirect URI. If not update the Client with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"uaac client update cf --redirect_uri https://HOST.DOMAIN/pp/v1/auth/sso_login_callback\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"authorized_grant_types")," value should contain ",Object(o.b)("inlineCode",{parentName:"p"},"authorization_code"),". If not update the Client with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"uaac client update cf --authorized_grant_types authorization_code\n")),Object(o.b)("h2",{id:"adding-a-stratos-sso-state-allow-list"},"Adding a Stratos SSO State Allow-list"),Object(o.b)("p",null,"When SSO has been configured Stratos's log in request will contain a URL that tells SSO where to return to. When using a browser this is automatically populated. To avoid situations where this can be hijacked or called separately an SSO ",Object(o.b)("inlineCode",{parentName:"p"},"state")," allow-list can be provided via the environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"SSO_ALLOWLIST"),". This is a comma separated list. For example..."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"SSO_ALLOWLIST=https://your.domain/*\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"SSO_ALLOWLIST=https://your.domain/*,https://your.other.domain/*\n")),Object(o.b)("p",null,"When set, any requests to log in with a different ",Object(o.b)("inlineCode",{parentName:"p"},"state")," will be denied."),Object(o.b)("p",null,"In order for the SSO ",Object(o.b)("inlineCode",{parentName:"p"},"state")," to match an entry from the allow-list the schema, hostname, port and path must match exactly. A wildcard ",Object(o.b)("inlineCode",{parentName:"p"},"*")," can be provided for the path to match anything."),Object(o.b)("h2",{id:"advanced-configuration"},"Advanced Configuration"),Object(o.b)("p",null,"Further configuration of SSO is provided through the ",Object(o.b)("inlineCode",{parentName:"p"},"SSO_OPTIONS")," environment variable."),Object(o.b)("p",null,"Setting this variable to ",Object(o.b)("inlineCode",{parentName:"p"},"nosplash")," will skip the need for users to press the Login button - users will jump straight to the configured SSO endpoint when accessing Stratos instead of first seeing the Stratos login page."),Object(o.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"User has selected the incorrect application authorities when logging in to Stratos via SSO for the first time."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The user can update their permissions and other account settings via ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://login."}),"https://login."),"< uaa address >/profile"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Administrator wants to remove the application authorities selection users see when logging in to Stratos via SSO for the first time"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"This is carried out at the Admins discretion")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Using the ",Object(o.b)("inlineCode",{parentName:"p"},"uaac")," cli update the 'autoapprove' property of the client used by Stratos to either ",Object(o.b)("inlineCode",{parentName:"p"},"true")," for all authorities or a comma separated list for the authorities to be removed."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"uaac client update <console client> --autoapprove true\n"))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"User sees the error message ",Object(o.b)("inlineCode",{parentName:"p"},"No scopes were granted")," when trying to log in to Stratos via SSO"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"User may not have selected any of the application authorities when logging in to Stratos via SSO for the first time"),Object(o.b)("li",{parentName:"ul"},"Either of the resolutions to 1 and 2 can be made")))))}p.isMDXComponent=!0},314:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(h,l(l({ref:t},s),{},{components:n})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);