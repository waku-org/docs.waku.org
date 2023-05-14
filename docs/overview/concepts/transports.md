---
title: Transports in Waku
---

Transports facilitate data packet movement across networks with TCP and UDP being standard protocols. However, alternatives are at lower (Ethernet, Bluetooth) and higher (QUIC) levels. Waku, aiming to be transport agnostic, enables developers to choose and support multiple protocols based on their needs.

The recommended transports for Waku nodes are as follows:

- **TCP:** By default, Waku nodes utilize TCP for communication. Service nodes should employ TCP for listening to and connecting with other nodes.
- **Secure WebSocket:** In browser environments, secure WebSocket is used. Service nodes are encouraged to set up SSL certificates to enable incoming connections from browsers and serve them securely.
- Other protocols like [WebRTC](https://github.com/waku-org/js-waku/issues/20), [WebTransport](https://github.com/waku-org/js-waku/issues/697), and QUIC have been researched and studied for potential integration.

:::info
Waku ensures compatibility and improved communication capabilities by following these recommended transports.
:::