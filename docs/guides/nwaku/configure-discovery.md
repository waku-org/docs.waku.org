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
wakunode2 \
  --staticnode:[Libp2p MULTIADDR PEER 1] \
  --staticnode:[Libp2p MULTIADDR PEER 2]
```

## Configure DNS Discovery

To enable [DNS Discovery](/overview/concepts/dns-discovery) in a `nwaku` node, use the following configuration options:

- `dns-discovery`: Enables DNS Discovery on the node (disabled by default).
- `dns-discovery-url`: URL for DNS node list in the format `enrtree://<key>@<fqdn>` where `<fqdn>` is the fully qualified domain name and `<key>` is the base32 encoding of the compressed 32-byte public key that signed the list at that location.
- `dns-discovery-name-server` (optional): DNS name server IPs to query. You can repeat this option to provide multiple DNS name servers.

```
wakunode2 \
  --dns-discovery:true \
  --dns-discovery-url:[DNS NODE LIST]
```

## Configure Discv5

You can enable [Discv5](/overview/concepts/discv5) in a `nwaku` node using the `discv5-discovery` and `discv5-bootstrap-node` configuration options. To configure multiple bootstrap entries for the Discv5 routing table, repeat the `discv5-bootstrap-node` option:

```bash
wakunode2 \
  --discv5-discovery:true \
  --discv5-bootstrap-node:[DISCV5 ENR BOOTSTRAP ENTRY 1] \
  --discv5-bootstrap-node:[DISCV5 ENR BOOTSTRAP ENTRY 2]
```

:::info
When Discv5 is enabled and used with [DNS Discovery](#configure-dns-discovery), the `nwaku` node will attempt to bootstrap the Discv5 routing table by extracting `ENRs` from peers discovered through DNS.
:::