(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{360:function(e){e.exports=JSON.parse('["4.4.0:4.4.0:true","4.3.0:4.3.0:true","4.2.1:f912fb9ac3:false","4.2.0:f912fb9ac3:true","4.1.0:4.1.0:true","4.0.1:372682177452d8d:false","4.0.0:372682177452d8d:true"]')},369:function(e,a,t){"use strict";var n=t(2),r=t(10),i=t(358),l=t(356),c=t(373),o=t(364),s=t(365),u=t(361),b=t(366),m=t(374),d=t(375),v=t(372),f=t(357),g=t(0),h=t.n(g),k=t(47),p=t.n(k),E=!1;a.a=function(){var e,a,t=Object(l.a)(),k=t.siteConfig.themeConfig,_=k.navbar,O=(_=void 0===_?{}:_).title,j=void 0===O?"":O,N=_.items,w=void 0===N?[]:N,C=_.hideOnScroll,L=void 0!==C&&C,x=k.colorMode,I=(x=void 0===x?{}:x).disableSwitch,V=void 0!==I&&I,D=t.isClient,y=Object(g.useState)(!1),M=y[0],S=y[1],A=Object(g.useState)(!1),T=A[0],P=A[1],B=Object(u.a)(),J=B.isDarkTheme,H=B.setLightTheme,U=B.setDarkTheme,W=Object(c.a)(L),K=W.navbarRef,R=W.isNavbarVisible,q=Object(s.a)(),z=q.logoLink,F=q.logoLinkProps,G=q.logoImageUrl,Q=q.logoAlt;Object(o.a)(M);var X=Object(g.useCallback)((function(){S(!0)}),[S]),Y=Object(g.useCallback)((function(){S(!1)}),[S]),Z=Object(g.useCallback)((function(e){return e.target.checked?U():H()}),[H,U]),$=Object(b.a)();Object(g.useEffect)((function(){$===b.b.desktop&&S(!1)}),[$]),Object(g.useEffect)((function(){var e;(e=r.a.canUseDOM?window.location.pathname:null)&&(E=!e.toLocaleLowerCase().startsWith("/docs"))}),[]);var ee=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:"right")})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:"right")}))}}(w),ae=ee.leftItems,te=ee.rightItems;return h.a.createElement("nav",{ref:K,className:Object(f.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":M},e[p.a.navbarHideable]=L,e[p.a.navbarHidden]=!R,e))},h.a.createElement("div",{className:"navbar__inner "+(E?"stratosIsNotDocsPage":"")},h.a.createElement("div",{className:"navbar__items"},null!=w&&0!==w.length&&h.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:X,onKeyDown:X},h.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},h.a.createElement("title",null,"Menu"),h.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),h.a.createElement(i.a,Object(n.a)({className:"navbar__brand",to:z},F),null!=G&&h.a.createElement("img",{key:D,className:"navbar__logo",src:G,alt:Q}),null!=j&&h.a.createElement("strong",{className:Object(f.a)("navbar__title",(a={},a[p.a.hideLogoText]=T,a))},j)),ae.map((function(e,a){return h.a.createElement(m.a,Object(n.a)({},e,{key:a}))}))),h.a.createElement("div",{className:"navbar__items navbar__items--right"},te.map((function(e,a){return h.a.createElement(m.a,Object(n.a)({},e,{key:a}))})),!V&&h.a.createElement(v.a,{className:p.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:J,onChange:Z}),h.a.createElement(d.a,{handleSearchBarToggle:P,isSearchBarExpanded:T}))),h.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Y}),h.a.createElement("div",{className:"navbar-sidebar"},h.a.createElement("div",{className:"navbar-sidebar__brand"},h.a.createElement(i.a,Object(n.a)({className:"navbar__brand",onClick:Y,to:z},F),null!=G&&h.a.createElement("img",{key:D,className:"navbar__logo",src:G,alt:Q}),null!=j&&h.a.createElement("strong",{className:"navbar__title"},j)),!V&&M&&h.a.createElement(v.a,{"aria-label":"Dark mode toggle in sidebar",checked:J,onChange:Z})),h.a.createElement("div",{className:"navbar-sidebar__items"},h.a.createElement("div",{className:"menu"},h.a.createElement("ul",{className:"menu__list"},w.map((function(e,a){return h.a.createElement(m.a,Object(n.a)({mobile:!0},e,{onClick:Y,key:a}))})))))))}},371:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(2),r=t(6),i=t(363),l=t(0),c=t.n(l),o=t(360),s=t(362),u=function(e,a){return"next"===e.name?a:e.name},b=function(e){return e.docs.find((function(a){return a.id===e.mainDocId}))};function m(e){var a,t=e.mobile,l=e.docsPluginId,m=e.nextVersionLabel,d=Object(r.a)(e,["mobile","docsPluginId","nextVersionLabel"]),v=Object(i.useActiveDocContext)(l),f=function(e){var a=[],t=o.map((function(e){return e.split(":")}));return e.forEach((function(e){var n=t.find((function(a){return a[0]===e.name}));("next"===e.name||n&&"true"===n[2])&&a.push(e)})),a}(Object(i.useVersions)(l)),g=Object(i.useLatestVersion)(l),h=f.map((function(e){var a=(null==v?void 0:v.alternateDocVersions[e.name])||b(e);return{isNavLink:!0,label:u(e,m),to:a.path,isActive:function(){return e===(null==v?void 0:v.activeVersion)}}}));h.push({isNavLink:!0,label:"All Versions",to:"/versions",isActive:function(){return!1}});var k=null!==(a=v.activeVersion)&&void 0!==a?a:g,p=t?"Versions":u(k,m),E=t?void 0:b(k).path;return c.a.createElement(s.a,Object(n.a)({},d,{mobile:t,label:p,to:E,items:h}))}}}]);