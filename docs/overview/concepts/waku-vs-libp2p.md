---
title: Waku vs libp2p - what's the difference?
---

Since Waku v2 is built on top of libp2p, they share a lot of concepts and terminologies between them. However, there are key differences between them that are worth noting.

### Waku as a service network

Waku offers incentivization mechanisms to run nodes, whereas libp2p does not.

Additionally, a user or a developer does not have to deploy own infra as a prerequisite to use Waku, it is a service network.
However, it is encouraged to [run your own node](https://github.com/status-im/nwaku/tree/master/docs/operators) to support and decentralize the network.

### Waku as a keyturn solution

Waku includes a number of protocol covering the following domains like privacy preservation, censorship resistance, portability/runs anywhere.

libp2p does not provide out of the box protocols to enable mostly offline/resource restricted devices, [WAKU-STORE](https://rfc.vac.dev/spec/13/)/[WAKU-LIGHTPUSH](https://rfc.vac.dev/spec/19/)/[WAKU-FILTER](https://rfc.vac.dev/spec/12/) caters to those use cases.

### Economic spam protection

libp2p does not have strong spam protection guarantees, [RLN (Rate Limit Nullifier)](https://rfc.vac.dev/spec/32/) is a protocol being developed by the Waku team towards this goal.
