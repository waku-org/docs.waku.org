"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[2941],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),p=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),s=p(a),m=r,g=s["".concat(u,".").concat(m)]||s[m]||k[m]||i;return a?n.createElement(g,o(o({ref:e},d),{},{components:a})):n.createElement(g,o({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l[s]="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22103:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Getting Started",hide_table_of_contents:!0,slug:"/"},o=void 0,l={unversionedId:"guides/getting-started",id:"guides/getting-started",title:"Getting Started",description:"Waku has risks and limitations as it is still developing and preparing for extensive adoption. However, it is already demonstrating its capabilities by powering various applications. Join our community to stay updated on our progress.",source:"@site/docs/guides/getting-started.md",sourceDirName:"guides",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/guides/getting-started.md",tags:[],version:"current",lastUpdatedAt:1709627438,formattedLastUpdatedAt:"5 Mar 2024",frontMatter:{title:"Getting Started",hide_table_of_contents:!0,slug:"/"},sidebar:"guides",next:{title:"Run a Nwaku Node",permalink:"/guides/nwaku/run-node"}},u={},p=[{value:"Run a Waku node",id:"run-a-waku-node",level:2},{value:"Integrate using SDKs",id:"integrate-using-sdks",level:2},{value:"Run on mobile devices",id:"run-on-mobile-devices",level:2},{value:"More integrations",id:"more-integrations",level:2}],d={toc:p},s="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Waku has risks and limitations as it is still developing and preparing for extensive adoption. However, it is already demonstrating its capabilities by powering various applications. ",(0,r.kt)("a",{parentName:"p",href:"https://waku.org/community/"},"Join our community")," to stay updated on our progress.")),(0,r.kt)("p",null,"Ready to integrate Waku into your application for private, secure, censorship-free communication? Explore the available SDKs and contribute by running a node."),(0,r.kt)("h2",{id:"run-a-waku-node"},"Run a Waku node"),(0,r.kt)("p",null,"The Waku Network is a decentralised, permissionless system where anyone can run nodes, use the network, and contribute to its support."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/waku-org/nwaku"},"nwaku")),(0,r.kt)("td",{parentName:"tr",align:null},"Nim-based Waku implementation to run a standalone node and access the network"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/nwaku/run-node"},"Run a Nwaku Node"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/waku-org/nwaku-compose"},"nwaku-compose")),(0,r.kt)("td",{parentName:"tr",align:null},"Pre-configured Docker Compose setup for running a RLN-enabled ",(0,r.kt)("inlineCode",{parentName:"td"},"nwaku")," node with Grafana metrics dashboard (recommended)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/nwaku/run-docker-compose"},"Run Nwaku with Docker Compose"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/waku-org/go-waku"},"go-waku")),(0,r.kt)("td",{parentName:"tr",align:null},"Golang-based Waku implementation to run a standalone node and access the network"),(0,r.kt)("td",{parentName:"tr",align:null},"COMING SOON")))),(0,r.kt)("h2",{id:"integrate-using-sdks"},"Integrate using SDKs"),(0,r.kt)("p",null,"Waku is implemented in multiple SDKs, allowing it to integrate with different languages and address various use cases efficiently."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/waku-org/js-waku"},"@waku/sdk")),(0,r.kt)("td",{parentName:"tr",align:null},"JavaScript/TypeScript SDK designed for browser environments"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/js-waku/"},"JavaScript Waku SDK"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@waku/react"},"@waku/react")),(0,r.kt)("td",{parentName:"tr",align:null},"React components and UI adapters designed for seamless integration with ",(0,r.kt)("inlineCode",{parentName:"td"},"@waku/sdk")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/js-waku/use-waku-react"},"Build React DApps Using @waku/react"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/waku-org/nwaku"},"nwaku")),(0,r.kt)("td",{parentName:"tr",align:null},"Nim SDK designed for integration with native Nim applications"),(0,r.kt)("td",{parentName:"tr",align:null},"COMING SOON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/waku-org/go-waku"},"go-waku")),(0,r.kt)("td",{parentName:"tr",align:null},"Golang SDK designed for integration with Golang applications, includes C bindings for usage in C/C++, C#/Unity, Swift, and Kotlin"),(0,r.kt)("td",{parentName:"tr",align:null},"COMING SOON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/waku-org/waku-rust-bindings"},"waku-rust-bindings")),(0,r.kt)("td",{parentName:"tr",align:null},"Rust wrapper using ",(0,r.kt)("inlineCode",{parentName:"td"},"go-waku")," bindings designed for integration in Rust applications"),(0,r.kt)("td",{parentName:"tr",align:null},"COMING SOON")))),(0,r.kt)("h2",{id:"run-on-mobile-devices"},"Run on mobile devices"),(0,r.kt)("p",null,"Waku provides integrations tailored for mobile applications, enabling Waku to run efficiently on mobile devices."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Swift (iOS)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"go-waku")," bindings for Swift applications to seamlessly integrate Waku"),(0,r.kt)("td",{parentName:"tr",align:null},"COMING SOON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kotlin (Android)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"go-waku")," bindings for Kotlin applications to seamlessly integrate Waku"),(0,r.kt)("td",{parentName:"tr",align:null},"COMING SOON")))),(0,r.kt)("h2",{id:"more-integrations"},"More integrations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://waku-org.github.io/waku-rest-api/"},"REST API")),(0,r.kt)("td",{parentName:"tr",align:null},"REST API interface provided by ",(0,r.kt)("inlineCode",{parentName:"td"},"nwaku")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"go-waku")," to interact with the Waku Network"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://waku-org.github.io/waku-rest-api/"},"Waku Node REST API Reference"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@waku/create-app"},"@waku/create-app")),(0,r.kt)("td",{parentName:"tr",align:null},"Starter kit to bootstrap your next ",(0,r.kt)("inlineCode",{parentName:"td"},"@waku/sdk")," project from various example templates"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/js-waku/use-waku-create-app"},"Scaffold DApps Using @waku/create-app"))))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://ideas.waku.org/"},"Waku Idea Board")," for creative project ideas and explore the limitless possibilities of the Waku protocol.")))}k.isMDXComponent=!0}}]);