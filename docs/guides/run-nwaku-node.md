---
title: Run a Nwaku Node
---

Nwaku (formerly `nim-waku`) is a lightweight and robust Nim client for running a Waku node, equipped with tools to monitor and maintain a running node. Nwaku is highly configurable, enabling operators to select the [protocols](/overview/concepts/protocols) they want to support based on their needs, motivations, and available resources.

This guide provides detailed steps to build, configure, and connect a `nwaku` node to the Waku Network. It also includes interacting with the node and finding its addresses.

:::info
Nwaku can be built and run on Linux and macOS, while Windows support is currently experimental.
:::

## Build the Node

Before running a `nwaku` node, it is necessary to build it. Nwaku provides multiple options for building a node:

| | Description | Documentation |
| - | - | - |
| Precompiled Binary | Download a precompiled binary of the `nwaku` node | [Download Nwaku Binary](https://github.com/waku-org/nwaku/tags) |
| Build Source | Build a `nwaku` node directly from the source code | [Build Nwaku from Source](/guides/nwaku/build-source) |
| Docker Container | Build and run a `nwaku` node in a Docker Container | [Run Nwaku in Docker Container](/guides/nwaku/run-docker) |
| Docker Compose | Build and run a `nwaku` node with Docker Compose | [Run Nwaku with Docker Compose](/guides/nwaku/run-docker-compose) |

:::tip
- If you want to try the latest `nwaku` updates without compiling the binaries, [download the nightly release](https://github.com/waku-org/nwaku/releases/tag/nightly).
- You can run `nwaku` binaries and Docker images on cloud service providers like [Google Cloud](https://cloud.google.com/), [Microsoft Azure](https://azure.microsoft.com/), [Amazon Web Services](https://aws.amazon.com/), and [DigitalOcean](https://www.digitalocean.com/).
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

:::tip
For more advanced configurations like enabling other protocols or maintaining a consistent `PeerID`, please refer to the [Node Configuration](/guides/nwaku/configuration) guide.
:::

## Connect the Node

To join the Waku Network, nodes must connect with peers. Nwaku provides multiple [peer discovery](/overview/concepts/peer-discovery) mechanisms for locating other peers:

| | Description | Documentation |
| - | - | - |
| Predefined Nodes | Configure the bootstrap nodes that `nwaku` should establish connections upon startup | [Configure Predefined Nodes](https://github.com/waku-org/nwaku/blob/master/docs/operators/how-to/connect.md#option-1-configure-peers-statically) |
| DNS Discovery | Enable `nwaku` to locate peers to connect to using the `DNS Discovery` mechanism | [Configure DNS Discovery](https://github.com/waku-org/nwaku/blob/master/docs/operators/how-to/configure-dns-disc.md) |
| Discv5 | Enable `nwaku` to locate peers to connect to using the `Discv5` mechanism | [Configure Discv5](https://github.com/waku-org/nwaku/blob/master/docs/operators/how-to/connect.md#option-3-discover-peers-using-waku-discovery-v5) |

:::tip
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
The `listenAddresses` field stores the node's listening address(es), while the `enrUri` field stores the discoverable `ENR` URI for peer discovery.
:::

## Find the Node Addresses

You can find the addresses of a running node through its logs or by calling the `get_waku_v2_debug_v1_info` method of the [JSON RPC API](https://rfc.vac.dev/spec/16/).

:::tip
When starting the node, `nwaku` will display all the public listening and discovery addresses at the `INFO` log level.
:::

### Listening Address(es)

Look for the log entry that begins with `Listening on`, for example:

```txt title="Nwaku Log Output"
INF 2023-06-15 16:09:54.448+01:00 Listening on                               topics="waku node" tid=1623445 file=waku_node.nim:922 full=[/ip4/0.0.0.0/tcp/60000/p2p/16Uiu2HAmQCsH9V81xoqTwGuT3qwkZWbwY1TtTQwpr3DjHU2TSwMn][/ip4/0.0.0.0/tcp/8000/ws/p2p/16Uiu2HAmQCsH9V81xoqTwGuT3qwkZWbwY1TtTQwpr3DjHU2TSwMn]
```

```bash
# Listening TCP transport address
/ip4/0.0.0.0/tcp/60000/p2p/16Uiu2HAmQCsH9V81xoqTwGuT3qwkZWbwY1TtTQwpr3DjHU2TSwMn

# Listening websocket address
/ip4/0.0.0.0/tcp/8000/ws/p2p/16Uiu2HAmQCsH9V81xoqTwGuT3qwkZWbwY1TtTQwpr3DjHU2TSwMn
```

### Discoverable ENR Address(es)

A `nwaku` node can encode it's addressing information in an [Ethereum Node Record (ENR)](https://eips.ethereum.org/EIPS/eip-778) following the [WAKU2-ENR](https://rfc.vac.dev/spec/31/) specification, primarily for peer discovery.

#### ENR for DNS discovery

Look for the log entry that begins with `DNS: discoverable ENR`, for example:

```txt title="Nwaku Log Output"
INF 2023-06-15 16:09:54.448+01:00 DNS: discoverable ENR                      topics="waku node" tid=1623445 file=waku_node.nim:923 enr=enr:-Iu4QBKYj8Ovxwz4fIalxZ_1a8dOCU2WC-1LQrcBCCb4Np93f9-UuSZXn3vagJL1S3k3hwRYfOp3JSbW7_VqwtqMIeMBgmlkgnY0gmlwhAAAAACJc2VjcDI1NmsxoQOrmyV59dAzY4ZKrvrj32VOoZbLby8dCKFnXnqhIdQ0NYN0Y3CC6mCFd2FrdTIB
```

```bash
# ENR the node addresses are encoded in
enr:-Iu4QBKYj8Ovxwz4fIalxZ_1a8dOCU2WC-1LQrcBCCb4Np93f9-UuSZXn3vagJL1S3k3hwRYfOp3JSbW7_VqwtqMIeMBgmlkgnY0gmlwhAAAAACJc2VjcDI1NmsxoQOrmyV59dAzY4ZKrvrj32VOoZbLby8dCKFnXnqhIdQ0NYN0Y3CC6mCFd2FrdTIB
```

#### ENR for Discv5

Look for the log entry that begins with `Discv5: discoverable ENR`, for example:

```txt title="Nwaku Log Output"
INF 2023-06-15 16:09:54.448+01:00 Discv5: discoverable ENR                   topics="waku node" tid=1623445 file=waku_node.nim:924 enr=enr:-IO4QDxToTg86pPCK2KvMeVCXC2ADVZWrxXSvNZeaoa0JhShbM5qed69RQz1s1mWEEqJ3aoklo_7EU9iIBcPMVeKlCQBgmlkgnY0iXNlY3AyNTZrMaEDdBHK1Gx6y_zv5DVw5Qb3DtSOMmVHTZO1WSORrF2loL2DdWRwgiMohXdha3UyAw
```

```bash
# ENR the node addresses are encoded in
enr:-IO4QDxToTg86pPCK2KvMeVCXC2ADVZWrxXSvNZeaoa0JhShbM5qed69RQz1s1mWEEqJ3aoklo_7EU9iIBcPMVeKlCQBgmlkgnY0iXNlY3AyNTZrMaEDdBHK1Gx6y_zv5DVw5Qb3DtSOMmVHTZO1WSORrF2loL2DdWRwgiMohXdha3UyAw
```