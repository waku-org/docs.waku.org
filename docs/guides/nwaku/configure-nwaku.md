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

You can set up an IPv4 DNS domain name that resolves to the public IPv4 address of a node using the `dns4-domain-name` option. This allows the node's publicly announced multiaddrs to use the `/dns4` scheme.

```bash
./build/wakunode2 --dns4-domain-name=[DOMAIN NAME]
```

For example, consider the domain name `node.example.com`, which resolves to a `nwaku` node:

```bash
./build/wakunode2 --dns4-domain-name=node.example.com
```

Nodes with a domain name and secure WebSocket configured will generate a discoverable ENR with `/wss` multiaddr and `/dns4` domain name, essential for verifying domain certificates when connecting securely.

:::info
This example describes configuring a domain name that resolves to your node's IP address and is unrelated to [DNS Discovery](/overview/concepts/dns-discovery).
:::

## Configure Store Protocol and Message Store

To enable `nwaku` to be a [store service node](/overview/concepts/protocols#store), use the following configuration options:

- `store`: Enables `Waku Store` protocol on the node (disabled by default).
- `store-message-retention-policy`: Retention policy of the store node (how long messages will be persisted). Two different retention policies are supported:
	- Time retention policy: `time:<duration-in-seconds>` (e.g., `time:14400`)
	- Capacity retention policy: `capacity:<messages-count>` (e.g, `capacity:25000`)
	- Set this option to an empty string to disable the retention policy.
- `store-message-db-url`: Database connection URL for persisting messages in the [SQLAlchemy database URL format](https://docs.sqlalchemy.org/en/20/core/engines.html#database-urls). Setting this option to an empty string will instruct the node to use the fallback in-memory message store.

```bash
./build/wakunode2 \
  --store=true \
  --store-message-retention-policy=[MESSAGE RETENTION POLICY] \
  --store-message-db-url=[DATABASE CONNECTION URL]
```

For example, consider a `nwaku` node that is configured to be a `Store` protocol and retain messages received in the last `15,000` seconds:

```bash
./build/wakunode2 \
  --store=true \
  --store-message-retention-policy=time:15000 \
  --store-message-db-url=sqlite://store.sqlite3
```

You can configure `nwaku` as a `Waku Store` client using the `storenode` option. This allows the node to query peers for historical messages but not store any message itself.

```bash
./build/wakunode2 --storenode=[STORE PEER MULTIADDR]
```

For example, consider a `nwaku` node that does not persist messages but can query peers for historical messages:

```bash
./build/wakunode2 --storenode=/dns4/node-01.ac-cn-hongkong-c.wakuv2.prod.statusim.net/tcp/30303/p2p/16Uiu2HAm4v86W3bmT1BiH6oSPzcsSr24iDQpSN5Qa992BCjjwgrD
```