---
title: Node Configuration Options
---

Here are the available node configuration options, along with their default values and descriptions:

## Application-Level Config

| Name | Default Value | Description |
| - | - | - |
| `config-file` |  | Loads configuration from a TOML file (cmd-line parameters take precedence) |
| `protected-topic` | `newSeq[ProtectedTopic](0)` | Topics and its public key to be used for message validation, topic:pubkey. Argument may be repeated |

## Log Config

| Name | Default Value | Description |
| - | - | - |
| `log-level` | `logging.LogLevel.INFO` | Sets the log level for process. Supported levels: TRACE, DEBUG, INFO, NOTICE, WARN, ERROR or FATAL |
| `log-format` | `logging.LogFormat.TEXT` | Specifies what kind of logs should be written to stdout. Supported formats: TEXT, JSON |

## General Node Config

| Name | Default Value | Description |
| - | - | - |
| `agent-string` | `nwaku` | Node agent string which is used as identifier in network |
| `nodekey` |  | P2P node private key as 64 char hex string |
| `listen-address` | `defaultListenAddress()` | Listening address for LibP2P (and Discovery v5, if enabled) traffic |
| `tcp-port` | `60000` | TCP listening port |
| `ports-shift` | `0` | Add a shift to all port numbers |
| `nat` | any | Specify method to use for determining public address. Must be one of: any, none, upnp, pmp, extip:<IP\> |
| `ext-multiaddr` |  | External multiaddresses to advertise to the network. Argument may be repeated |
| `max-connections` | `50` | Maximum allowed number of libp2p connections |
| `peer-store-capacity` |  | Maximum stored peers in the peerstore |
| `peer-persistence` | `false` | Enable peer persistence |

## DNS Addrs Config

| Name | Default Value | Description |
| - | - | - |
| `dns-addrs` | `true` | Enable resolution of `dnsaddr`, `dns4` or `dns6` multiaddrs |
| `dns-addrs-name-server` | `["1.1.1.1", "1.0.0.1"]` | DNS name server IPs to query for DNS multiaddrs resolution. Argument may be repeated |
| `dns4-domain-name` |  | The domain name resolving to the node's public IPv4 address |

## Relay Config

