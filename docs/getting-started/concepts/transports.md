---
title: Transports
---

Transports help move data packets across a network by establishing connections between peers. They define the rules and protocols to ensure efficient network transmission, routing, and data delivery.

Waku is a transport-agnostic framework that allows developers to choose and support multiple protocols according to their requirements. For Waku nodes, the following transports are recommended:

- **TCP:** By default, Waku nodes utilize TCP for communication. Service nodes should employ TCP for listening to and connecting with other nodes.
- **Secure WebSocket:** In browser environments, secure WebSocket is used. Service nodes are encouraged to set up SSL certificates to enable incoming connections from browsers and serve them securely.
- Other protocols like [WebRTC](https://github.com/waku-org/js-waku/issues/20), [WebTransport](https://github.com/waku-org/js-waku/issues/697), and QUIC have been researched and studied for potential integration.

:::info
Waku ensures compatibility and improved communication capabilities by following these recommended transports.
:::