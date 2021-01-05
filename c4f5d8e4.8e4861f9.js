(window.webpackJsonp=window.webpackJsonp||[]).push([[214,32],{269:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(357),l=t(358),s=t(355),c=t(366),i=t(356),o=t(0),m=t.n(o),u=t(270),d=t.n(u),b=[{title:m.a.createElement(m.a.Fragment,null,"Cloud Foundry"),imageUrl:"img/cloudfoundry.png",description:m.a.createElement(m.a.Fragment,null,"Stratos is the de-facto UI for Cloud Foundry, providing a rich management experience for all you Cloud Foundry needs... and we're an offical Cloud Foundry project too!"),cls:"cf-logo"},{title:m.a.createElement(m.a.Fragment,null,"Kubernetes"),imageUrl:"img/kubernetes.svg",description:m.a.createElement(m.a.Fragment,null,"Stratos sports a growing feature set for Kubernetes developers, extending its reach further towards providing a single-pane-of-glass for your Cloud Native application development needs.")},{title:m.a.createElement(m.a.Fragment,null,"Multi-Cluster"),imageUrl:"img/multi-cluster.svg",description:m.a.createElement(m.a.Fragment,null,"Stratos allows you to manage multiple Cloud Foundry and Kubernetes cluster from a single management UI")},{title:m.a.createElement(m.a.Fragment,null,"Extensible"),imageUrl:"img/extend.svg",description:m.a.createElement(m.a.Fragment,null,"Stratos is built with extensibility in mind and we continue to expand and improve the extensibility experience for developers")},{title:m.a.createElement(m.a.Fragment,null,"Open Source"),imageUrl:"img/open-source.svg",description:m.a.createElement(m.a.Fragment,null,"Stratos is Open Source with an Apache 2.0 License. Our codes lives on GitHub and we're a project within the Cloud Foundry Foundation")},{title:m.a.createElement(m.a.Fragment,null,"Easy to Deploy"),imageUrl:"img/deploy.svg",description:m.a.createElement(m.a.Fragment,null,"Stratos is easy to deploy and can be pushed as an application to Cloud Foundry, deployed to Kubernetes using Helm or run locally in a Docker container")}];function g(e){var a=e.imageUrl,t=e.title,n=e.description,r=e.cls,s=Object(l.a)(a);return m.a.createElement("div",{className:Object(i.a)("col col--4",d.a.feature)},s&&m.a.createElement("div",{className:""},m.a.createElement("img",{className:Object(i.a)(d.a.featureImage,r,"feature-img"),src:s,alt:t})),m.a.createElement("h3",null,t),m.a.createElement("p",null,n))}a.default=function(){var e=Object(s.a)().siteConfig,a=void 0===e?{}:e;return m.a.createElement(c.a,{title:"Home",description:"Stratos - Web-based Management Interface for Cloud Foundry and Kubernetes"},m.a.createElement("header",{className:Object(i.a)("hero hero--primary",d.a.heroBanner)},m.a.createElement("div",{className:"container home-intro"},m.a.createElement("h1",{className:"hero__title"},a.title),m.a.createElement("h2",{className:"hero__subtitle"},"Open-Source Multi-Cluster UI for ",m.a.createElement("br",null)," Cloud Foundry and Kubernetes"),m.a.createElement("div",{className:Object(i.a)(d.a.buttons,"get-started")},m.a.createElement(r.a,{className:Object(i.a)("button button--outline button--secondary button--lg",d.a.getStarted),to:Object(l.a)("docs/")},"Get Started"))),m.a.createElement("img",{className:"home-logo",src:"img/logo.png"})),m.a.createElement("main",null,b&&b.length>0&&m.a.createElement("section",{className:d.a.features},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row"},b.map((function(e,a){return m.a.createElement(g,Object(n.a)({key:a},e))}))))),m.a.createElement("section",{className:Object(i.a)(d.a.features,"screenshot-section","blue")},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"screenshot"},m.a.createElement("img",{className:"left",src:"img/screens/cf-app.png"}),m.a.createElement("div",null,m.a.createElement("h2",null,"Cloud Foundry"),m.a.createElement("p",null,"Deploy and manage applications in Cloud Foundry. Stream application logs, scale applications and ssh to application instances"),m.a.createElement("p",null,"View and manage Cloud Foundry organizations and spaces and quotas."),m.a.createElement("p",null,"Browse the Service Marketplace and create and manage service instances."),m.a.createElement("p",null,"and a whole lot more ..."))))),m.a.createElement("section",{className:Object(i.a)(d.a.features)},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"screenshot"},m.a.createElement("div",null,m.a.createElement("h2",null,"Kubernetes"),m.a.createElement("p",null,"View cluster-level metadata"),m.a.createElement("p",null,"Browse, view and install Helm Charts"),m.a.createElement("p",null,"View Helm Releases and see relationships between Kubernetes Resources"),m.a.createElement("p",null,"and lots more ...")),m.a.createElement("img",{className:"right",src:"img/screens/kube-graph.png"})))),m.a.createElement("section",{className:Object(i.a)(d.a.features,"screenshot-section","blue")},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"screenshot"},m.a.createElement("img",{className:"left",src:"img/screens/endpoints.png"}),m.a.createElement("div",null,m.a.createElement("h2",null,"Multi-Cluster"),m.a.createElement("p",null,"Add and Connect multiple Cloud Foundry and/or Kubernetes clusters."),m.a.createElement("p",null,"Seemlessly switch between clusters and get aggregated views across clusters."),m.a.createElement("p",null,"Favorite clusters and entities for easy access from the Home screen.")))))))}},359:function(e){e.exports=JSON.parse('["4.4.0:4.4.0:true","4.3.0:4.3.0:true","4.2.1:f912fb9ac3:false","4.2.0:f912fb9ac3:true","4.1.0:4.1.0:true","4.0.1:372682177452d8d:false","4.0.0:372682177452d8d:true"]')},368:function(e,a,t){"use strict";var n=t(2),r=t(10),l=t(357),s=t(355),c=t(372),i=t(363),o=t(364),m=t(360),u=t(365),d=t(373),b=t(374),g=t(371),v=t(356),p=t(0),E=t.n(p),f=t(47),h=t.n(f),N=!1;a.a=function(){var e,a,t=Object(s.a)(),f=t.siteConfig.themeConfig,O=f.navbar,w=(O=void 0===O?{}:O).title,y=void 0===w?"":w,j=O.items,k=void 0===j?[]:j,C=O.hideOnScroll,_=void 0!==C&&C,F=f.colorMode,S=(F=void 0===F?{}:F).disableSwitch,x=void 0!==S&&S,I=t.isClient,L=Object(p.useState)(!1),V=L[0],D=L[1],M=Object(p.useState)(!1),U=M[0],K=M[1],H=Object(m.a)(),A=H.isDarkTheme,B=H.setLightTheme,T=H.setDarkTheme,P=Object(c.a)(_),J=P.navbarRef,R=P.isNavbarVisible,W=Object(o.a)(),G=W.logoLink,q=W.logoLinkProps,z=W.logoImageUrl,Q=W.logoAlt;Object(i.a)(V);var X=Object(p.useCallback)((function(){D(!0)}),[D]),Y=Object(p.useCallback)((function(){D(!1)}),[D]),Z=Object(p.useCallback)((function(e){return e.target.checked?T():B()}),[B,T]),$=Object(u.a)();Object(p.useEffect)((function(){$===u.b.desktop&&D(!1)}),[$]),Object(p.useEffect)((function(){var e;(e=r.a.canUseDOM?window.location.pathname:null)&&(N=!e.toLocaleLowerCase().startsWith("/docs"))}),[]);var ee=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:"right")})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:"right")}))}}(k),ae=ee.leftItems,te=ee.rightItems;return E.a.createElement("nav",{ref:J,className:Object(v.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":V},e[h.a.navbarHideable]=_,e[h.a.navbarHidden]=!R,e))},E.a.createElement("div",{className:"navbar__inner "+(N?"stratosIsNotDocsPage":"")},E.a.createElement("div",{className:"navbar__items"},null!=k&&0!==k.length&&E.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:X,onKeyDown:X},E.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},E.a.createElement("title",null,"Menu"),E.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),E.a.createElement(l.a,Object(n.a)({className:"navbar__brand",to:G},q),null!=z&&E.a.createElement("img",{key:I,className:"navbar__logo",src:z,alt:Q}),null!=y&&E.a.createElement("strong",{className:Object(v.a)("navbar__title",(a={},a[h.a.hideLogoText]=U,a))},y)),ae.map((function(e,a){return E.a.createElement(d.a,Object(n.a)({},e,{key:a}))}))),E.a.createElement("div",{className:"navbar__items navbar__items--right"},te.map((function(e,a){return E.a.createElement(d.a,Object(n.a)({},e,{key:a}))})),!x&&E.a.createElement(g.a,{className:h.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:A,onChange:Z}),E.a.createElement(b.a,{handleSearchBarToggle:K,isSearchBarExpanded:U}))),E.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Y}),E.a.createElement("div",{className:"navbar-sidebar"},E.a.createElement("div",{className:"navbar-sidebar__brand"},E.a.createElement(l.a,Object(n.a)({className:"navbar__brand",onClick:Y,to:G},q),null!=z&&E.a.createElement("img",{key:I,className:"navbar__logo",src:z,alt:Q}),null!=y&&E.a.createElement("strong",{className:"navbar__title"},y)),!x&&V&&E.a.createElement(g.a,{"aria-label":"Dark mode toggle in sidebar",checked:A,onChange:Z})),E.a.createElement("div",{className:"navbar-sidebar__items"},E.a.createElement("div",{className:"menu"},E.a.createElement("ul",{className:"menu__list"},k.map((function(e,a){return E.a.createElement(d.a,Object(n.a)({mobile:!0},e,{onClick:Y,key:a}))})))))))}},370:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(2),r=t(6),l=t(362),s=t(0),c=t.n(s),i=t(359),o=t(361),m=function(e,a){return"next"===e.name?a:e.name},u=function(e){return e.docs.find((function(a){return a.id===e.mainDocId}))};function d(e){var a,t=e.mobile,s=e.docsPluginId,d=e.nextVersionLabel,b=Object(r.a)(e,["mobile","docsPluginId","nextVersionLabel"]),g=Object(l.useActiveDocContext)(s),v=function(e){var a=[],t=i.map((function(e){return e.split(":")}));return e.forEach((function(e){var n=t.find((function(a){return a[0]===e.name}));("next"===e.name||n&&"true"===n[2])&&a.push(e)})),a}(Object(l.useVersions)(s)),p=Object(l.useLatestVersion)(s),E=v.map((function(e){var a=(null==g?void 0:g.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:m(e,d),to:a.path,isActive:function(){return e===(null==g?void 0:g.activeVersion)}}}));E.push({isNavLink:!0,label:"All Versions",to:"/versions",isActive:function(){return!1}});var f=null!==(a=g.activeVersion)&&void 0!==a?a:p,h=t?"Versions":m(f,d),N=t?void 0:u(f).path;return c.a.createElement(o.a,Object(n.a)({},b,{mobile:t,label:h,to:N,items:E}))}}}]);