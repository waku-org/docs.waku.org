"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[1374],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,k=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.default)(o.tabItem,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),s=a(70989),i=a(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==s&&(m(t),i(r))},k=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:k,onClick:d},l,{className:(0,o.default)("tabs__item",p.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function c(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function m(e){const t=(0,s.Y)(e);return n.createElement("div",{className:(0,o.default)("tabs-container",p.tabList)},n.createElement(u,(0,r.Z)({},e,t)),n.createElement(c,(0,r.Z)({},e,t)))}function d(e){const t=(0,i.default)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}},48153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),o=a(65488),l=a(85162);const s={title:"Scaffold DApps Using @waku/create-app",hide_table_of_contents:!0},i=void 0,p={unversionedId:"guides/js-waku/use-waku-create-app",id:"guides/js-waku/use-waku-create-app",title:"Scaffold DApps Using @waku/create-app",description:"This guide provides detailed steps to bootstrap your next @waku/sdk project from various example templates using the @waku/create-app package.",source:"@site/docs/guides/js-waku/use-waku-create-app.md",sourceDirName:"guides/js-waku",slug:"/guides/js-waku/use-waku-create-app",permalink:"/guides/js-waku/use-waku-create-app",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/guides/js-waku/use-waku-create-app.md",tags:[],version:"current",lastUpdatedAt:1700737292,formattedLastUpdatedAt:"23 Nov 2023",frontMatter:{title:"Scaffold DApps Using @waku/create-app",hide_table_of_contents:!0},sidebar:"guides",previous:{title:"Build React DApps Using @waku/react",permalink:"/guides/js-waku/use-waku-react"},next:{title:"Bootstrap Nodes and Discover Peers",permalink:"/guides/js-waku/configure-discovery"}},u={},c=[{value:"Usage",id:"usage",level:2},{value:"Contributing new templates",id:"contributing-new-templates",level:2}],m={toc:c},d="wrapper";function k(e){let{components:t,...s}=e;return(0,n.kt)(d,(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This guide provides detailed steps to bootstrap your next ",(0,n.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," project from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/waku-org/js-waku-examples/tree/master/examples"},"various example templates")," using the ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@waku/create-app"},"@waku/create-app")," package."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Initialise a new ",(0,n.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," template using any of the following methods:"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"npm",label:"NPM",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npx @waku/create-app [PROJECT DIRECTORY]\n"))),(0,n.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yarn create @waku/app [PROJECT DIRECTORY]\n")))),(0,n.kt)("p",null,"Next, select a template to initialise your app from:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"waku create app demo",src:a(92984).Z,width:"1136",height:"742"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you have previously installed ",(0,n.kt)("inlineCode",{parentName:"p"},"@waku/create-app")," globally, we recommend uninstalling the package to ensure that ",(0,n.kt)("inlineCode",{parentName:"p"},"npx")," always uses the latest version.")),(0,n.kt)("h2",{id:"contributing-new-templates"},"Contributing new templates"),(0,n.kt)("p",null,"We welcome and appreciate the contributions of templates for the ",(0,n.kt)("inlineCode",{parentName:"p"},"@waku/create-app")," package. To contribute a template, please follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create the template, ensuring it is user-friendly and thoroughly tested."),(0,n.kt)("li",{parentName:"ol"},"Place the template in the ",(0,n.kt)("inlineCode",{parentName:"li"},"examples")," folder in the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/waku-org/js-waku-examples"},"js-waku-examples")," repository's root."),(0,n.kt)("li",{parentName:"ol"},"Commit your changes with a detailed message and push them to your forked repository."),(0,n.kt)("li",{parentName:"ol"},"Finally, submit a pull request to the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/waku-org/js-waku-examples"},"js-waku-examples")," repository."),(0,n.kt)("li",{parentName:"ol"},"Our team will carefully review and merge your submission upon approval.")),(0,n.kt)("p",null,"Waku also provides bounties to encourage community members to contribute to the network and earn rewards. To participate in the bounty program, head to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/waku-org/bounties"},"https://github.com/waku-org/bounties"),"."))}k.isMDXComponent=!0},92984:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/waku-create-app-demo-295aa111853f5a3381c5ed45d4cb9803.gif"}}]);