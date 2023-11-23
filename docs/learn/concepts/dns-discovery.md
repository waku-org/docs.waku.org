---
title: DNS Discovery
hide_table_of_contents: true
---

Built upon the foundation of [EIP-1459: Node Discovery via DNS](https://eips.ethereum.org/EIPS/eip-1459), DNS Discovery allows the retrieval of an `ENR` tree from the `TXT` field of a domain name. This innovative approach enables the storage of essential node connection details, including IP, port, and multiaddr, using the standardised [ENR format](https://rfc.vac.dev/spec/31/).

This bootstrapping method allows anyone to register and publish a domain name for the network, promoting increased decentralisation.

#### Pros

- Low latency, low resource requirements.
- Easy bootstrap list updates by modifying the domain name, eliminating the need for code changes.
- Ability to reference a larger list of nodes by including other domain names in the code or ENR tree.

#### Cons

- Vulnerable to censorship: Domain names can be blocked or restricted.
- Limited scalability: The listed nodes are at risk of being overwhelmed by receiving all queries. Also, operators must provide their `ENR` to the domain owner for listing.

## Overview

```mdx-code-block
import DNSDiscovery from "@site/diagrams/_dns-discovery.md";

<DNSDiscovery />
```