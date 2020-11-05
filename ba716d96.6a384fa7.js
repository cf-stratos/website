(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(2),a=n(6),r=(n(0),n(274)),i={id:"all-in-one",title:"Deploying with the All-In-One Docker Container",sidebar_label:"Docker All-in-One"},l={unversionedId:"deploy/all-in-one",id:"version-4.2.0/deploy/all-in-one",isDocsHomePage:!1,title:"Deploying with the All-In-One Docker Container",description:"The all-in-one container sets up the Stratos components in a single container.",source:"@site/versioned_docs/version-4.2.0/deploy/all-in-one.md",permalink:"/docs/4.2.0/deploy/all-in-one",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/versioned_docs/version-4.2.0/deploy/all-in-one.md",version:"4.2.0",sidebar_label:"Docker All-in-One",sidebar:"version-4.2.0/docs",previous:{title:"Stratos on EKS",permalink:"/docs/4.2.0/deploy/kubernetes/eksdeployment"},next:{title:"Tech Preview",permalink:"/docs/4.2.0/deploy/tech-preview"}},c=[{value:"Requirements:",id:"requirements",children:[]},{value:"Quick Start",id:"quick-start",children:[]},{value:"Note regarding the Stratos Session Store Secret",id:"note-regarding-the-stratos-session-store-secret",children:[]},{value:"Configuring a local user account in place of a UAA",id:"configuring-a-local-user-account-in-place-of-a-uaa",children:[]},{value:"Building the container:",id:"building-the-container",children:[]},{value:"Persisting the Database",id:"persisting-the-database",children:[]},{value:"Pushing the All-In-One Docker Image to Cloud Foundry",id:"pushing-the-all-in-one-docker-image-to-cloud-foundry",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The all-in-one container sets up the Stratos components in a single container."),Object(r.b)("h2",{id:"requirements"},"Requirements:"),Object(r.b)("p",null,"You will need to have installed Docker, see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/engine/installation/"}),"Docker Installation Documentation"),"."),Object(r.b)("h2",{id:"quick-start"},"Quick Start"),Object(r.b)("p",null,"Run Stratos in Docker locally:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"$ docker run -p 5443:5443 splatform/stratos:stable \n")),Object(r.b)("p",null,"Once that has finished, you can then access Stratos by visiting ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://localhost:5443"}),"https://localhost:5443"),"."),Object(r.b)("p",null,"You can configure a local admin account and set the password for future logins."),Object(r.b)("h2",{id:"note-regarding-the-stratos-session-store-secret"},"Note regarding the Stratos Session Store Secret"),Object(r.b)("p",null,"Stratos uses a secret to protect the Session cookie it uses to identify users. By default it will generate a random value for this secret."),Object(r.b)("p",null,"We recommend configuring an alphanumeric secret of your choice by setting the ",Object(r.b)("inlineCode",{parentName:"p"},"SESSION_STORE_SECRET")," environment variable."),Object(r.b)("p",null,"This can be done by adding the following to the docker run command shown in the section below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"-e SESSION_STORE_SECRET=<alphanumeric secret>\n")),Object(r.b)("h2",{id:"configuring-a-local-user-account-in-place-of-a-uaa"},"Configuring a local user account in place of a UAA"),Object(r.b)("p",null,"By default the All-in-one image requires a UAA for user authentication. If this is not desired, the image can be configured to use a Stratos local user account. Edit the file ",Object(r.b)("inlineCode",{parentName:"p"},"deploy/all-in-one/config.all-in-one.properties")," and uncomment the following lines before building the container."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"#AUTH_ENDPOINT_TYPE=local\n#LOCAL_USER=localuser\n#LOCAL_USER_PASSWORD=localuserpass\n#LOCAL_USER_SCOPE=stratos.admin\n")),Object(r.b)("h2",{id:"building-the-container"},"Building the container:"),Object(r.b)("p",null,"To build the container, change directory to the root of the project and open a command prompt:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"build/store-git-metadata.sh\ndocker build -f deploy/Dockerfile.all-in-one . -t stratos-aio\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: The Dockerfile for all-in-one is in the ",Object(r.b)("inlineCode",{parentName:"p"},"deploy")," folder and not the ",Object(r.b)("inlineCode",{parentName:"p"},"deploy/all-in-one")," folder.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: If you are using Docker for Mac and you get an error 137 when building, you should increase the memory available to Docker (via Preferences > Advanced) and try again.")),Object(r.b)("p",null,"Bring up the container with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"docker run -p 5443:5443 stratos-aio\n")),Object(r.b)("p",null,"Stratos should now be accessible at the following URL:"),Object(r.b)("p",null,"https://localhost:5443"),Object(r.b)("p",null,"If using a UAA, you will be presented with the Stratos Setup welcome screen - you will need to enter your UAA information to configure Stratos. Once complete, you will be able to login with your credentials. If you have configured the container to use a local user account instead of a UAA, log in with the credentials specified in the configuration file."),Object(r.b)("h2",{id:"persisting-the-database"},"Persisting the Database"),Object(r.b)("p",null,"Each time you start and stop the Docker All-In-One container, you will lose any your UAA configuration, endpoints and connections that you have made in Stratos."),Object(r.b)("p",null,"In order to persist the Stratos database file between runs of the Docker container you can store the database file outside of the docker container."),Object(r.b)("p",null,"Create a folder where the database folder will be stored, e.g."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"mkdir -p ~/stratos-db\n")),Object(r.b)("p",null,"When starting the Docker container, mount a volume for this folder and pass this via the ",Object(r.b)("inlineCode",{parentName:"p"},"SQLITE_DB_DIR")," environment variable, e.g."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"docker run -p 54443:5443 -v ~/stratos-db:/var/stratos-db -e SQLITE_DB_DIR=/var/stratos-db stratos-aio\n")),Object(r.b)("p",null,"Now each time you stop and start the container, Stratos will maintain the database file."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: You can validate that the environment variable has been correctly set and check the database file location by observing the log file\nof the Docker container. You should see a log message similar to: ",Object(r.b)("inlineCode",{parentName:"p"},"SQLite Database file: /var/stratos-db/console-database.db"))),Object(r.b)("h2",{id:"pushing-the-all-in-one-docker-image-to-cloud-foundry"},"Pushing the All-In-One Docker Image to Cloud Foundry"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: We recommend setting the session store secret - please use a manifest file for this and set the ",Object(r.b)("inlineCode",{parentName:"p"},"SESSION_STORE_SECRET")," environment variable.")),Object(r.b)("p",null,"The All-In-One Docker Image can be pushed to Cloud Foundry."),Object(r.b)("p",null,"Firstly, build the image and push it to a Docker registry, so that it is available to Cloud Foundry, e.g. to build and push to Docker Hub, in the project root directory run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"build/store-git-metadata.sh\ndocker build -f deploy/Dockerfile.all-in-one . -t MY-DOCKER-ORG/stratos-aio:latest\ndocker push MY-DOCKER-ORG/stratos-aio:latest\n")),Object(r.b)("p",null,"Where ",Object(r.b)("inlineCode",{parentName:"p"},"MY-DOCKER_ORG")," is your Docker Hub organization."),Object(r.b)("p",null,"You can now push this image directly to Cloud Foundry with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"cf push stratos --docker-image MY-DOCKER-ORG/stratos-aio:latest\n")),Object(r.b)("p",null,"The log output of the push command will include the URL where the Stratos application can be accessed in a browser, e.g."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"> cf push stratos --docker-image MY-DOCKER-ORG/stratos-aio:latest\nCreating app stratos in org e2e / space e2e as admin...\nOK\n\nCreating route stratos.local.pcfdev.io...\nOK\n\nBinding stratos.local.pcfdev.io to stratos...\nOK\n\n\nStarting app stratos in org e2e / space e2e as admin...\nCreating container\nSuccessfully created container\nStaging...\nStaging process started ...\nStaging process finished\nExit status 0\nStaging Complete\nDestroying container\nSuccessfully destroyed container\n\n1 of 1 instances running\n\nApp started\n\n\nOK\n\nApp stratos was started using this command `./jetstream `\n\nShowing health and status for app stratos in org e2e / space e2e as admin...\nOK\n\nrequested state: started\ninstances: 1/1\nusage: 256M x 1 instances\nurls: stratos.local.pcfdev.io                  <-- URL\nlast uploaded: Mon Dec 3 03:12:47 UTC 2018\nstack: cflinuxfs2\nbuildpack: unknown\n\n     state     since                    cpu    memory      disk        details\n#0   running   2018-12-03 03:12:54 AM   0.0%   0 of 256M   0 of 512M\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: In this example we are pushing with the application name ",Object(r.b)("inlineCode",{parentName:"p"},"stratos"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: By default the All-in-one image has SSL Validation disabled when authenticating with Cloud Foundry and the UAA - this allows it to work out of the box with environments like PCF Dev. If this is not the behavior you desire, edit the file ",Object(r.b)("inlineCode",{parentName:"p"},"deploy/all-in-one/config.all-in-one.properties")," and change the ",Object(r.b)("inlineCode",{parentName:"p"},"SKIP_SSL_VALIDATION")," as desired before building and publishing the image.")))}u.isMDXComponent=!0},274:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=o,h=b["".concat(i,".").concat(p)]||b[p]||d[p]||r;return n?a.a.createElement(h,l(l({ref:t},s),{},{components:n})):a.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);