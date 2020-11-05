(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{266:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(274)),o={title:"Frontend Development",sidebar_label:"Overview"},l={unversionedId:"developer/frontend",id:"developer/frontend",isDocsHomePage:!1,title:"Frontend Development",description:"Introduction to the stack",source:"@site/docs/developer/frontend.md",permalink:"/docs/next/developer/frontend",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/docs/developer/frontend.md",version:"next",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Developing the Stratos Console",permalink:"/docs/next/developer/introduction"},next:{title:"Frontend Tests",permalink:"/docs/next/developer/frontend-tests"}},c=[{value:"Introduction to the stack",id:"introduction-to-the-stack",children:[]},{value:"Set up Dependencies",id:"set-up-dependencies",children:[]},{value:"Run the frontend",id:"run-the-frontend",children:[]},{value:"Build",id:"build",children:[]},{value:"Creating angular items via angular cli",id:"creating-angular-items-via-angular-cli",children:[]},{value:"Theming",id:"theming",children:[]},{value:"Additional Information",id:"additional-information",children:[{value:"Extensions",id:"extensions",children:[]},{value:"Configuration",id:"configuration",children:[]}]}],d={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction-to-the-stack"},"Introduction to the stack"),Object(i.b)("p",null,"Before making changes to the frontend code you should be familiar with"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Angular"),Object(i.b)("li",{parentName:"ol"},"Typescript / ES6"),Object(i.b)("li",{parentName:"ol"},"Redux / NGRX / Observables"),Object(i.b)("li",{parentName:"ol"},"Node / NPM")),Object(i.b)("p",null,"There are a some introduction style resources ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/developer/developers-guide-env-tech"}),"here"),". There's also some advice on helpful ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./developers-guide-env-tech#vs-code-plug-ins"}),"VS code plugins"),". If you feel comfortable with these and are happy with your dev environment please skip straight to\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#set-up-dependencies"}),"Set up Dependencies"),"."),Object(i.b)("h2",{id:"set-up-dependencies"},"Set up Dependencies"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Set up a Stratos backend. Both backend and frontend exist in this same repo. Follow the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./introduction#build--run-locally"}),"Backend Development")," set up guide."),Object(i.b)("li",{parentName:"ul"},"Install ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org"}),"NodeJs")," (if not already install) (minimum node version 12.13.0)"),Object(i.b)("li",{parentName:"ul"},"Install ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://cli.angular.io/"}),"Angular CLI")," (if not already install) - ",Object(i.b)("inlineCode",{parentName:"li"},"npm install -g @angular/cli"))),Object(i.b)("h2",{id:"run-the-frontend"},"Run the frontend"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"npm install")),Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"npm start")," for a dev server. (the app will automatically reload if you change any of the source files)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If this times out please use ",Object(i.b)("inlineCode",{parentName:"li"},"npm run start-high-mem")," instead"),Object(i.b)("li",{parentName:"ul"},"To change the port from the default 4200, add ",Object(i.b)("inlineCode",{parentName:"li"},"-- --port [new port number]")),Object(i.b)("li",{parentName:"ul"},"To stop the automatic reload every time a resource changes add ",Object(i.b)("inlineCode",{parentName:"li"},"-- --live-reload false")),Object(i.b)("li",{parentName:"ul"},"To do both the above use ",Object(i.b)("inlineCode",{parentName:"li"},"-- --live-reload false --port [new port number]")))),Object(i.b)("li",{parentName:"ol"},"Navigate to ",Object(i.b)("inlineCode",{parentName:"li"},"https://localhost:4200/"),". The credentials to log in will be dependent on the Jetstream the console points at. Please refer\nto the guides used when setting up the backend for more information")),Object(i.b)("h2",{id:"build"},"Build"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The normal dev cycle does not require a direct build.")),Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"npm run build")," to build the project."),Object(i.b)("p",null,"The build artefacts will be stored in the ",Object(i.b)("inlineCode",{parentName:"p"},"dist/")," directory. This will output a production build of the application."),Object(i.b)("h2",{id:"creating-angular-items-via-angular-cli"},"Creating angular items via angular cli"),Object(i.b)("p",null,"To create a new angular component run ",Object(i.b)("inlineCode",{parentName:"p"},"ng generate component component-name"),". You can use a similar command to create other types of angular\nitems ",Object(i.b)("inlineCode",{parentName:"p"},"ng generate <directive|pipe|service|class|guard|interface|enum|module> <name>"),"."),Object(i.b)("h2",{id:"theming"},"Theming"),Object(i.b)("p",null,"We use the angular material theming mechanism. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://material.angular.io/guide/theming-your-components"}),"here")," for more information about theming new components added to stratos."),Object(i.b)("h2",{id:"additional-information"},"Additional Information"),Object(i.b)("h3",{id:"extensions"},"Extensions"),Object(i.b)("p",null,"Documentation on extensions can be found ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../extensions/introduction"}),"here"),". From a developers perspective extensions are managed by npm packages.\nThe default set are in ",Object(i.b)("inlineCode",{parentName:"p"},"./src/frontend/packages"),", any package added directly here will be automatically included by the build."),Object(i.b)("p",null,"At build time the Stratos Devkit (",Object(i.b)("inlineCode",{parentName:"p"},"./src/frontend/packages/devkit"),") will ensure all packages are imported correctly and theming, both component and console level, are applied correctly.\nThe devkit is automatically built in ",Object(i.b)("inlineCode",{parentName:"p"},"postinstall")," after ",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," is ran. To directly build it ",Object(i.b)("inlineCode",{parentName:"p"},"npm run dev-setup")," can be executed."),Object(i.b)("h3",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Configuration information can be found in two places"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"./proxy.conf.js"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Informs the frontend where the backend is"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"./src/frontend/packages/core/src/environments/environment.ts")," for developer vs production like config",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This contains more general settings for the frontend and does not usually need to be changed"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"config.properties"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Backend configuration")))))}p.isMDXComponent=!0},274:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=p(n),s=a,m=b["".concat(o,".").concat(s)]||b[s]||u[s]||i;return n?r.a.createElement(m,l(l({ref:t},d),{},{components:n})):r.a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);