---
title: Configure Peer Discovery
---

This guide provides detailed steps to configure a `nwaku` node to locate and connect with peers in the Waku Network.

:::tip
You can configure a `nwaku` node to use multiple peer discovery mechanisms simultaneously.
:::

## Configure Static Peers

You can provide static peers to a `nwaku` node during startup using the `staticnode` configuration option. To connect to multiple peers on startup, repeat the `staticnode` option:

```bash
./build/wakunode2 \
  --staticnode:[Libp2p MULTIADDR PEER 1] \
  --staticnode:[Libp2p MULTIADDR PEER 2]
```

For instance, consider a `nwaku` node that connects to two static peers on the same local host (IP: `0.0.0.0`) using TCP ports `60002` and `60003`:

```bash
./build/wakunode2 \
  --staticnode:/ip4/0.0.0.0/tcp/60002/p2p/16Uiu2HAkzjwwgEAXfeGNMKFPSpc6vGBRqCdTLG5q3Gmk2v4pQw7H \
  --staticnode:/ip4/0.0.0.0/tcp/60003/p2p/16Uiu2HAmFBA7LGtwY5WVVikdmXVo3cKLqkmvVtuDu63fe8safeQJ
```

## Configure DNS Discovery

To enable [DNS Discovery](/overview/concepts/dns-discovery) in a `nwaku` node, use the following configuration options:

- `dns-discovery`: Enables DNS Discovery on the node (disabled by default).
- `dns-discovery-url`: URL for DNS node list in the format `enrtree://<key>@<fqdn>` where `<fqdn>` is the fully qualified domain name and `<key>` is the base32 encoding of the compressed 32-byte public key that signed the list at that location.
- `dns-discovery-name-server` (optional): DNS name server IPs to query. You can repeat this option to provide multiple DNS name servers.

```bash
./build/wakunode2 \
  --dns-discovery:true \
  --dns-discovery-url:[DNS NODE LIST] \
  --dns-discovery-name-server:[DNS NAME SERVER IP]
```

For instance, consider a `nwaku` node that enables `DNS Discovery`, connects to a DNS node list, and queries the IPs `1.1.1.1` and `1.0.0.1`:

```bash
./build/wakunode2 \
  --dns-discovery:true \
  --dns-discovery-url:enrtree://AOGECG2SPND25EEFMAJ5WF3KSGJNSGV356DSTL2YVLLZWIV6SAYBM@test.waku.nodes.status.im \
  --dns-discovery-name-server:1.1.1.1 \
  --dns-discovery-name-server:1.0.0.1
```

## Configure Discv5

To enable [Discv5](/overview/concepts/discv5) in a `nwaku` node, use the following configuration options:

- `discv5-discovery`: Enables Discv5 on the node (disabled by default).
- `discv5-bootstrap-node`: ENR for Discv5 routing table bootstrap node. You can repeat this option to provide multiple bootstrap entries.

```bash
./build/wakunode2 \
  --discv5-discovery:true \
  --discv5-bootstrap-node:[DISCV5 ENR BOOTSTRAP ENTRY 1] \
  --discv5-bootstrap-node:[DISCV5 ENR BOOTSTRAP ENTRY 2]
```

For instance, consider a `nwaku` node that enables `Discv5` and bootstraps it's routing table using a static `ENR`:

```bash
./build/wakunode2 \
  --discv5-discovery:true \
  --discv5-bootstrap-node:enr:-IO4QDxToTg86pPCK2KvMeVCXC2ADVZWrxXSvNZeaoa0JhShbM5qed69RQz1s1mWEEqJ3aoklo_7EU9iIBcPMVeKlCQBgmlkgnY0iXNlY3AyNTZrMaEDdBHK1Gx6y_zv5DVw5Qb3DtSOMmVHTZO1WSORrF2loL2DdWRwgiMohXdha3UyAw
```

:::info
When Discv5 is enabled and used with [DNS Discovery](#configure-dns-discovery), the `nwaku` node will attempt to bootstrap the Discv5 routing table by extracting `ENRs` from peers discovered through DNS.
:::