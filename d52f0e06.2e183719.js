(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{295:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(2),r=n(6),i=(n(0),n(354)),a={title:"Connecting Prometheus-boshrelease to Stratos",sidebar_label:"Connecting Prometheus-boshrelease"},s={unversionedId:"endpoints/metrics/bosh-metrics",id:"version-4.3.0/endpoints/metrics/bosh-metrics",isDocsHomePage:!1,title:"Connecting Prometheus-boshrelease to Stratos",description:"Stratos can show some metrics stored in Prometheus.",source:"@site/versioned_docs/version-4.3.0/endpoints/metrics/bosh-metrics.md",permalink:"/docs/4.3.0/endpoints/metrics/bosh-metrics",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/versioned_docs/version-4.3.0/endpoints/metrics/bosh-metrics.md",version:"4.3.0",sidebar_label:"Connecting Prometheus-boshrelease",sidebar:"version-4.3.0/docs",previous:{title:"Stratos Metrics Endpoints",permalink:"/docs/4.3.0/endpoints/metrics/metrics"},next:{title:"Helm Endpoints",permalink:"/docs/4.3.0/endpoints/helm"}},c=[{value:"Configuring Prometheus-boshrelease for use with Stratos",id:"configuring-prometheus-boshrelease-for-use-with-stratos",children:[]},{value:"Connecting Prometheus to Stratos",id:"connecting-prometheus-to-stratos",children:[]},{value:"PCF Dev Example",id:"pcf-dev-example",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Stratos can show some metrics stored in Prometheus."),Object(i.b)("p",null,"A Prometheus server is required with a firehose exporter configured to take metrics from the Cloud Foundry Firehose and store them in the Prometheus server."),Object(i.b)("p",null,"One option for deploying and configuring such a Prometheus server is with ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/bosh-prometheus/prometheus-boshrelease.git"}),"prometheus-boshrelease"),"."),Object(i.b)("h2",{id:"configuring-prometheus-boshrelease-for-use-with-stratos"},"Configuring Prometheus-boshrelease for use with Stratos"),Object(i.b)("p",null,"In order for Stratos to work with your Prometheus BOSH release, when deploying ",Object(i.b)("inlineCode",{parentName:"p"},"prometheus-boshrelease")," you need to set the ",Object(i.b)("inlineCode",{parentName:"p"},"metrics_environment")," value."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"metrics_environment")," value must be set to the value of the ",Object(i.b)("inlineCode",{parentName:"p"},"doppler_logging_endpoint")," for your Cloud Foundry, with the prefixing ",Object(i.b)("inlineCode",{parentName:"p"},"wss://")," protocol removed."),Object(i.b)("p",null,"For example, for PCF Dev, you would set the ",Object(i.b)("inlineCode",{parentName:"p"},"metrics_environment")," value when deploying with bosh, by adding the following to your ",Object(i.b)("inlineCode",{parentName:"p"},"bosh deploy")," command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"-v metrics_environment=doppler.local.pcfdev.io:443\n")),Object(i.b)("p",null,"Once deployed, you should wait until the ",Object(i.b)("inlineCode",{parentName:"p"},"firehose")," target is available and its status is ",Object(i.b)("inlineCode",{parentName:"p"},"UP"),"."),Object(i.b)("h2",{id:"connecting-prometheus-to-stratos"},"Connecting Prometheus to Stratos"),Object(i.b)("p",null,"To view metrics within Stratos, you must connect the Prometheus server to Stratos, to do so:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Go to the endpoints view"),Object(i.b)("li",{parentName:"ol"},"Click the '+' icon to register a new endpoint"),Object(i.b)("li",{parentName:"ol"},"Select the endpoint type ",Object(i.b)("inlineCode",{parentName:"li"},"Metrics")),Object(i.b)("li",{parentName:"ol"},"Enter a memorable name for your metrics endpoint for the ",Object(i.b)("inlineCode",{parentName:"li"},"Name")),Object(i.b)("li",{parentName:"ol"},"Enter the URL of the Prometheus server for the ",Object(i.b)("inlineCode",{parentName:"li"},"Endpoint Address")),Object(i.b)("li",{parentName:"ol"},"Click 'Finish`"),Object(i.b)("li",{parentName:"ol"},"Click on the three-dot menu icon on the right-hand-side of the endpoint you just added above in the endpoints list and click the menu icon"),Object(i.b)("li",{parentName:"ol"},"Click 'Connect' in the pop-up menu"),Object(i.b)("li",{parentName:"ol"},"Change the ",Object(i.b)("inlineCode",{parentName:"li"},"Auth Type")," to ",Object(i.b)("inlineCode",{parentName:"li"},"No Authentication")),Object(i.b)("li",{parentName:"ol"},"Check the ",Object(i.b)("inlineCode",{parentName:"li"},"Share this endpoint connection")," - this allows all users to view metrics using this connection. Note that only Administrators will be able to view Cell metrics and that users can only view Application metrics for applications that they have permissions to view."),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("inlineCode",{parentName:"li"},"Connect"))),Object(i.b)("p",null,"The view should refresh to show the Metrics endpoint. You can click on the endpoint name in the table to show some basic metadata about the metrics endpoint. If everything is configured correctly, it should show you that the metrics endpoint is providing metrics for your Cloud Foundry deployment."),Object(i.b)("p",null,"Metrics should now be available on the view for an Application and also on the ",Object(i.b)("inlineCode",{parentName:"p"},"Cells")," tab of the Cloud Foundry view."),Object(i.b)("h2",{id:"pcf-dev-example"},"PCF Dev Example"),Object(i.b)("p",null,"The instructions below illiustrate how to deploy and configure ",Object(i.b)("inlineCode",{parentName:"p"},"prometheus-boshrelease")," using bosh-lite and a local PCF Dev deployment."),Object(i.b)("p",null,"Follow instructions ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://bosh.io/docs/quick-start/"}),"here")," to bring up a local bosh-lite deployment."),Object(i.b)("p",null,"Run these two steps to update the deployment and load the stemcell:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"bosh -e vbox update-cloud-config bosh-deployment/warden/cloud-config.yml\nbosh -e vbox upload-stemcell https://bosh.io/d/stemcells/bosh-warden-boshlite-ubuntu-trusty-go_agent?v=3468.17 \\\n  --sha1 1dad6d85d6e132810439daba7ca05694cec208ab\n")),Object(i.b)("p",null,"Clone the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/bosh-prometheus/prometheus-boshrelease"}),"prometheus-boshrelease")," GitHub repository and change directory into it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"git clone https://github.com/bosh-prometheus/prometheus-boshrelease.git\ncd prometheus-boshrelease\n")),Object(i.b)("p",null,"You need to create two UAA Clients (ensure you have the ",Object(i.b)("inlineCode",{parentName:"p"},"uaac")," CLI installed):"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"uaac target https://login.plocal.pcfdev.io --skip-ssl-validation\nuaac token client get admin -s admin-client-secret\nuaac client add cf_exporter \\\n  --name cf_exporter \\\n  --secret prometheus-client-secret \\\n  --authorized_grant_types client_credentials,refresh_token \\\n  --authorities cloud_controller.admin_read_only \\\n  --scope openid,cloud_controller.admin_read_only\nuaac client add firehose_exporter \\\n  --name firehose_exporter \\\n  --secret prometheus-client-secret \\\n  --authorized_grant_types client_credentials,refresh_token \\\n  --authorities doppler.firehose \\\n  --scope openid,doppler.firehose\n")),Object(i.b)("p",null,"Store the Bosh CA Certificate in a file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"echo $BOSH_CA_CERT > bosh_ca_cert\n")),Object(i.b)("p",null,"Get the BOSH URL by examining your config file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"cat ~/.bosh/config\n")),Object(i.b)("p",null,"Find the ",Object(i.b)("inlineCode",{parentName:"p"},"vbox")," environment and make a note of the url field - set an environment variable ",Object(i.b)("inlineCode",{parentName:"p"},"BOSH_IP")," to this value."),Object(i.b)("p",null,"You can now deploy Prometheus Bosh Release with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"bosh -d prometheus deploy manifests/prometheus.yml \\\n  --vars-store tmp/deployment-vars.yml \\\n  -o manifests/operators/monitor-bosh.yml \\\n  -v metrics_environment=doppler.local.pcfdev.io:443 \\\n  -o manifests/operators/monitor-cf.yml \\\n  -v system_domain=local.pcfdev.io \\\n  -v metron_deployment_name=local.pcfdev.io \\\n  -v uaa_clients_cf_exporter_secret=prometheus-client-secret \\\n  -v uaa_clients_firehose_exporter_secret=prometheus-client-secret \\\n  -v traffic_controller_external_port=443 \\\n  -v skip_ssl_verify=true \\\n  -v bosh_password=${BOSH_CLIENT_SECRET} \\\n  -v bosh_username=${BOSH_CLIENT} \\\n  -v bosh_url=https://${BOSH_IP}:25555 \\\n  --var-file bosh_ca_cert=bosh_ca_cert\n")),Object(i.b)("p",null,"Wait for deployment to complete."),Object(i.b)("p",null,"List the instances in the deployment with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"bosh instances -d prometheus\n")),Object(i.b)("p",null,"Find the IP Address for the ",Object(i.b)("inlineCode",{parentName:"p"},"prometheus2")," instance. The Prometheus endpoint will be: ",Object(i.b)("inlineCode",{parentName:"p"},"http://IP:9090"),"."),Object(i.b)("p",null,"Open a web browser and load the Prometheus URL. open the ",Object(i.b)("inlineCode",{parentName:"p"},"Status")," menu and select targets. Refresh the page until the firehose target is up."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: It can take a few minutes before all of the targets appear in Prometheus and their state becomes ",Object(i.b)("inlineCode",{parentName:"p"},"UP"),". You should see targets named ",Object(i.b)("inlineCode",{parentName:"p"},"bosh"),", ",Object(i.b)("inlineCode",{parentName:"p"},"cf")," and ",Object(i.b)("inlineCode",{parentName:"p"},"firehose")," as well as many others if everything is working correctly.")),Object(i.b)("p",null,"You should now be able to follow the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"#connecting-prometheus-to-stratos"}),"Connecting Prometheus to Stratos")," instructions for registering and connecting Prometheus to Stratos."))}p.isMDXComponent=!0},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),h=o,d=b["".concat(a,".").concat(h)]||b[h]||u[h]||i;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);