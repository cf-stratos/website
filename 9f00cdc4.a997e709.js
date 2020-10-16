(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(2),a=n(6),r=(n(0),n(234)),i={id:"cloud-foundry",title:"Deploying as a Cloud Foundry Application",sidebar_label:"Deploy as an Application"},l={unversionedId:"deploy/cloud-foundry/cloud-foundry",id:"deploy/cloud-foundry/cloud-foundry",isDocsHomePage:!1,title:"Deploying as a Cloud Foundry Application",description:"In this case, Stratos is deployed in a manner optimized for the management of a single Cloud Foundry instance. The 'Endpoints Dashboard' that allows multiple Cloud Foundry endpoints to be registered is not deployed. An extra component is deployed that detects that the Console is running as Cloud Foundry which does the following:",source:"@site/docs/deploy/cloud-foundry/cloud-foundry.md",permalink:"/docs/next/deploy/cloud-foundry/cloud-foundry",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/docs/deploy/cloud-foundry/cloud-foundry.md",version:"next",sidebar_label:"Deploy as an Application",sidebar:"docs",previous:{title:"Deploying Stratos",permalink:"/docs/next/deploy/overview"},next:{title:"Associate a Cloud Foundry database service",permalink:"/docs/next/deploy/cloud-foundry/db-migration"}},s=[{value:"Deployment Steps",id:"deployment-steps",children:[{value:"Running Stratos in Production Environments",id:"running-stratos-in-production-environments",children:[]},{value:"Deploy Stratos from source",id:"deploy-stratos-from-source",children:[]},{value:"Deploy Stratos from docker image",id:"deploy-stratos-from-docker-image",children:[]}]},{value:"Associate Cloud Foundry database service",id:"associate-cloud-foundry-database-service",children:[]},{value:"Use SSO Login",id:"use-sso-login",children:[]}],c={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this case, Stratos is deployed in a manner optimized for the management of a single Cloud Foundry instance. The 'Endpoints Dashboard' that allows multiple Cloud Foundry endpoints to be registered is not deployed. An extra component is deployed that detects that the Console is running as Cloud Foundry which does the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Automatically detects the Cloud Foundry endpoint and located the UAA Endpoint to use for authentication"),Object(r.b)("li",{parentName:"ul"},"Authenticates directly against the UAA for the Clound Foundry where the Console is deployed and assumes that Cloud Foundry admins are also Console admins (the UAA Scope 'cloud_controller.admin' is used to identify admins)"),Object(r.b)("li",{parentName:"ul"},"Uses a SQLite database rather than Postgres"),Object(r.b)("li",{parentName:"ul"},"Automatically connects to the Cloud Foundry endpoint when a user logs in to simplify the user flow when using the Console in this case")),Object(r.b)("p",null,"In this case, the front-end web application static resources are served by the API Server back-end rather than a separate web server."),Object(r.b)("p",null,"By default, a non-persistent SQLite database is used - by automatically registering the cloud foundry endpoint and connecting to it on login, all data stored in the database can be treated as ephemeral, since it will be re-created next time a user logs in. Cloud Foundry Session Affinity is used to ensure that when scaling up the Console Application to multiple instances, the user is also directed to the instance which will know about them and their endpoints (since each Application instance will have its own local SQLite store)."),Object(r.b)("p",null,"Alternatively, Stratos can be configured ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"db-migration"}),"with a persistent Cloud Foundry database service"),", which enables features requiring persistence such as user favorites."),Object(r.b)("h2",{id:"deployment-steps"},"Deployment Steps"),Object(r.b)("p",null,"Stratos can be pushed as an application to Cloud Foundry. "),Object(r.b)("p",null,"You can do it in two ways:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#deploy-stratos-from-source"}),"Deploy Stratos from source")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#deploy-stratos-from-docker-image"}),"Deploy Stratos from docker image"))),Object(r.b)("p",null,"You will then be able to open a web browser and navigate to the console URL:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"https://console.<DOMAIN>")),Object(r.b)("p",null,"Where ",Object(r.b)("inlineCode",{parentName:"p"},"<DOMAIN>")," is the default domain configured for your Cloud Foundry cluster."),Object(r.b)("p",null,"To login use the following credentials detailed ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"../access"}),"here"),"."),Object(r.b)("p",null,"If you run into issues, please refer to the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"cf-troubleshooting"}),"Troubleshooting Guide")," below."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The console will pre-configure the host Cloud Foundry endpoint. No other CF instance should be registered unless the instructions in\nthe section ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#associate-cloud-foundry-database-service"}),"Associate Cloud Foundry database service")," are followed.\nAll other deployment methods (helm, docker all-in-one, etc) allow the registration of multiple CF instances by default.")),Object(r.b)("p",null,"Note:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"You need the cf CLI command line tool installed and available on the path."),Object(r.b)("li",{parentName:"ol"},"You need to have configured the cf cli to point to your Cloud Foundry cluster, to be authenticated with your credentials and to be targeted at the organization and space where you want the console application be created."),Object(r.b)("li",{parentName:"ol"},"You may need to configure Application Security Groups on your Cloud Foundry Cluster in order that  Stratos can communicate with the Cloud Foundry API. See ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#application-security-groups"}),"below")," for more information."),Object(r.b)("li",{parentName:"ol"},"The Stratos Console will automatically detect the API endpoint for your Cloud Foundry. To do so, it relies on the ",Object(r.b)("inlineCode",{parentName:"li"},"cf_api_url")," value inside the ",Object(r.b)("inlineCode",{parentName:"li"},"VCAP_APPLICATION")," environment variable. If this is not provided by your Cloud Foundry platform, then you must manually update the application manifest as described ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#console-fails-to-start"}),"below"),".")),Object(r.b)("h3",{id:"running-stratos-in-production-environments"},"Running Stratos in Production Environments"),Object(r.b)("p",null,"Please be aware of the following when running Stratos in a production environment:"),Object(r.b)("h4",{id:"configure-a-session-store-secret"},"Configure a Session Store Secret"),Object(r.b)("p",null,"Stratos uses a Session Store Secret to protect the user session cookie. We recommend that you set your own value for this secret - choosing an alphanumeric string of your choice."),Object(r.b)("p",null,"You can configure this secret by editing the application manifest and adding to the ",Object(r.b)("inlineCode",{parentName:"p"},"env")," section, e.g."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"applications:\n- name: console\n  ... memory, disk settings here\n  env:\n    SESSION_STORE_SECRET: <your session store secret here>\n")),Object(r.b)("h4",{id:"pre-configure-uaa-client-used-for-user-invites"},"Pre-configure UAA client used for user invites"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can skip this step and configure any CFs invite clients via the Stratos UI.")),Object(r.b)("p",null," To set the UAA client for user invites, supply the client id and client secret as environment variables as shown below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"INVITE_USER_CLIENT_ID=<UAA_CLIENT_ID>\nINVITE_USER_CLIENT_SECRET=<UAA_CLIENT_SECRET>\n")),Object(r.b)("p",null,"This will set the the UAA client and UAA secret used to invite users for the default CF only."),Object(r.b)("p",null,"See the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"../../endpoints/cf/invite-user-guide"}),"invite users guide")," for more information about user invites in Stratos."),Object(r.b)("h4",{id:"use-of-the-default-embedded-sqlite-database"},"Use of the Default Embedded SQLite Database"),Object(r.b)("p",null,"We do not recommend deploying Stratos to a production environment using the default embedded SQLite Database. Instead we recommend creating\nand binding a database service instance to Stratos - for more information see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"db-migration"}),"here"),"."),Object(r.b)("h3",{id:"deploy-stratos-from-source"},"Deploy Stratos from source"),Object(r.b)("p",null,"To do so, ",Object(r.b)("inlineCode",{parentName:"p"},"clone")," the ",Object(r.b)("strong",{parentName:"p"},"stratos")," repository, ",Object(r.b)("inlineCode",{parentName:"p"},"cd")," into the newly cloned repository and ",Object(r.b)("inlineCode",{parentName:"p"},"push")," to Cloud Foundry. This can be done with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"git clone https://github.com/cloudfoundry/stratos\ncd stratos\ngit checkout tags/stable -b stable\n./build/store-git-metadata.sh\ncf push\n")),Object(r.b)("p",null,"If the cf push exceeds the time allowed see the instructions ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#pre-building-the-ui"}),"here")),Object(r.b)("h4",{id:"pre-building-the-ui"},"Pre-building the UI"),Object(r.b)("p",null,"Due to the memory usage of the Angular compiler (see below), when deployed to Cloud Foundry via ",Object(r.b)("inlineCode",{parentName:"p"},"cf push"),", Stratos does not use AOT (Ahead-of-Time) compilation."),Object(r.b)("p",null,"If you wish to enable AOT or reduce the push time, you can pre-build the UI before pushing."),Object(r.b)("p",null,"This can be done with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"git clone https://github.com/cloudfoundry/stratos\ncd stratos\nnpm install\nnpm run prebuild-ui\ncf push\n")),Object(r.b)("p",null,"You will need a recent version of Node installed locally to do this."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"prebuild-ui")," npm script performs a build of the front-end UI and then zips up the resulting folder into a package named ",Object(r.b)("inlineCode",{parentName:"p"},"stratos-frontend-prebuild.zip"),". The Stratos buildpack will unpack this zip file and use its contents instead of building the UI during staging, when this file is present."),Object(r.b)("h4",{id:"memory-usage"},"Memory Usage"),Object(r.b)("p",null,"The Stratos Cloud Foundry ",Object(r.b)("inlineCode",{parentName:"p"},"manifest.yml")," states that the application requires\n",Object(r.b)("inlineCode",{parentName:"p"},"1512MB")," of memory. This is required during the build process of the\napplication since building an angular2 app is a memory intensive process. The\nmemory limit can be scaled down after the app has been pushed, using the cf CLI."),Object(r.b)("h3",{id:"deploy-stratos-from-docker-image"},"Deploy Stratos from docker image"),Object(r.b)("p",null,"Deploy Stratos using the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://hub.docker.com/r/splatform/stratos"}),Object(r.b)("inlineCode",{parentName:"a"},"splatform/stratos"))," docker image"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"NOTE:")," Your Cloud Foundry must have docker support ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.cloudfoundry.org/adminguide/docker.html#enable"}),"enabled"),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"cf push console -o splatform/stratos:stable -m 128M -k 384M\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: You can replace ",Object(r.b)("inlineCode",{parentName:"p"},"console")," in the command above with a name of your choice for the application")),Object(r.b)("p",null,"Alternatively cf push using a manifest"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"download ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://raw.githubusercontent.com/cloudfoundry/stratos/master/manifest-docker.yml"}),"manifest-docker.yml")," or create your own manifest file:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"applications:\n- name: console\n  docker:\n    image: splatform/stratos:stable\n  instances: 1\n  memory: 128M\n  disk_quota: 384M\n"))),Object(r.b)("li",{parentName:"ul"},"now, you can simply push it to Cloud Foundry:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"cf push -f manifest-docker.yml\n")))),Object(r.b)("h2",{id:"associate-cloud-foundry-database-service"},"Associate Cloud Foundry database service"),Object(r.b)("p",null,"Follow instructions ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"db-migration"}),"here"),"."),Object(r.b)("h2",{id:"use-sso-login"},"Use SSO Login"),Object(r.b)("p",null,"By default Stratos will present its own login UI and only supports username and password authentication with your UAA. You can configure Stratos to use UAA's login UI by specifying the ",Object(r.b)("inlineCode",{parentName:"p"},"SSO_LOGIN")," environment variable in the manifest, for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"applications:\n- name: console\n  ... memory, disk settings here\n  env:\n    SSO_LOGIN: true\n")),Object(r.b)("p",null,"When SSO Login is enabled, Stratos will also auto-connect to the Cloud Foundry it is deployed in using the token obtained during the SSO Login flow."),Object(r.b)("p",null,"For more information - see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"../../advanced/sso"}),"Single-Sign On"),"."))}u.isMDXComponent=!0},234:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,h=d["".concat(i,".").concat(p)]||d[p]||b[p]||r;return n?a.a.createElement(h,l(l({ref:t},c),{},{components:n})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);