---
title: Node Discovery Mechanisms
---

When initializing a Waku node, it must connect with other nodes to enable message sending, receiving, and retrieval. To achieve this, a discovery mechanism is employed to locate other nodes where no connections are present. This process is known as bootstrapping.

After establishing a connection, the node must actively seek out additional peers to have:

- Sufficient peers in the `Waku Relay` mesh: The goal is to have at least 6 peers in the mesh. This ensures a robust network where messages can be efficiently relayed.
- Reserve peers for backup: It is essential to have a surplus of peers available as reserves. These reserves are backups when the current peers become overloaded or experience unexpected disconnections.
- Peers with specific Waku capabilities: The node seeks out peers with specific Waku capabilities, such as `Store`, `Light Push`, or `Filter`. This allows for targeted interactions and enhanced functionality based on the desired capabilities.

## Predefined Bootstrap Nodes

Waku applications have the flexibility to embed bootstrap node addresses directly into their codebase. Developers can opt to utilize either the [pre-deployed nodes by Status](https://github.com/waku-org/js-waku/blob/master/packages/core/src/lib/predefined_bootstrap_nodes.ts#L45) or [set up their nodes](https://github.com/waku-org/nwaku/tree/master/docs/operators) per their preference.

#### Pros

- Low latency.
- Low resource requirements.

#### Cons

- Vulnerable to censorship: Node IPs can be blocked or restricted.
- Limited scalability: The number of nodes is fixed and cannot easily be expanded.
- Maintenance challenges: Updating the node list requires modifying the code, which can be cumbersome and less maintainable.

## [DNS Discovery](https://rfc.vac.dev/spec/31/)

Built upon the foundation of [EIP-1459: Node Discovery via DNS](https://eips.ethereum.org/EIPS/eip-1459), DNS Discovery allows for registering an `ENR` tree in the `TXT` field of a domain name. This innovative approach enables the storage of essential node connection details, including IP, port, and multiaddr, utilizing the standardized [ENR format](https://rfc.vac.dev/spec/31/).

This bootstrapping method allows anyone to register and publish a domain name for the network, fostering increased decentralization.

#### Pros

- Low latency, low resource requirements.
- Easy bootstrap list updates by modifying the domain name, eliminating the need for code changes.
- Ability to reference a larger list of nodes by including other domain names in the code or ENR tree.

#### Cons

- Vulnerable to censorship: Domain names can be blocked or restricted.
- Limited scalability: The number of nodes is fixed, and operators need to provide their `ENR` to the domain owner for listing.

## [Discv5](https://rfc.vac.dev/spec/33/)

`Discv5` is a decentralized and efficient peer discovery method for the Waku network. It utilizes a [Distributed Hash Table (DHT)](https://en.wikipedia.org/wiki/Distributed_hash_table) for storing `ENR` records, providing resistance to censorship. `Discv5` offers a global view of participating nodes, enabling random sampling for load distribution. It uses bootstrap nodes as an entry point to the network, providing randomized sets of nodes for mesh expansion. This enhances resilience, load balancing, and security in the Waku network.

#### Pros

- Decentralized with random sampling from a global view.
- Continuously researched and improved.

#### Cons

- Demands high resource allocation.
- Nodes hindered by restrictive NAT setups are unable to run this protocol.

## [Peer Exchange](https://rfc.vac.dev/spec/34/)

The primary objective of this protocol is to facilitate peer connectivity for resource-restricted devices. The peer exchange protocol enables lightweight nodes to request peers from other nodes within the network. Light nodes can bootstrap and expand their mesh independently without relying on `Discv5` or bootstrap nodes.

:::info
This protocol is intended for situations where the use of `Discv5` is not feasible.
:::

#### Pros

- Low resource requirements.
- Decentralized with random sampling of nodes from a global view using `Discv5`.

#### Cons

- Decreased anonymity.
- Imposes additional load on responder nodes.
