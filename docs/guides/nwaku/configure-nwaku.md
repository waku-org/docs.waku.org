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

For example, consider the domain name `nwakunode.com`, which resolves to a `nwaku` node:

```bash
./build/wakunode2 --dns4-domain-name=nwakunode.com
```

Browser nodes can only connect to nodes with a domain name and secure WebSocket (`wss`) configured. These nodes will generate a discoverable ENR with `/wss` as the multiaddr and `/dns4` as the domain name. This configuration is essential for verifying domain certificates when establishing a secure connection.

:::info
This example describes configuring a domain name that resolves to your node's IP address and is unrelated to [DNS Discovery](/overview/concepts/dns-discovery).
:::

## Configure Store Protocol and Message Store

To enable message caching and serve them to network peers, enable the [Store protocol](/overview/concepts/protocols#store) using the following configuration options:

- `store`: Enables storing messages to serve them to peers (disabled by default).
- `store-message-retention-policy`: Retention policy of the store node (how long messages will be persisted). Three different retention policies are supported:
	- Time retention policy: `time:<duration-in-seconds>` (e.g., `time:14400`)
	- Capacity retention policy: `capacity:<messages-count>` (e.g, `capacity:25000`)
  - Size retention policy: `size:<storage-in-MB/GB>` (e.g, `size:512MB` or `size:10GB`)
	- Set this option to `none` to disable the retention policy. If you omit this option, it will default to `time:172800` (48 hours).
- `store-message-db-url`: Database connection URL for persisting messages in the [SQLAlchemy database URL format](https://docs.sqlalchemy.org/en/20/core/engines.html#database-urls). Setting this option to an empty string will instruct the node to use the fallback in-memory message store. If you omit this option, it will default to `sqlite://store.sqlite3`.

```bash
./build/wakunode2 \
  --store=true \
  --store-message-retention-policy=[MESSAGE RETENTION POLICY] \
  --store-message-db-url=[DATABASE CONNECTION URL]
```

For example, consider a `nwaku` node that is configured to be a `Store` protocol and retain messages received in the last `21600` seconds (6 hours):

```bash
./build/wakunode2 \
  --store=true \
  --store-message-retention-policy=time:21600 \
  --store-message-db-url=sqlite://store.sqlite3
```

You can configure `nwaku` as a `Store client` using the `storenode` option. This allows the node to query peers for historical messages but not store any message itself.

```bash
./build/wakunode2 --storenode=[STORE PEER MULTIADDR]
```

For example, consider a `nwaku` node that does not persist messages but can query peers for historical messages:

```bash
./build/wakunode2 --storenode=/dns4/node-01.ac-cn-hongkong-c.wakuv2.prod.statusim.net/tcp/30303/p2p/16Uiu2HAm4v86W3bmT1BiH6oSPzcsSr24iDQpSN5Qa992BCjjwgrD
```

## Generate and Configure a Node Key

Nodes generate [new random key pairs](/overview/reference/glossary#node-key) at each boot, leading to different `multiaddrs`. To maintain consistency, you can use a pre-generated private key with the `nodekey` option:

```bash
./build/wakunode2 --nodekey=[NODE PRIVATE KEY]
```

This option takes a [Secp256k1](https://en.bitcoin.it/wiki/Secp256k1) private key (64-char hex string). On Linux, you can use the OpenSSL `rand` command for a pseudo-random 32-byte hex string:

```bash
openssl rand -hex 32

# 286cae9f2990bfc49dafdd3a9e737f56ddba3656e5e427108cef456fb67680e8
```

On Linux, you can create a reusable key file using OpenSSL. To get the 32-byte private key in hex format, use the `ecparam` command and some standard utilities:

```bash
# Generate key file
openssl ecparam -genkey -name secp256k1 -out my_private_key.pem

# Extract 32-byte private key
openssl ec -in my_private_key.pem -outform DER | tail -c +8 | head -c 32| xxd -p -c 32

# read EC key
# writing EC key
# 286cae9f2990bfc49dafdd3a9e737f56ddba3656e5e427108cef456fb67680e8
```

You can use the output `286cae9f2990bfc49dafdd3a9e737f56ddba3656e5e427108cef456fb67680e8` as a `Node Key` for `nwaku`:

```bash
./build/wakunode2 --nodekey=286cae9f2990bfc49dafdd3a9e737f56ddba3656e5e427108cef456fb67680e8
```

## Configure WebSocket Transport

WebSocket is the only [transport method](/overview/concepts/transports) browser nodes support using [@waku/sdk](/guides/js-waku/). To enable WebSocket in `nwaku` to serve browser peers, use the following configuration options:

- `websocket-support`: Enables WebSocket (`ws`) on the node (disabled by default).
- `websocket-port` (optional): WebSocket listening port. If you omit this option, it will default to `8000`.
- `websocket-secure-support`: Enables Secure WebSocket (`wss`) on the node (disabled by default).
- `websocket-secure-key-path`: Secure WebSocket key path.
- `websocket-secure-cert-path`: Secure WebSocket Certificate path.

```bash
./build/wakunode2 \
  --websocket-support=true \
  --websocket-port=[WEBSOCKET LISTENING PORT] \
  --websocket-secure-support=true \
  --websocket-secure-key-path=[SECURE WEBSOCKET KEY PATH] \
  --websocket-secure-cert-path=[SECURE WEBSOCKET CERTIFICATE PATH]
```

For example, consider a `nwaku` node that enabled WebSocket (unencrypted) for local testing on port `8001`:

```bash
./build/wakunode2 \
  --websocket-support=true \
  --websocket-port=8001
```

Consider a `nwaku` node that enabled Secure WebSocket (encrypted) using its key and certificate (`privkey.pem` and `fullchain.pem`) on port `8002`:

```bash
./build/wakunode2 \
  --websocket-secure-support=true \
  --websocket-secure-key-path=privkey.pem \
  --websocket-secure-cert-path=fullchain.pem \
  --websocket-port=8002
```

:::tip
You can use [Let's Encrypt](https://letsencrypt.org/) or [Certbot](https://certbot.eff.org/) to generate a valid certificate for your `nwaku` node:

```bash
sudo letsencrypt -d <your.domain.name>
```
:::

## Configure REST API Server

Nwaku provides a REST API to interact with the node and Waku Network. To enable the REST API, use the following configuration options:

- `rest`: Enables the REST API server on the node (disabled by default).
- `rest-address` (optional): Listening address of the REST API server. If you omit this option, it will default to `127.0.0.1`.
- `rest-port` (optional): Listening port of the REST API server. If you omit this option, it will default to `8645`.
- `rest-relay-cache-capacity`	(optional): Capacity of the Relay REST API message cache.	If you omit this option, it will default to `30`.
- `rest-admin` (optional): Enables access to REST admin API (disabled by default).
- `rest-private` (optional): Enables access to REST private API (disabled by default).

```bash
./build/wakunode2 \
  --rest=true \
  --rest-address=[REST SERVER LISTENING ADDRESS] \
  --rest-port=[REST SERVER LISTENING PORT] \
  --rest-relay-cache-capacity=[MESSAGE CACHE CAPACITY] \
  --rest-admin=[true|false] \
  --rest-private=[true|false]
```

For example, consider a `nwaku` node that enabled the REST API server on port `9000`:

```bash
./build/wakunode2 \
  --rest=true \
  --rest-port=9000 \
  --rest-address=127.0.0.1
```

Consider a `nwaku` node that enabled the REST `admin` and `private` API with a message cache capacity of `100`:

```bash
./build/wakunode2 \
  --rest=true \
  --rest-admin=true \
  --rest-private=true \
  --rest-relay-cache-capacity=100
```

## Configure Filter Protocol

To enable `nwaku` to serve light clients, enable the [Filter protocol](/overview/concepts/protocols#filter) using the following configuration options:

```bash
./build/wakunode2 --filter=true
```

You can configure `nwaku` as a `Filter client` using the `filternode` and `filter-timeout` options. This allows the node to request content filtering of messages from peers.

```bash
./build/wakunode2 \
  --filternode=[FILTER PEER MULTIADDR] \
  --filter-timeout=[FILTER PEER TIMEOUT]
```

For example, consider a `nwaku` node that requests content filtering of messages from peers with a timeout of `21600` seconds (6 hours):

```bash
./build/wakunode2 \
  --filternode=/dns4/node-01.ac-cn-hongkong-c.wakuv2.prod.statusim.net/tcp/30303/p2p/16Uiu2HAm4v86W3bmT1BiH6oSPzcsSr24iDQpSN5Qa992BCjjwgrD \
  --filter-timeout=21600
```

:::info
If you omit the `filter-timeout` option, it will default to `14400` seconds (4 hours).
:::

## Configure Light Push Protocol

To enable `nwaku` to serve light clients, enable the [Light Push protocol](/overview/concepts/protocols#light-push) using the following configuration options:

```bash
./build/wakunode2 --lightpush=true
```

You can configure `nwaku` as a `Light Push client` using the `lightpushnode` option. This allows the node to request lightpush of published messages from peers.

```bash
./build/wakunode2 --lightpushnode=[LIGHT PUSH PEER MULTIADDR]
```

For example, consider a `nwaku` node that requests lightpush of published messages from peers:

```bash
./build/wakunode2 --lightpushnode=/dns4/node-01.ac-cn-hongkong-c.wakuv2.prod.statusim.net/tcp/30303/p2p/16Uiu2HAm4v86W3bmT1BiH6oSPzcsSr24iDQpSN5Qa992BCjjwgrD
```