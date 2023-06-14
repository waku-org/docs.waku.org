---
title: Run a Nwaku Node
---

Nwaku (formerly `nim-waku`) is a lightweight and robust Nim client for running a Waku node, equipped with tools to monitor and maintain a running node. Nwaku is highly configurable, enabling operators to select the [protocols](/overview/concepts/protocols) they want to support based on their needs, motivations, and available resources.

This guide provides detailed steps to build, configure, and connect a `nwaku` node to the Waku Network. It also covers using existing tools to monitor and maintain the node.

## Build the Node

Before running a nwaku node, it is necessary to build it. Nwaku provides multiple options for building a node:

| | Description | Documentation |
| - | - | - |
| Source Code | Build a `nwaku` node directly from the source code | [Build Nwaku from Source](/guides/nwaku/build-from-source) |
| Precompiled Binary | Download a precompiled binary of the `nwaku` node | [Download Nwaku Binary](https://github.com/waku-org/nwaku/tags) |
| Nightly Release | Try out the latest `nwaku` updates without compiling the binaries | [Download Nightly Release](https://github.com/waku-org/nwaku/releases/tag/nightly) |
| Docker Container | Build and run a `nwaku` node in a Docker Container | [Run Nwaku in Docker Container](https://github.com/waku-org/nwaku/blob/master/docs/operators/docker-quickstart.md) |
| DigitalOcean Droplet | Build and run a `nwaku` node on a DigitalOcean Droplet | [Run Nwaku on DigitalOcean Droplet](https://github.com/waku-org/nwaku/blob/master/docs/operators/droplet-quickstart.md) |

:::info
Nwaku can be built and run on Linux and macOS, while Windows support is currently experimental.
:::

## Run the Node

Once you have built the `nwaku` node, run it using the default configuration:

```bash
# Run with default configuration
./build/wakunode2

# See available command line options
./build/wakunode2 --help
```

By default, a `nwaku` node is configured to do the following:

- Generate a new private key and `PeerID`.
- Listen for incoming libp2p connections on the default TCP port (`60000`).
- Subscribe to the default Pub/Sub topic (`/waku/2/default-waku/proto`).
- Start the `JSON-RPC` HTTP server on the default port (`8545`).
- Enable the `Relay` protocol for relaying messages.
- Enable the `Store` protocol as a client, allowing it to query peers for historical messages but not store any message itself.

:::info
For more advanced configurations like enabling other protocols or maintaining a consistent `PeerID`, please refer to the [Configuration Methods](https://github.com/waku-org/nwaku/blob/master/docs/operators/how-to/configure.md) guide.
:::

## Connect the Node

To join the Waku Network, nodes must connect with peers. Nwaku provides multiple [peer discovery](/overview/concepts/peer-discovery) mechanisms for locating other peers:

| | Description | Documentation |
| - | - | - |
| Predefined Nodes | Configure the bootstrap nodes that `nwaku` should establish connections upon startup | [Configure Predefined Nodes](https://github.com/waku-org/nwaku/blob/master/docs/operators/how-to/connect.md#option-1-configure-peers-statically) |
| DNS Discovery | Enable `nwaku` to locate peers to connect to using the `DNS Discovery` mechanism | [Configure DNS Discovery](https://github.com/waku-org/nwaku/blob/master/docs/operators/how-to/configure-dns-disc.md) |
| Discv5 | Enable `nwaku` to locate peers to connect to using the `Discv5` mechanism | [Configure Discv5](https://github.com/waku-org/nwaku/blob/master/docs/operators/how-to/connect.md#option-3-discover-peers-using-waku-discovery-v5) |

:::info
You can configure a `nwaku` node to use multiple peer discovery mechanisms simultaneously.
:::

## Interact with the Node

You can interact with a running  `nwaku` node through the [JSON RPC API](https://rfc.vac.dev/spec/16/), such as querying the node information using the `get_waku_v2_debug_v1_info` method:

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

<Tabs>
<TabItem value="request" label="Request">

```bash
curl --location --request GET 'http://localhost:8545' \
--header 'Content-Type: application/json' \
--data '{
	"jsonrpc": "2.0",
	"id": "id",
	"method": "get_waku_v2_debug_v1_info",
	"params": []
}'
```

</TabItem>
<TabItem value="response" label="Response">

```json
{
	"jsonrpc": "2.0",
	"id": "id",
	"result": {
		"listenAddresses": [
			"/ip4/0.0.0.0/tcp/60000/p2p/16Uiu2HAmUbPquFQqje3jiqoB5YoiUbBya59NB4qqEzeiTNGHeA6w"
		],
		"enrUri": "enr:-Iu4QCQZXZDb_JsYmLoYor0F5E_95HbIywgO_wgx2rIdDbmCJZkTzmlCr0wmMzV47lgik_tVwww5mIng90Ris83TisMBgmlkgnY0gmlwhAAAAACJc2VjcDI1NmsxoQPszztG-Ev52ZB7tk0jF8s6Md4KvyY_rhzNZokaaB_ABIN0Y3CC6mCFd2FrdTIB"
	}
}
```

</TabItem>
</Tabs>

:::info
The `listenAddresses` field stores the transport addresses for accepting connections, while the `enrUri` field stores the `ENR` URI for peer discovery.
:::