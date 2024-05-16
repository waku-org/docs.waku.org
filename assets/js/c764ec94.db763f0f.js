"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[3076],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(f,r(r({ref:t},l),{},{components:n})):o.createElement(f,r({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const a={title:"Content Topics",hide_table_of_contents:!0},r=void 0,s={unversionedId:"learn/concepts/content-topics",id:"learn/concepts/content-topics",title:"Content Topics",description:"Content Topics are metadata strings set by developers on outgoing messages to facilitate protocol-level features like selectively processing incoming messages (Relay or Filter) and retrieving historical messages (Store) that meet specific filtering criteria. Have a look at the WAKU2-TOPICS specification to learn more.",source:"@site/docs/learn/concepts/content-topics.md",sourceDirName:"learn/concepts",slug:"/learn/concepts/content-topics",permalink:"/learn/concepts/content-topics",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/learn/concepts/content-topics.md",tags:[],version:"current",lastUpdatedAt:1715880135,formattedLastUpdatedAt:"16 May 2024",frontMatter:{title:"Content Topics",hide_table_of_contents:!0},sidebar:"learn",previous:{title:"Protocols",permalink:"/learn/concepts/protocols"},next:{title:"Network Domains",permalink:"/learn/concepts/network-domains"}},p={},c=[{value:"Naming format",id:"naming-format",level:2},{value:"Naming considerations",id:"naming-considerations",level:2},{value:"Protocols disclose content topics to peers",id:"protocols-disclose-content-topics-to-peers",level:3},{value:"Increasing k-anonymity preserves user anonymity",id:"increasing-k-anonymity-preserves-user-anonymity",level:3},{value:"Creating buckets help in distributing traffic",id:"creating-buckets-help-in-distributing-traffic",level:3}],l={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Content Topics")," are metadata strings set by developers on outgoing messages to facilitate protocol-level features like selectively processing incoming messages (",(0,i.kt)("a",{parentName:"p",href:"/learn/concepts/protocols#relay"},"Relay")," or ",(0,i.kt)("a",{parentName:"p",href:"/learn/concepts/protocols#filter"},"Filter"),") and retrieving historical messages (",(0,i.kt)("a",{parentName:"p",href:"/learn/concepts/protocols#store"},"Store"),") that meet specific filtering criteria. Have a look at the ",(0,i.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/waku/informational/23/topics#content-topics"},"WAKU2-TOPICS")," specification to learn more."),(0,i.kt)("h2",{id:"naming-format"},"Naming format"),(0,i.kt)("p",null,"Here is the recommended format for content topics:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/{application-name}/{version}/{content-topic-name}/{encoding}")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"application-name"),": This is the unique name of your decentralised application (DApp) to prevent conflicts with other DApps."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version"),": Typically starting at ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),", this field helps track breaking changes in your messages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"content-topic-name"),": The specific name of the content topic used for filtering."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"encoding"),": The message encoding or serialisation format, with ",(0,i.kt)("a",{parentName:"li",href:"https://protobuf.dev/"},"Protocol Buffers")," (",(0,i.kt)("inlineCode",{parentName:"li"},"proto"),") being the recommended choice.")),(0,i.kt)("p",null,"For example, if your DApp is called ",(0,i.kt)("inlineCode",{parentName:"p"},"SuperCrypto")," and it allows users to receive notifications and send private messages, you can consider using the following content topics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/supercrypto/1/notification/proto")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/supercrypto/1/private-message/proto"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"While you can choose any encoding format for your ",(0,i.kt)("inlineCode",{parentName:"p"},"Content Topic"),", we highly recommend using Protocol Buffers (",(0,i.kt)("inlineCode",{parentName:"p"},"proto"),") because of its efficiency. Choosing a lightweight format ensures optimal performance of your DApp.")),(0,i.kt)("h2",{id:"naming-considerations"},"Naming considerations"),(0,i.kt)("p",null,"When choosing a content topic, it is essential to consider the privacy implications. Here are several factors to keep in mind:"),(0,i.kt)("h3",{id:"protocols-disclose-content-topics-to-peers"},"Protocols disclose content topics to peers"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Filter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Store"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Light Push")," protocols share content topics with peers, allowing them to link IP and content topic interests. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Relay")," protocol, using ",(0,i.kt)("inlineCode",{parentName:"p"},"GossipSub"),", provides recipient anonymity, which can be compromised if the content topic exposes user information."),(0,i.kt)("p",null,"For example, instead of using Personally Identifiable Information (PII) in the content topic (e.g., a public key), you can create buckets (e.g., based on the first 4 bytes of the public key hash)."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Waku is developing privacy-preserving features like ",(0,i.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/waku/standards/core/12/filter/#future-work"},"Anonymous Filter Subscription")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Filter")," protocol and ",(0,i.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/waku/standards/core/13/store#future-work"},"Anonymous Query")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Store")," protocol to hide content topics from potential adversaries.")),(0,i.kt)("h3",{id:"increasing-k-anonymity-preserves-user-anonymity"},"Increasing k-anonymity preserves user anonymity"),(0,i.kt)("p",null,"You can increase ",(0,i.kt)("a",{parentName:"p",href:"https://www.privitar.com/blog/k-anonymity-an-introduction/"},"k-anonymity")," within the network by using a unified content topic across the entire application or targeting specific features like notifications or private messages, allowing multiple users to share it."),(0,i.kt)("p",null,"We recommend switching functionality using the Protocol Buffer (",(0,i.kt)("inlineCode",{parentName:"p"},"proto"),") message format. By doing so, applications can retain a high granularity and functionality while using a single content topic, preserving user privacy. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"message NotificationPayload {\n...\n}\n\nmessage FeatureAbcPayload {\n...\n}\n\n// By default, all fields in protobuf are optional so only field may be encoded at a time\nmessage Payload {\n    NotificationPayload notification = 1;\n    FeatureAbcPayload feature_abc = 2;\n}\n")),(0,i.kt)("h3",{id:"creating-buckets-help-in-distributing-traffic"},"Creating buckets help in distributing traffic"),(0,i.kt)("p",null,"When an application uses a single content topic, all users using ",(0,i.kt)("a",{parentName:"p",href:"/learn/concepts/network-domains#requestresponse-domain"},"request/response protocols")," (",(0,i.kt)("inlineCode",{parentName:"p"},"Filter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Store"),") receive all its messages. For heavy traffic, developers can create buckets by hashing a unique identifier (e.g., recipient's ID, public key, or app domain topic) and adding its first byte to the content topic, like ",(0,i.kt)("inlineCode",{parentName:"p"},"/my-app/0/a/proto"),"."),(0,i.kt)("p",null,"This approach divides traffic into multiple topics, reducing the messages users have to download. Developers can add more first bytes to the content topic over time to improve efficiency and privacy based on messages and user needs."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("strong",{parentName:"p"},"k")," value of ",(0,i.kt)("strong",{parentName:"p"},"k-anonymity")," equals the number of IDs for which the first character of the hash is ",(0,i.kt)("inlineCode",{parentName:"p"},'"a"'),". For example, using a single content topic in an application with 10,000 users results in ",(0,i.kt)("strong",{parentName:"p"},"k = 10,000"),". However, using the hash ID's first character, ",(0,i.kt)("strong",{parentName:"p"},"k")," reduces to ",(0,i.kt)("strong",{parentName:"p"},"10,000 / 16 = 625"),".")))}u.isMDXComponent=!0}}]);