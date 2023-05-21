---
title: Protocols
---

Waku takes a modular approach, providing a range of protocols that enable applications to control the trade-offs involved in the [Anonymity Trilemma](https://eprint.iacr.org/2017/954.pdf). This flexibility empowers applications to make informed choices regarding the desired balance between anonymity, scalability, and latency. Here are the main protocols provided by Waku:

## [Relay](https://rfc.vac.dev/spec/11/)

`Relay` is a privacy-focused peer-to-peer messaging protocol that extends the [libp2p GossipSub protocol](https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/README.md). It utilizes a Pub/Sub architecture to enable secure communication channels, encryption, and protection against censorship. With a strong emphasis on privacy, `Relay` ensures scalability, allowing many peers and messages to coexist within the network.

## [Filter](https://rfc.vac.dev/spec/12/)

`Filter` is a protocol enabling peers to subscribe to specific messages from other peers. It is designed for devices with limited bandwidth, serving as a lighter alternative to `Relay`. Unlike relay nodes, `Filter` allows light nodes to subscribe to service nodes and receive only the messages they are interested in. This optimizes bandwidth consumption but may involve privacy compromises. Nonetheless, `Filter` efficiently delivers desired messages within bandwidth constraints.

## [Store](https://rfc.vac.dev/spec/13/)

`Store` is a protocol that allows the querying of messages received through the relay protocol and stored by nodes. It supports retrieving historical messages with pagination. Unlike `Relay`, which doesn't save messages for offline users, `Store` peers retain relayed messages for later retrieval.

:::info
Data availability is not guaranteed with `Store`. `Relay` or `Filter` are preferred for online usage, while `Store` is suitable for retrieving messages after reconnecting to the network, like when a dApp starts.
:::

## [Light Push](https://rfc.vac.dev/spec/19/)

`Light Push` is a [Request/Reply](/overview/concepts/network-domains#requestreply-domain) protocol for Waku's light nodes with limited bandwidth and short connection windows. It enables clients to receive a confirmation when sending messages, indicating that at least one node has received them. However, using `Light Push` compromises privacy as the remote peer becomes aware of the message originator.

:::info
Please note that `Light Push` confirms receipt by the remote peer but doesn't guarantee network-wide propagation.
:::

## [Message](https://rfc.vac.dev/spec/14)

`Message` specifies the message structure used in the Waku network. It defines metadata fields, such as content topics and timestamps, that other Waku protocols can use.

## [Payload](https://rfc.vac.dev/spec/26)

`Payload` provides guidelines for implementing secure and private communication in the Waku network. It covers encryption, decryption, and signing methods for message payloads, focusing on confidentiality, authenticity, integrity, and unlinkability.

## [RLN Relay](https://rfc.vac.dev/spec/17/)

The `RLN Relay` protocol extends the `Relay` protocol by adding spam protection using [Rate Limiting Nullifiers (RLN)](https://rfc.vac.dev/spec/32/). It enforces a global messaging rate for all peers to prevent spam in the Waku network. Spammers face financial penalties and removal from the system. This protocol provides efficient and economic spam prevention suitable for resource-constrained environments.