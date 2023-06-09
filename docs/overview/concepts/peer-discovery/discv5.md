---
title: Discv5
---

`Discv5` is a decentralized and efficient peer discovery mechanism for the Waku Network. It uses a [Distributed Hash Table (DHT)](https://en.wikipedia.org/wiki/Distributed_hash_table) for storing `ENR` records, providing resistance to censorship. `Discv5` offers a global view of participating nodes, enabling random sampling for load distribution. It uses bootstrap nodes as an entry point to the network, providing randomized sets of nodes for mesh expansion. Please refer to the [Discv5](https://rfc.vac.dev/spec/33/) specification to learn more.

#### Pros

- Decentralized with random sampling from a global view.
- Continuously researched and improved.

#### Cons

- Requires lots of connections and involves frequent churn.
- Relies on User Datagram Protocol (UDP), which is not supported in web browsers.