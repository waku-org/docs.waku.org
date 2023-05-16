---
title: What is Waku?
slug: /
---

Waku is a family of peer-to-peer protocols that offer secure and private communication in a decentralized environment, making it suitable for various decentralized applications (dApps). It is designed to operate in resource-limited environments but can also be used as a node or desktop application.

Waku protocols ensure that users communication remains censorship-resistant and privacy-preserving, giving them complete control over their data. By incorporating Waku into your dApp, you can add decentralized communication features to your application without compromising security or privacy.

## Motivation and Goals

The Waku family of protocols is designed for diverse applications due to their properties, such as:

### Generalized Messaging

Waku aims to solve the problem of ephemeral messaging between subsystems and nodes through a flexible, secure, and private protocol. It supports human-to-human and machine-to-machine messaging scenarios but is not designed for data storage.

### Peer-to-Peer

Waku is suitable for applications that require a peer-to-peer approach, offering the following advantages:

- Censorship resistance with no single point of failure.
- Adaptive and scalable network.
- Shared infrastructure, leveraging the capabilities of Waku as a service network.

### Platform Agnostic

Waku can run on any platform or environment, even in restricted settings with limited resources like bandwidth, CPU, memory, disk, battery, etc. It can also function when the nodes are not publicly connected or are primarily offline.

### Privacy-Preserving

Waku can cater to applications that require privacy guarantees, such as:

- Pseudonymity and not being tied to any personally identifiable information (PII).
- Metadata protection in transit.
- Various forms of unlinkability.

### Modular Design

Waku nodes are adaptive and can be customized based on the application's requirements and environment. Users can adjust several parameters, including:

- Low privacy/low resource usage vs. high privacy/increased latency + bandwidth usage.
- Providing resources to the network vs. consuming resources.
- Stronger guarantees for spam protection vs. economic registration cost.

These options are part of the [Anonymity Trilemma](https://eprint.iacr.org/2017/954.pdf), which Waku addresses through its adjustable protocol.

## How Does Waku Work?

The Waku Relay protocol is the foundation of the Waku Network, which employs a Pub/Sub architecture built on the `libp2p gossipsub` protocol. In addition to this, various other Waku protocols have been created to facilitate specific functionalities, including but not limited to:

1. Facilitating the retrieval of historical messages for primarily offline devices.
2. Providing solutions for encrypted communication, such as symmetric encryption, ECIES/asymmetric encryption, and noise handshake-based key turns.
3. Preserve bandwidth usage for resource-limited environments.
4. Implementing economic spam protection (rate limits) while ensuring privacy.
5. Developing methods to protect against mass deanonymization (currently being researched).
6. Designing strategies to scale [Waku Relay/GossipSub](/overview/concepts/protocols#waku-relay) securely.

If you want to learn more about how Waku operates, the [10/WAKU2](https://rfc.vac.dev/spec/10/) RFC provides an in-depth look under the hood.
