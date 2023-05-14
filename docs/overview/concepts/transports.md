---
title: Transports in Waku
---

Waku aims to be transport agnostic, providing flexibility in selecting suitable transports. However, a set of recommended transports is defined to establish a baseline of client interoperability.

The recommended transports for Waku nodes are as follows:

- TCP: By default, Waku nodes utilize TCP for communication. Service nodes should employ TCP for listening to and connecting with other nodes.
- Secure WebSocket: In browser environments, secure WebSocket is used. Service nodes are encouraged to set up SSL certificates to enable incoming connections from browsers and serve them securely.
- Other protocols like [WebRTC](https://github.com/waku-org/js-waku/issues/20), [WebTransport](https://github.com/waku-org/js-waku/issues/697), and QUIC have been investigated and studied for potential integration.

:::note
Waku ensures compatibility and enhanced communication capabilities among nodes by adhering to these recommended transports.
:::