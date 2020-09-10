(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{154:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(a,".").concat(d)]||p[d]||b[d]||r;return n?i.a.createElement(h,s(s({ref:t},l),{},{components:n})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(2),i=n(6),r=(n(0),n(154)),a={title:"Contributing",sidebar_label:"Contributing"},s={unversionedId:"developer/contributing",id:"version-4.0.0/developer/contributing",isDocsHomePage:!1,title:"Contributing",description:"Stratos is an open project and welcomes contributions. These guidelines are provided to help you understand how the project works and to make contributing smooth and fun for everybody involved.",source:"@site/versioned_docs/version-4.0.0/developer/contributing.md",permalink:"/docs/4.0.0/developer/contributing",editUrl:"https://github.com/cloudfoundry/stratos/edit/master/website/versioned_docs/version-4.0.0/developer/contributing.md",version:"4.0.0",sidebar_label:"Contributing",sidebar:"version-4.0.0/docs",previous:{title:"Connecting Prometheus-boshrelease to Stratos",permalink:"/docs/4.0.0/advanced/bosh-metrics"},next:{title:"Developing the Stratos Console",permalink:"/docs/4.0.0/developer/introduction"}},c=[{value:"Reporting Issues",id:"reporting-issues",children:[]},{value:"Code Changes",id:"code-changes",children:[{value:"Commits",id:"commits",children:[]},{value:"Pull requests and branches",id:"pull-requests-and-branches",children:[]},{value:"Check for assigned people",id:"check-for-assigned-people",children:[]},{value:"Sign your work",id:"sign-your-work",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Stratos is an open project and welcomes contributions. These guidelines are provided to help you understand how the project works and to make contributing smooth and fun for everybody involved."),Object(r.b)("p",null,"There are two main forms of contribution: reporting issues and performing code changes."),Object(r.b)("h2",{id:"reporting-issues"},"Reporting Issues"),Object(r.b)("p",null,"If you find a problem with Stratos, report it using ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/cloudfoundry/stratos/issues/new"}),"GitHub issues"),"."),Object(r.b)("p",null,"Before reporting a new issue, please take a moment to check whether it has already been reported\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/cloudfoundry/stratos/issues"}),"here"),". If this is the case, please:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Read all the comments to confirm that it's the same issue you're having."),Object(r.b)("li",{parentName:"ul"},'Refrain from adding "same thing here" or "+1" comments. Just hit the\n"subscribe" button to get notifications for this issue.'),Object(r.b)("li",{parentName:"ul"},"Add a comment only if you can provide helpful information that has not been\nprovided in the discussion yet.")),Object(r.b)("p",null,"When creating a new issue, make sure you include:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"As much detail as possible about your setup/environment"),Object(r.b)("li",{parentName:"ol"},"Steps to reproduce the issue/bug"),Object(r.b)("li",{parentName:"ol"},"What you expected to happen"),Object(r.b)("li",{parentName:"ol"},"What happened instead")),Object(r.b)("p",null,"This information will help to determine the cause and prepare a fix as fast as possible."),Object(r.b)("h2",{id:"code-changes"},"Code Changes"),Object(r.b)("p",null,"Code contributions come in various forms and sizes, from simple bug fixes to implementation\nof new features. Before making any non-trivial change, get in touch with the Stratos developers first. This can prevent wasted effort later."),Object(r.b)("p",null,"To send your code change, use GitHub pull requests. The workflow is as follows:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Fork the project.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a branch based on ",Object(r.b)("inlineCode",{parentName:"p"},"master"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Implement your change, including tests and documentation.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Run tests to make sure your change didn't break anything.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Publish the branch and create a pull request.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Stratos developers will review your change and possibly point out issues.\nAdapt the code under their guidance until all issues are resolved.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Finally, the pull request will get merged or rejected."))),Object(r.b)("p",null,"See also ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://help.github.com/articles/fork-a-repo"}),"GitHub's guide on contributing"),"."),Object(r.b)("p",null,"If you want to do multiple unrelated changes, use separate branches and pull\nrequests."),Object(r.b)("h3",{id:"commits"},"Commits"),Object(r.b)("p",null,"Each commit in the pull request should do only one thing, which is clearly\ndescribed by its commit message. Especially avoid mixing formatting changes and\nfunctional changes into one commit. When writing commit messages, adhere to\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html"}),"widely used\nconventions"),"."),Object(r.b)("p",null,'When the commit fixes a bug, put a message in the body of the commit message\npointing to the number of the issue (e.g. "Fixes #123").'),Object(r.b)("h3",{id:"pull-requests-and-branches"},"Pull requests and branches"),Object(r.b)("p",null,"All work happens in branches. The master branch is only used as the target for pull\nrequests."),Object(r.b)("p",null,"During code review you often need to update pull requests. Usually you do that\nby pushing additional commits."),Object(r.b)("p",null,"In some cases where the commit history of a pull request gets too cumbersome to\nreview or you need bigger changes in the way you approach a problem which needs\nchanging of commits you already did it's more practical to create a new pull\nrequest. This new pull request often will contain squashed versions of the\nprevious pull request. Use that to clarify the changes contained in a pull\nrequest and to make review easier."),Object(r.b)("p",null,'When you replace a pull request by another one, add a message in the\ndescription of the new pull request on GitHub referencing the pull request it\nreplaces (e.g. "Supersedes #123").'),Object(r.b)("p",null,"Never force push commits. This changes history, can lead to data loss, and\ncauses trouble for people who have checked out the changes which are overwritten\nby a force push. Don't waste time with thinking about if the force push in this\none particular case would be ok, just don't do it."),Object(r.b)("h3",{id:"check-for-assigned-people"},"Check for assigned people"),Object(r.b)("p",null,"We use Github Issues for submitting known issues (e.g. bugs, features,\netc.). Some issues will have someone assigned, meaning that there's already\nsomeone that takes responsibility for fixing the issue. This is not done to\ndiscourage contributions, rather to not step in the work that has already been\ndone by the assignee. If you want to work on a known issue with someone already\nassigned to it, please contact the assignee first (e.g. by\nmentioning the assignee in a new comment on the specific issue). This way you\ncan contribute with ideas, or even with code if the assignee decides that you\ncan step in."),Object(r.b)("p",null,"If you plan to work on a non assigned issue, please add a comment on the issue\nto prevent duplicated work."),Object(r.b)("h3",{id:"sign-your-work"},"Sign your work"),Object(r.b)("p",null,"The sign-off is a simple line at the end of the explanation for the change. Your\nsignature certifies that you wrote the change or otherwise have the right to pass\nit on as an open-source change. The rules are pretty simple: if you can certify\nthe below (from ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://developercertificate.org/"}),"developercertificate.org"),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"Developer Certificate of Origin\nVersion 1.1\n\nCopyright (C) 2004, 2006 The Linux Foundation and its contributors.\n660 York Street, Suite 102,\nSan Francisco, CA 94110 USA\n\nEveryone is permitted to copy and distribute verbatim copies of this\nlicense document, but changing it is not allowed.\n\nDeveloper's Certificate of Origin 1.1\n\nBy making a contribution to this project, I certify that:\n\n(a) The contribution was created in whole or in part by me and I\n    have the right to submit it under the open source license\n    indicated in the file; or\n\n(b) The contribution is based upon previous work that, to the best\n    of my knowledge, is covered under an appropriate open source\n    license and I have the right under that license to submit that\n    work with modifications, whether created in whole or in part\n    by me, under the same open source license (unless I am\n    permitted to submit under a different license), as indicated\n    in the file; or\n\n(c) The contribution was provided directly to me by some other\n    person who certified (a), (b) or (c) and I have not modified\n    it.\n\n(d) I understand and agree that this project and the contribution\n    are public and that a record of the contribution (including all\n    personal information I submit with it, including my sign-off) is\n    maintained indefinitely and may be redistributed consistent with\n    this project or the open source license(s) involved.\n")),Object(r.b)("p",null,"Then you just add a line to each git commit message:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"Signed-off-by: Joe Smith <joe.smith@email.com>\n")),Object(r.b)("p",null,"Use your real name (sorry, no pseudonyms or anonymous contributions.)"),Object(r.b)("p",null,"If you set your ",Object(r.b)("inlineCode",{parentName:"p"},"user.name")," and ",Object(r.b)("inlineCode",{parentName:"p"},"user.email")," git configs, you can sign your\ncommit automatically with ",Object(r.b)("inlineCode",{parentName:"p"},"git commit -s"),"."))}u.isMDXComponent=!0}}]);