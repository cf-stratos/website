(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),i=(n(0),n(185)),s={id:"developers-guide-e2e-tests",title:"E2E Tests",sidebar_label:"E2E Tests"},o={unversionedId:"developer/developers-guide-e2e-tests",id:"version-4.1.0/developer/developers-guide-e2e-tests",isDocsHomePage:!1,title:"E2E Tests",description:"The Stratos E2E test suite exercises the Stratos UI using protractor/web-driver.",source:"@site/versioned_docs/version-4.1.0/developer/developers-guide-e2e-tests.md",permalink:"/docs/developer/developers-guide-e2e-tests",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/versioned_docs/version-4.1.0/developer/developers-guide-e2e-tests.md",version:"4.1.0",sidebar_label:"E2E Tests",sidebar:"version-4.1.0/docs",previous:{title:"Helm Development Guide",permalink:"/docs/developer/developers-guide-helm"},next:{title:"Developer Links + Environment",permalink:"/docs/developer/developers-guide-env-tech"}},c=[{value:"Pre-requisites",id:"pre-requisites",children:[{value:"NPM",id:"npm",children:[]},{value:"Cloud Foundry",id:"cloud-foundry",children:[]}]},{value:"Running the E2E Set up Script",id:"running-the-e2e-set-up-script",children:[{value:"Minimum Requirements",id:"minimum-requirements",children:[]},{value:"Script Output",id:"script-output",children:[]},{value:"Running the Script",id:"running-the-script",children:[]},{value:"Configure Tests To Use Script Output",id:"configure-tests-to-use-script-output",children:[]},{value:"Tidying up test generated CF entities",id:"tidying-up-test-generated-cf-entities",children:[]}]},{value:"Running the tests",id:"running-the-tests",children:[]},{value:"Running tests on Browserstack",id:"running-tests-on-browserstack",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Stratos E2E test suite exercises the Stratos UI using protractor/web-driver."),Object(i.b)("p",null,"The tests require a Stratos instance to be running (front-end and back-end) and for a Cloud Foundry to be available to use for testing."),Object(i.b)("p",null,"Developers' should be aware that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The E2E tests are destructive on the Stratos system being tested - since they test endpoint registration, they will un-register any existing endpoints."),Object(i.b)("li",{parentName:"ul"},"The E2E tests will create orgs, spaces, applications, routes, etc in the Cloud Foundry instance that is specified. Tests should automatically tidy up afterwards unless stopped abruptly.")),Object(i.b)("h2",{id:"pre-requisites"},"Pre-requisites"),Object(i.b)("h3",{id:"npm"},"NPM"),Object(i.b)("p",null,"The test run via NPM, which should be installed the normal way."),Object(i.b)("h3",{id:"cloud-foundry"},"Cloud Foundry"),Object(i.b)("p",null,"The tests require an instance of Cloud Foundry with the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A user with cloud-controller.admin scope (i.e. an Cloud Foundry admin)"),Object(i.b)("li",{parentName:"ul"},"A user without cloud-controller.admin scope (i.e. a regular Cloud Foundry user)"),Object(i.b)("li",{parentName:"ul"},"A user which both scim.invite and cloud_controller.admin (i.e. a Cloud Foundry user that can use the invite user feature)"),Object(i.b)("li",{parentName:"ul"},"A number of pre-existing orgs, spaces with appropriate roles applied to the admin and non-admin users"),Object(i.b)("li",{parentName:"ul"},"A number of other Cloud Foundry entities")),Object(i.b)("p",null,"To meet the above requirements we recommend running the Stratos CF E2E set up script which is kept up to date with the latest test requirements.\nMore information can be found ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#running-the-e2e-set-up-script"}),"below"),"."),Object(i.b)("p",null,"Before running the E2E tests, you need to create a file named ",Object(i.b)("inlineCode",{parentName:"p"},"secrets.yaml")," in the root of the Stratos folder. An example template is included in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/cloudfoundry/stratos/blob/master/src/test-e2e/secrets.yaml.example"}),"src/test-e2e/secrets.yaml.example")," - copy this to ",Object(i.b)("inlineCode",{parentName:"p"},"secrets.yaml")," and edit accordingly."),Object(i.b)("p",null,"If you want to run the tests in headless Chrome, add the following to the secrets file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"headless: true\n")),Object(i.b)("h2",{id:"running-the-e2e-set-up-script"},"Running the E2E Set up Script"),Object(i.b)("p",null,"The script can be found in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/cloudfoundry/stratos/blob/master/deploy/tools/init-cf-for-e2e.sh"}),"deploy/tools/init-cf-for-e2e.sh")),Object(i.b)("h3",{id:"minimum-requirements"},"Minimum Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"CF CLI"),Object(i.b)("li",{parentName:"ul"},"UAA CLI"),Object(i.b)("li",{parentName:"ul"},"A user with cloud-controller.admin scope (i.e. an Cloud Foundry admin)")),Object(i.b)("h3",{id:"script-output"},"Script Output"),Object(i.b)("p",null,"The script does a number of things, including but not exclusively..."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Creates test CF users"),Object(i.b)("li",{parentName:"ul"},"Creates an organisation and space to test a subset of features in, including assigning roles to certain configured users"),Object(i.b)("li",{parentName:"ul"},"Clones a basic CF application from github and pushes to the test org/space"),Object(i.b)("li",{parentName:"ul"},"Creates a new user in uaa which will be used to configure the Invite User feature"),Object(i.b)("li",{parentName:"ul"},"Enables deploying applications from docker"),Object(i.b)("li",{parentName:"ul"},"Creates a number of public, private and space scoped services from applications it pushes to CF")),Object(i.b)("h3",{id:"running-the-script"},"Running the Script"),Object(i.b)("p",null,"Please see the file itself for a list of required properties. Some have defaults in. We would recommend updating at least"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ADMIN - Username for the CF admin"),Object(i.b)("li",{parentName:"ul"},"ADMIN_PASS - Password for the CF admin"),Object(i.b)("li",{parentName:"ul"},"CF_API_ENDPOINT - CF to test against"),Object(i.b)("li",{parentName:"ul"},"UAA_CLI_CMD - UAA CLI command"),Object(i.b)("li",{parentName:"ul"},"UAA_ENDPOINT - UAA endpoint used by CF"),Object(i.b)("li",{parentName:"ul"},"ADMIN_CLIENT_SECRET - UAA admin client's secret"),Object(i.b)("li",{parentName:"ul"},"UAA_ZONE - Leave blank if no zone is required")),Object(i.b)("h3",{id:"configure-tests-to-use-script-output"},"Configure Tests To Use Script Output"),Object(i.b)("p",null,"Given the output of the script, the following template can be used to update the CF section of ",Object(i.b)("inlineCode",{parentName:"p"},"secrets.yaml")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"  cf:\n  - name: cf\n    url: <CF_URL>\n    skipSSLValidation: true\n    testOrg: e2e\n    testSpace: e2e\n    testService: app-autoscaler\n    services:\n      bindApp: go-env\n      publicService:\n        name: public-service\n      privateService:\n        name: private-service\n        invalidOrgName: test-e2e\n        invalidSpaceName: test-e2e\n      spaceScopedService:\n        name: space-scoped-service\n        invalidOrgName: test-e2e\n        invalidSpaceName: test-e2e\n    creds:\n      admin:\n        username: <CF_ADMIN_USERNAME>\n        password: <CF_ADMIN_PASSWORD>\n      nonAdmin:\n        username: e2e\n        password: changeme\n      removeUser:\n        username: e2e-remove-user\n        password: changeme\n    invite:\n      clientId: stratos-invite\n      clientSecret: changeme\n    uaa:\n      creds:\n        clientId: <uaa client id>\n        clientSecret: <uaa client secret>\n      tokenEndpoint: <uaa endpoint>\n      zone: <uaa zone>\n")),Object(i.b)("h3",{id:"tidying-up-test-generated-cf-entities"},"Tidying up test generated CF entities"),Object(i.b)("p",null,"If tests are stopped before completing or fail to clean old test artifacts will exist in the CF. To clean some of these please see the script\nat ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/cloudfoundry/stratos/blob/master/deploy/ci/automation/e2e-clean-remnants.sh"}),"deploy/ci/automation/e2e-clean-remnants.sh")),Object(i.b)("h2",{id:"running-the-tests"},"Running the tests"),Object(i.b)("p",null,"To run the tests against an instance of Stratos execute"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"STRATOS_E2E_BASE_URL=<URL of stratos> ng e2e --dev-server-target= --base-url=<URL of stratos>\n")),Object(i.b)("p",null,"If running Stratos on ",Object(i.b)("inlineCode",{parentName:"p"},"https://127.0.0.1:4200")," then instead execute"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run e2e-dev\n")),Object(i.b)("h2",{id:"running-tests-on-browserstack"},"Running tests on Browserstack"),Object(i.b)("p",null,"You can run the E2E tests on Browserstack instead of with a local browser."),Object(i.b)("p",null,"To do so, configure the following environment variables:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Variable"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"BROWSERSTACK_USER"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Your Browserstack user ID")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"BROWSERSTACK_KEY"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Your Browserstack key")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"BROWSERSTACK_TARGET"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The Browser (and OS) to use (see below)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"BROWSERSTACK_PROJECT"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Project name")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"BROWSERSTACK_BUILD"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Build name")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"BROWSERSTACK_NAME"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Name")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"BROWSERSTACK_RESOLUTION"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Screen resolution to use")))),Object(i.b)("p",null,"For more information on project, build and name, see: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.browserstack.com/automate/capabilities"}),"https://www.browserstack.com/automate/capabilities"),"."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"BROWSERSTACK_TARGET")," environment variable can be just a Browser name, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"Chrome"),", or a name and version (separated by a space), e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"Chrome 69"),"."),Object(i.b)("p",null,"You can also specify which OS to use by separating the OS and browser with a ",Object(i.b)("inlineCode",{parentName:"p"},"/"),", e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"Windows/Chrome"),". You can also specify the OS version by separating with a space, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"Windows 10/Chrome"),". You can fully described the OS and Browser with ",Object(i.b)("inlineCode",{parentName:"p"},"Windows 10/Chrome 69"),"."),Object(i.b)("p",null,"For more information on supported Operating Systems/devices and browsers, see ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.browserstack.com/list-of-browsers-and-platforms?product=js_testing"}),"https://www.browserstack.com/list-of-browsers-and-platforms?product=js_testing")," and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.browserstack.com/automate/protractor"}),"https://www.browserstack.com/automate/protractor"),"."),Object(i.b)("p",null,"As an example, to run the E2E tests against a locally run Stratos dev system, use:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'BROWSERSTACK_TARGET="Chrome" npm run e2e-dev\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: This assumes you have set the ",Object(i.b)("inlineCode",{parentName:"p"},"BROWSERSTACK_USER")," and ",Object(i.b)("inlineCode",{parentName:"p"},"BROWSERSTACK_KEY")," environment variables already.")),Object(i.b)("p",null,"Running the tests in this manner uses the browserstack-local npm package to allow the tests to run against your local system. To ensure that ",Object(i.b)("inlineCode",{parentName:"p"},"BrowserStackLocal")," processes are not left running if a test run is aborted, all ",Object(i.b)("inlineCode",{parentName:"p"},"BrowserStackLocal")," processes are terminated when the E2E test process exits."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: When the E2E tests are run using BrowserStack, the test reporter is modified to include timing information to help correlate tests to the captured video of the test run.")))}b.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);