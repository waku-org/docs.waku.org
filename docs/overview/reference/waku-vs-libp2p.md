---
title: Comparing Waku and libp2p
---

Since Waku is built on top of libp2p, they share a lot of concepts and terminologies between them. However, there are key differences between them that are worth noting.

## Waku as a Service Network

Waku intends to incentivise mechanisms to run nodes, but it is not part of libp2p's scope. Additionally, users or developers do not have to deploy their infrastructure as a prerequisite to use Waku. It is a service network. However, you are encouraged to [run a node](/guides/nodes-and-sdks#run-a-waku-node) to support and decentralise the network.

## Waku as a Keyturn Solution

Waku includes various protocols covering the following domains: privacy preservation, censorship resistance, and platform agnosticism, allowing it to run on any platform or environment.

libp2p does not provide out-of-the-box protocols to enable mostly offline/resource-limited devices, [Store](/overview/concepts/protocols#store)/[Light Push](/overview/concepts/protocols#light-push)/[Filter](/overview/concepts/protocols#filter) caters to those use cases.

## Economic Spam Protection

libp2p does not have strong spam protection guarantees, [RLN Relay](/overview/concepts/protocols#rln-relay) is a protocol being developed by the Waku team towards this goal.
