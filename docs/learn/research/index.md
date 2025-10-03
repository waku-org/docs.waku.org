---
title: Research
hide_table_of_contents: true
sidebar_position: 0
displayed_sidebar: learn
---

## Experimental features

The following features are currently experimental and under research and initial implementation:

### Economic spam resistance

We aim to enable an incentivised spam protection technique to enhance `Relay` by using [Rate Limit Nullifiers (RLN)](https://rfc.vac.dev/vac/32/rln-v1/).
In this advanced method, peers are limited to a certain messaging rate per epoch, and an immediate financial penalty is enforced for spammers who break this rate. You can find more details in the [RLN Relay blog post](https://vac.dev/rln-relay).

### Prevention of denial of service (DoS) and node incentivisation

Denial of service signifies the case where an adversarial peer exhausts another node's service capacity (e.g., by making a large number of requests) and makes it unavailable to the rest of the system. RnD on DoS attack mitigation can be tracked from here: [https://github.com/vacp2p/research/issues/148](https://github.com/vacp2p/research/issues/148).

In a nutshell, peers have to pay for the service they obtain from each other. In addition to incentivising the service provider, accounting also makes DoS attacks costly for malicious peers. The accounting model can be used in `Store` and `Filter` to protect against DoS attacks.

Additionally, along with RLN, this gives node operators who provide a useful service to the network an incentive to perform that service. Read more here: [https://vac.dev/building-privacy-protecting-infrastructure](https://vac.dev/building-privacy-protecting-infrastructure)

You can also read more about the ongoing challenges the Waku team is working on here: [https://github.com/waku-org/research](https://github.com/waku-org/research)

## Research resources

**Research and Studies**: Protocol simulations and theoretical analysis to support the design of Waku protocols. The protocol definitions are on the [Waku RFCs](https://rfc.vac.dev/waku) website.

**Benchmarks**: Results of implementations and engineering-related benchmarks for Waku clients.

## Research papers

Waku also has the following published research papers:

- [**WAKU-RLN-RELAY: Privacy-Preserving Peer-to-Peer Economic Spam Protection**](https://arxiv.org/abs/2207.00117)
- [**Message Latency in Waku Relay with Rate Limiting Nullifiers**](https://eprint.iacr.org/2024/1073)
- [**Waku: A Family of Modular P2P Protocols For Secure & Censorship-Resistant Communication**](https://arxiv.org/abs/2207.00038)
- [**The Waku Network as Infrastructure for dApps**](https://ieeexplore.ieee.org/document/10646404)
