(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(6),o=(n(0),n(274)),a={title:"Stratos Metrics Endpoints",sidebar_label:"Introduction"},s={unversionedId:"endpoints/metrics/metrics",id:"version-4.2.0/endpoints/metrics/metrics",isDocsHomePage:!1,title:"Stratos Metrics Endpoints",description:"Stratos Metrics is a Prometheus instance drawing in metrics via Cloud Foundry and Kubernetes exporters.",source:"@site/versioned_docs/version-4.2.0/endpoints/metrics/metrics.md",permalink:"/docs/4.2.0/endpoints/metrics/metrics",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/versioned_docs/version-4.2.0/endpoints/metrics/metrics.md",version:"4.2.0",sidebar_label:"Introduction",sidebar:"version-4.2.0/docs",previous:{title:"Kubernetes Endpoints",permalink:"/docs/4.2.0/endpoints/k8s"},next:{title:"Connecting Prometheus-boshrelease to Stratos",permalink:"/docs/4.2.0/endpoints/metrics/bosh-metrics"}},c=[{value:"Installing",id:"installing",children:[]},{value:"Registering a Metrics Endpoint",id:"registering-a-metrics-endpoint",children:[]},{value:"Connecting a Metrics Endpoint",id:"connecting-a-metrics-endpoint",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/SUSE/stratos-metrics"}),"Stratos Metrics")," is a Prometheus instance drawing in metrics via Cloud Foundry and Kubernetes exporters."),Object(o.b)("p",null,"Adding a Stratos Metrics Endpoint will provide"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Application and diego cell metrics (via the CF firehose exporter)"),Object(o.b)("li",{parentName:"ol"},"Kubernetes node and pod metrics (via the kube state metrics exporter)")),Object(o.b)("h2",{id:"installing"},"Installing"),Object(o.b)("p",null,"Information on installing Stratos Metrics to Kubernetes with Helm can be found ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/SUSE/stratos-metrics#installation"}),"here"),"."),Object(o.b)("h2",{id:"registering-a-metrics-endpoint"},"Registering a Metrics Endpoint"),Object(o.b)("p",null,"Stratos Administrator's can register endpoints via the Endpoints page."),Object(o.b)("p",null,"All that's needed is the url for the metrics nginx service, as well as a friendly name to identify the endpoint in Stratos"),Object(o.b)("h2",{id:"connecting-a-metrics-endpoint"},"Connecting a Metrics Endpoint"),Object(o.b)("p",null,"The username and password of the metrics instance is required. An administrator can connect and share these credentials with all other users via ",Object(o.b)("inlineCode",{parentName:"p"},"Share this endpoint connection")))}p.isMDXComponent=!0},274:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(a,".").concat(b)]||d[b]||u[b]||o;return n?i.a.createElement(m,s(s({ref:t},l),{},{components:n})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);