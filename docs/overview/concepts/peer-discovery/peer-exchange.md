---
title: Peer Exchange
---

The primary objective of this protocol is to facilitate peer connectivity for resource-limited devices. The peer exchange protocol enables lightweight nodes to request peers from other nodes within the network. Light nodes can bootstrap and expand their mesh independently without relying on `Discv5`. Please refer to the [Peer Exchange](https://rfc.vac.dev/spec/34/) specification to learn more.

## Pros

- Low resource requirements.
- Decentralized with random sampling of nodes from a global view using `Discv5`.

## Cons

- Decreased anonymity.
- Imposes additional load on responder nodes.

## Overview

```mdx-code-block
import PeerExchange from "@site/diagrams/_peer-exchange.md";

<PeerExchange />
```