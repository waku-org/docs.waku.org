---
title: Nwaku Configuration Examples
---

This guide provides detailed steps to configure a `nwaku` node for different use cases.

## Connect to Other Peers

To join the Waku Network, nodes must [bootstrap](/overview/reference/glossary#bootstrapping) for an entry point before discovering more peers. Nwaku provides multiple [peer discovery](/overview/concepts/peer-discovery) mechanisms:

- [Configure Static Peers](/guides/nwaku/configure-discovery#configure-static-peers)
- [Configure DNS Discovery](/guides/nwaku/configure-discovery#configure-dns-discovery)
- [Configure Discv5](/guides/nwaku/configure-discovery#configure-discv5)
- [Configure Peer Exchange](/guides/nwaku/configure-discovery#configure-peer-exchange)

## Configure a Domain Name

You can set up an IPv4 DNS domain name that resolves to the public IPv4 address of a node. This allows the node's publicly announced multiaddrs to use the `/dns4` scheme.

```bash
./build/wakunode2 --dns4-domain-name=[DOMAIN NAME]
```

:::info
This example describes configuring a domain name that resolves to your node's IP address and is unrelated to [DNS Discovery](/overview/concepts/dns-discovery).
:::

For example, consider the domain name `node.example.com`, which resolves to a `nwaku` node:

```bash
./build/wakunode2 --dns4-domain-name=node.example.com
```

:::info
Nodes with a domain name and secure WebSocket configured will generate a discoverable ENR with `/wss` multiaddr and `/dns4` domain name, essential for verifying domain certificates when connecting securely.
:::