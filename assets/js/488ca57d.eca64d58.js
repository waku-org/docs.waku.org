"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[6839],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),k=r,m=d["".concat(l,".").concat(k)]||d[k]||c[k]||o;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.default)(o.tabItem,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(87462),r=a(67294),o=a(86010),s=a(12466),i=a(70989),l=a(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),k=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==i&&(c(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":k(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:k},s,{className:(0,o.default)("tabs__item",p.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function d(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function c(e){const t=(0,i.Y)(e);return r.createElement("div",{className:(0,o.default)("tabs-container",p.tabList)},r.createElement(u,(0,n.Z)({},e,t)),r.createElement(d,(0,n.Z)({},e,t)))}function k(e){const t=(0,l.default)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},76201:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(65488),s=a(85162);const i={title:"JavaScript Waku SDK",hide_table_of_contents:!0},l=void 0,p={unversionedId:"guides/js-waku/index",id:"guides/js-waku/index",title:"JavaScript Waku SDK",description:"Currently, the JavaScript Waku SDK (@waku/sdk) is NOT compatible with React Native. We plan to add support for React Native in the future.",source:"@site/docs/guides/js-waku/index.md",sourceDirName:"guides/js-waku",slug:"/guides/js-waku/",permalink:"/guides/js-waku/",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/guides/js-waku/index.md",tags:[],version:"current",lastUpdatedAt:1704966176,formattedLastUpdatedAt:"11 Jan 2024",frontMatter:{title:"JavaScript Waku SDK",hide_table_of_contents:!0},sidebar:"guides",previous:{title:"Upgrade Instructions",permalink:"/guides/nwaku/upgrade-instructions"},next:{title:"Send and Receive Messages Using Light Push and Filter",permalink:"/guides/js-waku/light-send-receive"}},u={},d=[{value:"Installation",id:"installation",level:2},{value:"Message structure",id:"message-structure",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Get help and report issues",id:"get-help-and-report-issues",level:2}],c={toc:d},k="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Currently, the JavaScript Waku SDK (",(0,r.kt)("inlineCode",{parentName:"p"},"@waku/sdk"),") is ",(0,r.kt)("strong",{parentName:"p"},"NOT compatible")," with React Native. We plan to add support for React Native in the future.")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waku-org/js-waku"},"JavaScript Waku SDK")," (",(0,r.kt)("inlineCode",{parentName:"p"},"@waku/sdk"),") provides a TypeScript implementation of the ",(0,r.kt)("a",{parentName:"p",href:"/"},"Waku protocol")," designed for web browser environments. Developers can seamlessly integrate Waku functionalities into web applications, enabling efficient communication and collaboration among users using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," package."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," package using your preferred package manager:"),(0,r.kt)(o.Z,{groupId:"package-manager",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",label:"NPM",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @waku/sdk\n"))),(0,r.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @waku/sdk\n")))),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," package via a CDN without installing it on your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import * as waku from "https://unpkg.com/@waku/sdk@latest/bundle/index.js";\n')),(0,r.kt)("h2",{id:"message-structure"},"Message structure"),(0,r.kt)("p",null,"We recommend creating a message structure for your application using ",(0,r.kt)("a",{parentName:"p",href:"https://protobuf.dev/"},"Protocol Buffers")," for the following reasons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Consistency:")," Ensures uniform message format for easy parsing and processing."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Interoperability:")," Facilitates effective communication between different parts of your application."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Compatibility:")," Allows smooth communication between older and newer app versions."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Payload Size:")," Minimizes payload overhead, especially for byte arrays, unlike JSON which adds significant overhead.")),(0,r.kt)("p",null,"To get started, install the ",(0,r.kt)("inlineCode",{parentName:"p"},"protobufjs")," package using your preferred package manager:"),(0,r.kt)(o.Z,{groupId:"package-manager",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",label:"NPM",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install protobufjs\n"))),(0,r.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add protobufjs\n")))),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"protobufjs")," package via a CDN without installing it on your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Import the CDN\nimport "https://cdn.jsdelivr.net/npm/protobufjs@latest/dist/protobuf.min.js";\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Or include the protobufjs script --\x3e\n<script src="https://cdn.jsdelivr.net/npm/protobufjs@latest/dist/protobuf.min.js"><\/script>\n')),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"Have a look at the quick start guide and comprehensive tutorials to learn how to build applications using ",(0,r.kt)("inlineCode",{parentName:"p"},"@waku/sdk"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Guide"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/js-waku/light-send-receive"},"Send and Receive Messages Using Light Push and Filter")),(0,r.kt)("td",{parentName:"tr",align:null},"Learn how to send and receive messages on light nodes using the ",(0,r.kt)("a",{parentName:"td",href:"/learn/concepts/protocols#light-push"},"Light Push")," and ",(0,r.kt)("a",{parentName:"td",href:"/learn/concepts/protocols#filter"},"Filter")," protocols")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/js-waku/store-retrieve-messages"},"Retrieve Messages Using Store Protocol")),(0,r.kt)("td",{parentName:"tr",align:null},"Learn how to retrieve and filter historical messages on light nodes using the ",(0,r.kt)("a",{parentName:"td",href:"/learn/concepts/protocols#store"},"Store protocol"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/js-waku/message-encryption"},"Encrypt, Decrypt, and Sign Your Messages")),(0,r.kt)("td",{parentName:"tr",align:null},"Learn how to use the ",(0,r.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@waku/message-encryption"},"@waku/message-encryption")," package to encrypt, decrypt, and sign your messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/js-waku/use-waku-react"},"Build React DApps Using @waku/react")),(0,r.kt)("td",{parentName:"tr",align:null},"Learn how to use the ",(0,r.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@waku/react"},"@waku/react")," package seamlessly integrate ",(0,r.kt)("inlineCode",{parentName:"td"},"@waku/sdk")," into a React application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/js-waku/use-waku-create-app"},"Scaffold DApps Using @waku/create-app")),(0,r.kt)("td",{parentName:"tr",align:null},"Learn how to use the ",(0,r.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@waku/create-app"},"@waku/create-app")," package to bootstrap your next ",(0,r.kt)("inlineCode",{parentName:"td"},"@waku/sdk")," project from various example templates")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/js-waku/configure-discovery"},"Bootstrap Nodes and Discover Peers")),(0,r.kt)("td",{parentName:"tr",align:null},"Learn how to bootstrap your node using ",(0,r.kt)("a",{parentName:"td",href:"/learn/concepts/static-peers"},"Static Peers")," and discover peers using ",(0,r.kt)("a",{parentName:"td",href:"/learn/concepts/dns-discovery"},"DNS Discovery"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/js-waku/run-waku-nodejs"},"Run @waku/sdk in a NodeJS Application")),(0,r.kt)("td",{parentName:"tr",align:null},"Learn our suggested approach for using the ",(0,r.kt)("inlineCode",{parentName:"td"},"@waku/sdk")," package within a NodeJS application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/js-waku/debug-waku-dapp"},"Debug Your Waku DApp and WebSocket")),(0,r.kt)("td",{parentName:"tr",align:null},"Learn how to troubleshoot your Waku DApp using debug logs and check ",(0,r.kt)("a",{parentName:"td",href:"/learn/concepts/transports"},"WebSocket")," connections in ",(0,r.kt)("a",{parentName:"td",href:"/guides/nwaku/run-node"},"nwaku"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/js-waku/manage-filter"},"Manage Your Filter Subscriptions")),(0,r.kt)("td",{parentName:"tr",align:null},"Learn how to manage ",(0,r.kt)("a",{parentName:"td",href:"/learn/concepts/protocols#filter"},"filter subscriptions")," and handle node disconnections in your application")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Until ",(0,r.kt)("a",{parentName:"p",href:"/learn/research#prevention-of-denial-of-service-dos-and-node-incentivisation"},"node incentivisation")," is in place, you should ",(0,r.kt)("a",{parentName:"p",href:"/#run-a-waku-node"},"operate extra nodes")," alongside the ones provided by the Waku Network. When running a node, we recommend using the ",(0,r.kt)("a",{parentName:"p",href:"/guides/js-waku/configure-discovery#configure-dns-discovery-and-static-peers"},"DNS Discovery and Static Peers")," configuration to connect to both the Waku Network and your node.")),(0,r.kt)("h2",{id:"get-help-and-report-issues"},"Get help and report issues"),(0,r.kt)("p",null,"To engage in general discussions, seek assistance, or stay updated with the latest news, visit the ",(0,r.kt)("inlineCode",{parentName:"p"},"#support")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"#js-waku-contribute")," channels on the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.waku.org"},"Waku Discord"),"."),(0,r.kt)("p",null,"If you discover bugs or want to suggest new features, do not hesitate to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waku-org/js-waku/issues/new/"},"open an issue")," in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waku-org/js-waku"},"js-waku repository"),". Your feedback and contributions are highly valued and will help improve the ",(0,r.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," package."))}m.isMDXComponent=!0}}]);