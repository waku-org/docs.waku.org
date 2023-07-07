---
title: Peer Exchange
---

The primary objective of this protocol is to facilitate peer connectivity for resource-limited devices without relying on `Discv5`. The peer exchange protocol enables light nodes to request peers from other nodes within the network. To learn more, please refer to the [Peer Exchange](https://rfc.vac.dev/spec/34/) specification.

:::info
`Peer Exchange` enables requesting random peers from other network nodes without revealing information about their connectivity or neighborhood.
:::

#### Pros

- Low resource requirements.
- Decentralized with random sampling of nodes from a global view using `Discv5`.

#### Cons

- Decreased anonymity.
- Imposes additional load on responder nodes.

## Overview

```mdx-code-block
import PeerExchange from "@site/diagrams/_peer-exchange.md";

<PeerExchange />
```