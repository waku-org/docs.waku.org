---
title: Introduction to Waku
slug: /
---

:::caution
Waku has risks and limitations as it is still developing and preparing for extensive adoption. However, it is already demonstrating its capabilities by [powering various applications](/powered-by-waku). [Join our community](/community) to stay updated on our progress.
:::

Waku, the standard of Web3 communication, is a family of protocols that offer secure, private, and peer-to-peer communication in a decentralized environment. It is designed to operate in resource-limited environments but can also be used as a node or desktop application.

Waku protocols ensure that users communication remains censorship-resistant and privacy-preserving, giving them complete control over their data. By integrating Waku into your dApp, you can add decentralized communication features to your application without compromising security or privacy.

## Motivation and Goals

The Waku family of protocols is designed for diverse applications due to their properties, such as:

### Generalized

Waku aims to solve the problem of ephemeral messaging between subsystems and nodes through a flexible, secure, and private protocol. It supports human-to-human and machine-to-machine messaging scenarios but is not designed for data storage.

### Peer-to-Peer

Waku is suitable for applications that require a peer-to-peer approach, offering the following advantages:

- Censorship resistance with no single point of failure.
- Adaptive and scalable network.
- Shared infrastructure, leveraging the capabilities of Waku as a service network.

### Platform Agnostic

Waku can run on any platform or environment, even settings with limited resources like bandwidth, CPU, memory, disk, battery, etc. It can also function when the nodes are not publicly connected or are mostly offline.

### Privacy-Preserving

Waku can cater to applications that require privacy guarantees, such as:

- Pseudonymity and not being tied to any Personally Identifiable Information (PII).
- Metadata protection in transit.
- Various forms of [unlinkability](/overview/reference/security-features#anonymityunlinkability).

### Modular Design

Waku nodes are adaptive and can be customized based on the application's requirements and environment. Users can adjust multiple parameters, such as:

- Low privacy/low resource usage vs. high privacy/increased latency + bandwidth usage.
- Providing resources to the network vs. consuming resources.
- Stronger guarantees for spam protection vs. economic registration cost.

These options are part of the [Anonymity Trilemma](https://eprint.iacr.org/2017/954.pdf), which Waku addresses through its adjustable protocol.


### Service Network

Waku provides developers with a convenient solution for building decentralized communication systems, eliminating the need to build a peer-to-peer network from scratch. Node operators can offer multiple services, such as:

- Storing messages for offline devices.
- Enabling bandwidth-saving access to the [Relay](/overview/concepts/protocols#relay) network through [Light Push](/overview/concepts/protocols#light-push) and [Filter](/overview/concepts/protocols#filter) protocols.
- Implementing spam prevention and DoS mitigation features.
- Providing a resilient and shared [Relay](/overview/concepts/protocols#relay) infrastructure that applications can leverage to enhance reliability and efficiency.

## How Does Waku Work?

The [Relay](/overview/concepts/protocols#relay) protocol is the foundation of the Waku Network, which employs a Pub/Sub architecture built on the [libp2p GossipSub protocol](https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/README.md). Additionally, various other Waku protocols have been created to facilitate specific functionalities, including but not limited to:

1. Facilitating the retrieval of historical messages for mostly offline devices.
2. Providing solutions for encrypted communication, such as symmetric encryption, ECIES/asymmetric encryption, and noise handshake-based key turns.
3. Preserving bandwidth usage for resource-limited environments.
4. Implementing economic spam protection (rate limits) while ensuring privacy.
5. Developing methods to protect against mass deanonymization (currently being researched).
6. Designing strategies to scale `Relay/GossipSub` securely.

If you want to learn more about how Waku works, the [WAKU2 RFC](https://rfc.vac.dev/spec/10/) provides an in-depth look under the hood.
