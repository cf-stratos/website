(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{185:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?r.a.createElement(m,o(o({ref:t},b),{},{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),i=(n(0),n(185)),l={title:"Configuring Invite User Support",sidebar_label:"Configuring User Invites"},o={unversionedId:"advanced/invite-user-guide",id:"version-4.0.1/advanced/invite-user-guide",isDocsHomePage:!1,title:"Configuring Invite User Support",description:"Stratos provides a way for Cloud Foundry administrators and organization managers to invite users to an organization or space.",source:"@site/versioned_docs/version-4.0.1/advanced/invite-user-guide.md",permalink:"/docs/4.0.1/advanced/invite-user-guide",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/versioned_docs/version-4.0.1/advanced/invite-user-guide.md",version:"4.0.1",sidebar_label:"Configuring User Invites",sidebar:"version-4.0.1/docs",previous:{title:"General Troubleshooting",permalink:"/docs/4.0.1/deploy/troubleshooting"},next:{title:"Configuring Single Sign On",permalink:"/docs/4.0.1/advanced/sso"}},c=[{value:"Set up",id:"set-up",children:[]},{value:"Creating a UAA Client for User Invites",id:"creating-a-uaa-client-for-user-invites",children:[]},{value:"Configuring SMTP Server details and (optionally) modifying Email Templates",id:"configuring-smtp-server-details-and-optionally-modifying-email-templates",children:[]},{value:"Enabling User Invite support in Stratos",id:"enabling-user-invite-support-in-stratos",children:[]},{value:"Configuration for CF Push",id:"configuration-for-cf-push",children:[{value:"General Configuration",id:"general-configuration",children:[]},{value:"Using custom templates",id:"using-custom-templates",children:[]}]},{value:"Configuration for Helm Installation",id:"configuration-for-helm-installation",children:[{value:"General Configuration",id:"general-configuration-1",children:[]},{value:"Using custom templates",id:"using-custom-templates-1",children:[]}]},{value:"Development Notes",id:"development-notes",children:[]}],b={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Stratos provides a way for Cloud Foundry administrators and organization managers to invite users to an organization or space."),Object(i.b)("p",null,"During the invite process the following actions will occur:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A UAA user and a CF user will be created."),Object(i.b)("li",{parentName:"ul"},"Initial roles will be assigned. User will be added as an organization member and, if selected, a space role."),Object(i.b)("li",{parentName:"ul"},"Users will be emailed a verification link. The link directs the user to a UAA site to set their password.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note - The user ",Object(i.b)("em",{parentName:"p"},"will not")," be able to log in without first setting their password but CF admins, organization managers and space managers ",Object(i.b)("em",{parentName:"p"},"will")," be able to set roles for the user.")),Object(i.b)("h2",{id:"set-up"},"Set up"),Object(i.b)("p",null,"In order to enable User Invite support in Stratos:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"A UAA client must be created with appropriate permissions to create users"),Object(i.b)("li",{parentName:"ol"},"Stratos must be configured with the details of the SMTP server to use when sending emails"),Object(i.b)("li",{parentName:"ol"},"(Optionally) The email templates used for sending emails should be modified"),Object(i.b)("li",{parentName:"ol"},"User Invite support must be enabled in Stratos by an Administrator")),Object(i.b)("p",null,"Once all of the steps have been completed, CF administrators and organization managers will be able to invite users via the Organization and Space pages under the 'Users' tab."),Object(i.b)("p",null,"These steps are covered below."),Object(i.b)("h2",{id:"creating-a-uaa-client-for-user-invites"},"Creating a UAA Client for User Invites"),Object(i.b)("p",null,"Stratos requires a pre-configured UAA client to invite the UAA user and create the CF user. The client requires both the ",Object(i.b)("inlineCode",{parentName:"p"},"scim.invite")," and ",Object(i.b)("inlineCode",{parentName:"p"},"cloud_controller.admin")," scopes."),Object(i.b)("p",null,"To create a client with the correct scopes, use the following ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/cloudfoundry/cf-uaac"}),"UAA CLI")," command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"uaac client add stratos-invite --scope scim.invite,cloud_controller.admin --authorized_grant_types client_credentials --authorities scim.invite,cloud_controller.admin -s password\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note - Include the uaa scope if required.")),Object(i.b)("p",null,"In the above example the client id is ",Object(i.b)("inlineCode",{parentName:"p"},"stratos-invite")," and client secret is ",Object(i.b)("inlineCode",{parentName:"p"},"password"),"."),Object(i.b)("p",null,"Alternatively, you can use an existing UAA Client, if one is already available with the appropriate scopes."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: You will need the Client ID and Client Secret used above when enabling User Invite support in Stratos")),Object(i.b)("h2",{id:"configuring-smtp-server-details-and-optionally-modifying-email-templates"},"Configuring SMTP Server details and (optionally) modifying Email Templates"),Object(i.b)("p",null,"Configuration depends on how you have deployed Stratos."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"For cf push, see ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#configuration-for-cf-push"}),"Configuration for CF Push")),Object(i.b)("li",{parentName:"ol"},"For Kubernetes with Helm, see: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#configuration-for-helm-installation"}),"Configuration for Helm Installation"))),Object(i.b)("h2",{id:"enabling-user-invite-support-in-stratos"},"Enabling User Invite support in Stratos"),Object(i.b)("p",null,"This action must be performed by an Administrator in Stratos."),Object(i.b)("p",null,"1) Navigate to the Cloud Foundry Summary page of the required CF.\n1) Use the ",Object(i.b)("inlineCode",{parentName:"p"},"Configure")," button in the ",Object(i.b)("inlineCode",{parentName:"p"},"User Invitation Support")," section.\n1) Supply the uaa client id and secret and click ",Object(i.b)("inlineCode",{parentName:"p"},"Configure")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: If Stratos has been deployed via ",Object(i.b)("inlineCode",{parentName:"p"},"cf push")," and the steps under the ",Object(i.b)("inlineCode",{parentName:"p"},"Pre-configure invite UAA client")," header in the  ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../deploy/cloud-foundry/cloud-foundry"}),"CF deploy guide"),"  have been followed, you will not follow these steps for the default CF.")),Object(i.b)("h2",{id:"configuration-for-cf-push"},"Configuration for CF Push"),Object(i.b)("p",null,"When deploying Stratos to Cloud Foundry using ",Object(i.b)("inlineCode",{parentName:"p"},"cf push"),", User Invites can be configured as follows."),Object(i.b)("h3",{id:"general-configuration"},"General Configuration"),Object(i.b)("p",null,"The following configuration is required in order to configure the SMTP server and email subject:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Environment Variable"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Purpose"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SMTP_HOST"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Host name of the SMTP server")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SMTP_PORT"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Port name of the SMTP server")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SMTP_AUTH"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'Whether to authenticate against the SMTP server using AUTH command (set to "true")')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SMTP_FROM_ADDRESS"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"From email address to use when sending emails")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SMTP_USER"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Username to use when authenticating with the email server")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SMTP_PASSWORD"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Password to use when authenticating with the email server")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"INVITE_USER_SUBJECT"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Subject line to use when sending an invitation email")))),Object(i.b)("h3",{id:"using-custom-templates"},"Using custom templates"),Object(i.b)("p",null,"To use custom email templates, create a folder and add the two templates with the following file names:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"user-invite-email.txt = Plain text template"),Object(i.b)("li",{parentName:"ol"},"user-invite-email.helm = HTML text template")),Object(i.b)("p",null,"When deploying Stratos with ",Object(i.b)("inlineCode",{parentName:"p"},"cf push")," set the environment variable ",Object(i.b)("inlineCode",{parentName:"p"},"TEMPLATE_DIR")," to the folder name where your custom templates are located. This can be done on the command line or by adding this environment variable to the ",Object(i.b)("inlineCode",{parentName:"p"},"manifest.yml")," file."),Object(i.b)("h2",{id:"configuration-for-helm-installation"},"Configuration for Helm Installation"),Object(i.b)("p",null,"When deploying Stratos to Kubernetes using Helm, User Invites can be configured as follows."),Object(i.b)("h3",{id:"general-configuration-1"},"General Configuration"),Object(i.b)("p",null,"The following configuration is required in order to configure the SMTP server and email subject:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Helm Chart Value"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Purpose"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"env.SMTP_HOST"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Host name of the SMTP server")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"env.SMTP_PORT"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Port name of the SMTP server")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"env.SMTP_AUTH"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'Whether to authenticate against the SMTP server using AUTH command (set to "true")')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"env.SMTP_FROM_ADDRESS"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"From email address to use when sending emails")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"env.SMTP_USER"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Username to use when authenticating with the email server")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"env.SMTP_PASSWORD"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Password to use when authenticating with the email server")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"console.userInviteSubject"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Subject line to use when sending an invitation email")))),Object(i.b)("h3",{id:"using-custom-templates-1"},"Using custom templates"),Object(i.b)("p",null,"If you wish to use custom email templates for user invitation, follow these steps:"),Object(i.b)("p",null,"Create the namespace that you are going to use when installing Stratos:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl create namespace stratos\n")),Object(i.b)("p",null,"Create a Config Map for the template files - this assumes you have the following two files in the current directory:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"user-invite-email.txt = Plain text template"),Object(i.b)("li",{parentName:"ol"},"user-invite-email.helm = HTML text template")),Object(i.b)("p",null,"Create the Config Map with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl create configmap stratos-templates --namespace stratos --from-file=./user-invite-email.txt --from-file=./user-invite-email.html\n")),Object(i.b)("p",null,"When deploying Stratos using Helm, ensure you set the the Helm Value:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"console.templatesConfigMapName\n")),Object(i.b)("p",null,"to the name of the Config Map that you created - e.g. in the example above, add the following to the ",Object(i.b)("inlineCode",{parentName:"p"},"helm install")," command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"--set console.templatesConfigMapName=stratos-templates\n")),Object(i.b)("h2",{id:"development-notes"},"Development Notes"),Object(i.b)("p",null,"When developing locally, we recommend using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://mailcatcher.me/"}),"mailcatcher")," in place of an actual SMTP server."),Object(i.b)("p",null,"To install mailcatcher via docker, use the following command: ",Object(i.b)("inlineCode",{parentName:"p"},"docker run -d -p 1080:80 -p 1025:25 --name mail tophfr/mailcatcher"),". Once mailcatcher is installed, continue to follow the instructions below."),Object(i.b)("p",null,"SMTP server details can be set via rhe usual environment variable approach or, when running locally, in the ",Object(i.b)("inlineCode",{parentName:"p"},"jetstream/config.properties")," file (see Backend Development - Configuration in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../developer/introduction"}),"developers-guide"),"). The config settings, with example values, are as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"SMTP_FROM_ADDRESS=Stratos<test@test.com>\nSMTP_HOST=127.0.0.1\nSMTP_PASSWORD=\nSMTP_PORT=1025\nSMTP_USER=\nTEMPLATE_DIR=./templates\n")))}s.isMDXComponent=!0}}]);