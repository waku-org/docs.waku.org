---
title: Peer Discovery
---

When initializing a Waku node, it must connect with other peers to enable message sending, receiving, and retrieval. To achieve this, a discovery mechanism is employed to locate other peers in the network. This process is known as bootstrapping.

Once a connection is established, the node must actively seek out additional peers to have:

- Sufficient peers in the [Relay](/overview/concepts/protocols#relay) mesh: The goal is to have at least 6 peers in the mesh. This ensures a robust network where messages can be efficiently relayed.
- Reserve peers for backup: It is essential to have a surplus of peers available as reserves. These reserves are backups when the current peers become overloaded or experience unexpected disconnections.
- Peers with specific capabilities: The node seeks out peers with specific capabilities, such as [Store](/overview/concepts/protocols#store), [Light Push](/overview/concepts/protocols#light-push), or [Filter](/overview/concepts/protocols#filter). This allows for targeted interactions and enhanced functionality based on the desired capabilities.

Waku supports multiple peer discovery mechanisms, such as:

- [Configuring Static Peers](/overview/concepts/static-peers)
- [Peer Discovery via DNS](/overview/concepts/dns-discovery)
- [Discv5 Ambient Peer Discovery](/overview/concepts/discv5)
- [Peer Exchange](/overview/concepts/peer-exchange)