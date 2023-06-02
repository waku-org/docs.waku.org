---
title: Research in Progress
---

The following features are currently experimental and under research and initial implementation:

## Economic Spam Resistance

We aim to enable an incentivized spam protection technique to enhance `Relay` by using [Rate Limit Nullifiers (RLN)](https://rfc.vac.dev/spec/32/). In this advanced method, peers are limited to a certain messaging rate per epoch, and an immediate financial penalty is enforced for spammers who break this rate. You can find more details in the [RLN Relay blog post](https://vac.dev/rln-relay).

We have prepared a PoC implementation of this method in JS: <https://examples.waku.org/rln-js/>

## Prevention of Denial of Service (DoS) and Node Incentivization

Denial of service signifies the case where an adversarial peer exhausts another node's service capacity (e.g., by making a large number of requests) and makes it unavailable to the rest of the system. RnD on DoS attack mitigation can tracked from here: <https://github.com/vacp2p/research/issues/148>.

In a nutshell, peers have to pay for the service they obtain from each other. In addition to incentivizing the service provider, accounting also makes DoS attacks costly for malicious peers. The accounting model can be used in `Store` and `Filter` to protect against DoS attacks.

Additionally, along with RLN, this gives node operators who provide a useful service to the network an incentive to perform that service. Read more here: <https://vac.dev/building-privacy-protecting-infrastructure>

You can also read more about the ongoing challenges the Waku team is working on here: <https://github.com/waku-org/research>
