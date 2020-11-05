(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{168:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var o=t(2),r=t(6),a=(t(0),t(274)),i={title:"Troubleshooting Cloud Foundry Deployment",sidebar_label:"Troubleshooting"},c={unversionedId:"deploy/cloud-foundry/cf-troubleshooting",id:"version-4.1.0/deploy/cloud-foundry/cf-troubleshooting",isDocsHomePage:!1,title:"Troubleshooting Cloud Foundry Deployment",description:"Creating logs for recent deployments",source:"@site/versioned_docs/version-4.1.0/deploy/cloud-foundry/cf-troubleshooting.md",permalink:"/docs/4.1.0/deploy/cloud-foundry/cf-troubleshooting",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/versioned_docs/version-4.1.0/deploy/cloud-foundry/cf-troubleshooting.md",version:"4.1.0",sidebar_label:"Troubleshooting",sidebar:"version-4.1.0/docs",previous:{title:"Associate a Cloud Foundry database service",permalink:"/docs/4.1.0/deploy/cloud-foundry/db-migration"},next:{title:"Deploying in Kubernetes",permalink:"/docs/4.1.0/deploy/kubernetes"}},l=[{value:"Creating logs for recent deployments",id:"creating-logs-for-recent-deployments",children:[]},{value:"Turning on backend debugging logs",id:"turning-on-backend-debugging-logs",children:[]},{value:"Application Security Groups",id:"application-security-groups",children:[]},{value:"Console fails to start",id:"console-fails-to-start",children:[]}],p={rightToc:l};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"creating-logs-for-recent-deployments"},"Creating logs for recent deployments"),Object(a.b)("p",null,"To create a log file of the push"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"cf push | tee cfpush.log\n")),Object(a.b)("p",null,"To create a log file of recent console output"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"cf logs console --recent | tee cfconsole.log\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"NOTE")," If the name of the application has been changed from ",Object(a.b)("inlineCode",{parentName:"p"},"console")," in the manifest file please also change the name in the logs statement")),Object(a.b)("h2",{id:"turning-on-backend-debugging-logs"},"Turning on backend debugging logs"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"LOG_LEVEL")," environment variable controls the backend logs "),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"cf set-env console LOG_LEVEL debug \ncf restart console\ncf logs console\n")),Object(a.b)("p",null,"would output more debugging output such as"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'  2018-10-24T14:47:36.91+0200 [RTR/1] OUT console.my.domain - [2018-10-24T12:47:36.850+0000] "GET /pp/v1/-o1F0L956QhAIK7R56Uc1lMh5L4/apps/3ddc0bc6-a645-4449-9d1b-6fe86146cf61/ssh/0 HTTP/1.1" 500 0 0 "-" "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:60.0) Gecko/20100101 Firefox/60.0" "10.228.194.8:42182" "192.168.35.91:61044" x_forwarded_for:"10.228.194.8" x_forwarded_proto:"https" vcap_request_id:"182dddeb-d877-4d58-45f7-0bd886d1caf6" response_time:0.066925325 app_id:"0ba408ef-d0e6-4ab8-96bb-0bc078b8d8fb" app_index:"0" x_b3_traceid:"d166622a0d612fea" x_b3_spanid:"d166622a0d612fea" x_b3_parentspanid:"-"\n   2018-10-24T14:47:36.91+0200 [RTR/1] OUT \n   2018-10-24T14:47:36.85+0200 [APP/PROC/WEB/0] OUT DEBU[Wed Oct 24 12:47:36 UTC 2018] sessionCleanupMiddleware                     \n   2018-10-24T14:47:36.85+0200 [APP/PROC/WEB/0] OUT DEBU[Wed Oct 24 12:47:36 UTC 2018] errorLoggingMiddleware                       \n   2018-10-24T14:47:36.85+0200 [APP/PROC/WEB/0] OUT INFO[Wed Oct 24 12:47:36 UTC 2018] Not redirecting this request                 \n   2018-10-24T14:47:36.85+0200 [APP/PROC/WEB/0] OUT DEBU[Wed Oct 24 12:47:36 UTC 2018] getSession                                   \n   2018-10-24T14:47:36.85+0200 [APP/PROC/WEB/0] OUT DEBU[Wed Oct 24 12:47:36 UTC 2018] getSessionValue                              \n   2018-10-24T14:47:36.85+0200 [APP/PROC/WEB/0] OUT DEBU[Wed Oct 24 12:47:36 UTC 2018] getSession                                   \n   2018-10-24T14:47:36.85+0200 [APP/PROC/WEB/0] OUT DEBU[Wed Oct 24 12:47:36 UTC 2018] setStaticContentHeadersMiddleware            \n   2018-10-24T14:47:36.85+0200 [APP/PROC/WEB/0] OUT DEBU[Wed Oct 24 12:47:36 UTC 2018] urlCheckMiddleware                           \n   2018-10-24T14:47:36.85+0200 [APP/PROC/WEB/0] OUT DEBU[Wed Oct 24 12:47:36 UTC 2018] sessionMiddleware                            \n   2018-10-24T14:47:36.85+0200 [APP/PROC/WEB/0] OUT DEBU[Wed Oct 24 12:47:36 UTC 2018] getSessionValue                              \n   2018-10-24T14:47:36.85+0200 [APP/PROC/WEB/0] OUT DEBU[Wed Oct 24 12:47:36 UTC 2018] getSession                                   \n   2018-10-24T14:47:36.85+0200 [APP/PROC/WEB/0] OUT DEBU[Wed Oct 24 12:47:36 UTC 2018] xsrfMiddleware                               \n   2018-10-24T14:47:36.85+0200 [APP/PROC/WEB/0] OUT DEBU[Wed Oct 24 12:47:36 UTC 2018] GetCNSIRecord                                \n   2018-10-24T14:47:36.85+0200 [APP/PROC/WEB/0] OUT DEBU[Wed Oct 24 12:47:36 UTC 2018] Find                                         \n   2018-10-24T14:47:36.85+0200 [APP/PROC/WEB/0] OUT DEBU[Wed Oct 24 12:47:36 UTC 2018] decryptToken                                 \n   2018-10-24T14:47:36.85+0200 [APP/PROC/WEB/0] OUT DEBU[Wed Oct 24 12:47:36 UTC 2018] Decrypt                                      \n   [...]\n')),Object(a.b)("h2",{id:"application-security-groups"},"Application Security Groups"),Object(a.b)("p",null,"If you have problems when deploying Stratos as a Cloud Foundry application, check that the Application Security Group you have will allow Stratos to communicate with the Cloud Foundry API."),Object(a.b)("p",null,"For information on the default ASGs, see ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.cloudfoundry.org/concepts/asg.html#default-asg"}),"here"),"."),Object(a.b)("p",null,"To configure a new ASG for the organization and space that are using Stratos, first create a new ASG definition, for example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'[\n   {\n      "destination":"0.0.0.0-255.255.255.255",\n      "protocol":"all"\n   }\n]\n')),Object(a.b)("p",null,"Save this to a file, e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"my-asg.json"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: this allows example all network traffic on all IP ranges - we don't recommend using this.")),Object(a.b)("p",null,"Unbind the existing ASG for you organization (",Object(a.b)("inlineCode",{parentName:"p"},"ORG"),") and space (",Object(a.b)("inlineCode",{parentName:"p"},"SPACE"),") with:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"cf unbind-security-group public_networks ORG SPACE\n")),Object(a.b)("p",null,"Create a new ASG using the definition you saved to a file and give it a name, with:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"cf create-security-group NAME my-asg.json\n")),Object(a.b)("p",null,"Bind this ASG to your ",Object(a.b)("inlineCode",{parentName:"p"},"ORG")," and ",Object(a.b)("inlineCode",{parentName:"p"},"SPACE")," with:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"cf bind-security-group NAME ORG SPACE\n")),Object(a.b)("h2",{id:"console-fails-to-start"},"Console fails to start"),Object(a.b)("p",null,"The Stratos Console will automatically detect the API endpoint for your Cloud Foundry. To do so, it relies on the ",Object(a.b)("inlineCode",{parentName:"p"},"cf_api")," value inside the ",Object(a.b)("inlineCode",{parentName:"p"},"VCAP_APPLICATION")," environment variable.\nTo check if the variable is present, use the CF CLI to list environment variables, and inspect the ",Object(a.b)("inlineCode",{parentName:"p"},"VCAP_APPLICATION")," variable under ",Object(a.b)("inlineCode",{parentName:"p"},"System-Provided"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'$ cf env console\nGetting env variables for app console in org SUSE / space dev as admin...\nOK\n\nSystem-Provided:\n\n\n {\n  "VCAP_APPLICATION": {\n   "application_id": ...,\n   "application_name": "console",\n   "application_uris": ...\n   "application_version": ...,\n   "cf_api": "http://api.cf-dev.io",\n   ...\n }\n\n No user-defined env variables have been set\n ...\n')),Object(a.b)("p",null,"If the ",Object(a.b)("inlineCode",{parentName:"p"},"cf_api")," environment variable is absent then set the ",Object(a.b)("inlineCode",{parentName:"p"},"CF_API_URL")," variable. See the following ",Object(a.b)("em",{parentName:"p"},"Setting the ",Object(a.b)("inlineCode",{parentName:"em"},"CF_API_URL")," env variable in the manifest")," section."),Object(a.b)("p",null,"However, if the ",Object(a.b)("inlineCode",{parentName:"p"},"cf_api")," environment variable is present, and an HTTP address is specified, it is possible that insecure traffic may be blocked. See the following ",Object(a.b)("em",{parentName:"p"},"Setting the ",Object(a.b)("inlineCode",{parentName:"em"},"CF_API_FORCE_SECURE")," env variable in the manifest")," section."),Object(a.b)("h4",{id:"setting-the-cf_api_url-env-variable-in-the-manifest"},"Setting the ",Object(a.b)("inlineCode",{parentName:"h4"},"CF_API_URL")," env variable in the manifest"),Object(a.b)("p",null,"To specify the Cloud Foundry API endpoint, add the ",Object(a.b)("inlineCode",{parentName:"p"},"CF_API_URL")," variable to the manifest, for example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"applications:\n- name: console\n  memory: 256M\n  disk_quota: 256M\n  host: console\n  timeout: 180\n  buildpack: https://github.com/cloudfoundry/stratos-buildpack\n  health-check-type: port\n  env:\n    CF_API_URL: https://<<CLOUD FOUNDRY API ENDPOINT>>>\n")),Object(a.b)("h4",{id:"setting-the-cf_api_force_secure-env-variable-in-the-manifest"},"Setting the ",Object(a.b)("inlineCode",{parentName:"h4"},"CF_API_FORCE_SECURE")," env variable in the manifest"),Object(a.b)("p",null,"To force the console to use secured communication with the Cloud Foundry API endpoint (HTTPS rather than HTTP), specify the ",Object(a.b)("inlineCode",{parentName:"p"},"CF_API_FORCE_SECURE")," environment in the manifest, for example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"applications:\n- name: console\n  memory: 256M\n  disk_quota: 256M\n  host: console\n  timeout: 180\n  buildpack: https://github.com/cloudfoundry/stratos-buildpack\n  health-check-type: port\n  env:\n    CF_API_FORCE_SECURE: true\n")))}s.isMDXComponent=!0},274:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return O}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),u=o,O=b["".concat(i,".").concat(u)]||b[u]||d[u]||a;return t?r.a.createElement(O,c(c({ref:n},p),{},{components:t})):r.a.createElement(O,c({ref:n},p))}));function O(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);