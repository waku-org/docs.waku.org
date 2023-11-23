---
title: Configure Peer Discovery
---

This guide provides detailed steps to configure a `nwaku` node to discover and connect with peers in the Waku Network.

:::info
You can configure a `nwaku` node to use multiple peer discovery mechanisms simultaneously.
:::

## Configure Static Peers

You can provide [static peers](/learn/concepts/static-peers) to a `nwaku` node during startup using the `staticnode` configuration option. To connect to multiple peers on startup, repeat the `staticnode` option:

```bash
./build/wakunode2 \
  --staticnode=[PEER MULTIADDR 1] \
  --staticnode=[PEER MULTIADDR 2]
```

For example, consider a `nwaku` node that connects to two static peers on the same local host (IP: `0.0.0.0`) using TCP ports `60002` and `60003`:

```bash
./build/wakunode2 \
  --staticnode=/ip4/0.0.0.0/tcp/60002/p2p/16Uiu2HAkzjwwgEAXfeGNMKFPSpc6vGBRqCdTLG5q3Gmk2v4pQw7H \
  --staticnode=/ip4/0.0.0.0/tcp/60003/p2p/16Uiu2HAmFBA7LGtwY5WVVikdmXVo3cKLqkmvVtuDu63fe8safeQJ
```

## Configure DNS Discovery

To enable [DNS Discovery](/learn/concepts/dns-discovery) in a `nwaku` node, use the following configuration options:

- `dns-discovery`: Enables `DNS Discovery` on the node (disabled by default).
- `dns-discovery-url`: URL for DNS node list in the format `enrtree://<key>@<fqdn>` where `<fqdn>` is the fully qualified domain name and `<key>` is the base32 encoding of the compressed 32-byte public key that signed the list at that location.
- `dns-discovery-name-server` (optional): DNS name server IPs to query. You can repeat this option to provide multiple DNS name servers.

```bash
./build/wakunode2 \
  --dns-discovery=true \
  --dns-discovery-url=enrtree://[PUBLIC KEY]@[DOMAIN NAME] \
  --dns-discovery-name-server=[DNS NAME SERVER IP]
```

:::info
If you omit the `dns-discovery-name-server` option, `nwaku` will attempt to use the CloudFlare servers `1.1.1.1` and `1.0.0.1`.
:::

For example, consider a `nwaku` node that enables `DNS Discovery`, connects to a DNS node list, and queries the IPs `8.8.8.8` and `8.8.4.4`:

```bash
./build/wakunode2 \
  --dns-discovery=true \
  --dns-discovery-url=enrtree://ANEDLO25QVUGJOUTQFRYKWX6P4Z4GKVESBMHML7DZ6YK4LGS5FC5O@prod.wakuv2.nodes.status.im \
  --dns-discovery-name-server=8.8.8.8 \
  --dns-discovery-name-server=8.8.4.4
```

## Configure Discv5

To enable [Discv5](/learn/concepts/discv5) in a `nwaku` node, use the following configuration options:

- `discv5-discovery`: Enables `Discv5` on the node (disabled by default).
- `discv5-bootstrap-node`: ENR for `Discv5` routing table bootstrap node. You can repeat this option to provide multiple bootstrap entries.

```bash
./build/wakunode2 \
  --discv5-discovery=true \
  --discv5-bootstrap-node=[DISCV5 ENR BOOTSTRAP ENTRY 1] \
  --discv5-bootstrap-node=[DISCV5 ENR BOOTSTRAP ENTRY 2]
```

For example, consider a `nwaku` node that enables `Discv5` and bootstraps its routing table using a static `ENR`:

```bash
./build/wakunode2 \
  --discv5-discovery=true \
  --discv5-bootstrap-node=enr:-IO4QDxToTg86pPCK2KvMeVCXC2ADVZWrxXSvNZeaoa0JhShbM5qed69RQz1s1mWEEqJ3aoklo_7EU9iIBcPMVeKlCQBgmlkgnY0iXNlY3AyNTZrMaEDdBHK1Gx6y_zv5DVw5Qb3DtSOMmVHTZO1WSORrF2loL2DdWRwgiMohXdha3UyAw
```

:::info
When Discv5 is enabled and used with [DNS Discovery](#configure-dns-discovery), the `nwaku` node will attempt to bootstrap the Discv5 routing table by extracting `ENRs` from peers discovered through DNS.
:::

## Configure Peer Exchange

To enable [Peer Exchange](/learn/concepts/peer-exchange) in a `nwaku` node, use the following configuration options:

- `peer-exchange`: Enables `Peer Exchange` on the node as a responder (disabled by default).
- `peer-exchange-node` (optional): Multiaddr for bootstrap node with the peer exchange protocol enabled.

```bash
./build/wakunode2 \
  --peer-exchange=true \
  --peer-exchange-node=[PEER MULTIADDR WITH EXCHANGE ENABLED]
```

For example, consider two `nwaku` nodes configured as a `server` (peer exchange responder node) and `client` (node using peer exchange) on the same local host (IP: `0.0.0.0`):

```bash title="Server: Nwaku Node with Peer Exchange Enabled"
./build/wakunode2 --peer-exchange=true
```

```bash title="Client: Nwaku Node Bootstrapping with Peer Exchange"
./build/wakunode2 \
  --tcp-port=30305 \
  --ports-shift=1 \
  --peer-exchange-node=/ip4/0.0.0.0/tcp/60000/p2p/16Uiu2HAmLCe6zVqCS6KMqqRbbhyoJjfYZGr1Q3thTSbyKzibQkFR
```

:::info
`nwaku` provides a [`relay-peer-exchange`](/guides/reference/node-config-options#relay-config) option via `libp2p` for peer exchange, allowing network growth through neighbouring nodes. However, this feature can compromise security and network robustness, so we recommend only using it in high-trust environments.
:::
