(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[5447],{53958:(e,t,o)=>{"use strict";var r=o(83639);o.o(r,"AccordionItem")&&o.d(t,{AccordionItem:function(){return r.AccordionItem}})},45173:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=o(87462),a=(o(67294),o(3905)),n=o(53958);const s={title:"Waku FAQ",hide_table_of_contents:!0,sidebar_label:"Frequently Asked Questions"},i=void 0,l={unversionedId:"learn/faq",id:"learn/faq",title:"Waku FAQ",description:"Check out the Getting Started guide to explore our numerous SDKs and learn how to run a Waku node.",source:"@site/docs/learn/faq.md",sourceDirName:"learn",slug:"/learn/faq",permalink:"/learn/faq",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/learn/faq.md",tags:[],version:"current",lastUpdatedAt:1713802766,formattedLastUpdatedAt:"22 Apr 2024",frontMatter:{title:"Waku FAQ",hide_table_of_contents:!0,sidebar_label:"Frequently Asked Questions"},sidebar:"learn",previous:{title:"Glossary",permalink:"/learn/glossary"}},d={},c=[],u={toc:c},m="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(n.AccordionItem,{title:"How can I start building my application using Waku?",mdxType:"AccordionItem"},"Check out the ",(0,a.kt)("a",{href:"/"},"Getting Started")," guide to explore our numerous SDKs and learn how to run a Waku node."),(0,a.kt)(n.AccordionItem,{title:"Does messaging on Waku require a gas fee?",mdxType:"AccordionItem"},"No, sending and receiving messages on Waku involves no gas fee."),(0,a.kt)(n.AccordionItem,{title:"What encryption does Waku use?",mdxType:"AccordionItem"},"Waku uses libp2p noise encryption for node-to-node connections. However, no default encryption method is applied to the data sent over the network. This design choice enhances Waku's encryption flexibility, encouraging developers to use custom protocols or Waku message payload encryption methods freely."),(0,a.kt)(n.AccordionItem,{title:"Where does Waku store the messages?",mdxType:"AccordionItem"},"Waku's ",(0,a.kt)("a",{href:"/learn/concepts/protocols#store"},"Store protocol")," is designed to temporarily store messages within the network. However, Waku does not guarantee the message's availability and recommends using ",(0,a.kt)("a",{href:"https://codex.storage/"},"Codex")," for long-term storage."),(0,a.kt)(n.AccordionItem,{title:"Can Waku only be used for wallet-to-wallet messaging?",mdxType:"AccordionItem"},"No, Waku is flexible and imposes no specific rules on identifiers."),(0,a.kt)(n.AccordionItem,{title:"How does Waku differ from IPFS?",mdxType:"AccordionItem"},"Waku focuses on short, ephemeral, real-time time messages, while IPFS focuses on large, long-term data storage. Although there's an overlap between the two technologies, Waku does not currently support large data for privacy reasons."),(0,a.kt)(n.AccordionItem,{title:"What are Rate Limiting Nullifiers (RLN)?",mdxType:"AccordionItem"},(0,a.kt)("a",{href:"/learn/concepts/protocols#rln-relay"},"Rate Limiting Nullifier")," is a zero-knowledge (ZK) protocol enabling spam protection in a decentralized network while preserving privacy. Each message must be accompanied by a ZK proof, which ",(0,a.kt)("a",{href:"/learn/concepts/protocols#relay"},"Relay")," nodes verify to ensure the publishers do not send more messages than they are allowed. The ZK proof does not leak any private information about message publishers - it only proves they are members of a set of users allowed to publish a certain number of messages per given time frame."))}p.isMDXComponent=!0},46102:()=>{}}]);