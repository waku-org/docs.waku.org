---
title: Protocols Explained
---

Currently, the main Waku protocols are:

### [Waku Relay](https://rfc.vac.dev/spec/11/)

`WAKU2-RELAY` specifies a Publish/Subscribe approach to peer-to-peer messaging with a strong focus on privacy, censorship-resistance, security and scalability.
Its current implementation is a minor extension of the libp2p GossipSub protocol and prescribes gossip-based dissemination.

An extension of this is `WAKU-RLN-RELAY`, a privacy-preserving economic spam protection mechanism.

### [Waku Filter](https://rfc.vac.dev/spec/12/)

`WAKU2-FILTER` is a protocol that enables subscribing to messages that a peer receives.
It enables a node to access the relay network without the connectivity and bandwidth requirements of relay nodes, but it comes with privacy drawbacks.
Light nodes subscribe to service nodes and only receive the messages they desire.

It makes receiving messages more bandwidth preserving.

### [Waku Store](https://rfc.vac.dev/spec/13/)

DApps running on a phone or in a browser are often offline:
The browser could be closed or mobile app in the background.

[Waku Relay](https://rfc.vac.dev/spec/11/) is a gossip protocol.
As a user, it means that your peers forward you messages they just received.
If you cannot be reached by your peers, then messages are not relayed;
relay peers do **not** save messages for later.

However, [Waku Store](https://rfc.vac.dev/spec/13/) peers do save messages they relay,
allowing you to retrieve them at a later time.
The Waku Store protocol is best-effort and does not guarantee data availability.
Waku Relay or Waku Filter should still be preferred when online;
Waku Store can be used after resuming connectivity:
For example, when the dApp starts.

### [Waku Light Push](https://rfc.vac.dev/spec/19/)

Waku Light Push enables a client to receive a confirmation when sending a message.

The Waku Relay protocol sends messages to connected peers but does not provide any information on whether said peers have received messages.
This can be an issue when facing potential connectivity issues.
For example, when the connection drops easily, or it is connected to a small number of relay peers.

Waku Light Push allows a client to get a response from a remote peer when sending a message.
Note this only guarantees that the remote peer has received the message,
it cannot guarantee propagation to the network.

It also means weaker privacy properties as the remote peer knows the client is the originator of the message.
Whereas with Waku Relay, a remote peer would not know whether the client created or forwarded the message.

You can find Waku Light Push's specifications on [Vac RFC](https://rfc.vac.dev/spec/19/).

`WAKU2-LIGHTPUSH` is a request/response protocol for this.

## Additional Protocols

This is in addition to protocols that specify messages, payloads, and recommended usages.
For example:

- [14/WAKU2-MESSAGE](https://rfc.vac.dev/spec/14) and [26/WAKU2-PAYLOAD](https://rfc.vac.dev/spec/26) for message payloads
- [23/WAKU2-TOPICS](https://rfc.vac.dev/spec/23) and [27/WAKU2-PEERS](https://rfc.vac.dev/spec/27) for recommendations around usage

There are also more experimental libp2p protocols such as
[`WAKU-RLN-RELAY`](https://rfc.vac.dev/spec/17/)

You can find more information on this [here](./research-in-progress.md).
