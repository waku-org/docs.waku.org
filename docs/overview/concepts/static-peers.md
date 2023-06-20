---
title: Static Peers
---

Waku applications have the flexibility to embed bootstrap node addresses directly into their codebase. Developers can either use [static peers operated by Status](https://github.com/waku-org/js-waku/blob/master/packages/core/src/lib/predefined_bootstrap_nodes.ts#L45) or [run a node](/guides/nodes-and-sdks#run-a-waku-node).

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