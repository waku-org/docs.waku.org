---
title: Protocols
---

Waku takes a modular approach, providing a range of protocols that enable applications to control the trade-offs involved in the [Anonymity Trilemma](https://eprint.iacr.org/2017/954.pdf). This flexibility empowers applications to make informed choices regarding the desired balance between anonymity, scalability, and latency. Here are the main protocols provided by Waku:

## [Relay](https://rfc.vac.dev/spec/11/)

The `Relay` protocol employs a Pub/Sub architecture to facilitate message routing among nodes. It extends the [libp2p GossipSub protocol](https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/README.md) to create a privacy-focused peer-to-peer messaging protocol that enables secure communication channels, encryption, and protection against censorship.

## [Filter](https://rfc.vac.dev/spec/12/)

The `Filter` protocol allows light nodes to selectively subscribe to specific messages transmitted by other nodes. It is designed to be a lightweight alternative to the `Relay` protocol, particularly tailored for devices with limited bandwidth.

## [Store](https://rfc.vac.dev/spec/13/)

The `Store` protocol is responsible for storing messages relayed on the network, making it possible to query and retrieve them later. This functionality benefits offline nodes by enabling them to retrieve missed messages upon reconnection.

:::info
Using `Relay` and `Filter` protocols is recommended when a node is online, as `Store` does not guarantee data availability. The `Store` protocol is suitable for retrieving messages when connecting to the network, like when a dApp starts.
:::

## [Light Push](https://rfc.vac.dev/spec/19/)

`Light Push` is a [Request/Reply](/overview/concepts/network-domains#requestreply-domain) protocol for nodes with limited bandwidth and short connection windows. It allows a client to receive an acknowledgment when sending messages, indicating that at least one peer has received them.

:::info
While the `Light Push` protocol acknowledges the receipt by the remote peer, it does not guarantee network-wide propagation.
:::

## [Message](https://rfc.vac.dev/spec/14)

`Message` specifies the message structure used in the Waku network. It defines metadata fields, such as content topics and timestamps, that other protocols can use.

## [Payload](https://rfc.vac.dev/spec/26)

`Payload` provides guidelines for implementing secure and private communication in the network. It covers encryption, decryption, and signing methods for message payloads, focusing on confidentiality, authenticity, integrity, and unlinkability.

## [RLN Relay](https://rfc.vac.dev/spec/17/)

The `RLN Relay` protocol extends the `Relay` protocol by adding spam protection using [Rate Limiting Nullifiers (RLN)](https://rfc.vac.dev/spec/32/). It enforces a global messaging rate for all peers to prevent spam in the Waku network. Spammers face financial penalties and removal from the system. This protocol provides efficient and economic spam prevention suitable for resource-constrained environments.