| Name | Default Value | Description |
| - | - | - |
| `relay` | `true` | Enable relay protocol: true\|false |
| `relay-peer-exchange` | `false` | Enable gossipsub peer exchange in relay protocol: true\|false |
| `rln-relay` | `false` | Enable spam protection through rln-relay: true\|false |
| `rln-relay-cred-path` |  | The path for persisting rln-relay credential |
| `rln-relay-membership-index` | `0` | The index of credentials to use |
| `rln-relay-membership-group-index` | `0` | The index of credentials to use, within a specific rln membership set |
| `rln-relay-pubsub-topic` | `/waku/2/default-waku/proto` | The pubsub topic for which rln-relay gets enabled |
| `rln-relay-content-topic` | `/toy-chat/3/mingde/proto` | The content topic for which rln-relay gets enabled |
| `rln-relay-dynamic` | `false` | Enable  waku-rln-relay with on-chain dynamic group management: true\|false |
| `rln-relay-id-key` |  | Rln relay identity secret key as a Hex string |
| `rln-relay-id-commitment-key` |  | Rln relay identity commitment key as a Hex string |
| `rln-relay-eth-account-address` |  | Account address for the Ethereum testnet Sepolia |
| `rln-relay-eth-account-private-key` |  | Account private key for the Ethereum testnet Sepolia |
| `rln-relay-eth-client-address` | `ws://localhost:8540/` | WebSocket address of an Ethereum testnet client e.g., ws://localhost:8540/ |
| `rln-relay-eth-contract-address` |  | Address of membership contract on an Ethereum testnet |
| `rln-relay-cred-password` |  | Password for encrypting RLN credentials |
| `rln-relay-tree-path` |  | Path to the RLN merkle tree sled db (https://github.com/spacejam/sled) |
| `staticnode` |  | Peer multiaddr to directly connect with. Argument may be repeated |
| `keep-alive` | `false` | Enable keep-alive for idle connections: true\|false |
| `topic` | `["/waku/2/default-waku/proto"]` | Default topic to subscribe to. Argument may be repeated |

## Store and Message Store Config

| Name | Default Value | Description |
| - | - | - |
| `store` | `false` | Enable/disable waku store protocol |
| `storenode` |  | Peer multiaddress to query for storage |
| `store-message-retention-policy` | time:172800 | Message store retention policy. Time retention policy: 'time:<seconds\>'. Capacity retention policy: 'capacity:<count\>'. Set to 'none' to disable |
| `store-message-db-url` | `sqlite://store.sqlite3` | The database connection URL for persistent storage |
| `store-message-db-vacuum` | `false` | Enable database vacuuming at start. Only supported by SQLite database engine |
| `store-message-db-migration` | `true` | Enable database migration at start |
| `store-resume-peer` |  | Peer multiaddress to resume the message store at boot |

## Filter Config

| Name | Default Value | Description |
| - | - | - |
| `filter` | `false` | Enable filter protocol: true\|false |
| `filternode` |  | Peer multiaddr to request content filtering of messages |
| `filter-timeout` | `14400 # 4 hours` | Timeout for filter node in seconds |

## Light Push Config

| Name | Default Value | Description |
| - | - | - |
| `lightpush` | `false` | Enable lightpush protocol: true\|false |
| `lightpushnode` |  | Peer multiaddr to request lightpush of published messages |

## JSON-RPC Config

| Name | Default Value | Description |
| - | - | - |
| `rpc` | `true` | Enable Waku JSON-RPC server: true\|false |
| `rpc-address` | `127.0.0.1` | Listening address of the JSON-RPC server |
| `rpc-port` | `8545` | Listening port of the JSON-RPC server |
| `rpc-admin` | `false` | Enable access to JSON-RPC Admin API: true\|false |
| `rpc-private` | `false` | Enable access to JSON-RPC Private API: true\|false |

## REST HTTP Config

| Name | Default Value | Description |
| - | - | - |
| `rest` | `false` | Enable Waku REST HTTP server: true\|false |
| `rest-address` | `127.0.0.1` | Listening address of the REST HTTP server |
| `rest-port` | `8645` | Listening port of the REST HTTP server |
| `rest-relay-cache-capacity` | `30` | Capacity of the Relay REST API message cache |
| `rest-admin` | `false` | Enable access to REST HTTP Admin API: true\|false |
| `rest-private` | `false` | Enable access to REST HTTP Private API: true\|false |

## Metrics Config

| Name | Default Value | Description |
| - | - | - |
| `metrics-server` | `false` | Enable the metrics server: true\|false |
| `metrics-server-address` | `127.0.0.1` | Listening address of the metrics server |
| `metrics-server-port` | `8008` | Listening HTTP port of the metrics server |
| `metrics-logging` | `true` | Enable metrics logging: true\|false |

## DNS Discovery Config

| Name | Default Value | Description |
| - | - | - |
| `dns-discovery` | `false` | Enable discovering nodes via DNS |
| `dns-discovery-url` |  | URL for DNS node list in format 'enrtree://<key\>@<fqdn\>' |
| `dns-discovery-name-server` | `["1.1.1.1", "1.0.0.1"]` | DNS name server IPs to query. Argument may be repeated |

## Discv5 Config

| Name | Default Value | Description |
| - | - | - |
| `discv5-discovery` | `false` | Enable discovering nodes via Node Discovery v5 |
| `discv5-udp-port` | `9000` | Listening UDP port for Node Discovery v5 |
| `discv5-bootstrap-node` |  | Text-encoded ENR for bootstrap node. Used when connecting to the network. Argument may be repeated |
| `discv5-enr-auto-update` | `false` | Discovery can automatically update its ENR with the IP address |
| `discv5-table-ip-limit` | `10` | Maximum amount of nodes with the same IP in discv5 routing tables |
| `discv5-bucket-ip-limit` | `2` | Maximum amount of nodes with the same IP in discv5 routing table buckets |
| `discv5-bits-per-hop` | `1` | Kademlia's b variable, increase for less hops per lookup |

## Waku Peer Exchange Config

| Name | Default Value | Description |
| - | - | - |
| `peer-exchange` | `false` | Enable waku peer exchange protocol (responder side): true\|false |
| `peer-exchange-node` |  | Peer multiaddr to send peer exchange requests to. (enables peer exchange protocol requester side) |

## WebSocket Config

| Name | Default Value | Description |
| - | - | - |
| `websocket-support` | `false` | Enable websocket:  true\|false |
| `websocket-port` | `8000` | WebSocket listening port |
| `websocket-secure-support` | `false` | Enable secure websocket:  true\|false |
| `websocket-secure-key-path` |  | Secure websocket key path:   '/path/to/key.txt' |
| `websocket-secure-cert-path` |  | Secure websocket Certificate path:   '/path/to/cert.txt' |

:::tip
To configure your node using the provided configuration options, check out the [Node Configuration Methods](/guides/reference/node-config-methods) guide.
:::