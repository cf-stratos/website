(window.webpackJsonp=window.webpackJsonp||[]).push([[13,15],{159:function(e){e.exports=JSON.parse('["4.0.1:372682177452d8d:true","4.0.0:372682177452d8d:true"]')},168:function(e,a,t){"use strict";var n=t(2),r=t(10),l=t(157),c=t(155),i=t(172),o=t(163),s=t(164),m=t(160),u=t(165),d=t(173),b=t(174),v=t(171),E=t(156),f=t(0),g=t.n(f),h=t(47),p=t.n(h),N=!1;a.a=function(){var e,a,t=Object(c.a)(),h=t.siteConfig.themeConfig,O=h.navbar,k=(O=void 0===O?{}:O).title,j=void 0===k?"":k,_=O.items,w=void 0===_?[]:_,C=O.hideOnScroll,x=void 0!==C&&C,y=h.colorMode,D=(y=void 0===y?{}:y).disableSwitch,L=void 0!==D&&D,V=t.isClient,I=Object(f.useState)(!1),S=I[0],M=I[1],A=Object(f.useState)(!1),H=A[0],P=A[1],T=Object(m.a)(),J=T.isDarkTheme,B=T.setLightTheme,R=T.setDarkTheme,U=Object(i.a)(x),W=U.navbarRef,z=U.isNavbarVisible,K=Object(s.a)(),q=K.logoLink,F=K.logoLinkProps,G=K.logoImageUrl,Q=K.logoAlt;Object(o.a)(S);var X=Object(f.useCallback)((function(){M(!0)}),[M]),Y=Object(f.useCallback)((function(){M(!1)}),[M]),Z=Object(f.useCallback)((function(e){return e.target.checked?R():B()}),[B,R]),$=Object(u.a)();Object(f.useEffect)((function(){$===u.b.desktop&&M(!1)}),[$]),Object(f.useEffect)((function(){var e;(e=r.a.canUseDOM?window.location.pathname:null)&&(N=!e.toLocaleLowerCase().startsWith("/docs"))}),[]);var ee=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:"right")})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:"right")}))}}(w),ae=ee.leftItems,te=ee.rightItems;return g.a.createElement("nav",{ref:W,className:Object(E.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":S},e[p.a.navbarHideable]=x,e[p.a.navbarHidden]=!z,e))},g.a.createElement("div",{className:"navbar__inner "+(N?"stratosIsNotDocsPage":"")},g.a.createElement("div",{className:"navbar__items"},null!=w&&0!==w.length&&g.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:X,onKeyDown:X},g.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},g.a.createElement("title",null,"Menu"),g.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),g.a.createElement(l.a,Object(n.a)({className:"navbar__brand",to:q},F),null!=G&&g.a.createElement("img",{key:V,className:"navbar__logo",src:G,alt:Q}),null!=j&&g.a.createElement("strong",{className:Object(E.a)("navbar__title",(a={},a[p.a.hideLogoText]=H,a))},j)),ae.map((function(e,a){return g.a.createElement(d.a,Object(n.a)({},e,{key:a}))}))),g.a.createElement("div",{className:"navbar__items navbar__items--right"},te.map((function(e,a){return g.a.createElement(d.a,Object(n.a)({},e,{key:a}))})),!L&&g.a.createElement(v.a,{className:p.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:J,onChange:Z}),g.a.createElement(b.a,{handleSearchBarToggle:P,isSearchBarExpanded:H}))),g.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Y}),g.a.createElement("div",{className:"navbar-sidebar"},g.a.createElement("div",{className:"navbar-sidebar__brand"},g.a.createElement(l.a,Object(n.a)({className:"navbar__brand",onClick:Y,to:q},F),null!=G&&g.a.createElement("img",{key:V,className:"navbar__logo",src:G,alt:Q}),null!=j&&g.a.createElement("strong",{className:"navbar__title"},j)),!L&&S&&g.a.createElement(v.a,{"aria-label":"Dark mode toggle in sidebar",checked:J,onChange:Z})),g.a.createElement("div",{className:"navbar-sidebar__items"},g.a.createElement("div",{className:"menu"},g.a.createElement("ul",{className:"menu__list"},w.map((function(e,a){return g.a.createElement(d.a,Object(n.a)({mobile:!0},e,{onClick:Y,key:a}))})))))))}},170:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(2),r=t(6),l=t(162),c=t(0),i=t.n(c),o=t(159),s=t(161),m=function(e,a){return"next"===e.name?a:e.name},u=function(e){return e.docs.find((function(a){return a.id===e.mainDocId}))};function d(e){var a,t=e.mobile,c=e.docsPluginId,d=e.nextVersionLabel,b=Object(r.a)(e,["mobile","docsPluginId","nextVersionLabel"]),v=Object(l.useActiveDocContext)(c),E=function(e){var a=[],t=o.map((function(e){return e.split(":")}));return e.forEach((function(e){var n=t.find((function(a){return a[0]===e.name}));("next"===e.name||n&&"true"===n[2])&&a.push(e)})),a}(Object(l.useVersions)(c)),f=Object(l.useLatestVersion)(c),g=E.map((function(e){var a=(null==v?void 0:v.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:m(e,d),to:a.path,isActive:function(){return e===(null==v?void 0:v.activeVersion)}}}));g.push({isNavLink:!0,label:"All Versions",to:"/versions",isActive:function(){return!1}});var h=null!==(a=v.activeVersion)&&void 0!==a?a:f,p=t?"Versions":m(h,d),N=t?void 0:u(h).path;return i.a.createElement(s.a,Object(n.a)({},b,{mobile:t,label:p,to:N,items:g}))}},191:function(e){e.exports=JSON.parse('["4.0.1","4.0.0"]')},63:function(e,a,t){"use strict";t.r(a);var n=t(157),r=t(158),l=t(155),c=t(166),i=t(0),o=t.n(i),s=t(159),m=t(191);a.default=function(){var e=Object(l.a)().siteConfig,a=void 0===e?{}:e,t=m[0],i=s.map((function(e){return e.split(":")})).filter((function(e){return e[0]!==t})),u="https://github.com/"+a.organizationName+"/"+a.projectName;return o.a.createElement(c.a,{title:"Versions",permalink:"/versions"},o.a.createElement("main",{className:"container margin-vert--lg"},o.a.createElement("h1",null,"All Versions"),o.a.createElement("div",{className:"margin-bottom--lg"},o.a.createElement("h3",{id:"latest"},"Latest version (Stable)"),o.a.createElement("p",null,"Here you can find the latest documentation."),o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",null,t),o.a.createElement("td",null,o.a.createElement(n.a,{to:Object(r.a)("/docs")},"Documentation")),o.a.createElement("td",null,o.a.createElement("a",{href:u+"/releases/tag/"+t},"Release Notes")))))),o.a.createElement("div",{className:"margin-bottom--lg"},o.a.createElement("h3",{id:"next"},"Next version (Unreleased)"),o.a.createElement("p",null,"Here you can find the documentation for unreleased version."),o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",null,"master"),o.a.createElement("td",null,o.a.createElement(n.a,{to:Object(r.a)("/docs/next")},"Documentation")),o.a.createElement("td",null,o.a.createElement("a",{href:u},"Source Code")))))),i.length>0&&o.a.createElement("div",{className:"margin-bottom--lg"},o.a.createElement("h3",{id:"archive"},"Past Versions"),o.a.createElement("p",null,"Here you can find documentation for previous versions of Docusaurus."),o.a.createElement("table",null,o.a.createElement("tbody",null,i.map((function(e){return o.a.createElement("tr",{key:e[0]},o.a.createElement("th",null,e[0]),o.a.createElement("td",null,o.a.createElement(n.a,{to:Object(r.a)("/docs/"+e[0])},"Documentation")),o.a.createElement("td",null,o.a.createElement("a",{href:u+"/releases/tag/"+e[0]},"Release Notes")))})))))))}}}]);