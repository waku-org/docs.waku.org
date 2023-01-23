---
title: Discovery & Bootstrap Nodes
---

Node discovery is the mechanism that enables a Waku node to find other nodes.

When starting a Waku node, it needs to connect to other nodes to be able to send, receive and retrieve messages.
This means there needs to be a discovery mechanism that enables finding other nodes when its initially not connected to any nodes.
This process is called _bootstrapping_.

Once connected, the node needs to find additional peers to have:

- Enough peers in the Waku Relay mesh (target is 6),
- Enough peers in reserve, in case current peers are overloaded or go offline,
- Peers with specific Waku capabilities (e.g. Store, Light Push, Filter).

## Predefined Bootstrap Nodes

An application using Waku can hardcode the addresses of bootstrap nodes directly in their codebase.

You can choose to use Status' deployed nodes, or run your own.

:::info Developers have the choice to run their own [nwaku](https://github.com/status-im/nim-waku/) nodes. Read [Nwaku Service Node](https://github.com/status-im/nwaku/tree/master/docs/operators) to learn how to run your own node.
::::

**Pros:**

- Low latency
- Low resource requirements

**Cons:**

- Prone to censorship: node IPs can be blocked
- Limited: Static number of nodes
- Poor maintainability: Code needs to be changed to update the list

## DNS Discovery

[EIP-1459: Node Discovery via DNS](https://eips.ethereum.org/EIPS/eip-1459) has been implemented in js-waku, nwaku and go-waku with some modification on the [ENR format](https://rfc.vac.dev/spec/31/).

DNS Discovery enables anyone to register an ENR tree in the `TXT` field of a domain name.

_ENR_ is the format used to store node connection details (IP, port, multiaddr, etc).

This enables a separation of software development and operations as dApp developers can include one or several domain names to use for DNS discovery, while operators can handle the update of the dns record.

It also enables more decentralized bootstrapping as anyone can register a domain name and publish it for others to use.

**Pros:**

- Low latency, low resource requirements,
- Bootstrap list can be updated by editing a domain name: no code change is needed,
- Can reference to a greater list of nodes by pointing to other domain names in the code or in the ENR tree.

**Cons:**

- Prone to censorship: domain names can be blocked,
- Limited: Static number of nodes, operators must provide their ENR to the domain owner to get their node listed.

## Discv5

Discovery v5 is an ambient peer discovery method for Waku v2: it is decentralized, efficient, actively researched, and has web3 as its main application area.
As Discv5 uses [DHT](https://en.wikipedia.org/wiki/Distributed_hash_table) to store ENR records, it is more resilient to censorship than DNS discovery.
And one of the main benefits of DHTs is offering a global view over participating nodes. This, in turn, allows sampling random sets of nodes which is important for equally distributing load.

Without discv5 and similar methods, the bootstrap nodes are used as part of the gossipsub mesh. This might put heavy load on these nodes and further, might open pathways to inference attacks. Discv5, on the other hand, uses the bootstrap nodes merely as an entry to the discovery network and can provide random sets of nodes (sampled from a global view) for bootstrapping or expanding the mesh.

**_Pros:_**

- Decentralized; random sampling of nodes from a global view
- Actively researched

**_Cons:_**

- High resource requirements
- Nodes behind restrictive NAT setups cannot run this protocol

## Peer Exchange

While discv5 based ambient peer discovery has many desirable properties, resource restricted nodes and nodes behind restrictive NAT setups cannot run discv5 satisfactory.
With these nodes in mind, [Peer Exchange](https://rfc.vac.dev/spec/34/) was introduced.

The main purpose of this protocol is providing resource restricted devices with peers.
The peer exchange protocol allows resource restricted nodes (light nodes) to ask for peers from other nodes in the network. This allows light nodes to bootstrap and expand their mesh without relying on discv5 or bootstrap nodes.

This protocol should only be used if discv5 is infeasible.

**_Pros:_**

- Low resource requirements
- Decentralized; random sampling of nodes from a global view (via discv5)

**_Cons:_**

- Reduced anonymity
- Cause load on responder nodes
