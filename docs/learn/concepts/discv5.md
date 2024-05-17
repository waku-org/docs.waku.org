---
title: Discv5
hide_table_of_contents: true
---

`Discv5` is a decentralised and efficient peer discovery mechanism for the Waku Network. It uses a [Distributed Hash Table (DHT)](https://en.wikipedia.org/wiki/Distributed_hash_table) for storing `ENR` records, providing resistance to censorship. `Discv5` offers a global view of participating nodes, enabling random sampling for load distribution. It uses bootstrap nodes as an entry point to the network, providing randomised sets of nodes for mesh expansion. Have a look at the [Discv5](https://rfc.vac.dev/waku/standards/core/33/discv5) specification to learn more.

#### Pros

- Decentralised with random sampling from a global view.
- Continuously researched and improved.

#### Cons

- Requires lots of connections and involves frequent churn.
- Relies on User Datagram Protocol (UDP), which is not supported in web browsers.

## Overview

```mdx-code-block
import Discv5 from "@site/diagrams/_discv5.md";

<Discv5 />
```
