"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[5158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"Run @waku/sdk in a NodeJS Application",hide_table_of_contents:!0},a=void 0,s={unversionedId:"guides/js-waku/run-waku-nodejs",id:"guides/js-waku/run-waku-nodejs",title:"Run @waku/sdk in a NodeJS Application",description:"While the @waku/sdk package is primarily designed for browser environments, you can use it in a NodeJS application. However, there are certain limitations and considerations to keep in mind. This guide provides a comprehensive overview of using @waku/sdk in NodeJS.",source:"@site/docs/guides/js-waku/run-waku-nodejs.md",sourceDirName:"guides/js-waku",slug:"/guides/js-waku/run-waku-nodejs",permalink:"/guides/js-waku/run-waku-nodejs",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/guides/js-waku/run-waku-nodejs.md",tags:[],version:"current",lastUpdatedAt:1709637863,formattedLastUpdatedAt:"5 Mar 2024",frontMatter:{title:"Run @waku/sdk in a NodeJS Application",hide_table_of_contents:!0},sidebar:"guides",previous:{title:"Bootstrap Nodes and Discover Peers",permalink:"/guides/js-waku/configure-discovery"},next:{title:"Debug Your Waku DApp and WebSocket",permalink:"/guides/js-waku/debug-waku-dapp"}},p={},l=[{value:"Limitations",id:"limitations",level:2},{value:"API compatibility",id:"api-compatibility",level:3},{value:"Protocol implementation",id:"protocol-implementation",level:3},{value:"Codebase complexity",id:"codebase-complexity",level:3},{value:"Browser-specific protocols",id:"browser-specific-protocols",level:3},{value:"Recommendations",id:"recommendations",level:2},{value:"Future developments",id:"future-developments",level:2}],u={toc:l},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"While the ",(0,o.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," package is primarily designed for browser environments, you can use it in a NodeJS application. However, there are certain limitations and considerations to keep in mind. This guide provides a comprehensive overview of using ",(0,o.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," in NodeJS."),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("h3",{id:"api-compatibility"},"API compatibility"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," prioritises browser compatibility, avoiding NodeJS APIs for simpler bundling. This design choice enhances browser API compatibility but sacrifices NodeJS optimisation. While many browser APIs work in NodeJS, they might need better optimisation."),(0,o.kt)("h3",{id:"protocol-implementation"},"Protocol implementation"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," focuses on the client side of the ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/network-domains#requestresponse-domain"},"Request/Response protocol"),". We'll have to replicate all the functionalities added to ",(0,o.kt)("a",{parentName:"p",href:"/guides/nwaku/run-node"},"nwaku")," to implement extra features."),(0,o.kt)("h3",{id:"codebase-complexity"},"Codebase complexity"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," aims to provide optimal default for the browser, striking a balance between browser and NodeJS compatibility while ensuring simplicity will add complexity."),(0,o.kt)("h3",{id:"browser-specific-protocols"},"Browser-specific protocols"),(0,o.kt)("p",null,"Certain features in ",(0,o.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," are tailored for browsers and might not translate seamlessly to NodeJS. For example, only ",(0,o.kt)("inlineCode",{parentName:"p"},"WebSocket")," is supported in the browser, whereas a NodeJS application can benefit from using ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/transports"},"transport methods")," like ",(0,o.kt)("inlineCode",{parentName:"p"},"TCP"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," default peer management caters to the browser's ephemeral nature, which is different for NodeJS. This is why ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/dns-discovery"},"DNS Discovery")," and ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/peer-exchange"},"Peer Exchange")," are the default discovery mechanisms for the browser but not for NodeJS and desktop applications."),(0,o.kt)("h2",{id:"recommendations"},"Recommendations"),(0,o.kt)("p",null,"Before using ",(0,o.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," in a NodeJS environment, take into account these limitations. For a more optimised solution, we recommend ",(0,o.kt)("a",{parentName:"p",href:"/guides/nwaku/run-docker-compose"},"running nwaku in a Docker container")," and consuming its ",(0,o.kt)("a",{parentName:"p",href:"https://waku-org.github.io/waku-rest-api/"},"REST API"),"."),(0,o.kt)("h2",{id:"future-developments"},"Future developments"),(0,o.kt)("p",null,"There are plans to release a NodeJS package based on ",(0,o.kt)("a",{parentName:"p",href:"/guides/nwaku/run-node"},"nwaku")," to streamline the process of using Waku Network features in NodeJS applications. You can track the progress and updates here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/waku-org/nwaku/issues/1332"},"https://github.com/waku-org/nwaku/issues/1332"),"."))}c.isMDXComponent=!0}}]);