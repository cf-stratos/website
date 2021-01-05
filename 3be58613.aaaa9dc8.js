(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(6),r=(n(0),n(354)),o={title:"Backend Development",sidebar_label:"Overview"},l={unversionedId:"developer/backend",id:"version-4.4.0/developer/backend",isDocsHomePage:!1,title:"Backend Development",description:"Jetstream is the back-end for Stratos. It is written in Go.",source:"@site/versioned_docs/version-4.4.0/developer/backend.md",permalink:"/docs/developer/backend",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/versioned_docs/version-4.4.0/developer/backend.md",version:"4.4.0",sidebar_label:"Overview",sidebar:"version-4.4.0/docs",previous:{title:"Frontend Tests",permalink:"/docs/developer/frontend-tests"},next:{title:"Deploy Dev Guide",permalink:"/docs/developer/deploy"}},c=[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Building the back-end",id:"building-the-back-end",children:[]},{value:"Configuration",id:"configuration",children:[]}],b={rightToc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Jetstream is the back-end for Stratos. It is written in Go."),Object(r.b)("p",null,"We use Go Modules for dependency management."),Object(r.b)("h3",{id:"pre-requisites"},"Pre-requisites"),Object(r.b)("p",null,"You will need the following installed/available:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"go 1.12 or later.")),Object(r.b)("p",null,"*For authentication, ",Object(r.b)("strong",{parentName:"p"},"either*")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A UAA instance"),Object(r.b)("li",{parentName:"ul"},"A local user account ")),Object(r.b)("h3",{id:"building-the-back-end"},"Building the back-end"),Object(r.b)("h4",{id:"build"},"Build"),Object(r.b)("p",null,"From the ",Object(r.b)("inlineCode",{parentName:"p"},"src/jetstream")," folder, build the Stratos back-end with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"npm run build-backend\n")),Object(r.b)("p",null,"The back-end executable is named ",Object(r.b)("inlineCode",{parentName:"p"},"jetstream")," and should be created within the ",Object(r.b)("inlineCode",{parentName:"p"},"src/jetstream")," folder."),Object(r.b)("h3",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Configuration can either be done via"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Environment Variable and/or Config File"),Object(r.b)("li",{parentName:"ul"},"In the UI when you first use a front end with this backend")),Object(r.b)("p",null,"In all cases the configuration is saved to the database on first run. Any subsequent changes require the db to be reset. For the default sqlite\ndb provider this can be done by deleting ",Object(r.b)("inlineCode",{parentName:"p"},"src/jetstream/console-database.db")),Object(r.b)("h4",{id:"configure-by-environment-variables-andor-config-file"},"Configure by Environment Variables and/or Config File"),Object(r.b)("p",null,"By default, the configuration in file ",Object(r.b)("inlineCode",{parentName:"p"},"./src/jetstream/config.dev")," will be used. These can be changed by environment variables\nor an overrides file."),Object(r.b)("h5",{id:"environment-variable"},"Environment variable"),Object(r.b)("p",null,"If you wish to use a local user account, ensure you have set the following environment variables:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"AUTH_ENDPOINT_TYPE=local")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LOCAL_USER")," - The username for the local user"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LOCAL_USER_PASSWORD")," - The password for the local user"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LOCAL_USER_SCOPE=stratos.admin")," - This gives the local user admin permissions. Currently other roles are not available.")),Object(r.b)("p",null,"If you have a custom uaa, ensure you have set the following environment variables:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"UAA_ENDPOINT"),"- the URL of your UAA",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If you have an existing CF and want to use the same UAA use the ",Object(r.b)("inlineCode",{parentName:"li"},"authorization_endpoint")," value from ",Object(r.b)("inlineCode",{parentName:"li"},"[cf url]/v2/info"),"\nFor example for PCF Dev, use: ",Object(r.b)("inlineCode",{parentName:"li"},"UAA_ENDPOINT=https://login.local.pcfdev.io"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"CONSOLE_CLIENT")," - the Client ID to use when authenticating against your UAA (defaults to: 'cf')"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"CONSOLE_CLIENT_SECRET")," - the Client ID to use when authenticating against your UAA (defaults to empty)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"CONSOLE_ADMIN_SCOPE")," - an existing UAA scope that will be used to identify users as ",Object(r.b)("inlineCode",{parentName:"li"},"Stratos Admins"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"To use a pre-built Stratos UAA container execute ",Object(r.b)("inlineCode",{parentName:"p"},"docker run --name=uaa --rm -p 8080:8080 -P splatform/stratos-uaa"),". The UAA will be\navailable at ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:8080")," with a ",Object(r.b)("inlineCode",{parentName:"p"},"CONSOLE_CLIENT")," value of ",Object(r.b)("inlineCode",{parentName:"p"},"console"))),Object(r.b)("h5",{id:"config-file"},"Config File"),Object(r.b)("p",null,"To easily persist configuration settings copy ",Object(r.b)("inlineCode",{parentName:"p"},"src/jetstream/config.dev")," to ",Object(r.b)("inlineCode",{parentName:"p"},"src/jetstream/config.properties"),". The backend will load its\nconfiguration from this file in preference to the default config file, if it exists. You can also modify individual configuration settings\nby setting the corresponding environment variable."),Object(r.b)("h5",{id:"to-configure-a-local-user-account-via-config-file"},"To configure a local user account via config file"),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"src/jetstream/config.properties")," uncomment the following lines:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"AUTH_ENDPOINT_TYPE=local\nLOCAL_USER=localuser\nLOCAL_USER_PASSWORD=localuserpass\nLOCAL_USER_SCOPE=stratos.admin\n")),Object(r.b)("p",null,"Load the Stratos UI and proceed to log in using the configured credentials."),Object(r.b)("h4",{id:"to-configure-uaa-via-stratos"},"To configure UAA via Stratos"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go through the ",Object(r.b)("inlineCode",{parentName:"li"},"Config File")," step above and comment out the ",Object(r.b)("inlineCode",{parentName:"li"},"UAA_ENDPOINT")," with a ",Object(r.b)("inlineCode",{parentName:"li"},"#")," in the new ",Object(r.b)("inlineCode",{parentName:"li"},"config.properties")," file."),Object(r.b)("li",{parentName:"ol"},"If any previous configuration attempt has been made reset your database as described above."),Object(r.b)("li",{parentName:"ol"},"Continue these steps from ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#run"}),"Run"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"You should see the line ",Object(r.b)("inlineCode",{parentName:"li"},"Will add setup route and middleware")," in the logs"))),Object(r.b)("li",{parentName:"ol"},"Load the Stratos UI as usual and you should be immediately directed to the setup wizard")),Object(r.b)("p",null,"The setup wizard that allows you to enter the values normally fetched from environment variables or files. The UI will assist you through\nthis process, validating that the UAA address and credentials are correct. It will also provide a list of possible scopes for the Stratos Admin"),Object(r.b)("h4",{id:"run"},"Run"),Object(r.b)("p",null,"Execute the following file from ",Object(r.b)("inlineCode",{parentName:"p"},"src/jetstream")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"./jetstream\n")),Object(r.b)("p",null,"You should see the log as the backend starts up. You can press CTRL+C to stop the backend."),Object(r.b)("h4",{id:"automatically-register-and-connect-to-an-existing-endpoint"},"Automatically register and connect to an existing endpoint"),Object(r.b)("p",null,"To automatically register a Cloud Foundry add the environment variable/config setting below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"AUTO_REG_CF_URL=<api url of cf>\n")),Object(r.b)("p",null,"Jetstream will then attempt to auto-connect to it with the credentials supplied when logging into Stratos."),Object(r.b)("h4",{id:"running-jetstream-in-a-container"},"Running Jetstream in a container"),Object(r.b)("p",null,"We recommend running Stratos using the Docker All-In-One image."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Follow instructions in the deploy/all-in-one docs")))}s.isMDXComponent=!0},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||r;return n?i.a.createElement(m,l(l({ref:t},b),{},{components:n})):i.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);