---
title: Protocols in Waku
---

Waku takes a modular approach, providing a range of protocols that enable applications to control the trade-offs involved in the [Anonymity Trilemma](https://eprint.iacr.org/2017/954.pdf). This flexibility empowers applications to make informed choices regarding the desired balance between anonymity, scalability, and latency. Here are the main protocols provided by Waku:

### [Waku Relay](https://rfc.vac.dev/spec/11/)

`WAKU2-RELAY` is a privacy-focused peer-to-peer messaging protocol that extends the `libp2p GossipSub` protocol. It utilizes a Pub/Sub approach to enable secure communication channels, encryption, and protection against censorship. With a strong emphasis on privacy, `Waku Relay` ensures scalability, allowing many peers and messages to coexist within the network.

### [Waku Filter](https://rfc.vac.dev/spec/12/)

`WAKU2-FILTER` is a protocol enabling peers to subscribe to specific messages from other peers. It is designed for devices with limited bandwidth, serving as a lighter alternative to [Waku Relay](#waku-relay). Unlike relay nodes, `Waku Filter` allows light nodes to subscribe to service nodes and receive only the messages they are interested in. This optimizes bandwidth consumption but may involve privacy compromises. Nonetheless, `Waku Filter` efficiently delivers desired messages within bandwidth constraints.

### [Waku Store](https://rfc.vac.dev/spec/13/)

`WAKU2-STORE` is a protocol that allows the querying of messages received through the relay protocol and stored by nodes. It supports retrieving historical messages with pagination. Unlike [Waku Relay](#waku-relay), which doesn't save messages for offline users, `Waku Store` peers retain relayed messages for later retrieval.

:::info
Data availability is not guaranteed with `Waku Store`. [Waku Relay](#waku-relay) or [Waku Filter](#waku-filter) are preferred for online usage, while `Waku Store` is suitable for retrieving messages after reconnecting to the network, like when a dApp starts.
:::

### [Waku Light Push](https://rfc.vac.dev/spec/19/)

`WAKU2-LIGHTPUSH` is a [Request/Reply](/overview/concepts/network-domains#requestreply-domain) protocol for Waku's light nodes with limited bandwidth and short connection windows. It enables clients to receive a confirmation when sending messages, indicating that at least one node has received them. However, using `Waku Light Push` compromises privacy as the remote peer becomes aware of the message originator.

:::info
Please note that `Waku Light Push` confirms receipt by the remote peer but doesn't guarantee network-wide propagation.
:::

## Additional Protocols

### [Waku Message](https://rfc.vac.dev/spec/14)

`WAKU2-MESSAGE` specifies the message structure used in the Waku network. It defines metadata fields, such as content topics and timestamps, that other Waku protocols can use.

### [Waku Payload](https://rfc.vac.dev/spec/26)

`WAKU2-PAYLOAD` provides guidelines for implementing secure and private communication in the Waku network. It covers encryption, decryption, and signing methods for message payloads, focusing on confidentiality, authenticity, integrity, and unlinkability.

### [Waku RLN Relay](https://rfc.vac.dev/spec/17/)

The `WAKU2-RLN-RELAY` protocol extends the [Waku Relay](#waku-relay) protocol by adding spam protection using [Rate Limiting Nullifiers (RLN)](https://rfc.vac.dev/spec/32/). It enforces a global messaging rate for all peers to prevent spam in the Waku network. Spammers face financial penalties and removal from the system. This protocol provides efficient and economic spam prevention suitable for resource-constrained environments.