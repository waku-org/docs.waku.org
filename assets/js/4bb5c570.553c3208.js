"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=d(n),m=o,k=l["".concat(p,".").concat(m)]||l[m]||u[m]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={title:"Bootstrap Nodes and Discover Peers",hide_table_of_contents:!0},i=void 0,s={unversionedId:"guides/js-waku/configure-discovery",id:"guides/js-waku/configure-discovery",title:"Bootstrap Nodes and Discover Peers",description:"This guide provides detailed steps to bootstrap your your node using Static Peers and discover peers in the Waku Network using DNS Discovery.",source:"@site/docs/guides/js-waku/configure-discovery.md",sourceDirName:"guides/js-waku",slug:"/guides/js-waku/configure-discovery",permalink:"/guides/js-waku/configure-discovery",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/guides/js-waku/configure-discovery.md",tags:[],version:"current",lastUpdatedAt:1727709227,formattedLastUpdatedAt:"30 Sept 2024",frontMatter:{title:"Bootstrap Nodes and Discover Peers",hide_table_of_contents:!0},sidebar:"guides",previous:{title:"Scaffold DApps Using @waku/create-app",permalink:"/guides/js-waku/use-waku-create-app"},next:{title:"Run @waku/sdk in a NodeJS Application",permalink:"/guides/js-waku/run-waku-nodejs"}},p={},d=[{value:"Default bootstrap method",id:"default-bootstrap-method",level:2},{value:"Configure static peers",id:"configure-static-peers",level:2},{value:"Configure DNS discovery",id:"configure-dns-discovery",level:2},{value:"Configure DNS discovery and static peers",id:"configure-dns-discovery-and-static-peers",level:2},{value:"Retrieving connected peers",id:"retrieving-connected-peers",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},l=c("Tabs"),u=c("TabItem"),m={toc:d},k="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(k,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide provides detailed steps to bootstrap your your node using ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/static-peers"},"Static Peers")," and discover peers in the Waku Network using ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/dns-discovery"},"DNS Discovery"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you do not set up a bootstrap node or discovery mechanism, your node will not connect to any remote peer.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Until ",(0,o.kt)("a",{parentName:"p",href:"/learn/research#prevention-of-denial-of-service-dos-and-node-incentivisation"},"node incentivisation")," is in place, you should ",(0,o.kt)("a",{parentName:"p",href:"/#run-a-waku-node"},"operate extra nodes")," alongside the ones provided by the Waku Network. When running a node, we recommend using the ",(0,o.kt)("a",{parentName:"p",href:"#configure-dns-discovery-and-static-peers"},"DNS Discovery and Static Peers")," configuration to connect to both the Waku Network and your node.")),(0,o.kt)("h2",{id:"default-bootstrap-method"},"Default bootstrap method"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," package provides a built-in bootstrapping method that uses ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/dns-discovery"},"DNS Discovery")," to locate peers from the ",(0,o.kt)("inlineCode",{parentName:"p"},"waku v2.prod")," ",(0,o.kt)("inlineCode",{parentName:"p"},"ENR")," tree."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { createLightNode } from "@waku/sdk";\n\n// Bootstrap node using the default bootstrap method\nconst node = await createLightNode({ defaultBootstrap: true });\n')),(0,o.kt)("h2",{id:"configure-static-peers"},"Configure static peers"),(0,o.kt)("p",null,"To set ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/static-peers"},"static peers"),", a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"multiaddr")," to bootstrap the node should be passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrapPeers")," parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"createLightNode()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { createLightNode } from "@waku/sdk";\n\n// Bootstrap node using static peers\nconst node = await createLightNode({\n    bootstrapPeers: ["[PEER MULTIADDR]"],\n});\n')),(0,o.kt)("p",null,"For example, consider a node that connects to two static peers on the same local host (IP: ",(0,o.kt)("inlineCode",{parentName:"p"},"0.0.0.0"),") using TCP ports ",(0,o.kt)("inlineCode",{parentName:"p"},"60002")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"60003")," with WebSocket enabled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Define the list of static peers to bootstrap\nconst peers = [\n    "/ip4/0.0.0.0/tcp/60002/ws/p2p/16Uiu2HAkzjwwgEAXfeGNMKFPSpc6vGBRqCdTLG5q3Gmk2v4pQw7H",\n    "/ip4/0.0.0.0/tcp/60003/ws/p2p/16Uiu2HAmFBA7LGtwY5WVVikdmXVo3cKLqkmvVtuDu63fe8safeQJ",\n];\n\n// Bootstrap node using the static peers\nconst node = await createLightNode({\n    bootstrapPeers: peers,\n});\n')),(0,o.kt)("p",null,"Alternatively, you can dial a particular node like this: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Define the list of static peers to bootstrap\nconst peers = [\n    "/ip4/0.0.0.0/tcp/60002/ws/p2p/16Uiu2HAkzjwwgEAXfeGNMKFPSpc6vGBRqCdTLG5q3Gmk2v4pQw7H",\n    "/ip4/0.0.0.0/tcp/60003/ws/p2p/16Uiu2HAmFBA7LGtwY5WVVikdmXVo3cKLqkmvVtuDu63fe8safeQJ",\n];\n\n\nconst node = await createLightNode();\n\n// In case nodes are using IP address and / or `ws` protocol - additional configuration is needed:\n/*\nconst node = await createLightNode({\n    libp2p: {\n        filterMultiaddrs: false,\n    },\n});\n*/\n\nconst promises = peers.map(multiaddr => node.dial(multiaddr));\n\nawait Promise.all(promises);\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For local development using a ",(0,o.kt)("inlineCode",{parentName:"p"},"nwaku")," node, use a ",(0,o.kt)("inlineCode",{parentName:"p"},"ws")," address instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"wss"),". Remember that this setup is functional only when your web server is running locally. You can check how to get multi address of your locally run node in ",(0,o.kt)("a",{parentName:"p",href:"/guides/nwaku/find-node-address"},"Find node address"),".")),(0,o.kt)("h2",{id:"configure-dns-discovery"},"Configure DNS discovery"),(0,o.kt)("p",null,"To bootstrap a node using ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/dns-discovery"},"DNS Discovery"),", first install the ",(0,o.kt)("inlineCode",{parentName:"p"},"@waku/dns-discovery")," package:"),(0,o.kt)(l,{groupId:"package-manager",mdxType:"Tabs"},(0,o.kt)(u,{value:"npm",label:"NPM",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @waku/dns-discovery\n"))),(0,o.kt)(u,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @waku/dns-discovery\n")))),(0,o.kt)("p",null,"Then, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"wakuDnsDiscovery()")," function to provide a list of URLs for DNS node list in the format ",(0,o.kt)("inlineCode",{parentName:"p"},"enrtree://<key>@<fqdn>"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { createLightNode } from "@waku/sdk";\nimport { wakuDnsDiscovery } from "@waku/dns-discovery";\n\n// Define DNS node list\nconst enrTree = "enrtree://[PUBLIC KEY]@[DOMAIN NAME]";\n\n// Define node requirements\nconst NODE_REQUIREMENTS = {\n    store: 3,\n    lightPush: 3,\n    filter: 3,\n};\n\n// Bootstrap node using DNS Discovery\nconst node = await createLightNode({\n    libp2p: {\n        peerDiscovery: [\n            wakuDnsDiscovery(\n                [enrTree],\n                NODE_REQUIREMENTS,\n            ),\n        ],\n    },\n});\n')),(0,o.kt)("p",null,"For example, consider a node that uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"waku v2.prod")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"waku v2.test")," ",(0,o.kt)("inlineCode",{parentName:"p"},"ENR")," trees for ",(0,o.kt)("inlineCode",{parentName:"p"},"DNS Discovery"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { enrTree } from "@waku/dns-discovery";\n\n// Bootstrap node using DNS Discovery\nconst node = await createLightNode({\n    libp2p: {\n        peerDiscovery: [\n            wakuDnsDiscovery(\n                [enrTree["PROD"], enrTree["TEST"]],\n                NODE_REQUIREMENTS,\n            ),\n        ],\n    },\n});\n')),(0,o.kt)("h2",{id:"configure-dns-discovery-and-static-peers"},"Configure DNS discovery and static peers"),(0,o.kt)("p",null,"You can also bootstrap your node using ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/dns-discovery"},"DNS Discovery")," and ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/static-peers"},"Static Peers")," simultaneously:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { createLightNode } from "@waku/sdk";\nimport { bootstrap } from "@libp2p/bootstrap";\nimport { enrTree, wakuDnsDiscovery } from "@waku/dns-discovery";\n\n// Define the list of static peers to bootstrap\nconst peers = [\n    "/ip4/0.0.0.0/tcp/60002/ws/p2p/16Uiu2HAkzjwwgEAXfeGNMKFPSpc6vGBRqCdTLG5q3Gmk2v4pQw7H",\n    "/ip4/0.0.0.0/tcp/60003/ws/p2p/16Uiu2HAmFBA7LGtwY5WVVikdmXVo3cKLqkmvVtuDu63fe8safeQJ",\n];\n\n// Define node requirements\nconst NODE_REQUIREMENTS = {\n    store: 3,\n    lightPush: 3,\n    filter: 3,\n};\n\n// Bootstrap node using DNS Discovery and static peers\nconst node = await createLightNode({\n    libp2p: {\n        bootstrapPeers: peers,\n        peerDiscovery: [\n            wakuDnsDiscovery(\n                [enrTree["PROD"]],\n                NODE_REQUIREMENTS,\n            ),\n        ],\n    },\n});\n')),(0,o.kt)("h2",{id:"retrieving-connected-peers"},"Retrieving connected peers"),(0,o.kt)("p",null,"You can retrieve the array of peers connected to a node using the ",(0,o.kt)("inlineCode",{parentName:"p"},"libp2p.getPeers()")," function within the ",(0,o.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { createLightNode, waitForRemotePeer } from "@waku/sdk";\n\nconst node = await createLightNode({ defaultBootstrap: true });\nawait waitForRemotePeer(node);\n\n// Retrieve array of peers connected to the node\nconsole.log(node.libp2p.getPeers());\n')))}f.isMDXComponent=!0}}]);