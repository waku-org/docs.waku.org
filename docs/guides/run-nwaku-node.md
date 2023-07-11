---
title: Run a Nwaku Node
---

Nwaku is a lightweight and robust Nim client for running a Waku node, equipped with tools to monitor and maintain a running node. Nwaku is highly configurable, enabling operators to select the [protocols](/overview/concepts/protocols) they want to support based on their needs, motivations, and available resources.

This guide provides detailed steps to download, build, configure, and connect a `nwaku` node to the Waku Network. It also includes interacting with the node and finding its addresses.

## Get the Node Binary

To run a node, you must have the `nwaku` binary. Nwaku provides multiple options for acquiring the node binary:

#### Download the Binary

| | Description | Documentation |
| - | - | - |
| Precompiled Binary | Download a precompiled binary of the `nwaku` node | [Download Nwaku Binary](https://github.com/waku-org/nwaku/tags) |
| Nightly Release | Try the latest `nwaku` updates without compiling the binaries | [Download Nightly Release](https://github.com/waku-org/nwaku/releases/tag/nightly) |

#### Build the Binary

You can build the node binary directly from the [nwaku source code](https://github.com/waku-org/nwaku). To learn more, please refer to the [Build Nwaku from Source](/guides/nwaku/build-source) guide.

#### Run Nwaku in Docker

| | Description | Documentation |
| - | - | - |
| Docker Container | Run a `nwaku` node in a Docker Container | [Run Nwaku in a Docker Container](/guides/nwaku/run-docker) |
| Docker Compose | Run a `nwaku` node with Docker Compose | [Run Nwaku with Docker Compose](/guides/nwaku/run-docker-compose) |

:::tip
You can run the `nwaku` binaries and Docker images on cloud service providers like [Google Cloud](https://cloud.google.com/), [Microsoft Azure](https://azure.microsoft.com/), [Amazon Web Services](https://aws.amazon.com/), and [DigitalOcean](https://www.digitalocean.com/).
:::

## Run the Node

Once you have gotten the `nwaku` binary, run it using the [default configuration](/guides/reference/node-config-methods#default-configuration-values):

```bash
# Run with default configuration
./build/wakunode2

# See available command line options
./build/wakunode2 --help
```

:::tip
For more advanced configurations like enabling other protocols or maintaining a consistent `PeerID`, please refer to the [Node Configuration Methods](/guides/reference/node-config-methods) guide.
:::

## Bootstrap the Node

To join the Waku Network, nodes must [bootstrap](/overview/reference/glossary#bootstrapping) for an entry point before discovering more peers. Nwaku provides multiple [peer discovery](/overview/concepts/peer-discovery) mechanisms:

| | Description | Documentation |
| - | - | - |
| Static Peers | Configure the bootstrap nodes that `nwaku` should establish connections upon startup | [Configure Static Peers](/guides/nwaku/configure-discovery#configure-static-peers) |
| DNS Discovery | Enable `nwaku` to bootstrap nodes using the [DNS Discovery](/overview/concepts/dns-discovery) mechanism | [Configure DNS Discovery](/guides/nwaku/configure-discovery#configure-dns-discovery) |
| Discv5 | Enable `nwaku` to discover peers using the [Discv5](/overview/concepts/discv5) mechanism | [Configure Discv5](/guides/nwaku/configure-discovery#configure-discv5) |
| Peer Exchange | Enable [Peer Exchange](/overview/concepts/peer-exchange) protocol for light nodes to request peers from your `nwaku` node | [Configure Peer Exchange](/guides/nwaku/configure-discovery#configure-peer-exchange) |

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
The `listenAddresses` field stores the node's listening addresses, while the `enrUri` field stores the discoverable `ENR` URI for peer discovery.
:::

## Find the Node Addresses

You can find the addresses of a running node through its logs or by calling the `get_waku_v2_debug_v1_info` method of the [JSON RPC API](https://rfc.vac.dev/spec/16/).

:::info
When starting the node, `nwaku` will display all the public listening and discovery addresses at the `INFO` log level.
:::

### Listening Addresses

Look for the log entry that begins with `Listening on`, for example:

```txt title="Nwaku Log Output"
INF 2023-06-15 16:09:54.448+01:00 Listening on                               topics="waku node" tid=1623445 file=waku_node.nim:922 full=[/ip4/0.0.0.0/tcp/60000/p2p/16Uiu2HAmQCsH9V81xoqTwGuT3qwkZWbwY1TtTQwpr3DjHU2TSwMn][/ip4/0.0.0.0/tcp/8000/ws/p2p/16Uiu2HAmQCsH9V81xoqTwGuT3qwkZWbwY1TtTQwpr3DjHU2TSwMn]
```

```bash
# Listening TCP transport address
/ip4/0.0.0.0/tcp/60000/p2p/16Uiu2HAmQCsH9V81xoqTwGuT3qwkZWbwY1TtTQwpr3DjHU2TSwMn

# Listening WebSocket address
/ip4/0.0.0.0/tcp/8000/ws/p2p/16Uiu2HAmQCsH9V81xoqTwGuT3qwkZWbwY1TtTQwpr3DjHU2TSwMn
```

### Discoverable ENR Addresses

A `nwaku` node can encode its addressing information in an [Ethereum Node Record (ENR)](https://eips.ethereum.org/EIPS/eip-778) following the [WAKU2-ENR](https://rfc.vac.dev/spec/31/) specification, primarily for peer discovery.

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