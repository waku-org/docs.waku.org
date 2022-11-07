---
title: Motivation and goals
---

Waku as a family of protocols is designed to have a set of properties that are useful for many applications:

1. **Generalized messaging.**

Many applications require some form of messaging protocol to communicate between different subsystems or different nodes.
This messaging can be human-to-human or machine-to-machine or a mix.
Waku is designed to work for all these scenarios.

2. **Peer-to-peer.**

Applications sometimes have requirements that make them suitable for peer-to-peer solutions:

- Censorship-resistant with no single point of failure
- Adaptive and scalable network
- Shared infrastructure/service network

3. **Runs anywhere.**

Applications often run in restricted environments, where resources or the environment is restricted in some fashion.
For example:

- Limited bandwidth, CPU, memory, disk, battery, etc
- Not being publicly connectable
- Only being intermittently connected; mostly-offline

4. **Privacy-preserving.**

Applications often have a desire for some privacy guarantees, such as:

- Pseudonymity and not being tied to any personally identifiable information (PII)
- Metadata protection in transit
- Various forms of unlinkability, etc

5. **Modular design.**

Waku nodes are [adaptive](https://rfc.vac.dev/spec/30/): you can turn several dials depending on your use case and environment.

For example:

- Low privacy/low resource usage vs high privacy/increased latency + bandwidth usage
- Providing resources to the network vs consuming resources
- Stronger guarantees for spam protection vs economic registration cost
