---
title: Static Peers
hide_table_of_contents: true
displayed_sidebar: learn
---

Waku applications have the flexibility to embed bootstrap node addresses directly into their codebase. Developers can either use static peers operated by Status or [run a node](/run-node).

#### Pros

- Low latency.
- Low resource requirements.

#### Cons

- Vulnerable to censorship: Node IPs can be blocked or restricted.
- Limited scalability: The number of nodes is fixed and cannot easily be expanded.
- Maintenance challenges: Updating the node list requires modifying the code, which can be cumbersome and involves releasing and deploying.

## Overview

```mdx-code-block
import StaticPeers from "@site/diagrams/_static-peers.md";

<StaticPeers />
```