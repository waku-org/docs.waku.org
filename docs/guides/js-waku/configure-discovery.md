---
title: Bootstrap Nodes and Discover Peers
---

This guide provides detailed steps to bootstrap your your node using [Static Peers](/overview/concepts/static-peers) and discover peers in the Waku Network using [DNS Discovery](/overview/concepts/dns-discovery).

:::tip
Until [node incentivisation](/overview/reference/research-in-progress#prevention-of-denial-of-service-dos-and-node-incentivisation) is in place, you should [operate extra nodes](/guides/nodes-and-sdks#run-a-waku-node) alongside the ones provided by the Waku Network. When running a node, we recommend using the [DNS Discovery and Static Peers](/guides/js-waku/configure-discovery#configure-dns-discovery-and-static-peers) configuration to connect to both the Waku Network and your node.
:::

## Default Bootstrap Method

The `@waku/sdk` package provides a built-in bootstrapping method that uses [DNS Discovery](/overview/concepts/dns-discovery) to locate peers from the `waku v2.prod` `ENR` tree.

```js
import { createLightNode } from "@waku/sdk";

// Bootstrap node using the default bootstrap method
const node = await createLightNode({ defaultBootstrap: true });
```

## Configure Static Peers

To bootstrap a node using [static peers](/overview/concepts/static-peers), first install the `@libp2p/bootstrap` package:

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

<Tabs groupId="package-manager">
<TabItem value="npm" label="npm">

```shell
npm install @libp2p/bootstrap
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```shell
yarn add @libp2p/bootstrap
```

</TabItem>
</Tabs>

Then, use the `bootstrap()` function to provide a list of `multiaddr` to bootstrap the node:

```js
import { createLightNode } from "@waku/sdk";
import { bootstrap } from "@libp2p/bootstrap";

// Bootstrap node using static peers
const node = await createLightNode({
	libp2p: {
		peerDiscovery: [
			bootstrap({ list: ["[PEER MULTIADDR]"] }),
		],
	},
});
```

For example, consider a node that connects to two static peers on the same local host (IP: `0.0.0.0`) using TCP ports `60002` and `60003`:

```js
// Define the list of static peers to bootstrap
const peers = [
	"/ip4/0.0.0.0/tcp/60002/p2p/16Uiu2HAkzjwwgEAXfeGNMKFPSpc6vGBRqCdTLG5q3Gmk2v4pQw7H",
	"/ip4/0.0.0.0/tcp/60003/p2p/16Uiu2HAmFBA7LGtwY5WVVikdmXVo3cKLqkmvVtuDu63fe8safeQJ",
];

// Bootstrap node using the static peers
const node = await createLightNode({
	libp2p: {
		peerDiscovery: [
			bootstrap({ list: peers }),
		],
	},
});
```

## Configure DNS Discovery

To bootstrap a node using [DNS Discovery](/overview/concepts/dns-discovery), first install the `@waku/dns-discovery` package:

<Tabs groupId="package-manager">
<TabItem value="npm" label="npm">

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

## Configure DNS Discovery and Static Peers

You can also bootstrap your node using [DNS Discovery](/overview/concepts/dns-discovery) and [Static Peers](/overview/concepts/static-peers) simultaneously:

```js
import { createLightNode } from "@waku/sdk";
import { bootstrap } from "@libp2p/bootstrap";
import { enrTree, wakuDnsDiscovery } from "@waku/dns-discovery";

// Define the list of static peers to bootstrap
const peers = [
	"/ip4/0.0.0.0/tcp/60002/p2p/16Uiu2HAkzjwwgEAXfeGNMKFPSpc6vGBRqCdTLG5q3Gmk2v4pQw7H",
	"/ip4/0.0.0.0/tcp/60003/p2p/16Uiu2HAmFBA7LGtwY5WVVikdmXVo3cKLqkmvVtuDu63fe8safeQJ",
];

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
			bootstrap({ list: peers }),
			wakuDnsDiscovery(
				[enrTree["PROD"]],
				NODE_REQUIREMENTS,
			),
		],
	},
});
```

:::info
If you do not set up a bootstrap node or discovery mechanism, your node will not connect to any remote peer.
:::