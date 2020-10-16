(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{234:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(234)),o={title:"Migrating to V4",sidebar_label:"Migrating to V4"},s={unversionedId:"extensions/v4-migration",id:"version-4.1.0/extensions/v4-migration",isDocsHomePage:!1,title:"Migrating to V4",description:"In version 4 of Stratos there are breaking customization changes from previous versions. These changes allow a much improved approach to",source:"@site/versioned_docs/version-4.1.0/extensions/v4-migration.md",permalink:"/docs/4.1.0/extensions/v4-migration",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/versioned_docs/version-4.1.0/extensions/v4-migration.md",version:"4.1.0",sidebar_label:"Migrating to V4",sidebar:"version-4.1.0/docs",previous:{title:"Extending Stratos",permalink:"/docs/4.1.0/extensions/introduction"},next:{title:"Theming Stratos",permalink:"/docs/4.1.0/extensions/theming"}},c=[{value:"Basic Migration Steps",id:"basic-migration-steps",children:[]},{value:"Further Guidance",id:"further-guidance",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In version 4 of Stratos there are breaking customization changes from previous versions. These changes allow a much improved approach to\nextensions by opening the door to npm style plugins. "),Object(i.b)("p",null,"Prominent changes include"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"custom-src")," has been removed along with the symlink approach of including files. Custom code is now added as npm packages in ",Object(i.b)("inlineCode",{parentName:"li"},"src/frontend/packages"),".\nModules and routes are now exposed in a more standard package way. More info ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./frontend#including-modules-and-routes"}),"here"),".\nSome existing components will not be included in some production style builds without also declaring them to the extension service, see\nusages of ",Object(i.b)("inlineCode",{parentName:"li"},"ExtensionService.declare"),"."),Object(i.b)("li",{parentName:"ul"},"Material Design theming approach has been expanded to include many common colors, this removes the need to apply custom styles in a lot of cases. More info ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./theming#colors"}),"here"),"."),Object(i.b)("li",{parentName:"ul"},"Dark theme is applied in a different way. More info ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./theming#dark-theme"}),"here"),"."),Object(i.b)("li",{parentName:"ul"},"Image assets are replaced in a different way. More info ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./theming#images"}),"here"),"."),Object(i.b)("li",{parentName:"ul"},"Custom component can now be themed, so theme colors can be accessed from within and applied. More info ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./theming#components"}),"here"),"."),Object(i.b)("li",{parentName:"ul"},"A new 'loading' indicator has been added that you may wish to customize, more info ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./frontend#loading-indicator"}),"here"),".")),Object(i.b)("h2",{id:"basic-migration-steps"},"Basic Migration Steps"),Object(i.b)("p",null,"To aid in migrating we've provided these instructions."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Before updating to the latest code...",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"npm run customize-reset")," to remove all previously created sym links."),Object(i.b)("li",{parentName:"ul"},"Read through the customization documentation below to get a better understanding of the new process."))),Object(i.b)("li",{parentName:"ol"},"Update your codebase with the desired v4 code."),Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"npm install")," (only required first time, this will ensure you have the required version of Angular and the new devkit is built)."),Object(i.b)("li",{parentName:"ol"},"Change directory to ",Object(i.b)("inlineCode",{parentName:"li"},"./build/tools/v4-migration")," and run the migration script ",Object(i.b)("inlineCode",{parentName:"li"},"./migrate.sh"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This will copy your customizations from ",Object(i.b)("inlineCode",{parentName:"li"},"custom-src")," to a new Angular package ",Object(i.b)("inlineCode",{parentName:"li"},"src/frontend/packages/custom_extensions"),"."))),Object(i.b)("li",{parentName:"ol"},"Check that the new package exports your custom module and if applicable your custom-routing module.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The migrate script should do this in ",Object(i.b)("inlineCode",{parentName:"li"},"src/frontend/packages/custom_extensions/src/public-api.ts"),"."))),Object(i.b)("li",{parentName:"ol"},"Check that your ts config file defines the public api file.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"src/tsconfig.json")," file's ",Object(i.b)("inlineCode",{parentName:"li"},"compilerOptions/paths")," section should contain something like ",Object(i.b)("inlineCode",{parentName:"li"},'"@custom/extensions": ["frontend/packages/custom_extensions/src/public-api.ts"]'),"."))),Object(i.b)("li",{parentName:"ol"},"Check that your new package's ",Object(i.b)("inlineCode",{parentName:"li"},"package.json")," defines your custom module and if applicable custom-routing module.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"See ",Object(i.b)("inlineCode",{parentName:"li"},"src/frontend/packages/suse-extensions/package.json")," file's ",Object(i.b)("inlineCode",{parentName:"li"},"stratos")," section."),Object(i.b)("li",{parentName:"ul"},"Note your ",Object(i.b)("inlineCode",{parentName:"li"},"routingModule")," entry label should not have a preceding ",Object(i.b)("inlineCode",{parentName:"li"},"_"),"."))),Object(i.b)("li",{parentName:"ol"},"Build Stratos in your usual way, for instance ",Object(i.b)("inlineCode",{parentName:"li"},"npm run build"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"It could be that this fails due to TypeScript import issues, if so go through these and fix."),Object(i.b)("li",{parentName:"ul"},"During build time the custom packages will be discovered and output, see section starting ",Object(i.b)("inlineCode",{parentName:"li"},"Building with these extensions"),". These should contain the modules your require."))),Object(i.b)("li",{parentName:"ol"},"Run Stratos your usual way. Ensure you can navigate to all your custom parts."),Object(i.b)("li",{parentName:"ol"},"Once you are happy everything works as intended remove the old ",Object(i.b)("inlineCode",{parentName:"li"},"./custom-src")," directory and commit you changes.")),Object(i.b)("h2",{id:"further-guidance"},"Further Guidance"),Object(i.b)("p",null,"Our ACME demo (",Object(i.b)("inlineCode",{parentName:"p"},"src/frontend/packages/example-extensions")," and ",Object(i.b)("inlineCode",{parentName:"p"},"src/frontend/packages/example-theme"),") and SUSE repo (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/SUSE/stratos/tree/master/src/frontend/packages/suse-theme"}),"theme")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/SUSE/stratos/tree/master/src/frontend/packages/suse-extensions"}),"extensions"),") have both been updated and are fully compatible with the 4.0 changes. Both are a good source for examples."),Object(i.b)("p",null,"If there any questions or issues please reach out to us either on our Github ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/cloudfoundry/stratos"}),"repo")," or Slack room ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloudfoundry.slack.com/?redir=%2Fmessages%2Fstratos"}),"#stratos"),"."))}u.isMDXComponent=!0}}]);