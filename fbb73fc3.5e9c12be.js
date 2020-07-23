(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n(2),l=n(6),r=(n(0),n(149)),a={},o={id:"planning/angular",isDocsHomePage:!1,title:"angular",description:"Technology Refresh",source:"@site/docs/planning/angular.md",permalink:"/docs/planning/angular",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/docs/planning/angular.md"},c=[{value:"Migrate Angular from AngularJS",id:"migrate-angular-from-angularjs",children:[]},{value:"Migrate to Material Design",id:"migrate-to-material-design",children:[{value:"Milestone 1: CF Applications -&gt; Endpoint mgmt and Application views (Complete in Sprint 22)",id:"milestone-1-cf-applications---endpoint-mgmt-and-application-views-complete-in-sprint-22",children:[]},{value:"Milestone 1b (Complete in Sprint 22)",id:"milestone-1b-complete-in-sprint-22",children:[]},{value:"Milestone 2 (Complete in Sprint 24)",id:"milestone-2-complete-in-sprint-24",children:[]},{value:"Milestone 3 (Complete in Sprint 26)",id:"milestone-3-complete-in-sprint-26",children:[]},{value:"Milestone 4: Misc (Complete in Sprint 28)",id:"milestone-4-misc-complete-in-sprint-28",children:[]},{value:"Milestone 5 (Complete in Sprint 30)",id:"milestone-5-complete-in-sprint-30",children:[]},{value:"To be scheduled into Milestones:",id:"to-be-scheduled-into-milestones",children:[]}]}],p={rightToc:c};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"technology-refresh"},"Technology Refresh"),Object(r.b)("p",null,"The focus for the first part of 2018 is to complete the move from AngularJS to Angular. This is a significant amount of work."),Object(r.b)("h2",{id:"migrate-angular-from-angularjs"},"Migrate Angular from AngularJS"),Object(r.b)("p",null,"Move to a newer framework that is being actively developed and will carry us forward for longer. This will make future migrations much easier (Angular 2 => 4 => 5 => 6)"),Object(r.b)("p",null,"Note:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Back-end stays the same (folder structure will most likely be moved around)"),Object(r.b)("li",{parentName:"ul"},"Deployment and other scripts, artefacts remain the same (tweaks as necessary to build the V2 code)")),Object(r.b)("p",null,"Stack:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Angular 5"),Object(r.b)("li",{parentName:"ul"},"Typescript"),Object(r.b)("li",{parentName:"ul"},"RxJS"),Object(r.b)("li",{parentName:"ul"},"Angular Material")),Object(r.b)("h2",{id:"migrate-to-material-design"},"Migrate to Material Design"),Object(r.b)("p",null,"Adopt material design while keeping essence of the current Angular 1 app:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Use Material Design as the visual language for the UX",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Rich language"),Object(r.b)("li",{parentName:"ul"},"Used by a growing number of projects, not just those from Google"))),Object(r.b)("li",{parentName:"ul"},"Adopt Material Design approach, patterns and components"),Object(r.b)("li",{parentName:"ul"},"Leverage angular-material library for UI components"),Object(r.b)("li",{parentName:"ul"},"Only create custom components when needed"),Object(r.b)("li",{parentName:"ul"},"Adopt angular-material approach to theming"),Object(r.b)("li",{parentName:"ul"},"Improve layout and use more visual cues to help locate date and issues")),Object(r.b)("h1",{id:"migration-milestones"},"Migration Milestones"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This material is out of date. We will update once schedule planning is complete.")),Object(r.b)("h3",{id:"milestone-1-cf-applications---endpoint-mgmt-and-application-views-complete-in-sprint-22"},"Milestone 1: CF Applications -> Endpoint mgmt and Application views (Complete in Sprint 22)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"App Wall"),Object(r.b)("li",{parentName:"ul"},"App View",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Edit"),Object(r.b)("li",{parentName:"ul"},"Routes"),Object(r.b)("li",{parentName:"ul"},"Instances"),Object(r.b)("li",{parentName:"ul"},"SSH"))),Object(r.b)("li",{parentName:"ul"},"Endpoints")),Object(r.b)("h3",{id:"milestone-1b-complete-in-sprint-22"},"Milestone 1b (Complete in Sprint 22)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Deployment of an Application as per V1.")),Object(r.b)("h3",{id:"milestone-2-complete-in-sprint-24"},"Milestone 2 (Complete in Sprint 24)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'Cloud Foundry View (excluding "assign users")')),Object(r.b)("h3",{id:"milestone-3-complete-in-sprint-26"},"Milestone 3 (Complete in Sprint 26)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Services view",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Services as a top-level concept"),Object(r.b)("li",{parentName:"ul"},"Improve support for services: Service Keys etc")))),Object(r.b)("h3",{id:"milestone-4-misc-complete-in-sprint-28"},"Milestone 4: Misc (Complete in Sprint 28)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add dashboard"),Object(r.b)("li",{parentName:"ul"},"About page"),Object(r.b)("li",{parentName:"ul"},"User profile viewing and edit")),Object(r.b)("h3",{id:"milestone-5-complete-in-sprint-30"},"Milestone 5 (Complete in Sprint 30)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'Equivalent functionality of "Assign Users"')),Object(r.b)("h3",{id:"to-be-scheduled-into-milestones"},"To be scheduled into Milestones:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"e2e tests"),Object(r.b)("li",{parentName:"ul"},"unit tests"),Object(r.b)("li",{parentName:"ul"},"error handling"),Object(r.b)("li",{parentName:"ul"},"Support for plugins/extensions"),Object(r.b)("li",{parentName:"ul"},"Support for vendor modifications"),Object(r.b)("li",{parentName:"ul"},"Internationalisation (i18n)"),Object(r.b)("li",{parentName:"ul"},"Theming/Branding"),Object(r.b)("li",{parentName:"ul"},"Deployment support",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"cf push"),Object(r.b)("li",{parentName:"ul"},"helm"),Object(r.b)("li",{parentName:"ul"},"bosh")))))}u.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var i=n(0),l=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l.a.createContext({}),u=function(e){var t=l.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,d=s["".concat(a,".").concat(m)]||s[m]||b[m]||r;return n?l.a.createElement(d,o(o({ref:t},p),{},{components:n})):l.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<r;p++)a[p]=n[p];return l.a.createElement.apply(null,a)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);