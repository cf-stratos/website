(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{354:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(354)),l={title:"Stratos on EKS",sidebar_label:"Stratos on EKS"},s={unversionedId:"deploy/kubernetes/eksdeployment",id:"version-4.4.0/deploy/kubernetes/eksdeployment",isDocsHomePage:!1,title:"Stratos on EKS",description:"EKS Setup",source:"@site/versioned_docs/version-4.4.0/deploy/kubernetes/eksdeployment.md",permalink:"/docs/deploy/kubernetes/eksdeployment",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/versioned_docs/version-4.4.0/deploy/kubernetes/eksdeployment.md",version:"4.4.0",sidebar_label:"Stratos on EKS",sidebar:"version-4.4.0/docs",previous:{title:"Deploying Using Helm",permalink:"/docs/deploy/kubernetes/helm-installation"},next:{title:"Deploying with the All-In-One Docker Container",permalink:"/docs/deploy/all-in-one"}},i=[{value:"EKS Setup",id:"eks-setup",children:[]},{value:"Helm Setup",id:"helm-setup",children:[]},{value:"Storage Classes",id:"storage-classes",children:[]},{value:"Stratos Deployment",id:"stratos-deployment",children:[]}],c={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"eks-setup"},"EKS Setup"),Object(o.b)("p",null,"Follow the instructions outlined in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html"}),"https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html")," to deploy an EKS cluster."),Object(o.b)("p",null,"If you plan to deploy SCF in the cluster, make the following modifications when creating the worker nodes."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Set ",Object(o.b)("inlineCode",{parentName:"li"},"NodeInstanceType")," to ",Object(o.b)("inlineCode",{parentName:"li"},"t2.large")),Object(o.b)("li",{parentName:"ul"},"Set ",Object(o.b)("inlineCode",{parentName:"li"},"NodeInstanceVolume")," to ",Object(o.b)("inlineCode",{parentName:"li"},"75"))),Object(o.b)("h2",{id:"helm-setup"},"Helm Setup"),Object(o.b)("p",null,"Download the latest Helm release (at least 2.9 is required for RBAC support) from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/helm/helm/releases"}),"https://github.com/helm/helm/releases")),Object(o.b)("p",null,"Save the following to a file caleld ",Object(o.b)("inlineCode",{parentName:"p"},"helm-rbac.yaml")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: tiller\n  namespace: kube-system\n---\napiVersion: rbac.authorization.k8s.io/v1beta1\nkind: ClusterRoleBinding\nmetadata:\n  name: tiller\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n  - kind: ServiceAccount\n    name: tiller\n    namespace: kube-system\n")),Object(o.b)("p",null,"Apply the configuration to the EKS cluster"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl apply -f helm-rbac.yaml\n")),Object(o.b)("p",null,"Install Helm"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ helm init --service-account tiller\n")),Object(o.b)("h2",{id:"storage-classes"},"Storage Classes"),Object(o.b)("p",null,"Stratos requires a storage class that is scoped to a single ",Object(o.b)("inlineCode",{parentName:"p"},"AZ"),"."),Object(o.b)("p",null,"To setup the scoped storage class, save the following to ",Object(o.b)("inlineCode",{parentName:"p"},"scoped_storage_class.yaml"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'kind: StorageClass\napiVersion: storage.k8s.io/v1\nmetadata:\n  name: gp2scoped\nprovisioner: kubernetes.io/aws-ebs\nparameters:\n  type: gp2\n  zone: "us-east-1a"\nreclaimPolicy: Retain\nmountOptions:\n  - debug\n')),Object(o.b)("p",null,"To create the storage class, execute the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl apply -f scoped_storage_class.yaml\n")),Object(o.b)("p",null,"In this guide, the scoped storage class will be referred to as ",Object(o.b)("inlineCode",{parentName:"p"},"gp2scoped"),"."),Object(o.b)("h2",{id:"stratos-deployment"},"Stratos Deployment"),Object(o.b)("p",null,"To deploy Stratos on EKS, the following configuration overrides are required, save the following to a file named ",Object(o.b)("inlineCode",{parentName:"p"},"stratos-values.yaml"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"storageClass: gp2scoped\nuseLb: true\n")),Object(o.b)("p",null,"Install ",Object(o.b)("inlineCode",{parentName:"p"},"stratos")," with Helm"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ helm install stratos/console -f stratos-values.yaml --namespace stratos --name stratos\n")))}p.isMDXComponent=!0}}]);