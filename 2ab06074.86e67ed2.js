(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return u}));var r=a(2),l=a(6),n=(a(0),a(149)),i={},s={id:"planning/cf-user-management",isDocsHomePage:!1,title:"cf-user-management",description:"Cloud Foundry User Management",source:"@site/docs/planning/cf-user-management.md",permalink:"/docs/planning/cf-user-management",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/docs/planning/cf-user-management.md"},o=[{value:"Requirements",id:"requirements",children:[]},{value:"V1",id:"v1",children:[{value:"V1 Issues",id:"v1-issues",children:[]}]},{value:"V2",id:"v2",children:[{value:"First pass implementation - Changes to V1",id:"first-pass-implementation---changes-to-v1",children:[]},{value:"Second pass",id:"second-pass",children:[]},{value:"Design input required pre release",id:"design-input-required-pre-release",children:[]}]},{value:"Similar Implementations",id:"similar-implementations",children:[]}],c={rightToc:o};function u(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"cloud-foundry-user-management"},"Cloud Foundry User Management"),Object(n.b)("h2",{id:"requirements"},"Requirements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"View the organisation and space roles for all users"),Object(n.b)("li",{parentName:"ul"},"Edit the organisation and space roles for a specific user"),Object(n.b)("li",{parentName:"ul"},"Assign multiple organisation and/or space roles for multiple users")),Object(n.b)("h2",{id:"v1"},"V1"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Users tab + table at CF, organisation and space level",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"CF level shows user ",Object(n.b)("em",{parentName:"li"},"organisation")," roles for all organisations as pills"),Object(n.b)("li",{parentName:"ul"},"Org level shows user ",Object(n.b)("em",{parentName:"li"},"space")," roles for all spaces as pills"),Object(n.b)("li",{parentName:"ul"},"Space level shows user ",Object(n.b)("em",{parentName:"li"},"space")," roles for space as pills"))),Object(n.b)("li",{parentName:"ul"},"Table provided links to update roles",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"'Manage' a single user - pop up showing orgs/spaces (depending on level) roles. Allowed edit of all shown roles"),Object(n.b)("li",{parentName:"ul"},"'Change' multiple users - similar to manage, however no existing roles were shown. New selection ",Object(n.b)("em",{parentName:"li"},"replaced")," existing roles"),Object(n.b)("li",{parentName:"ul"},"'Remove all' roles of selected users. These are specific to the level (cf - remove all orgs/spaces, org - remove all org/spaces, space - remove all space)"))),Object(n.b)("li",{parentName:"ul"},"All cf/org/space pages allow user to 'Assign' roles in a pop up",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"pop up contains stepper, one stage to select user/s and another role/s"),Object(n.b)("li",{parentName:"ul"},"can only assign roles to a single org and it's spaces"),Object(n.b)("li",{parentName:"ul"},"no existing roles are shown")))),Object(n.b)("h3",{id:"v1-issues"},"V1 Issues"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Handling large amount of orgs or spaces",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Pill format to represent user roles lead to potentially large blobs of pills which were hard to extract information from but did show\nthe data in as small as possible area"),Object(n.b)("li",{parentName:"ul"},"The Manage/Change popup didn't scale well at the CF level for lots of orgs or org level for lots of spaces"))),Object(n.b)("li",{parentName:"ul"},"Only showing org or space roles in the table can lead to confusion, for example user edits org roles at space level and no changes to table."),Object(n.b)("li",{parentName:"ul"},"Multiple ways to reach the same window (buttons above tables, row actions)"),Object(n.b)("li",{parentName:"ul"},"Can only mass assign roles one org at a time"),Object(n.b)("li",{parentName:"ul"},"No concept of inviting users",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Need to understand how this would work by supplying an email. API provides a way to create users with their UAA guid")))),Object(n.b)("h2",{id:"v2"},"V2"),Object(n.b)("h3",{id:"first-pass-implementation---changes-to-v1"},"First pass implementation - Changes to V1"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"'Change' multiple user modal",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"To be removed. The ability to 'reset' multiple users needs more work."))),Object(n.b)("li",{parentName:"ul"},"'Manage' single user modal",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Only allow edit of a single org and it's spaces in the 'Manage' pop up, as per the assign. This restricts functionality but presents the\ninformation in a clearer way and scales much better for multiple orgs."),Object(n.b)("li",{parentName:"ul"},"Tidy the position of 'remove from org'"),Object(n.b)("li",{parentName:"ul"},"Stretch - Remove the 'org user' and handle automatically in the background?"))),Object(n.b)("li",{parentName:"ul"},"'Assign'",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Step 2 - Ensure consistent UX with 'Manage' or vice versa"))),Object(n.b)("li",{parentName:"ul"},"Users Tab/Table",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Show org and space columns for their roles. Relevant to level (cf - both, org - both, space - space only)"),Object(n.b)("li",{parentName:"ul"},"Provide a way to collapse list of roles automatically when there's a large amount."),Object(n.b)("li",{parentName:"ul"},"Stretch - Provide a way to filter per role. This will allow user to quickly see who's, for instance, a manager.")))),Object(n.b)("h3",{id:"second-pass"},"Second pass"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Invite/Create user"),Object(n.b)("li",{parentName:"ul"},"Remove user"),Object(n.b)("li",{parentName:"ul"},"Reset users roles")),Object(n.b)("h3",{id:"design-input-required-pre-release"},"Design input required pre release"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Validate first pass approach"),Object(n.b)("li",{parentName:"ul"},"Review use case/possible solutions to update/reset multiple users roles"),Object(n.b)("li",{parentName:"ul"},"Review use of pills in table"),Object(n.b)("li",{parentName:"ul"},"Review second roles column in table"),Object(n.b)("li",{parentName:"ul"},"Review Manage/Assign layout")),Object(n.b)("h2",{id:"similar-implementations"},"Similar Implementations"),Object(n.b)("p",null,"High level description of other CF UIs"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Management at org and space level",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Roughly table like views"),Object(n.b)("li",{parentName:"ul"},"Each user listed in rows"),Object(n.b)("li",{parentName:"ul"},"Org/Space roles as columns"))),Object(n.b)("li",{parentName:"ul"},"Editing a users roles by..",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"a check box in the roles column (each change an individual api request at time of click)"),Object(n.b)("li",{parentName:"ul"},"a pop up allowing edits to all org OR space roles for a specific row/user"),Object(n.b)("li",{parentName:"ul"},"All edits are very specific to user"))),Object(n.b)("li",{parentName:"ul"},"Provide a way to invite new users by email address.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Can specify what roles they have at invite time")))),Object(n.b)("blockquote",null,Object(n.b)("blockquote",{parentName:"blockquote"},Object(n.b)("p",{parentName:"blockquote"},"Note .. There's no easy way to check user/s management at Cloud Foundry admin level, which is where some of the fun starts."))))}u.isMDXComponent=!0},149:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(0),l=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=l.a.createContext({}),u=function(e){var t=l.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||n;return a?l.a.createElement(d,s(s({ref:t},c),{},{components:a})):l.a.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);