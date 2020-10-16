(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(2),r=n(6),a=(n(0),n(234)),l={id:"access",title:"Accessing Stratos",sidebar_label:"Accessing Stratos"},i={unversionedId:"deploy/access",id:"version-4.1.0/deploy/access",isDocsHomePage:!1,title:"Accessing Stratos",description:"Depending on the deployment mode, you may require access to an UAA. Stratos also has the option to configure a local user account which removes the need for a UAA in non-Cloud Foundry deployments.",source:"@site/versioned_docs/version-4.1.0/deploy/access.md",permalink:"/docs/4.1.0/deploy/access",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/versioned_docs/version-4.1.0/deploy/access.md",version:"4.1.0",sidebar_label:"Accessing Stratos",sidebar:"version-4.1.0/docs",previous:{title:"Deploying with the All-In-One Docker Container",permalink:"/docs/4.1.0/deploy/all-in-one"},next:{title:"General Troubleshooting",permalink:"/docs/4.1.0/deploy/troubleshooting"}},c=[{value:"Cloud Foundry deployment",id:"cloud-foundry-deployment",children:[]},{value:"Kubernetes deployment",id:"kubernetes-deployment",children:[]},{value:"Docker, single container deployment",id:"docker-single-container-deployment",children:[]},{value:"Console Login",id:"console-login",children:[{value:"Log in to Stratos With UAA",id:"log-in-to-stratos-with-uaa",children:[]},{value:"Log in to Stratos with local user account",id:"log-in-to-stratos-with-local-user-account",children:[]},{value:"Quickly setting up a UAA for development",id:"quickly-setting-up-a-uaa-for-development",children:[]}]}],s={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Depending on the deployment mode, you may require access to an UAA. Stratos also has the option to configure a local user account which removes the need for a UAA in non-Cloud Foundry deployments."),Object(a.b)("h2",{id:"cloud-foundry-deployment"},"Cloud Foundry deployment"),Object(a.b)("p",null,"In a Cloud Foundry deployment, the Console will be configured to use the UAA used by the Cloud Foundry instance.\nTherefore, the login credentials will be the CF credentials for the user. A Cloud Foundry administrator (a user with the ",Object(a.b)("inlineCode",{parentName:"p"},"cloud_controller.admin")," scope) will also be a Console administrator."),Object(a.b)("h2",{id:"kubernetes-deployment"},"Kubernetes deployment"),Object(a.b)("p",null,"In a Kubernetes deployment using Helm, no UAA instance is deployed. Users have the choice to either provide their own UAA to authenticate against, or alternatively Stratos may be configured at deployment, to use a local user account."),Object(a.b)("h2",{id:"docker-single-container-deployment"},"Docker, single container deployment"),Object(a.b)("p",null,"The single container deployment does not contain a UAA. The instructions specified for a Kubernetes deployment apply to this, including the local user account option."),Object(a.b)("h2",{id:"console-login"},"Console Login"),Object(a.b)("h3",{id:"log-in-to-stratos-with-uaa"},"Log in to Stratos With UAA"),Object(a.b)("p",null,"The Console will start in a setup mode and users will be need to provide the following to complete the setup:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"UAA Endpoint"),Object(a.b)("li",{parentName:"ol"},"Is SSL Validation should be enforced"),Object(a.b)("li",{parentName:"ol"},"Username and password for a user who has required Console administrator scope"),Object(a.b)("li",{parentName:"ol"},"The UAA Client ID and client secret")),Object(a.b)("p",null,"Once the user provides this information, the user will be able to select the scope which should be used to identify a Console admin."),Object(a.b)("h3",{id:"log-in-to-stratos-with-local-user-account"},"Log in to Stratos with local user account"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Helm deployment")),Object(a.b)("p",null,"With local user account configured, the console will present the login screen on startup. Log in with username: ",Object(a.b)("inlineCode",{parentName:"p"},"admin"),", and the password you configured in the Stratos deployment command. The local user account has admin permissions."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Docker, single container deployment")),Object(a.b)("p",null,"Log in to the console using the local user credentials you configured when building/deploying the container."),Object(a.b)("h3",{id:"quickly-setting-up-a-uaa-for-development"},"Quickly setting up a UAA for development"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"We will setup two containers that are linked to each other")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"$ docker network create --driver=bridge dev-bridge\n")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Bring up the single container Console")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"$ docker run -p 4443:443 --net=dev-bridge splatform/stratos --name console\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Bring up the UAA")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"$ docker run --net=dev-bridge --name=uaa --rm splatform/stratos-uaa\n")),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Access the Console at ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:4443/")," and provide the following information:\nUAA Endpoint API URL:  ",Object(a.b)("inlineCode",{parentName:"p"},"http://uaa:8080"),"\nClient ID: ",Object(a.b)("inlineCode",{parentName:"p"},"console"),"\nClient Secret: Leave this blank\nAdmin Account: ",Object(a.b)("inlineCode",{parentName:"p"},"admin"),"\nPassword: ",Object(a.b)("inlineCode",{parentName:"p"},"hscadmin"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click enter and select the following from the list:\n",Object(a.b)("inlineCode",{parentName:"p"},"stratos.admon"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The Console is now ready to be used"))))}d.isMDXComponent=!0},234:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=o,m=u["".concat(l,".").concat(b)]||u[b]||p[b]||a;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);