"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[5832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),y=a,h=p["".concat(c,".").concat(y)]||p[y]||d[y]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},89955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"Security Features",hide_table_of_contents:!0},o=void 0,s={unversionedId:"learn/security-features",id:"learn/security-features",title:"Security Features",description:"Waku's protocol layers offer different services and security considerations, shaping the overall security of Waku. We document the security models in the RFCs of the protocols, aiming to provide transparent and open-source references. This empowers Waku users to understand each protocol's security guarantees and limitations.",source:"@site/docs/learn/security-features.md",sourceDirName:"learn",slug:"/learn/security-features",permalink:"/learn/security-features",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/learn/security-features.md",tags:[],version:"current",lastUpdatedAt:1715880135,formattedLastUpdatedAt:"16 May 2024",frontMatter:{title:"Security Features",hide_table_of_contents:!0},sidebar:"learn",previous:{title:"Peer Exchange",permalink:"/learn/concepts/peer-exchange"},next:{title:"Research",permalink:"/learn/research"}},c={},l=[{value:"Pseudonymity",id:"pseudonymity",level:2},{value:"Anonymity/unlinkability",id:"anonymityunlinkability",level:2},{value:"Spam protection",id:"spam-protection",level:2},{value:"Data confidentiality, integrity, and authenticity",id:"data-confidentiality-integrity-and-authenticity",level:2},{value:"Security considerations",id:"security-considerations",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Waku's protocol layers offer different services and security considerations, shaping the overall security of Waku. We document the security models in the ",(0,a.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/"},"RFCs of the protocols"),", aiming to provide transparent and open-source references. This empowers Waku users to understand each protocol's security guarantees and limitations."),(0,a.kt)("p",null,"Some of the Waku's security features include the following:"),(0,a.kt)("h2",{id:"pseudonymity"},(0,a.kt)("a",{parentName:"h2",href:"https://rfc.vac.dev/waku/standards/core/10/waku2/#pseudonymity"},"Pseudonymity")),(0,a.kt)("p",null,"Waku ensures pseudonymity across its protocol layers, using libp2p ",(0,a.kt)("inlineCode",{parentName:"p"},"PeerID")," as identifiers instead of disclosing true identities. However, it is important to note that pseudonymity does not provide complete anonymity. Actions performed under the same pseudonym (",(0,a.kt)("inlineCode",{parentName:"p"},"PeerID"),") can be linked, leading to the potential re-identification of the actual actor."),(0,a.kt)("h2",{id:"anonymityunlinkability"},(0,a.kt)("a",{parentName:"h2",href:"https://rfc.vac.dev/waku/standards/core/10/waku2/#anonymity--unlinkability"},"Anonymity/unlinkability")),(0,a.kt)("p",null,"Anonymity means an adversary cannot connect an actor to their actions or data. To achieve anonymity, avoiding linking activities with actors or their Personally Identifiable Information (PII) is crucial. In Waku, the following anonymity features are provided:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/waku/standards/core/11/relay/#security-analysis"},"Publisher-message unlinkability"),": Ensures that the publisher of messages in the ",(0,a.kt)("inlineCode",{parentName:"li"},"Relay")," protocol cannot be linked to their published messages."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/waku/standards/core/11/relay/#security-analysis"},"Subscriber-topic unlinkability"),": Ensures that the subscriber of topics in the ",(0,a.kt)("inlineCode",{parentName:"li"},"Relay")," protocol cannot be linked to the topics they have subscribed to.")),(0,a.kt)("h2",{id:"spam-protection"},(0,a.kt)("a",{parentName:"h2",href:"https://rfc.vac.dev/waku/standards/core/10/waku2/#spam-protection"},"Spam protection")),(0,a.kt)("p",null,"The spam protection feature in ",(0,a.kt)("inlineCode",{parentName:"p"},"Relay")," ensures that no adversary can flood the system with many messages, intentionally or not, regardless of the content's validity or usefulness. This protection is achieved through the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/gossipsub-v1.1.md#spam-protection-measures"},"scoring mechanism")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"GossipSub v1.1"),". Peers assign scores to their connections based on their behaviour and remove peers with low scores."),(0,a.kt)("p",null,"Ongoing research is being conducted, including developing ",(0,a.kt)("a",{parentName:"p",href:"/learn/concepts/protocols#rln-relay"},"Rate Limit Nullifiers (RLN)"),", which can be explored further at: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vacp2p/research/issues/148"},"https://github.com/vacp2p/research/issues/148"),"."),(0,a.kt)("h2",{id:"data-confidentiality-integrity-and-authenticity"},(0,a.kt)("a",{parentName:"h2",href:"https://rfc.vac.dev/waku/standards/core/10/waku2/#data-confidentiality-integrity-and-authenticity"},"Data confidentiality, integrity, and authenticity")),(0,a.kt)("p",null,"Confidentiality in Waku is ensured through data encryption, while integrity and authenticity are achieved through digital signatures. These security measures are available in ",(0,a.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/waku/standards/core/14/message/#version-1"},"Waku Message (version 1)")," and Noise protocols, which offer payload encryption and encrypted signatures. Noise protocols also facilitate secure channel negotiation within the Waku Network."),(0,a.kt)("h2",{id:"security-considerations"},(0,a.kt)("a",{parentName:"h2",href:"https://rfc.vac.dev/waku/standards/core/10/waku2/#security-considerations"},"Security considerations")),(0,a.kt)("p",null,"In protocols like ",(0,a.kt)("inlineCode",{parentName:"p"},"Store")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Filter"),", where direct connections are required for the designated service, anonymity or unlinkability is not guaranteed. This is because nodes use their ",(0,a.kt)("inlineCode",{parentName:"p"},"PeerID")," to identify each other during direct connections, making the service obtained in these protocols linkable to the beneficiary's ",(0,a.kt)("inlineCode",{parentName:"p"},"PeerID"),", considered Personally Identifiable Information (PII). In ",(0,a.kt)("inlineCode",{parentName:"p"},"Store"),", the queried node can link the querying node's ",(0,a.kt)("inlineCode",{parentName:"p"},"PeerID")," to the topics being queried. Similarly, in ",(0,a.kt)("inlineCode",{parentName:"p"},"Filter"),", a node can link the ",(0,a.kt)("inlineCode",{parentName:"p"},"PeerID")," of a light node to its content filter."))}d.isMDXComponent=!0}}]);