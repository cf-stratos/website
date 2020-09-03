(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{122:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(145),i=a(124),c=a(127),o=a(126);var m=function(e){var t=e.metadata;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(o.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(o.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var s=function(e,t,a){var l=Object(n.useState)(void 0),r=l[0],i=l[1];Object(n.useEffect)((function(){var n,l;function c(){var c=function(){var e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){var l=n[e],r=l.getBoundingClientRect().top;r>=0&&r<=a&&(t=l),e+=1}return t}();if(c){var o=0,m=!1;for(l=document.getElementsByClassName(e);o<l.length&&!m;){var s=l[o],d=s.href,u=decodeURIComponent(d.substring(d.indexOf("#")+1));c.id===u&&(r&&r.classList.remove(t),s.classList.add(t),i(s),m=!0),o+=1}}}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}))},d=a(131),u=a(57),v=a.n(u);var g=function(){Object(i.a)().siteConfig.title;var e=function(){var e=Object(d.useActivePlugin)();if(!e)throw new Error("DocVersionCallout is only supposed to be used on docs-related routes");return e.pluginId}(),t=Object(d.useActiveVersion)(e),a=Object(d.useDocVersionSuggestions)(e),n=a.latestDocSuggestion,r=a.latestVersionSuggestion;if(!r)return l.a.createElement(l.a.Fragment,null);var c=t.name;v.a;var m,s=null!=n?n:(m=r).docs.find((function(e){return e.id===m.mainDocId}));return l.a.createElement("div",{className:"alert alert--secondary margin-bottom--md",role:"alert"},"next"===c?l.a.createElement("div",{className:v.a.container},"This is the development documentation. For the latest released documentation see"," ",l.a.createElement("strong",null,l.a.createElement(o.a,{to:s.path}," ",r.name)),"."):l.a.createElement("div",{className:v.a.container},"This is documentation for ",l.a.createElement("strong",null,c),". For the latest released documentation see "," ",l.a.createElement("strong",null,l.a.createElement(o.a,{to:s.path},r.name)),"."))},E=a(125),p=a(58),f=a.n(p);function h(e){var t=e.headings;return s("table-of-contents__link","table-of-contents__link--active",100),l.a.createElement("div",{className:"col col--3"},l.a.createElement("div",{className:f.a.tableOfContents},l.a.createElement(b,{headings:t})))}function b(e){var t=e.headings,a=e.isChild;return t.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:"table-of-contents__link",dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(b,{isChild:!0,headings:e.children}))}))):null}t.default=function(e){var t,a=Object(i.a)().siteConfig,n=void 0===a?{}:a,o=n.url,s=n.title,d=e.content,u=d.metadata,v=u.description,p=u.title,b=u.permalink,_=u.editUrl,N=u.lastUpdatedAt,w=u.lastUpdatedBy,y=u.version,k=d.frontMatter,C=k.image,O=k.keywords,j=k.hide_title,x=k.hide_table_of_contents,L=p?p+" | "+s:s,I=Object(c.a)(C,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,L),l.a.createElement("meta",{property:"og:title",content:L}),v&&l.a.createElement("meta",{name:"description",content:v}),v&&l.a.createElement("meta",{property:"og:description",content:v}),O&&O.length&&l.a.createElement("meta",{name:"keywords",content:O.join(",")}),C&&l.a.createElement("meta",{property:"og:image",content:I}),C&&l.a.createElement("meta",{property:"twitter:image",content:I}),C&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+p}),b&&l.a.createElement("meta",{property:"og:url",content:o+b}),b&&l.a.createElement("link",{rel:"canonical",href:o+b})),l.a.createElement("div",{className:Object(E.a)("container padding-vert--lg",f.a.docItemWrapper)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(E.a)("col",(t={},t[f.a.docItemCol]=!x,t))},l.a.createElement(g,null),l.a.createElement("div",{className:f.a.docItemContainer},l.a.createElement("article",null,y&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",y)),!j&&l.a.createElement("header",null,l.a.createElement("h1",{className:f.a.docTitle},p)),l.a.createElement("div",{className:"markdown"},l.a.createElement(d,null))),(_||N||w)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},_&&l.a.createElement("a",{href:_,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(N||w)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",N&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*N).toISOString(),className:f.a.docLastUpdatedAt},new Date(1e3*N).toLocaleDateString()),w&&" "),w&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,w)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(m,{metadata:u})))),!x&&d.rightToc&&l.a.createElement(h,{headings:d.rightToc}))))}}}]);