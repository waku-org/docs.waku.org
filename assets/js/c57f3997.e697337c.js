"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[7683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||r;return n?a.createElement(m,s(s({ref:t},l),{},{components:n})):a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},56804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Send and Receive Messages Using Light Push and Filter",hide_table_of_contents:!0},s=void 0,i={unversionedId:"guides/js-waku/light-send-receive",id:"guides/js-waku/light-send-receive",title:"Send and Receive Messages Using Light Push and Filter",description:"This guide provides detailed steps to start using the @waku/sdk package by setting up a Light Node to send messages using the Light Push protocol, and receive messages using the Filter protocol. Have a look at the installation guide for steps on adding @waku/sdk to your project.",source:"@site/docs/guides/js-waku/light-send-receive.md",sourceDirName:"guides/js-waku",slug:"/guides/js-waku/light-send-receive",permalink:"/guides/js-waku/light-send-receive",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/guides/js-waku/light-send-receive.md",tags:[],version:"current",lastUpdatedAt:1728641107,formattedLastUpdatedAt:"11 Oct 2024",frontMatter:{title:"Send and Receive Messages Using Light Push and Filter",hide_table_of_contents:!0},sidebar:"guides",previous:{title:"JavaScript Waku SDK",permalink:"/guides/js-waku/"},next:{title:"Retrieve Messages Using Store Protocol",permalink:"/guides/js-waku/store-retrieve-messages"}},c={},p=[{value:"Create a light node",id:"create-a-light-node",level:2},{value:"Alternative network configuration",id:"alternative-network-configuration",level:3},{value:"Connect to remote peers",id:"connect-to-remote-peers",level:2},{value:"Choose a content topic",id:"choose-a-content-topic",level:2},{value:"Create a message structure",id:"create-a-message-structure",level:2},{value:"Send messages using light push",id:"send-messages-using-light-push",level:2},{value:"Receive messages using filter",id:"receive-messages-using-filter",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide provides detailed steps to start using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," package by setting up a ",(0,o.kt)("a",{parentName:"p",href:"/learn/glossary#light-node"},"Light Node")," to send messages using the ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/protocols#light-push"},"Light Push protocol"),", and receive messages using the ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/protocols#filter"},"Filter protocol"),". Have a look at the ",(0,o.kt)("a",{parentName:"p",href:"/guides/js-waku/#installation"},"installation guide")," for steps on adding ",(0,o.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," to your project."),(0,o.kt)("h2",{id:"create-a-light-node"},"Create a light node"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"createLightNode()")," function to create a ",(0,o.kt)("a",{parentName:"p",href:"/learn/glossary#light-node"},"Light Node")," and interact with the Waku Network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { createLightNode } from "@waku/sdk";\n\n// Create and start a Light Node\nconst node = await createLightNode({ defaultBootstrap: true });\nawait node.start();\n\n// Use the stop() function to stop a running node\n// await node.stop();\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultBootstrap")," parameter is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", your node will be bootstrapped using the ",(0,o.kt)("a",{parentName:"p",href:"/guides/js-waku/configure-discovery#default-bootstrap-method"},"default bootstrap method"),". Have a look at the ",(0,o.kt)("a",{parentName:"p",href:"/guides/js-waku/configure-discovery"},"Bootstrap Nodes and Discover Peers")," guide to learn more methods to bootstrap nodes.")),(0,o.kt)("p",null,"A node needs to know how to route messages. By default, it will use The Waku Network configuration (",(0,o.kt)("inlineCode",{parentName:"p"},"{ clusterId: 1, shards: [0,1,2,3,4,5,6,7] }"),"). For most applications, it's recommended to use autosharding:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Create node with auto sharding (recommended)\nconst node = await createLightNode({\n  defaultBootstrap: true,\n  networkConfig: {\n    clusterId: 1,\n    contentTopics: ["/my-app/1/notifications/proto"],\n  },\n});\n')),(0,o.kt)("h3",{id:"alternative-network-configuration"},"Alternative network configuration"),(0,o.kt)("p",null,"If your project requires a specific network configuration, you can use static sharding:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Create node with static sharding\nconst node = await createLightNode({\n  defaultBootstrap: true,\n  networkConfig: {\n    clusterId: 1,\n    shards: [0, 1, 2, 3],\n  },\n});\n")),(0,o.kt)("h2",{id:"connect-to-remote-peers"},"Connect to remote peers"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"node.waitForPeers()")," function to wait for the node to connect with peers on the Waku Network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Wait for a successful peer connection\nawait node.waitForPeers();\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"protocols")," parameter allows you to specify the ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/protocols"},"protocols")," that the remote peers should have enabled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { Protocols } from "@waku/sdk";\n\n// Wait for peer connections with specific protocols\nawait node.waitForPeers([Protocols.LightPush, Protocols.Filter]);\n')),(0,o.kt)("h2",{id:"choose-a-content-topic"},"Choose a content topic"),(0,o.kt)("p",null,"Choose a ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/content-topics"},"content topic")," for your application and create a message ",(0,o.kt)("inlineCode",{parentName:"p"},"encoder")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"decoder"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { createEncoder, createDecoder } from "@waku/sdk";\n\n// Choose a content topic\nconst contentTopic = "/light-guide/1/message/proto";\n\n// Create a message encoder and decoder\nconst encoder = createEncoder({ contentTopic });\nconst decoder = createDecoder(contentTopic);\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ephemeral")," parameter allows you to specify whether messages should ",(0,o.kt)("strong",{parentName:"p"},"NOT")," be stored by ",(0,o.kt)("a",{parentName:"p",href:"/guides/js-waku/store-retrieve-messages"},"Store peers"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const encoder = createEncoder({\n  contentTopic: contentTopic, // message content topic\n  ephemeral: true, // allows messages NOT be stored on the network\n});\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"pubsubTopicShardInfo")," parameter allows you to configure a different network configuration for your ",(0,o.kt)("inlineCode",{parentName:"p"},"encoder")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"decoder"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Create the network config\nconst networkConfig = { clusterId: 3, shards: [1, 2] };\n\n// Create encoder and decoder with custom network config\nconst encoder = createEncoder({\n  contentTopic: contentTopic,\n  pubsubTopicShardInfo: networkConfig,\n});\nconst decoder = createDecoder(contentTopic, networkConfig);\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In this example, users send and receive messages on a shared content topic. However, real applications may have users broadcasting messages while others listen or only have 1:1 exchanges. Waku supports all these use cases.")),(0,o.kt)("h2",{id:"create-a-message-structure"},"Create a message structure"),(0,o.kt)("p",null,"Create your application's message structure using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/protobufjs/protobuf.js#usage"},"Protobuf's valid message")," fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import protobuf from "protobufjs";\n\n// Create a message structure using Protobuf\nconst DataPacket = new protobuf.Type("DataPacket")\n  .add(new protobuf.Field("timestamp", 1, "uint64"))\n  .add(new protobuf.Field("sender", 2, "string"))\n  .add(new protobuf.Field("message", 3, "string"));\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Have a look at the ",(0,o.kt)("a",{parentName:"p",href:"/guides/js-waku/#message-structure"},"Protobuf installation")," guide for adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"protobufjs")," package to your project.")),(0,o.kt)("h2",{id:"send-messages-using-light-push"},"Send messages using light push"),(0,o.kt)("p",null,"To send messages over the Waku Network using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Light Push")," protocol, create a new message object and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"lightPush.send()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Create a new message object\nconst protoMessage = DataPacket.create({\n  timestamp: Date.now(),\n  sender: "Alice",\n  message: "Hello, World!",\n});\n\n// Serialise the message using Protobuf\nconst serialisedMessage = DataPacket.encode(protoMessage).finish();\n\n// Send the message using Light Push\nawait node.lightPush.send(encoder, {\n  payload: serialisedMessage,\n});\n')),(0,o.kt)("h2",{id:"receive-messages-using-filter"},"Receive messages using filter"),(0,o.kt)("p",null,"To receive messages using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Filter")," protocol, create a callback function for message processing, then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"filter.subscribe()")," function to subscribe to a ",(0,o.kt)("inlineCode",{parentName:"p"},"content topic"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Create the callback function\nconst callback = (wakuMessage) => {\n  // Check if there is a payload on the message\n  if (!wakuMessage.payload) return;\n  // Render the messageObj as desired in your application\n  const messageObj = DataPacket.decode(wakuMessage.payload);\n  console.log(messageObj);\n};\n\n// Create a Filter subscription\nconst { error, subscription } = await node.filter.createSubscription({ contentTopics: [contentTopic] });\n\nif (error) {\n    // handle errors if happens\n    throw Error(error);\n}\n\n// Subscribe to content topics and process new messages\nawait subscription.subscribe([decoder], callback);\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"pubsubTopicShardInfo")," parameter allows you to configure a different network configuration for your ",(0,o.kt)("inlineCode",{parentName:"p"},"Filter")," subscription:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Create the network config\nconst networkConfig = { clusterId: 3, shards: [1, 2] };\n\n// Create Filter subscription with custom network config\nconst subscription = await node.filter.createSubscription(networkConfig);\n")),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"subscription.unsubscribe()")," function to stop receiving messages from a content topic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await subscription.unsubscribe([contentTopic]);\n")),(0,o.kt)("admonition",{title:"Congratulations!",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You have successfully sent and received messages over the Waku Network using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Light Push")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Filter")," protocols. Have a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/waku-org/js-waku-examples/tree/master/examples/light-js"},"light-js")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/waku-org/js-waku-examples/tree/master/examples/light-chat"},"light-chat")," examples for working demos.")))}d.isMDXComponent=!0}}]);