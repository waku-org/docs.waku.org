---
title: Bootstrap Nodes and Discover Peers
hide_table_of_contents: true
---

This guide provides detailed steps to bootstrap your your node using [Static Peers](/learn/concepts/static-peers) and discover peers in the Waku Network using [DNS Discovery](/learn/concepts/dns-discovery).

:::info
If you do not set up a bootstrap node or discovery mechanism, your node will not connect to any remote peer.
:::

:::tip
Until [node incentivisation](/learn/research#prevention-of-denial-of-service-dos-and-node-incentivisation) is in place, you should [operate extra nodes](/#run-a-waku-node) alongside the ones provided by the Waku Network. When running a node, we recommend using the [DNS Discovery and Static Peers](#configure-dns-discovery-and-static-peers) configuration to connect to both the Waku Network and your node.
:::

## Default bootstrap method

The `@waku/sdk` package provides a built-in bootstrapping method that uses [DNS Discovery](/learn/concepts/dns-discovery) to locate peers from the `waku v2.prod` `ENR` tree.

```js
import { createLightNode } from "@waku/sdk";

// Bootstrap node using the default bootstrap method
const node = await createLightNode({ defaultBootstrap: true });
```

## Configure static peers

To set [static peers](/learn/concepts/static-peers), a list of `multiaddr` to bootstrap the node should be passed to the `bootstrapPeers` parameter of the `createLightNode()` function:

```js
import { createLightNode } from "@waku/sdk";

// Bootstrap node using static peers
const node = await createLightNode({
	bootstrapPeers: ["[PEER MULTIADDR]"],
});
```

For example, consider a node that connects to two static peers on the same local host (IP: `0.0.0.0`) using TCP ports `60002` and `60003` with WebSocket enabled:

```js
// Define the list of static peers to bootstrap
const peers = [
	"/ip4/0.0.0.0/tcp/60002/ws/p2p/16Uiu2HAkzjwwgEAXfeGNMKFPSpc6vGBRqCdTLG5q3Gmk2v4pQw7H",
	"/ip4/0.0.0.0/tcp/60003/ws/p2p/16Uiu2HAmFBA7LGtwY5WVVikdmXVo3cKLqkmvVtuDu63fe8safeQJ",
];

// Bootstrap node using the static peers
const node = await createLightNode({
	bootstrapPeers: peers,
});
```

Alternatively, you can dial a particular node like this: 

```js
// Define the list of static peers to bootstrap
const peers = [
	"/ip4/0.0.0.0/tcp/60002/ws/p2p/16Uiu2HAkzjwwgEAXfeGNMKFPSpc6vGBRqCdTLG5q3Gmk2v4pQw7H",
	"/ip4/0.0.0.0/tcp/60003/ws/p2p/16Uiu2HAmFBA7LGtwY5WVVikdmXVo3cKLqkmvVtuDu63fe8safeQJ",
];


const node = await createLightNode();

// In case nodes are using `ws` protocol - additional configuration is needed:
/*
import { webSockets } from "@libp2p/websockets";
import { all as filterAll } from "@libp2p/websockets/filters";

const node = await createLightNode({
	libp2p: {
		transports: [webSockets({ filter: filterAll })],
	},
});
*/

const promises = peers.map(multiaddr => node.dial(multiaddr));

await Promise.all(promises);
```

:::tip
For local development using a `nwaku` node, use a `ws` address instead of `wss`. Remember that this setup is functional only when your web server is running locally. You can check how to get multi address of your locally run node in [Find node address](/guides/nwaku/find-node-address).
:::

## Configure DNS discovery

To bootstrap a node using [DNS Discovery](/learn/concepts/dns-discovery), first install the `@waku/dns-discovery` package:

<Tabs groupId="package-manager">
<TabItem value="npm" label="NPM">

```shell
npm install @waku/dns-discovery
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```shell
yarn add @waku/dns-discovery
```

</TabItem>
</Tabs>

Then, use the `wakuDnsDiscovery()` function to provide a list of URLs for DNS node list in the format `enrtree://<key>@<fqdn>`:

```js
import { createLightNode } from "@waku/sdk";
import { wakuDnsDiscovery } from "@waku/dns-discovery";

// Define DNS node list
const enrTree = "enrtree://[PUBLIC KEY]@[DOMAIN NAME]";

// Define node requirements
const NODE_REQUIREMENTS = {
	store: 3,
	lightPush: 3,
	filter: 3,
};

// Bootstrap node using DNS Discovery
const node = await createLightNode({
	libp2p: {
		peerDiscovery: [
			wakuDnsDiscovery(
				[enrTree],
				NODE_REQUIREMENTS,
			),
		],
	},
});
```

For example, consider a node that uses the `waku v2.prod` and `waku v2.test` `ENR` trees for `DNS Discovery`:

```js
import { enrTree } from "@waku/dns-discovery";

// Bootstrap node using DNS Discovery
const node = await createLightNode({
	libp2p: {
		peerDiscovery: [
			wakuDnsDiscovery(
				[enrTree["PROD"], enrTree["TEST"]],
				NODE_REQUIREMENTS,
			),
		],
	},
});
```

## Configure DNS discovery and static peers

You can also bootstrap your node using [DNS Discovery](/learn/concepts/dns-discovery) and [Static Peers](/learn/concepts/static-peers) simultaneously:

```js
import { createLightNode } from "@waku/sdk";
import { bootstrap } from "@libp2p/bootstrap";
import { enrTree, wakuDnsDiscovery } from "@waku/dns-discovery";

// Define the list of static peers to bootstrap
const peers = [
	"/ip4/0.0.0.0/tcp/60002/ws/p2p/16Uiu2HAkzjwwgEAXfeGNMKFPSpc6vGBRqCdTLG5q3Gmk2v4pQw7H",
	"/ip4/0.0.0.0/tcp/60003/ws/p2p/16Uiu2HAmFBA7LGtwY5WVVikdmXVo3cKLqkmvVtuDu63fe8safeQJ",
];

// Define node requirements
const NODE_REQUIREMENTS = {
	store: 3,
	lightPush: 3,
	filter: 3,
};

// Bootstrap node using DNS Discovery and static peers
const node = await createLightNode({
	libp2p: {
		bootstrapPeers: peers,
		peerDiscovery: [
			wakuDnsDiscovery(
				[enrTree["PROD"]],
				NODE_REQUIREMENTS,
			),
		],
	},
});
```

## Retrieving connected peers

You can retrieve the array of peers connected to a node using the `libp2p.getPeers()` function within the `@waku/sdk` package:

```js
import { createLightNode, waitForRemotePeer } from "@waku/sdk";

const node = await createLightNode({ defaultBootstrap: true });
await waitForRemotePeer(node);

// Retrieve array of peers connected to the node
console.log(node.libp2p.getPeers());
```