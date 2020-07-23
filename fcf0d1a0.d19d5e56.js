(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),o=(n(0),n(149)),r={id:"customizing",title:"Customizing Stratos",sidebar_label:"Customizing Stratos"},l={id:"guides/customization/customizing",isDocsHomePage:!1,title:"Customizing Stratos",description:"Stratos provides a mechanism for customization - the following customizations are currently supported:",source:"@site/docs/guides/customization/customizing.md",permalink:"/docs/guides/customization/customizing",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/docs/guides/customization/customizing.md",sidebar_label:"Customizing Stratos",sidebar:"docs",previous:{title:"Extending Stratos",permalink:"/docs/extensions/introduction"},next:{title:"Theming Stratos",permalink:"/docs/extensions/theming"}},s=[{value:"Approach",id:"approach",children:[{value:"Customizing Images",id:"customizing-images",children:[]},{value:"Customizing the Theme",id:"customizing-the-theme",children:[]},{value:"Changing Styles",id:"changing-styles",children:[]},{value:"Adding new Features",id:"adding-new-features",children:[]},{value:"Changing the Initial Loading Indicator",id:"changing-the-initial-loading-indicator",children:[]}]}],c={rightToc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Stratos provides a mechanism for customization - the following customizations are currently supported:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Changing the theme colors"),Object(o.b)("li",{parentName:"ul"},"Changing certain image assets (favorite icon, login background and logo)"),Object(o.b)("li",{parentName:"ul"},"Overriding styles"),Object(o.b)("li",{parentName:"ul"},"Adding new functionality"),Object(o.b)("li",{parentName:"ul"},"Changing the initial loading indicator")),Object(o.b)("h1",{id:"migrating-to-stratos-v4-customization"},"Migrating to Stratos V4 Customization"),Object(o.b)("p",null,"In V4 there are breaking customization changes. These changes allow a much improved approach to extensions by opening the door to npm style plugins.\nTo aid in migrating we've provided these instructions."),Object(o.b)("p",null,"1) Before updating to the latest code...\n1) Run ",Object(o.b)("inlineCode",{parentName:"p"},"npm run customize-reset")," to remove all previously created sym links.\n2) Read through the customization documentation below to get a better understanding of the new process.\n1) Update your codebase with the desired v4 code.\n1) Run ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," (only required first time, this will ensure you have the required version of Angular).\n1) Change directory to ",Object(o.b)("inlineCode",{parentName:"p"},"./build/tools/v4-migration")," and run the migration script ",Object(o.b)("inlineCode",{parentName:"p"},"./migrate.sh"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"- This will copy your customizations from `custom-src` to a new Angular package `src/frontend/packages/custom_extensions`.\n")),Object(o.b)("p",null,"1) Check that the new package exports your custom module and if applicable your custom-routing module."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"- The migrate script should do this in `src/frontend/packages/custom_extensions/src/public-api.ts`.\n")),Object(o.b)("p",null,"1) Check that your ts config file defines the public api file."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'- `src/tsconfig.json` file\'s `compilerOptions/paths` section should contain something like `"@custom/extensions": ["frontend/packages/custom_extensions/src/public-api.ts"]`.\n')),Object(o.b)("p",null,"1) Check that your new package's package.json defines your custom module and if application custom-routing module."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"- See `src/frontend/packages/suse_extensions/package.json` file's `stratos` section.\n- Note your `routingModule` entry label should not have a preceding `_`.\n")),Object(o.b)("p",null,"1) Build Stratos in your usual way, for instance ",Object(o.b)("inlineCode",{parentName:"p"},"npm run build"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"- It could be that this fails due to TypeScript import issues, if so go through these and fix.\n- During build time the custom packages will be discovered and output, see section starting `Building with these extensions`. These should contain the modules your require.\n")),Object(o.b)("p",null,"1) Run Stratos your usual way. Ensure you can navigate to all your custom parts.\n1) Once you are happy everything works as intended remove the old ",Object(o.b)("inlineCode",{parentName:"p"},"./custom-src")," directory and commit you changes."),Object(o.b)("h2",{id:"approach"},"Approach"),Object(o.b)("p",null,"In order to customize Stratos, you will need to fork the Stratos GitHub repository and apply customizations in your fork. Our aim is to minimize any merge conflicts that might occur when re-basing your fork with the upstream Stratos repository."),Object(o.b)("p",null,"Customizations are placed in angular packages in the folder named ",Object(o.b)("inlineCode",{parentName:"p"},"src/frontend/packages"),". In the future you will be able to host these packages in npm and bring them into Stratos in the usual npm dependency way."),Object(o.b)("p",null,"Each package should contain custom Stratos configuration in it's package.json pointing to the modules it will be required to import. "),Object(o.b)("p",null,"stratos.yaml\ncustom theme\ncustom styles\ncustom assets"),Object(o.b)("p",null,"The Stratos approach to customization uses symbolic links. We maintain a default set of resources in the folder ",Object(o.b)("inlineCode",{parentName:"p"},"src/misc/custom"),". When you run ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," or when you explicitly run ",Object(o.b)("inlineCode",{parentName:"p"},"npm run customize"),", a gulp task (in the file ",Object(o.b)("inlineCode",{parentName:"p"},"build/fe-build.js"),") runs and creates symbolic links, linking the required files to their expected locations withing the ",Object(o.b)("inlineCode",{parentName:"p"},"src")," folder."),Object(o.b)("p",null,"If a required file exists in the ",Object(o.b)("inlineCode",{parentName:"p"},"custom-src")," folder location, the build script will link this file, otherwise, it will link the default resource from ",Object(o.b)("inlineCode",{parentName:"p"},"src/misc/custom"),"."),Object(o.b)("p",null,"Normally, you do not need to run any scripts to apply customizations - they will be applied as part of a ",Object(o.b)("inlineCode",{parentName:"p"},"postinstall")," script that runs automatically when you do an ",Object(o.b)("inlineCode",{parentName:"p"},"npm install"),". You can manually run the following scripts if you update or change the customizations:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"npm run customize")," - creates symbolic links for the required files, looking at the provided customizations and then falling back to default files")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"npm run customize-default")," - creates symbolic links for the required files, ignoring any provided customizations and using the default files")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"npm run customize-reset")," - remove all symbolic links. If you build after running this command you will see errors, as required files are not present."))),Object(o.b)("h3",{id:"customizing-images"},"Customizing Images"),Object(o.b)("p",null,"The following image resources can be changed by creating the specified file in the folder shown:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"File name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Folder"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"favicon.ico"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"custom-src/frontend"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Favorite icon to use")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"logo.png"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"custom-src/frontend/assets"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Logo to use on login screen and about page")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nav-logo.png"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"custom-src/frontend/assets"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Logo to use in the top-left side navigation for the application logo")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"login-bg.jpg"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"custom-src/frontend/assets"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Image to use for the login page background")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"NOTE: The ",Object(o.b)("inlineCode",{parentName:"p"},"nav-logo.png")," logo should have a height of 36px and a maximum width of 180 pixels.")),Object(o.b)("h3",{id:"customizing-the-theme"},"Customizing the Theme"),Object(o.b)("p",null,"Stratos uses Material Design and the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://material.angular.io/"}),"angular-material")," library. It uses the same approach to theming."),Object(o.b)("p",null,"To create your own theme, create the file ",Object(o.b)("inlineCode",{parentName:"p"},"custom.scss")," in the folder ",Object(o.b)("inlineCode",{parentName:"p"},"custom-src/frontend/sass"),"."),Object(o.b)("p",null,"In this file you can set any or all of the following variables:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Variable"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Purpose"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"$stratos-theme"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The main theme to use for Stratos")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"$stratos-nav-theme"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Theme to use for the side navigation panel")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"$stratos-status-theme"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Theme to use for displaying status in Stratos")))),Object(o.b)("p",null,"Note that you do not have to specify all of these - defaults will be used if they are not set."),Object(o.b)("p",null,"In most cases you will probably want to generate a palette for the primary color for your version of Stratos - an example ",Object(o.b)("inlineCode",{parentName:"p"},"custom.scss")," this for this is shown below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$suse-green: ( 50: #E0F7F0, 100: #B3ECD9, 200: #80E0C0, 300: #4DD3A7, 400: #26C994, 500: #00C081, 600: #00BA79, 700: #00B26E, 800: #00AA64, 900: #009C51, A100: #C7FFE0, A200: #94FFC4, A400: #61FFA8, A700: #47FF9A, contrast: (50: #000000, 100: #000000, 200: #000000, 300: #000000, 400: #ffffff, 500: #ffffff, 600: #ffffff, 700: #ffffff, 800: #ffffff, 900: #ffffff, A100: #000000, A200: #000000, A400: #000000, A700: #000000 ));\n\n$suse-red: ( 50: #ffebee, 100: #ffcdd2, 200: #ef9a9a, 300: #e57373, 400: #ef5350, 500: #f44336, 600: #e53935, 700: #d32f2f, 800: #c62828, 900: #b71c1c, A100: #ff8a80, A200: #ff5252, A400: #ff1744, A700: #d50000, contrast: ( 50: $black-87-opacity, 100: $black-87-opacity, 200: $black-87-opacity, 300: $black-87-opacity, 400: $black-87-opacity, 500: white, 600: white, 700: white, 800: $white-87-opacity, 900: $white-87-opacity, A100: $black-87-opacity, A200: white, A400: white, A700: white, ));\n\n// Create palettes\n$suse-app-primary: mat-palette($suse-green);\n$suse-theme-warn: mat-palette($suse-red);\n\n// Create a theme from the palette (secondary theme is the same as the primary in this example)\n$suse-app-theme: mat-light-theme($suse-app-primary, $suse-app-primary, $suse-theme-warn);\n\n// Set this theme as the one to use\n$stratos-theme: $suse-app-theme;\n")),Object(o.b)("h4",{id:"creating-or-disabling-the-dark-theme"},"Creating or disabling the Dark theme"),Object(o.b)("p",null,"You can also change the Dark theme, if you wish, by defining the following variables:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Variable"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Purpose"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"$stratos-dark-theme"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The dark theme to use for Stratos")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"$stratos-dark-nav-theme"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Dark theme to use for the side navigation panel")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"$stratos-dark-status-theme"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Dark theme to use for displaying status in Stratos")))),Object(o.b)("p",null,"Note that minimally you must supply ",Object(o.b)("inlineCode",{parentName:"p"},"stratos-dark-theme")," to create a dark theme."),Object(o.b)("p",null,"By default a dark theme is assumed to be available and the default will be used if not overridden. You can disable dark theme support in the UI by setting the following variable in your ",Object(o.b)("inlineCode",{parentName:"p"},"custom.scss"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$stratos-dark-theme-supported: false;\n")),Object(o.b)("h3",{id:"changing-styles"},"Changing Styles"),Object(o.b)("p",null,"We don't generally recommend modifying styles, since from version to version of Stratos, we may change the styles used slightly which can mean any modifications you made will need updating. Should you wish to do so, you can modify these in the same ",Object(o.b)("inlineCode",{parentName:"p"},"custom.scss")," file that is used for theming."),Object(o.b)("p",null,"As an example, to disable the login background image, add the following to ",Object(o.b)("inlineCode",{parentName:"p"},"custom.scss"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),".stratos .intro {\n  background-image: none;\n}\n")),Object(o.b)("p",null,"Note that the class ",Object(o.b)("inlineCode",{parentName:"p"},"stratos")," has been placed on the ",Object(o.b)("inlineCode",{parentName:"p"},"BODY")," tag of the Stratos application to assist with css selector specificity."),Object(o.b)("h3",{id:"adding-new-features"},"Adding new Features"),Object(o.b)("p",null,"Code for new features should be placed within the ",Object(o.b)("inlineCode",{parentName:"p"},"custom-src/frontend/app/custom")," folder. You can create any sub-folder structure within this folder."),Object(o.b)("p",null,"When you perform an ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," or explicitly run ",Object(o.b)("inlineCode",{parentName:"p"},"npm run customize"),", the customize script is run and will symlink the folder ",Object(o.b)("inlineCode",{parentName:"p"},"custom-src/frontend/app/custom")," to ",Object(o.b)("inlineCode",{parentName:"p"},"src/frontend/app/custom"),". It will also create a module to import your custom code - this is placed in the file ",Object(o.b)("inlineCode",{parentName:"p"},"src/frontend/app/custom/custom-import.module.ts"),". You should ",Object(o.b)("em",{parentName:"p"},"not")," edit this file."),Object(o.b)("p",null,"Within the ",Object(o.b)("inlineCode",{parentName:"p"},"custom-src/frontend/app/custom")," folder you must create a module in the file ",Object(o.b)("inlineCode",{parentName:"p"},"custom.module.ts")," named ",Object(o.b)("inlineCode",{parentName:"p"},"CustomModule")," - this will be imported into the Stratos application and is the mechanism by which you can add custom code to the front-end."),Object(o.b)("p",null,"We currently expose the following extension points in the Stratos UI:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Changing the component to use for the login screen"),Object(o.b)("li",{parentName:"ul"},"Adding new items to the side navigation menu"),Object(o.b)("li",{parentName:"ul"},"Adding new tabs to the Application, Cloud Foundry, Organization and Space views"),Object(o.b)("li",{parentName:"ul"},"Adding new action buttons to the Application Wall, Application, Cloud Foundry, Organization and Space and Endpoint views")),Object(o.b)("p",null,"We use Decorators to annotate components to indicate that they are Stratos extensions."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../extensions/frontend-extensions"}),"Extensions")," for more detail and examples of front-end extensions."),Object(o.b)("h3",{id:"changing-the-initial-loading-indicator"},"Changing the Initial Loading Indicator"),Object(o.b)("p",null,"On slower connections, it can take a few seconds to load the main Javascript resources for Stratos."),Object(o.b)("p",null,"In order to give the user some initial feedback that Stratos is loading, a loading indicator is included in the ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," file. This gets shown as early as possible, as soon as this main html file has loaded. Once the main code has been fetched, the view refreshes to show the application."),Object(o.b)("p",null,"A default loading indicator is provided that can be changed. To do so, create the following two files:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"custom-src/frontend/loading.css")," - CSS styles to be included in a style block in the head of the index page"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"custom-src/frontend/loading.html")," - HTML markup to be included the the index page to render the loading indicator")),Object(o.b)("p",null,"The files for the default indicator can be found in the ",Object(o.b)("inlineCode",{parentName:"p"},"src/frontend/packages/core/misc/custom")," folder."),Object(o.b)("p",null,"An example of a different loading indicator is included with the ACME sample in ",Object(o.b)("inlineCode",{parentName:"p"},"examples/custom-src/frontend"),"."),Object(o.b)("p",null,"The customization task will insert the appropriate CSS and HTML files into the main index.html file when it runs."),Object(o.b)("p",null,"Take a look at the template for the ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," file in ",Object(o.b)("inlineCode",{parentName:"p"},"src/frontend/packages/core/misc/custom/index.html"),". The CSS file is inserted where the marker ",Object(o.b)("inlineCode",{parentName:"p"},"/** @@LOADING_CSS@@ **/")," is and the HTML file where ",Object(o.b)("inlineCode",{parentName:"p"},"\x3c!-- @@LOADING_HTML@@ --\x3e")," is."))}b.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(r,".").concat(d)]||u[d]||p[d]||o;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);