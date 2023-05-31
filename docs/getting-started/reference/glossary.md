---
title: Glossary
---

# Waku Docs Glossary

Definitions and usage of the terminology used in the Waku ecosystem.

### Bootstrapping

Bootstrapping is the initial [peer discovery](#peer-discovery) process where new [nodes](#node) on the network locate and establish connections with one another.

### Content Topic

A content topic is a string attached to [messages](#waku-message) to enable [protocol-level](#protocol) features like selective message processing and retrieval based on specific criteria.

### Dappnode

Dappnode is an open-source platform that simplifies the hosting and management of decentralized applications and blockchain nodes, including [Waku](#waku).

### Discv5

Discv5 is a [peer discovery](#peer-discovery) mechanism using a Distributed Hash Table (DHT) to store [ENR](#enr) records, providing censorship resistance, load distribution, and enhanced network resilience.

### DNS Discovery

DNS discovery is a [peer discovery](#peer-discovery) mechanism that allows the registration of an [ENR](#enr) tree in the TXT field of a domain name, enabling the storage of [node](#node) connection details and promoting decentralization.

### ENR

Ethereum Node Record (ENR) is a specification used to represent and identify [nodes](#node), facilitating [discovery](#peer-discovery) and communication within the network.

### Filter

Filter is a [protocol](#protocol) that enables [light nodes](#light-node) to selectively subscribe to specific [messages](#waku-message) transmitted by [peers](#peer) using [content topics](#content-topic).

### GossipSub

Gossipsub is a [protocol](#protocol) for efficient and scalable information dissemination in decentralized networks commonly used in blockchain systems.

### Light Node

A light node is a [resource-limited](#resource-limited) device or client that selectively subscribes to specific [messages](#waku-message) transmitted by other [peers](#peer) on the network.

### Light Push

Light push is a protocol enabling [light nodes](#light-node) to send [messages](#waku-message) to the [Relay](#relay) network and receive acknowledgments confirming that a [peer](#peer) has received them.

### Node

A node is a device or client that plays an active role in the operation of the [Waku network](#waku), participating to enable secure and private peer-to-peer Web3 communication.

### Noise

Noise is the integration of the Noise Protocol Framework into the [Waku network](#waku) to enable secure key-exchange mechanisms for encrypted communication with confidentiality, authenticity, integrity, strong forward secrecy, and identity-hiding properties.

### Payload

Payload provides guidelines for implementing secure and private communication in the network. It covers encryption, decryption, and signing methods for message payloads, focusing on confidentiality, authenticity, integrity, and unlinkability.

### Peer

A peer refers to other [nodes](#node) and participants of the [Waku network](#waku) with whom communication and interaction are possible.

### Peer Discovery

Peer discovery is the process where a [node](#node) locates and connects with [peers](#peer) to establish communication and exchange information.

### Peer Exchange

Peer exchange is a [peer discovery](#peer-discovery) mechanism that enables [light nodes](#light-node) to request and receive peers from other nodes in the network, allowing them to bootstrap and expand their connections without depending on [Discv5](#discv5).

### Protocol

A protocol is a set of rules that enables [nodes](#node) within the [Waku network](#waku) to perform various functionalities such as message sending, relaying, filtering, storing, retrieving, and more.

### Pub/Sub

Publish/Subscribe (Pub/Sub) is a messaging pattern where publishers distribute messages to subscribers without the direct knowledge of recipients, allowing efficient one-to-many communication.

### Pub/Sub Topic

A Pub/Sub topic is a routing mechanism for messages, indicating a subscription to receive messages on that topic for relay purposes.

### Rate Limit Nullifiers

Rate Limit Nullifiers (RLN) are a construct based on zero-knowledge proofs that provide an anonymous rate-limited messaging framework, preserving message owner anonymity while preventing spam or DoS attacks.

### Relay

Relay is a [protocol](#protocol) that extends the [GossipSub protocol](#gossipsub) to enable secure and censorship-resistant [message](#waku-message) dissemination among [peers](#peer) while preserving privacy.

### Resource-Limited

Resource-limited refers to environments or devices restricting available resources, including bandwidth, CPU, memory, disk, and battery power.

### RLN Relay

RLN Relay is an extension of the [Relay protocol](#relay) that uses [Rate Limit Nullifiers (RLN)](#rate-limit-nullifiers) to prevent spam economically by enforcing bandwidth caps, imposing penalties, and facilitating network removal for spammers.

### SDK

SDKs are tools, libraries, and resources to integrate Waku's private, secure, and censorship-free communication features into various applications.

### Store

Store is a [protocol](#protocol) that enables the storage of relayed [messages](#waku-message) in the network, allowing offline peers to retrieve missed messages upon reconnecting to the network.

### Transport

A transport is a network mechanism that establishes connections between [peers](#peer) and enables efficient transmission, routing, and delivery of data packets.

### Waku

Waku is a family of private, secure, decentralized, and peer-to-peer Web3 communication [protocols](#protocol) designed to operate in [resource-limited](#resource-limited) environments and suitable for [node](#node) or desktop application use.

### Waku Message

Waku Message defines the structure of messages in the [Waku network](#waku), including the [content topic](#content-topic), [payload](#payload), and metadata for application-specific processing.