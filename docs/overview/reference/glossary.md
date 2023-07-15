---
title: Glossary
---

# Waku Docs Glossary

Definitions and usage of the terminology used in the Waku ecosystem.

### Bootstrapping

Bootstrapping is the initial entry point of a [node](#node) to the [Waku Network](#waku). Once connected, other [peer discovery](#peer-discovery) methods can be employed to locate other [peers](#peer) in the network.

### [Content Topic](/overview/concepts/content-topics)

A content topic is a string attached to [messages](#waku-message) to enable [protocol-level](#protocol) features like selective message processing and retrieval based on specific criteria.

### [Dappnode](https://dappnode.com/)

Dappnode is an open-source platform that simplifies the hosting and management of decentralized applications and blockchain nodes, including [Waku](#waku).

### [Discv5](/overview/concepts/discv5)

Discv5 is a [peer discovery](#peer-discovery) mechanism using a Distributed Hash Table (DHT) to store [ENR](#enr) records, providing censorship resistance, load distribution, and enhanced network resilience.

### [DNS Discovery](/overview/concepts/dns-discovery)

DNS discovery is a [peer discovery](#peer-discovery) mechanism that allows the retrieval of an [ENR](#enr) tree from the TXT field of a domain name, enabling the storage of [node](#node) connection details and promoting decentralization.

### [ENR](https://rfc.vac.dev/spec/31/)

Ethereum Node Record (ENR) is a specification used to represent and identify [nodes](#node), facilitating [discovery](#peer-discovery) and communication within the network. Besides connection details, `ENR` also includes node configuration information like enabled protocol and shards.

### [Filter](/overview/concepts/protocols#filter)

Filter is a [protocol](#protocol) that enables [light nodes](#light-node) to selectively subscribe to specific [messages](#waku-message) transmitted by [peers](#peer) using [content topics](#content-topic). It is designed to be a lightweight alternative for accessing the [Relay](#relay) network.

### [GossipSub](/overview/concepts/network-domains#gossip-domain)

GossipSub is a [protocol](#protocol) for efficient and scalable information dissemination in decentralized networks commonly used in blockchain systems.

### [Libp2p](https://libp2p.io/)

Libp2p is a modular network stack and protocol suite that allows developers to build decentralized, peer-to-peer applications across various network protocols.

### Light Node

A light node is a [resource-limited](#resource-limited) device or client that leverages service nodes to access the [Relay](#relay) network.

### [Light Push](/overview/concepts/protocols#light-push)

Light push is a protocol enabling [light nodes](#light-node) to send [messages](#waku-message) to the [Relay](#relay) network and receive acknowledgments confirming that a [peer](#peer) has received them.

### Mostly Offline

Mostly offline devices are clients who spend most of their time offline or disconnected from the internet and only occasionally to the internet and [Waku Network](#waku). Examples include browsers and mobile phones.

### Node

A node is a device or client that implements Waku [protocols](#protocol) and leverages the [Waku Network](#waku) to enable secure and private peer-to-peer Web3 communication.

### Node Key

A node key is a [Secp256k1](https://en.bitcoin.it/wiki/Secp256k1) (64 char hex string) private key for generating the [PeerID](#peer-id), [listening](#transport) addresses, and [discovery](#peer-discovery) addresses of a Waku node.

### Payload

The payload field in a [Waku Message](#waku-message) contains the application data, serving as the business logic message transmitted between clients over Waku. Applications can encrypt the payload or employ encryption methods specified in [Waku Message Payload Encryption](#waku-message-payload-encryption).

### Peer

A peer refers to other [nodes](#node) and participants of the [Waku Network](#waku) with whom communication and interaction are possible.

### [Peer Discovery](/overview/concepts/peer-discovery)

Peer discovery is when a [node](#node) locates and gets information about other [peers](#peer) in the [Waku Network](#waku).

### [Peer Exchange](/overview/concepts/peer-exchange)

Peer exchange is a [peer discovery](#peer-discovery) mechanism that enables [light nodes](#light-node) to request and receive peers from other nodes in the network, allowing them to bootstrap and expand their connections without depending on [Discv5](#discv5).

### Peer ID

`PeerID` is the unique identifier of a [node](#node) in the [Waku Network](#waku) generated from the cryptographic hash of the node's public key.

### [Protocol](/overview/concepts/protocols)

A protocol is a set of rules that enables [nodes](#node) within the [Waku Network](#waku) to perform various functionalities such as message sending, relaying, filtering, storing, retrieving, and more.

### Pub/Sub

Publish/Subscribe (Pub/Sub) is an asynchronous messaging pattern where publishers send messages to topics, and subscribers receive messages from topics of interest, allowing efficient one-to-many communication.

### Pub/Sub Topic

A Pub/Sub topic is a string that serves as an identifier for the topic of interest among [GossipSub](#gossipsub) peers. Peers interested in the same topic are likely to maintain a connection and forward messages received on that topic.

### [Rate Limit Nullifiers](https://rfc.vac.dev/spec/32/)

Rate Limit Nullifiers (RLN) are a construct based on zero-knowledge proofs that enables rate limiting functionality while preserving the users's anonymity.

### [Relay](/overview/concepts/protocols#relay)

Relay is a [protocol](#protocol) that extends the [GossipSub protocol](#gossipsub) to enable secure and censorship-resistant [message](#waku-message) sending and receiving among [peers](#peer) while preserving privacy. It also scales the [Waku Network](#waku) to accommodate many nodes efficiently.

### Resource-Limited

Resource-limited refers to environments or devices restricting available resources, including bandwidth, CPU, memory, disk, and battery power.

### [RLN Relay](/overview/concepts/protocols#rln-relay)

RLN Relay is an extension of the [Relay protocol](#relay) that uses [Rate Limit Nullifiers (RLN)](#rate-limit-nullifiers) to prevent spam economically by enforcing a rate limit on messages over time, imposing penalties, and facilitating network removal for spammers.

### [SDK](/guides/nodes-and-sdks)

SDKs are tools, libraries, and resources to integrate Waku's private, secure, and censorship-free communication features into various applications.

### [Store](/overview/concepts/protocols#store)

Store is a [protocol](#protocol) that enables the storage of relayed [messages](#waku-message) in the network, allowing offline peers to retrieve missed messages upon reconnecting to the network.

### [Transport](/overview/concepts/transports)

A transport is a network mechanism that establishes connections between [peers](#peer) and enables efficient transmission, routing, and delivery of data packets.

### Waku

Waku is a family of private, secure, decentralized, and peer-to-peer Web3 communication [protocols](#protocol) designed to operate in [resource-limited](#resource-limited) environments and suitable for [node](#node) or desktop application use. Additionally, these protocols collectively form the Waku Network.

### [Waku Message](/overview/concepts/protocols#waku-message)

Waku Message defines the structure of messages in the [Waku Network](#waku), including the [content topic](#content-topic), [payload](#payload), and metadata for application-specific processing.

### [Waku Message Payload Encryption](https://rfc.vac.dev/spec/26/)

Waku Message Payload Encryption provides guidelines for implementing secure and private communication in the [Waku Network](#waku). It covers encryption, decryption, and signing methods for message [payloads](#payload), focusing on confidentiality, authenticity, integrity, and unlinkability.

### [Waku Noise](https://rfc.vac.dev/spec/35/)

Waku Noise is a specified way to use the [Noise Protocol Framework](http://noiseprotocol.org/) to build protocols that enable secure key-exchange mechanisms for encrypted communication with confidentiality, authenticity, integrity, strong forward secrecy, and identity-hiding properties.