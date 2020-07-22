(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=r,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),i=(n(0),n(149)),o={id:"db-migration",title:"Associate a Cloud Foundry database service",sidebar_label:"Database service bindings"},c={id:"deploy/cloud-foundry/db-migration",isDocsHomePage:!1,title:"Associate a Cloud Foundry database service",description:"As described in the standard cf push instructions here Stratos, when deployed via cf push,",source:"@site/docs/deploy/cloud-foundry/db-migration.md",permalink:"/docs/deploy/cloud-foundry/db-migration",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/docs/deploy/cloud-foundry/db-migration.md",sidebar_label:"Database service bindings",sidebar:"docs",previous:{title:"Deploying as a Cloud Foundry Application",permalink:"/docs/deploy/cloud-foundry/cloud-foundry"},next:{title:"Troubleshooting Cloud Foundry Deployment",permalink:"/docs/deploy/cloud-foundry/cf-troubleshooting"}},s=[{value:"Note on Service Bindings",id:"note-on-service-bindings",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"As described in the standard ",Object(i.b)("inlineCode",{parentName:"p"},"cf push")," instructions ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../deploy-readme"}),"here")," Stratos, when deployed via ",Object(i.b)("inlineCode",{parentName:"p"},"cf push"),",\ndoes not contain any way to persist data over application restarts and db entries such as registered endpoints\nand user tokens are lost. To resolve this a Cloud Foundry db service can be bound to to it. Run through\nthe steps below to implement."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a Database Service Instance"),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"NOTE")," Stratos supports postgresql and mysql DBs. Stratos will enumerate the bound service instances to detect the database type - see  ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#note-on-service-bindings"}),"below")," for more detail.")),Object(i.b)("p",{parentName:"li"},"Use ",Object(i.b)("inlineCode",{parentName:"p"},"cf create-service")," to create a service instance for the DB - for example:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"cf create-service postgresql v9.4 console_db\n")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"In this example, ",Object(i.b)("inlineCode",{parentName:"li"},"postgresql")," is the service name for the Postgres DB service, ",Object(i.b)("inlineCode",{parentName:"li"},"v9.4")," is the service plan and ",Object(i.b)("inlineCode",{parentName:"li"},"console_db")," is the name for the service instance that will be created. "),Object(i.b)("li",{parentName:"ul"},"To view services and service plans:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"cf marketplace\n")))),Object(i.b)("p",{parentName:"li"},"You can also create an ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.cloudfoundry.org/devguide/services/user-provided.html"}),"User-Provided Service Instance"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'cf cups console_db  -p \'{"uri": "postgres://", "username":"console_appuser", "password":"***", "hostname":"192.168.12.34", "port":"5432", "dbname":"console_db" }\'\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Associate the new service with Stratos via the Manifest"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Add the service name to the ",Object(i.b)("inlineCode",{parentName:"li"},"services")," section of Stratos's ",Object(i.b)("inlineCode",{parentName:"li"},"manifest.yml"),", for example:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"services:\n")))),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"console_db",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"")))),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This specifies that Stratos should bind to the service instance named ",Object(i.b)("inlineCode",{parentName:"li"},"console_db")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Push the app via cf push"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"cf push\n")))),Object(i.b)("h2",{id:"note-on-service-bindings"},"Note on Service Bindings"),Object(i.b)("p",null,"Stratos will look through all service instances that are bound to it and filter those to determine which are database services. It determines:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'A Postgres database service if it has a uri field in the credentials object which begins with the string "postgres://" or it has a tag "postgresql"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'A MySQL database service if it has a uri field in the credentials object which begins with the string "mysql://" or it has a tag "mysql"'))),Object(i.b)("p",null,"If there is a single database service instance, Stratos will use that."),Object(i.b)("p",null,'If there are multiple database service instances, Stratos will look for one with a tag of "stratos".'))}b.isMDXComponent=!0}}]);