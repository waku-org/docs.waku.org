---
title: Network Domains
hide_table_of_contents: true
---

Waku is a unified and cohesive entity that offers a rich ecosystem with three distinct network interaction domains. These domains serve specialised purposes and contribute to the robust functionality of Waku, forming its foundation.

## Discovery domain

Peer discovery in Waku facilitates locating other nodes within the network. As a modular protocol, Waku incorporates various discovery mechanisms, such as [Discv5](/learn/concepts/discv5) and [Peer Exchange](/learn/concepts/peer-exchange). These mechanisms allow developers to choose the most suitable option(s) for their specific use cases and user environments, including mobile phones, desktop browsers, servers, and more.

## Gossip domain

GossipSub derives its name from the practice within Pub/Sub networks where peers gossip about the messages they have encountered, thus establishing a message delivery network.

Waku employs gossiping through [Relay](/learn/concepts/protocols#relay) to distribute messages across the network. Additionally, Waku introduces [RLN Relay](/learn/concepts/protocols#rln-relay), an experimental mechanism that combines privacy preservation and economic spam protection.

## Request/response domain

Waku provides a set of protocols to optimise its performance in resource-limited environments like low bandwidth or mostly offline scenarios for multiple purposes.

- [Store](/learn/concepts/protocols#store) enables the retrieval of historical messages.
- [Filter](/learn/concepts/protocols#filter) efficiently retrieves a subset of messages to conserve bandwidth.
- [Light Push](/learn/concepts/protocols#light-push) facilitates message publication for nodes with limited bandwidth and short connection windows.

## Overview of protocol interaction

Here is a diagram illustrating the interaction between different protocols within the Waku Network.

```mdx-code-block
import ProtocolInteraction from "@site/diagrams/_protocol-interaction.md";

<ProtocolInteraction />
```